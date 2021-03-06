import React from "react";
import intl from "../../utils/intl";
import { BlockContainer } from "./index.style";
import SectionTitle from "../_components/SectionTitle";
import ConfigItem from "../_components/ConfigItem";
import withFormOperate from "../_components/withFormOperate";
import { getMemoizedAssets, getStaticGif } from "./util";
import MotionTitle from "../_components/MotionTitle";

@withFormOperate
export default class FormInputConfig extends React.Component {
  memoizedInput = getMemoizedAssets(this.props.styleCounts.input, "input");

  memoizedEmailInput = getMemoizedAssets(
    this.props.styleCounts.input,
    "input/email-input"
  );

  memoizedPasswordInput = getMemoizedAssets(
    this.props.styleCounts.input,
    "input/password-input"
  );

  memoizedNumberInput = getMemoizedAssets(
    this.props.styleCounts.input,
    "input/number-input"
  );

  memoizedLov = getMemoizedAssets(this.props.styleCounts.input, "input/Lov");

  memoizedTextarea = getMemoizedAssets(
    this.props.styleCounts.input,
    "input/text-input"
  );

  getRequiredColor = getMemoizedAssets(
    this.props.styleCounts.formColor,
    "input/required-color"
  );

  getMotions1 = getStaticGif(
    this.props.styleCounts.inputMotion,
    "input/motions",
    "png",
    "1"
  );

  getMotions2 = getStaticGif(
    this.props.styleCounts.inputMotion,
    "input/motions",
    "png",
    "2"
  );

  getMoneyField = getMemoizedAssets(
    this.props.styleCounts.input,
    "input/money",
    "svg"
  );

  render() {
    const { value, schema, handleChange } = this.props;
    // const disabledArr = [0, 1, 2, 3, 4].map(v => v !== value.style);
    const textInputs = this.memoizedInput(schema);
    const numberInputs = this.memoizedNumberInput(schema);
    const emailInputs = this.memoizedEmailInput(schema);
    const passwordInputs = this.memoizedPasswordInput(schema);
    const textareaInputs = this.memoizedTextarea(schema);
    const lovInputs = this.memoizedLov(schema);
    return (
      <BlockContainer id="inputs-config">
        <SectionTitle
          titleTail="Input"
          title="??????"
          style={{ marginTop: 24 }}
        />
        <ConfigItem
          name="input"
          title={intl.get("hzero.hzeroTheme.page.textField").d("???????????????")}
          simple
          items={textInputs}
          defaultSelected={value.input}
          onChange={handleChange("input")}
        />
        <ConfigItem
          name="money"
          title={intl.get("hzero.hzeroTheme.page.moneyField").d("???????????????")}
          simple
          items={this.getMoneyField(schema)}
          defaultSelected={value.input}
          onChange={handleChange("input")}
        />
        <ConfigItem
          name="email"
          title={intl.get("hzero.hzeroTheme.page.emailField").d("???????????????")}
          simple
          items={emailInputs}
          defaultSelected={value.input}
          onChange={handleChange("input")}
        />
        <ConfigItem
          name="password"
          cols={2}
          title={intl.get("hzero.hzeroTheme.page.password").d("???????????????")}
          items={passwordInputs}
          defaultSelected={value.input}
          onChange={handleChange("input")}
        />
        <ConfigItem
          name="number"
          simple
          title={intl.get("hzero.hzeroTheme.page.numberField").d("???????????????")}
          className="number"
          items={numberInputs}
          onChange={handleChange("input")}
          // disabledItems={disabledArr}
          defaultSelected={value.input}
        />
        <ConfigItem
          name="lov"
          simple
          title={intl.get("hzero.hzeroTheme.page.lov").d("??????????????????Lov???")}
          // title="???????????????(LOV)"
          className="number"
          items={lovInputs}
          onChange={handleChange("input")}
          defaultSelected={value.input}
        />
        <ConfigItem
          name="textarea"
          title={intl.get("hzero.hzeroTheme.page.textarea").d("??????????????????")}
          simple
          items={textareaInputs}
          onChange={handleChange("input")}
          // disabledItems={disabledArr}
          defaultSelected={value.input}
        />
        <ConfigItem
          name="formColor"
          className="motion-config"
          // title="????????????????????????????????????????????????????????????????????????"
          title={intl
            .get("hzero.hzeroTheme.page.requiredColorMsg")
            .d("????????????????????????????????????????????????????????????????????????")}
          items={this.getRequiredColor(schema)}
          defaultSelected={value.formColor}
          onChange={handleChange("formColor")}
          // onChange={handleChange("requiredStyle")}
        />
        <ConfigItem
          name="inputMotion"
          className="motion-config"
          title={
            <MotionTitle
              text={intl.get("hzero.hzeroTheme.page.animation").d("??????")}
            />
          }
          items={this.getMotions1(schema)}
          defaultSelected={value.inputMotion}
          onChange={handleChange("inputMotion")}
        />
        <ConfigItem
          name="inputMotion"
          className="motion-config"
          title={
            <MotionTitle
              text={intl.get("hzero.hzeroTheme.page.animation").d("??????")}
            />
          }
          items={this.getMotions2(schema)}
          defaultSelected={value.inputMotion}
          onChange={handleChange("inputMotion")}
        />
      </BlockContainer>
    );
  }
}
