import React from "react";
import { Form } from "hzero-ui";
import { ConfigStepContainer, StyledConfigRow } from "./index.style";
import PaginationConfig from "../ComponentsConfig/PaginationConfig";
import SliderConfig from "../ComponentsConfig/SliderConfig";
import SelectBoxConfig from "../ComponentsConfig/SelectBoxConfig";
import SwitchConfig from "../ComponentsConfig/SwitchConfig";
import TransferConfig from "../ComponentsConfig/TransferConfig";
import TreeSelectConfig from "../ComponentsConfig/TreeSelectConfig";

const ConfigStepTwo = ({ form, config }) => {
  const { getFieldDecorator } = form;
  return (
    <ConfigStepContainer>
      <StyledConfigRow>
        {getFieldDecorator("pagination", {
          initialValue: config.pagination,
        })(<PaginationConfig />)}
      </StyledConfigRow>
      <StyledConfigRow>
        {getFieldDecorator("slider", {
          initialValue: config.slider,
        })(<SliderConfig />)}
      </StyledConfigRow>
      <StyledConfigRow>
        {getFieldDecorator("selectBox", {
          initialValue: {
            radio: config.radio,
            checkbox: config.checkbox,
            checkboxBtn: config.checkboxBtn,
          },
        })(<SelectBoxConfig />)}
      </StyledConfigRow>
      <StyledConfigRow>
        {getFieldDecorator("switch", {
          initialValue: config.switch,
        })(<SwitchConfig />)}
      </StyledConfigRow>
      <StyledConfigRow>
        {getFieldDecorator("transfer", {
          initialValue: config.transfer,
        })(<TransferConfig />)}
      </StyledConfigRow>
      <StyledConfigRow>
        {getFieldDecorator("treeSelect", {
          initialValue: { tree: config.tree, treeCheck: config.treeCkeck },
        })(<TreeSelectConfig />)}
      </StyledConfigRow>
    </ConfigStepContainer>
  );
};

export default Form.create({
  onValuesChange(props, field, values) {
    const { selectBox, treeSelect, ...rest } = values;
    if (props.onChange) {
      props.onChange({
        ...rest,
        ...treeSelect,
        ...selectBox,
      });
    }
  },
})(ConfigStepTwo);
