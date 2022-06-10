import React from "react";
import styled from "styled-components";
import { Row, Col } from "choerodon-ui";
import { Content } from "root/components/Page";
import { withThemedLayout } from "../../utils/withThemedLayout";
import Anchor from "../../components/Anchor";

const Box = styled.div`
  margin: 20px;
  padding: 20px;
  border: 1px solid rgba(90, 94, 154, 0.2);
  margin-left: 0;
  border-radius: 5px;
`;

const { Link } = Anchor;
const AnchorPage = () => {
  const getCurrentAnchor = () => {
    return "#password";
  };
  return (
    <>
      <Content style={{ marginBottom: 60 }}>
        <h2 style={{ marginBottom: 20 }}>锚点</h2>
        <h3>注意：侧边吸附待组件库支持</h3>
        <Box>
          <Row>
            <Col span={8}>
              <Anchor getCurrentAnchor={getCurrentAnchor}>
                <Link href="#password" title="密码安全策略">
                  <Link href="#Anchor-Props" title="登录安全策略" />
                  <Link href="#Anchor-Props2" title="登录安全策略" />
                </Link>
                <Link href="#login" title="登录安全策略" />
                <Link href="#list" title="黑白名单" />
                <Link href="#setting" title="角色配置策略" />
                <Link href="#other" title="其他" />
              </Anchor>
            </Col>
          </Row>
        </Box>
      </Content>
    </>
  );
};

export default withThemedLayout({
  title: "Anchor 锚点",
  name: "anchor",
  styleCount: 1,
})(AnchorPage);
