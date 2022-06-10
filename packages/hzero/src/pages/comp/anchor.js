import React from "react";
import { Row, Col } from "hzero-ui";
import { Content } from "root/components/Page";
import { withThemedLayout } from "../../utils/withThemedLayout";
import Anchor from "../../components/Anchor";

const boxStyle = {
  margin: 20,
  padding: 20,
  border: "1px solid rgba(90, 94, 154, 0.2)",
  marginLeft: 0,
  borderRadius: 5,
};
const { Link } = Anchor;
const AnchorPage = () => {
  return (
    <>
      <Content>
        <h2>基础</h2>
        <div style={boxStyle}>
          <Row type="flex">
            <Col span={8}>
              <Anchor>
                <Link href="#components-anchor-demo-basic" title="Basic demo" />
                <Link href="#components-anchor-demo-fixed" title="Fixed demo" />
                <Link href="#API" title="API">
                  <Link href="#Anchor-Props" title="Anchor Props" />
                  <Link href="#Link-Props" title="Link Props" />
                  <Link
                    href="#components-anchossr-demo-fixed"
                    title="Fixed dsssemo"
                  >
                    <Link href="#Anchoddr" title="Addd" />
                    <Link href="#Link-P" title="Link ddsdProps" />
                  </Link>
                </Link>
              </Anchor>
            </Col>
          </Row>
        </div>
      </Content>
    </>
  );
};

export default withThemedLayout({
  title: "Anchor 锚点",
  name: "anchor",
  styleCount: 1,
})(AnchorPage);
