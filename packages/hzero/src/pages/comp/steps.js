import React, { useState } from "react";
import { Row, Col } from "hzero-ui";
import { Content } from "root/components/Page";
import { withThemedLayout } from "../../utils/withThemedLayout";
import Steps from "../../components/Steps";
import Tooltip from "../../components/Tooltip";

const { Step } = Steps;
const boxStyle = {
  margin: 20,
  padding: 20,
  border: "1px solid rgba(90, 94, 154, 0.2)",
  marginLeft: 0,
  borderRadius: 5,
};
const StepsDisplayPage = () => {
  const [current, setCurrent] = useState(0);
  return (
    <>
      <Content>
        <h2>基础</h2>
        <div style={boxStyle}>
          <Row type="flex" gutter={24}>
            <Col span={24}>
              <p>样式一</p>
              <Steps size="small" current={1} status="error">
                <Step title="Step11111" description="This is a description" />
                <Step
                  title="Step2222ssdsdfasfadssdsd2"
                  description="This is a description"
                />
                <Step
                  title="Step2222ssdsdfasfadssdsd2"
                  description="This is a description"
                />
                <Step title="Step33333" />
              </Steps>
            </Col>
          </Row>
          <Row>
            <Col span={24}>
              <p>样式二</p>
              <Steps size="small" current={current}>
                <Step
                  title={
                    <Tooltip title="规则属性的描述内容">
                      <span>规则属性</span>
                    </Tooltip>
                  }
                  onClick={() => {
                    setCurrent(0);
                  }}
                />
                <Step
                  title={
                    <Tooltip title="规则属性的描述内容">
                      <span>字段属性</span>
                    </Tooltip>
                  }
                  onClick={() => {
                    setCurrent(1);
                  }}
                />
                <Step
                  title={
                    <Tooltip title="规则属性的描述内容">
                      <span>应用场景</span>
                    </Tooltip>
                  }
                  onClick={() => {
                    setCurrent(2);
                  }}
                />
              </Steps>
            </Col>
          </Row>
        </div>
        <h2>竖直</h2>
        <div style={boxStyle}>
          <Row type="flex" gutter={24}>
            <Col span={12}>
              <p>样式一</p>
              <Steps direction="vertical" current={1}>
                <Step title="Finished" />
                <Step title="In Progress" />
                <Step title="Waiting" />
              </Steps>
            </Col>
            <Col span={12}>
              <p>样式二</p>
              <Steps direction="vertical" current={1}>
                <Step title="Finished" description="This is a description." />
                <Step
                  title="In Progress"
                  description="This is a description."
                />
                <Step title="Waiting" description="This is a description." />
              </Steps>
            </Col>
          </Row>
        </div>
        <h2>点状</h2>
        <div style={boxStyle}>
          <Row type="flex" gutter={24}>
            <Col span={24}>
              <p>样式一</p>
              <Steps progressDot current={1}>
                <Step title="Finished" />
                <Step title="In Progress" />
                <Step title="Waiting" />
              </Steps>
            </Col>
            <Col span={24}>
              <p>样式二</p>
              <Steps progressDot current={1}>
                <Step title="Finished" description="This is a description." />
                <Step
                  title="In Progress"
                  description="This is a description."
                />
                <Step title="Waiting" description="This is a description." />
              </Steps>
            </Col>
          </Row>
        </div>
      </Content>
    </>
  );
};

export default withThemedLayout({
  title: "Steps 组件",
  name: "steps",
  styleCount: 2,
})(StepsDisplayPage);
