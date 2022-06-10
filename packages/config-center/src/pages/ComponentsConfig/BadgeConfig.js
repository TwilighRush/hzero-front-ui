import React from "react";
import { BlockContainer } from "./index.style";
import SectionTitle from "../_components/SectionTitle";
import ConfigItem from "../_components/ConfigItem";
import withFormOperate from "../_components/withFormOperate";
import { getMemoizedAssets } from "./util";

@withFormOperate
export default class BadgeConfig extends React.Component {
  memoizedBadge = getMemoizedAssets(this.props.styleCounts.badge, "badge");

  render() {
    const { value, handleChange, schema } = this.props;
    return (
      <BlockContainer id="badge-config">
        <SectionTitle title="徽章" titleTail="Badge" />
        <ConfigItem
          items={this.memoizedBadge(schema)}
          defaultSelected={value}
          onChange={handleChange("style")}
        />
      </BlockContainer>
    );
  }
}
