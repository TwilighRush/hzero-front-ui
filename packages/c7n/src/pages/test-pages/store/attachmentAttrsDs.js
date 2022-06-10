import { DataSet } from "choerodon-ui/pro";
import { FieldType } from "choerodon-ui/pro/lib/data-set/enum";

export const optionsFields = [
  { name: "value", type: FieldType.string },
  { name: "meaning", type: FieldType.string },
];

export const createOptions = (data) => {
  return new DataSet({
    fields: optionsFields,
    data,
  });
};

// 属性集合 data
export const attachmentAttrsList = [
  {
    name: "type",
    // nickName: "showValidation",
    type: "enumerate",
    value: "button",
    flag: "false",
    bindFor: ["comp"],
    options: createOptions([
      { value: "button", meaning: "button" },
      { value: "submit", meaning: "submit" },
      { value: "reset", meaning: "reset" },
    ]),
  },
  {
    name: "color",
    // nickName: "showValidation",
    type: "enumerate",
    value: "red",
    flag: "false",
    bindFor: ["comp"],
    options: createOptions([
      { value: "primary", meaning: "primary" },
      { value: "blue", meaning: "blue" },
      { value: "yellow", meaning: "yellow" },
      { value: "red", meaning: "red" },
      { value: "dark", meaning: "dark" },
      { value: "green", meaning: "green" },
      { value: "purple", meaning: "purple" },
    ]),
  },
  {
    name: "viewMode",
    // nickName: "showValidation",
    type: "enumerate",
    value: "popup",
    flag: "false",
    bindFor: ["comp"],
    options: createOptions([
      { value: "popup", meaning: "popup" },
      { value: "list", meaning: "list" },
    ]),
  },
  {
    name: "tooltip",
    // nickName: "showValidation",
    type: "enumerate",
    value: "always",
    flag: "false",
    bindFor: ["comp"],
    options: createOptions([
      { value: "none", meaning: "none" },
      { value: "always", meaning: "always" },
      { value: "overflow", meaning: "overflow" },
    ]),
  },
  {
    name: "funcType",
    // nickName: "showValidation",
    type: "enumerate",
    value: "raised",
    flag: "false",
    bindFor: ["comp"],
    options: createOptions([
      { value: "flat", meaning: "flat" },
      { value: "raised", meaning: "raised" },
    ]),
  },
  {
    name: "loading",
    // nickName: "required",
    type: "boolean",
    value: "",
    flag: "false",
    bindFor: ["comp"],
  },
  {
    name: "block",
    // nickName: "required",
    type: "boolean",
    value: "",
    flag: "false",
    bindFor: ["comp"],
  },
  {
    name: "icon",
    // nickName: "placeholder",
    type: "string",
    value: "close",
    flag: "false",
    bindFor: ["comp"],
  },
  {
    name: "href",
    // nickName: "placeholder",
    type: "string",
    value: "https://open-hand.gitee.io/choerodon-ui/zh/tutorials/introduction",
    flag: "false",
    bindFor: ["comp"],
  },
  {
    name: "target",
    // nickName: "placeholder",
    type: "string",
    value: "_blank",
    flag: "false",
    bindFor: ["comp"],
  },
  {
    name: "onClick",
    // nickName: "renderer",
    type: "callback",
    value: () => "console.log('test')",
    flag: "false",
    bindFor: ["comp"],
  },
];

// 属性集合 ds
export const attachmentAttrsDs = {
  paging: false,
  fields: [
    { name: "name", type: FieldType.string, label: "属性" },
    // { name: "nickName", type: FieldType.string, label: "别名" },
    {
      name: "type",
      type: FieldType.string,
      label: "类型",
      options: createOptions([
        { value: "boolean", meaning: "布尔类型" },
        { value: "string", meaning: "字符串类型" },
        { value: "callBack", meaning: "回调函数" },
        { value: "ReactNode", meaning: "节点" },
      ]),
    },
    { name: "value", type: FieldType.string, label: "值", required: true },
    {
      name: "flag",
      type: FieldType.string,
      label: "阀门",
      options: createOptions([
        { value: "true", meaning: "开启" },
        { value: "false", meaning: "关闭" },
        { value: "default", meaning: "默认值" },
      ]),
      required: true,
    },
    { name: "bindFor", type: FieldType.string, label: "绑定", multiple: true },
  ],
  data: attachmentAttrsList,
};
