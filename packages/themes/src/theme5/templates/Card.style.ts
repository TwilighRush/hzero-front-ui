import { css } from 'styled-components';
import { getThemeData } from '@hzero-front-ui/core';
const getCardCss = (props) => {
  const {
    cardBoxShadow,
    titleFontSize,
    bodyFontSize,
    titleLineHeight,
    bodyLineHeight,
  } = getThemeData(props, 'card');
  const { primary6, lineColor1, titleColor1, titleColor3 } = getThemeData(props, 'common');
  return css`
    .c7n-card.c7n-card {
      :hover {
        box-shadow: ${cardBoxShadow};
      }
      && {
        border: initial;
        /* padding: 0 0.16rem; */
        margin: 0.08rem;
        a {
          color: ${primary6};
        }
        &.c7n-card-bordered {
          border: 0.01rem solid ${lineColor1};
        }
        .c7n-card-head {
          margin: 0 0.16rem;
          padding: 0 0.08rem;
          position: relative;
          border-bottom: none;
          font-size: ${bodyFontSize}px;
          line-height: 1;
          color: ${titleColor1};
          &-wrapper {
            min-height: 0.4rem;
            /* align-items: center; */
          }
          &:before {
            content: '';
            display: block;
            position: absolute;
            left: 0;
            top: 0.2rem;
            width: 0.02rem;
            height: 0.14rem;
            background: ${primary6};
          }
          &-title {
            line-height: ${titleLineHeight}px;
            color: ${titleColor1};
            font-size: ${titleFontSize}px;
            padding: 0.16rem 0 0.08rem;
            > * {
              display: inline-block;
              margin: 0;
            }
          }
          .c7n-card-extra {
            padding: 0.16rem 0 0.08rem;
            line-height: 22px;
          }
        }
        .c7n-card-body {
          margin: 0 0.16rem;
          padding: 0 0.12rem 0.12rem 0.08rem;
          line-height: ${bodyLineHeight}px;
          font-size: ${bodyFontSize}px;
          color: ${titleColor3};
          .c7n-card-meta-description {
            color: ${titleColor3};
          }
        }
        /* 灵活卡片样式 */
        .c7n-card-cover {
          margin: 16px 16px 12px 16px;
        }
        /* action样式 */
        ul.c7n-card-actions {
          background: none;
          > li {
            border: none;
            margin: 0;
            padding: 4px 0;
            position: relative;
            span,
            a {
              font-size: 12px;
            }
            > span > a {
              line-height: 28px;
            }
            :not(:last-child)::after {
              content: '';
              width: 1px;
              height: 12px;
              position: absolute;
              top: 12px;
              right: 0;
              background: black;
              opacity: 0.06;
            }
          }
        }
      }
    }
  `;
};

export default getCardCss;
