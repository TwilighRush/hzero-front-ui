import { css } from 'styled-components';
import { getThemeData } from '@hzero-front-ui/core/lib/utils';

const inputStyle = (props) => {
  const { primary1, primary6 } = getThemeData(props, 'common');
  return css`
    .ant-input-number.ant-input-number:not(.ant-input-number-disabled),
    .ant-input-affix-wrapper.ant-input-affix-wrapper .ant-input:not(.ant-input-disabled),
    .ant-input.ant-input:not(.ant-input-disabled) {
      :hover,
      :focus {
        border-color: ${primary6};
      }
      :focus {
        box-shadow: 0 0 0 2px ${primary1};
      }
    }
    .ant-input-number-focused.ant-input-number-focused:not(.ant-input-number-disabled) {
      border-color: ${primary6};
      box-shadow: 0 0 0 2px ${primary1};
    }
    .ant-input-number-handler-up.ant-input-number-handler-up:not(.ant-input-number-handler-up-disabled):hover,
    .ant-input-number-handler-down.ant-input-number-handler-down:not(.ant-input-number-handler-down-disabled):hover,
    .ant-input-number-handler-active.ant-input-number-handler-active {
      span {
        color: ${primary6};
      }
    }
    .ant-input-group-addon.ant-input-group-addon {
      .ant-select-open,
      .ant-select-focused {
        .ant-select-selection {
          color: ${primary6};
        }
      }
    }
  `;
};

export default inputStyle;
