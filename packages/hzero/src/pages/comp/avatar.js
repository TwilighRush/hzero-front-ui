import React from "react";

import { Avatar, Tooltip } from "hzero-ui";
import { Content } from "root/components/Page";
import { withThemedLayout } from "../../utils/withThemedLayout";

const boxStyle = {
  margin: 20,
  padding: 20,
  border: "1px solid rgba(90, 94, 154, 0.2)",
  marginLeft: 0,
  borderRadius: 5,
};

const AvatarPage = () => {
  return (
    <>
      <Content>
        <h2>基础</h2>
        <div style={boxStyle}>
          <Avatar icon="user" />
          <Avatar>中文</Avatar>
          <Avatar>USER</Avatar>
          <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
          <Avatar style={{ color: "#f56a00", backgroundColor: "#fde3cf" }}>
            U
          </Avatar>
          <Tooltip title="提示">
            <Avatar style={{ backgroundColor: "#87d068" }} icon="user" />
          </Tooltip>
        </div>
      </Content>
    </>
  );
};

export default withThemedLayout({
  title: "Avatar 锚点",
  name: "avatar",
  styleCount: 1,
})(AvatarPage);
