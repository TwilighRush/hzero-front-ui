import { css } from 'styled-components';
import { getThemeData } from '@hzero-front-ui/core/lib/utils';
const timePickerStyle = (props) => {
  const { primary6, primary1 } = getThemeData(props, 'common');
  return css`
    .ant-time-picker-panel.ant-time-picker-panel {
      .ant-time-picker-panel-select {
        .ant-time-picker-panel-select-option-selected {
          background-color: ${primary1};
          color: ${primary6};
        }
        li {
          :hover {
            background-color: ${primary1};
          }
        }
      }
    }
    .ant-time-picker-input.ant-time-picker-input {
      :hover,
      :active {
        border-color: ${primary6};
      }
      :active,
      :focus {
        box-shadow: 0 0 0 2px ${primary1};
      }
    }
  `;
};
export default timePickerStyle;
