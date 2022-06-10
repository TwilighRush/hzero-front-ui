import React from "react";
// import { Collapse } from "choerodon-ui";
import { Content } from "root/components/Page";

import { withThemedLayout } from "../../utils/withThemedLayout";
import Collapse from "../../components/Collapse";

const { Panel } = Collapse;

const collapsePage = () => {
  const callback = () => {
    // eslint-disable-next-line no-console
    console.log("change");
  };
  const text = "所有人 或（李四，王军安，李可=销售部）";
  const text1 = (
    <div>
      A dog is a type of domesticated animal. Known for its loyalty and
      faithfulness, it can be found as a welcome guest in many households across
      the world.
    </div>
  );
  const boxStyle = {
    margin: 20,
    padding: 20,
    border: "1px solid rgba(90, 94, 154, 0.2)",
    marginLeft: 0,
    borderRadius: 5,
  };

  return (
    <Content>
      <h2>基础</h2>
      <div style={boxStyle}>
        {/* extra={<Button style={{ marginTop: "-4px" }}>点击编辑</Button>} */}
        <Collapse defaultActiveKey={["2"]} onChange={callback}>
          <Panel header="我是一个期限规则的名称" key="1">
            <div>{text}</div>
          </Panel>
          <Panel header="This is panel header 1" key="2">
            <div>{text}</div>
          </Panel>
          <Panel header="我是一个期限规则的名称" key="3">
            <div>{text}</div>
          </Panel>
        </Collapse>
      </div>
      <h2>图标在左侧</h2>
      <div style={boxStyle}>
        <Collapse
          defaultActiveKey={["1"]}
          onChange={callback}
          expandIconPosition="right"
          expandIcon="text"
        >
          <Panel header="我是一个期限规则的名称" key="1">
            <div>{text}</div>
          </Panel>
          <Panel header="我是一个期限规则的名称" key="2">
            <div>{text}</div>
          </Panel>
          <Panel header="我是一个期限规则的名称" key="3" disabled>
            <div>{text}</div>
          </Panel>
        </Collapse>
      </div>
      <h2>简洁风格</h2>
      <div style={boxStyle}>
        <Collapse bordered={false} defaultActiveKey={["1"]}>
          <Panel header="This is panel header 1" key="1">
            {text1}
          </Panel>
          <Panel header="This is panel header 2" key="2">
            {text1}
          </Panel>
          <Panel header="This is panel header 3" key="3" disabled>
            {text1}
          </Panel>
        </Collapse>
        ,
      </div>
      {/* <Collapse
        // bordered={false}
        defaultActiveKey={["1"]}
        onChange={callback}
        trigger="icon"
        expandIconPosition="right"
        expandIcon="text"
      >
        <Panel header="This is panel header 1" key="1">
          <p>{text}</p>
        </Panel>
        <Panel header="This is panel header 2" key="2">
          <p>{text}</p>
        </Panel>
        <Panel header="This is panel header 3" key="3" disabled>
          <p>{text}</p>
        </Panel>
      </Collapse>
      <Collapse
        bordered={false}
        defaultActiveKey={["1"]}
        onChange={callback}
        trigger="icon"
        expandIconPosition="right"
        expandIcon="text"
      >
        <Panel header="This is panel header 1" key="1">
          <p>{text}</p>
        </Panel>
        <Panel header="This is panel header 2" key="2">
          <p>{text}</p>
        </Panel>
        <Panel header="This is panel header 3" key="3" disabled>
          <p>{text}</p>
        </Panel>
      </Collapse> */}
    </Content>
  );
};

export default withThemedLayout({
  title: "collapse 组件",
  name: "collapse",
  styleCount: 2,
})(collapsePage);
