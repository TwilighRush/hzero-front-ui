import React from "react";
import intl from "../../utils/intl";
import { BlockContainer } from "./index.style";
import SectionTitle from "../_components/SectionTitle";
import ConfigItem from "../_components/ConfigItem";

import withFormOperate from "../_components/withFormOperate";
import { getMemoizedAssets } from "./util";

@withFormOperate
export default class PromptConfig extends React.Component {
  getNotifications = getMemoizedAssets(
    this.props.styleCounts.notification,
    "notify/notification-prompt"
  );

  getToolTip = getMemoizedAssets(
    this.props.styleCounts.tooltip,
    "notify/clickhover-prompt"
  );

  getAlert = getMemoizedAssets(
    this.props.styleCounts.alert,
    "notify/warning-hints"
  );

  render() {
    const { handleChange, value, schema } = this.props;
    return (
      <BlockContainer id="prompt-config">
        <SectionTitle title="提示" titleTail="Prompt" />
        <ConfigItem
          cols={2}
          title={intl.get("hzero.hzeroTheme.page.alertTip").d("警告提示")}
          items={this.getAlert(schema)}
          onChange={handleChange("alert")}
          defaultSelected={value.alert}
        />
        <ConfigItem
          cols={2}
          title={intl.get("hzero.hzeroTheme.page.notification").d("通知提示")}
          items={this.getNotifications(schema)}
          onChange={handleChange("notification")}
          defaultSelected={value.notification}
        />
        <ConfigItem
          cols={2}
          // title="点击/悬浮提示"
          title={intl.get("hzero.hzeroTheme.page.tooltip").d("点击/悬浮提示")}
          items={this.getToolTip(schema)}
          onChange={handleChange("tooltip")}
          defaultSelected={value.tooltip}
        />
      </BlockContainer>
    );
  }
}
