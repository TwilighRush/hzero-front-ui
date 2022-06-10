import React, { useState } from "react";
import { Row, Col } from "hzero-ui";
import { Content } from "root/components/Page";
import Cascader from "../../components/Cascader";
import TreeSelect from "../../components/TreeSelect";
import Select from "../../components/Select";
import { withThemedLayout } from "../../utils/withThemedLayout";

const { Option, OptGroup } = Select;
const { TreeNode } = TreeSelect;
const { SHOW_PARENT } = TreeSelect;
const boxStyle = {
  margin: 20,
  padding: 20,
  border: "1px solid rgba(90, 94, 154, 0.2)",
  marginLeft: 0,
  borderRadius: 5,
};
const options = [
  {
    value: "zhejiang",
    label: "Zhejiang",
    children: [
      {
        value: "hangzhou",
        label: "Hangzhou",
        children: [
          {
            value: "xihu",
            label: "West Lake",
          },
        ],
      },
    ],
  },
  {
    value: "jiangsu",
    label: "Jiangsu",
    children: [
      {
        value: "nanjing",
        label: "Nanjing",
        children: [
          {
            value: "zhonghuamen",
            label: "Zhong Hua Men",
          },
        ],
      },
    ],
  },
];

const treeData = [
  {
    title: "Node1",
    value: "0-0",
    key: "0-0",
    children: [
      {
        title: "Child Node1",
        value: "0-0-0",
        key: "0-0-0",
      },
    ],
  },
  {
    title: "Node2",
    value: "0-1",
    key: "0-1",
    children: [
      {
        title: "Child Node3",
        value: "0-1-0",
        key: "0-1-0",
      },
      {
        title: "Child Node4",
        value: "0-1-1",
        key: "0-1-1",
      },
      {
        title: "Child Node5",
        value: "0-1-2",
        key: "0-1-2",
      },
    ],
  },
];
class Demo extends React.Component {
  state = {
    value: ["0-0-0"],
  };

  onChange = (value) => {
    console.log("onChange ", value);
    this.setState({ value });
  };

  render() {
    const tProps = {
      treeData,
      value: this.state.value,
      onChange: this.onChange,
      treeCheckable: true,
      showCheckedStrategy: SHOW_PARENT,
      searchPlaceholder: "Please select",
      style: {
        width: 300,
      },
    };
    return <TreeSelect {...tProps} />;
  }
}
const SelectDisplayPage = () => {
  const [value, setValue] = useState(undefined);
  const onChange = (values) => {
    setValue(values);
  };
  const [value1, setValue1] = useState(undefined);
  const onChange1 = (values) => {
    setValue1(values);
  };
  return (
    <>
      {/* <Header title="Select 组件" /> */}
      <Content>
        <h2>Select</h2>
        <div style={boxStyle}>
          <Row type="flex" gutter={16}>
            <Col span={4}>
              <p>基本</p>
              <Select dropdownStyle={{ top: 0 }} style={{ width: 120 }}>
                <Option value={1}>选项1</Option>
                <Option value={2}>选项2</Option>
                <Option value={3}>选项3</Option>
              </Select>
            </Col>
            <Col span={4}>
              <p>禁用</p>
              <Select defaultValue={1} disabled style={{ width: 120 }}>
                <Option value={1}>选项1</Option>
                <Option value={2}>选项2</Option>
                <Option value={3}>选项3</Option>
              </Select>
            </Col>
          </Row>
          <Row>
            <p>分组</p>
            <Select defaultValue="lucy" style={{ width: 200 }}>
              <OptGroup label="Manager">
                <Option value="jack">Jack</Option>
                <Option value="lucy">Lucy</Option>
              </OptGroup>
              <OptGroup label="Engineer">
                <Option value="Yiminghe">yiminghe</Option>
              </OptGroup>
            </Select>
          </Row>
          <Row gutter={16}>
            <Col span={4}>
              <p>多选样式一</p>
              <Select mode="multiple" defaultValue={[1]} style={{ width: 120 }}>
                <Option value={1}>选项1</Option>
                <Option value={2}>选项2</Option>
                <Option value={3}>选项3</Option>
              </Select>
            </Col>
            <Col span={4}>
              <p>多选样式二</p>
              <Select defaultValue={[1]} mode="multiple" style={{ width: 120 }}>
                <Option value={1}>选项1</Option>
                <Option value={2}>选项2</Option>
                <Option value={3}>选项3</Option>
              </Select>
            </Col>
          </Row>
        </div>
        <h2>Cascader</h2>
        <div style={boxStyle}>
          <Row gutter={16}>
            <Col span={4}>
              <p>Cascader</p>
              <Cascader options={options} />
            </Col>
            <Col span={4}>
              <p>Cascader禁用样式</p>
              <Cascader disabled options={options} />
            </Col>
          </Row>
        </div>
        <h2>TreeSelect</h2>
        <div style={boxStyle}>
          <Row gutter={16}>
            <Col span={8}>
              <p>基础</p>
              <TreeSelect
                showSearch
                style={{ width: 200 }}
                value={value}
                dropdownStyle={{ maxHeight: 400, overflow: "auto" }}
                placeholder="Please select"
                allowClear
                treeDefaultExpandAll
                onChange={onChange}
              >
                <TreeNode value="parent 1" title="parent 1" key="0-1">
                  <TreeNode value="parent 1-0" title="parent 1-0" key="0-1-1">
                    <TreeNode value="leaf1" title="my leaf" key="random" />
                    <TreeNode value="leaf2" title="your leaf" key="random1" />
                  </TreeNode>
                  <TreeNode value="parent 1-1" title="parent 1-1" key="random2">
                    <TreeNode
                      value="sss"
                      title={<b style={{ color: "#08c" }}>sss</b>}
                      key="random3"
                    />
                  </TreeNode>
                </TreeNode>
              </TreeSelect>
            </Col>
            <Col span={8}>
              <p>TreeSelect禁用样式</p>
              <Cascader disabled options={options} />
            </Col>
          </Row>
          <Row gutter={16}>
            <p>TreeSelect多选</p>
            <TreeSelect
              showSearch
              style={{ width: 300 }}
              value={value1}
              dropdownStyle={{ maxHeight: 400, overflow: "auto" }}
              placeholder="Please select"
              allowClear
              multiple
              treeDefaultExpandAll
              onChange={onChange1}
            >
              <TreeNode value="parent 1" title="parent 1" key="0-1">
                <TreeNode value="parent 1-0" title="parent 1-0" key="0-1-1">
                  <TreeNode value="leaf1" title="my leaf" key="random" />
                  <TreeNode value="leaf2" title="your leaf" key="random1" />
                </TreeNode>
                <TreeNode value="parent 1-1" title="parent 1-1" key="random2">
                  <TreeNode
                    value="sss"
                    title={<b style={{ color: "#08c" }}>sss</b>}
                    key="random3"
                  />
                </TreeNode>
              </TreeNode>
            </TreeSelect>
          </Row>
          <Row gutter={16}>
            <p>TreeSelect多选（多选框）</p>
            <Demo />
          </Row>
        </div>
      </Content>
    </>
  );
};

export default withThemedLayout({
  title: "Select 组件",
  name: "cascader",
  styleCount: 2,
})(SelectDisplayPage);
