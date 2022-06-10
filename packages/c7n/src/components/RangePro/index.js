/* eslint-disable no-param-reassign */
/* eslint-disable prefer-destructuring */
import { Range } from "choerodon-ui/pro";
import React, { forwardRef, useRef, useImperativeHandle } from "react";
import { StyledContainer } from "./index.style";
import "choerodon-ui/lib/slider/style";
import "./css";

const WrappedRange = forwardRef((props, ref) => {
  const rangeRef = useRef(null);
  // const indicator1 = useRef({});
  // const indicator2 = useRef({});
  // const { onChange = () => {}, ...rest } = props;
  const { ...rest } = props;
  // let dsRangeFlag;

  // const createIndicator = useCallback((handle, indicatorRef) => {
  //   const div = document.createElement("div");
  //   div.classList.add("c7n-slider-indicator");
  //   indicatorRef.current = div;
  //   handle.appendChild(indicatorRef.current);
  // }, []);

  // const setIndicatorValue = useCallback((orderIndictor, markedPoses) => {
  //   const contentValue =
  //     props.value ||
  //     orderIndictor.current.parentNode.getAttribute("aria-valuenow") ||
  //     props.defaultValue ||
  //     0;
  //   if (markedPoses && contentValue in markedPoses) return;
  //   orderIndictor.current.textContent = contentValue;
  // }, []);

  // const clearIndicatorValue = useCallback((indicator) => {
  //   indicator.current.textContent = null;
  // }, []);

  // useEffect(() => {
  //   if (typeof document !== "undefined") {
  //     if (props.dataSet) {
  //       const { dataSet, name } = props;
  //       dsRangeFlag = dataSet.getField(name)?.get("range");
  //     }
  //     const { wrapper } = rangeRef.current;
  //     const { range } = props;
  //     createIndicator(
  //       wrapper.getElementsByClassName("c7n-pro-range-handle")[0],
  //       indicator1
  //     );
  //     if (range || dsRangeFlag) {
  //       createIndicator(
  //         wrapper.getElementsByClassName("c7n-pro-range-handle")[1],
  //         indicator2
  //       );
  //     }
  //   }
  // }, []);

  // useEffect(() => {
  //   const { range, marks } = props;
  //   setIndicatorValue(indicator1, marks);
  //   if (range || dsRangeFlag) {
  //     setIndicatorValue(indicator2, marks);
  //   }
  // }, [props.defaultValue, props.value]);

  // const handleChange = useCallback(
  //   (...args) => {
  //     const { range, marks } = props;
  //     if (range || dsRangeFlag) {
  //       const indicators = args[0];
  //       indicator1.current.textContent = indicators[0];
  //       indicator2.current.textContent = indicators[1];
  //       if (indicators[0] in marks) {
  //         clearIndicatorValue(indicator1);
  //       }
  //       if (indicators[1] in marks) {
  //         clearIndicatorValue(indicator2);
  //       }
  //     } else {
  //       indicator1.current.textContent = args[0];
  //       if (args[0] in marks) {
  //         clearIndicatorValue(indicator1);
  //       }
  //     }
  //     onChange(...args);
  //   },
  //   [onChange]
  // );
  useImperativeHandle(ref, () => rangeRef.current);
  return (
    <StyledContainer>
      {/* <Range ref={rangeRef} onChange={handleChange} {...rest} /> */}
      <Range ref={rangeRef} {...rest} />
    </StyledContainer>
  );
});

export default Object.assign(WrappedRange, Range);
