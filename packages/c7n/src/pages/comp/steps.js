import React, { useState } from "react";
import { Icon } from "choerodon-ui";
// import { Tooltip } from "choerodon-ui/pro";
import { Content } from "root/components/Page";
import { withThemedLayout } from "../../utils/withThemedLayout";
import Steps from "../../components/Steps";
import Tooltip from "../../components/TooltipPro";

const {
  Step,
  // StepGroup,
} = Steps;

// const customDot = (dot, { status, index }) => (
//   <Popover
//     content={
//       <span>
//         step {index} status: {status}
//       </span>
//     }
//   >
//     {dot}
//   </Popover>
// );
// const menu = (
//   <Menu>
//     <Menu.Item>处理完成</Menu.Item>
//     <Menu.Item>正在处理</Menu.Item>
//     <Menu.Item>等待处理</Menu.Item>
//   </Menu>
// );

const boxStyle = {
  margin: 20,
  padding: 20,
  border: "1px solid rgba(90, 94, 154, 0.2)",
  marginLeft: 0,
  borderRadius: 5,
};
const StepsDisplayPage = () => {
  const [current, setCurrent] = useState(0);
  const [current1, setCurrent1] = useState(0);
  const [current2, setCurrent2] = useState(0);
  const steps = [
    {
      title: "处理完成",
      content: "First-content",
      description: "description",
    },
    {
      title: "正在处理",
      content: "Second-content",
      description: "description",
    },
    {
      title: "等待处理",
      content: "Last-content",
      description: "description",
    },
  ];
  return (
    <>
      <Content>
        <h2>基本</h2>
        <div style={boxStyle}>
          <div
            style={{
              width: "456px",
            }}
          >
            <Steps current={current} onChange={(crt) => setCurrent(crt)}>
              {steps.map((item, index) => (
                <Step
                  key={item.title}
                  title={item.title}
                  onClick={() => {
                    setCurrent(index);
                  }}
                  description={item.description}
                />
              ))}
            </Steps>
          </div>
        </div>
        <h2>导航步骤条(需要组件库支持)</h2>
        <div style={boxStyle}>
          <div>
            <Steps
              current={current1}
              type="navigation"
              onChange={(current) => {
                setCurrent1(current);
              }}
            >
              <Step
                title={
                  <Tooltip title="规则属性的描述内容">
                    <span>处理完成</span>
                  </Tooltip>
                }
              />
              <Step
                title={
                  <Tooltip title="规则属性的描述内容">
                    <span>正在处理</span>
                  </Tooltip>
                }
              />
              <Step
                title={
                  <Tooltip title="规则属性的描述内容">
                    <span>等待处理</span>
                  </Tooltip>
                }
              />
              <Step
                title={
                  <Tooltip title="规则属性的描述内容">
                    <span>等待处理</span>
                  </Tooltip>
                }
              />
              <Step
                title={
                  <Tooltip title="规则属性的描述内容">
                    <span>等待处理</span>
                  </Tooltip>
                }
              />
              <Step
                title={
                  <Tooltip title="规则属性的描述内容">
                    <span>处理完成</span>
                  </Tooltip>
                }
              />
              <Step
                title={
                  <Tooltip title="规则属性的描述内容">
                    <span>正在处理</span>
                  </Tooltip>
                }
              />
              <Step
                title={
                  <Tooltip title="规则属性的描述内容">
                    <span>等待处理</span>
                  </Tooltip>
                }
              />
              <Step
                title={
                  <Tooltip title="规则属性的描述内容">
                    <span>等待处理</span>
                  </Tooltip>
                }
              />
              <Step
                title={
                  <Tooltip title="规则属性的描述内容">
                    <span>等待处理</span>
                  </Tooltip>
                }
              />
            </Steps>
          </div>
        </div>
        <h2>大小</h2>
        <div style={boxStyle}>
          <div
            style={{
              width: "456px",
            }}
          >
            <Steps
              current={current2}
              onChange={(crt) => setCurrent2(crt)}
              size="large"
            >
              {steps.map((item, index) => (
                <Step
                  key={item.title}
                  title={item.title}
                  description={item.description}
                  onClick={() => {
                    setCurrent2(index);
                  }}
                />
              ))}
            </Steps>
          </div>
        </div>
        {/* <Steps progressDot current={1}>
          <Step title="Finished" description="This is a description." />
          <Step title="In Progress" description="This is a description." />
          <Step title="Waiting" description="This is a description." />
        </Steps> */}
        <h2>竖直方向的步骤条</h2>
        <div style={boxStyle}>
          <Steps direction="vertical" current={1}>
            <Step title="Finished" description="This is a description." />
            <Step title="In Progress" description="This is a description." />
            <Step title="Waiting" description="This is a description." />
          </Steps>
        </div>
        <h2>错误</h2>
        <div style={boxStyle}>
          <Steps current={1} status="error">
            <Step title="Finished" description="This is a description" />
            <Step title="In Process" description="This is a description" />
            <Step title="Waiting" />
          </Steps>
        </div>
        <h2>带图标的步骤条</h2>
        <div style={boxStyle}>
          <Steps>
            <Step
              status="finish"
              title="Login"
              icon={<Icon type="person_outline" />}
            />
            <Step
              status="finish"
              title="Verification"
              icon={<Icon type="panorama_vertical" />}
            />
            <Step
              status="process"
              title="Pay"
              icon={<Icon type="schedule" />}
            />
            <Step status="wait" title="Done" icon={<Icon type="tag_faces" />} />
          </Steps>
        </div>
        <h2>点状步骤条</h2>
        <div style={boxStyle}>
          <Steps progressDot current={1}>
            <Step title="Finished" description="This is a description." />
            <Step title="In Progress" description="This is a description." />
            <Step title="Waiting" description="This is a description." />
          </Steps>
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
