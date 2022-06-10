import { css } from "styled-components";
import { getThemeData, createStyleComponent } from "@hzero-front-ui/core";

function getCheckboxButtonStyle(props) {
  const d = getThemeData(props, "checkboxBtn");
  const {
    primary,
    fontFamily,
    disabledBg = "#f8f8f8",
    disabledColor = "#aaadba",
    disabledBorderColor = "#E7EAED",
  } = getThemeData(props, "common");
  return css`
    .c7n-pro-checkbox-wrapper.c7n-pro-checkbox-button {
      padding: 0;
      margin-right: 0.08rem;
    }
    .c7n-pro-checkbox-wrapper.c7n-pro-checkbox-button {
      margin-left: 0;
      .c7n-pro-checkbox-label {
        padding: 0 ${d.paddingLR}px;
        width: 100%;
        text-align: center;
      }
    }
    /* 怀疑这里有问题 */
    .c7n-checkbox-button {
      .c7n-pro-checkbox-wrapper:not(.c7n-pro-checkbox-button) {
        border-radius: 0.02rem;
        && {
          line-height: 0;
        }
        .c7n-pro-checkbox:hover + .c7n-pro-checkbox-inner,
        .c7n-pro-checkbox-wrapper:hover .c7n-pro-checkbox-inner {
          border-color: ${primary};
        }
        .c7n-pro-checkbox:disabled + .c7n-pro-checkbox-inner {
          :before {
            display: none;
          }
        }
        .c7n-pro-checkbox:disabled.c7n-pro-checkbox:checked
          + .c7n-pro-checkbox-inner {
          /* :before {
              display: none;
            } */
        }
        .c7n-pro-checkbox-inner {
          position: relative;
          box-sizing: border-box;
          width: 0.14rem;
          height: 0.14rem;
          border: 0.01rem solid ${d.borderColor};
          border-radius: ${d.radius}px;
          background: transparent !important;
          background-clip: content-box;
          :hover {
            border-color: ${primary};
          }
          :after {
            position: relative;
            /* z-index: 2; */
            transform: rotate(45deg) scale(0);
            transform-origin: center;
            transition: all 0.5s;
          }
          :before {
            content: "";
            position: absolute;
            top: -0.01rem;
            bottom: -0.01rem;
            left: -0.01rem;
            right: -0.01rem;
            background: ${primary};
            transform-origin: center;
            transform: scale(0);
            transition: all 0.5s;
            border-radius: ${d.radius}px;
          }
        }
        .c7n-pro-checkbox-label {
          font-family: ${fontFamily};
          font-size: ${d.fontSize}px;
          color: ${d.fontColor};
        }
      }
    }
    .c7n-pro-checkbox-wrapper.c7n-pro-checkbox-button {
      margin: 0 0.04rem;
      .c7n-pro-checkbox-inner {
        display: none;
      }
      .c7n-pro-checkbox-label {
        display: inline-block;
        font-family: ${fontFamily};
        height: ${d.height}px;
        padding: 0 ${d.paddingLR}px;
        line-height: ${d.height - 2}px;
        font-size: ${d.fontSize}px;
        border-radius: ${d.radius}px;
        background: ${d.bgColor};
        color: ${d.fontColor};
        border: 0.01rem solid ${d.borderColor};
        transition: all 0.5s;
        :hover {
          background: ${d.checkedBgColor};
          color: ${d.checkedFontColor};
          border-color: ${d.checkedBorderColor};
          opacity: 0.6;
        }
      }
      .c7n-pro-checkbox:checked + i + .c7n-pro-checkbox-label {
        background: ${d.checkedBgColor};
        color: ${d.checkedFontColor};
        border-color: ${d.checkedBorderColor};
        /* position: static; */
        opacity: 1;
        :hover {
          opacity: 1;
        }
      }
      .c7n-pro-checkbox:disabled + i + .c7n-pro-checkbox-label {
        cursor: not-allowed;
        background: ${disabledBg};
        color: ${disabledColor};
        border-color: ${disabledBorderColor};
        opacity: 1;
        :hover {
          opacity: 1;
        }
      }
    }
  `;
}

const checkboxBtnStyle = css`
  /* Button类型的Checkbox的样式实现 */
  ${getCheckboxButtonStyle}
`;

export default createStyleComponent("checkboxBtn", checkboxBtnStyle);
