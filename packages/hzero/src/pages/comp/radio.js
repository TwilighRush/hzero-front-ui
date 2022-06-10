import React from "react";
import { Row, Col } from "hzero-ui";
import { Content } from "root/components/Page";
import { withThemedLayout } from "../../utils/withThemedLayout";
import Radio from "../../components/Radio";

const RadioGroup = Radio.Group;
const RadioButton = Radio.Button;

const RadioPage = () => {
  return (
    <>
      <Content>
        <Row type="flex" style={{ marginBottom: "40px" }}>
          <Col span={4}>
            <Radio disabled>Radio</Radio>
            <Radio disabled checked>
              Radio
            </Radio>
          </Col>
          <Col span={4}>
            <RadioGroup defaultValue={1}>
              <Radio value={1}>男生</Radio>
              <Radio value={2}>女生</Radio>
            </RadioGroup>
          </Col>
        </Row>
        <Row
          type="flex"
          justify="space-between"
          style={{ marginBottom: "40px" }}
        >
          <Col span={8}>
            <h4>default</h4>
            <RadioGroup defaultValue={1}>
              <RadioButton value={1}>我是男生</RadioButton>
              <RadioButton value={2}>我是女生</RadioButton>
            </RadioGroup>
          </Col>
          <Col span={8}>
            <h4>large</h4>
            <RadioGroup defaultValue={1} size="large">
              <RadioButton value={1}>我是男生</RadioButton>
              <RadioButton value={2}>我是女生</RadioButton>
            </RadioGroup>
          </Col>
          <Col span={8}>
            <h4>large</h4>
            <RadioGroup defaultValue={1} size="small">
              <RadioButton value={1}>男生</RadioButton>
              <RadioButton value={2}>女生</RadioButton>
            </RadioGroup>
          </Col>
        </Row>
        <Row type="flex" justify="space-between">
          <Col span={8}>
            <h4>disabled</h4>
            <RadioGroup defaultValue="a" buttonStyle="solid">
              <RadioButton value="a">男生</RadioButton>
              <RadioButton value="b">女生</RadioButton>
              <RadioButton value="c" disabled>
                天生
              </RadioButton>
            </RadioGroup>
          </Col>
          <Col span={8}>
            <h4>large</h4>
            <RadioGroup defaultValue="x" size="large" buttonStyle="solid">
              <RadioButton value="x">男生</RadioButton>
              <RadioButton value="y">女生</RadioButton>
              <RadioButton value="z" disabled>
                天生
              </RadioButton>
            </RadioGroup>
          </Col>
          <Col span={8}>
            <h4>small</h4>
            <RadioGroup defaultValue="x" size="small" buttonStyle="solid">
              <RadioButton value="x">男生</RadioButton>
              <RadioButton value="y">女生</RadioButton>
              <RadioButton value="z" disabled>
                天生
              </RadioButton>
            </RadioGroup>
          </Col>
        </Row>
      </Content>
    </>
  );
};

export default withThemedLayout({
  title: "Radio 单选框",
  name: "radio",
  styleCount: 2,
})(RadioPage);
