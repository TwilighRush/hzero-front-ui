import React from "react";
import {
  TextArea,
  NumberField,
  TextField,
  Select,
  Cascader,
} from "choerodon-ui/pro";

const { Option } = Select;

const getCascaderOption = (prop) => {
  const resComp = [];
  for (const item of prop.options) {
    const children = {
      value: item.key,
      meaning: item.name,
      children: item.options ? getCascaderOption(item) : undefined,
    };
    resComp.push(children);
  }
  return resComp;
};

function renderComp({ prop, panel, lang, formChange }) {
  let returnComp = <div />;
  switch (prop.type) {
    case "enumerate":
      returnComp = (
        <Select
          key={prop.name}
          name={prop.name}
          label={prop[lang]}
          onChange={(value) =>
            formChange({
              type: prop.type,
              header: panel.header,
              name: prop.name,
              value,
            })}
        />
      );
      break;
    case "cascader":
      returnComp = (
        <Cascader
          key={prop.name}
          name={prop.name}
          label={prop[lang]}
          options={getCascaderOption(prop)}
          onChange={(value) =>
            formChange({
              type: prop.type,
              header: panel.header,
              name: prop.name,
              value,
            })}
        />
      );
      break;
    case "string":
      returnComp = (
        <TextField
          key={prop.name}
          name={prop.name}
          label={prop[lang]}
          onChange={(value) =>
            formChange({
              type: prop.type,
              header: panel.header,
              name: prop.name,
              value,
            })}
        />
      );
      break;
    case "func":
    case "object":
    case "ReactNode":
    case "ReactNode[]":
      returnComp = (
        <TextArea
          key={prop.name}
          name={prop.name}
          label={prop[lang]}
          resize="vertical"
          autoSize={{ minRows: 2, maxRows: 5 }}
          placeholder={`该属性需要设置 ${prop.type} 类型`}
          onChange={(value) =>
            formChange({
              type: prop.type,
              header: panel.header,
              name: prop.name,
              value,
            })}
        />
      );
      break;
    case "boolean":
      returnComp = (
        <Select
          key={prop.name}
          name={prop.name}
          label={prop[lang]}
          onChange={(value) =>
            formChange({
              type: prop.type,
              header: panel.header,
              name: prop.name,
              value,
            })}
        >
          <Option value key={1}>
            True
          </Option>
          <Option value={false} key={0}>
            False
          </Option>
        </Select>
      );
      break;
    case "number":
      returnComp = (
        <NumberField
          key={prop.name}
          name={prop.name}
          label={prop[lang]}
          onChange={(value) =>
            formChange({
              type: prop.type,
              header: panel.header,
              name: prop.name,
              value,
            })}
        />
      );
      break;
    default:
      returnComp = (
        <TextArea
          key={prop.name}
          name={prop.name}
          label={prop[lang]}
          resize="vertical"
          autoSize={{ minRows: 2, maxRows: 5 }}
          placeholder={
            typeof prop.type === "object" && prop.type.length
              ? `该属性需要设置 ${prop.type.join(" 或者 ")} 类型`
              : undefined
          }
          onChange={(value) =>
            formChange({
              type: prop.type,
              header: panel.header,
              name: prop.name,
              value,
            })}
        />
      );
      break;
  }
  return returnComp;
}

export { renderComp };
