import { Slider } from "hzero-ui";
import { createGlobalStyle } from "styled-components";
import React, {
  useCallback,
  useEffect,
  useRef,
  useState,
  forwardRef,
  useImperativeHandle,
  useContext,
} from "react";
import ThemeContext from "@hzero-front-ui/core/lib/utils/ThemeContext";
import "./css";

function resolveTip(themeContext) {
  return !themeContext.originTheme ||
    !themeContext.originTheme.slider ||
    !themeContext.originTheme.slider.showTip
    ? null
    : (t) => t;
}

const SliderGlobalStyle = createGlobalStyle`
  .slider-handle-underlay {
    display: none;
  }
`;

export default forwardRef((props, ref) => {
  const sliderRef = useRef(null);
  const theme = useContext(ThemeContext) || {};
  useImperativeHandle(ref, () => sliderRef);
  const showTip = resolveTip(theme);
  const [div, setDiv] = useState({});
  const handleChange = useCallback(
    (v) => {
      if (props.onChange) {
        props.onChange(v);
      }
      div.textContent = v;
    },
    [div.textContent, props]
  );
  useEffect(() => {
    if (typeof document !== "undefined") {
      const _div = document.createElement("div");
      _div.className = "slider-handle-underlay";
      setDiv(_div);
      const slider = sliderRef.current.rcSlider.sliderRef;
      const handle = slider.getElementsByClassName("ant-slider-handle")[0];
      handle.append(_div);
    }
  }, []);
  useEffect(() => {
    div.textContent = props.value || props.defaultValue || 0;
  }, [div, props.defaultValue, props.value]);
  return (
    <>
      <SliderGlobalStyle />
      <Slider
        ref={sliderRef}
        {...props}
        onChange={handleChange}
        tipFormatter={showTip}
      />
    </>
  );
});
