import React from "react";
import { BlockContainer } from "./index.style";
import SectionTitle from "../_components/SectionTitle";
import withFormOperate from "../_components/withFormOperate";
import { getTableStatic } from "./util";
import ConfigItem from "../_components/ConfigItem";

@withFormOperate
export default class TableConfig extends React.Component {
  // getTable = getMemoizedAssets(this.props.styleCounts.table, "table");
  getTable = getTableStatic(this.props.styleCounts.table);

  render() {
    const { handleChange, value, schema } = this.props;
    return this.props.styleCounts.table ? (
      <BlockContainer id="table-config">
        <SectionTitle title="表格" titleTail="Table" />
        <ConfigItem
          cols={1}
          showTitle
          items={this.getTable(schema)}
          defaultSelected={value}
          onChange={handleChange("style")}
        />
      </BlockContainer>
    ) : null;
  }
}
