import React, { useState } from "react";
import {
  Row,
  Col,
  // TextField,
  // Password,
  // TextArea,
  // NumberField,
  // IntlField,
  // EmailField,
  // Currency,
  // Lov,
  // Select,
  DataSet,
  // UrlField,
  Icon,
} from "choerodon-ui/pro";
// import { Input } from "choerodon-ui";
import { Content } from "root/components/Page";
import { withThemedLayout } from "../../utils/withThemedLayout";
import UrlField from "../../components/UrlFieldPro";

import TextField from "../../components/TextFieldPro";
import Password from "../../components/PasswordPro";
import EmailField from "../../components/EmailFieldPro";
import Select from "../../components/SelectPro";
import NumberField from "../../components/NumberFieldPro";
import IntlField from "../../components/IntlFieldPro";
import TextArea from "../../components/TextAreaPro";
import Lov from "../../components/LovPro";
import Currency from "../../components/CurrencyPro";
import Input from "../../components/Input";

const { Option } = Select;
const { TextArea: TextAreaC } = Input;

function handleDataSetChange({ value, oldValue }) {
  console.log("[range dataset newValue]", value, "[oldValue]", oldValue);
}

function handleChange(value, oldValue) {
  console.log("[range newValue]", value, "[oldValue]", oldValue);
}

function rangeValidator(value, name) {
  console.log(`[validation ${name} value]`, value);
  return true;
}

class App extends React.Component {
  ds = new DataSet({
    autoCreate: true,
    fields: [
      {
        name: "number1",
        type: "number",
        range: ["start", "end"],
        defaultValue: { start: 0, end: 4 },
        required: true,
        min: 1,
        max: 10,
        step: 1,
        validator: rangeValidator,
      },
      {
        name: "number2",
        type: "number",
        range: true,
        defaultValue: [0, 4],
        validator: rangeValidator,
      },
      {
        name: "multipleNumber",
        type: "number",
        range: true,
        multiple: true,
        required: true,
      },
    ],
    events: {
      update: handleDataSetChange,
    },
  });

  render() {
    return (
      <Row gutter={10}>
        <Col style={{ marginBottom: 10 }} span={24}>
          <NumberField
            dataSet={this.ds}
            name="number1"
            placeholder={["Range Start", "Range End"]}
          />
        </Col>
        <Col style={{ marginBottom: 10 }} span={24}>
          <NumberField
            dataSet={this.ds}
            name="number2"
            placeholder={["Range Start", "Range End"]}
          />
        </Col>
        <Col style={{ marginBottom: 10 }} span={24}>
          <NumberField
            range
            defaultValue={[0, 4]}
            placeholder={["Range Start", "Range End"]}
            onChange={handleChange}
          />
        </Col>
        <Col style={{ marginBottom: 10 }} span={24}>
          <NumberField
            range={["start", "end"]}
            defaultValue={{ start: 0, end: 4 }}
            placeholder={["Range Start", "Range End"]}
            onChange={handleChange}
          />
        </Col>
        <Col style={{ marginBottom: 10 }} span={24}>
          <NumberField
            dataSet={this.ds}
            name="multipleNumber"
            placeholder="Input Number"
          />
        </Col>
      </Row>
    );
  }
}

// const { Option } = Select;

