import React, { forwardRef } from "react";
import { Checkbox } from "hzero-ui";
import styled from "styled-components";
import "./css";

const StyledWrapper = styled.span`
  display: inline-block;
`;

const WrappedCheckbox = forwardRef((props, ref) => {
  const { type, ...rest } = props;
  return (
    <StyledWrapper
      className={`t-checkbox ${type === "button" ? "t-checkbox-btn" : ""}`}
    >
      <Checkbox {...rest} ref={ref} />
    </StyledWrapper>
  );
});

export default Object.assign(WrappedCheckbox, Checkbox);
