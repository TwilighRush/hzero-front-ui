import React from "react";
import { Row, Col } from "hzero-ui";
import { Content } from "root/components/Page";
import { withThemedLayout } from "../../utils/withThemedLayout";
import Tree from "../../components/Tree";

const { TreeNode } = Tree;
const { DirectoryTree } = Tree;

const TreePage = () => {
  return (
    <>
      <Content>
        <Row type="flex" style={{ marginBottom: 60 }}>
          <Col span={6}>
            <Tree
              defaultExpandedKeys={["0-0-0", "0-0-1"]}
              defaultSelectedKeys={["0-0-0", "0-0-1"]}
            >
              <TreeNode title="一级菜单1" key="0-0">
                <TreeNode title="二级菜单1" key="0-0-0" disabled>
                  <TreeNode title="三级菜单" key="0-0-0-0" disableCheckbox />
                  <TreeNode title="三级菜单" key="0-0-0-1" />
                </TreeNode>
                <TreeNode title="二级菜单2" key="0-0-1">
                  <TreeNode
                    title={<span style={{ color: "#1890ff" }}>内置标签</span>}
                    key="0-0-1-0"
                  />
                </TreeNode>
              </TreeNode>
              <TreeNode title="一级菜单2" key="0-1">
                <TreeNode title="二级菜单3" key="0-0-2" />
              </TreeNode>
            </Tree>
          </Col>
          <Col span={6}>
            <DirectoryTree multiple defaultExpandAll>
              <TreeNode title="一级菜单1" key="0-0">
                <TreeNode title="二级菜单1" key="0-0-0" isLeaf />
                <TreeNode title="二级菜单2" key="0-0-1" isLeaf />
              </TreeNode>
              <TreeNode title="一级菜单2" key="0-1">
                <TreeNode title="二级菜单3" key="0-1-0" isLeaf />
                <TreeNode title="二级菜单4" key="0-1-1" isLeaf />
              </TreeNode>
            </DirectoryTree>
          </Col>
        </Row>
      </Content>
    </>
  );
};

export default withThemedLayout({
  title: "Tree 树形控件",
  name: "tree",
  styleCount: 1,
})(TreePage);
