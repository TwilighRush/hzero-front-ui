import React from "react";
import { Row } from "hzero-ui";
import { Content } from "root/components/Page";
import { withThemedLayout } from "../../utils/withThemedLayout";
import Badge from "../../components/Badge";

const boxStyle = {
  margin: 20,
  padding: 20,
  border: "1px solid rgba(90, 94, 154, 0.2)",
  marginLeft: 0,
  borderRadius: 5,
};
const AlertPage = () => {
  return (
    <>
      <Content>
        <h2>基础</h2>
        <div style={boxStyle}>
          <Row type="flex" justify="space-between" style={{ padding: 32 }}>
            <Badge count={5}>
              <div>点赞数</div>
            </Badge>
            <Badge count={1000}>
              <div>点赞数</div>
            </Badge>
            <Badge dot>
              <div>点赞数</div>
            </Badge>
          </Row>
        </div>
        <h2>状态点</h2>
        <div style={boxStyle}>
          <Badge status="success" />
          <Badge status="processing" />
          <br />
          <Badge status="success" text="Success" />
          <br />
          <Badge status="error" text="Error" />
          <br />
          <Badge status="default" text="Default" />
          <br />
          <Badge status="processing" text="Processing" />
          <br />
          <Badge status="warning" text="Warning" />
        </div>
      </Content>
    </>
  );
};

export default withThemedLayout({
  title: "Badge",
  name: "badge",
  styleCount: 2,
})(AlertPage);
