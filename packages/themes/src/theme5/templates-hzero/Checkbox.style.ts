import { css } from 'styled-components';
import { getThemeData } from '@hzero-front-ui/core/lib/utils';

const checkboxStyle = (props) => {
  const { primary6 } = getThemeData(props, 'common');
  return css`
    .ant-checkbox-wrapper.ant-checkbox-wrapper {
      &:hover {
        .ant-checkbox-inner {
          border-color: ${primary6};
        }
      }
      .ant-checkbox-checked {
        .ant-checkbox-inner:after {
          transform: rotate(45deg) scale(1) translateX(-1px);
        }
      }
      .ant-checkbox-indeterminate {
        .ant-checkbox-inner:after {
          transform: scale(1) translateX(0.5px);
        }
      }
      .ant-checkbox:not(.ant-checkbox-disabled) {
        &:hover,
        &:focus {
          .ant-checkbox-inner {
            border-color: ${primary6};
          }
        }
        &.ant-checkbox-checked,
        &.ant-checkbox-indeterminate {
          .ant-checkbox-inner {
            background-color: ${primary6};
            border-color: ${primary6};
          }
          :after {
            border-color: ${primary6};
          }
        }
      }
      .ant-checkbox-indeterminate {
        &.ant-checkbox-checked {
          .ant-checkbox-inner:after {
            transform: none;
          }
        }
      }
    }
  `;
};

export default checkboxStyle;
