import { css } from "styled-components";
import { getThemeData, createStyleComponent } from "@hzero-front-ui/core";

/*
 * 获取Select框边框
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
      .map((v) => `border-${v}: ${borderWidth}px solid ${borderColor};`)
      .join(" ");
    style = css`
      ${borders}
    `;
  }
  return style;
};

const selectStyle1 = css`
  .c7n-select-selection {
    height: auto;
    &.c7n-select-selection--multiple {
      min-height: ${(props) =>
        getThemeData(props, "input", "inputHeight") - 2}px;
    }
  }
  .c7n-select-selection__rendered {
    height: auto;
    .c7n-select-selection-selected-value {
      height: auto;
      font-weight: ${(props) =>
        getThemeData(props, "input", "inputFontWeight")};
    }
    .c7n-select-selection__choice {
      font-weight: ${(props) =>
        getThemeData(props, "input", "inputFontWeight")};
    }
  }
`;

const disableStyle = css`
  .c7n-select-selection {
    background: ${(p) => getThemeData(p, "input", "disabledBgColor")};
    cursor: not-allowed;
    * {
      cursor: not-allowed;
    }
  }
  :after,
  :before {
    display: none !important;
  }
`;

function getSelectStyle(props) {
  const d = getThemeData(props, "select");
  const { radius, disabledBorderColor, inputHeight } = getThemeData(
    props,
    "input"
  );
  const { primary, baseHeight } = getThemeData(props, "common");
  return css`
    .c7n-cascader-picker.c7n-cascader-picker {
      .c7n-cascader-picker-arrow {
        right: 3px;
      }
      .c7n-cascader-picker-arrow:before {
        font-family: icomoon !important;
        content: "\\E5CF" !important;
        font-size: 0.16rem;
      }
    }
    .c7n-select-has-border.c7n-select.c7n-select:hover:before {
      border-color: #4f7de7;
    }
    .c7n-select.c7n-select-has-border:before {
      display: none;
      top: unset;
      left: unset;
      right: unset;
      bottom: unset;
    }
    .c7n-select.c7n-select {
      box-sizing: border-box;
      outline: none !important;
      box-shadow: none !important;
      &.c7n-select-focused {
        .c7n-select-label {
          color: ${primary};
        }
      }
      &.c7n-select-auto-complete {
        .c7n-select-selection .c7n-select-selection__rendered {
          padding: 0;
          .c7n-input-wrapper,
          .c7n-input-content {
            border: none;
            background: #fff;
            ::after,
            ::before {
              display: none;
            }
          }
        }
      }
      :before,
      :after {
        border-radius: 0.02rem;
      }
      &.c7n-select-focused {
        :before {
          border-width: 0.01rem;
          border-color: #4f7de7;
        }
      }
      position: relative;
      border: none;
      height: auto;
      display: inline-block;
      justify-content: center;
      align-items: center;
      border-radius: ${radius}px;
      ${getBorder};
      box-shadow: none;
      &.c7n-select-disabled {
        border-color: ${disabledBorderColor} !important;
        ${disableStyle}
      }
      .c7n-select-selection {
        flex: 1;
        width: 100%;
        height: 100%;
        border: none;
        border-radius: ${radius - 1}px;
        position: relative;
        box-shadow: none;
        background: #fff;
        z-index: 3;
        &.c7n-select-selection--multiple {
          padding-bottom: 0;
          margin: 0;
          .c7n-select-selection__rendered {
            :focus-within:before {
              transform: translateY(-50%) rotate(180deg);
            }
            position: relative;
            :before {
              position: absolute;
              content: "";
              display: block;
              width: 10px;
              height: 10px;
              /* background: url({arrowDown}); */
              background-size: cover;
              right: 4px;
              top: 50%;
              transform: translateY(-50%) rotate(0);
              transition: all 0.3s;
              z-index: 5;
            }
          }
        }
        .c7n-select-selection__rendered {
          height: 100%;
          line-height: 0;
          padding: 0 0.08rem;
          padding: 0 ${d.padding}px;
          min-height: ${baseHeight - 2}px;
          border: none;
          .c7n-select-selection-selected-value,
          .c7n-select-arrow {
            right: 0;
            line-height: ${baseHeight - 2}px;
          }
          // 多选样式
          .c7n-select-selection__choice {
            height: 22px;
            line-height: 20px;
            border: 2px;
            margin-top: 3px;
            border-radius: 0;
            background: ${d.mutiSelectItemBg};
            font-size: ${d.mutiSelectItemFontSize}px;
            color: ${d.mutiSelectItemFontColor};
            border-radius: ${d.mutiSelectItemBorderRadius}px;
            padding: 0 ${d.multiSelectPadding}px;
            .c7n-select-selection__choice__remove {
              margin-left: ${d.multiSelectPadding}px;
              > i.icon {
                line-height: ${d.multiSelectLineHeight};
              }
            }
            .icon:before {
              content: "\\e5cd";
              font-size: ${d.mutiSelectItemIconSize}px;
            }
          }
          .c7n-select-arrow {
            height: ${baseHeight - 2}px;
            padding-right: 0.06rem;
            z-index: 6;
            .icon-arrow_drop_down {
              font-size: 0.16rem;
            }
            .icon:before {
              content: "\\e5cf";
            }
          }
        }
      }
      .c7n-select-label-wrapper {
        top: -1px;
      }
      .c7n-select-label-wrapper .c7n-select-label {
        margin-top: -2px;
        line-height: ${inputHeight - 2}px;
        background: initial;
      }
      &.c7n-select-open {
        :after,
        :before {
          display: block;
        }
        :after,
        :hover:after {
          border-bottom-color: #ccc !important;
        }
      }
      ${selectStyle1};
    }
    .c7n-select .c7n-select-arrow .icon-arrow_drop_down {
      line-height: 0;
      font-size: 1em;
      :before {
        font-family: icomoon, sans-serif !important;
        content: "\\E5CF" !important;
        display: inline;
      }
    }
  `;
}

export default createStyleComponent("comp/select", getSelectStyle);
