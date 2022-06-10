import React from "react";
import { BlockContainer } from "./index.style";
import SectionTitle from "../_components/SectionTitle";
import ConfigItem from "../_components/ConfigItem";
import withFormOperate from "../_components/withFormOperate";
import { getMemoizedAssets } from "./util";

@withFormOperate
export default class SelectConfig extends React.Component {
  getRadio = getMemoizedAssets(this.props.styleCounts.radio, "radio/radio");

  getRadioButton = getMemoizedAssets(
    this.props.styleCounts.radio,
    "radio/radiobutton"
  );

  getCheckbox = getMemoizedAssets(
    this.props.styleCounts.checkbox,
    "checkbox/checkbox"
  );

  getCheckboxBtn = getMemoizedAssets(
    this.props.styleCounts.checkboxBtn,
    "checkbox/checkbox-btn"
  );

  render() {
    const { value, handleChange, schema } = this.props;
    return (
      <BlockContainer id="select-box-config">
        <SectionTitle title="选择器" titleTail="SelectBox" />
        <ConfigItem
          cols={2}
          title="Radio"
          items={this.getRadio(schema)}
          defaultSelected={value.radio}
          onChange={handleChange("radio")}
        />
        <ConfigItem
          cols={2}
          title="RadioButton"
          items={this.getRadioButton(schema)}
          defaultSelected={value.radioButton}
          onChange={handleChange("radioButton")}
        />
        <ConfigItem
          cols={2}
          title="Checkbox"
          items={this.getCheckbox(schema)}
          defaultSelected={value.checkbox}
          onChange={handleChange("checkbox")}
        />
        <ConfigItem
          cols={2}
          name="checkboxButton"
          title="Checkbox-button"
          items={this.getCheckboxBtn(schema)}
          defaultSelected={value.checkboxBtn}
          onChange={handleChange("checkboxBtn")}
        />
      </BlockContainer>
    );
  }
}
