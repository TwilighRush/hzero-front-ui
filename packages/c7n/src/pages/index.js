import React from "react";
import { Link } from "umi";
import {
  Button,
  Row,
  Col,
  EmailField,
  Currency,
  TextField,
  Password,
  Select,
  TextArea,
  NumberField,
  IntlField,
  Lov,
  DataSet,
  AutoComplete,
} from "choerodon-ui/pro";
import {
  Slider,
  AutoComplete as CAutoComplete,
  Input,
  Tag,
  Icon,
} from "choerodon-ui";

import { Content, Header } from "root/components/Page";

const { Option } = Select;

const addon = (
  <Select placeholder="请选择" defaultValue="jack">
    <Option value="jack">Jack</Option>
    <Option value="lucy">Lucy</Option>
    <Option value="wu">Wu</Option>
  </Select>
);

const options = new DataSet({
  fields: [
    {
      name: "value",
      type: "string",
    },
    {
      name: "meaning",
      type: "string",
    },
  ],
  data: [
    {
      value: "1",
      meaning: "1",
    },
    {
      value: "12",
      meaning: "12",
    },
    {
      value: "123",
      meaning: "123",
    },
  ],
});

const ds = new DataSet({
  primaryKey: "code",
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
      defaultValue: ["Mock"],
    },
  ],
  cacheSelection: true,
  selection: "multiple",
  events: {
    // update: handleDataSetChange,
  },
});

const IndexPage = () => {
  return (
    <>
      <Header title="首页" />
      <Content>
        <Link to="/config-center">Go to config page</Link>
        <TextField />
        <Password />
        <TextArea />
        <NumberField placeholder="数字输入" step={1} min={0} />
        <IntlField placeholder="多语言" />
        <EmailField placeholder="email" />
        <Currency placeholder="请输入钱币" currency="CYN" />
        <Lov dataSet={ds} name="code" noCache />
        <Row>
          <Button funcType="flat" color="primary">
            flat
          </Button>
          <Button funcType="flat" color="default">
            default flat
          </Button>
        </Row>
        <Row>
          <Select placeholder="请选择" defaultValue="jack">
            <Option value="jack">Jack</Option>
            <Option value="lucy">Lucy</Option>
            <Option value="wu">Wu</Option>
          </Select>
          <Select
            placeholder="请选择"
            defaultValue={["jack", "lucy", "wang"]}
            multiple
          >
            <Option value="jack">Jack</Option>
            <Option value="lucy">Lucy</Option>
            <Option value="wang">Wu</Option>
          </Select>
        </Row>
        <Row>
          <Slider />
        </Row>
        <Row>
          <Col span={8}>
            <TextField addonAfter={addon} addonBefore={addon} />
          </Col>
          <Col span={8}>
            <AutoComplete
              options={options}
              addonAfter={addon}
              addonBefore={addon}
            />
          </Col>
          <Col span={8}>
            <AutoComplete options={options} />
          </Col>
        </Row>
        <h2>Multiple</h2>
        <Row>
          <Col span={8}>
            <TextField multiple addonAfter={addon} addonBefore={addon} />
          </Col>
          <Col span={8}>
            <AutoComplete
              multiple
              options={options}
              addonAfter={addon}
              addonBefore={addon}
            />
          </Col>
          <Col span={8}>
            <AutoComplete multiple options={options} />
          </Col>
          <Col span={8}>
            <Lov dataSet={ds} name="code" noCache />
          </Col>
        </Row>
        <h3>components AutoComplete</h3>
        <Row>
          <Col span={8}>
            <CAutoComplete
              multiple
              placeholder="auto complete"
              options={options}
              addonAfter={addon}
              addonBefore={addon}
            />
          </Col>
          <Col span={8}>
            <CAutoComplete placeholder="auto complete" options={options} />
          </Col>
          <Col span={8}>
            <CAutoComplete>
              <Input.TextArea
                style={{
                  width: "100%",
                  border: "none",
                }}
                placeholder="input here"
                className="custom"
              />
            </CAutoComplete>
          </Col>
        </Row>
        <h3>components</h3>
        <Row>
          <Col span={6}>
            <Input label="Input" />
          </Col>
        </Row>
        <Tag>11111111111111</Tag>
        <Tag.CheckableTag checked>checked</Tag.CheckableTag>
        <Tag.CheckableTag>!checked</Tag.CheckableTag>
        <Tag color="magenta">magenta</Tag>
        <Tag color="red">red</Tag>
        <Tag color="volcano">volcano</Tag>
        <Tag color="orange">orange</Tag>
        <Tag color="gold">gold</Tag>
        <Tag color="lime">lime</Tag>
        <Tag color="green">green</Tag>
        <Tag color="cyan">cyan</Tag>
        <Tag color="blue">blue</Tag>
        <Tag color="geekblue">geekblue</Tag>
        <Tag color="purple">purple</Tag>
        <Icon type="history" />
      </Content>
    </>
  );
};

export default IndexPage;
