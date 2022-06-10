import { Spin as C7nSpin } from "choerodon-ui";
import React, { forwardRef, useContext, useMemo } from "react";
import ThemeContext from "@hzero-front-ui/core/lib/utils/ThemeContext";
import { THEME_EMPTY } from "@hzero-front-ui/core/lib/utils/constants";
import {
  hexToRgbaColor,
  getThemeData,
  getStyleSheetTarget,
  isEmpty,
} from "@hzero-front-ui/core/lib/utils";
import styled, { keyframes, StyleSheetManager } from "styled-components";
import "./css";

const getLoadingKeyframe = (props) => {
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
    }
  `;
};

const Svg = styled.svg`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: ${(props) => props.size}px !important;
  height: ${(props) => props.size}px !important;
  #c7n-loading-circle {
    stroke-width: 4;
    stroke-dasharray: 0 ${(props) => props.circleSize};
    fill: ${(props) =>
      getThemeData(props, "spin", "fillColor") || "rgba(0,0,0,0)"};
    stroke: url(#c7n-ui-loading-circle-gradient);
    animation: ${(props) => getLoadingKeyframe(props)}
      cubic-bezier(0.62, 0.24, 0.59, 0.93) 1.4s infinite;
    transform-origin: center center;
  }
`;

const getDotRotateKeyframe = () => {
  return keyframes`
    0% {
      transform: rotate(0);
    }
    100% {
      transform: rotate(360deg);
    }
  `;
};

function getOffset(length, index) {
  const step = 100 / (length - 1);
  return `${step * index}%`;
}

const LoadingCircle = (props) => {
  const { resolvedTheme = {} } = useContext(ThemeContext);
  const { spin = {} } = resolvedTheme;
  const size = spin.size || 50;
  const stopsArray = spin.circleColorGradient || [];
  return (
    <Svg
      width={size}
      height={size}
      size={size}
      circleSize={(size - 8) * 3.14}
      {...props}
    >
      <linearGradient
        id="c7n-ui-loading-circle-gradient"
        x1="0"
        x2="0"
        y1="0"
        y2="1"
      >
        {stopsArray.map((s, i) => (
          <stop
            key={`${s}_${i + 1}`}
            offset={getOffset(stopsArray.length, i)}
            stopColor={s}
          />
        ))}
      </linearGradient>
      <circle
        cx={size / 2}
        cy={size / 2}
        r={size / 2 - 4}
        id="c7n-loading-circle"
      />
    </Svg>
  );
};

const DotsContainer = styled.span`
  &.c7n-spin-initial-dot {
    position: relative;
    display: inline-block;
    font-size: 20px;
    width: 20px;
    height: 20px;
    animation: ${getDotRotateKeyframe()} 1s linear infinite;
    span {
      width: 9px;
      height: 9px;
      border-radius: 100%;
      background-color: #1890ff;
      transform: scale(0.75);
      display: block;
      position: absolute;
      transform-origin: 50% 50%;
      background: ${(props) => getThemeData(props, "common", "primary")};
      &:first-child {
        left: 0;
        top: 0;
      }
      &:nth-child(2) {
        right: 0;
        top: 0;
        background: ${(props) =>
          hexToRgbaColor(getThemeData(props, "common", "primary"), 0.8)};
      }
      &:nth-child(3) {
        right: 0;
        bottom: 0;
        background: ${(props) =>
          hexToRgbaColor(getThemeData(props, "common", "primary"), 0.6)};
      }
      &:last-child {
        left: 0;
        bottom: 0;
        background: ${(props) =>
          hexToRgbaColor(getThemeData(props, "common", "primary"), 0.3)};
      }
    }
  }
`;

const getLoadingDot = (initial = false) => (props) => {
  const { className, ...rest } = props;
  const { resolvedTheme = {} } = useContext(ThemeContext);
  const pClassName = `${className || " "} ${
    initial ? "c7n-spin-initial-dot" : "c7n-spin-themed-dot"
  }`;

  return (
    <DotsContainer {...rest} className={pClassName} data={resolvedTheme}>
      <span />
      <span />
      <span />
      <span />
    </DotsContainer>
  );
};

export function useLoadingEl() {
  const { resolvedTheme = {}, schema = "theme2" } = useContext(ThemeContext);
  const { spin = {} } = resolvedTheme;
  const type = spin.type || "dot"; // dot || circle
  const ThemedDots = getLoadingDot();
  const InitialDots = getLoadingDot(true);
  return useMemo(() => {
    if (schema === "theme4" || schema === "theme5" || schema === THEME_EMPTY) {
      return undefined;
    }
    const empty = isEmpty(schema, resolvedTheme);
    return !empty ? (
      type === "circle" ? (
        <LoadingCircle />
      ) : (
        <ThemedDots data={resolvedTheme} />
      )
    ) : (
      <InitialDots data={resolvedTheme} />
    );
  }, [schema, type, resolvedTheme]);
}

export function createSpin(Component) {
  const WrapSpin = forwardRef((props, ref) => {
    const indicator = useLoadingEl();
    return (
      <StyleSheetManager
        target={getStyleSheetTarget("UED_C7N-UI_OVERRIDE_INJECTION_SPIN")}
      >
        <Component
          {...props}
          ref={ref}
          indicator={props.indicator || indicator}
        />
      </StyleSheetManager>
    );
  });
  Object.assign(WrapSpin, Component);
  return WrapSpin;
}

export default createSpin(C7nSpin);
