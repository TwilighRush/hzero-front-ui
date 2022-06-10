import { css } from "styled-components";
import { getThemeData, createStyleComponent } from "@hzero-front-ui/core";

function getSwitchStyle(props) {
  const d = getThemeData(props, "switch");

  return css`
    .c7n-switch {
      transition: all 0.3s;
      box-sizing: border-box;
      height: ${d.switchHeight}px;
      line-height: ${d.switchHeight}px;
      width: ${d.switchWidth}px;
      border-radius: ${d.radius}px;
      background: ${d.switchBg};
      :after {
        background-image: url("${d.offEnableImage}");
        background-size: cover;
        border-radius: ${d.handleRadius}px;
        width: ${d.handleWidth}px;
        height: ${d.handleHeight}px;
        margin-top: ${d.marginTop}px;
      }
    }
    .c7n-switch-inner {
      margin: ${d.switchPadding};
    }
    .c7n-switch-checked {
      background: ${d.switchOnBg};
      margin: ${d.switchOnPadding};
      :after {
        background-image: url("${d.onEnableImage}");
        background-color: ${d.switchOnButtonBg};
      }
    }
  `;
}

export default createStyleComponent("comp/switch", getSwitchStyle);
