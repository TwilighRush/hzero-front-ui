import React from "react";
import intl from "../../utils/intl";
import { BlockContainer } from "./index.style";
import SectionTitle from "../_components/SectionTitle";
import ConfigItem from "../_components/ConfigItem";

import withFormOperate from "../_components/withFormOperate";
import { getMemoizedAssets } from "./util";

@withFormOperate
export default class StepsConfig extends React.Component {
  getSteps = getMemoizedAssets(this.props.styleCounts.steps, "steps");

  getStepsGroup = getMemoizedAssets(
    this.props.styleCounts.stepsGroup,
    "steps/group"
  );
  // getSteps = getStaticGif(this.props.styleCounts.steps, "steps", "svg");

  render() {
    const { value, handleChange, schema } = this.props;
    return (
      <BlockContainer id="prompt-config">
        <SectionTitle title="步骤条" titleTail="Steps" />
        <ConfigItem
          cols={2}
          title={intl.get("hzero.hzeroTheme.components.steps").d("步骤条")}
          items={this.getSteps(schema)}
          defaultSelected={value.steps}
          onChange={handleChange("steps")}
        />
        <ConfigItem
          name="stepsGroup"
          cols={2}
          title={intl
            .get("hzero.hzeroTheme.components.steps")
            .d("步骤条必填+选填")}
          items={this.getStepsGroup(schema)}
          defaultSelected={value.stepsGroup}
          onChange={handleChange("stepsGroup")}
        />
      </BlockContainer>
    );
  }
}
