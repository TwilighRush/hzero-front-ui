import {
  DataSet,
  TextField,
  NumberField,
  EmailField,
  IntlField,
  UrlField,
  Password,
  Currency,
  TextArea,
  // Cascader,
  ColorPicker,
  DatePicker,
  AutoComplete,
  Lov,
  SelectBox,
  TreeSelect,
  Transfer,
  Select,
  SecretField,
} from "choerodon-ui/pro/lib";
import Range from "../../../components/RangePro";

const { TreeNode } = TreeSelect;

const cascaderOptions = [
  {
    value: "zhejiang",
    meaning: "Zhejiang",
    children: [
      {
        value: "hangzhou",
        meaning: "Hangzhou",
        children: [
          {
            value: "xihu",
            meaning: "West Lake",
          },
        ],
      },
    ],
  },
  {
    value: "jiangsu",
    meaning: "Jiangsu",
    children: [
      {
        value: "nanjing",
        meaning: "Nanjing",
        children: [
          {
            value: "zhonghuamen",
            meaning: "Zhong Hua Men",
          },
        ],
      },
    ],
  },
];

const selectOptionsDs = new DataSet({
  fields: [
    { name: "value", type: "string" },
    { name: "meaning", type: "string" },
  ],
  data: [
    { value: "jack", meaning: "Jack" },
    { value: "rose", meaning: "Rose" },
    { value: "wuhu", meaning: "芜湖~" },
  ],
});

const autoCompleteOptionsDs = new DataSet({
  fields: [
    {
      name: "value",
      type: "string",
    },
    {
      name: "meaning",
      type: "string",
    },
  ],
  data: [
    {
      value: "1",
      meaning: "1",
    },
    {
      value: "12",
      meaning: "12",
    },
    {
      value: "123",
      meaning: "123",
    },
  ],
});

const treeSelectChildrenNode = (
  <TreeNode value="parent 1" title="parent 1">
    <TreeNode value="parent 1-0" title="parent 1-0">
      <TreeNode value="leaf1" title="my leaf" />
      <TreeNode value="leaf2" title="your leaf" />
    </TreeNode>
    <TreeNode value="parent 1-1" title="parent 1-1">
      <TreeNode value="sss" title={<b style={{ color: "#08c" }}>sss</b>} />
    </TreeNode>
  </TreeNode>
);
export const totalValues = {
  TextField: "这里是TextField",
  NumberField: 12345678910,
  EmailField: "8008208820@qq.com",
  IntlField: "IntlField",
  UrlField: "http://www.baidu.com",
  Password: "123456789abcA!",
  Currency: 88888888,
  TextArea:
    "风急天高猿啸哀，渚清沙白鸟飞回。无边落木萧萧下，不尽长江滚滚来。万里悲情常作客，百年多病独登台。艰难苦恨繁霜鬓，潦倒新停浊酒杯。",
  Cascader: "a/b/c",
  ColorPicker: "#80876a",
  DatePicker: "2021-07-05",
  Select: "select-value",
  Range: 10,
  AutoComplete: "123@qq.com",
  Lov: "Lov-content",
  SelectBox: "jack",
  Transfer: "jack",
  TreeSelect: "TreeSelect-content",
};

export const textFieldCompsMap = new Map([
  [TextField, { label: "TextField" }],
  [NumberField, { label: "NumberField" }],
  [EmailField, { label: "EmailField" }],
  [IntlField, { label: "IntlField" }],
  [UrlField, { label: "UrlField" }],
  [Password, { label: "Password" }],
  [Currency, { label: "Currency" }],
  // [Cascader, {label: "Cascader", options: cascaderOptions}],
  [ColorPicker, { label: "ColorPicker" }],
  [DatePicker, { label: "DatePicker" }],
  [Select, { label: "Select", options: selectOptionsDs }],
  [
    AutoComplete,
    {
      label: "AutoComplete",
      options: autoCompleteOptionsDs,
      optionRenderer: (item) => {
        return `${item.value}@qq.com`;
      },
    },
  ],
  [Lov, { label: "Lov" }],
  [SecretField, { label: "SecretField" }],
  [SelectBox, { label: "SelectBox", options: selectOptionsDs }],
  [TreeSelect, { label: "TreeSelect", children: treeSelectChildrenNode }],
  [Transfer, { options: selectOptionsDs, label: "Transfer" }],
  [TextArea, { label: "TextArea" }],
  [Range, { label: "Range" }],
]);
