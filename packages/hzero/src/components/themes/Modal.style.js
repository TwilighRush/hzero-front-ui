import { css } from "styled-components";

import {
  getThemeData,
  createStyleComponent,
} from "@hzero-front-ui/core/lib/utils";

const changeThemeTwo = (showBgIcon, wrapBgColor) => {
  if (showBgIcon) {
    return css`
      overflow: hidden;
      &:before {
        content: "";
        width: 150px;
        height: 150px;
        background: url(${wrapBgColor});
        background-repeat: no-repeat;
        background-size: 150px 150px;
        position: absolute;
        right: -20px;
        top: -35px;
        transform: rotate(180deg);
        opacity: 0.2;
      }
      &:after {
        content: "";
        width: 100px;
        height: 100px;
        background: url(${wrapBgColor});
        background-repeat: no-repeat;
        background-size: 100px 100px;
        position: absolute;
        left: -55px;
        bottom: -55px;
        opacity: 0.2;
      }
    `;
  }
};

const ModalStyle = (props) => {
  const {
    showBgIcon,
    // wrapWidth,
    iconWidth,
    iconHeight,
    fontFamily,
    fontSize,
    titleColor,
    descriptionColor,
    iconImage,
    wrapBgColor,
    contentFont,
  } = getThemeData(props, "modal");
  return css`
    .ant-modal {
      &&.ant-confirm.ant-confirm-confirm {
        .ant-modal-content {
          background: ${wrapBgColor};
          ${changeThemeTwo(showBgIcon, wrapBgColor)}
          .ant-modal-body {
            .ant-confirm-body-wrapper {
              .ant-confirm-body {
                /* 图标 */
                .anticon.anticon-question-circle {
                  margin-right: 8px;
                  &:before {
                    content: "";
                    background-image: url(${iconImage});
                    background-position: center;
                    background-size: ${iconWidth}px ${iconHeight}px;
                    width: ${iconWidth}px;
                    height: ${iconHeight}px;
                    background-repeat: no-repeat;
                  }
                }
                /* 头文字 */
                .ant-confirm-title {
                  font-family: ${fontFamily};
                  font-size: ${fontSize}px;
                  color: ${titleColor};
                }
                /* 描述文字 */
                .ant-confirm-content {
                  font-family: ${contentFont};
                  font-size: ${fontSize}px;
                  color: ${descriptionColor};
                  margin-top: 12px;
                  margin-left: 0;
                }
              }
            }
          }
        }
      }
    }
  `;
};
export default createStyleComponent("modal", ModalStyle, true);
