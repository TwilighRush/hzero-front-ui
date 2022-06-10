import React from "react";
import { BlockContainer } from "./index.style";
import SectionTitle from "../_components/SectionTitle";
import ConfigItem from "../_components/ConfigItem";
import withFormOperate from "../_components/withFormOperate";
import { getMemoizedAssets } from "./util";

@withFormOperate
export default class CascaderConfig extends React.Component {
  memoizedNormal = getMemoizedAssets(
    this.props.styleCounts.cascader,
    "cascader/normal"
  );

  memoizedSingle = getMemoizedAssets(
    this.props.styleCounts.cascader,
    "cascader/single"
  );

  render() {
    const { value, handleChange, schema } = this.props;
    return (
      <BlockContainer id="cascader-config">
        <SectionTitle title="级联选择" titleTail="Cascader" />
        <ConfigItem
          title="多栏"
          cols={2}
          items={this.memoizedNormal(schema)}
          defaultSelected={value}
          onChange={handleChange("style")}
        />
        <ConfigItem
          title="单栏"
          cols={2}
          items={this.memoizedSingle(schema)}
          defaultSelected={value}
          onChange={handleChange("style")}
        />
      </BlockContainer>
    );
  }
}
