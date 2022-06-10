import React, { useEffect, useMemo, useState } from "react";
import { Content } from "root/components/Page";
import { useDataSet } from "choerodon-ui/pro";
import { cloneDeep } from "lodash";
import { withThemedLayout } from "../../utils/withThemedLayout";
import { textFieldCompsMap } from "./dataSetConfig";
import Form from "../../components/FormPro";

const TestView = ({ configProps }) => {
  const [commoState, setCommoState] = useState({});
  const [compState, setCompState] = useState({});

  const compAndFieldProps = useMemo(
    () => configProps.find((x) => x.name === "数据源/组件 属性"),
    [configProps]
  );
  const dataSetFieldProps = useMemo(
    () => configProps.find((x) => x.name === "Field 属性"),
    [configProps]
  );
  const fieldProps = { ...compAndFieldProps.props, ...dataSetFieldProps.props };

  const compDataSet = useDataSet(() => {
    return {
      fields: Array.from(textFieldCompsMap.keys()).map((Comp) => ({
        name: textFieldCompsMap.get(Comp).label,
      })),
    };
  }, []);

  useEffect(() => {
    const commonProps = configProps.find((x) => x.name === "通用配置");
    setCommoState({ ...commonProps.props });
    const compProps = configProps.find((x) => x.name === "组件属性");
    const compAllProps = { ...compProps.props, ...compAndFieldProps.props };

    for (const key in compAllProps) {
      if (Object.hasOwnProperty.call(compAllProps, key)) {
        const value = compAllProps[key];
        compAllProps[key] = value === null ? undefined : value;
      }
    }
    setCompState(compAllProps);

    const compNames = Array.from(textFieldCompsMap.values());
    for (let i = 0; i < compNames.length; i++) {
      const fieldName = compNames[i].label;
      const field = compDataSet.getField(fieldName);
      for (const key in fieldProps) {
        if (Object.hasOwnProperty.call(fieldProps, key)) {
          const val = fieldProps[key];

          if (val !== "undefined" || val !== null) {
            field.set(key, val);
          }
        }
      }
    }
  }, [configProps]);

  return (
    <Content>
      <Form
        dataSet={compDataSet}
        labelLayout={commoState.labelLayout}
        labelAlign={commoState.labelAlign}
        columns={commoState.formColumns || 2}
        labelWidth={commoState.labelWidth || "auto"}
        separateSpacing={{
          lg: { width: 10, height: 20 },
          xl: { width: 10, height: 30 },
          xxl: { width: 10, height: 30 },
        }}
      >
        {Array.from(textFieldCompsMap.keys()).map((Comp) => {
          const { label, ...otherProps } = textFieldCompsMap.get(Comp);
          // 计算 级联项
          const cloneState = cloneDeep(compState);
          for (const key in cloneState) {
            if (Object.hasOwnProperty.call(cloneState, key)) {
              const x = cloneState[key];
              if (x && x.length > 1 && key === "mode") {
                const [name, val] = x;
                cloneState[key] = label === `${name}` ? val : undefined;
              }
            }
          }

          return (
            <Comp
              {...cloneState}
              style={{
                height:
                  cloneState.vertical && label === "Range" ? 200 : undefined,
              }}
              label={label}
              name={label}
              dataSet={compDataSet}
              {...otherProps}
            />
          );
        })}
      </Form>
    </Content>
  );
};

export default withThemedLayout({
  title: "可视化测试",
  name: "TestView",
  styleCount: 2,
})(TestView);
