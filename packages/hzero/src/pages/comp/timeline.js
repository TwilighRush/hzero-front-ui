import React from "react";
import { Row, Col, Icon } from "hzero-ui";
import { Content } from "root/components/Page";
import { withThemedLayout } from "../../utils/withThemedLayout";
import Timeline from "../../components/Timeline";

const boxStyle = {
  margin: 20,
  padding: 20,
  border: "1px solid rgba(90, 94, 154, 0.2)",
  marginLeft: 0,
  borderRadius: 5,
};
const timelinePage = () => {
  return (
    <>
      <Content>
        <h2>基础</h2>
        <div style={boxStyle}>
          <Timeline>
            <Timeline.Item>Create a services site 2015-09-01</Timeline.Item>
            <Timeline.Item>
              Solve initial network problems 2015-09-01
            </Timeline.Item>
            <Timeline.Item>Technical testing 2015-09-01</Timeline.Item>
            <Timeline.Item>
              Network problems being solved 2015-09-01
            </Timeline.Item>
          </Timeline>
        </div>
        <h2>圆圈颜色(blue, red, green或自定义)</h2>
        <div style={boxStyle}>
          <Row type="flex" style={{ marginBottom: 40 }} justify="space-between">
            <Col span={12}>
              <Timeline>
                <Timeline.Item color="green">
                  Create a services site 2015-09-01
                </Timeline.Item>
                <Timeline.Item color="red">
                  Solve initial network problems 2015-09-01
                </Timeline.Item>
                <Timeline.Item color="blue">
                  Technical testing 2015-09-01
                </Timeline.Item>
                <Timeline.Item color="yellow">
                  Network problems being solved 2015-09-01
                </Timeline.Item>
                <Timeline.Item color="#f24">
                  Network problems being solved 2015-09-01
                </Timeline.Item>
              </Timeline>
            </Col>
          </Row>
        </div>
        <h2>自定义时间轴</h2>
        <div style={boxStyle}>
          <Timeline>
            <Timeline.Item>Create a services site 2015-09-01</Timeline.Item>
            <Timeline.Item>
              Solve initial network problems 2015-09-01
            </Timeline.Item>
            <Timeline.Item
              dot={<Icon type="clock-circle-o" style={{ fontSize: "16px" }} />}
              color="red"
            >
              Technical testing 2015-09-01
            </Timeline.Item>
            <Timeline.Item>
              Network problems being solved 2015-09-01
            </Timeline.Item>
          </Timeline>
        </div>
      </Content>
    </>
  );
};

export default withThemedLayout({
  title: "Timeline 时间线",
  name: "timeline",
  styleCount: 2,
})(timelinePage);
