import React from "react";
import // Row,
// Col,
// TreeSelect,
// Cascader,
// DataSet,
// Form,
// Button as ButtonPro,
"choerodon-ui/pro";
import { Content } from "root/components/Page";
import { withThemedLayout } from "../../utils/withThemedLayout";
import TreeSelect from "../../components/TreeSelectPro";

const boxStyle = {
  margin: 20,
  padding: 20,
  border: "1px solid rgba(90, 94, 154, 0.2)",
  marginLeft: 0,
  borderRadius: 5,
};
const { TreeNode } = TreeSelect;
const TreeSelectPage = () => {
  return (
    <Content>
      <h2>基础</h2>
      <div style={boxStyle}>
        <TreeSelect placeholder="请选择" treeDefaultExpandAll>
          <TreeNode value="parent 1" title="parent 1">
            <TreeNode value="parent 1-0" title="parent 1-0">
              <TreeNode value="leaf1" title="my leaf" />
              <TreeNode value="leaf2" title="your leaf" />
            </TreeNode>

            <TreeNode value="parent 1-1" title="parent 1-1">
              <TreeNode
                value="sss"
                title={<b style={{ color: "#08c" }}>sss</b>}
              />
            </TreeNode>
          </TreeNode>
        </TreeSelect>
        <TreeSelect placeholder="请选择" treeDefaultExpandAll />
      </div>
      <h2>多选</h2>
      <div style={boxStyle}>
        <TreeSelect
          name="user"
          placeholder="请输入"
          treeCheckStrictly
          treeDefaultExpandAll
          treeCheckable
          searchable
          showCheckedStrategy="SHOW_CHILD"
        >
          <TreeNode value="parent 1" title="parent 1">
            <TreeNode value="parent 1-0" title="parent 1-0">
              <TreeNode value="leaf1" title="my leaf" />
              <TreeNode value="leaf2" title="your leaf" />
            </TreeNode>
            <TreeNode value="parent 1-1" title="parent 1-1">
              <TreeNode value="sss" title="sss" />
            </TreeNode>
          </TreeNode>
        </TreeSelect>
      </div>
    </Content>
  );
};
export default withThemedLayout({
  title: "TreeSelect 组件",
  name: "treeSelet",
})(TreeSelectPage);
