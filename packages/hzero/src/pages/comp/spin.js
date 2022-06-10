import React, { useState } from "react";
import { Row, Col } from "hzero-ui";
import { Content } from "root/components/Page";
import Spin from "../../components/Spin";

import { withThemedLayout } from "../../utils/withThemedLayout";

const SpinPage = () => {
  const [spinning, setSpin] = useState(false);
  setTimeout(() => {
    setSpin(true);
  }, 5000);
  return (
    <>
      <Content>
        <Spin />
        <Row
          type="flex"
          justify="center"
          gutter={24}
          style={{ marginTop: 100 }}
        >
          <Col span={6}>
            <Spin />
          </Col>
        </Row>
        <Spin spinning={spinning}>
          <div style={{ width: 200, height: 200, background: "#0f0" }} />
        </Spin>
        <Spin spinning>
          <div style={{ width: 200, height: 200, background: "#0f0" }} />
        </Spin>
      </Content>
    </>
  );
};

export default withThemedLayout({
  title: "Spin 加载中",
  name: "spin",
  styleCount: 2,
})(SpinPage);
