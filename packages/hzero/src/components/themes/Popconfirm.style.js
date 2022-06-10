import { css } from "styled-components";

import {
  getThemeData,
  createStyleComponent,
} from "@hzero-front-ui/core/lib/utils";

const PopconfirmStyle = (props) => {
  const { primary } = getThemeData(props, "common");
  const {
    fontFamily,
    fontSize,
    wrapBgColor,
    wrapRadius,
    iconBgImage,
    iconSize,
    buttonRadius,
    leftButtonBorderColor,
    textColor,
  } = getThemeData(props, "popconfirm");
  return css`
    .ant-popover {
      .ant-popover-content {
        .ant-popover-inner {
          .ant-popover-inner-content {
            background-color: ${wrapBgColor};
            border-radius: ${wrapRadius}px;
            /* 文字 */
            font-family: ${fontFamily};
            font-size: ${fontSize}px;
            .ant-popover-message {
              color: ${textColor};
              .anticon {
                width: 14px;
                height: 22px;
                background-size: ${iconSize};
                background-position: center;
                background-repeat: no-repeat;
                background-image: url(${iconBgImage});
                &:before {
                  display: none;
                }
              }
            }
            /* 按钮 */
            .ant-popover-buttons {
              .ant-btn.ant-btn-sm {
                border-radius: ${buttonRadius}px;
                background-color: transparent;
                border-color: ${leftButtonBorderColor};
                &:hover {
                  border-color: ${leftButtonBorderColor === ""
                    ? primary
                    : leftButtonBorderColor};
                }
                &.ant-btn-primary {
                  &:hover {
                    color: #fff;
                  }
                  background-color: ${primary};
                }
              }
            }
          }
        }
        .ant-popover-arrow {
          background-color: ${wrapBgColor};
        }
      }
    }
  `;
};
export default createStyleComponent("popconfirm", PopconfirmStyle, true);
