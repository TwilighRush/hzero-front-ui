import { css } from "styled-components";

import { getThemeData, createStyleComponent } from "@hzero-front-ui/core";

const getStripedStyled = (props) => {
  const { striped, stripedBg } = getThemeData(props, "list");
  return striped
    ? css`
        :nth-of-type(2n) {
          background: ${stripedBg};
        }
      `
    : "";
};

const ListStyle = (props) => {
  const {
    fontFamily,
    wrapBorder,
    headFontSize,
    c7npadding,
    minHeight,
    headerColor,
    itemBorder,
    borderColor,
    headerPaddingLeft,
    itemColor,
    boxShadow,
    borderRadius,
    marginBottom,
    fontSize,
    descriptionColor,
  } = getThemeData(props, "list");
  const { primary } = getThemeData(props, "common");
  return css`
    .c7n-list.c7n-list {
      font-family: ${fontFamily};
      a {
        color: ${primary};
      }
      &.c7n-list-split,
      &.c7n-list-bordered {
        border: ${wrapBorder};
      }
      .c7n-list-header {
        font-size: ${headFontSize}px;
        padding: ${c7npadding};
        min-height: ${minHeight}px;
        color: ${headerColor};
        border: ${itemBorder};
      }
      .c7n-spin-nested-loading {
        .c7n-spin-container {
          .c7n-list-item {
            padding: ${c7npadding};
            min-height: ${minHeight}px;
            &:last-child {
              border-bottom: 1px solid ${borderColor};
              border: ${itemBorder};
            }
            border: ${itemBorder};
          }
        }
      }
      .c7n-list-footer {
        border-bottom: 1px solid ${borderColor};
        padding: ${c7npadding};
        min-height: ${minHeight}px;
        border: ${itemBorder};
      }
    }
    /* 样式三 */
    .c7n-list.c7n-list {
      .c7n-list-header {
        padding-left: ${headerPaddingLeft}px;
      }
      &.c7n-list-split,
      &.c7n-list-bordered {
        .c7n-spin-nested-loading .c7n-spin-container .c7n-list-item,
        .c7n-list-footer {
          box-shadow: ${boxShadow};
          border-radius: ${borderRadius}px;
          margin-bottom: ${marginBottom}px;
        }
      }
      .c7n-list-footer {
        margin-bottom: 0px;
      }
    }
    .c7n-list-item {
      font-size: ${fontSize}px;
      color: ${itemColor};
      line-height: 0.16rem;
      ${getStripedStyled}
    }

    /* 去除按钮的padding */
    .c7n-list-item .c7n-list-item-action > li {
      padding: 0;
    }
    .c7n-list-item-meta {
      font-family: ${fontFamily};
      .c7n-list-item-meta-title {
        font-size: ${fontSize}px;
        color: ${itemColor};
        & > a:hover {
          color: #618fe8;
        }
      }
      .c7n-list-item-meta-content {
        display: flex;
        justify-content: center;
        flex-direction: column;
        flex-wrap: wrap;
        min-height: 0.4rem;
        .c7n-list-item-meta-description {
          font-size: ${fontSize}px;
          color: ${descriptionColor};
        }
      }
    }
  `;
};

export default createStyleComponent("comp/list", ListStyle);
