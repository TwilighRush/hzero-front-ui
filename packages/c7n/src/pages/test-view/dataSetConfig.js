import { DataSet } from "choerodon-ui/pro";
import TextField from "../../components/TextFieldPro";
import NumberField from "../../components/NumberFieldPro";
import EmailField from "../../components/EmailFieldPro";
import IntlField from "../../components/IntlFieldPro";
import UrlField from "../../components/UrlFieldPro";
import Password from "../../components/PasswordPro";
import Currency from "../../components/CurrencyPro";
import TextArea from "../../components/TextAreaPro";
import ColorPicker from "../../components/ColorPickerPro";
import DatePicker from "../../components/DatePickerPro";
import AutoComplete from "../../components/AutoCompletePro";
import Lov from "../../components/LovPro";
import SelectBox from "../../components/SelectBoxPro";
import TreeSelect from "../../components/TreeSelectPro";
import Transfer from "../../components/TransferPro";
import Select from "../../components/SelectPro";
import SecretField from "../../components/SecretFieldPro";
import Cascader from "../../components/CascaderPro";

import Range from "../../components/RangePro";

const selectOptionsDs = new DataSet({
  fields: [
    { name: "value", type: "string" },
    { name: "meaning", type: "string" },
  ],
  data: [
    { value: "jack", meaning: "Jack" },
    { value: "rose", meaning: "Rose" },
    { value: "wuhu", meaning: "wuhu" },
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
      value: "hand_wu",
      meaning: "1",
    },
    {
      value: "hand_cheng",
      meaning: "12",
    },
    {
      value: "hand_mao",
      meaning: "123",
    },
  ],
});

const treeNodeDs = new DataSet({
  autoQuery: true,
  idField: "id",
  parentField: "parentId",
  data: [
    {
      value: "1",
      id: "1",
      meaning: "parentId 1",
    },
    {
      value: "2",
      id: "2",
      meaning: "children 2",
      parentId: "1",
    },
    {
      value: "3",
      id: "3",
      meaning: "children 3",
      parentId: "1",
    },
    {
      value: "4",
      id: "4",
      meaning: "parentId 4",
    },
    {
      value: "5",
      id: "5",
      meaning: "children 5",
      parentId: "4",
    },
    {
      value: "6",
      id: "6",
      meaning: "children 6",
      parentId: "4",
    },
  ],
});

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

const textFieldCompsMap = new Map([
  [TextField, { label: "TextField" }],
  [NumberField, { label: "NumberField" }],
  [EmailField, { label: "EmailField" }],
  [IntlField, { label: "IntlField" }],
  [UrlField, { label: "UrlField" }],
  [Password, { label: "Password" }],
  [Currency, { label: "Currency" }],
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
  [TreeSelect, { label: "TreeSelect", options: treeNodeDs }],
  [Range, { label: "Range" }],
  [TextArea, { label: "TextArea" }],
  [Transfer, { options: selectOptionsDs, label: "Transfer" }],
  [Cascader, { label: "Cascader", options: cascaderOptions }],
]);

export { textFieldCompsMap };
