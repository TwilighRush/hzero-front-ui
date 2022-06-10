import React from "react";
import { BlockContainer } from "./index.style";
import SectionTitle from "../_components/SectionTitle";
import ConfigItem from "../_components/ConfigItem";
import withFormOperate from "../_components/withFormOperate";
import { getMemoizedAssets } from "./util";

@withFormOperate
export default class SwitchConfig extends React.Component {
  getSwitch = getMemoizedAssets(this.props.styleCounts.switch, "switch");

  render() {
    const { value, handleChange, schema } = this.props;
    return (
      <BlockContainer id="switch-config">
        <SectionTitle title="开关" titleTail="Switch" />
        <ConfigItem
          cols={2}
          items={this.getSwitch(schema)}
          onChange={handleChange("style")}
          defaultSelected={value}
        />
      </BlockContainer>
    );
  }
}
