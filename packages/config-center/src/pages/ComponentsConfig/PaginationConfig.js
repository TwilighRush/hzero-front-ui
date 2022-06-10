import React from "react";
import { BlockContainer } from "./index.style";
import SectionTitle from "../_components/SectionTitle";
import ConfigItem from "../_components/ConfigItem";
import withFormOperate from "../_components/withFormOperate";
import { getMemoizedAssets } from "./util";

@withFormOperate
export default class PaginationConfig extends React.Component {
  memoizedPagination = getMemoizedAssets(
    this.props.styleCounts.pagination,
    "pagination"
  );

  render() {
    const { value, handleChange, schema } = this.props;
    return (
      <BlockContainer id="pagination-config">
        <SectionTitle title="分页" titleTail="Pagination" />
        <ConfigItem
          cols={2}
          items={this.memoizedPagination(schema)}
          defaultSelected={value}
          onChange={handleChange("style")}
        />
      </BlockContainer>
    );
  }
}
