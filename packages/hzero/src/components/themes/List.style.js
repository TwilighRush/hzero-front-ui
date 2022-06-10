import { css } from "styled-components";

import {
  getThemeData,
  createStyleComponent,
} from "@hzero-front-ui/core/lib/utils";

const getStripedStyled = props => {
  const { striped, stripedBg } = getThemeData(props, "list");
  return striped
    ? css`
        :nth-of-type(2n) {
          background: ${stripedBg};
        }
      `
    : "";
};

const listStyle = props => {
  const {
    fontFamily,
    wrapBorder,
    headFontSize,
    padding,
    minHeight,
    headerColor,
    itemBorder,
    borderColor,
    headerPaddingLeft,
    borderRadius,
    boxShadow,
    marginBottom,
    fontSize,
    itemColor,
    descriptionColor,
  } = getThemeData(props, "list");
  return css`
    .ant-list.ant-list {
      font-family: ${fontFamily};
      &.ant-list-split,
      &.ant-list-bordered {
        border: ${wrapBorder};
      }
      .ant-list-header {
        font-size: ${headFontSize}px;
        padding: ${padding};
        min-height: ${minHeight}px;
        color: ${headerColor};
        border: ${itemBorder};
      }
      .ant-spin-nested-loading {
        .ant-spin-container {
          .ant-list-item {
            padding: ${padding};
            min-height: ${minHeight}px;
            &:last-child {
              border-bottom: 1px solid ${borderColor};
              border: ${itemBorder};
            }
            border: ${itemBorder};
          }
        }
      }
      .ant-list-footer {
        border-bottom: 1px solid ${borderColor};
        padding: ${padding};
        min-height: ${minHeight}px;
        border: ${itemBorder};
      }
    }
    /* 样式三 */
    .ant-list.ant-list {
      .ant-list-header {
        padding-left: ${headerPaddingLeft}px;
      }
      &.ant-list-split,
      &.ant-list-bordered {
        .ant-spin-nested-loading .ant-spin-container .ant-list-item,
        .ant-list-footer {
          box-shadow: ${boxShadow};
          border-radius: ${borderRadius}px;
          margin-bottom: ${marginBottom}px;
        }
      }
      .ant-list-footer {
        margin-bottom: 0px;
      }
    }
    .ant-list-item {
      font-size: ${fontSize}px;
      color: ${itemColor};
      line-height: 16px;
      ${getStripedStyled}
    }
    .ant-list-item-meta {
      font-family: ${fontFamily};
      .ant-list-item-meta-title {
        font-size: ${fontSize}px;
        color: ${itemColor};
        & > a:hover {
          color: #618fe8;
        }
      }
      .ant-list-item-meta-content {
        display: flex;
        justify-content: center;
        flex-direction: column;
        flex-wrap: wrap;
        min-height: 40px;
        .ant-list-item-meta-description {
          font-size: ${fontSize}px;
          color: ${descriptionColor};
        }
      }
    }
  `;
};

export default createStyleComponent("list", listStyle);
