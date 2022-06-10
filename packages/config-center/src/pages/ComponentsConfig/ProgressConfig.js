import React from "react";
import intl from "../../utils/intl";
import { BlockContainer } from "./index.style";
import SectionTitle from "../_components/SectionTitle";
import ConfigItem from "../_components/ConfigItem";
import withFormOperate from "../_components/withFormOperate";
import { getMemoizedAssets } from "./util";

@withFormOperate
export default class ProgressConfig extends React.Component {
  getLine = getMemoizedAssets(
    this.props.styleCounts.lineProgress,
    "progress/bar"
  );

  getCircle = getMemoizedAssets(
    this.props.styleCounts.circleProgress,
    "progress/ring"
  );

  render() {
    const { handleChange, value, schema } = this.props;
    return (
      <BlockContainer id="progress-config">
        <SectionTitle title="进度条" titleTail="Progress" />
        <ConfigItem
          cols={2}
          title={intl.get("hzero.hzeroTheme.page.bar").d("条状")}
          items={this.getLine(schema)}
          defaultSelected={value.lineProgress}
          onChange={handleChange("lineProgress")}
        />
        <ConfigItem
          cols={2}
          title={intl.get("hzero.hzeroTheme.page.ring").d("环状")}
          items={this.getCircle(schema)}
          defaultSelected={value.circleProgress}
          onChnage={handleChange("circleProgress")}
        />
      </BlockContainer>
    );
  }
}
