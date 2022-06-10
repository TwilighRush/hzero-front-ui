import { css } from 'styled-components';
import { getThemeData } from '@hzero-front-ui/core';
const treeSelectStyle = (props) => {
  const { primary6, primary1 } = getThemeData(props, 'common');
  return css`
    .ant-select-tree.ant-select-tree {
      li {
        .ant-select-tree-node-content-wrapper {
          &:hover,
          &.ant-select-tree-node-selected {
            background-color: ${primary1};
            color: ${primary6};
          }
        }
        .ant-select-tree-checkbox {
          &:hover {
            .ant-select-tree-checkbox-inner {
              border-color: ${primary6};
            }
          }
          &.ant-select-tree-checkbox-checked,
          &.ant-select-tree-checkbox-indeterminate {
            .ant-select-tree-checkbox-inner {
              background-color: ${primary6};
              border-color: ${primary6};
            }
          }
        }
      }
    }
  `;
};
export default treeSelectStyle;
