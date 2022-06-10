import React from "react";
import { BlockContainer } from "./index.style";
import SectionTitle from "../_components/SectionTitle";
import ConfigItem from "../_components/ConfigItem";
import withFormOperate from "../_components/withFormOperate";
import { getMemoizedAssets } from "./util";

@withFormOperate
class TransferConfig extends React.Component {
  getTransfer = getMemoizedAssets(this.props.styleCounts.transfer, "transfer");

  render() {
    const { value, handleChange, schema } = this.props;
    return (
      <BlockContainer id="transfer-config">
        <SectionTitle title="穿梭框" titleTail="Transfer" />
        <ConfigItem
          cols={2}
          items={this.getTransfer(schema)}
          defaultSelected={value}
          onChange={handleChange("")}
        />
      </BlockContainer>
    );
  }
}

export default TransferConfig;
