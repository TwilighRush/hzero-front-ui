import { Slider } from "choerodon-ui";
import { createGlobalStyle } from "styled-components";

import React, {
  forwardRef,
  useCallback,
  useContext,
  useEffect,
  useImperativeHandle,
  useRef,
} from "react";
import ThemeContext from "@hzero-front-ui/core/lib/utils/ThemeContext";
import "./css";

const SliderGlobalStyle = createGlobalStyle`
  .c7n-slider-indicator {
    display: none;
  }
`;

const getContentFromValue = (value, i) =>
  Array.isArray(value) ? value[i] : value;

const WrappedSlider = forwardRef((props, ref) => {
  const { onChange = () => {}, ...rest } = props;
  const sliderRef = useRef(null);
  const indicatorRef = useRef([]);
  const { resolvedTheme = {}, schema } = useContext(ThemeContext);
  const tipFormatter = resolvedTheme.slider
    ? resolvedTheme.slider.showTip
      ? props.tipFormatter || (() => {})
      : null
    : null;
  useEffect(() => {
    const wrapper = sliderRef.current.rcSlider.sliderRef;
    const handles = Array.from(
      wrapper.getElementsByClassName("c7n-slider-handle")
    );
    if (
      schema === "theme1" ||
      (schema === "theme3" && typeof document !== "undefined")
    ) {
      indicatorRef.current = handles.map((handle) => {
        const div = document.createElement("div");
        div.className = "c7n-slider-indicator";
        while (handle.hasChildNodes()) {
          handle.removeChild(handle.lastChild);
        }
        handle.appendChild(div);
        return div;
      });
    } else {
      handles.map((handle) => {
        while (handle.hasChildNodes()) {
          handle.removeChild(handle.lastChild);
        }
        return handle;
      });
    }
  }, [schema]);
  useEffect(() => {
    if (schema === "theme1" || schema === "theme3") {
      (indicatorRef.current || []).forEach((div, i) => {
        // eslint-disable-next-line no-param-reassign
        div.textContent =
          getContentFromValue(props.value, i) ||
          div.parentNode.getAttribute("aria-valuenow") ||
          getContentFromValue(props.defaultValue, i) ||
          0;
      });
    }
  }, [props.defaultValue, props.value, schema]);
  const handleChange = useCallback(
    (values) => {
      if (schema === "theme1" || schema === "theme3") {
        if (Array.isArray(values)) {
          values.forEach((v, i) => {
            indicatorRef.current[i].textContent = v;
          });
        } else {
          indicatorRef.current[0].textContent = values;
        }
      }
      onChange(values);
    },
    [onChange, schema]
  );
  useImperativeHandle(ref, () => sliderRef.current);
  return (
    <>
      <SliderGlobalStyle />
      <Slider
        ref={sliderRef}
        {...rest}
        onChange={handleChange}
        tipFormatter={tipFormatter}
      />
    </>
  );
});

export default Object.assign(WrappedSlider, Slider);
