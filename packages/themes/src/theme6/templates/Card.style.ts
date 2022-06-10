import { css } from 'styled-components';
import { getThemeData } from '@hzero-front-ui/core';

const getCardCss = (props) => {
  const { primary6 } = getThemeData(props, 'common');
  const {
    cardBoxShadow,
    borderColor,
    titleFontSize,
    titleFontColor,
    bodyFontSize,
    bodyFontColor,
  } = getThemeData(props, 'card');
  return css`
    .c7n-card.c7n-card {
      :hover {
        box-shadow: ${cardBoxShadow};
      }
      margin: 8px;
      && {
        a {
          color: ${primary6};
        }
        &.c7n-card-bordered {
          border: 0.01rem solid ${borderColor};
        }
        border: initial;
        padding: 0 16px;
        .c7n-card-head {
          padding: 0 8px;
          position: relative;
          border-bottom: none;
          font-size: ${bodyFontSize}px;
          color: ${bodyFontColor};
          &-wrapper {
            min-height: 40px;
            align-items: center;
          }
          &:before {
            content: '';
            display: block;
            position: absolute;
            left: 0;
            top: 50%;
            transform: translateY(-50%);
            width: 2px;
            height: 14px;
            background: ${primary6};
          }
          &-title {
            line-height: 14px;
            color: ${titleFontColor};
            font-size: ${titleFontSize}px;
            &:before {
              content: '';
              display: inline-block;
              height: 100%;
              width: 0;
              vertical-align: middle;
            }
            > * {
              display: inline-block;
              margin: 0;
            }
          }
        }
        .c7n-card-body {
          padding: 0 12px 12px 8px;
          font-size: ${bodyFontSize}px;
          color: ${bodyFontColor};
        }
      }
    }
  `;
};

export default getCardCss;
