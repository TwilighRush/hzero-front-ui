import React from "react";
import intl from "../../utils/intl";
import { BlockContainer } from "./index.style";
import SectionTitle from "../_components/SectionTitle";
import ConfigItem from "../_components/ConfigItem";
import withFormOperate from "../_components/withFormOperate";
import { getMemoizedAssets } from "./util";

@withFormOperate
export default class TreeSelectConfig extends React.Component {
  getSingle = getMemoizedAssets(this.props.styleCounts.tree, "tree/tree-radio");

  getMulti = getMemoizedAssets(
    this.props.styleCounts.treeCheck,
    "tree/tree-check"
  );

  render() {
    const { value, handleChange, schema } = this.props;
    return (
      <BlockContainer id="tree-select-config">
        <SectionTitle title="树状选择" titleTail="TreeSelect" />
        <ConfigItem
          cols={4}
          title={intl.get("hzero.hzeroTheme.page.singleSelect").d("单选")}
          items={this.getSingle(schema)}
          defaultSelected={value.tree}
          onChange={handleChange("tree")}
        />
        <ConfigItem
          cols={4}
          title={intl.get("hzero.hzeroTheme.page.multiSelect").d("多选")}
          items={this.getMulti(schema)}
          onChange={handleChange("treeCheck")}
          defaultSelected={value.treeCheck}
        />
      </BlockContainer>
    );
  }
}
