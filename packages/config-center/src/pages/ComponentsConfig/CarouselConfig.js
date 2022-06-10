import React from "react";
import { BlockContainer } from "./index.style";
import SectionTitle from "../_components/SectionTitle";
import ConfigItem from "../_components/ConfigItem";
import withFormOperate from "../_components/withFormOperate";
import { getMemoizedAssets } from "./util";

@withFormOperate
export default class CarouselConfig extends React.Component {
  memoizedCarousel = getMemoizedAssets(
    this.props.styleCounts.carousel,
    "carousel"
  );

  render() {
    const { value, handleChange, schema } = this.props;
    return (
      <BlockContainer id="carousel-config">
        <SectionTitle title="走马灯" titleTail="Carousel" />
        <ConfigItem
          cols={2}
          items={this.memoizedCarousel(schema)}
          defaultSelected={value}
          onChange={handleChange("style")}
        />
      </BlockContainer>
    );
  }
}
