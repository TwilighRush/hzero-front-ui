// import { createOptions } from "../index";
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
export const badgeAttrsList = [
  {
    name: "count",
    nickName: "徽标count值",
    type: "string",
    value: "10",
    flag: "true",
    bindFor: ["comp"],
  },
  {
    name: "dot",
    nickName: "徽标只显示小圆点",
    type: "boolean",
    value: "",
    flag: "false",
    bindFor: ["comp"],
  },
  {
    name: "offset",
    nickName: "徽标偏移(x,y)",
    type: "numberArray",
    value: [0, 0],
    flag: "true",
    bindFor: ["comp"],
  },
  {
    name: "overflowCount",
    nickName: "徽标最大值",
    type: "string",
    value: "20",
    flag: "true",
    bindFor: ["comp"],
  },
  {
    name: "showZero",
    nickName: "数值为0时，是否展示Badge",
    type: "boolean",
    value: "",
    flag: "false",
    bindFor: ["comp"],
  },
  {
    name: "status",
    nickName: "设置Badge为状态点",
    type: "enumerate",
    value: "success",
    flag: "true",
    bindFor: ["comp"],
    options: createOptions([
      { value: "success", meaning: "success" },
      { value: "processing", meaning: "processing" },
      { value: "default", meaning: "default" },
      { value: "error", meaning: "error" },
      { value: "warning", meaning: "warning" },
    ]),
  },
  {
    name: "color",
    nickName: "徽标颜色(优先级高于status)",
    type: "enumerate",
    value: "yellow",
    flag: "true",
    bindFor: ["comp"],
    options: createOptions([
      { value: "red", meaning: "red" },
      { value: "blue", meaning: "blue" },
      { value: "cyan", meaning: "cyan" },
      { value: "geekblue", meaning: "geekblue" },
      { value: "yellow", meaning: "yellow" },
    ]),
  },
  {
    name: "size",
    nickName: "大小选择",
    type: "enumerate",
    value: "default",
    flag: "true",
    bindFor: ["comp"],
    options: createOptions([
      { value: "default", meaning: "default" },
      { value: "small", meaning: "small" },
    ]),
  },
  {
    name: "title",
    nickName: "移入徽标触发",
    type: "string",
    value: "我是移入时显示的内容",
    flag: "true",
    bindFor: ["comp"],
  },
  {
    name: "text",
    nickName: "status开启时，设置状态点的文本",
    type: "string",
    value: "我是状态点的文本",
    flag: "false",
    bindFor: ["comp"],
  },
];

// 属性集合 ds
export const badgeAttrsDs = {
  pageSize: 100,
  fields: [
    { name: "name", type: FieldType.string, label: "属性" },
    { name: "nickName", type: FieldType.string, label: "描述" },
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
    { name: "value", type: FieldType.string, label: "值" },
    {
      name: "flag",
      type: FieldType.string,
      label: "阀门",
      options: createOptions([
        { value: "true", meaning: "开启" },
        { value: "false", meaning: "关闭" },
        { value: "default", meaning: "默认值" },
      ]),
    },
    { name: "bindFor", type: FieldType.string, label: "绑定", multiple: true },
  ],
  data: badgeAttrsList,
};
