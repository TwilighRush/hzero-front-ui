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

function getCheckBoxStyle(props) {
  const {
    radius,
    fontSize,
    boxSize,
    fontColor,
    borderColor,
    disabledImageColor,
  } = getThemeData(props, "checkbox");
  const {
    primary,
    disabledBg = "#f8f8f8",
    disabledColor = "#aaadba",
    disabledBorderColor = "#E7EAED",
  } = getThemeData(props, "common");
  return css`
    .c7n-checkbox-wrapper {
      span {
        font-size: ${fontSize}px;
        color: ${fontColor};
      }
      .c7n-checkbox-disabled + span {
        color: ${disabledColor}!important;
      }
      .c7n-checkbox {
        .c7n-checkbox-inner {
          width: ${boxSize}px;
          height: ${boxSize}px;
          border: 0.01rem solid ${borderColor};
          background: unset;
          border-radius: ${radius}px;
          :before {
            display: block;
            content: "";
            position: absolute;
            box-sizing: border-box;
            top: -0.01rem;
            bottom: -0.01rem;
            left: -0.01rem;
            right: -0.01rem;
            border: 0.01rem solid ${borderColor};
            background: ${primary};
            transform: scale(0);
            transition: all 0.2s;
            border-radius: ${radius}px;
          }
          :after {
            transition: all 0.2s;
          }
        }
        &.c7n-checkbox-checked {
          .c7n-checkbox-inner {
            border-color: ${primary};
            ${checkedStyle}
            :before {
              border-color: ${primary};
            }
          }
        }
        &.c7n-checkbox-indeterminate {
          .c7n-checkbox-inner {
            :before {
              transform: scale(1);
              border-color: ${primary};
            }
            :after {
              width: ${boxSize - 6}px;
              border: none;
              height: 0.02rem;
              background: #fff;
              display: block;
              position: absolute;
              top: calc(50% - 0.01rem);
              left: 0.02rem;
              transform: scale(1) !important;
            }
          }
          &.c7n-checkbox-disabled .c7n-checkbox-inner:after {
            background: rgba(0, 0, 0, 0.25);
          }
        }
        &.c7n-checkbox-disabled {
          .c7n-checkbox-inner {
            border-color: ${disabledBorderColor};
            :before {
              border-color: ${disabledBorderColor};
              background-color: ${disabledBg};
            }
          }
          &.c7n-checkbox-indeterminate {
            .c7n-checkbox-inner {
              :before {
                background: ${disabledBg};
              }
              :after {
                background: ${disabledImageColor};
              }
            }
          }
        }
        &.c7n-checkbox-disabled
          .c7n-checkbox-input:checked
          + .c7n-checkbox-inner {
          ${checkedStyle}
          :before {
            background: ${disabledBg};
          }
          :after {
            border-color: ${disabledColor};
            /* transform: rotate(45deg) scale(1); */
          }
        }
      }
    }
  `;
}

export default createStyleComponent("comp/checkbox", getCheckBoxStyle);
