import React from "react";
import intl from "../../utils/intl";
import { BlockContainer } from "./index.style";
import SectionTitle from "../_components/SectionTitle";
import ConfigItem from "../_components/ConfigItem";
import withFormOperate from "../_components/withFormOperate";
import { getMemoizedAssets } from "./util";

@withFormOperate
export default class TabConfig extends React.Component {
  getCard = getMemoizedAssets(this.props.styleCounts.tabsCard, "tab");

  getTabs = getMemoizedAssets(this.props.styleCounts.tabs, "tab/tab");

  getVertical = getMemoizedAssets(this.props.styleCounts.tabs, "tab/vertical");

  render() {
    const { handleChange, value, schema } = this.props;
    return (
      <BlockContainer id="tab-config">
        <SectionTitle title="切换" titleTail="Tab" />
        <ConfigItem
          cols={2}
          title={intl.get("hzero.hzeroTheme.page.cardType").d("卡片类型")}
          items={this.getCard(schema)}
          onChange={handleChange("tabsCard")}
          defaultSelected={value.tabsCard}
        />
        <ConfigItem
          cols={2}
          title={intl
            .get("hzero.hzeroTheme.components.tabsHorizontal")
            .d("切换-横向")}
          items={this.getTabs(schema)}
          onChange={handleChange("tabs")}
          defaultSelected={value.tabs}
        />
        <ConfigItem
          cols={2}
          title={intl
            .get("hzero.hzeroTheme.components.tabsVertical")
            .d("切换-纵向")}
          items={this.getVertical(schema)}
          onChange={handleChange("tabs")}
          defaultSelected={value.tabs}
        />
      </BlockContainer>
    );
  }
}
