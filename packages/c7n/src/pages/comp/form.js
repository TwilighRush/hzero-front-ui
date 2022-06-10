import React from "react";
import { Row, Col } from "choerodon-ui/pro";
import {
  // Form,
  // Input,
  // Tooltip,
  Icon,
  // Cascader,
  // Checkbox,
  // Button,
  // Select,
  // AutoComplete,
  // InputNumber,
  // DatePicker,
  // TimePicker,
} from "choerodon-ui";
import { Content } from "root/components/Page";
import { withThemedLayout } from "../../utils/withThemedLayout";
import TimePicker from "../../components/TimePicker";
import Input from "../../components/Input";
import Checkbox from "../../components/Checkbox";
import InputNumber from "../../components/InputNumber";

import Form from "../../components/Form";
import Button from "../../components/Button";
import Select from "../../components/Select";
import AutoComplete from "../../components/AutoComplete";
import DatePicker from "../../components/DatePicker";
import Tooltip from "../../components/Tooltip";
import Cascader from "../../components/Cascader";

const { Item } = Form;

const FormItem = Form.Item;

const { MonthPicker } = DatePicker;
const { RangePicker } = DatePicker;

const residences = [
  {
    value: "zhejiang",
    label: "Zhejiang",
    children: [
      {
        value: "hangzhou",
        label: "Hangzhou",
        children: [
          {
            value: "xihu",
            label: "West Lake",
          },
        ],
      },
    ],
  },
  {
    value: "jiangsu",
    label: "Jiangsu",
    children: [
      {
        value: "nanjing",
        label: "Nanjing",
        children: [
          {
            value: "zhonghuamen",
            label: "Zhong Hua Men",
          },
        ],
      },
    ],
  },
];

const addonSelect = (
  <Select defaultValue="1">
    <Select.Option value="1">选项1</Select.Option>
    <Select.Option value="2">选项1</Select.Option>
    <Select.Option value="3">选项1</Select.Option>
  </Select>
);