const ds1 = new DataSet({
  autoCreate: true,
  selection: "multiple",
  cacheSelection: true,
  data: [
    {
      code_code: "HR.EMPLOYEE_GENDER, HR.EMPLOYEE_STATUS, c7n",
      code_description: "??????,????????????,c7n",
    },
  ],
  fields: [
    {
      name: "code",
      type: "object",
      lovCode: "LOV_CODE",
      lovDefineUrl: "/sys/lov/lov_define",
      lovQueryUrl: "/dataset/common/lov/dataset/LOV_CODE",
      required: true,
      multiple: true,
    },
    { name: "code_code", type: "string", bind: "code.code", multiple: "," },
    {
      name: "code_description",
      type: "string",
      bind: "code.description",
      multiple: ",",
    },
  ],
});
const dsx = new DataSet({
  autoCreate: true,
  fields: [
    {
      name: "code",
      type: "object",
      lovCode: "LOV_CODE",
      lovDefineUrl: "/sys/lov/lov_define",
      lovQueryUrl: "/dataset/common/lov/dataset/LOV_CODE",
      multiple: true,
      required: true,
    },
    { name: "code_code", type: "string", bind: "code.code", multiple: "," },
    {
      name: "code_description",
      type: "string",
      bind: "code.description",
      multiple: ",",
    },
  ],
  cacheSelection: true,
  selection: "multiple",
});
const dsxx = new DataSet({
  autoCreate: true,
  fields: [
    {
      name: "code",
      type: "object",
      lovCode: "LOV_CODE",
      lovDefineUrl: "/sys/lov/lov_define",
      lovQueryUrl: "/dataset/common/lov/dataset/LOV_CODE",
      // required: true,
    },
    { name: "code_code", type: "string", bind: "code.code" },
    { name: "code_description", type: "string", bind: "code.description" },
  ],
});
const lntlds = new DataSet({
  primaryKey: "pk",
  data: [{ "first-name": "???" }],
  tlsUrl: "/dataset/user/languages",
  fields: [
    {
      name: "first-name",
      type: "intl",
      defaultValue: "Zhangsan",
      required: true,
    },
    {
      name: "last-name",
      type: "intl",
      maxLength: 5,
      required: true,
    },
  ],
  events: {
    update: handleDataSetChange,
  },
});
const boxStyle = {
  margin: 20,
  padding: 20,
  border: "1px solid rgba(90, 94, 154, 0.2)",
  marginLeft: 0,
  borderRadius: 5,
};
const ButtonPage = () => {
  const [value, setValue] = useState("1");
  const vhandleChange = (values) => {
    setValue(values);
  };
  const ds = new DataSet({
    autoCreate: true,
    fields: [
      {
        name: "code",
        type: "object",
        lovCode: "LOV_CODE",
        // lovDefineUrl: "/sys/lov/lov_define",
        // lovQueryUrl: "/dataset/common/lov/dataset/LOV_CODE",
        lovQueryUrl:
          "https://www.fastmock.site/mock/423302b318dd24f1712751d9bfc1cbbc/mock/lov",
        required: true,
      },
      {
        name: "code_string",
        type: "object",
        lovQueryUrl:
          "https://www.fastmock.site/mock/423302b318dd24f1712751d9bfc1cbbc/mock/lov",
        lovCode: "LOV_CODE",
        required: true,
      },
      // { name: "code_code", type: "string", bind: "code.code" },
      // { name: "code_description", type: "string", bind: "code.description" },
    ],
  });
  return (
    <Content>
      <h2>??????</h2>
      <div style={boxStyle}>
        {/* <Lov
          dataSet={ds}
          name="code"
          noCache
          placeholder="??????"
          searchAction="blur"
          fetchSingle
        /> */}
        <Lov dataSet={ds} name="code_string" fetchSingle searchAction="blur" />
        <TextField suffix={<Icon type="search" />} />
      </div>
      <h2>UrlField Url?????????</h2>
      <div style={boxStyle}>
        <h4 style={{ marginBottom: 10 }}>??????</h4>
        <Row gutter={10}>
          <Col span={8}>
            <UrlField placeholder="?????????" required />
          </Col>
          <Col span={8}>
            <UrlField
              placeholder="????????????"
              defaultValue="????????????"
              clearButton
            />
          </Col>
          <Col span={8}>
            <UrlField value="?????????" disabled />
          </Col>
        </Row>
      </div>
      <h2>TextField ???????????????</h2>
      <div style={boxStyle}>
        <h4 style={{ marginBottom: 10 }}>??????</h4>
        <TextArea
          placeholder="??????????????????"
          autoSize={{ minRows: 2, maxRows: 8 }}
        />
        <Row gutter={10}>
          <Col span={8}>
            <TextField
              title="11111"
              placeholder="TextField"
              required
              showLengthInfo
              // prefix={<span>+86</span>}
              maxLength={80000}
              clearButton
              suffix={<span style={{ width: "30px" }}>MB</span>}
            />
          </Col>
          <Col span={8}>
            <TextField
              title="11111"
              placeholder="TextField"
              prefix={<Icon type="search" />}
            />
          </Col>
          <Col span={8}>
            <TextField
              placeholder="????????????"
              defaultValue="????????????"
              clearButton
            />
          </Col>
          <Col span={8}>
            <TextField value="?????????" disabled />
          </Col>
        </Row>
        {/* <h4 style={{ margin: "10px 0" }}>??????</h4>
        <TextField placeholder="??????" readOnly /> */}
        <h4 style={{ margin: "10px 0" }}>?????????</h4>
        <Row gutter={10}>
          <Col span={12}>
            <TextField placeholder="??????" prefix={<span>+86</span>} required />
          </Col>
          <Col span={12}>
            <TextField placeholder="??????" suffix={<span>MB</span>} required />
          </Col>
        </Row>
        <h4 style={{ margin: "10px 0" }}>??????</h4>
        <div style={{ marginBottom: "10px" }}>
          <TextField multiple placeholder="??????" defaultValue={["wu"]} />
        </div>
        <TextField multiple required placeholder="input multiple reuired" />
        <h4 style={{ margin: "10px 0" }}>??????????????????</h4>
        <Row gutter={10}>
          <Col span={12}>
            <TextField
              placeholder="TextField"
              addonBefore={<span>addonBefore</span>}
            />
          </Col>
        </Row>
        <Row gutter={10} style={{ margin: "10px 0" }}>
          <Col span={12}>
            <TextField
              placeholder="TextField"
              addonAfter={<span>addonAfter</span>}
            />
          </Col>
        </Row>
        <Row gutter={10} style={{ margin: "10px 0" }}>
          <Col span={12}>
            <TextField
              placeholder="??????"
              addonAfter={<span>addonAfter</span>}
              addonBefore={<span>addonBefore</span>}
            />
          </Col>
        </Row>
        <Row gutter={10}>
          <Col span={12}>
            <TextField
              placeholder="??????"
              addonBeforeStyle={{
                padding: 0,
                border: "none",
                width: "80px",
              }}
              addonBefore={
                <Select value={value} onChange={vhandleChange}>
                  <Option value="1">?????????</Option>
                  <Option value="2">?????????</Option>
                  <Option value="3">?????????</Option>
                </Select>
              }
            />
          </Col>
        </Row>
      </div>
      <h2>TextArea ?????????</h2>
      <div style={boxStyle}>
        <h4 style={{ marginBottom: 10 }}>??????</h4>
        <Row gutter={10}>
          {/* <Col span={8}>
            <TextArea placeholder="??????" readOnly />
          </Col> */}
          <Col span={8}>
            <TextArea placeholder="??????" disabled />
          </Col>
        </Row>
      </div>
      <h2>Password ???????????????</h2>
      <div style={boxStyle}>
        <Row gutter={10}>
          <Col span={12}>
            <Password placeholder="???????????????" />
          </Col>
          <Col span={12}>
            <Password placeholder="???????????????" reveal={false} />
          </Col>
        </Row>
        <Row gutter={10} style={{ marginTop: 10 }}>
          <Col span={12}>
            <Password disabled placeholder="???????????????" />
          </Col>
          <Col span={12}>
            <Password
              // disabled
              addonAfter={<span>addonAfter</span>}
              addonBefore={<span>addonAfter</span>}
            />
          </Col>
        </Row>
      </div>
      <h2>NumberField ???????????????</h2>
      <div style={boxStyle}>
        <h4 style={{ marginBottom: 10 }}>??????</h4>
        <Row gutter={10}>
          <Col span={12}>
            <NumberField
              placeholder="???????????????"
              precision={0}
              step={2}
              required
            />
          </Col>
          <Col span={12}>
            <NumberField
              placeholder="???????????????"
              precision={0}
              step={2}
              disabled
            />
          </Col>
        </Row>
        <Row style={{ marginTop: 10 }}>
          <Col span={12}>
            <NumberField placeholder="??????????????????" precision={2} min={0} />
          </Col>
        </Row>
        {/* <h4 style={{ margin: "10px 0" }}>??????</h4>
        <Row>
          <App />
        </Row> */}
        <h4 style={{ margin: "10px 0" }}>??????????????????</h4>
        <NumberField
          placeholder="????????????"
          step={1}
          min={0}
          addonAfter={<span>addonAfter</span>}
          addonBefore={<span>addonAfter</span>}
        />
      </div>
      <h2>IntlField ??????????????????</h2>
      <div style={boxStyle}>
        <Row gutter={10} style={{ marginBottom: 10 }}>
          <Col span={12}>
            <IntlField
              placeholder="?????????"
              required
              dataSet={lntlds}
              name="first-name"
              type="singeLine"
            />
          </Col>
          <Col span={12}>
            <IntlField
              placeholder="?????????"
              required
              dataSet={lntlds}
              name="first-name"
              type="multipleLine"
            />
          </Col>
        </Row>
        <Row>
          <Col span={12}>
            <IntlField placeholder="?????????" disabled />
          </Col>
        </Row>
        <Row gutter={10}>
          <Col span={12}>
            <IntlField
              placeholder="?????????"
              dataSet={lntlds}
              name="first-name"
              addonAfter={<span>addonAfter</span>}
              addonBefore={<span>addonAfter</span>}
            />
          </Col>
        </Row>
      </div>
      <h2>EmailField ?????????????????????</h2>
      <div style={boxStyle}>
        <Row gutter={10} style={{ marginBottom: 10 }}>
          <Col span={8}>
            <EmailField placeholder="?????????" />
          </Col>
          <Col span={8}>
            <EmailField
              placeholder="????????????"
              defaultValue="????????????"
              clearButton
            />
          </Col>
          <Col span={8}>
            <EmailField value="?????????" disabled />
          </Col>
        </Row>
        <Row gutter={10}>
          <Col span={8}>
            <EmailField
              addonAfter={<span>addonAfter</span>}
              addonBefore={<span>addonAfter</span>}
            />
          </Col>
        </Row>
      </div>
      <h2>Currency ???????????????</h2>
      <div style={boxStyle}>
        <h4>??????</h4>
        <Row gutter={10}>
          <Col span={12}>
            <Currency placeholder="???????????????" currency="CYN" required />
          </Col>
          <Col span={12}>
            <Currency placeholder="???????????????" currency="CYN" disabled />
          </Col>
        </Row>
        <Row style={{ marginTop: 10 }}>
          <Col span={12}>
            <Currency placeholder="???????????????" currency="CYN" range required />
          </Col>
        </Row>
        <h4 style={{ marginTop: 10 }}>??????????????????</h4>
        <Row gutter={10}>
          <Col span={12}>
            <Currency
              placeholder="???????????????"
              currency="CYN"
              addonAfter={<span>addonAfter</span>}
              addonBefore={<span>addonAfter</span>}
              range
              required
            />
          </Col>
          <Col span={12}>
            <Currency
              placeholder="???????????????"
              currency="CYN"
              addonAfter={<span>addonAfter</span>}
              addonBefore={<span>addonAfter</span>}
              required
            />
          </Col>
        </Row>
      </div>
      <h2>Lov ?????????????????????</h2>
      <div style={boxStyle}>
        <h4>??????</h4>
        <Row>
          <Col span={12}>
            <Lov
              dataSet={ds}
              name="code"
              noCache
              placeholder="??????"
              searchAction="blur"
              fetchSingle
              tableProps={{
                selectionMode: "rowbox",
                queryBar: "filterBar",
                queryBarProps: {
                  fuzzyQuery: false,
                  queryFieldsLimit: 999,
                },
                selectedHighLightRow: true,
              }}
            />
          </Col>
          <Col span={12}>
            <Lov
              dataSet={ds}
              name="code"
              noCache
              placeholder="??????"
              searchAction="blur"
              fetchSingle
              tableProps={{
                queryBar: "filterBar",
                selectedHighLightRow: true,
              }}
            />
          </Col>
        </Row>
        <Row style={{ marginTop: "20px" }}>
          <Col span={12}>
            <Lov
              dataSet={ds1}
              name="code"
              placeholder="??????"
              searchAction="blur"
              tableProps={{
                queryBar: "filterBar",
                selectedHighLightRow: true,
              }}
            />
          </Col>
          <Col span={12}>
            <Lov
              dataSet={ds}
              name="code"
              // noCache
              placeholder="??????1"
              trigger="click"
              // searchAction="blur"
              // fetchSingle
              viewMode="popup"
              // tableProps={{
              //   queryBar: "filterBar",
              //   selectedHighLightRow: true,
              // }}
            />
          </Col>
        </Row>
        <Row style={{ marginTop: "20px" }}>
          <Col span={12}>
            <Lov
              dataSet={ds1}
              name="code"
              placeholder="??????"
              viewMode="popup"
            />
          </Col>
        </Row>
        <h4 style={{ marginTop: 10 }}>??????????????????</h4>
        <Lov
          dataSet={ds}
          name="code"
          noCache
          tableProps={{ selectionMode: "rowbox" }}
          addonAfter={<span>addonAfter</span>}
          addonBefore={<span>addonAfter</span>}
        />
        <h4 style={{ marginTop: 10 }}>??????</h4>
        <Lov
          dataSet={dsx}
          searchAction="blur"
          name="code"
          placeholder="??????LOV"
        />
      </div>
      {/* <h4 style={{ marginTop: 10 }}>??????</h4>
        <Row style={{ marginBottom: 10 }} gutter={10}>
          <Col span={6}>
            <Lov
              dataSet={dsxx}
              name="code"
              mode="button"
              clearButton={false}
              icon="check"
            >
              ?????????
            </Lov>
          </Col>
          <Col span={10}>
            <Output dataSet={dsxx} name="code_code" />
          </Col>
          <Col span={6}>
            <Output dataSet={dsxx} name="code_description" />
          </Col>
        </Row>
      </div>
      <Form>
        <Password
          addonAfter={<span>addonAfter</span>}
          addonBefore={<span>addonAfter</span>}
        />
      </Form>
      <h3 style={{ marginBottom: 20 }}>Pro??????</h3>
      <Row>
        <Col>
          <Password disabled />
          <TextArea resize clearButton />
          <NumberField placeholder="????????????" step={1} min={0} />
          <IntlField placeholder="?????????" />
          <EmailField />
          <Currency placeholder="???????????????" currency="CYN" />
          <Currency placeholder="???????????????" currency="CYN" range />
          <Lov dataSet={ds} name="code" noCache />
        </Col>

        <h3>addon</h3>
        <Form columns={3}>
          <Password
            disabled
            addonAfter={<span>addonAfter</span>}
            addonBefore={<span>addonAfter</span>}
          />
          <TextArea
            resize
            clearButton
            addonAfter={<span>addonAfter</span>}
            addonBefore={<span>addonAfter</span>}
          />
          <NumberField
            placeholder="????????????"
            step={1}
            min={0}
            addonAfter={<span>addonAfter</span>}
            addonBefore={<span>addonAfter</span>}
          />
          <IntlField
            placeholder="?????????"
            addonAfter={<span>addonAfter</span>}
            addonBefore={<span>addonAfter</span>}
          />
          <EmailField
            addonAfter={<span>addonAfter</span>}
            addonBefore={<span>addonAfter</span>}
          />
          <Currency
            placeholder="???????????????"
            currency="CYN"
            addonAfter={<span>addonAfter</span>}
            addonBefore={<span>addonAfter</span>}
            range
          />
          <Currency
            placeholder="???????????????"
            currency="CYN"
            addonAfter={<span>addonAfter</span>}
            addonBefore={<span>addonAfter</span>}
            range
            required
          />
          <Currency
            placeholder="???????????????"
            currency="CYN"
            addonAfter={<span>addonAfter</span>}
            addonBefore={<span>addonAfter</span>}
          />
          <Lov
            dataSet={ds}
            name="code"
            noCache
            addonAfter={<span>addonAfter</span>}
            addonBefore={<span>addonAfter</span>}
          />
          <ColorPicker
            label="Color Picker"
            addonAfter={<span>addonAfter</span>}
            addonBefore={<span>addonAfter</span>}
          />
          <IconPicker
            addonAfter={<span>addonAfter</span>}
            addonBefore={<span>addonAfter</span>}
          />
          <DatePicker
            addonAfter={<span>addonAfter</span>}
            addonBefore={<span>addonAfter</span>}
          />
        </Form>
      </Row>
      <Row>
        <Select placeholder="?????????">
          <Option value="jack">Jack</Option>
          <Option value="lucy">Lucy</Option>
          <Option value="wu">Wu</Option>
        </Select>
        <Select placeholder="?????????" value="lucy" onChange={() => { }}>
          <Option value="jack">Jack</Option>
          <Option value="lucy">Lucy</Option>
          <Option value="wu">Wu</Option>
        </Select>
      </Row>
      <Row>
        <ColorPicker label="Color Picker" />
        <ColorPicker disabled label="Color Picker Disabled" />
        <TextField multiple placeholder="input multiple" />
        <TextField multiple required placeholder="input multiple reuired" />
      </Row>
      <TextAreaC
        rows={4}
        maxLength={20}
        label="textarea"
        placeholder="textarea usage"
      />
      <Row>
        <App />
      </Row> */}
    </Content>
  );
};

export default withThemedLayout({
  title: "?????? ??????",
  name: "formColor",
  styleCount: 2,
})(ButtonPage);
