import React, { Component } from "react";
import {
  DataSet,
  Select,
  Switch,
  Table,
  Button,
  TextField,
  SelectBox,
} from "choerodon-ui/pro";
import { Modal } from "choerodon-ui";
import { FuncType } from "choerodon-ui/pro/lib/button/enum";
import { Content } from "root/components/Page";
import { withThemedLayout } from "../../utils/withThemedLayout";
import Form from "../../components/FormPro";

import { textFieldAttrsDs } from "./store/textFieldAttrsDs";
import { textFieldCompsMap } from "./data/textfieldCompsMap";
import {
  formLabelLayout,
  formLabelAlign,
  formlabelWidth,
  formColumns,
} from "./data/form-attributions";
// SecretField组件的全局配置
import SecretFieldCfg from "./config/secretFieldCfg";
import { classifyAttrs } from "./util";

// 样式文件
import "./style/index.less";

SecretFieldCfg();

const { Sidebar } = Modal;
const { Option } = SelectBox;
const valueEditor = (record) => {
  const { type, options } = record.data;
  if (["boolean", "callback", "ReactNode"].includes(type)) return false;
  if (["string", "enumerate"].includes(type)) {
    return options ? <Select options={options} /> : true;
  }
};

const columns = [
  { name: "name" },
  // { name: "nickName" },
  { name: "type" },
  { name: "value", editor: valueEditor },
  { name: "flag", editor: true },
  { name: "bindFor" },
];

