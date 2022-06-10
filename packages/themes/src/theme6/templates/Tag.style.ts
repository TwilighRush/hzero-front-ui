import { css } from 'styled-components';
import { getThemeData } from '@hzero-front-ui/core';

const tagStyle = (props) => {
  const { primary } = getThemeData(props, 'common');
  const {
    color,
    borderRadius,
    checkedBackground,
    checkedColor,
    c7nTextColor,
    c7nBackground,
    padding,
    c7nBorderRadius,
    border,
    fontFamily,
    geekblueColor,
    closeContent,
  } = getThemeData(props, 'tag');
  const { primary2, primary6, iconfontFamily } = getThemeData(props, 'common');
  return css`
    .c7n-tag.c7n-tag {
      padding: ${padding};
      border-radius: ${c7nBorderRadius || borderRadius || '0.02rem'};
      line-height: 0.16rem;
      background: ${c7nBackground};
      color: ${c7nTextColor};
      border: ${border};
      font-family: ${fontFamily};
      a {
        color: ${color || '#fff'};
        &:hover {
          color: ${color || '#fff'};
        }
      }
      &.c7n-tag .icon-close {
        vertical-align: middle;
        transform: none;
        font-weight: 400;
        font-size: 12px;
        margin-top: -1px;

        &:before {
          font-family: ${iconfontFamily} !important;
          content: '${closeContent}';
        }
      }
      &.c7n-tag-checkable,
      &.c7n-tag-checkable:not(.c7n-tag-checkable-checked):hover {
        color: ${primary6};
        background: ${primary2};
      }
      &.c7n-tag-checkable:active {
        background: ${checkedBackground || primary};
        color: ${checkedColor || '#fff'};
      }
      &.c7n-tag-checkable-checked {
        background: ${checkedBackground || primary};
        color: ${checkedColor || '#fff'};
        a {
          color: ${checkedColor || '#fff'};
          &:hover {
            color: ${checkedColor || '#fff'};
          }
        }
      }
      &.c7n-pro-select-common-item {
        background: ${primary6};
        border-color: ${primary6};
        color: #fff;
      }
      &.c7n-tag-geekblue {
        color: ${geekblueColor};
      }
      &.c7n-tag-green {
        background: #f8fff0;
        border: 1px solid #d7f0c0;
        color: #75c940;
      }
      &.c7n-tag-purple {
        background: #f4f0ff;
        border: 1px solid #dad1ff;
        color: #6454f4;
      }
      &.c7n-tag-cyan {
        background: #f0fffc;
        border: 1px solid #a6fff3;
        color: #25ded7;
      }
      &.c7n-tag-orange {
        background: #fff9e6;
        border: 1px solid #ffd57a;
        color: #ff9500;
      }
      &.c7n-tag-blue {
        background: #f0fbff;
        border: 1px solid #9eddff;
        color: #2196f3;
      }
      &.c7n-tag-magenta {
        background: #fff1f0;
        border: 1px solid #ffb4b0;
        color: #f8353f;
      }
    }
    .c7n-tag-zoom-appear.c7n-tag-zoom-appear,
    .c7n-tag-zoom-enter.c7n-tag-zoom-enter,
    .c7n-tag-zoom-leave.c7n-tag-zoom-leave {
      background: ${primary2};
    }
  `;
};

export default tagStyle;
