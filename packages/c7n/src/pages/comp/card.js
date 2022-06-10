import React from "react";
import { Form, Icon } from "choerodon-ui";
import { Content } from "root/components/Page";
import { withThemedLayout } from "../../utils/withThemedLayout";
import Card from "../../components/Card";
import Dropdown from "../../components/Dropdown";
import Menu from "../../components/Menu";
import Button from "../../components/Button";

const menu = (
  <Menu>
    <Menu.Item disabled>我参与的</Menu.Item>
    <Menu.Item>待我处理的</Menu.Item>
    <Menu.Item>待审批</Menu.Item>
    <Menu.Item>已归档</Menu.Item>
  </Menu>
);
const { Meta } = Card;

const boxStyle = {
  margin: 20,
  padding: 20,
  border: "1px solid rgba(90, 94, 154, 0.2)",
  marginLeft: 0,
  borderRadius: 5,
};
const CardPage = () => {
  return (
    <>
      <Content>
        {/* <h2>基础</h2>
        <div style={boxStyle}>
          <Card bordered={false} title="测试卡片">
            ddd
          </Card>
        </div> */}

        <h2>基础</h2>
        <div style={boxStyle}>
          <h2>更灵活的内容展示</h2>
          <Card
            hoverable
            style={{ width: 240 }}
            cover={
              <img
                alt="example"
                src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
              />
            }
          >
            <Meta title="Europe Street beat" description="www.instagram.com" />
          </Card>
          <Card
            style={{ width: 400 }}
            title={<div>张小琴</div>}
            actions={[
              <Button icon="bug_report-o">确定</Button>,
              <Button icon="bug_report-o">确定</Button>,
              <Button icon="bug_report-o">确定</Button>,
              <Dropdown overlay={menu} trigger="hover">
                <Button>
                  快速筛选
                  <Icon type="expand_more" style={{ marginLeft: "8px" }} />
                </Button>
              </Dropdown>,
            ]}
          >
            <div>CS0006</div>
          </Card>
          <Card style={{ width: 300 }} title={<div>张小琴</div>}>
            <div>CS0006</div>
          </Card>
          <h2>典型卡片</h2>
          <Card
            title="Card title"
            extra={<a href="#">More</a>}
            style={{ width: 300 }}
          >
            <p>Card content</p>
            <p>Card content</p>
            <p>Card content</p>
          </Card>
        </div>

        {/* <Row justify="space-between">
          <Card bordered={false} title="测试卡片">
            ddd
          </Card>
          <Card title={<div>Card title</div>} extra={<a href="#">More</a>}>
            <p>Card content</p>
            <p>Card content</p>
            <p>Card content</p>
          </Card>
          <Card
            style={{ width: 500 }}
            cover={
              <img
                alt="example"
                src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
              />
            }
            actions={[
              <Icon type="setting" />,
              <Icon type="edit" />,
              <Icon type="ellipsis" />,
            ]}
          >
            <Card.Meta
              avatar={
                <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
              }
              title="Card title"
              description="This is the description"
            />
          </Card>
          <Demo />
        </Row> */}
      </Content>
    </>
  );
};

export default withThemedLayout({
  title: "Card",
  name: "Card",
  styleCount: 2,
})(Form.create({})(CardPage));
