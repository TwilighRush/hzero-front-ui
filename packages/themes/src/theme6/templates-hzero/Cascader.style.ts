import { css } from 'styled-components';
import { getThemeData } from '@hzero-front-ui/core/lib/utils';

const cascaderStyle = (props) => {
  const { primary1, primary2, primary5, primary6 } = getThemeData(props, 'common');
  return css`
    .ant-cascader-picker.ant-cascader-picker:not(.ant-cascader-picker-disabled) {
      .ant-cascader-picker-label:hover {
        + .ant-input {
          border-color: ${primary5};
        }
      }
      &:active,
      &:focus,
      &.ant-cascader-picker-focused {
        .ant-input {
          border-color: ${primary6};
          box-shadow: 0 0 0 2px ${primary2};
        }
      }
    }
    .ant-cascader-menus.ant-cascader-menus {
      .ant-cascader-menu.ant-cascader-menu {
        .ant-cascader-menu-item {
          .ant-cascader-menu-item-expand-icon {
            display: none;
          }
          &:hover {
            background-color: ${primary1};
          }
        }
        .ant-cascader-menu-item-active {
          &:not(.ant-cascader-menu-item-expand) {
            color: ${primary6};
          }
          background-color: ${primary1};
          &:after {
            color: ${primary6};
          }
        }
      }
    }
  `;
};
export default cascaderStyle;
