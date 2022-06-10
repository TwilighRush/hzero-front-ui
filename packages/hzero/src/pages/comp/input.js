import React from "react";
import styled from "styled-components";
import { Row, Col } from "hzero-ui";
import { Content } from "root/components/Page";
import Input from "../../components/Input";
import Form from "../../components/Form";
import Select from "../../components/Select";

import { withThemedLayout } from "../../utils/withThemedLayout";

const { Option } = Select;

const selectBefore = (
  <Select defaultValue="Http://" style={{ width: 90 }}>
    <Option value="Http://">Http://</Option>
    <Option value="Https://">Https://</Option>
  </Select>
);
const selectAfter = (
  <Select defaultValue=".com" style={{ width: 80 }}>
    <Option value=".com">.com</Option>
    <Option value=".jp">.jp</Option>
    <Option value=".cn">.cn</Option>
    <Option value=".org">.org</Option>
  </Select>
);

const Title = styled.h6`
  font-size: 14px;
  color: #333;
  font-weight: normal;
  padding: 12px 0;
  margin: 0;
`;

const InputPage = (props) => {
  return (
    <>
      {/* <Header title="Input 组件" /> */}
      <Content style={{ paddingBottom: 60 }}>
        <Row gutter={16} style={{ marginTop: 16 }}>
          <Col span={6}>
            <Title>普通输入框</Title>
            {props.form.getFieldDecorator(
              "name",
              {}
            )(<Input type="text" placeholder="普通输入框" />)}
          </Col>
          <Col span={6}>
            <Title>普通输入框 disabled</Title>
            <Input disabled type="text" placeholder="普通输入框" />
          </Col>
        </Row>
        <Row gutter={16} style={{ marginTop: 16 }}>
          <Col span={6}>
            <Title>搜索框</Title>
            <Input.Search placeholder="搜索框" />
          </Col>
          <Col span={6}>
            <Title>搜索框 disabled</Title>
            <Input.Search
              style={{ width: 120 }}
              disabled
              placeholder="搜索框"
            />
          </Col>
        </Row>
        <Row gutter={16} style={{ marginTop: 16 }}>
          <Col span={6}>
            <Title>密码输入框</Title>
            <Input type="password" placeholder="请输入密码" />
          </Col>
          <Col span={6}>
            <Title>密码输入框 disabled</Title>
            <Input disabled type="password" placeholder="请输入密码" />
          </Col>
        </Row>
        <Row gutter={16} style={{ marginTop: 16 }}>
          <Col span={8}>
            <Title>文本域</Title>
            <Input.TextArea style={{ height: 200 }} placeholder="文本域输入" />
          </Col>
          <Col span={8}>
            <Title>文本域 disabled</Title>
            <Input.TextArea rows={5} disabled placeholder="文本域输入" />
          </Col>
          <Col span={8}>
            <Title>文本域 disabled 无rows</Title>
            <Input.TextArea disabled placeholder="文本域输入" />
          </Col>
        </Row>
        <Row gutter={16} style={{ marginTop: 16 }}>
          <Col span={8}>
            <Title>输入框组</Title>
            <Input.Group>
              <Input
                style={{ width: "50%" }}
                type="text"
                placeholder="输入框"
              />
              <Input
                style={{ width: "50%" }}
                type="number"
                placeholder="type=number"
              />
            </Input.Group>
          </Col>
          <Col span={8}>
            <Title>输入框组</Title>
            <Input.Group>
              <Input
                style={{ width: "50%" }}
                disabled
                type="text"
                placeholder="输入框"
              />
              <Input
                style={{ width: "50%" }}
                disabled
                type="number"
                placeholder="type=number"
              />
            </Input.Group>
          </Col>
        </Row>
        <Row gutter={16} style={{ marginTop: 16 }}>
          <Col span={8}>
            <Title>数字输入框</Title>
            <Input type="number" />
          </Col>
          <Col span={8}>
            <Title>数字输入框 disabled</Title>
          </Col>
        </Row>
        <Row gutter={16} style={{ marginTop: 16 }}>
          <Col span={8}>
            <Title>组合输入框</Title>
            <Input
              addonBefore="Http://"
              addonAfter=".com"
              defaultValue="mysite"
            />
          </Col>
          <Col span={8}>
            <Title>组合输入框 disabled</Title>
            <Input
              disabled
              addonBefore="Http://"
              addonAfter=".com"
              defaultValue="mysite"
            />
          </Col>
        </Row>
        <Row gutter={16} style={{ marginTop: 16 }}>
          <Col span={8}>
            <Title>组合输入框</Title>
            <Input
              addonBefore={selectBefore}
              addonAfter={selectAfter}
              defaultValue="mysite"
            />
          </Col>
          <Col span={8}>
            <Title>组合输入框 disabled</Title>
            <Input
              disabled
              addonBefore={selectBefore}
              addonAfter={selectAfter}
              defaultValue="mysite"
            />
          </Col>
        </Row>
        <Row gutter={16} style={{ marginTop: 16 }}>
          <Col span={8}>
            <Title>组合输入框 disabled</Title>
            <Input
              type="number"
              addonBefore={selectBefore}
              addonAfter={selectAfter}
              defaultValue="mysite"
            />
          </Col>
        </Row>
      </Content>
    </>
  );
};

export default withThemedLayout({
  title: "Input 组件",
  name: "input",
  styleCount: 3,
})(Form.create({})(InputPage));
