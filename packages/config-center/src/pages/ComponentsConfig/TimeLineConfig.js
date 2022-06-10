import React from "react";
import { BlockContainer } from "./index.style";
import SectionTitle from "../_components/SectionTitle";
import ConfigItem from "../_components/ConfigItem";
import withFormOperate from "../_components/withFormOperate";
import { getMemoizedAssets } from "./util";

@withFormOperate
export default class TimeLineConfig extends React.Component {
  getTimeline = getMemoizedAssets(this.props.styleCounts.timeline, "timeline");

  render() {
    const { value, handleChange, schema } = this.props;
    return (
      <BlockContainer id="timeline-config">
        <SectionTitle title="时间轴" titleTail="TimeLine" />
        <ConfigItem
          cols={4}
          items={this.getTimeline(schema)}
          defaultSelected={value}
          onChange={handleChange("style")}
        />
      </BlockContainer>
    );
  }
}
