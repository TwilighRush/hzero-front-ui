import React, { useCallback, useEffect, useState } from "react";
import { Collapse } from "choerodon-ui";
import { noop } from "lodash";
import styled from "styled-components";
import { Form, DataSet, useDataSet } from "choerodon-ui/pro";
import { renderComp } from "./common";
import { defaultPropsValue } from "../propsConfig/textFieldProps";

const { Panel } = Collapse;

const CollapseWrapper = styled.div`
  .c7n-collapse.c7n-collapse {
    background-color: rgba(0, 0, 0, 0.04);
    border: 0.01rem solid #e0e0e0;
    border-bottom: 0;
    border-radius: 0.02rem;
  }
  .c7n-collapse.c7n-collapse .c7n-collapse-item .c7n-collapse-header {
    padding: 0.12rem;
    color: rgba(0, 0, 0, 0.85);
    line-height: 0.22rem;
  }
  .c7n-collapse.c7n-collapse .c7n-collapse-item {
    border-bottom: 0.01rem solid #e0e0e0;
  }
  .c7n-collapse.c7n-collapse .c7n-collapse-item .c7n-collapse-content {
    padding: 0 0.16rem;
    overflow: hidden;
    color: #000000;
    background-color: #fff;
    border-top: 0.01rem solid #e0e0e0;
  }
`;

// 字符串 转 HTML
function encodeHtml(str) {
  // eslint-disable-next-line react/no-danger
  return <div dangerouslySetInnerHTML={{ __html: str }} />;
}

// 计算表达式的值
function evil(fn) {
  try {
    // eslint-disable-next-line no-eval
    if (typeof eval(fn) !== "function") {
      return false;
    }
    const Fn = Function;
    return new Fn(`return ${fn}`)();
  } catch (error) {
    return false;
  }
}

const validateFunc = (value) => {
  if (!value) {
    return true;
  }
  if (typeof evil(value) !== "function") {
    return "输入格式有误！";
  }
  return true;
};

const validateObject = (value) => {
  try {
    if (!value) {
      return true;
    }
    if (
      (JSON.parse(value) && value.includes("{") && value.includes("}")) ||
      (value.includes("[") && value.includes("]"))
    ) {
      return true;
    } else {
      return "输入格式有误！";
    }
  } catch (error) {
    return "输入格式有误！";
  }
};

const valueByType = (type, value) => {
  try {
    if (value) {
      if (type === "func") {
        return evil(value);
      } else if (type === "object") {
        if (
          typeof validateObject(value) === "boolean" &&
          validateObject(value)
        ) {
          return JSON.parse(value);
        }
        return undefined;
      } else if (
        typeof value === "string" &&
        (value.toLocaleLowerCase() === "true" ||
          value.toLocaleLowerCase() === "false")
      ) {
        return JSON.parse(value.toLocaleLowerCase());
      } else if (typeof type === "object" && type.length) {
        // 处理多类型
        // 在 textArea 控件第一行 标注属性类型。换行写对应类型的值。
        const line = value.split(/[\n]/);
        if (line.length > 1) {
          return valueByType(line[0].trim(), line[1]);
        }
      } else if (type === "ReactNode" && typeof value === "string") {
        return encodeHtml(value);
      } else if (type === "ReactNode[]") {
        const line = value.split(/[\n]/);
        if (line.length > 1) {
          return line.map((x) => encodeHtml(x));
        }
      } else if (type === "cascader") {
        if (value[1].includes("_")) {
          return [value[0], value[1].split("_")[1]];
        }
        return [...value];
      }
    }
  } catch (error) {
    return undefined;
  }

  return value;
};

const ConfigProps = ({
  config,
  menuActiveKey,
  configName,
  expandkey,
  onChange = noop,
}) => {
  const [configure, setConfigure] = useState(config);
  const [collapseExpandKey, setCollapseExpandKey] = useState([]);
  const [propLang, setPropsLang] = useState("name");
  const [resetNum, setResetNum] = useState(0);

  useEffect(() => {
    const resValue = [];
    for (const item of config) {
      const resObj = {};
      for (const prop of item.props) {
        resObj[prop.name] = prop.value || prop.defaultValue || undefined;
      }
      resValue.push({ name: item.header, props: resObj });
    }
    setConfigure(resValue);
  }, []);

  useEffect(() => {
    let resKey = [];
    switch (menuActiveKey) {
      case "1":
        resKey = config.map((x) => x.header);
        setCollapseExpandKey(resKey);
        break;
      case "2":
        setCollapseExpandKey(resKey);
        break;
      case "3":
        setPropsLang("name");
        break;
      case "4":
        setPropsLang("cnName");
        break;
      default:
        resKey = expandkey;
        setCollapseExpandKey(resKey);
        break;
    }
    if (menuActiveKey && menuActiveKey.includes("reset")) {
      setResetNum(resetNum + 1);
      setConfigure(defaultPropsValue);
      onChange(defaultPropsValue);
    }
  }, [menuActiveKey, expandkey]);

  const formDataSet = useDataSet(() => {
    let fields = [];
    for (const item of config) {
      const mapItems = item.props.map((x) => ({
        name: x.name,
        defaultValue: x.defaultValue,
        textField: x.type === "enumerate" ? "value" : undefined,
        valueField: x.type === "enumerate" ? "key" : undefined,
        options:
          x.type === "enumerate"
            ? new DataSet({
                data: x.options.map((y) => ({ key: y, value: y })),
              })
            : undefined,
        validator:
          x.type === "func"
            ? validateFunc
            : x.type === "object"
            ? validateObject
            : undefined,
      }));
      fields = fields.concat(mapItems);
    }
    return {
      autoCreate: true,
      fields,
    };
  }, [resetNum, configName, config]);

  const formChange = useCallback(
    ({ type, header, name, value }) => {
      const mapValue = configure.map((x) => {
        if (x.name === header) {
          return {
            ...x,
            props: { ...x.props, [name]: valueByType(type, value) },
          };
        }
        return x;
      });
      setConfigure(mapValue);
      onChange(mapValue);
    },
    [configure, onChange]
  );

  if (!config.length) {
    return <main style={{ padding: 20 }}>暂无相关配置项</main>;
  }

  return (
    <CollapseWrapper>
      <Collapse
        activeKey={collapseExpandKey}
        onChange={(key) => setCollapseExpandKey(key)}
        prefixCls="c7n-collapse"
      >
        {config.map((panel) => (
          <Panel header={panel.header} key={panel.header}>
            <Form
              labelWidth="auto"
              columns={1}
              labelAlign="left"
              dataSet={formDataSet}
            >
              {panel.props.map((prop) => {
                const commoParams = {
                  prop,
                  lang: propLang,
                  panel,
                  formChange,
                };
                return renderComp(commoParams);
              })}
            </Form>
          </Panel>
        ))}
      </Collapse>
    </CollapseWrapper>
  );
};

export default ConfigProps;
