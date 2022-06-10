import { getThemeData } from "@hzero-front-ui/core";
import { css } from "styled-components";
import buttonAnimation from "./buttonMotion";
import inputAnimations from "./inputAnimation";
import selectAnimation from "./selectAnimation";

const allAnimations = (props: any) => {
  const input = getThemeData(props, "inputMotion");
  const button = getThemeData(props, "buttonMotion");
  const button2 = getThemeData(props, "buttonMotion2");
  const dropdown = getThemeData(props, "dropdownMotion");

  return css`
    ${input.motion ? inputAnimations.borderAndBottom : ""}
    ${button.motion === "shake" ? buttonAnimation.shake : ""}
    ${button2.motion === "circle" ? buttonAnimation.circle : ""}
    ${button2.motion === "borderColor" ? buttonAnimation.borderColor : ""}
    ${
      dropdown.motion === "dropdownBorder" ? selectAnimation.dropdownBorder : ""
    }
    ${
      dropdown.motion === "dropdownBorderNoMotion"
        ? selectAnimation.dropdownBorderNoMotion
        : ""
    }
  `;
};

export default allAnimations;
