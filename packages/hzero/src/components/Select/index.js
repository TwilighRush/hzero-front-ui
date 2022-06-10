import { Select } from "hzero-ui";
import React, { forwardRef } from "react";
import "./css";

const WrappedSelect = forwardRef((props, ref) => {
  return <Select ref={ref} {...props} />;
});

export default Object.assign(WrappedSelect, Select);
