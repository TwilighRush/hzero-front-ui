import React, { forwardRef, useContext, useMemo } from "react";
import { Spin as HSpin } from "hzero-ui";
import {
  ThemeContext,
  isEmpty,
  getStyleSheetTarget,
  getThemeData,
} from "@hzero-front-ui/core";
import styled, { keyframes, StyleSheetManager } from "styled-components";
import "./css";

function getOffset(length, index) {
  const step = 100 / (length - 1);
  return `${step * index}%`;
}
const getLoading = (props) => {
  const { circleSize } = props;
  return keyframes`
  0% {
    stroke-dasharray: 0 ${circleSize};
    stroke-dashoffset: 0;
    transform: rotateZ(-90deg);
  }
  50% {
    stroke-dasharray: ${circleSize} ${circleSize};
    stroke-dashoffset: 0;
  }
  99.9% {
    stroke-dasharray: ${circleSize} ${circleSize};
    stroke-dashoffset: -${circleSize};
  }
  100% {
    stroke-dasharray: 0 ${circleSize};
    stroke-dashoffset: 0;
    transform: rotateZ(270deg);
  };
`;
};
const Svg = styled.svg`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: ${(props) => props.size}px !important;
  height: ${(props) => props.size}px !important;
  #hzero-loading-circle {
    stroke-width: 4;
    stroke-dasharray: 0 ${(props) => props.circleSize};
    fill: ${(props) =>
      getThemeData(props, "spin", "fillColor") || "rgba(0,0,0,0)"};
    stroke: url(#hzero-ui-loading-circle-gradient);
    animation: ${(props) => getLoading(props)}
      cubic-bezier(0.62, 0.24, 0.59, 0.93) 1.6s infinite;
    transform-origin: center;
  }
`;
export const LoadingCircle = (props) => {
  const { originTheme = {} } = useContext(ThemeContext);
  const { spin = {} } = originTheme;
  const size = spin.size || 50;
  const stopsArray = spin.circleColorGradient || [];
  return (
    <Svg
      width={size}
      height={size}
      size={size}
      circleSize={(size - 8) * 3.14}
      className="ant-spin-dot"
      {...props}
    >
      <linearGradient
        id="hzero-ui-loading-circle-gradient"
        x1="0"
        x2="0"
        y1="0"
        y2="1"
      >
        {stopsArray.map((s, i) => (
          <stop
            // key={`${s}${i}`}
            offset={getOffset(stopsArray.length, i)}
            stopColor={s}
          />
        ))}
      </linearGradient>
      <circle
        cx={size / 2}
        cy={size / 2}
        r={size / 2 - 4}
        id="hzero-loading-circle"
      />
    </Svg>
  );
};

export function useLoadingEl() {
  const { schema, resolvedTheme = {} } = useContext(ThemeContext);
  const { spin = {} } = resolvedTheme;
  const type = spin.type || "dot"; // dot || circle
  return useMemo(() => {
    return type === "circle" && !isEmpty(schema, resolvedTheme) ? (
      <LoadingCircle />
    ) : undefined;
  }, [type, schema, resolvedTheme]);
}

const Spin = forwardRef((props, ref) => {
  const indicator = useLoadingEl();
  return (
    <StyleSheetManager
      target={getStyleSheetTarget("UED_HZERO_UI_OVERRIDE_INJECTION_SPIN")}
    >
      <HSpin {...props} ref={ref} indicator={props.indicator || indicator} />
    </StyleSheetManager>
  );
});

export default Object.assign(Spin, HSpin);
