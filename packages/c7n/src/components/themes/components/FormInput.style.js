import { css } from "styled-components";
import { getThemeData, createStyleComponent } from "@hzero-front-ui/core";

function getShadowStyle(props) {
  const d = getThemeData(props, "input");
  return css`
    &:before {
      border: none;
      content: "";
      display: block;
      position: absolute;
      top: -${d.borderWidth}px;
      left: -${d.borderWidth}px;
      right: -${d.borderWidth}px;
      bottom: -${d.borderWidth}px;
      transition: all ${d.shadowTransition};
      border-radius: ${d.radius};
      box-shadow: ${d.shadow};
      opacity: 0;
    }
    &.c7n-input-focused {
      :before {
        opacity: 1;
      }
    }
  `;
}

/*
 * 获取输入框边框
 * @param props
 * @returns {string}
 */
const getBorder = (props) => {
  const d = getThemeData(props, "input");
  const { border, borderWidth, borderColor } = d;
  let style = "";
  if (border === "all") {
    style = css`
      border: ${borderWidth}px solid ${borderColor};
    `;
  } else if (border && border.length) {
    const borders = border
      .map((v) => `border-${v}: ${borderWidth}px solid ${borderColor}`)
      .join(";");
    style = css`
      ${borders}
    `;
  }
  return style;
};

const getInputWrapperStyle = (d) => css`
  .c7n-input-wrapper {
    display: inline-block;
    width: 100%;
    border-width: 0;
    border-radius: ${d.radius}px;
    ${getBorder};
    &.c7n-input-wrapper.c7n-input-wrapper:before {
      border: none;
    }
    ${(props) => (d.hasShadow ? getShadowStyle(props) : "")};
    .c7n-ripple-wrapper {
      display: none;
    }
    &.c7n-input-focused {
      .c7n-input-content,
      .c7n-input-rendered-wrapper {
        :after,
        :before {
          display: block;
        }
      }
    }
    &.c7n-input-wrapper.c7n-input-wrapper.c7n-input-wrapper.c7n-input-disabled {
      border-color: ${d.disabledBorderColor};
      :hover {
        border-color: ${d.disabledBorderColor};
      }
      .c7n-input-content {
        &:after,
        &:before {
          display: none !important;
        }
      }
      .c7n-input-content,
      .c7n-input-rendered-wrapper {
        border-radius: ${d.radius - d.borderWidth}px;

        .c7n-input-rendered-wrapper,
        .c7n-input,
        input {
          background: ${d.disabledBgColor};
        }
      }
    }
  }
`;

function getMotionStyle(props) {
  const motion = getThemeData(props, "inputMotion", "motion");
  return motion
    ? ""
    : css`
        :before,
        :after,
        :hover:before,
        :hover:after {
          display: none;
          animation-duration: 0s;
          transition-duration: 0s;
        }
      `;
}

function getInputStyle(props) {
  const d = getThemeData(props, "input");
  const { primary } = getThemeData(props, "common");
  return css`
    ${getInputWrapperStyle(d)};

    .c7n-input-wrapper {
      input,
      textarea {
        font-weight: ${d.inputFontWeight};
      }
      &.c7n-input-focused .c7n-input-label {
        color: ${primary};
      }
      .c7n-input-content {
        ${d.animation};
        .c7n-input-rendered-wrapper {
          z-index: 2;
          .c7n-input-suffix {
            padding: 0;
            .c7n-btn {
              :hover {
                background: transparent;
                :after,
                :before {
                  display: none !important;
                }
                .icon {
                  color: #333 !important;
                }
              }
            }
          }
          .c7n-input-rendered {
            .c7n-input,
            input {
              height: ${d.inputHeight - d.borderWidth * 2}px;
            }
            .c7n-input:-webkit-autofill {
              margin: unset;
              width: 100%;
            }
            .c7n-input-label-wrapper {
              z-index: 5;
              margin-top: -0.03rem;
              border-top-width: 0.05rem;
              .c7n-input-label {
                margin-top: -0.02rem;
                line-height: ${d.inputHeight - d.borderWidth * 2}px;
                background: transparent;
              }
            }
          }
        }
        & {
          ${getMotionStyle};
        }
      }
    }
    .c7n-cascader-picker.c7n-input-focused {
      .c7n-input-content {
        :after,
        :before {
          display: block;
        }
      }
    }
    .c7n-input-wrapper.c7n-input-textarea {
      .c7n-input-rendered-wrapper {
        ${getMotionStyle}
        .c7n-input, .c7n-input-label-wrapper {
          z-index: 3;
        }
      }
      &.c7n-input-focused {
        .c7n-input-rendered-wrapper {
          :after,
          :before {
            display: block;
          }
        }
      }
      .c7n-input-rendered-wrapper {
        .c7n-input-label-wrapper {
          z-index: 5;
          margin-top: -0.03rem;
          border-top-width: 0.05rem;
          .c7n-input-label {
            margin-top: -0.02rem;
            line-height: ${d.inputHeight - d.borderWidth * 2}px;
            background: transparent;
          }
        }
      }
    }
    .c7n-input-icon .icon.c7n-input-icon-copy {
      display: none;
    }
    .c7n-input-has-value .icon.c7n-input-icon-copy {
      display: inline-block;
    }
  `;
}

function getInputNumberStyle() {
  return css`
    .c7n-input-suffix {
      .c7n-input-number-handler-wrap {
        height: 100%;
        display: flex;
        flex-flow: column nowrap;
        justify-content: space-around;
        background: transparent;
        .c7n-input-number-handler {
          flex: 1;
          display: flex;
          flex-flow: column nowrap;
          justify-content: center;
          align-items: center;
          line-height: 10px;
          height: 50%;
          text-align: center;
          background: #fff;
          transition: all 0.2s;
          .icon:before {
            content: "";
          }
          .icon {
            position: static;
            display: inline-block;
            width: 6px;
            height: 6px;
            transform-origin: center;
          }
          :first-of-type {
            border-bottom: 1px solid #efefef;
          }
          :hover {
            flex: 0 0 65%;
          }
          :first-of-type .icon {
            border-bottom: 1px solid #999;
            border-right: 1px solid #999;
            transform: rotateZ(-135deg);
          }
          :last-of-type .icon {
            border-top: 1px solid #999;
            border-right: 1px solid #999;
            transform: rotateZ(135deg);
          }
        }
      }
    }
  `;
}

const inputStyle = css`
  /* Input--components 全局样式实现 */
  ${getInputStyle}
  ${getInputNumberStyle}
`;

export default createStyleComponent("comp/input", inputStyle);
