import React from "react";
import intl from "../../utils/intl";
import { BlockContainer } from "./index.style";
import SectionTitle from "../_components/SectionTitle";
import ConfigItem from "../_components/ConfigItem";

import withFormOperate from "../_components/withFormOperate";
import { getMemoizedAssets } from "./util";

@withFormOperate
export default class AnchorConfig extends React.Component {
  getBaseAnchor = getMemoizedAssets(
    this.props.styleCounts.anchor,
    "anchor/base"
  );

  getTreeAnchor = getMemoizedAssets(
    this.props.styleCounts.stepsGroup,
    "anchor/tree"
  );

  render() {
    const { value, handleChange, schema } = this.props;
    return this.props.styleCounts.anchor ? (
      <BlockContainer id="anchor-config">
        <SectionTitle title="锚点" titleTail="Anchor" />
        <ConfigItem
          name="anchor"
          // cols={2}
          title={intl
            .get("hzero.hzeroTheme.components.baseAnchor")
            .d("基础锚点")}
          items={this.getBaseAnchor(schema)}
          defaultSelected={value}
          onChange={handleChange("anchor")}
        />
        <ConfigItem
          name="anchor"
          // cols={2}
          title={intl
            .get("hzero.hzeroTheme.components.treeAnchor")
            .d("树状结构锚点")}
          items={this.getTreeAnchor(schema)}
          defaultSelected={value}
          onChange={handleChange("anchor")}
        />
      </BlockContainer>
    ) : null;
  }
}
