/* eslint-disable react/no-array-index-key */
import React, { useState } from "react";
import { useDataSet, Icon } from "choerodon-ui/pro";
import { Content } from "root/components/Page";
import { withThemedLayout } from "../../utils/withThemedLayout";
import Tabs from "../../components/Tabs";
import Radio from "../../components/Radio";
import Tooltip from "../../components/TooltipPro";
import Button from "../../components/ButtonPro";
import TextField from "../../components/TextFieldPro";
import Form from "../../components/FormPro";
import Select from "../../components/SelectPro";

const { TabPane, TabGroup } = Tabs;
const { Option } = Select;

const boxStyle = {
  margin: 20,
  padding: 20,
  border: "1px solid rgba(90, 94, 154, 0.2)",
  marginLeft: 0,
  borderRadius: 5,
};

function callback(key) {
  console.log(key);
}
class Demo extends React.Component {
  constructor(props) {
    super(props);
    this.newTabIndex = 0;
    const panes = [
      { title: "Tab 1", content: "Content of Tab 1", key: "1" },
      { title: "Tab 2", content: "Content of Tab 2", key: "2" },
      {
        title: "Tab 3",
        content: "Content of Tab 3",
        key: "3",
        closable: false,
      },
    ];
    this.state = {
      activeKey: panes[0].key,
      panes,
    };
  }

  onChange = (activeKey) => {
    this.setState({ activeKey });
  };

  onEdit = (targetKey, action) => {
    this[action](targetKey);
  };

  add = () => {
    const panes1 = this.state.panes;
    const activeKey = `newTab${this.newTabIndex++}`;
    panes1.push({
      title: "New Tab",
      content: "Content of new Tab",
      key: activeKey,
    });
    this.setState({ panes: panes1, activeKey });
  };

  remove = (targetKey) => {
    let activeKey1 = this.state.activeKey;
    let lastIndex;
    this.state.panes.forEach((pane, i) => {
      if (pane.key === targetKey) {
        lastIndex = i - 1;
      }
    });
    const panes = this.state.panes.filter((pane) => pane.key !== targetKey);
    if (lastIndex >= 0 && activeKey1 === targetKey) {
      activeKey1 = panes[lastIndex].key;
    }
    this.setState({ panes, activeKey: activeKey1 });
  };

  render() {
    return (
      <Tabs
        onChange={this.onChange}
        activeKey={this.state.activeKey}
        type="editable-card"
        onEdit={this.onEdit}
      >
        {this.state.panes.map((pane) => (
          <TabPane tab={pane.title} key={pane.key} closable={pane.closable}>
            {pane.content}
          </TabPane>
        ))}
      </Tabs>
    );
  }
}

const DataSetDemo = () => {
  const ds = useDataSet(
    () => ({
      autoCreate: true,
      fields: [{ name: "name", required: true, label: "姓名" }],
    }),
    []
  );

  return (
    <>
      <Button onClick={() => ds.validate()}>validate</Button>
      <Tabs>
        <TabGroup tab="Group 1">
          <TabPane tab="Auto expand by dataSet" key="1" dataSet={ds}>
            <Form dataSet={ds}>
              <TextField name="name" />
            </Form>
          </TabPane>
          <TabPane
            tab="Auto expand by context but need forceRender"
            key="2"
            forceRender
          >
            <Form dataSet={ds}>
              <TextField name="name" />
            </Form>
          </TabPane>
        </TabGroup>
        <TabGroup tab="Group 2">
          <TabPane tab="Auto expand by dataSet" key="3" dataSet={ds}>
            <Form dataSet={ds}>
              <TextField name="name" />
            </Form>
          </TabPane>
          <TabPane
            tab="Disabled will not auto expand"
            key="4"
            disabled
            dataSet={ds}
          >
            <Form dataSet={ds}>
              <TextField name="name" />
            </Form>
          </TabPane>
        </TabGroup>
      </Tabs>
      <Tabs>
        <TabPane tab="Auto expand by dataSet" key="1" dataSet={ds}>
          <Form dataSet={ds}>
            <TextField name="name" />
          </Form>
        </TabPane>
        <TabPane
          tab="Auto expand by context but need forceRender"
          key="2"
          forceRender
        >
          <Form dataSet={ds}>
            <TextField name="name" />
          </Form>
        </TabPane>
      </Tabs>
    </>
  );
};

