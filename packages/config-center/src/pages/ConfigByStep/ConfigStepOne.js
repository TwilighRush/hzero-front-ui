import React from "react";
import { ConfigStepContainer, StyledConfigRow } from "./index.style";
import ButtonConfig from "../ComponentsConfig/ButtonConfig";
import FormInputConfig from "../ComponentsConfig/FormInputConfig";
import SelectConfig from "../ComponentsConfig/SelectConfig";
import CascaderConfig from "../ComponentsConfig/CascaderConfig";

const ConfigStepOne = ({ config, onChange }) => {
  const handleChange = (name, value) => {
    let result = {};
    if (name === "input") {
      result = {
        ...value,
        select: value.input,
      };
    } else if (name === "select") {
      result = {
        input: value.select,
        ...value,
      };
    } else if (name === "cascader") {
      result = {
        cascader: value,
      };
    } else {
      result = {
        ...value,
      };
    }
    if (onChange) {
      onChange(result);
    }
  };
  return (
    <ConfigStepContainer className="config-step-container">
      <StyledConfigRow>
        <ButtonConfig
          value={{
            button: config.button,
            buttonMotion: config.buttonMotion,
            buttonMotion2: config.buttonMotion2,
          }}
          onChange={e => handleChange("button", e)}
        />
      </StyledConfigRow>
      <StyledConfigRow>
        <FormInputConfig
          value={{
            input: config.input,
            inputMotion: config.inputMotion,
            formColor: config.formColor,
          }}
          onChange={e => handleChange("input", e)}
        />
      </StyledConfigRow>
      <StyledConfigRow>
        <SelectConfig
          value={{
            select: config.select,
            inputMotion: config.inputMotion,
            dropdownMotion: config.dropdownMotion,
          }}
          onChange={e => handleChange("select", e)}
        />
      </StyledConfigRow>
      <StyledConfigRow>
        <CascaderConfig
          value={config.cascader}
          onChange={e => handleChange("cascader", e)}
        />
      </StyledConfigRow>
    </ConfigStepContainer>
  );
};
export default ConfigStepOne;
