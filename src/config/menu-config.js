const componentsList = [
  {
    category: "UED 功能测试",
    components: [
      {
        title: "HOC测试",
        path: "/hoc",
      },
    ],
  },
  {
    category: "通用",
    components: [
      { title: "Button/pro 按钮/pro", path: "/comp/button" },
      { title: "Button/components 按钮", path: "/comp/button-components" },
      { title: "Card 卡片", path: "/comp/card" },
    ],
  },
  {
    category: "导航",
    components: [
      { title: "Menu 菜单", path: "/comp/menu" },
      { title: "Anchor锚点", path: "/comp/anchor" },
      { title: "Breadcrumb 面包屑", path: "/comp/breadcrumb" },
      { title: "DropDown 下拉菜单", path: "/comp/dropDown" },
    ],
  },
  {
    category: "表单",
    components: [
      { title: "Form/pro 表单/pro", path: "/comp/form-pro" },
      { title: "Input 输入框", path: "/comp/input" },
      { title: "Radio 单选框", path: "/comp/radio" },
      { title: "CheckBox 平铺选择框", path: "/comp/checkbox" },
      { title: "Switch 开关", path: "/comp/switch" },
      { title: "Picker 选择框", path: "/comp/datepicker" },
      { title: "Select 选择器", path: "/comp/select" },
      { title: "TreeSelect 树形选择器", path: "/comp/treeSelect" },
      { title: "CascaderSelect 联级选择", path: "/comp/cascaderSelect" },
      { title: "Output 文本展示", path: "/comp/output" },
      { title: "Upload 上传", path: "/comp/upload" },
      { title: "RichText 富文本编辑器", path: "/comp/richtext" },
    ],
  },
  {
    category: "数据展示",
    components: [
      { title: "Pagination 分页", path: "/comp/pagination" },
      { title: "Table 表格/pro", path: "/comp/table" },
      {
        title: "Performance Table 大数据表格",
        path: "/comp/performance-table",
      },
      { title: "Transfer 穿梭框", path: "/comp/transfer" },
      { title: "Tabs 标签页", path: "/comp/tabs" },
      { title: "Tag 标签", path: "/comp/tag" },
      { title: "Steps 步骤条", path: "/comp/steps" },
      { title: "Timeline 时间轴", path: "/comp/timeline" },
      { title: "Tree 树形控件", path: "/comp/tree" },
      { title: "TreeCheck", path: "/comp/treeCheck" },
      { title: "Collapse 折叠面板", path: "/comp/collapse" },
      { title: "Badge 徽标数", path: "/comp/badge" },
      { title: "avatar 头像", path: "/comp/avatar" },
      { title: "Rate 评分", path: "/comp/rate" },
      { title: "BackTop 返回顶部", path: "/comp/BackTop" },
    ],
  },
  {
    category: "反馈",
    components: [
      { title: "PopConfirm 气泡确认框", path: "/comp/popConfirm" },
      { title: "Modal 模态框", path: "/comp/modal" },
      { title: "Skeleton 骨架屏", path: "/comp/skeleton" },
    ],
  },
  {
    category: "弹出层",
    components: [
      { title: "Alert 警告提示", path: "/comp/alert" },
      { title: "Message 全局提示", path: "/comp/message" },
      { title: "Notification 通知提示框", path: "/comp/notification" },
      { title: "Tooltip 文字提示", path: "/comp/tooltip" },
    ],
  },
];

export const menus = [
  {
    title: "组件",
    icon: "bars",
    routes: componentsList,
  },
];
