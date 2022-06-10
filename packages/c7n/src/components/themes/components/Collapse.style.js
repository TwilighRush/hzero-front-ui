import { css } from "styled-components";
import { getThemeData, createStyleComponent } from "@hzero-front-ui/core";

function getCollapseStyle(props) {
  const d = getThemeData(props, "collapse");
  const { primary } = getThemeData(props, "common");
  return css`
    .c7n-collapse.c7n-collapse-icon-position-right {
      background: #fff;
      border: none;
      > .c7n-collapse-item {
        border: none;
        > .c7n-collapse-header {
          color: ${d.headerFontColor};
          font-family: ${d.headerFontFamily};
          font-size: ${d.headerFontSize}px;
          border-bottom: 1px solid #f1f1f1;

          &::before {
            content: "";
            background: ${primary};
            border-radius: ${d.markerRadius}px;
            height: ${d.markerHeight}px;
            width: ${d.markerWidth}px;
            position: absolute;
            left: 0;
            top: calc(50% - ${d.markerHeight / 2}px);
          }

          .c7n-collapse-expand-text {
            font-family: ${d.rightTextFont};
            font-size: ${d.rightTextFontSize}px;
            right: 0.22rem;
            padding-right: 10px;
            text-align: right;
          }

          .c7n-collapse-expand-icon:before {
            content: "";
            display: inline-block;
            width: 7px;
            height: 7px;
            border-bottom: 1.5px solid ${primary};
            border-left: 1.5px solid ${primary};
            position: absolute;
            left: calc(50% - 3.5px);
            top: calc(50% - 3.5px);
            transform: rotate(-45deg) translateY(-2px);
          }
          .c7n-collapse-expand-icon {
            transform: rotate(0);
            right: 0;
          }
        }
        .c7n-collapse-content {
          border: none;
          padding: 0 8px;
          /* > .c7n-collapse-content-box {
            padding: 0;
          } */
        }
        &-active > .c7n-collapse-header .c7n-collapse-expand-icon {
          transform: rotate(180deg);
        }
        &-disabled {
          > .c7n-collapse-header {
            color: rgba(0, 0, 0, 0.25);
            &:before {
              background-color: rgba(0, 0, 0, 0.25);
            }

            .c7n-collapse-expand-icon:before {
              border-color: rgba(0, 0, 0, 0.25);
            }
          }
          .c7n-collapse-expand-icon-wrapper {
            right: 0;
          }
        }
      }
    }

    /* .c7n-collapse-icon-position-right
      .c7n-collapse-item.c7n-collapse-item-disabled {
      .c7n-collapse-expand-icon-wrapper {
        right: 0;
      }
    } */
  `;
}

const CollapseStyle = css`
  ${getCollapseStyle}
`;

export default createStyleComponent("comp/collapse", CollapseStyle);
