import { css } from "styled-components";
import { getThemeData, createStyleComponent } from "@hzero-front-ui/core";

const checkedStyle = css`
  :before {
    transform: scale(1);
    transition: all 0.5s cubic-bezier(0.17, 2.24, 0.78, 0.57);
  }
  :after {
    transition: all 0.5s cubic-bezier(0.17, 2.24, 0.78, 0.57);
    transform: rotate(45deg) scale(1);
  }
`;

function getCheckboxStyle(props) {
  const d = getThemeData(props, "checkbox");
  const { inputHeight } = getThemeData(props, "input");
  const {
    primary,
    fontFamily,
    disabledBg = "#f8f8f8",
    disabledColor = "#aaadba",
    disabledBorderColor = "#E7EAED",
  } = getThemeData(props, "common");
  return css`
    .c7n-pro-checkbox-wrapper
      .c7n-pro-checkbox:focus
      + .c7n-pro-checkbox-inner {
      box-shadow: initial;
    }
    .c7n-pro-checkbox-wrapper:not(.c7n-pro-checkbox-button) {
      border-radius: 0.02rem;
      height: ${inputHeight}px;
      &:before {
        width: 0;
        height: 100%;
        display: inline-block;
        content: "";
        vertical-align: middle;
      }
      &.c7n-pro-checkbox-indeterminate .c7n-pro-checkbox-inner {
        ${checkedStyle};
      }

      &.c7n-pro-checkbox-indeterminate,
      &.c7n-pro-checkbox-indeterminate:hover {
        .c7n-pro-checkbox-inner {
          background: ${primary};
          border-color: ${primary};
          background-color: ${primary} !important;
          :after {
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%) !important;
          }
        }
      }
      &.c7n-pro-checkbox-disabled .c7n-pro-checkbox-label {
        color: ${disabledColor};
      }
      &.c7n-pro-checkbox-focused {
        .c7n-checkbox-inner {
          border-color: ${primary};
        }
        .c7n-pro-checkbox {
          :checked + .c7n-pro-checkbox-inner {
            ${checkedStyle};
            background: ${primary};
            border-color: ${primary};
          }
          :focus + .c7n-pro-checkbox-inner {
            border-color: ${primary};
          }
        }
      }

      .c7n-pro-checkbox:hover + .c7n-pro-checkbox-inner,
      .c7n-pro-checkbox-wrapper:hover .c7n-pro-checkbox-inner {
        border-color: ${primary};
      }
      .c7n-pro-checkbox:disabled + .c7n-pro-checkbox-inner {
        :before {
          border: 1px solid ${disabledBorderColor};
          transform: scale(1);
          background: ${disabledBg};
        }
      }
      &.c7n-pro-checkbox-indeterminate {
        .c7n-pro-checkbox:disabled + .c7n-pro-checkbox-inner {
          :before {
            background: ${d.indeterminateCheckedBgColor};
          }
        }
      }
      .c7n-pro-checkbox:disabled.c7n-pro-checkbox:checked
        + .c7n-pro-checkbox-inner {
        ${checkedStyle}
        :before {
          background: ${d.indeterminateCheckedBgColor};
        }
      }
      .c7n-pro-checkbox:checked + .c7n-pro-checkbox-inner {
        background-color: ${primary} !important;
        border-color: ${primary};
        ${checkedStyle}
      }
      .c7n-pro-checkbox-inner {
        position: relative;
        box-sizing: border-box;
        width: 0.14rem;
        height: 0.14rem;
        border: 0.01rem solid ${d.borderColor};
        border-radius: ${d.radius}px;
        background: ${d.innerbackGroundColor || "transparent !important"};
        background-clip: content-box;
        vertical-align: middle;
        :hover {
          border-color: ${primary};
        }
        :after {
          position: relative;
          /* z-index: 2; */
          /* transform: rotate(45deg) scale(0); */
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

      .c7n-pro-checkbox:disabled + .c7n-pro-checkbox-inner:after {
        border-color: ${d.disabledImageColor} !important;
      }
      .c7n-pro-checkbox-label {
        font-family: ${fontFamily};
        font-size: ${d.fontSize}px;
        color: ${d.fontColor};
        height: 0.16rem;
        line-height: 0.16rem;
      }
    }
  `;
}

const checkboxStyle = css`
  /* Checkbox--pro 全局样式实现 */
  ${getCheckboxStyle}
`;

export default createStyleComponent("checkbox", checkboxStyle);
