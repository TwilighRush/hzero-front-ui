import { css } from 'styled-components';
import { getThemeData } from '@hzero-front-ui/core';

const IconPickerStyle = (props) => {
  const { primary6, titleColor3, primary1 } = getThemeData(props, 'common');
  return css`
    .c7n-pro-icon-picker-wrapper.c7n-pro-icon-picker-wrapper {
      .c7n-pro-icon-picker-prefix {
        .icon {
          font-size: 20px;
        }
      }
    }
    .c7n-pro-icon-picker {
      padding-left: 32px !important;
    }
    .c7n-pro-icon-picker-popup.c7n-pro-icon-picker-popup {
      .c7n-pro-icon-picker-category {
        ul {
          padding-left: 4px;
          padding-top: 4px;
          li {
            padding: 4px;
            div {
              padding: 4px;
              .icon {
                color: ${primary6};
                font-size: 20px;
              }
              p {
                margin-top: 4px;
                color: ${titleColor3};
                font-size: 12px;
              }
            }
          }
        }
        .c7n-pro-icon-picker-item-selected {
          div {
            background-color: ${primary1};
          }
          p {
            color: ${primary6};
          }
          .icon {
            color: ${primary6};
          }
        }
      }
      .c7n-tabs .c7n-tabs-nav {
        margin-left: 0.16rem;
      }
    }
  `;
};
export default IconPickerStyle;