const SlidingTabsDemo = () => {
  const handleModeChange = (e) => {
    const mode = e.target.value;
    setMode(mode);
  };

  const [mode, setMode] = useState("left");
  return (
    <div>
      <Radio.Group
        onChange={handleModeChange}
        value={mode}
        style={{ marginBottom: 8 }}
      >
        <Radio.Button value="left">Vertical</Radio.Button>
        <Radio.Button value="top">Horizontal</Radio.Button>
      </Radio.Group>
      <Tabs defaultActiveKey="1" tabPosition={mode} style={{ height: 220 }}>
        <TabPane tab="Tab 1" key="1">
          Content of tab 1
        </TabPane>
        <TabPane tab="Tab 2" key="2">
          Content of tab 2
        </TabPane>
        <TabPane tab="Tab 3" key="3">
          Content of tab 3
        </TabPane>
        <TabPane tab="Tab 4" key="4">
          Content of tab 4
        </TabPane>
        <TabPane tab="Tab 5" key="5">
          Content of tab 5
        </TabPane>
        <TabPane tab="Tab 6" key="6">
          Content of tab 6
        </TabPane>
        <TabPane tab="Tab 7" key="7">
          Content of tab 7
        </TabPane>
        <TabPane tab="Tab 8" key="8">
          Content of tab 8
        </TabPane>
        <TabPane tab="Tab 9" key="9">
          Content of tab 9
        </TabPane>
        <TabPane tab="Tab 10" key="10">
          Content of tab 10
        </TabPane>
        <TabPane tab="Tab 11" key="11">
          Content of tab 11
        </TabPane>
        <TabPane tab="Tab 12" key="12">
          Content of tab 11
        </TabPane>
        <TabPane tab="Tab 13" key="13">
          Content of tab 11
        </TabPane>
        <TabPane tab="Tab 14" key="14">
          Content of tab 11
        </TabPane>
      </Tabs>
    </div>
  );
};

const FlexTabs = () => {
  const [mode, setMode] = React.useState("top");

  return (
    <div>
      <div style={{ marginBottom: 16 }}>
        Tab position：
        <Select
          value={mode}
          onChange={setMode}
          dropdownMatchSelectWidth={false}
        >
          <Option value="top">top</Option>
          <Option value="bottom">bottom</Option>
          <Option value="left">left</Option>
          <Option value="right">right</Option>
        </Select>
      </div>
      <Tabs
        defaultActiveKey="1"
        onChange={callback}
        flex
        tabPosition={mode}
        style={{ height: 300 }}
      >
        <TabPane tab="Tab 1" key="1">
          <div style={{ height: 400 }}>Content of Tab Pane 1</div>
        </TabPane>
        <TabPane tab="Tab 2" key="2">
          Content of Tab Pane 2
        </TabPane>
        <TabPane tab="Tab 3" key="3">
          Content of Tab Pane 3
        </TabPane>
      </Tabs>
    </div>
  );
};

