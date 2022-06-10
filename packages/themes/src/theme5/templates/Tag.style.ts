import { css } from 'styled-components';
import { getThemeData } from '@hzero-front-ui/core';

const tagStyle = (props) => {
  const { padding, borderRadius } = getThemeData(props, 'tag');
  const {
    primary6,
    primary1,
    cyanColor1,
    cyanColor6,
    purplColor1,
    purplColor6,
    orangeColor1,
    orangeColor6,
    magentaColor1,
    magentaColor6,
    successColor,
    infoColor,
    errorColor,
    warningColor,
    successBgColor,
    infoBgColor,
    errorBgColor,
    warningBgColor,
    titleColor3,
    lineColor3,
    fontColor,
  } = getThemeData(props, 'common');
  return css`
    .c7n-tag.c7n-tag {
      padding: ${padding};
      border-radius: ${borderRadius};
      height: 20px;
      background: ${primary1};
      color: ${primary6};
      line-height: initial;
      vertical-align: middle;
      border: 1px solid transparent;
      > a {
        color: ${primary6};
        background: ${primary1};
      }
      &.c7n-pro-select-common-item {
        background: ${primary1};
        color: ${primary6};
      }
      &.c7n-tag-has-color {
        &,
        a,
        a:hover,
        .icon-close,
        .icon-close:hover {
          color: #fff;
        }
      }
      //关闭按钮
      .icon-close {
        transform: none;
        font-weight: 400;
        font-size: 14px;
        margin-top: -2px;
      }
      //可选择
      &.c7n-tag-checkable {
        &,
        &:not(.c7n-tag-checkable-checked):hover {
          color: ${primary6};
          background: ${primary1};
        }
        &:active,
        &.c7n-tag-checkable-checked {
          background: ${primary6};
          color: ${fontColor};
          a {
            color: ${fontColor};
            &:hover {
              color: ${fontColor};
            }
          }
        }
      }
      /* 彩色图标 */
      &.c7n-tag-green {
        color: ${successColor};
        background: ${successBgColor};
      }
      &.c7n-tag-gray {
        color: ${titleColor3};
        background-color: ${lineColor3};
      }
      &.c7n-tag-red {
        color: ${errorColor};
        background-color: ${errorBgColor};
      }
      &.c7n-tag-purple {
        color: ${purplColor6};
        background: ${purplColor1};
      }
      &.c7n-tag-cyan {
        color: ${cyanColor6};
        background: ${cyanColor1};
      }
      &.c7n-tag-gold {
        color: #f6b74d;
        background-color: #fef7ed;
      }
      &.c7n-tag-orange {
        color: ${orangeColor6};
        background-color: ${orangeColor1};
      }
      &.c7n-tag-yellow {
        color: ${warningColor};
        background-color: ${warningBgColor};
      }
      &.c7n-tag-blue {
        color: ${infoColor};
        background: ${infoBgColor};
      }
      &.c7n-tag-magenta {
        color: ${magentaColor6};
        background-color: ${magentaColor1};
      }
      &.c7n-tag-pink-inverse {
        color: #fff;
        background-color: #eb2f96;
        border-color: #eb2f96;
      }
      &.c7n-tag-magenta-inverse {
        color: #fff;
        background-color: #eb2f96;
        border-color: #eb2f96;
      }
      &.c7n-tag-red-inverse {
        color: #fff;
        background-color: #d50000;
        border-color: #d50000;
      }
      &.c7n-tag-volcano-inverse {
        color: #fff;
        background-color: #fa541c;
        border-color: #fa541c;
      }
      &.c7n-tag-orange-inverse {
        color: #fff;
        background-color: #fa8c16;
        border-color: #fa8c16;
      }
      &.c7n-tag-yellow-inverse {
        color: #fff;
        background-color: #fadb14;
        border-color: #fadb14;
      }
      &.c7n-tag-gold-inverse {
        color: #fff;
        background-color: #faad14;
        border-color: #faad14;
      }
      &.c7n-tag-cyan-inverse {
        color: #fff;
        background-color: #13c2c2;
        border-color: #13c2c2;
      }
      &.c7n-tag-lime-inverse {
        color: #fff;
        background-color: #a0d911;
        border-color: #a0d911;
      }
      &.c7n-tag-green-inverse {
        color: #fff;
        background-color: #00bf96;
        border-color: #00bf96;
      }
      &.c7n-tag-blue-inverse {
        color: #fff;
        background-color: #3f51b5;
        border-color: #3f51b5;
      }
      &.c7n-tag-geekblue-inverse {
        color: #fff;
        background-color: #2f54eb;
        border-color: #2f54eb;
      }
      &.c7n-tag-purple-inverse {
        color: #fff;
        background-color: #8e44ad;
        border-color: #8e44ad;
      }
      &.c7n-tag-dark-inverse {
        color: #fff;
        background-color: #2f353b;
        border-color: #2f353b;
      }
      &.c7n-tag-gray-inverse {
        color: #fff;
        background-color: grey;
        border-color: grey;
      }
      &.c7n-tag-pink {
        color: #eb2f96;
        background-color: #fff0f6;
        border-color: transparent;
      }
      &.c7n-tag-volcano {
        color: #fa541c;
        background-color: #fff2e8;
        border-color: transparent;
      }
      &.c7n-tag-lime {
        color: #a0d911;
        background-color: #fcffe6;
        border-color: transparent;
      }
      &.c7n-tag-geekblue {
        color: #2f54eb;
        background-color: #f0f5ff;
        border-color: transparent;
      }
      &.c7n-tag-dark {
        color: #2f353b;
        background-color: #73787a;
        border-color: transparent;
      }
    }
  `;
};

export default tagStyle;
