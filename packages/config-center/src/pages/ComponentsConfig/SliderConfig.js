import React from "react";
import { BlockContainer } from "./index.style";
import SectionTitle from "../_components/SectionTitle";
import withFormOperate from "../_components/withFormOperate";
import { getMemoizedAssets } from "./util";
import ConfigItem from "../_components/ConfigItem";

@withFormOperate
export default class SliderConfig extends React.Component {
  memoizedSlider = getMemoizedAssets(this.props.styleCounts.slider, "slider");

  render() {
    const { handleChange, value, schema } = this.props;
    return (
      <BlockContainer id="slider-config">
        <SectionTitle title="滑块" titleTail="Slider" />
        <ConfigItem
          cols={2}
          items={this.memoizedSlider(schema)}
          defaultSelected={value}
          onChange={handleChange("style")}
        />
      </BlockContainer>
    );
  }
}
