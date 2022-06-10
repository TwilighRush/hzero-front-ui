import { css } from 'styled-components';
import { getThemeData } from '@hzero-front-ui/core/lib/utils';

const cascaderStyle = (props) => {
  const { primary6, primary1 } = getThemeData(props, 'common');
  return css`
    .ant-cascader-picker.ant-cascader-picker:not(.ant-cascader-picker-disabled) {
      .ant-cascader-picker-label:hover {
        + .ant-input {
          border-color: ${primary6};
        }
      }
      &:active,
      &:focus,
      &.ant-cascader-picker-focused {
        .ant-input {
          border-color: ${primary6};
          box-shadow: 0 0 0 2px ${primary1};
        }
      }
    }
    .ant-cascader-menus.ant-cascader-menus {
      .ant-cascader-menu.ant-cascader-menu {
        .ant-cascader-menu-item {
          &:hover {
            background-color: ${primary1};
          }
        }
        .ant-cascader-menu-item-active {
          background-color: ${primary1};
          color: ${primary6};
          &:after {
            color: ${primary6};
          }
        }
      }
    }
  `;
};
export default cascaderStyle;
