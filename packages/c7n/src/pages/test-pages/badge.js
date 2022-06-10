import React, { Component } from "react";
import { DataSet, Select, Table, Button, Row, Col } from "choerodon-ui/pro";
import { Modal, Badge, Tag } from "choerodon-ui";
import { FuncType } from "choerodon-ui/pro/lib/button/enum";
import { Content } from "root/components/Page";
import { withThemedLayout } from "../../utils/withThemedLayout";

import { badgeAttrsDs } from "./store/badgeAttrsDs";
import { classifyAttrs } from "./util";
import "./style/index.less";

const { Sidebar } = Modal;

// 渲染 value 是否可编辑
const valueEditor = (record) => {
  const { type, options } = record.data;
  if (["boolean", "callback", "ReactNode"].includes(type)) return false;
  if (["string", "enumerate", "numberArray"].includes(type)) {
    return options ? <Select options={options} /> : true;
  }
};

const columns = [
  { name: "name" },
  { name: "nickName" },
  { name: "type" },
  { name: "value", editor: valueEditor },
  { name: "flag", editor: true },
  { name: "bindFor" },
];

const boxStyle = {
  margin: 20,
  padding: 20,
  border: "1px solid rgba(90, 94, 154, 0.2)",
  marginLeft: 0,
  borderRadius: 5,
};
const headExample = {
  width: "42px",
  height: "42px",
  borderRadius: "4px",
  background: "#eee",
  display: "inline-block",
};

class BadgeTest extends Component {
  constructor(props) {
    super(props);
    this.state = {
      compProps: {},
      visible: false,
    };
  }

  componentDidMount() {
    this.getClassifyResult();
  }

  initFunction() {
    // TODO:
  }

  // 属性分类
  async getClassifyResult() {
    const res = await this.attrsTableDs.validate();
    if (!res) return false;
    this.attrsTableDs.reset();
    const { compProps, commonDs } = classifyAttrs(
      undefined,
      this.attrsTableDs,
      this.isControlled
    );
    this.setState({ compProps });
    this.commonDs = commonDs;
  }

  // 更新属性状态
  setUpdateAttrs = ({ record }) => {
    // 拿到绑定到组件上的所有属性
    const compPropsTemp = this.state.compProps;
    const bindFor = record.get("bindFor");
    const type = record.get("type");
    const attrValue = record.get("value");
    const flag = record.get("flag");
    const recordName = record.get("name");

    // 更新的属性只能绑定到组件，或者既能绑定到组件又能绑定到字段并且在受控状态下时，对compProps的对应属性进行修改
    if (bindFor.includes("comp") && bindFor.length === 1) {
      // 属性为布尔类型并且为默认值  或者  不为布尔类型并且阀门为关闭或默认状态
      const condition =
        (type === "boolean" && flag === "default") ||
        (type !== "boolean" && flag !== "true");
      if (condition) {
        // 删除相应属性
        delete compPropsTemp[recordName];
      } else if (type === "boolean") {
        compPropsTemp[recordName] = flag === "true";
      } else if (type === "numberArray") {
        // 此处为了针对性处理offset属性这种数字类型的数组[x,y]
        if (attrValue.split) {
          const offsetArr = attrValue.split(",").map(Number);
          compPropsTemp[recordName] = offsetArr;
        }
      } else {
        compPropsTemp[recordName] = attrValue;
      }
    }
    // 将更新后的属性集合重新赋值到state
    this.setState({ compProps: compPropsTemp }, () => {
      console.log('更新', this.state.compProps);
    });
  };

  attrsTableDs = new DataSet({
    ...badgeAttrsDs,
    events: {
      update: this.setUpdateAttrs,
    },
  });

  // eslint-disable-next-line no-dupe-class-members
  componentDidMount() {
    this.getClassifyResult();
  }

  componentWillUnmount() { }

  render() {
    return (
      <Content>
        <Button
          style={{ width: 200, position: "fixed", top: "90px", left: "50%" }}
          onClick={() => this.setState({ visible: true })}
        >
          控制面板
        </Button>
        <div style={boxStyle}>
          已添加属性：
          {/* <Button onClick={()=>{console.log('compProps', this.state.compProps,Object.keys(this.state.compProps));}}>compProps</Button> */}
          {Object.keys(this.state.compProps).map((eachAttr) => {
            const { compProps } = this.state;
            // 判定属性是否成功添加
            if (compProps[eachAttr] !== false) {
              // 布尔类型属性的展示不需要值
              if (compProps[eachAttr] === true) {
                return (
                  <Tag key={eachAttr} color="green">
                    {eachAttr}
                  </Tag>
                );
              } else {
                return (
                  <Tag key={eachAttr} color="geekblue">
                    {/* 做对offset这种数组类型属性的展示 */}
                    {eachAttr}: {(compProps[eachAttr] instanceof Array)
                      ? `${compProps[eachAttr][0]}，${compProps[eachAttr][1]}`
                      : compProps[eachAttr]}
                  </Tag>
                );
              }
            }
          })}
        </div>
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
          <Table
            columns={columns}
            dataSet={this.attrsTableDs}
            pagination={false}
          />
        </Sidebar>
        <span style={{ marginRight: "20px" }}> </span>
        <h1>属性控制Demo</h1>
        <div style={boxStyle}>
          <Badge {...this.state.compProps}>
            <div style={headExample} />
          </Badge>
          <span style={{ marginLeft: "100px" }}> dot恒为ture：</span>
          <Badge {...this.state.compProps} dot />
        </div>
        <h1>默认Demo</h1>
        <div style={boxStyle}>
          <Row>
            <Col>
              <p>dot + status:error</p>
              <Badge dot status="error" />
            </Col>
            <Col>
              <p>count</p>
              <Badge count={5}>
                <div style={headExample} />
              </Badge>
            </Col>
            <Col>
              <p>showZero</p>
              <Badge count={0} showZero>
                <div style={headExample} />
              </Badge>
            </Col>
            <Col>
              <p>偏移offset[20,0]</p>
              <Badge count={100} offset={[20, 0]}>
                <div style={headExample} />
              </Badge>
            </Col>
            <Col>
              <p>偏移offset + status:processing</p>
              <Badge dot status="processing" offset={[20, 0]}>
                <div style={headExample} />
              </Badge>
            </Col>
          </Row>
        </div>
      </Content>
    );
  }
}

export default withThemedLayout({
  title: "Badge 徽标",
  name: "input",
  styleCount: 2,
})(BadgeTest);
