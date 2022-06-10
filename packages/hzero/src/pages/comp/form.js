import React from "react";
import { Row, Col, Icon } from "hzero-ui";
import { Content } from "root/components/Page";
import Input from "../../components/Input";
import { withThemedLayout } from "../../utils/withThemedLayout";
import DatePicker from "../../components/DatePicker";
import InputNumber from "../../components/InputNumber";
import Form from "../../components/Form";
import Select from "../../components/Select";
import Tooltip from "../../components/Tooltip";

const { Item, create } = Form;

const formLayout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 14 },
};

const fileUnitList = (
  <Select style={{ width: "65px" }}>
    <Select.Option value="exe">exe</Select.Option>
  </Select>
);

@withThemedLayout({
  title: "Form 组件",
  name: "input",
  styleCount: 2,
})
@create()
class FormPage extends React.Component {
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <>
        {/* <Header title="Form 组件" /> */}
        <Content>
          <h3>必填</h3>
          <Item label="组合输入框" required>
            {getFieldDecorator("inputNumber", {
              rules: [
                { required: true, message: "Please select your country!" },
              ],
            })(<InputNumber />)}
          </Item>
          <Form>
            <Row gutter={24}>
              <Col span={8}>
                <Item
                  label={
                    <span>
                      组合输入框
                      <Tooltip title="提示">
                        <Icon type="question-circle-o" />
                      </Tooltip>
                    </span>
                  }
                >
                  <Input type="number" addonAfter={fileUnitList} />
                </Item>
              </Col>
              <Col span={8}>
                <Item label="组合输入框">
                  <Input type="number" addonAfter={fileUnitList} disabled />
                </Item>
              </Col>
              <Col span={8}>
                <Item label="组合输入框" required>
                  <Input type="number" addonAfter={fileUnitList} disabled />
                </Item>
              </Col>
            </Row>
            <Row gutter={24}>
              <Col span={8}>
                <Item
                  label="样式一Label长长样式一Label长长样式一Label长长"
                  required
                >
                  {getFieldDecorator("name", {
                    initialValue: "",
                    rules: [
                      { required: true, message: "必填" },
                      { min: 8, message: "最少8个字符" },
                    ],
                  })(<Input />)}
                </Item>
              </Col>
              <Col span={8}>
                <Item label="样式二Label" required>
                  {getFieldDecorator("test", {})(<Input />)}
                </Item>
              </Col>
              <Col span={8}>
                <Item label="组合输入框" required>
                  {getFieldDecorator("inputNumber", {
                    rules: [
                      {
                        required: true,
                        message: "Please select your country!",
                      },
                    ],
                  })(<InputNumber />)}
                </Item>
              </Col>
              <Col span={8}>
                <Item label="样式二Label" required>
                  {getFieldDecorator("test", {})(<Input disabled />)}
                </Item>
              </Col>
            </Row>
          </Form>
          <h3>非必填</h3>
          <Row gutter={24}>
            <Col span={8}>
              <Item label="样式一Label" {...formLayout}>
                <Input />
              </Item>
            </Col>
            <Col span={8}>
              <Item label="样式二Label">
                <Input />
              </Item>
            </Col>
          </Row>
          <h3>必填项颜色</h3>
          <Row gutter={24}>
            <Col span={8}>
              <Item label="样式一Label" {...formLayout} required>
                <Input />
              </Item>
            </Col>
            <Col span={8}>
              <Item label="样式二Label" required>
                <Input />
              </Item>
            </Col>
          </Row>
          <h3>必填项disable颜色</h3>
          <Row gutter={24}>
            <Col span={8}>
              <Item label="样式一Label" disabled {...formLayout} required>
                <Input disabled value="被禁用了" />
              </Item>
            </Col>
            <Col span={8}>
              <Item label="样式二Label" required>
                <Input disabled />
              </Item>
            </Col>
          </Row>
          <Row gutter={24}>
            <Col span={8}>
              <Item label="样式一Label" {...formLayout} required>
                <Input.TextArea value="被禁用了" />
              </Item>
            </Col>
            <Col span={8}>
              <Item label="样式二Label">
                <Input.TextArea />
              </Item>
            </Col>
            <Col span={8}>
              <Item label="样式二Label" required>
                <Input.TextArea disabled />
              </Item>
            </Col>
          </Row>
          <Row gutter={24}>
            <Col span={8}>
              <Item label="样式一Label" {...formLayout} required>
                文字测试
              </Item>
            </Col>
            <Col span={8}>
              <Item label="样式二Label">文字测试</Item>
            </Col>
            <Col span={8}>
              <Item label="样式二Label" required>
                文字测试
              </Item>
            </Col>
          </Row>
          <Row>
            <Col span={8}>
              <Item label="样式二Label" required>
                <DatePicker />
              </Item>
            </Col>
            <Col span={8}>
              <Item label="样式二Label" required>
                <DatePicker disabled />
              </Item>
            </Col>
          </Row>
        </Content>
      </>
    );
  }
}

export default FormPage;
