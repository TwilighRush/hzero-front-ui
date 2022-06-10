import { css } from "styled-components";
import {
  getThemeData,
  createStyleComponent,
} from "@hzero-front-ui/core/lib/utils";

function getSwitchStyle(props) {
  const data = getThemeData(props, "switch");
  const {
    onEnableImage,
    offEnableImage,
    switchHeight,
    switchWidth,
    switchBg,
    switchOnBg,
    radius,
    handleRadius,
    handleWidth,
    handleHeight,
  } = data;
  return css`
    && {
      position: relative;
      width: ${switchWidth}px;
      height: ${switchHeight}px;
      margin: 0 8px 0 0;
      border-radius: ${radius};
      background: ${switchBg};
      &.ant-switch-checked {
        background: ${switchOnBg};
      }
      &.ant-switch-checked:after {
        background: url(${onEnableImage}) no-repeat center center;
        background-size: cover;
      }
      &.ant-switch-checked {
        background: rgba(59, 135, 245, 0.4);
        &:after {
          transform: translateX(0);
          left: calc(100% - ${handleWidth - 1}px);
        }
      }
      &:after {
        position: absolute;
        width: ${handleWidth}px!important;
        height: ${handleHeight}px!important;
        top: calc(50% - ${handleHeight / 2}px);
        left: -1px;
        border-radius: ${handleRadius}px;
        background: #fff url(${offEnableImage}) no-repeat center center;
        background-size: cover;
      }
      &.ant-switch-disabled {
        cursor: not-allowed;
        :after {
          cursor: not-allowed;
        }
      }
    }
  `;
}

const switchStyle = css`
  .ant-switch {
    ${getSwitchStyle};
  }
`;

export default createStyleComponent("switch", switchStyle);
