import React, { useState } from "react";
import {
  Row,
  // TextField,
  // Password,
  // Button,
  Col,
  // SelectBox,
  // CheckBox,
  // EmailField,
  // Select,
  // Switch,
  // AutoComplete,
  // Output,
  // NumberField,
  // UrlField,
  // DatePicker,
  // Menu,
  // Range,
  // IconPicker,
  // IntlField,
  // Dropdown,
  // TextArea,
  Icon,
  DataSet,
  // ColorPicker,
  // Lov,
  // Tooltip,
  // Cascader,
} from "choerodon-ui/pro";
import { Content } from "root/components/Page";
import Form from "../../components/FormPro";
import { withThemedLayout } from "../../utils/withThemedLayout";
import TextField from "../../components/TextFieldPro";
import Password from "../../components/PasswordPro";
import Button from "../../components/ButtonPro";
import SelectBox from "../../components/SelectBoxPro";
import CheckBox from "../../components/CheckBoxPro";
import EmailField from "../../components/EmailFieldPro";
import Select from "../../components/SelectPro";
import Switch from "../../components/SwitchPro";
import AutoComplete from "../../components/AutoCompletePro";
import Output from "../../components/OutputPro";
import NumberField from "../../components/NumberFieldPro";
import UrlField from "../../components/UrlFieldPro";
import DatePicker from "../../components/DatePickerPro";
import Range from "../../components/RangePro";
import IconPicker from "../../components/IconPickerPro";
import IntlField from "../../components/IntlFieldPro";
import TextArea from "../../components/TextAreaPro";
import ColorPicker from "../../components/ColorPickerPro";
import Lov from "../../components/LovPro";
import Tooltip from "../../components/TooltipPro";
import Cascader from "../../components/CascaderPro";

const { FormVirtualGroup, ItemGroup } = Form;
const { Option } = Select;
// const ds = new DataSet({
//   autoCreate: true,
//   fields: [
//     {
//       name: "code",
//       type: "object",
//       lovCode: "LOV_CODE",
//       lovDefineUrl: "/sys/lov/lov_define",
//       lovQueryUrl: "/dataset/common/lov/dataset/LOV_CODE",
//       required: true,
//     },
//     { name: "code_code", type: "string", bind: "code.code" },
//     { name: "code_description", type: "string", bind: "code.description" },
//   ],
// });

const boxStyle = {
  margin: 20,
  padding: 20,
  border: "1px solid rgba(90, 94, 154, 0.2)",
  marginLeft: 0,
  borderRadius: 5,
};
const options = [
  {
    value: "zhejiang",
    meaning: "Zhejiang",
    children: [
      {
        value: "hangzhou",
        meaning: "Hangzhou22222222222",
        children: [
          {
            value: "xihu",
            meaning: "West Lake1111111111111",
          },
        ],
      },
    ],
  },
  {
    value: "jiangsu",
    meaning: "Jiangsu",
    children: [
      {
        value: "nanjing",
        meaning: "Nanjing",
        children: [
          {
            value: "zhonghuamen",
            meaning: "Zhong Hua Men",
          },
        ],
      },
    ],
  },
];

function onChange(value) {
  console.log(value);
}

