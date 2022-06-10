import React from "react";
import { Avatar, Row, Col } from "hzero-ui";
import { Content } from "root/components/Page";
import { withThemedLayout } from "../../utils/withThemedLayout";
import Button from "../../components/Button";
import List from "../../components/List";

const Head = () => <div>标题文案</div>;

const ListPage = () => {
  const data = ["标题文案", "标题文案", "标题文案"];
  return (
    <>
      <Content style={{ marginBottom: 60 }}>
        <Row type="flex" justify="space-between" style={{ marginBottom: 40 }}>
          <Col span={7}>
            <List
              header={<Head />}
              footer={<div>footer</div>}
              bordered
              dataSource={data}
              renderItem={(item) => <List.Item>{item}</List.Item>}
            />
          </Col>
          <Col span={7}>
            <List
              header={<Head />}
              dataSource={data}
              renderItem={(item) => (
                <List.Item actions={[<Button type="default">操作</Button>]}>
                  <List.Item.Meta
                    avatar={<Avatar shape="square" size="large" icon="user" />}
                    title={<a href="https://ant.design">{item}</a>}
                  />
                </List.Item>
              )}
            />
          </Col>
          <Col span={7}>
            <List
              header={<Head />}
              dataSource={data}
              renderItem={(item) => (
                <List.Item actions={[<Button type="default">操作</Button>]}>
                  <List.Item.Meta
                    // avatar={<Avatar shape="square" size="large" icon="user" />}
                    title={<a href="https://ant.design">{item}</a>}
                    description="介绍文案介绍文案介绍文案介绍文案介绍文案介绍文案介绍文案介绍文案介绍文案介绍文案介绍文案介绍文案"
                  />
                </List.Item>
              )}
            />
          </Col>
        </Row>
      </Content>
    </>
  );
};

export default withThemedLayout({
  title: "List 列表",
  name: "list",
  styleCount: 3,
})(ListPage);