const TabsPage = () => {
  return (
    <Content>
      <h2 style={{ marginBottom: 20 }}>基本</h2>
      <div style={boxStyle}>
        <Tabs inkBarStyle={{ width: 20 }}>
          <TabPane
            tab={
              <span>
                <Icon type="add_moderator-2" />
                插件管理
              </span>
            }
          >
            11111111
          </TabPane>
          <TabPane tab="版本管理1">234567</TabPane>
          <TabPane disabled tab="应用管理1">
            5555
          </TabPane>
        </Tabs>
      </div>
      <h2>卡片式tabs</h2>
      <div style={boxStyle}>
        <Tabs type="card">
          <TabPane
            tab={
              <Tooltip title="点击右键可编辑">
                <span>版本管理2</span>
              </Tooltip>
            }
          >
            234567
          </TabPane>
          <TabPane
            tab={
              <Tooltip title="点击右键可编辑">
                <span>版本管理2</span>
              </Tooltip>
            }
          >
            234567
          </TabPane>
          <TabPane
            tab={
              <Tooltip title="点击右键可编辑">
                <span>版本管理2</span>
              </Tooltip>
            }
          >
            234567
          </TabPane>
        </Tabs>
      </div>
      <h2>分组</h2>
      <div style={boxStyle}>
        <Tabs
          keyboard={false}
          tabBarExtraContent={<Button>Extra Action</Button>}
          defaultActiveKey="1"
          onChange={callback}
          tabPosition="top"
          customizedCode="customized-group"
        >
          <TabGroup tab="Group 1" key="group-1" defaultActiveKey="2">
            <TabPane tab="Tab A" key="1" count={117}>
              Content of Tab Pane 1
            </TabPane>
            <TabPane tab="Tab B" key="2" count={0}>
              Content of Tab Pane 2
            </TabPane>
            <TabPane tab="Tab C" key="3" count={66}>
              Content of Tab Pane 3
            </TabPane>
          </TabGroup>
          <TabGroup tab="Group 2" key="group-2" defaultActiveKey="5" dot>
            <TabPane tab="Tab D" key="4" count={1}>
              Content of Tab Pane 4
            </TabPane>
            <TabPane tab="Tab E" key="5" count={2}>
              Content of Tab Pane 5
            </TabPane>
          </TabGroup>
          <TabGroup tab="Group 3" key="group-3" disabled />
        </Tabs>
      </div>
      <h2>竖直tabs</h2>
      <div style={boxStyle}>
        <Tabs tabPosition="left">
          <TabPane tab="插件管理3" closable>
            122
          </TabPane>
          <TabPane tab="版本管理3">234567</TabPane>
          <TabPane tab="应用管理3">5555</TabPane>
        </Tabs>
        <Tabs tabPosition="right">
          <TabPane tab="插件管理3" closable>
            122
          </TabPane>
          <TabPane tab="版本管理3">234567</TabPane>
          <TabPane tab="应用管理3">5555</TabPane>
        </Tabs>
        <Tabs tabPosition="top" inkBarStyle={{ width: 20 }}>
          <TabPane tab="插件管理3" closable>
            122
          </TabPane>
          <TabPane tab="版本管理3">234567</TabPane>
          <TabPane tab="应用管理3">5555</TabPane>
        </Tabs>
        <Tabs tabPosition="bottom" inkBarStyle={{ width: 20 }}>
          <TabPane tab="插件管理3" closable>
            bottombottombottom
          </TabPane>
          <TabPane tab="版本管理3">234567</TabPane>
          <TabPane tab="应用管理3">5555</TabPane>
        </Tabs>
        <div style={{ marginTop: "10px" }} />
        <Tabs tabPosition="left">
          <TabPane
            tab={
              <div>
                <Icon type="date_range" />
                item01
              </div>
            }
            closable
          >
            122
          </TabPane>
          <TabPane
            tab={
              <div>
                <Icon type="date_range" />
                item02
              </div>
            }
          >
            234567
          </TabPane>
          <TabPane
            tab={
              <div>
                <Icon type="date_range" />
                item03
              </div>
            }
          >
            5555
          </TabPane>
        </Tabs>
        <div style={{ marginTop: "10px" }} />
        <h2>仅图标暂未支持</h2>
        <Tabs tabPosition="left">
          <TabPane
            tab={
              <div>
                <Icon type="date_range" />
              </div>
            }
            closable
          >
            122
          </TabPane>
          <TabPane
            tab={
              <div>
                <Icon type="date_range" />
              </div>
            }
          >
            234567
          </TabPane>
          <TabPane
            tab={
              <div>
                <Icon type="date_range" />
              </div>
            }
          >
            5555
          </TabPane>
        </Tabs>
      </div>
      <h2>可增加tabs</h2>
      <div style={boxStyle}>
        <Demo />
      </div>
      <div style={boxStyle}>
        <SlidingTabsDemo />
      </div>
      <h2>关联DataSet校验</h2>
      <div style={boxStyle}>
        <DataSetDemo />
      </div>
      <h2>柔性布局</h2>
      <div style={boxStyle}>
        <FlexTabs />
      </div>
    </Content>
  );
};

export default withThemedLayout({
  title: "Tabs 组件",
  name: "tabs",
  styleCount: 3,
})(TabsPage);