function passwordValidator(value, name, form) {
  if (value !== form.getField("password").getValue()) {
    return "您两次输入的密码不一致，请重新输入";
  }
  return true;
}
const CheckBoxPage = () => {
  const [labelAlign, setlabelAlign] = useState("left");
  const ds = new DataSet({
    autoCreate: true,
    fields: [
      { name: "phone", type: "string", label: "手机号", required: true },
      { name: "password", type: "string", label: "密码", required: true },
      {
        name: "confirmPassword",
        type: "string",
        label: "确认密码",
        required: true,
        validator: passwordValidator,
      },
      {
        name: "age",
        type: "number",
        label: "年龄",
        required: true,
        help: "我们需要确定你的年龄",
      },
      { name: "sex", type: "string", label: "性别", required: true },
      {
        name: "language",
        type: "string",
        label: "语言",
        required: true,
        help: "超过两行的帮助信息超过两行的帮助信息超过两行的帮助信息",
      },
      { name: "email", type: "email", label: "邮箱", required: true },
      { name: "homepage", type: "url", label: "个人主页", required: true },
      { name: "birth", type: "date", label: "生日", required: true },
      { name: "code", type: "object", label: "代码描述", lovCode: "LOV_CODE" },
    ],
  });
  const [labelLayout, setLabelLayout] = useState("horizontal");

  const groupDs = new DataSet({
    autoCreate: true,
    fields: [
      {
        name: "phonePrefix",
        type: "string",
        label: "手机区号",
        required: true,
      },
      {
        name: "phone",
        type: "string",
        label: "手机号",
        labelWidth: 150,
        required: true,
        pattern: "^1[3-9]\\d{9}$",
      },
      {
        name: "ageLevel",
        type: "string",
        label: "年龄阶段",
        required: true,
      },
      {
        name: "age",
        type: "number",
        label: "年龄",
        required: true,
        min: 18,
        step: 1,
        help: "我们需要确定你的年龄",
      },
      { name: "birthDate", type: "date", label: "生日日期", required: true },
      { name: "birthTime", type: "time", label: "生日时间", required: true },
    ],
  });

  const clear = () => {
    const { current } = groupDs;
    current.reset();
  };

  const validateCurrent = () => {
    const { current } = groupDs;
    current.validate();
  };

  return (
    <Content>
      <h2>基础使用(左右布局)</h2>
      <div style={boxStyle}>
        <Row>
          <Button onClick={() => setlabelAlign("left")}>left对齐</Button>
          <Button onClick={() => setlabelAlign("right")}>right对齐</Button>
        </Row>
        <Row>
          <Form
            id="basic"
            style={{ width: "4rem" }}
            labelAlign={labelAlign}
            showValidation="newLine"
          >
            <TextField
              label="手机号"
              pattern="1[3-9]\d{9}"
              name="phone"
              placeholder="请输入"
              required
              clearButton
              addonBefore="+86"
              addonAfter="中国大陆"
            />
            <Switch label="Switch" required name="switch" />
            <Password label="密码" name="password" required />
            <Password
              label="确认密码"
              name="confirmPassword"
              required
              validator={passwordValidator}
              help="请输入与上方相同的密码"
              showHelp="tooltip"
            />
            <NumberField
              label="年龄"
              name="age"
              min={18}
              step={1}
              required
              help="我们需要确定你的年龄"
              addonAfter="周岁"
            />
            <SelectBox label="性别" name="sex" required>
              <Option value="M">男</Option>
              <Option value="F">女</Option>
            </SelectBox>
            <Select
              label="语言"
              name="language"
              required
              multiple
              help="超过两行的帮助信息超过两行的帮助信息超过两行的帮助信息"
            >
              <Option value="zh-cn">简体中文</Option>
              <Option value="en-us">英语(美国)</Option>
              <Option value="ja-jp">日本語</Option>
            </Select>
            <EmailField label="邮箱" name="email" required />
            <UrlField
              label="个人主页"
              name="homepage"
              required
              addonBefore="Http://"
            />
            <DatePicker label="生日" name="birth" required />
            <div>
              <Button type="submit">注册</Button>
              <Button type="reset" style={{ marginLeft: 8 }}>
                重置
              </Button>
            </div>
          </Form>
        </Row>
      </div>
      <h2>垂直布局</h2>
      <div style={boxStyle}>
        <Row>
          <Form
            id="basic"
            style={{ width: "4rem" }}
            showValidation="newLine"
            labelLayout="vertical"
          >
            <TextField
              label="手机号"
              labelWidth={100}
              pattern="1[3-9]\d{9}"
              name="phone"
              placeholder="请输入"
              required
              clearButton
              addonBefore="+86"
              addonAfter="中国大陆"
            />
            <Switch label="Switch" required name="switch" />
            <Password label="密码" name="password" required />
            <Password
              label="确认密码"
              name="confirmPassword"
              required
              validator={passwordValidator}
              help="请输入与上方相同的密码"
              showHelp="tooltip"
            />
            <NumberField
              label="年龄"
              name="age"
              min={18}
              step={1}
              required
              help="我们需要确定你的年龄"
              addonAfter="周岁"
            />
            <SelectBox label="性别" name="sex" required>
              <Option value="M">男</Option>
              <Option value="F">女</Option>
            </SelectBox>
            <Select
              label="语言"
              name="language"
              required
              multiple
              help="超过两行的帮助信息超过两行的帮助信息超过两行的帮助信息"
            >
              <Option value="zh-cn">简体中文</Option>
              <Option value="en-us">英语(美国)</Option>
              <Option value="ja-jp">日本語</Option>
            </Select>
            <EmailField label="邮箱" name="email" required />
            <UrlField
              label="个人主页"
              name="homepage"
              required
              addonBefore="Http://"
            />
            <DatePicker label="生日" name="birth" required />
            <TextArea label="多选框测试" />
            <div>
              <Button type="submit">注册</Button>
              <Button type="reset" style={{ marginLeft: 8 }}>
                重置
              </Button>
            </div>
          </Form>
        </Row>
      </div>
      <h2 style={{ marginBottom: 20 }}>浮动标签</h2>
      <div style={boxStyle}>
        <Row>
          <Form labelLayout="float" columns={3} header="Float Label">
            <TextField
              colSpan={3}
              label="手机号"
              pattern="1[3-9]\d{9}"
              name="phone"
              required
              placeholder="请输入手机号"
              addonBefore="+86"
              addonAfter="中国大陆"
            />
            <ColorPicker label="颜色选择" />
            <Cascader
              label="请选择对应的地方"
              value={["zhejiang", "hangzhou", "xihu"]}
              options={options}
              onChange={onChange}
              placeholder="请选择对应的地方"
            />
            <Password label="密码" name="password" required />
            <Password
              label="确认密码"
              name="confirmPassword"
              required
              validator={passwordValidator}
              help="请输入与左侧相同的密码"
              disabled
            />
            <NumberField
              rowSpan={2}
              label="年龄"
              name="age"
              min={18}
              step={1}
              required
            />
            <SelectBox label="性别" name="sex" required>
              <Option value="M">男</Option>
              <Option value="F">女</Option>
            </SelectBox>
            <Select label="语言" name="language" required>
              <Option value="zh-cn">简体中文</Option>
              <Option value="en-us">英语(美国)</Option>
              <Option value="ja-jp">日本語</Option>
            </Select>
            <EmailField
              prefix={<Icon type="mail_outline" />}
              label="邮箱"
              name="email"
              multiple
            />
            <TextArea
              rowSpan={2}
              colSpan={2}
              label="简介"
              name="description"
              required
              style={{ height: 80 }}
              placeholder="请输入简介"
            />
            <UrlField
              label="个人主页"
              name="homepage"
              required
              help="请输入你的个人主页，如Github Pages个人博客"
              showHelp="tooltip"
              renderer={({ text }) => text || "首页"}
            />
            <DatePicker label="生日" name="birth" required />
            <Range label="阈值" name="threshold" required />
            <Switch label="是否冻结" name="frozen" required />
            <CheckBox label="是否显示" name="frozen" required />
            <div newLine colSpan={3}>
              <Button type="submit">注册</Button>
              <Button type="reset" style={{ marginLeft: 8 }}>
                重置
              </Button>
            </div>
          </Form>
        </Row>
      </div>

      <h2>设置冒号模式</h2>
      <div style={boxStyle}>
        <Row>
          <Form labelLayout="float" columns={2} showValidation="newLine">
            <TextField
              label="项目编码"
              name="code"
              placeholder="输入项目编码"
              clearButton
              required
            />
            <SelectBox label="性别" name="sex">
              <Option value="M">男</Option>
              <Option value="F">女</Option>
            </SelectBox>
            <Select label="合同分类">
              <Select.Option value="1">选项1</Select.Option>
              <Select.Option value="2">选项2</Select.Option>
            </Select>
            <TextField
              label="合同名称"
              name="name"
              placeholder="输入合同名称"
              defaultValue="上海信息技术股份有限公司"
              clearButton
            />
            <Output label="合同性质" defaultValue="普通合同" required />
            <TextField
              label="兑本位币汇率"
              name="huilu"
              defaultValue="2"
              clearButton
              required
            />
            <Select
              label={
                <Tooltip title="提示信息">
                  <span>
                    结算方式
                    <Icon
                      style={{ marginTop: "-3px", marginLeft: "8px" }}
                      type="info-o"
                    />
                  </span>
                </Tooltip>
              }
            >
              <Select.Option value="1">选项1</Select.Option>
              <Select.Option value="2">选项2</Select.Option>
            </Select>
            <TextArea
              colSpan={2}
              label="兑本位币汇率"
              placeholder="请输入签约背景的内容"
              autoSize={{ minRows: 1 }}
              required
            />
            <Password label="密码" name="password" required />
            <Password
              label="确认密码"
              name="confirmPassword"
              required
              disabled
            />
          </Form>
        </Row>
      </div>

      <h2>标签内嵌</h2>
      <div style={boxStyle}>
        <div style={{ width: "320px" }}>
          <Form labelLayout="placeholder" showValidation="newLine">
            <TextField
              label="登录名/邮箱"
              name="emall"
              placeholder="登录名/邮箱"
              clearButton
            />
            <Password label="密码" name="password" />
          </Form>
        </div>
      </div>
      <h2 style={{ marginBottom: 10 }}>表单头</h2>
      <div style={boxStyle}>
        <Row>
          <Form
            header="Custom Header"
            labelAlign="left"
            showValidation="newLine"
          >
            <Output name="test" label="测试Output" value="Output value" />
            <TextField
              label="手机号"
              pattern="1[3-9]\d{9}"
              name="phone"
              clearButton
            />
            <TextField label="多选" name="multiple" multiple clearButton />
            <Password label="密码" name="password" required />
            <EmailField label="email" clearButton />
            <Password
              label="确认密码"
              name="confirmPassword"
              required
              placeholder="请输入密码"
            />
            <SelectBox colSpan={2} label="性别" name="sex" required multiple>
              <SelectBox.Option value="M">男</SelectBox.Option>
              <SelectBox.Option value="F">女</SelectBox.Option>
            </SelectBox>
            <CheckBox label="测试checkbox" />
            <Select label="选择框测试">
              <Select.Option value="1">选项1</Select.Option>
              <Select.Option value="2">选项2</Select.Option>
            </Select>
            {/* <CSelect>
              <CSelect.Option value="1">选项11</CSelect.Option>
              <CSelect.Option value="2">选项22</CSelect.Option>
            </CSelect> */}
            <AutoComplete disabled label="Auto Complete" />
            <AutoComplete label="Auto Complete multiple" multiple />
            <TextArea
              label={
                <span>
                  文本域
                  <Tooltip title="提示">
                    <Icon type="help" />
                  </Tooltip>
                </span>
              }
              autoSize={{ minRows: 1 }}
            />
            <Lov dataSet={ds} name="code" noCache label="Lov联级选择框测试" />
            <ColorPicker label="颜色选择器" />
            <IconPicker label="图标选择器" />
            {/* <Upload label="上传图片">
              <ComButton type="dashed">
                <Icon type="merge_type" /> 上传logo
              </ComButton>
            </Upload> */}
            {/* <Upload {...UploadProps}>
              <Button type="dashed">
                <Icon type="merge_type" /> 上传logo
              </Button>
            </Upload> */}
          </Form>
        </Row>
      </div>
      <h2 style={{ marginBottom: 20 }}>Form horizontal水平布局</h2>
      <div style={boxStyle}>
        <Row>
          <Form labelLayout="horizontal">
            <TextField
              label="手机号"
              pattern="1[3-9]\d{9}"
              name="phone"
              required
              clearButton
            />
            <Password label="密码" name="password" required />
            <Password
              label="确认密码"
              name="confirmPassword"
              required
              disabled
            />
          </Form>
        </Row>
      </div>
      <h2 style={{ marginBottom: 20 }}>Form 垂直布局（vertical）</h2>
      <div style={boxStyle}>
        <Row>
          <Col span={24}>
            <Form labelLayout="vertical" columns={3} useColon>
              {/* <TextField
                label="手机号"
                pattern="1[3-9]\d{9}"
                name="phone"
                required
                clearButton
              /> */}
              <SelectBox label="性别" name="sex" required>
                <Option value="M">男</Option>
                <Option value="F">女</Option>
              </SelectBox>
              <Password label="密码" name="password" required />
              <Output
                label="消息名称"
                defaultValue="11111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111"
                required
              />
              <TextField
                label="手机号"
                pattern="1[3-9]\d{9}"
                name="phone"
                required
                clearButton
              />
              {/* <TextField
                label="手机号"
                pattern="1[3-9]\d{9}"
                name="phone"
                required
                clearButton
              /> */}
              <Output label="消息名称" defaultValue="消息名称" />
              <IntlField label="消息名称" />
              <TextField
                label="手机号"
                pattern="1[3-9]\d{9}"
                name="phone"
                required
                clearButton
              />
            </Form>
          </Col>
          {/* <Col span={8}>
            <Button>更多</Button>
            <Button>重置</Button>
            <Button>查询</Button>
          </Col> */}
        </Row>
      </div>
      {/* <h2>Form float布局</h2>
      <div style={boxStyle}>
        <Row>
          <Form labelLayout="float" columns={3}>
            <TextField
              label="确认密码"
              colSpan={3}
              renderer={() => {
                return <em>确认密码</em>;
              }}
              name="phone"
              required
            />
            <Password label="密码" name="password" required />
            <Password
              label="确认密码"
              name="confirmPassword"
              required
              validator={passwordValidator}
              help="请输入与左侧相同的密码"
              disabled
            />
            <NumberField
              rowSpan={2}
              label="年龄"
              name="age"
              multiple
              clearButton
              min={18}
              step={1}
              required
            />
            <SelectBox label="性别" name="sex" required>
              <Option value="M">男</Option>
              <Option value="F">女</Option>
            </SelectBox>
            <Select label="语言" multiple name="language" clearButton required>
              <Option value="zh-cn">简体中文</Option>
              <Option value="en-us">英语(美国)</Option>
              <Option value="ja-jp">日本語</Option>
              <Option value="ja-jp8">日本語</Option>
              <Option value="ja-jp1">日本語</Option>
              <Option value="ja-jp2">日本語</Option>
              <Option value="ja-jp3">日本語</Option>
              <Option value="ja-jp4">日本語</Option>
              <Option value="ja-jp5">日本語</Option>
            </Select>
            <TreeSelect label="树下拉" multiple name="user">
              <TreeNode value="parent 1" title="parent 1">
                <TreeNode value="parent 1-0" title="parent 1-0">
                  <TreeNode value="leaf1" title="my leaf" />
                  <TreeNode value="leaf2" title="your leaf" />
                </TreeNode>
                <TreeNode value="parent 1-1" title="parent 1-1">
                  <TreeNode
                    value="sss"
                    title={<b style={{ color: "#08c" }}>sss</b>}
                  />
                </TreeNode>
              </TreeNode>
            </TreeSelect>
            <EmailField
              prefix={<Icon type="mail_outline" />}
              label="邮箱"
              name="email"
              clearButton
              multiple
            />
            <TextArea
              rowSpan={2}
              colSpan={2}
              label="简介"
              name="description"
              required
              style={{ height: 80 }}
              placeholder="请输入简介请输入你的个人主页，如Github Pages个人博客请输入你的个人主页，如Github Pages个人博客"
            />
            <UrlField
              label="个人主页"
              name="homepage"
              required
              help="请输入你的个人主页，如Github Pages个人博客"
              showHelp="tooltip"
            />
            <DatePicker range label="生日" name="birth" required />
            <DatePicker
              newLine
              multiple
              label="生日multiple"
              name="birth"
              required
            />
            <Range newLine label="阈值" name="threshold" required />
            <Switch label="是否冻结" name="frozen" required />
            <CheckBox label="是否显示" name="frozen" required />
            <div newLine colSpan={3}>
              <Button type="submit">注册</Button>
              <Button type="reset" style={{ marginLeft: 8 }}>
                重置
              </Button>
            </div>
          </Form>
        </Row>
        <h4>设置label宽度</h4>
        <Row type="flex" className="c7n-form-float-row">
          <Col span={16}>
            <Form columns={3} labelWidth={200} labelLayout="float">
              <Select placeholder="请输入密码" label="选择框测试">
                <Select.Option value="1">选项1</Select.Option>
                <Select.Option value="2">选项2</Select.Option>
              </Select>
              <TextField range label="手机号" name="phone" clearButton />
              <NumberField range label="手机号" name="phone" clearButton />
              <TextField
                label="手机号"
                pattern="1[3-9]\d{9}"
                name="phone"
                required
                clearButton
              />
              <TextField
                label="Text multiple"
                pattern="1[3-9]\d{9}"
                name="phone"
                multiple
                required
                clearButton
              />
              <Select label="选择框测试">
                <Select.Option value="1">选项1</Select.Option>
                <Select.Option value="2">选项2</Select.Option>
              </Select>
              <Password label="密码" name="password" required />
              <EmailField label="email" clearButton />
              <AutoComplete label="Auto Complete" />
              <AutoComplete label="Auto Complete Multiple" multiple />
            </Form>
          </Col>
          <Col span={8}>
            <Button>更多</Button>
            <Button>重置</Button>
            <Button>查询</Button>
          </Col>
        </Row>
      </div>
       */}
      <h2>栅格布局（三列模式）</h2>
      <div style={boxStyle}>
        <h4 style={{ margin: "10px 0" }}>基础</h4>
        <Row>
          <Col span={12}>
            <SelectBox
              colSpan={labelLayout === "horizontal" ? 2 : 3}
              label="labelLayout"
              value={labelLayout}
              onChange={setLabelLayout}
            >
              <Option value="horizontal">horizontal</Option>
              <Option value="vertical">vertical</Option>
              <Option value="placeholder">placeholder</Option>
              <Option value="float">float</Option>
              <Option value="none">none</Option>
            </SelectBox>
          </Col>
        </Row>
        <Row>
          <Col span={12}>
            <Form
              header="Custom Header"
              columns={3}
              useColon
              labelLayout={labelLayout}
            >
              <TextField
                label="手机号"
                pattern="1[3-9]\d{9}"
                name="phone"
                required
                clearButton
              />
              <Password label="密码" name="password" required />
              <Password
                label="确认密码"
                name="confirmPassword"
                required
                disabled
              />
              <Switch label="Switch" />
            </Form>
          </Col>
          <Col span={12}>
            <Form
              header="Custom Header"
              columns={3}
              useColon
              labelLayout={labelLayout}
            >
              <Form.Item>
                <TextField
                  label="手机号"
                  pattern="1[3-9]\d{9}"
                  name="phone"
                  required
                  clearButton
                />
              </Form.Item>
              <Form.Item>
                <Password label="密码" name="password" required />
              </Form.Item>
              <Form.Item>
                <Password
                  label="确认密码"
                  name="confirmPassword"
                  required
                  disabled
                />
              </Form.Item>
              <Form.Item>
                <Switch label="Switch" />
              </Form.Item>
            </Form>
          </Col>
        </Row>
      </div>
      <Form
        header="栅格布局"
        record={ds.current}
        layout="none"
        labelLayout={labelLayout}
      >
        <Row gutter={10}>
          <Col span={6}>
            <Form.Item>
              <TextField pattern="1[3-9]\d{9}" name="phone" />
            </Form.Item>
          </Col>
          <Col span={6}>
            <Form.Item>
              <Password name="password" />
            </Form.Item>
          </Col>
          <Col span={6}>
            <Form.Item>
              <Password name="confirmPassword" />
            </Form.Item>
          </Col>
          <Col span={6}>
            <Form.Item>
              <NumberField
                name="age"
                min={18}
                step={1}
                addonAfter="周岁"
                showHelp="tooltip"
              />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={10}>
          <Col span={6}>
            <Form.Item>
              <SelectBox name="sex">
                <Option value="M">男</Option>
                <Option value="F">女</Option>
              </SelectBox>
            </Form.Item>
          </Col>
          <Col span={6}>
            <Form.Item>
              <Select name="language">
                <Option value="zh-cn">简体中文</Option>
                <Option value="en-us">英语(美国)</Option>
                <Option value="ja-jp">日本語</Option>
              </Select>
            </Form.Item>
          </Col>
          <Col span={6}>
            <Form.Item>
              <EmailField name="email" />
            </Form.Item>
          </Col>
          <Col span={6}>
            <Form.Item>
              <UrlField name="homepage" />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={10}>
          <Col span={6}>
            <Form.Item useColon={false}>
              <DatePicker name="birth" />
            </Form.Item>
          </Col>
          <Col span={6}>
            <FormVirtualGroup useColon={false}>
              <Form.Item name="code">
                <Lov />
              </Form.Item>
            </FormVirtualGroup>
          </Col>
        </Row>
        <Form.Item>
          <div>
            <Button type="submit">注册</Button>
            <Button type="reset" style={{ marginLeft: 8 }}>
              重置
            </Button>
          </div>
        </Form.Item>
      </Form>
      <div>
        <div>
          <h2>非Form下使用：</h2>
          <Row>
            <Col span={10}>
              <ItemGroup compact>
                <Select style={{ width: "30%" }} required>
                  <Option value="China">中国</Option>
                  <Option value="America">美国</Option>
                  <Option value="Japan">日本</Option>
                </Select>
                <TextField style={{ width: "50%" }} required clearButton />
              </ItemGroup>
            </Col>
            <Col span={10} offset={2}>
              <ItemGroup>
                <TextField
                  style={{ width: "30%" }}
                  help="这里是提示信息"
                  required
                  clearButton
                />
                <TextField style={{ width: "50%" }} required clearButton />
              </ItemGroup>
            </Col>
          </Row>
          <Row>
            <Col span={10}>
              <ItemGroup compact>
                <Select style={{ width: "30%" }}>
                  <Option value="China">中国</Option>
                  <Option value="America">美国</Option>
                  <Option value="Japan">日本</Option>
                </Select>
                <TextField style={{ width: "50%" }} clearButton />
              </ItemGroup>
            </Col>
            <Col span={10} offset={2}>
              <ItemGroup>
                <TextField
                  style={{ width: "30%" }}
                  help="这里是提示信息"
                  clearButton
                />
                <TextField style={{ width: "50%" }} clearButton />
              </ItemGroup>
            </Col>
          </Row>
        </div>
        <br />
        <h2>Form下使用：</h2>
        <Form
          showValidation="newLine"
          dataSet={groupDs}
          style={{ width: "4.5rem" }}
          labelWidth={120}
        >
          <ItemGroup
            label="手机号(compact)"
            help="请正确填写手机号"
            required
            useColon
            compact
            labelWidth={200}
            labelTooltip="always"
          >
            <TextField
              name="phonePrefix"
              placeholder="例：+86"
              style={{ width: "40%" }}
              help="手机区号"
            />
            <TextField name="phone" style={{ width: "50%" }} />
          </ItemGroup>
          <ItemGroup
            label="手机号手机号手机号"
            help="请正确填写手机号"
            required
            useColon
          >
            <Form.Item>
              <TextField
                name="phonePrefix"
                placeholder="例：+86"
                style={{ width: "40%" }}
                help="手机区号"
              />
            </Form.Item>
            <Form.Item>
              <TextField name="phone" style={{ width: "50%" }} />
            </Form.Item>
          </ItemGroup>
          <ItemGroup label="年龄" help="正确输入年龄" required useColon compact>
            <Select name="ageLevel" style={{ width: "40%" }} required>
              <Option value="young">青年</Option>
              <Option value="old">老年</Option>
            </Select>
            <NumberField name="age" addonAfter="周岁" showHelp="tooltip" />
          </ItemGroup>
          <ItemGroup label="生日" required useColon compact>
            <DatePicker name="birthDate" mode="date" />
            <DatePicker name="birthTime" mode="time" />
          </ItemGroup>

          <div>
            <Button type="submit">注册</Button>
            <Button type="reset">重置</Button>
            <Button onClick={clear}>清空</Button>
          </div>
          <div>
            <Button onClick={validateCurrent}>校验当前记录</Button>
          </div>
        </Form>
      </div>
    </Content>
  );
};

export default withThemedLayout({
  title: "Form/Pro 组件",
  name: "input",
  styleCount: 2,
})(CheckBoxPage);
