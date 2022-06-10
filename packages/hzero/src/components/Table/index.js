import { Table } from "hzero-ui";
import React, { forwardRef, useContext } from "react";
import { ThemeContext, isEmpty } from "@hzero-front-ui/core/lib/utils";
import { useLoadingEl } from "../Spin";
import "./css";

const WrappedTable = forwardRef((props, ref) => {
  const { loading, ...rest } = props;
  const indicator = useLoadingEl();
  const { schema, resolvedTheme } = useContext(ThemeContext);
  let finalLoading =
    typeof loading === "object" && loading !== null
      ? {
          ...loading,
          indicator,
        }
      : { indicator, spinning: loading || false };
  if (isEmpty(schema, resolvedTheme)) {
    finalLoading = loading;
  }
  return <Table ref={ref} {...rest} loading={finalLoading} />;
});

export default Object.assign(WrappedTable, Table);
