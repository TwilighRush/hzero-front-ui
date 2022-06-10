const textFieldProps = [
  {
    header: "通用配置",
    props: [
      {
        name: "state/DataSet",
        cnName: "受控/数据源",
        type: "enumerate",
        options: ["受控", "数据源"],
        defaultValue: "受控",
      },
      {
        name: "formColumns",
        cnName: "表单列数",
        type: "enumerate",
        options: [1, 2, 3, 4],
        defaultValue: 2,
      },
      {
        name: "labelLayout",
        cnName: "标签布局",
        type: "enumerate",
        options: ["horizontal", "vertical", "placeholder", "float", "none"],
        defaultValue: "horizontal",
      },
      {
        name: "labelAlign",
        cnName: "标签对齐方式",
        type: "enumerate",
        options: ["right", "left"],
        defaultValue: "right",
      },
      {
        name: "labelWidth",
        cnName: "标签宽度",
        type: "enumerate",
        options: [60, 70, 90, "auto"],
        defaultValue: "auto",
      },
    ],
  },
  {
    header: "数据源属性",
    props: [
      {
        name: "selection",
        cnName: "选择模式",
        type: "enumerate",
        options: ["multiple", "single", "false"],
      },
    ],
  },
  {
    header: "组件属性",
    props: [
      {
        name: "showValidation",
        cnName: "提示方式",
        type: "enumerate",
        options: ["tootip", "newLine"],
      },
      {
        name: "renderer",
        cnName: "渲染函数",
        type: "func",
      },
      {
        name: "useColon",
        cnName: "使用冒号",
        type: "boolean",
      },
      {
        name: "clearButton",
        cnName: "清楚按钮",
        type: "boolean",
      },
      {
        name: "autoComplete",
        cnName: "自动完成",
        type: "boolean",
      },
      {
        name: "showLengthInfo",
        cnName: "显示长度信息",
        type: "boolean",
      },
      {
        name: "dropdownMatchSelectWidth",
        cnName: "使用冒下拉框匹配输入框宽度号",
        type: "boolean",
      },
      {
        name: "searchable",
        cnName: "是否可搜索",
        type: "boolean",
      },
      {
        name: "combo",
        cnName: "复合输入值",
        type: "boolean",
      },
      {
        name: "reverse",
        cnName: "是否反转",
        type: "boolean",
      },
      {
        name: "selectAllButton",
        cnName: "多选模式",
        type: "boolean",
      },
      {
        name: "searchFieldInPopup",
        cnName: "气泡中搜索字段",
        type: "boolean",
      },
      {
        name: "vertical",
        cnName: "是否垂直",
        type: "boolean",
      },
      {
        name: "treeCheckable",
        cnName: "树形可选择",
        type: "boolean",
      },
      {
        name: "keyboard",
        cnName: "是否启用键盘事件",
        type: "boolean",
      },
      {
        name: "placeholder",
        cnName: "提示",
        type: ["string", "object"],
      },
      {
        name: "prefix",
        cnName: "前缀",
        type: "ReactNode",
      },
      {
        name: "suffix",
        cnName: "后缀",
        type: "ReactNode",
      },
      {
        name: "addonBefore",
        cnName: "前置标签",
        type: ["string", "ReactNode"],
      },
      {
        name: "addonBeforeStyle",
        cnName: "前置标签样式",
        type: "object",
      },
      {
        name: "addonAfter",
        cnName: "后置标签",
        type: ["string", "ReactNode"],
      },
      {
        name: "addonAfterStyle",
        cnName: "后置标签样式",
        type: "object",
      },
      {
        name: "highlightRenderer",
        cnName: "高亮渲染",
        type: "func",
      },
      {
        name: "footer",
        cnName: "底部渲染",
        type: "func",
      },
      {
        name: "showHelp",
        cnName: "显示帮助按钮方式",
        type: "enumerate",
        options: ["none", "label", "tooltip", "newLine"],
      },
      {
        name: "menuMode",
        cnName: "菜单模式",
        type: "enumerate",
        options: ["single", "multiple"],
      },
      {
        name: "mode",
        cnName: "模式",
        type: "cascader",
        options: [
          {
            key: "DatePicker",
            name: "DatePicker",
            options: [
              { key: "date", name: "date" },
              { key: "dateTime", name: "dateTime" },
              { key: "time", name: "time" },
              { key: "year", name: "year" },
              { key: "month", name: "month" },
              { key: "week", name: "week" },
            ],
          },
          {
            key: "SelectBox",
            name: "SelectBox",
            options: [
              { key: "box", name: "box" },
              { key: "SelectBox_button", name: "button" },
            ],
          },
          {
            key: "Lov",
            name: "Lov",
            options: [
              { key: "default", name: "default" },
              { key: "Lov_button", name: "button" },
            ],
          },
        ],
      },
      {
        name: "timeZone",
        cnName: "时区显示",
        type: "string",
      },
      {
        name: "type",
        cnName: "类型",
        type: "enumerate",
        options: ["singleLine", "multipleLine"],
      },
      {
        name: "resize",
        cnName: "调整方式",
        type: "enumerate",
        options: ["none", "both", "vertical", "horizontal"],
      },
      {
        name: "onResize",
        cnName: "改变大小函数",
        type: "func",
      },
      {
        name: "cols",
        cnName: "列数",
        type: "number",
      },
      {
        name: "rows",
        cnName: "行数",
        type: "number",
      },
      {
        name: "autoSize",
        cnName: "自动大小",
        type: ["boolean", "object"],
      },
      {
        name: "sortable",
        cnName: "可排序",
        type: "boolean",
      },
      {
        name: "titles",
        cnName: "标题",
        type: "ReactNode[]",
      },
      {
        name: "expandTrigger",
        cnName: "次级菜单的展开方式",
        type: "enumerate",
        options: ["click", "hover"],
      },
      {
        name: "dropdownMenuStyle",
        cnName: "下拉框菜单样式",
        type: "object",
      },
      {
        name: "primitiveValue",
        cnName: "是否为原始值",
        type: "boolean",
      },
      {
        name: "notFoundContent",
        cnName: "下拉列表为空时显示的内容",
        type: ["object", "string"],
      },
      {
        name: "onOption",
        cnName: "设置选项属性",
        type: "func",
      },
    ],
  },
  {
    header: "Field 属性",
    props: [
      {
        name: "multiple",
        cnName: "可多选",
        type: "boolean",
      },
      {
        name: "lovCode",
        cnName: "Lov值码",
        type: "string",
      },
      {
        name: "lovDefineUrl",
        cnName: "Lov默认地址",
        type: "string",
      },
      {
        name: "lovQueryUrl",
        cnName: "Lov查询地址",
        type: "string",
      },
      {
        name: "format",
        cnName: "格式化",
        type: "enumerate",
        options: ["HH:mm", "HH:mm:ss", "YYYY-MM-DD"],
      },
    ],
  },
  {
    header: "数据源/组件 属性",
    props: [
      {
        name: "required",
        cnName: "是否必输",
        type: "boolean",
      },
      {
        name: "help",
        cnName: "提示信息",
        type: "string",
      },
      {
        name: "readOnly",
        cnName: "是否只读",
        type: "boolean",
      },
      {
        name: "disabled",
        cnName: "是否禁用",
        type: "boolean",
      },
      {
        name: "highlight",
        cnName: "是否高亮",
        type: "boolean",
      },
      {
        name: "range",
        cnName: "范围",
        type: ["boolean", "object"],
      },
      {
        name: "viewMode",
        cnName: "显示模式",
        type: "enumerate",
        options: ["modal", "popup", "drawer"],
      },
      {
        name: "step",
        cnName: "步距",
        type: "number",
      },
      {
        name: "maxLength",
        cnName: "最大长度",
        type: "number",
      },
      {
        name: "currency",
        cnName: "金额单位",
        type: "enumerate",
        options: ["CNY", "EUR", "USD"],
      },
    ],
  },
];

const defaultPropsValue = textFieldProps.map((x) => {
  const resProps = {};
  for (const item of x.props) {
    resProps[item.name] = item.value || item.defaultValue || undefined;
  }
  return { name: x.header, props: resProps };
});

export { textFieldProps, defaultPropsValue };
