import React from "react";
import { Content } from "root/components/Page";
import { withThemedLayout } from "../../utils/withThemedLayout";
import Card from "../../components/Card";

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
        <h2>基础</h2>
        <div style={boxStyle}>
          <Card style={{ width: 300 }} title={<div>张小琴</div>}>
            <div>CS0006</div>
          </Card>
          <Card style={{ width: 300 }} title={<div>张小琴</div>}>
            <div>CS0006</div>
          </Card>
        </div>
        {/* <Card title="测试标题">dddddddddddd</Card>
        <Card title={<h3>Card title</h3>} extra={<a href="#">More</a>}>
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
          <Meta
            avatar={
              <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
            }
            title="Card title"
            description="This is the description"
          />
        </Card> */}
      </Content>
    </>
  );
};

export default withThemedLayout({
  title: "Card",
  name: "Card",
  styleCount: 1,
})(CardPage);
