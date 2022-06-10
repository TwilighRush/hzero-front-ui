import React from "react";
import { Row, Form } from "choerodon-ui";
import { Content } from "root/components/Page";
import { withThemedLayout } from "../../utils/withThemedLayout";
import Avatar from "../../components/Avatar";

const AvatarPage = () => {
  return (
    <>
      <Content>
        <Row type="flex" justify="space-between">
          <div>
            <h2>头像</h2>
            {/* <span style={{ marginRight: 10 }}>
              <Avatar icon="people" style={{ color: '#f56a00', backgroundColor: '#fde3cf' }} />
            </span>
            <span style={{ marginRight: 10 }}>
              <Avatar style={{ color: '#f56a00', backgroundColor: '#fde3cf' }}>中文</Avatar>
            </span>
            <span style={{ marginRight: 10 }}>
              <Avatar style={{ color: '#f56a00', backgroundColor: '#fde3cf' }}>USER</Avatar>
            </span>
          </div> */}
            <span style={{ marginRight: 10 }}>
              <Avatar>USER</Avatar>
            </span>
            <span style={{ marginRight: 10 }}>
              <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
            </span>
            <span style={{ marginRight: 10 }}>
              <Avatar style={{ color: "#f56a00", backgroundColor: "#fde3cf" }}>
                中文
              </Avatar>
            </span>
            <span style={{ marginRight: 10 }}>
              <Avatar style={{ color: "#286610", backgroundColor: "#E2FFC7" }}>
                23
              </Avatar>
            </span>
          </div>
        </Row>
        <h2>size</h2>
        <Row>
          <div>
            <span style={{ marginRight: 10 }}>
              <Avatar size="large" icon="person" />
            </span>
            <span style={{ marginRight: 10 }}>
              <Avatar icon="person" />
            </span>
            <Avatar size="small" icon="person" />
          </div>
        </Row>
        {/* <h2>头像组</h2>
        <Row type="flex" justify="space-between">
          <div>
            <Avatar
              size="small"
              src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
            />
            <Avatar
              size="small"
              src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
            />
            <Avatar
              size="small"
              src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
            />
            <Avatar
              size="small"
              icon="add"
              style={{
                color: "rgba(0,0,0,0.65)",
                backgroundColor: "#fff",
                border: "1px solid rgba(0,0,0,0.25)",
              }}
            />
          </div>
        </Row>
        <Avatar shape="square" size={64} icon="person" />
        <Avatar shape="square" size="large" icon="person" />
        <Avatar shape="square" icon="person" /> */}
      </Content>
    </>
  );
};

export default withThemedLayout({
  title: "Avatar 头像",
  name: "avatar",
  styleCount: 2,
})(Form.create({})(AvatarPage));
