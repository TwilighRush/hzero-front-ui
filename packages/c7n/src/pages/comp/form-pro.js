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
    return "???????????????????????????????????????????????????";
  }
  return true;
}
const CheckBoxPage = () => {
  const [labelAlign, setlabelAlign] = useState("left");
  const ds = new DataSet({
    autoCreate: true,
    fields: [
      { name: "phone", type: "string", label: "?????????", required: true },
      { name: "password", type: "string", label: "??????", required: true },
      {
        name: "confirmPassword",
        type: "string",
        label: "????????????",
        required: true,
        validator: passwordValidator,
      },
      {
        name: "age",
        type: "number",
        label: "??????",
        required: true,
        help: "??????????????????????????????",
      },
      { name: "sex", type: "string", label: "??????", required: true },
      {
        name: "language",
        type: "string",
        label: "??????",
        required: true,
        help: "?????????????????????????????????????????????????????????????????????????????????",
      },
      { name: "email", type: "email", label: "??????", required: true },
      { name: "homepage", type: "url", label: "????????????", required: true },
      { name: "birth", type: "date", label: "??????", required: true },
      { name: "code", type: "object", label: "????????????", lovCode: "LOV_CODE" },
    ],
  });
  const [labelLayout, setLabelLayout] = useState("horizontal");

  const groupDs = new DataSet({
    autoCreate: true,
    fields: [
      {
        name: "phonePrefix",
        type: "string",
        label: "????????????",
        required: true,
      },
      {
        name: "phone",
        type: "string",
        label: "?????????",
        labelWidth: 150,
        required: true,
        pattern: "^1[3-9]\\d{9}$",
      },
      {
        name: "ageLevel",
        type: "string",
        label: "????????????",
        required: true,
      },
      {
        name: "age",
        type: "number",
        label: "??????",
        required: true,
        min: 18,
        step: 1,
        help: "??????????????????????????????",
      },
      { name: "birthDate", type: "date", label: "????????????", required: true },
      { name: "birthTime", type: "time", label: "????????????", required: true },
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
      <h2>????????????(????????????)</h2>
      <div style={boxStyle}>
        <Row>
          <Button onClick={() => setlabelAlign("left")}>left??????</Button>
          <Button onClick={() => setlabelAlign("right")}>right??????</Button>
        </Row>
        <Row>
          <Form
            id="basic"
            style={{ width: "4rem" }}
            labelAlign={labelAlign}
            showValidation="newLine"
          >
            <TextField
              label="?????????"
              pattern="1[3-9]\d{9}"
              name="phone"
              placeholder="?????????"
              required
              clearButton
              addonBefore="+86"
              addonAfter="????????????"
            />
            <Switch label="Switch" required name="switch" />
            <Password label="??????" name="password" required />
            <Password
              label="????????????"
              name="confirmPassword"
              required
              validator={passwordValidator}
              help="?????????????????????????????????"
              showHelp="tooltip"
            />
            <NumberField
              label="??????"
              name="age"
              min={18}
              step={1}
              required
              help="??????????????????????????????"
              addonAfter="??????"
            />
            <SelectBox label="??????" name="sex" required>
              <Option value="M">???</Option>
              <Option value="F">???</Option>
            </SelectBox>
            <Select
              label="??????"
              name="language"
              required
              multiple
              help="?????????????????????????????????????????????????????????????????????????????????"
            >
              <Option value="zh-cn">????????????</Option>
              <Option value="en-us">??????(??????)</Option>
              <Option value="ja-jp">?????????</Option>
            </Select>
            <EmailField label="??????" name="email" required />
            <UrlField
              label="????????????"
              name="homepage"
              required
              addonBefore="Http://"
            />
            <DatePicker label="??????" name="birth" required />
            <div>
              <Button type="submit">??????</Button>
              <Button type="reset" style={{ marginLeft: 8 }}>
                ??????
              </Button>
            </div>
          </Form>
        </Row>
      </div>
      <h2>????????????</h2>
      <div style={boxStyle}>
        <Row>
          <Form
            id="basic"
            style={{ width: "4rem" }}
            showValidation="newLine"
            labelLayout="vertical"
          >
            <TextField
              label="?????????"
              labelWidth={100}
              pattern="1[3-9]\d{9}"
              name="phone"
              placeholder="?????????"
              required
              clearButton
              addonBefore="+86"
              addonAfter="????????????"
            />
            <Switch label="Switch" required name="switch" />
            <Password label="??????" name="password" required />
            <Password
              label="????????????"
              name="confirmPassword"
              required
              validator={passwordValidator}
              help="?????????????????????????????????"
              showHelp="tooltip"
            />
            <NumberField
              label="??????"
              name="age"
              min={18}
              step={1}
              required
              help="??????????????????????????????"
              addonAfter="??????"
            />
            <SelectBox label="??????" name="sex" required>
              <Option value="M">???</Option>
              <Option value="F">???</Option>
            </SelectBox>
            <Select
              label="??????"
              name="language"
              required
              multiple
              help="?????????????????????????????????????????????????????????????????????????????????"
            >
              <Option value="zh-cn">????????????</Option>
              <Option value="en-us">??????(??????)</Option>
              <Option value="ja-jp">?????????</Option>
            </Select>
            <EmailField label="??????" name="email" required />
            <UrlField
              label="????????????"
              name="homepage"
              required
              addonBefore="Http://"
            />
            <DatePicker label="??????" name="birth" required />
            <TextArea label="???????????????" />
            <div>
              <Button type="submit">??????</Button>
              <Button type="reset" style={{ marginLeft: 8 }}>
                ??????
              </Button>
            </div>
          </Form>
        </Row>
      </div>
      <h2 style={{ marginBottom: 20 }}>????????????</h2>
      <div style={boxStyle}>
        <Row>
          <Form labelLayout="float" columns={3} header="Float Label">
            <TextField
              colSpan={3}
              label="?????????"
              pattern="1[3-9]\d{9}"
              name="phone"
              required
              placeholder="??????????????????"
              addonBefore="+86"
              addonAfter="????????????"
            />
            <ColorPicker label="????????????" />
            <Cascader
              label="????????????????????????"
              value={["zhejiang", "hangzhou", "xihu"]}
              options={options}
              onChange={onChange}
              placeholder="????????????????????????"
            />
            <Password label="??????" name="password" required />
            <Password
              label="????????????"
              name="confirmPassword"
              required
              validator={passwordValidator}
              help="?????????????????????????????????"
              disabled
            />
            <NumberField
              rowSpan={2}
              label="??????"
              name="age"
              min={18}
              step={1}
              required
            />
            <SelectBox label="??????" name="sex" required>
              <Option value="M">???</Option>
              <Option value="F">???</Option>
            </SelectBox>
            <Select label="??????" name="language" required>
              <Option value="zh-cn">????????????</Option>
              <Option value="en-us">??????(??????)</Option>
              <Option value="ja-jp">?????????</Option>
            </Select>
            <EmailField
              prefix={<Icon type="mail_outline" />}
              label="??????"
              name="email"
              multiple
            />
            <TextArea
              rowSpan={2}
              colSpan={2}
              label="??????"
              name="description"
              required
              style={{ height: 80 }}
              placeholder="???????????????"
            />
            <UrlField
              label="????????????"
              name="homepage"
              required
              help="?????????????????????????????????Github Pages????????????"
              showHelp="tooltip"
              renderer={({ text }) => text || "??????"}
            />
            <DatePicker label="??????" name="birth" required />
            <Range label="??????" name="threshold" required />
            <Switch label="????????????" name="frozen" required />
            <CheckBox label="????????????" name="frozen" required />
            <div newLine colSpan={3}>
              <Button type="submit">??????</Button>
              <Button type="reset" style={{ marginLeft: 8 }}>
                ??????
              </Button>
            </div>
          </Form>
        </Row>
      </div>

      <h2>??????????????????</h2>
      <div style={boxStyle}>
        <Row>
          <Form labelLayout="float" columns={2} showValidation="newLine">
            <TextField
              label="????????????"
              name="code"
              placeholder="??????????????????"
              clearButton
              required
            />
            <SelectBox label="??????" name="sex">
              <Option value="M">???</Option>
              <Option value="F">???</Option>
            </SelectBox>
            <Select label="????????????">
              <Select.Option value="1">??????1</Select.Option>
              <Select.Option value="2">??????2</Select.Option>
            </Select>
            <TextField
              label="????????????"
              name="name"
              placeholder="??????????????????"
              defaultValue="????????????????????????????????????"
              clearButton
            />
            <Output label="????????????" defaultValue="????????????" required />
            <TextField
              label="??????????????????"
              name="huilu"
              defaultValue="2"
              clearButton
              required
            />
            <Select
              label={
                <Tooltip title="????????????">
                  <span>
                    ????????????
                    <Icon
                      style={{ marginTop: "-3px", marginLeft: "8px" }}
                      type="info-o"
                    />
                  </span>
                </Tooltip>
              }
            >
              <Select.Option value="1">??????1</Select.Option>
              <Select.Option value="2">??????2</Select.Option>
            </Select>
            <TextArea
              colSpan={2}
              label="??????????????????"
              placeholder="??????????????????????????????"
              autoSize={{ minRows: 1 }}
              required
            />
            <Password label="??????" name="password" required />
            <Password
              label="????????????"
              name="confirmPassword"
              required
              disabled
            />
          </Form>
        </Row>
      </div>

      <h2>????????????</h2>
      <div style={boxStyle}>
        <div style={{ width: "320px" }}>
          <Form labelLayout="placeholder" showValidation="newLine">
            <TextField
              label="?????????/??????"
              name="emall"
              placeholder="?????????/??????"
              clearButton
            />
            <Password label="??????" name="password" />
          </Form>
        </div>
      </div>
      <h2 style={{ marginBottom: 10 }}>?????????</h2>
      <div style={boxStyle}>
        <Row>
          <Form
            header="Custom Header"
            labelAlign="left"
            showValidation="newLine"
          >
            <Output name="test" label="??????Output" value="Output value" />
            <TextField
              label="?????????"
              pattern="1[3-9]\d{9}"
              name="phone"
              clearButton
            />
            <TextField label="??????" name="multiple" multiple clearButton />
            <Password label="??????" name="password" required />
            <EmailField label="email" clearButton />
            <Password
              label="????????????"
              name="confirmPassword"
              required
              placeholder="???????????????"
            />
            <SelectBox colSpan={2} label="??????" name="sex" required multiple>
              <SelectBox.Option value="M">???</SelectBox.Option>
              <SelectBox.Option value="F">???</SelectBox.Option>
            </SelectBox>
            <CheckBox label="??????checkbox" />
            <Select label="???????????????">
              <Select.Option value="1">??????1</Select.Option>
              <Select.Option value="2">??????2</Select.Option>
            </Select>
            {/* <CSelect>
              <CSelect.Option value="1">??????11</CSelect.Option>
              <CSelect.Option value="2">??????22</CSelect.Option>
            </CSelect> */}
            <AutoComplete disabled label="Auto Complete" />
            <AutoComplete label="Auto Complete multiple" multiple />
            <TextArea
              label={
                <span>
                  ?????????
                  <Tooltip title="??????">
                    <Icon type="help" />
                  </Tooltip>
                </span>
              }
              autoSize={{ minRows: 1 }}
            />
            <Lov dataSet={ds} name="code" noCache label="Lov?????????????????????" />
            <ColorPicker label="???????????????" />
            <IconPicker label="???????????????" />
            {/* <Upload label="????????????">
              <ComButton type="dashed">
                <Icon type="merge_type" /> ??????logo
              </ComButton>
            </Upload> */}
            {/* <Upload {...UploadProps}>
              <Button type="dashed">
                <Icon type="merge_type" /> ??????logo
              </Button>
            </Upload> */}
          </Form>
        </Row>
      </div>
      <h2 style={{ marginBottom: 20 }}>Form horizontal????????????</h2>
      <div style={boxStyle}>
        <Row>
          <Form labelLayout="horizontal">
            <TextField
              label="?????????"
              pattern="1[3-9]\d{9}"
              name="phone"
              required
              clearButton
            />
            <Password label="??????" name="password" required />
            <Password
              label="????????????"
              name="confirmPassword"
              required
              disabled
            />
          </Form>
        </Row>
      </div>
      <h2 style={{ marginBottom: 20 }}>Form ???????????????vertical???</h2>
      <div style={boxStyle}>
        <Row>
          <Col span={24}>
            <Form labelLayout="vertical" columns={3} useColon>
              {/* <TextField
                label="?????????"
                pattern="1[3-9]\d{9}"
                name="phone"
                required
                clearButton
              /> */}
              <SelectBox label="??????" name="sex" required>
                <Option value="M">???</Option>
                <Option value="F">???</Option>
              </SelectBox>
              <Password label="??????" name="password" required />
              <Output
                label="????????????"
                defaultValue="11111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111"
                required
              />
              <TextField
                label="?????????"
                pattern="1[3-9]\d{9}"
                name="phone"
                required
                clearButton
              />
              {/* <TextField
                label="?????????"
                pattern="1[3-9]\d{9}"
                name="phone"
                required
                clearButton
              /> */}
              <Output label="????????????" defaultValue="????????????" />
              <IntlField label="????????????" />
              <TextField
                label="?????????"
                pattern="1[3-9]\d{9}"
                name="phone"
                required
                clearButton
              />
            </Form>
          </Col>
          {/* <Col span={8}>
            <Button>??????</Button>
            <Button>??????</Button>
            <Button>??????</Button>
          </Col> */}
        </Row>
      </div>
      {/* <h2>Form float??????</h2>
      <div style={boxStyle}>
        <Row>
          <Form labelLayout="float" columns={3}>
            <TextField
              label="????????????"
              colSpan={3}
              renderer={() => {
                return <em>????????????</em>;
              }}
              name="phone"
              required
            />
            <Password label="??????" name="password" required />
            <Password
              label="????????????"
              name="confirmPassword"
              required
              validator={passwordValidator}
              help="?????????????????????????????????"
              disabled
            />
            <NumberField
              rowSpan={2}
              label="??????"
              name="age"
              multiple
              clearButton
              min={18}
              step={1}
              required
            />
            <SelectBox label="??????" name="sex" required>
              <Option value="M">???</Option>
              <Option value="F">???</Option>
            </SelectBox>
            <Select label="??????" multiple name="language" clearButton required>
              <Option value="zh-cn">????????????</Option>
              <Option value="en-us">??????(??????)</Option>
              <Option value="ja-jp">?????????</Option>
              <Option value="ja-jp8">?????????</Option>
              <Option value="ja-jp1">?????????</Option>
              <Option value="ja-jp2">?????????</Option>
              <Option value="ja-jp3">?????????</Option>
              <Option value="ja-jp4">?????????</Option>
              <Option value="ja-jp5">?????????</Option>
            </Select>
            <TreeSelect label="?????????" multiple name="user">
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
              label="??????"
              name="email"
              clearButton
              multiple
            />
            <TextArea
              rowSpan={2}
              colSpan={2}
              label="??????"
              name="description"
              required
              style={{ height: 80 }}
              placeholder="????????????????????????????????????????????????Github Pages?????????????????????????????????????????????Github Pages????????????"
            />
            <UrlField
              label="????????????"
              name="homepage"
              required
              help="?????????????????????????????????Github Pages????????????"
              showHelp="tooltip"
            />
            <DatePicker range label="??????" name="birth" required />
            <DatePicker
              newLine
              multiple
              label="??????multiple"
              name="birth"
              required
            />
            <Range newLine label="??????" name="threshold" required />
            <Switch label="????????????" name="frozen" required />
            <CheckBox label="????????????" name="frozen" required />
            <div newLine colSpan={3}>
              <Button type="submit">??????</Button>
              <Button type="reset" style={{ marginLeft: 8 }}>
                ??????
              </Button>
            </div>
          </Form>
        </Row>
        <h4>??????label??????</h4>
        <Row type="flex" className="c7n-form-float-row">
          <Col span={16}>
            <Form columns={3} labelWidth={200} labelLayout="float">
              <Select placeholder="???????????????" label="???????????????">
                <Select.Option value="1">??????1</Select.Option>
                <Select.Option value="2">??????2</Select.Option>
              </Select>
              <TextField range label="?????????" name="phone" clearButton />
              <NumberField range label="?????????" name="phone" clearButton />
              <TextField
                label="?????????"
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
              <Select label="???????????????">
                <Select.Option value="1">??????1</Select.Option>
                <Select.Option value="2">??????2</Select.Option>
              </Select>
              <Password label="??????" name="password" required />
              <EmailField label="email" clearButton />
              <AutoComplete label="Auto Complete" />
              <AutoComplete label="Auto Complete Multiple" multiple />
            </Form>
          </Col>
          <Col span={8}>
            <Button>??????</Button>
            <Button>??????</Button>
            <Button>??????</Button>
          </Col>
        </Row>
      </div>
       */}
      <h2>??????????????????????????????</h2>
      <div style={boxStyle}>
        <h4 style={{ margin: "10px 0" }}>??????</h4>
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
                label="?????????"
                pattern="1[3-9]\d{9}"
                name="phone"
                required
                clearButton
              />
              <Password label="??????" name="password" required />
              <Password
                label="????????????"
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
                  label="?????????"
                  pattern="1[3-9]\d{9}"
                  name="phone"
                  required
                  clearButton
                />
              </Form.Item>
              <Form.Item>
                <Password label="??????" name="password" required />
              </Form.Item>
              <Form.Item>
                <Password
                  label="????????????"
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
        header="????????????"
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
                addonAfter="??????"
                showHelp="tooltip"
              />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={10}>
          <Col span={6}>
            <Form.Item>
              <SelectBox name="sex">
                <Option value="M">???</Option>
                <Option value="F">???</Option>
              </SelectBox>
            </Form.Item>
          </Col>
          <Col span={6}>
            <Form.Item>
              <Select name="language">
                <Option value="zh-cn">????????????</Option>
                <Option value="en-us">??????(??????)</Option>
                <Option value="ja-jp">?????????</Option>
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
            <Button type="submit">??????</Button>
            <Button type="reset" style={{ marginLeft: 8 }}>
              ??????
            </Button>
          </div>
        </Form.Item>
      </Form>
      <div>
        <div>
          <h2>???Form????????????</h2>
          <Row>
            <Col span={10}>
              <ItemGroup compact>
                <Select style={{ width: "30%" }} required>
                  <Option value="China">??????</Option>
                  <Option value="America">??????</Option>
                  <Option value="Japan">??????</Option>
                </Select>
                <TextField style={{ width: "50%" }} required clearButton />
              </ItemGroup>
            </Col>
            <Col span={10} offset={2}>
              <ItemGroup>
                <TextField
                  style={{ width: "30%" }}
                  help="?????????????????????"
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
                  <Option value="China">??????</Option>
                  <Option value="America">??????</Option>
                  <Option value="Japan">??????</Option>
                </Select>
                <TextField style={{ width: "50%" }} clearButton />
              </ItemGroup>
            </Col>
            <Col span={10} offset={2}>
              <ItemGroup>
                <TextField
                  style={{ width: "30%" }}
                  help="?????????????????????"
                  clearButton
                />
                <TextField style={{ width: "50%" }} clearButton />
              </ItemGroup>
            </Col>
          </Row>
        </div>
        <br />
        <h2>Form????????????</h2>
        <Form
          showValidation="newLine"
          dataSet={groupDs}
          style={{ width: "4.5rem" }}
          labelWidth={120}
        >
          <ItemGroup
            label="?????????(compact)"
            help="????????????????????????"
            required
            useColon
            compact
            labelWidth={200}
            labelTooltip="always"
          >
            <TextField
              name="phonePrefix"
              placeholder="??????+86"
              style={{ width: "40%" }}
              help="????????????"
            />
            <TextField name="phone" style={{ width: "50%" }} />
          </ItemGroup>
          <ItemGroup
            label="???????????????????????????"
            help="????????????????????????"
            required
            useColon
          >
            <Form.Item>
              <TextField
                name="phonePrefix"
                placeholder="??????+86"
                style={{ width: "40%" }}
                help="????????????"
              />
            </Form.Item>
            <Form.Item>
              <TextField name="phone" style={{ width: "50%" }} />
            </Form.Item>
          </ItemGroup>
          <ItemGroup label="??????" help="??????????????????" required useColon compact>
            <Select name="ageLevel" style={{ width: "40%" }} required>
              <Option value="young">??????</Option>
              <Option value="old">??????</Option>
            </Select>
            <NumberField name="age" addonAfter="??????" showHelp="tooltip" />
          </ItemGroup>
          <ItemGroup label="??????" required useColon compact>
            <DatePicker name="birthDate" mode="date" />
            <DatePicker name="birthTime" mode="time" />
          </ItemGroup>

          <div>
            <Button type="submit">??????</Button>
            <Button type="reset">??????</Button>
            <Button onClick={clear}>??????</Button>
          </div>
          <div>
            <Button onClick={validateCurrent}>??????????????????</Button>
          </div>
        </Form>
      </div>
    </Content>
  );
};

export default withThemedLayout({
  title: "Form/Pro ??????",
  name: "input",
  styleCount: 2,
})(CheckBoxPage);
