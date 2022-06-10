import React from "react";
import { Form } from "hzero-ui";
import { ConfigStepContainer, StyledConfigRow } from "./index.style";
import ListConfig from "../ComponentsConfig/ListConfig";
import PromptConfig from "../ComponentsConfig/PromptConfig";
import CarouselConfig from "../ComponentsConfig/CarouselConfig";
import BadgeConfig from "../ComponentsConfig/BadgeConfig";

const ConfigStepThree = ({ form, config }) => {
  const { getFieldDecorator } = form;
  return (
    <ConfigStepContainer>
      <StyledConfigRow>
        {getFieldDecorator("list", {
          initialValue: config.list,
        })(<ListConfig />)}
      </StyledConfigRow>
      <StyledConfigRow>
        {getFieldDecorator("prompt", {
          initialValue: {
            alert: config.alert,
            notification: config.notification,
            tooltip: config.tooltip,
          },
        })(<PromptConfig />)}
      </StyledConfigRow>
      <StyledConfigRow>
        {getFieldDecorator("carousel", {
          initialValue: config.carousel,
        })(<CarouselConfig />)}
      </StyledConfigRow>
      <StyledConfigRow>
        {getFieldDecorator("badge", {
          initialValue: config.badge,
        })(<BadgeConfig />)}
      </StyledConfigRow>
    </ConfigStepContainer>
  );
};

export default Form.create({
  onValuesChange(props, field, values) {
    if (props.onChange) {
      const { list, prompt, carousel, badge } = values;
      props.onChange({
        carousel,
        badge,
        list,
        ...prompt,
      });
    }
  },
})(ConfigStepThree);
