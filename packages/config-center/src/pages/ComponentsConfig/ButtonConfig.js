import React from "react";
import styled from "styled-components";
import intl from "../../utils/intl";
import { BlockContainer } from "./index.style";
import SectionTitle from "../_components/SectionTitle";
import ConfigItem from "../_components/ConfigItem";
import withFormOperate from "../_components/withFormOperate";

import { getMemoizedAssets, getStaticGif } from "./util";
import MotionTitle from "../_components/MotionTitle";

const StyledConfigItem = styled(ConfigItem)`
  margin-top: 8px;
`;

class ButtonConfig extends React.Component {
  getButtons = getMemoizedAssets(this.props.styleCounts.button, "button");

  getMotions = getStaticGif(
    // this.props.styleCounts.buttonMotion,
    this.props.styleCounts.buttonMotion,
    // 2,
    "button/motions",
    "png",
    1
  );

  getMotions2 = getStaticGif(
    this.props.styleCounts.buttonMotion,
    // 2,
    "button/motions",
    "png",
    2
  );

  render() {
    const { handleChange, value, schema } = this.props;
    return this.props.styleCounts.button ? (
      <BlockContainer className="block-container" id="button-config">
        <SectionTitle
          title="按钮"
          titleTail="Button"
          style={{ marginTop: 0 }}
        />
        <StyledConfigItem
          title={intl
            .get("hzero.hzeroTheme.page.buttonWithIcon")
            .d("主按钮带图标+次按钮")}
          items={this.getButtons(schema)}
          defaultSelected={value.button}
          onChange={handleChange("button")}
        />
        <StyledConfigItem
          name="buttonMotion"
          simple
          title={
            <MotionTitle
              text={intl.get("hzero.hzeroTheme.page.animation").d("动效") + 1}
            />
          }
          defaultSelected={value.buttonMotion}
          items={this.getMotions(schema)}
          onChange={handleChange("buttonMotion")}
        />
        <StyledConfigItem
          name="buttonMotion"
          simple
          title={
            <MotionTitle
              text={intl.get("hzero.hzeroTheme.page.animation").d("动效") + 2}
            />
          }
          defaultSelected={value.buttonMotion2}
          items={this.getMotions2(schema)}
          onChange={handleChange("buttonMotion2")}
        />
      </BlockContainer>
    ) : null;
  }
}

ButtonConfig.defaultProps = {
  originTheme: { button: [] },
};

export default withFormOperate(ButtonConfig);