class TextFieldAbout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isControlled: false,
      compProps: {},
      visible: false,
      searchStr: "",
      tableSpinning: false,
      formColumn: { ...formColumns.columns },
      labelLayout: { ...formLabelLayout.labelLayout },
      labelAlign: { ...formLabelAlign.labelAlign },
      labelWidth: { ...formlabelWidth.labelWidth },
    };
  }

  componentDidMount() {
    this.getClassifyResult();
  }

  initFunction() {
    // TODO:
  }

  async getClassifyResult() {
    const res = await this.attrsTableDs.validate();
    if (!res) return false;
    this.attrsTableDs.reset();
    const { compProps, commonDs } = classifyAttrs(
      textFieldCompsMap,
      this.attrsTableDs,
      this.isControlled
    );
    this.setState({ compProps });
    this.commonDs = commonDs;
  }

  setUpdateAttrs = ({ record }) => {
    // 拿到绑定到组件上的所有属性
    const compPropsTemp = this.state.compProps;
    const bindFor = record.get("bindFor");
    const type = record.get("type");
    const attrValue = record.get("value");
    const flag = record.get("flag");
    const recordName = record.get("name");

    // 更新的属性只能绑定到组件，或者既能绑定到组件又能绑定到字段并且在受控状态下时，对compProps的对应属性进行修改
    if (
      (bindFor.includes("comp") && bindFor.length === 1) ||
      (bindFor.length > 1 && this.state.isControlled)
    ) {
      // 属性为布尔类型并且为默认值  或者  不为布尔类型并且阀门为关闭或默认状态
      const condition =
        (type === "boolean" && flag === "default") ||
        (type !== "boolean" && flag !== "true");
      if (condition) {
        // 删除相应属性
        delete compPropsTemp[recordName];
      } else {
        // compPropsTemp[recordName] = record.get('type') === 'boolean' ? value === 'true' : value;
        // 属性为布尔值将值更新成 value === 'true' 属性不为布尔值 将值赋为正常 value
        compPropsTemp[recordName] =
          type === "boolean" ? flag === "true" : attrValue;
      }
    }
    // 将更新后的属性集合重新赋值到state
    this.setState({ compProps: compPropsTemp });
    // 当属性只能绑定到 ds 或者 field 或者为 ds 状态时
    if (
      (bindFor.includes("ds") && bindFor.length === 1) ||
      (bindFor.includes("field") && bindFor.length === 1) ||
      (bindFor.length > 1 && !this.state.isControlled)
    ) {
      // 遍历字段  将对应的属性进行修改
      this.commonDs.fields.forEach((item) => {
        // 根据类型和属性阀门状态 对该属性进行去除
        if (
          (type === "boolean" && flag === "default") ||
          (type !== "boolean" && flag !== "true")
        ) {
          item.set(recordName, undefined);
        } else {
          // 对每个字段的对应属性 更新状态
          item.set(
            recordName,
            record.get("type") === "boolean"
              ? record.get("flag") === "true"
              : record.get("value")
          );
        }
      });
    }
  };

  attrsTableDs = new DataSet({
    ...textFieldAttrsDs,
    events: {
      update: this.setUpdateAttrs,
    },
  });

  commonDs = new DataSet({});

  compsFactoy = (Comp) => {
    return (
      <Comp
        {...this.state.compProps}
        {...textFieldCompsMap.get(Comp)}
        name={textFieldCompsMap.get(Comp).label}
        dataSet={this.commonDs}
      />
    );
  };

  // 重置搜索结果
  resetSearchResult = () => {
    this.setState({ tableSpinning: true });
    this.setState({ searchStr: "" });
    this.attrsTableDs.records.map((record) => {
      record.set("searchFlag", true);
      return record;
    });
    this.setState({ tableSpinning: false });
  };

  searchAttrsByName = () => {
    // this.setState({ tableSpinning: true });
    this.attrsTableDs.map((record) => {
      if (
        record.get("name").includes(this.state.searchStr) ||
        this.state.searchStr.trim().length === 0
      ) {
        record.set("searchFlag", true);
      } else {
        record.set("searchFlag", false);
      }
      return record;
    });
    // this.setState({ tableSpinning: false });
  };

  componentWillUnmount() {}

  componentDidUpdate(preProps, preState) {
    // TODO

    if (this.state.isControlled !== preState.isControlled) {
      // 是否受控状态改变时进行属性分类
      this.getClassifyResult();
    }
  }

  render() {
    const { labelLayout, labelAlign, labelWidth, formColumn } = this.state;
    return (
      <Content>
        <Button
          style={{ width: 200, position: "fixed", top: "90px", left: "50%" }}
          onClick={() => this.setState({ visible: true })}
        >
          控制面板
        </Button>
        <Sidebar
          visible={this.state.visible}
          onCancel={() => this.setState({ visible: false })}
          onOk={() => this.setState({ visible: false })}
          width={1000}
          footer={
            <>
              <Button
                funcType={FuncType.raised}
                onClick={() => this.setState({ visible: false })}
              >
                关闭
              </Button>
            </>
          }
        >
          <Form columns={2}>
            <Switch
              checked={this.state.isControlled}
              unCheckedChildren="数据源"
              onChange={(val) => this.setState({ isControlled: val })}
              label="受控/数据源"
            >
              受控
            </Switch>
            <div className="search-box">
              <TextField
                value={this.state.searchStr}
                onInput={(e) => this.setState({ searchStr: e.target.value })}
                label="属性搜索"
                placeholder="输入属性名(区分大小写)"
                onEnterDown={this.searchAttrsByName}
              />
              <Button color="primary" onClick={this.searchAttrsByName}>
                搜索
              </Button>
              <Button color="default" onClick={this.resetSearchResult}>
                重置
              </Button>
            </div>
            <SelectBox
              label="formColumns"
              defaultValue={formColumn.value[formColumn.index]}
              onChange={(val) => {
                this.setState({
                  formColumn: {
                    ...formColumn,
                    index: formColumn.value.findIndex((oo) => oo === val),
                  },
                });
              }}
            >
              {formColumn.value.map((item) => (
                <Option key={item} value={item}>
                  {item}
                </Option>
              ))}
            </SelectBox>
            <SelectBox
              label="labelLayout"
              defaultValue={labelLayout.value[labelLayout.index]}
              onChange={(val) => {
                this.setState({
                  labelLayout: {
                    ...labelLayout,
                    index: labelLayout.value.findIndex((oo) => oo === val),
                  },
                });
              }}
            >
              {labelLayout.value.map((item) => (
                <Option key={item} value={item}>
                  {item}
                </Option>
              ))}
            </SelectBox>
            <SelectBox
              label="labelAlign"
              defaultValue={labelAlign.value[labelAlign.index]}
              onChange={(val) => {
                this.setState({
                  labelAlign: {
                    ...labelAlign,
                    index: labelAlign.value.findIndex((oo) => oo === val),
                  },
                });
              }}
            >
              {labelAlign.value.map((item) => (
                <Option key={item} value={item}>
                  {item}
                </Option>
              ))}
            </SelectBox>
            <SelectBox
              label="labelWidth"
              defaultValue={labelWidth.value[labelWidth.index]}
              onChange={(val) => {
                this.setState({
                  labelWidth: {
                    ...labelWidth,
                    index: labelWidth.value.findIndex((oo) => oo === val),
                  },
                });
              }}
            >
              {labelWidth.value.map((item) => (
                <Option key={item} value={item}>
                  {item}
                </Option>
              ))}
            </SelectBox>
          </Form>
          <div style={{ height: "500px" }}>
            <Table
              columns={columns}
              dataSet={this.attrsTableDs}
              pagination={false}
              showRemovedRow={false}
              autoHeight={{ type: "minHeight", diff: 0 }}
              spin={{ spinning: this.state.tableSpinning }}
              filter={(record) => {
                return (
                  record.get("searchFlag") === true ||
                  record.get("searchFlag") === undefined
                );
              }}
            />
          </div>
        </Sidebar>
        <Form
          labelLayout={labelLayout.value[labelLayout.index]}
          labelAlign={labelAlign.value[labelAlign.index]}
          // labelWidth={labelWidth.value[labelWidth.index]}
          labelWidth={
            labelWidth.value[labelWidth.index] === "auto"
              ? labelWidth.value[labelWidth.index]
              : labelWidth.value[labelWidth.index]
                  .split(",")
                  .map((width) => Number(width))
          }
          dataSet={this.commonDs}
          columns={formColumn.value[formColumn.index]}
        >
          {Array.from(textFieldCompsMap.keys()).map(this.compsFactoy)}
        </Form>
      </Content>
    );
  }
}

export default withThemedLayout({
  title: "TextFieldAbout",
  name: "input",
  styleCount: 2,
})(TextFieldAbout);
