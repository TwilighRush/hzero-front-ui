import React from "react";
import { Row, Col } from "choerodon-ui";
import { Content } from "root/components/Page";
import { withThemedLayout } from "../../utils/withThemedLayout";
import ProTree from "../../components/TreePro";

const { TreeNode: ProTreeNode } = ProTree;

const TreeCheckPage = () => {
  return (
    <>
      <Content style={{ marginBottom: 60 }}>
        <p>Pro</p>
        <Row type="flex" style={{ marginBottom: 60 }}>
          <Col>
            <ProTree
              theme={{ style: "theme-two" }}
              checkable
              defaultExpandedKeys={["0-0-0", "0-0-1"]}
              defaultSelectedKeys={["0-0-0", "0-0-1"]}
              defaultCheckedKeys={["0-0-0", "0-0-1"]}
            >
              <ProTreeNode title="一级菜单1" key="0-0">
                <ProTreeNode title="二级菜单1" key="0-0-0" disabled>
                  <ProTreeNode title="三级菜单" key="0-0-0-0" disableCheckbox />
                  <ProTreeNode title="三级菜单" key="0-0-0-1" />
                  <ProTreeNode title="三级菜单" key="0-0-0-2" />
                </ProTreeNode>
                <ProTreeNode title="二级菜单2" key="0-0-1">
                  <ProTreeNode
                    title={<span style={{ color: "#1890ff" }}>内置标签</span>}
                    key="0-0-1-0"
                  />
                  <ProTreeNode title="三级菜单" key="0-0-0-3" />
                  <ProTreeNode title="三级菜单" key="0-0-0-4">
                    <ProTreeNode title="四级菜单1" key="0-0-0-0-0">
                      <ProTreeNode title="五级菜单1" key="0-0-0-0-0-0" />
                      <ProTreeNode title="五级菜单2" key="0-0-0-0-0-1" />
                    </ProTreeNode>
                    <ProTreeNode title="四级菜单2" key="0-0-0-0-1" />
                  </ProTreeNode>
                </ProTreeNode>
              </ProTreeNode>
              <ProTreeNode title="一级菜单2" key="0-1">
                <ProTreeNode title="二级菜单3" key="0-0-2" />
              </ProTreeNode>
            </ProTree>
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
