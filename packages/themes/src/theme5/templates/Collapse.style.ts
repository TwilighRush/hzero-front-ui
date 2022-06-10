import { css } from 'styled-components';
import { getThemeData } from '@hzero-front-ui/core';

function getCollapseStyle(props) {
  const {
    headerFontSize,
    headerLineHeight,
    lheaderFontSize,
    lheaderLineHeight,
    rightTextFontSize,
    contentFontSize,
    lessFontWeight,
    addPadding,
  } = getThemeData(props, 'collapse');
  const { primary6, titleColor1, titleColor2, bgColor, titleColor3 } = getThemeData(
    props,
    'common'
  );
  return css`
    //通用
    .c7n-collapse.c7n-collapse {
      background-color: ${bgColor};
      border: none;
      .c7n-collapse-item {
        border: none;
        .c7n-collapse-header {
          font-size: ${headerFontSize}px;
          color: ${titleColor1};
          border-bottom: none;
          line-height: ${headerLineHeight}px;
          padding: ${4 + addPadding}px 12px ${4 + addPadding}px 0;
          overflow: hidden;
          .c7n-collapse-extra {
            height: 28px;
            display: inline-flex;
            align-items: center;
          }
          .c7n-collapse-expand-icon-wrapper {
            .c7n-collapse-expand-icon {
              color: ${titleColor2};
              font-size: ${headerLineHeight}px;
              height: ${headerLineHeight}px;
            }
          }
        }
        .c7n-collapse-content {
          font-weight: 400;
          color: ${titleColor2};
          font-size: ${contentFontSize}px;
          border: none;
          padding-left: 4px;
          .c7n-collapse-content-box {
            padding: 8px 0;
          }
        }
        &-disabled {
          > .c7n-collapse-header {
            color: ${titleColor3};
            .c7n-collapse-expand-icon-wrapper.c7n-collapse-expand-icon-wrapper {
              .c7n-collapse-expand-icon,
              .c7n-collapse-expand-text {
                color: ${titleColor3};
              }
            }
          }
        }
      }
      //图标在右侧
      &.c7n-collapse-icon-position-right {
        > .c7n-collapse-item {
          > .c7n-collapse-header {
            .c7n-collapse-expand-text {
              color: ${primary6};
              font-size: ${rightTextFontSize}px;
              right: 0.22rem;
              padding-right: 10px;
              text-align: right;
            }
            .c7n-collapse-expand-icon:before {
              content: '';
              display: inline-block;
              width: 7px;
              height: 7px;
              border-bottom: 1.5px solid ${primary6};
              border-left: 1.5px solid ${primary6};
              position: absolute;
              left: calc(50% - 3.5px);
              top: calc(50% - 3.5px);
              transform: rotate(-45deg) translateY(-2px);
            }
            .c7n-collapse-expand-icon {
              transform: rotate(0);
              vertical-align: middle;
            }
          }
          .c7n-collapse-content {
            padding-left: 0;
          }
          &-active > .c7n-collapse-header .c7n-collapse-expand-icon {
            transform: rotate(-180deg);
          }
          &-disabled > .c7n-collapse-header .c7n-collapse-expand-icon:before {
            border-bottom: 1.5px solid ${titleColor3};
            border-left: 1.5px solid ${titleColor3};
          }
        }
      }
      //简洁风格
      &.c7n-collapse-borderless {
        .c7n-collapse-item {
          .c7n-collapse-header {
            line-height: ${lheaderLineHeight}px;
            font-size: ${lheaderFontSize}px;
            font-weight: ${lessFontWeight};
            .c7n-collapse-extra {
              height: ${lheaderLineHeight}px;
            }
          }
        }
      }
    }
  `;
}

const CollapseStyle = css`
  ${getCollapseStyle}
`;

export default CollapseStyle;
