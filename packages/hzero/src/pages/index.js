import React, { useState } from "react";
import { Button, Form, Select, Tag } from "hzero-ui";
import { Header, Content } from "root/components/Page";
import Input from "../components/Input";
import Progress from "../components/Progress";

const IndexPage = () => {
  const [checked, setChecked] = useState(false);
  return (
    <>
      <Header />
      <Content>
        <Button type="primary">按钮</Button>
        <div style={{ width: 300 }}>
          <Form.Item label="普通输入框" required>
            <Input.Search />
          </Form.Item>
          <Form.Item label="普通输入框">
            <Input />
          </Form.Item>
          <Form.Item label="普通输入框">
            <Select defaultValue="1">
              <Select.Option value="1">选项1</Select.Option>
              <Select.Option value="2">选项1</Select.Option>
              <Select.Option value="3">选项1</Select.Option>
              <Select.Option value="4">选项1</Select.Option>
            </Select>
          </Form.Item>
          <Progress type="circle" percent={75} status="exception" />
          <Tag checked={checked} onChange={t => setChecked(t)}>
            普通tag
          </Tag>
          <Tag.CheckableTag checked={checked} onChange={t => setChecked(t)}>
            check tag
          </Tag.CheckableTag>
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
        </div>
      </Content>
    </>
  );
};

export default IndexPage;
