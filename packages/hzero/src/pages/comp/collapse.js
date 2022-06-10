import React from "react";

import { Row } from "hzero-ui";
import { Content } from "root/components/Page";
import { withThemedLayout } from "../../utils/withThemedLayout";
import Collapse from "../../components/Collapse";

const { Panel } = Collapse;
const boxStyle = {
  margin: 20,
  padding: 20,
  border: "1px solid rgba(90, 94, 154, 0.2)",
  marginLeft: 0,
  borderRadius: 5,
};
const text = (
  <p style={{ paddingLeft: 24 }}>
    A dog is a type of domesticated animal. Known for its loyalty and
    faithfulness, it can be found as a welcome guest in many households across
    the world.
  </p>
);
const CollapsePage = () => {
  return (
    <>
      <Content>
        <h2>基础</h2>
        <div style={boxStyle}>
          <Row>
            <Collapse>
              <Panel header="This is panel header 1" key="1">
                <p>1111111111111111111111111</p>
              </Panel>
              <Panel header="This is panel header 2" key="2">
                <p>2222222222222222222222222222</p>
              </Panel>
              <Panel header="This is panel header 3" key="3" disabled>
                <p>3333333333333333333333333333</p>
              </Panel>
            </Collapse>
          </Row>
        </div>
        <h2>简洁</h2>
        <div style={boxStyle}>
          <Collapse bordered={false} defaultActiveKey={["1"]}>
            <Panel header="This is panel header 1" key="1">
              {text}
            </Panel>
            <Panel header="This is panel header 2" key="2">
              {text}
            </Panel>
            <Panel header="This is panel header 3" key="3">
              {text}
            </Panel>
          </Collapse>
        </div>
      </Content>
    </>
  );
};

export default withThemedLayout({
  title: "Collapse",
  name: "collapse",
  styleCount: 1,
})(CollapsePage);
