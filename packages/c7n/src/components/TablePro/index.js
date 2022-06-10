import isNil from "lodash/isNil";
import { Table } from "choerodon-ui/pro";
import React, { forwardRef, useContext } from "react";
import ThemeContext from "@hzero-front-ui/core/lib/utils/ThemeContext";
import ConfigContext from "choerodon-ui/lib/config-provider/ConfigContext";
import { useLoadingEl } from "../Spin/index";
import "./css";

function getProp(propName, globalPropName, props, prop, getConfig) {
  if (propName in props) {
    return props[propName];
  }
  if (prop !== undefined) {
    return prop;
  }
  return getConfig(globalPropName);
}

const WrappedTable = forwardRef((props, ref) => {
  const { getConfig } = useContext(ConfigContext);
  const circle = useLoadingEl();
  const { spin, ...rest } = props;
  const d = useContext(ThemeContext);
  const rowHeight =
    props.rowHeight ||
    d?.resolvedTheme?.table?.rowHeight ||
    getConfig("tableRowHeight");
  const parityRow = getProp(
    "parityRow",
    "tableParityRow",
    props,
    d?.resolvedTheme?.table?.striped,
    getConfig
  );
  // const highLightRow = getProp(
  //   "highLightRow",
  //   "tableHighLightRow",
  //   props,
  //   d?.schema !== "theme4"
  // );

  const indicator = circle || getConfig("tableSpinProps").indicator;
  const passedSpin =
    spin && spin.indicator
      ? { ...getConfig("tableSpinProps"), ...spin }
      : { ...getConfig("tableSpinProps"), ...(spin || {}), indicator };
  return (
    <Table
      ref={ref}
      rowHeight={rowHeight}
      parityRow={parityRow}
      // highLightRow={highLightRow}
      {...rest}
      spin={passedSpin}
    />
  );
});

if (!isNil(Table)) {
  Object.assign(WrappedTable, Table);
} else {
  [
    "Column",
    "AdvancedQueryBar",
    "FilterBar",
    "ProfessionalBar",
    "DynamicFilterBar",
    "TableHeaderCell",
    "TableRow",
    "ToolBar",
    "ComboBar",
    "FilterSelect",
    "displayName",
  ].forEach((prop) => {
    Object.defineProperties(WrappedTable, {
      [prop]: {
        get: () => Table[prop],
      },
    });
  });
}

export default WrappedTable;
