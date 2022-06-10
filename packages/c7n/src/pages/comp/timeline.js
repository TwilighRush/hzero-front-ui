import React from "react";
import styled from "styled-components";
import { Row, Col, Icon } from "choerodon-ui";

import { Content } from "root/components/Page";
import { withThemedLayout } from "../../utils/withThemedLayout";
import Timeline from "../../components/Timeline";

const Box = styled.div`
  margin: 20px;
  padding: 20px;
  border: 1px solid rgba(90, 94, 154, 0.2);
  margin-left: 0;
  border-radius: 5px;
`;

const TitleDemo = styled.div`
  color: #1c1c1c;
  display: inline-block;
`;

const TimeDemo = styled.div`
  color: #a4a4a4;
`;

const ContDemo = styled.div`
  color: #686868;
  display: inline-block;
`;
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
      <Content style={{ paddingBottom: 60 }}>
        <h2>基础</h2>
        <div style={boxStyle}>
          <Timeline>
            <Timeline.Item>Create a services site 2015-09-01</Timeline.Item>
            <Timeline.Item>Create a services site 2015-09-01</Timeline.Item>
            <Timeline.Item>Create a services site 2015-09-01</Timeline.Item>
            <Timeline.Item>Create a services site 2015-09-01</Timeline.Item>
          </Timeline>
        </div>
        <h2 style={{ marginBottom: 20 }}>状态</h2>
        <Box>
          <Row>
            <Col span={12}>
              <Timeline>
                <Timeline.Item color="#0840F8">
                  <TitleDemo>密码安全策略</TitleDemo>
                </Timeline.Item>
                <Timeline.Item color="#20D489">
                  <TitleDemo>黑白名单</TitleDemo>
                </Timeline.Item>
                <Timeline.Item color="#F45063">
                  <TitleDemo>角色配置策略</TitleDemo>
                </Timeline.Item>
                <Timeline.Item color="#BDC2CD">
                  <TitleDemo>其他</TitleDemo>
                </Timeline.Item>
              </Timeline>
            </Col>
          </Row>
        </Box>

        <h2 style={{ marginBottom: 20 }}>Nomal</h2>
        <Box>
          <Row>
            <Col span={12}>
              <Timeline>
                <Timeline.Item color="#0840F8">
                  <TitleDemo>密码安全策略</TitleDemo>
                  <TimeDemo>2020.09.09 10:30:00</TimeDemo>
                  <ContDemo>
                    这是一些关于该节点的描述,这是一些关于该节点的描述,这是一些关于该节点的描述。
                  </ContDemo>
                </Timeline.Item>
                <Timeline.Item color="#BDC2CD">
                  <TitleDemo>其他</TitleDemo>
                  <TimeDemo>2020.09.09 10:30:00</TimeDemo>
                  <ContDemo>
                    这是一些关于该节点的描述,这是一些关于该节点的描述,这是一些关于该节点的描述。
                  </ContDemo>
                </Timeline.Item>
                <Timeline.Item color="#BDC2CD">
                  <TitleDemo>其他</TitleDemo>
                  <TimeDemo>2020.09.09 10:30:00</TimeDemo>
                  <ContDemo>
                    这是一些关于该节点的描述,这是一些关于该节点的描述,这是一些关于该节点的描述。
                  </ContDemo>
                </Timeline.Item>
              </Timeline>
            </Col>
          </Row>
        </Box>

        <h2 style={{ marginBottom: 20 }}>自定义时间轴节点</h2>
        <Box>
          <Row>
            <Col span={12}>
              <Timeline>
                <Timeline.Item color="#0840F8">
                  <TitleDemo>密码安全策略</TitleDemo>
                </Timeline.Item>
                <Timeline.Item
                  dot={
                    <Icon
                      type="schedule"
                      style={{ fontSize: 16, color: "#7C859B" }}
                    />
                  }
                >
                  <TitleDemo>黑白名单</TitleDemo>
                </Timeline.Item>
                <Timeline.Item color="#0840F8">
                  <TitleDemo>密码安全策略</TitleDemo>
                </Timeline.Item>
                <Timeline.Item color="#0840F8">
                  <TitleDemo>密码安全策略</TitleDemo>
                </Timeline.Item>
              </Timeline>
            </Col>
          </Row>
        </Box>
      </Content>
    </>
  );
};

export default withThemedLayout({
  title: "Timeline 时间线",
  name: "timeline",
  styleCount: 2,
})(timelinePage);
