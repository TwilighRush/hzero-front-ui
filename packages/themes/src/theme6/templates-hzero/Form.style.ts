import { css } from 'styled-components';
import { getThemeData } from '@hzero-front-ui/core/lib/utils';

const FormStyle = (props) => {
  const { primary1 } = getThemeData(props, 'common');
  return css`
    .ant-form-item-required.ant-form-item-required {
      .ant-form-item-children {
        .ant-input-number-input:not(:disabled),
        .ant-time-picker-input:not(:disabled),
        .ant-input:not(.ant-input-disabled):not(:disabled),
        .ant-cascader-picker:not(.ant-cascader-picker-disabled):not(:disabled),
        .ant-select:not(.ant-select-disabled) > .ant-select-selection:not(:disabled) {
          background-color: ${primary1} !important;
        }
      }
      input:-internal-autofill-selected{
        background-color: none !important;
      }
    }
  `;
};

export default FormStyle;
