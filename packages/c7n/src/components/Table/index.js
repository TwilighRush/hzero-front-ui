import React, { forwardRef } from "react";
import { Table } from "choerodon-ui";
import { useLoadingEl } from "../Spin";
import "./css";

const WrappedTable = forwardRef((props, ref) => {
  const { loading, ...rest } = props;
  const indicator = useLoadingEl();
  const finalIndicator = (props.loading || {}).indicator || indicator;
  const finalLoading =
    typeof loading === "object" && loading !== null
      ? {
          ...loading,
          indicator: finalIndicator,
        }
      : { indicator: finalIndicator, spinning: loading || false };

  return <Table ref={ref} {...rest} loading={finalLoading} />;
});

Object.assign(WrappedTable, Table);

["Column", "ColumnGroup"].forEach((prop) => {
  Object.defineProperties(WrappedTable, {
    [prop]: {
      get: () => Table[prop],
    },
  });
});

export default WrappedTable;
