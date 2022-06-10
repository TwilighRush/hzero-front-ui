import { css } from 'styled-components';
import { getThemeData } from '@hzero-front-ui/core';

const TreeStyle = (props) => {
  const { primary1,primary6 } = getThemeData(props, 'common');
  return css`
  //多选框
     .ant-tree.ant-tree {
      .ant-tree-checkbox:not(.ant-tree-checkbox-disabled) {
        &:hover {
          .ant-tree-checkbox-inner {
            border-color: ${primary6};
          }
        }
        &.ant-tree-checkbox-indeterminate,
        &.ant-tree-checkbox-checked {
          .ant-tree-checkbox-inner {
            background-color: ${primary6};
            border-color: ${primary6};
          }
        }
      }
    }
    //选中
    .ant-tree.ant-tree {
      li .ant-tree-node-content-wrapper {
        &:hover,
        &.ant-tree-node-selected {
          background: ${primary1};
        }
      }
      &.ant-tree-directory {
        > li span.ant-tree-node-content-wrapper:hover:before,
        .ant-tree-child-tree > li span.ant-tree-node-content-wrapper:hover:before {
          background-color: ${primary1};
        }
        > li.ant-tree-treenode-selected > span.ant-tree-switcher,
        .ant-tree-child-tree > li.ant-tree-treenode-selected > span.ant-tree-switcher {
          color: rgba(0, 0, 0, 0.65);
        }
        > li.ant-tree-treenode-selected,
        .ant-tree-child-tree > li.ant-tree-treenode-selected {
          > span.ant-tree-node-content-wrapper {
            color: rgba(0, 0, 0, 0.65);
            :before {
              background-color: ${primary1};
            }
          }
        }
      }
    }
  `;
};
export default TreeStyle;
