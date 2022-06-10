import React, { forwardRef, useState, useCallback } from "react";
import styled from "styled-components";
import { Input as HInput } from "hzero-ui";
import "./css";

const StyledInputContainer = styled.div`
  display: inline-block;
  width: 100%;
  padding: 0;
  margin: 0;
  line-height: 0;
  position: relative;
  box-sizing: border-box;
  .ant-calendar-picker {
    width: 100%;
  }
`;

export const getRequiredInputComponent = (
  Component,
  extraClass = "",
  isTextarea
) =>
  forwardRef((props, ref) => {
    const {
      disabled,
      style = {},
      className,
      onFocus = () => {},
      onBlur = () => {},
      ...rest
    } = props;
    const [focused, setFocused] = useState(false);
    const passedProps = { ...rest, disabled };
    const handleComponentFocus = useCallback((...args) => {
      onFocus(...args);
      setFocused((f) => !f);
    }, []);
    const handleComponentBlur = useCallback((...args) => {
      onBlur(...args);
      setFocused((f) => !f);
    }, []);
    const containerClassNames = [
      "themed-input-wrapper",
      extraClass,
      disabled ? " t-field-disabled" : "",
      focused ? "t-field-focused" : "",
      className,
    ];
    const passedStyle = { ...(style || {}) };
    if (isTextarea) {
      passedStyle.minHeight = passedStyle.height || "auto";
      passedStyle.height = "auto";
    }
    return (
      <StyledInputContainer
        style={passedStyle}
        className={containerClassNames.join(" ")}
      >
        <span
          className={`themed-input-inner${
            disabled ? " t-field-disabled-inner" : ""
          }`}
        >
          <Component
            {...passedProps}
            ref={ref}
            onFocus={handleComponentFocus}
            onBlur={handleComponentBlur}
          />
        </span>
      </StyledInputContainer>
    );
  });

const Input = getRequiredInputComponent(HInput, "t-input");

Object.assign(Input, HInput);

// Input.TextArea = getRequiredInputComponent(HInput.TextArea, "t-textarea", true);
Input.Group = HInput.Group;
Input.Search = getRequiredInputComponent(HInput.Search, "t-search");

export default Input;
