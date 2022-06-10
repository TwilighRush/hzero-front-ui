import React from "react";
import {
  DataSet,
  Row,
  // Output,
  // EmailField,
  // NumberField,
  Col,
} from "choerodon-ui/pro";
import { Content } from "root/components/Page";
import Form from "../../components/FormPro";
import { withThemedLayout } from "../../utils/withThemedLayout";
import Output from "../../components/OutputPro";
import EmailField from "../../components/EmailFieldPro";
import NumberField from "../../components/NumberFieldPro";

const ds = new DataSet({
  autoCreate: true,
  fields: [
    {
      name: "phone",
      defaultValue: "15888888888",
      type: "string",
      label: "手机号",
    },
    { name: "age", defaultValue: 18, type: "number", label: "年龄" },
    {
      name: "sex",
      defaultValue: "F",
      type: "string",
      label: "性别",
      lookupCode: "HR.EMPLOYEE_GENDER",
    },
    { name: "language", defaultValue: "zh-CN", type: "string", label: "语言" },
    {
      name: "email",
      defaultValue: "some@example.com",
      type: "string",
      label: "邮箱",
    },
    {
      name: "user",
      type: "string",
      label: "用户",
      defaultValue: "Jack,Rose,Hugh",
      required: true,
      multiple: ",",
    },
    {
      name: "homepage",
      defaultValue: "www.baidu.com",
      type: "string",
      label: "个人主页",
    },
    { name: "birth", defaultValue: "2018-12-26", type: "date", label: "生日" },
  ],
});
const boxStyle = {
  margin: 20,
  padding: 20,
  border: "1px solid rgba(90, 94, 154, 0.2)",
  marginLeft: 0,
  borderRadius: 5,
};
const TabsPage = () => {
  return (
    <Content>
      <h2 style={{ marginBottom: 20 }}>在表单中使用</h2>
      <div style={boxStyle}>
        <Row>
          <Form dataSet={ds} style={{ width: "3.5rem" }}>
            <Output name="phone" />
            <Output name="user" />
            <Output name="sex" />
            <Output name="language" />
            <Output name="homepage" />
            <Output name="birth" />
            <NumberField name="age" />
            <EmailField name="email" required />
          </Form>
        </Row>
      </div>
      {/* <h2 style={{ marginBottom: 20 }}>多值</h2>
      <div style={boxStyle}>
        <App />
      </div> */}
    </Content>
  );
};

class App extends React.Component {
  ds = new DataSet({
    autoCreate: true,
    fields: [
      {
        name: "user",
        type: "string",
        label: "用户",
        defaultValue: "Jack,Rose,Hugh",
        required: true,
        multiple: ",",
      },
    ],
  });

  render() {
    return (
      <Row gutter={10}>
        <Col span={12}>
          <Output dataSet={this.ds} name="user" />
        </Col>
        <Col span={12}>
          <Output multiple value={["wu", "zoe", "jasson"]} />
        </Col>
      </Row>
    );
  }
}

export default withThemedLayout({
  title: "OutPut 组件",
  name: "output",
  styleCount: 3,
})(TabsPage);
