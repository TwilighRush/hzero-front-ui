import { css } from 'styled-components';
import { getThemeData } from '@hzero-front-ui/core';

function getCollapseStyle(props) {
  const d = getThemeData(props, 'collapse');
  const { primary6, iconfontFamily } = getThemeData(props, 'common');
  return css`
    //图标样式
    .c7n-collapse.c7n-collapse {
      &.c7n-collapse-icon-position-right {
        > .c7n-collapse-item {
          > .c7n-collapse-header {
            .c7n-collapse-expand-icon {
              transform: rotate(0deg);
            }
            .c7n-collapse-expand-icon.c7n-collapse-collapsed {
              transform: rotate(-90deg);
            }
          }
        }
      }
      > .c7n-collapse-item {
        > .c7n-collapse-header {
          .c7n-collapse-expand-icon-wrapper {
            margin-right: ${d.iconMarginRight}px;
            .c7n-collapse-expand-icon {
              font-size: ${d.iconSize}px;
              line-height: unset;
            }
            .c7n-collapse-expand-icon:before {
              font-family: ${iconfontFamily} !important;
              content: '\\e717';
              font-size: ${d.iconSize}px;
            }
            .c7n-collapse-collapsed:before {
              transform: rotate(180deg);
            }
            .c7n-collapse-expanded {
              color: ${primary6};
            }
          }
        }
      }
    }
    //正常
    .c7n-collapse.c7n-collapse {
      border: none;
      background-color: #fff;
      .c7n-collapse-item {
        border: 1px solid ${d.borderColor};
        margin-bottom: 8px;
        border-radius: 2px;
        &:last-child {
          margin-bottom: 0px;
        }
        .c7n-collapse-header {
          padding: ${d.headerPadding};
          line-height: 0.22rem;
          background-color: #fff;
          font-size: ${d.fontSize}px;
          color: ${d.Color};
        }
        .c7n-collapse-content {
          font-size: ${d.fontSize}px;
          color: ${d.Color};
          .c7n-collapse-content-box {
            padding: 0;
          }
        }
      }
      //简洁风格
      &.c7n-collapse-borderless {
        .c7n-collapse-item {
          margin-bottom: 0;
          border-radius: 0;
          border: 1px solid transparent;
          border-bottom: 1px solid ${d.borderColor};
        }
      }
      //图标在左侧
      &.c7n-collapse-icon-position-right {
        .c7n-collapse-header {
          font-weight: 600;
          &:before {
            content: '';
            width: 6px;
            height: 6px;
            margin-right: 8px;
            background-color: ${primary6};
            border-radius: 50%;
            display: inline-block;
            vertical-align: middle;
            transform: translateY(-2px);
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
