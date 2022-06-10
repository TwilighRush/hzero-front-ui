import React, { useState } from "react";
import { Row, Col, Icon } from "choerodon-ui";

import { Content } from "root/components/Page";
import { withThemedLayout } from "../../utils/withThemedLayout";
import Switch from "../../components/SwitchPro";
import ProTree from "../../components/TreePro";
import Tree from "../../components/Tree";

const { TreeNode } = Tree;
const { TreeNode: ProTreeNode } = ProTree;

const x = 3;
const y = 2;
const z = 1;
const gData = [];

const generateData = (_level, _preKey, _tns) => {
  const preKey = _preKey || "0";
  const tns = _tns || gData;

  const children = [];
  for (let i = 0; i < x; i++) {
    const key = `${preKey}-${i}`;
    tns.push({ title: key, key });
    if (i < y) {
      children.push(key);
    }
  }
  if (_level < 0) {
    return tns;
  }
  const level = _level - 1;
  children.forEach((key, index) => {
    tns[index].children = [];
    return generateData(level, key, tns[index].children);
  });
};
generateData(z);

class DemoTree extends React.Component {
  state = {
    gData,
    expandedKeys: ["0-0", "0-0-0", "0-0-0-0"],
  };

  onDragEnter = (info) => {
    console.log(info);
    // expandedKeys 需要受控时设置
    // this.setState({
    //   expandedKeys: info.expandedKeys,
    // });
  };

  onDrop = (info) => {
    const dropKey = info.node.props.eventKey;
    const dragKey = info.dragNode.props.eventKey;
    const dropPos = info.node.props.pos.split("-");
    const dropPosition =
      info.dropPosition - Number(dropPos[dropPos.length - 1]);
    // const dragNodesKeys = info.dragNodesKeys;
    const loop = (data, key, callback) => {
      data.forEach((item, index, arr) => {
        if (item.key === key) {
          return callback(item, index, arr);
        }
        if (item.children) {
          return loop(item.children, key, callback);
        }
      });
    };
    const data = [...this.state.gData];
    let dragObj;
    loop(data, dragKey, (item, index, arr) => {
      arr.splice(index, 1);
      dragObj = item;
    });
    if (info.dropToGap) {
      let ar;
      let i;
      loop(data, dropKey, (item, index, arr) => {
        ar = arr;
        i = index;
      });
      if (dropPosition === -1) {
        ar.splice(i, 0, dragObj);
      } else {
        ar.splice(i + 1, 0, dragObj);
      }
    } else {
      loop(data, dropKey, (item) => {
        item.children = item.children || [];
        // where to insert 示例添加到尾部，可以是随意位置
        item.children.push(dragObj);
      });
    }
    this.setState({
      gData: data,
    });
  };

  render() {
    const loop = (data) =>
      data.map((item) => {
        if (item.children && item.children.length) {
          return (
            <TreeNode key={item.key} title={item.key}>
              {loop(item.children)}
            </TreeNode>
          );
        }
        return <TreeNode key={item.key} title={item.key} />;
      });
    return (
      <Tree
        className="draggable-tree"
        defaultExpandedKeys={this.state.expandedKeys}
        draggable
        onDragEnter={this.onDragEnter}
        onDrop={this.onDrop}
      >
        {loop(this.state.gData)}
      </Tree>
    );
  }
}

