import { css } from "styled-components";
import {
  getThemeData,
  createStyleComponent,
} from "@hzero-front-ui/core/lib/utils";

const getStyle = props => {
  const {
    headerFontColor = "#3889FF",
    headerFontFamily = "PingFangSC-Medium",
    headerFontSize = 14,
    markerRadius = 1.5,
    markerHeight = 14,
    markerWidth = 3,
    rightTextFont = "PingFangSC-Regular",
    rightTextFontSize = 13,
  } = getThemeData(props, "collapse");
  const { primary } = getThemeData(props, "common");
  return css`
    .ant-collapse.ant-collapse {
      border: none;
      background-color: transparent;
      > .ant-collapse-item {
        border-bottom: none;
        &.ant-collapse-item-active {
          > .ant-collapse-header:after {
            content: "收起";
          }
          > .ant-collapse-header i.arrow {
            transform: rotate(270deg);
          }
        }
        > .ant-collapse-header {
          position: relative;
          padding-left: 10px;
          font-size: ${headerFontSize}px;
          color: ${headerFontColor};
          border-bottom: 1px solid #f1f1f1;
          font-family: ${headerFontFamily};
          &:before {
            content: "";
            display: block;
            position: absolute;
            left: 0;
            top: calc(50% - ${markerHeight / 2}px);
            width: ${markerWidth}px;
            height: ${markerHeight}px;
            background-color: ${primary};
            border-radius: ${markerRadius}px;
          }
          &:after {
            content: "展开";
            position: absolute;
            right: 24px;
            font-size: ${rightTextFontSize}px;
            font-family: ${rightTextFont};
          }
          i.arrow {
            right: 0;
            left: initial;
            width: 24px;
            transform: rotate(90deg);
          }
        }
        > .ant-collapse-content {
          border-top: none;
          .ant-collapse-content-box {
            padding: 8px;
          }
        }
        &-disabled {
          > .ant-collapse-header {
            color: rgba(0, 0, 0, 0.25);
            &:before {
              background-color: rgba(0, 0, 0, 0.25);
            }
          }
        }
      }
    }
  `;
};

export default createStyleComponent("collapse", getStyle);
