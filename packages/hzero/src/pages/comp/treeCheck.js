import React from "react";
import { Row, Col } from "hzero-ui";
import { Content } from "root/components/Page";
import { withThemedLayout } from "../../utils/withThemedLayout";
import Tree from "../../components/Tree";

const { TreeNode } = Tree;

const TreeCheckPage = () => {
  return (
    <>
      <Content>
        <Row type="flex" style={{ marginBottom: 60 }}>
          <Col span={5}>
            <Tree
              theme={{ style: "theme-two" }}
              checkable
              defaultExpandedKeys={["0-0-0", "0-0-1"]}
              defaultSelectedKeys={["0-0-0", "0-0-1"]}
              defaultCheckedKeys={["0-0-0", "0-0-1"]}
            >
              <TreeNode title="一级菜单1" key="0-0">
                <TreeNode title="二级菜单1" key="0-0-0" disabled>
                  <TreeNode title="三级菜单" key="0-0-0-0" disableCheckbox />
                  <TreeNode title="三级菜单" key="0-0-0-1" />
                  <TreeNode title="三级菜单" key="0-0-0-2" />
                </TreeNode>
                <TreeNode title="二级菜单2" key="0-0-1">
                  <TreeNode
                    title={<span style={{ color: "#1890ff" }}>内置标签</span>}
                    key="0-0-1-0"
                  />
                  <TreeNode title="三级菜单" key="0-0-0-3" />
                  <TreeNode title="三级菜单" key="0-0-0-4">
                    <TreeNode title="四级菜单1" key="0-0-0-0-0">
                      <TreeNode title="五级菜单1" key="0-0-0-0-0-0" />
                      <TreeNode title="五级菜单2" key="0-0-0-0-0-1" />
                    </TreeNode>
                    <TreeNode title="四级菜单2" key="0-0-0-0-1" />
                  </TreeNode>
                </TreeNode>
              </TreeNode>
              <TreeNode title="一级菜单2" key="0-1">
                <TreeNode title="二级菜单3" key="0-0-2" />
              </TreeNode>
            </Tree>
          </Col>
        </Row>
      </Content>
    </>
  );
};

export default withThemedLayout({
  title: "Tree Check 多选",
  name: "treeCheck",
  styleCount: 2,
})(TreeCheckPage);