const boxStyle = {
  margin: 20,
  padding: 20,
  border: "1px solid rgba(90, 94, 154, 0.2)",
  marginLeft: 0,
  borderRadius: 5,
};
const titleStyle = {
  fontSize: "14px",
  color: "#1C1C1C",
  fontWeight: 600,
};
const TreePage = () => {
  const [showLine, setShowLine] = useState(false);
  const [showIcon, setShowIcon] = useState(false);
  const [showLeafIcon, setShowLeafIcon] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const onSetLeafIcon = (checked) => {
    setShowLeafIcon(checked);
    setShowLine({
      showLeafIcon: checked,
    });
  };

  const onSetShowLine = (checked) => {
    setShowLine(
      checked
        ? {
            showLeafIcon,
          }
        : false
    );
  };

  return (
    <>
      <Content>
        <p>pro</p>
        <div style={boxStyle}>
          <div>
            showLine: <Switch checked={showLine} onChange={onSetShowLine} />
            <br />
            <br />
            showIcon: <Switch checked={showIcon} onChange={setShowIcon} />
            <br />
            <br />
            showLeafIcon:{" "}
            <Switch checked={showLeafIcon} onChange={onSetLeafIcon} />
            <br />
            <br />
            disabled:{" "}
            <Switch
              checked={disabled}
              onChange={() => setDisabled(!disabled)}
            />
          </div>
          <Row type="flex" style={{ marginBottom: 60 }}>
            <Col span={6}>
              <ProTree
                showLine={showLine}
                showIcon={showIcon}
                showLeafIcon={showLeafIcon}
                icon={() => <Icon type="airline_seat_flat-o" />}
                // checkable
                defaultExpandedKeys={["0-0-0", "0-0-1"]}
                defaultSelectedKeys={["0-0-0", "0-0-1"]}
                disabled={disabled}
              >
                <ProTreeNode title="一级菜单1" key="0-0">
                  <ProTreeNode title="二级菜单1" key="0-0-0" disabled>
                    <ProTreeNode
                      title="三级菜单"
                      key="0-0-0-0"
                      disableCheckbox
                    />
                    <ProTreeNode title="三级菜单" key="0-0-0-1" />
                  </ProTreeNode>
                  <ProTreeNode title="一级菜单2" key="0-1">
                    <ProTreeNode title="二级菜单3" key="0-0-2" />
                  </ProTreeNode>
                </ProTreeNode>
                <ProTreeNode title="一级菜单1" key="1-0">
                  <ProTreeNode title="二级菜单1" key="1-0-0" disabled>
                    <ProTreeNode
                      title="三级菜单"
                      key="1-0-0-0"
                      disableCheckbox
                    />
                    <ProTreeNode title="三级菜单" key="1-0-0-1" />
                  </ProTreeNode>
                  <ProTreeNode title="一级菜单2" key="1-1">
                    <ProTreeNode title="二级菜单3" key="1-0-2" />
                  </ProTreeNode>
                </ProTreeNode>
              </ProTree>
            </Col>
          </Row>
        </div>
        <h2>题目折叠</h2>
        <div style={boxStyle}>
          <Row type="flex" style={{ marginBottom: 60 }}>
            <Col span={6}>
              <ProTree
                showIcon
                showLine={false}
                // checkable
                defaultExpandedKeys={["0-0-0", "0-0-1"]}
                defaultSelectedKeys={["0-0-0", "0-0-1"]}
              >
                <ProTreeNode
                  title={<div style={titleStyle}>一级菜单1</div>}
                  key="0-0"
                >
                  <ProTreeNode title="二级菜单1" key="0-0-0">
                    <ProTreeNode title="三级菜单" key="0-0-0-0" disabled>
                      <ProTreeNode title="四级菜单" key="0-0-0-0-0" />
                    </ProTreeNode>
                    <ProTreeNode title="三级菜单" key="0-0-0-1" />
                  </ProTreeNode>
                  <ProTreeNode title="二级菜单2" key="0-0-1">
                    <ProTreeNode title="三级菜单" key="0-0-1-0" />
                  </ProTreeNode>
                </ProTreeNode>
                <ProTreeNode
                  title={<div style={titleStyle}>一级菜单2</div>}
                  key="0-1"
                >
                  <ProTreeNode title="二级菜单3" key="0-0-2" />
                </ProTreeNode>
              </ProTree>
            </Col>
          </Row>
        </div>
        <h2>树形选择</h2>
        <div style={boxStyle}>
          <Row type="flex" style={{ marginBottom: 60 }}>
            <Col span={6}>
              <ProTree
                showIcon
                checkable
                showLine={false}
                defaultExpandedKeys={["0-0-0", "0-0-1"]}
                defaultSelectedKeys={["0-0-0", "0-0-1"]}
              >
                <ProTreeNode
                  title={<div style={titleStyle}>一级菜单1</div>}
                  key="0-0"
                >
                  <ProTreeNode title="二级菜单1" key="0-0-0">
                    <ProTreeNode title="三级菜单" key="0-0-0-0" disabled />
                    <ProTreeNode title="三级菜单" key="0-0-0-1" />
                  </ProTreeNode>
                  <ProTreeNode title="二级菜单2" key="0-0-1">
                    <ProTreeNode title="三级菜单" key="0-0-1-0" />
                  </ProTreeNode>
                </ProTreeNode>
                <ProTreeNode
                  title={<div style={titleStyle}>一级菜单2</div>}
                  key="0-1"
                >
                  <ProTreeNode title="二级菜单3" key="0-0-2" />
                </ProTreeNode>
              </ProTree>
            </Col>
          </Row>
        </div>
        <h2>树形拖拽</h2>
        <div style={boxStyle}>
          <DemoTree />
        </div>
      </Content>
    </>
  );
};

export default withThemedLayout({
  title: "Tree 树形控件",
  name: "tree",
  styleCount: 2,
})(TreePage);
