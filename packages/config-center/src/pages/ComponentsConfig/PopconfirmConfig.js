import React from "react";
import intl from "../../utils/intl";
import { BlockContainer } from "./index.style";
import SectionTitle from "../_components/SectionTitle";
import ConfigItem from "../_components/ConfigItem";

import withFormOperate from "../_components/withFormOperate";
import { getMemoizedAssets } from "./util";

@withFormOperate
export default class PopConfirm extends React.Component {
  getPopTip = getMemoizedAssets(
    this.props.styleCounts.popconfirm,
    "feedback/poptip"
  );

  getModal = getMemoizedAssets(this.props.styleCounts.modal, "feedback/modal");

  render() {
    const { handleChange, value, schema } = this.props;
    return (
      <BlockContainer id="pop-confirm-config">
        <SectionTitle title="反馈" titleTail="Operation hint" />
        <ConfigItem
          cols={2}
          title={intl.get("hzero.hzeroTheme.page.popConfirm").d("气泡确认")}
          items={this.getPopTip(schema)}
          onChange={handleChange("popconfirm")}
          defaultSelected={value.popconfirm}
        />
        <ConfigItem
          cols={2}
          // title="Modal 模态框"
          title={intl.get("hzero.hzeroTheme.page.modalBox").d("模态框弹出")}
          items={this.getModal(schema)}
          onChange={handleChange("modal")}
          defaultSelected={value.modal}
        />
      </BlockContainer>
    );
  }
}