const CheckBoxPage = (props) => {
  const { getFieldDecorator } = props.form;

  const formItemLayout = {
    labelCol: {
      xs: { span: 24 },
      sm: { span: 8 },
    },
    wrapperCol: {
      xs: { span: 24 },
      sm: { span: 16 },
    },
  };
  const tailFormItemLayout = {
    wrapperCol: {
      xs: {
        span: 24,
        offset: 0,
      },
      sm: {
        span: 16,
        offset: 8,
      },
    },
  };

  const config = {
    rules: [{ type: "object", required: true, message: "Please select time!" }],
  };
  const rangeConfig = {
    rules: [{ type: "array", required: true, message: "Please select time!" }],
  };

  return (
    <Content>
      <Row>
        <Col span={10}>
          <Form>
            <FormItem {...formItemLayout} label="E-mail">
              {getFieldDecorator("email", {
                rules: [
                  {
                    type: "email",
                    message: "The input is not valid E-mail!",
                  },
                  {
                    required: true,
                    message: "Please input your E-mail!",
                  },
                ],
              })(<Input label="email" />)}
            </FormItem>
            <FormItem {...formItemLayout} label="Password">
              {getFieldDecorator("password", {
                rules: [
                  {
                    required: true,
                    message: "Please input your password!",
                  },
                ],
              })(<Input showPasswordEye label="password" type="password" />)}
            </FormItem>
            <FormItem {...formItemLayout} label="Confirm Password">
              {getFieldDecorator("confirm", {
                rules: [
                  {
                    required: true,
                    message: "Please confirm your password!",
                  },
                ],
              })(<Input showPasswordEye label="password" type="password" />)}
            </FormItem>
            <FormItem
              {...formItemLayout}
              label={
                <span>
                  Nickname&nbsp;
                  <Tooltip title="What do you want others to call you?">
                    <Icon type="question-circle-o" />
                  </Tooltip>
                </span>
              }
            >
              {getFieldDecorator("nickname", {
                rules: [
                  {
                    required: true,
                    message: "Please input your nickname!",
                    whitespace: true,
                  },
                ],
              })(<Input maxLength={20} label="名称" showLengthInfo />)}
            </FormItem>
            <FormItem {...formItemLayout}>
              {getFieldDecorator("age", {
                rules: [
                  {
                    required: true,
                    message: "Please input your age!",
                    type: "number",
                    whitespace: true,
                  },
                ],
                initialValue: 20,
              })(<InputNumber label="Age" min={1} max={100} />)}
            </FormItem>
            <FormItem {...formItemLayout} label="Habitual Residence">
              {getFieldDecorator("residence", {
                initialValue: ["zhejiang", "hangzhou", "xihu"],
                rules: [
                  {
                    type: "array",
                    required: true,
                    message: "Please select your habitual residence!",
                  },
                ],
              })(
                <Cascader
                  dropdownAlign={{
                    points: ["tr", "br"],
                    offset: [0, 4],
                    overflow: {
                      adjustX: 0,
                      adjustY: 1,
                    },
                  }}
                  options={residences}
                />
              )}
            </FormItem>
            <FormItem {...formItemLayout}>
              {getFieldDecorator("website", {
                rules: [{ required: true, message: "Please input website!" }],
              })(
                <AutoComplete
                  dataSource={[]}
                  placeholder="website"
                  label="Website"
                />
              )}
            </FormItem>
            <FormItem
              {...formItemLayout}
              extra="We must make sure that your are a human."
            >
              <Row gutter={8}>
                <Col span={12}>
                  {getFieldDecorator("captcha", {
                    rules: [
                      {
                        required: true,
                        message: "Please input the captcha you got!",
                      },
                    ],
                  })(<Input label="Captcha" />)}
                </Col>
                <Col span={12}>
                  <Button funcType="raised">Get captcha</Button>
                </Col>
              </Row>
            </FormItem>
            <FormItem {...formItemLayout} label="DatePicker">
              {getFieldDecorator(
                "date-picker",
                config
              )(
                <DatePicker
                  label="DatePicker"
                  dropdownAlign={{
                    points: ["tr", "br"],
                    offset: [0, 4],
                    overflow: {
                      adjustX: 0,
                      adjustY: 1,
                    },
                  }}
                />
              )}
            </FormItem>
            <FormItem {...formItemLayout} label="DatePicker[showTime]">
              {getFieldDecorator(
                "date-time-picker",
                config
              )(<DatePicker showTime format="YYYY-MM-DD HH:mm:ss" />)}
            </FormItem>
            <FormItem {...formItemLayout} label="MonthPicker">
              {getFieldDecorator(
                "month-picker",
                config
              )(
                <Select
                  allowClear
                  dropdownAlign={{
                    points: ["tr", "br"],
                    offset: [0, 4],
                    overflow: {
                      adjustX: 0,
                      adjustY: 1,
                    },
                  }}
                  label="测试"
                  style={{ width: 100 }}
                >
                  <Select.Option value="1">示例</Select.Option>
                  <Select.Option value="2">示例</Select.Option>
                  <Select.Option value="3">示例</Select.Option>
                </Select>
              )}
            </FormItem>
            <FormItem {...formItemLayout} label="RangePicker">
              {getFieldDecorator(
                "range-picker",
                rangeConfig
              )(
                <MonthPicker
                  label="RangePicker"
                  dropdownAlign={{
                    points: ["tr", "br"],
                    offset: [0, 4],
                    overflow: {
                      adjustX: 0,
                      adjustY: 1,
                    },
                  }}
                />
              )}
            </FormItem>
            <FormItem {...formItemLayout} label="RangePicker[showTime]">
              {getFieldDecorator(
                "range-time-picker",
                rangeConfig
              )(
                <RangePicker
                  label="RangePicker"
                  dropdownAlign={{
                    points: ["tr", "br"],
                    offset: [0, 4],
                    overflow: {
                      adjustX: 0,
                      adjustY: 1,
                    },
                  }}
                  showTime
                  format="YYYY-MM-DD HH:mm:ss"
                />
              )}
            </FormItem>
            <FormItem {...formItemLayout} label="TimePicker">
              {getFieldDecorator("time-picker", config)(<TimePicker />)}
            </FormItem>
            <FormItem {...tailFormItemLayout}>
              {getFieldDecorator("agreement", {
                valuePropName: "checked",
              })(
                <Checkbox>
                  I have read the <a href="">agreement</a>
                </Checkbox>
              )}
            </FormItem>
            <FormItem {...tailFormItemLayout}>
              <Button type="primary" funcType="raised" htmlType="submit">
                Register
              </Button>
            </FormItem>
            <FormItem
              {...formItemLayout}
              label="Success"
              hasFeedback
              validateStatus="success"
            >
              <DatePicker style={{ width: "100%" }} />
            </FormItem>
          </Form>
        </Col>
      </Row>
      <Row>
        <Col span={8}>
          <Item label="测试" {...formItemLayout}>
            <Select
              allowClear
              dropdownAlign={{
                points: ["tr", "br"],
                offset: [0, 4],
                overflow: {
                  adjustX: 0,
                  adjustY: 1,
                },
              }}
              placeholder="测试"
              style={{ width: 100 }}
            >
              <Select.Option value="1">示例</Select.Option>
              <Select.Option value="2">示例</Select.Option>
              <Select.Option value="3">示例</Select.Option>
            </Select>
          </Item>
        </Col>
      </Row>
      <Row gutter={12}>
        <Col span={8}>
          <Item label="输入项1" {...formItemLayout} required>
            <Input placeholder="请输入" />
          </Item>
        </Col>
        <Col span={8}>
          <Item label="输入项1" {...formItemLayout} required>
            <Input disabled placeholder="请输入" />
          </Item>
        </Col>
      </Row>
      <Row gutter={12}>
        <Col span={8}>
          <Item label={<div>1233333</div>} {...formItemLayout}>
            <Input placeholder="请输入" />
          </Item>
        </Col>
        <Col span={8}>
          <Item label={<div>1233333</div>} {...formItemLayout}>
            <Input disabled placeholder="请输入" />
          </Item>
        </Col>
      </Row>
      <Row gutter={12}>
        <Col span={8}>
          <Input placeholder="请输入" />
        </Col>
        <Col span={8}>
          <Input placeholder="请输入" disabled />
        </Col>
      </Row>
      <h2>Password</h2>
      <Row gutter={12}>
        <Col span={8}>
          <Item label="输入项1" {...formItemLayout} required>
            <Input type="password" placeholder="请输入" />
          </Item>
        </Col>
        <Col span={8}>
          <Item label="输入项1" {...formItemLayout}>
            <Input type="password" placeholder="请输入" />
          </Item>
        </Col>
        <Col span={8}>
          <Item label="输入项1" {...formItemLayout}>
            <Input type="password" placeholder="请输入" disabled />
          </Item>
        </Col>
      </Row>
      <h2>Search</h2>
      <Row gutter={12}>
        <Col span={8}>
          <Item label="输入项1" {...formItemLayout} required>
            <Input.Search placeholder="请输入" />
          </Item>
        </Col>
        <Col span={8}>
          <Item label="输入项1" {...formItemLayout}>
            <Input.Search placeholder="请输入" />
          </Item>
        </Col>
        <Col span={8}>
          <Item label="输入项1" {...formItemLayout}>
            <Input.Search placeholder="请输入" disabled />
          </Item>
        </Col>
      </Row>
      <h2>Textarea</h2>
      <Row gutter={12}>
        <Col span={8}>
          <Item label="输入项1" {...formItemLayout} required>
            <Input.TextArea label="输入项1" placeholder="请输入" />
          </Item>
        </Col>
        <Col span={8}>
          <Item label="输入项1" {...formItemLayout}>
            <Input.TextArea placeholder="请输入" />
          </Item>
        </Col>
        <Col span={8}>
          <Item label="输入项1" {...formItemLayout}>
            <Input.TextArea placeholder="请输入" disabled />
          </Item>
        </Col>
      </Row>
      <h2>type=number</h2>
      <Row gutter={12}>
        <Col span={8}>
          <Item label="输入项1" {...formItemLayout} required>
            <Input type="number" placeholder="请输入" />
          </Item>
        </Col>
        <Col span={8}>
          <Item label="输入项1" {...formItemLayout}>
            <Input type="number" placeholder="请输入" />
          </Item>
        </Col>
        <Col span={8}>
          <Item label="输入项1" {...formItemLayout}>
            <Input type="number" placeholder="请输入" disabled />
          </Item>
        </Col>
      </Row>
      <h2>type=email</h2>
      <Row gutter={12}>
        <Col span={8}>
          <Item label="输入项1" {...formItemLayout} required>
            <Input type="email" placeholder="请输入" />
          </Item>
        </Col>
        <Col span={8}>
          <Item label="输入项1" {...formItemLayout}>
            <Input type="email" placeholder="请输入" />
          </Item>
        </Col>
        <Col span={8}>
          <Item label="输入项1" {...formItemLayout}>
            <Input type="email" placeholder="请输入" disabled />
          </Item>
        </Col>
      </Row>
      <h2>InputNumber组件</h2>
      <Row gutter={12}>
        <Col span={8}>
          <Item label="输入项1" {...formItemLayout} required>
            <InputNumber placeholder="请输入" />
          </Item>
        </Col>
        <Col span={8}>
          <Item label="输入项1" {...formItemLayout}>
            <InputNumber placeholder="请输入" />
          </Item>
        </Col>
        <Col span={8}>
          <Item label="输入项1" {...formItemLayout}>
            <InputNumber placeholder="请输入" disabled />
          </Item>
        </Col>
      </Row>
      <h2>带prefix和suffix</h2>
      <Row gutter={12}>
        <Col span={8}>
          <h3>前缀图标和后缀图标</h3>
          <Item label="输入项1" {...formItemLayout} required>
            <Input
              prefix={<Icon type="nearby" />}
              suffix={<Icon type="nearby" />}
              placeholder="请输入"
            />
          </Item>
        </Col>
        <Col span={8}>
          <h3>addonAfter和addonBefore（c7n-ui本身有问题，显示不出来）</h3>
          <Item label="输入项1" {...formItemLayout}>
            <Input addonAfter="addonSelect" placeholder="请输入" />
            <Item label="输入项1" {...formItemLayout}>
              <Input placeholder="请输入" addonBefore={addonSelect} />
            </Item>
            <Item label="输入项1" {...formItemLayout}>
              <Input
                placeholder="请输入"
                addonBefore={addonSelect}
                addonAfter={addonSelect}
              />
            </Item>
          </Item>
        </Col>
      </Row>
    </Content>
  );
};

const WrappedRegistrationForm = Form.create()(CheckBoxPage);

export default withThemedLayout({
  title: "Form/components 组件",
  name: "input",
  styleCount: 2,
})(WrappedRegistrationForm);
