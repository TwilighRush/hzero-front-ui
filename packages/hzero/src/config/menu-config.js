const componentsList = [
  {
    category: "通用",
    components: [
      { title: "Button 按钮", path: "/comp/button" },
      // { title: "Icons", path: "/comp/icon" },
    ],
  },
  {
    category: "导航",
    components: [
      { title: "BreadCrumb 面包屑", path: "/comp/breadcrumb" },
      { title: "Dropdown 下拉菜单", path: "/comp/dropDown" },
      { title: "Menu 导航菜单", path: "/comp/menu" },
      { title: "Pagination 分页", path: "/comp/pagination" },
      { title: "Steps 步骤条", path: "/comp/steps" },
    ],
  },
  {
    category: "表单",
    components: [
      { title: "Rate评分", path: "/comp/rate" },
      { title: "Checkbox 多选", path: "/comp/checkbox" },
      { title: "Radio 单选", path: "/comp/radio" },
      { title: "Switch 开关", path: "/comp/switch" },
      { title: "Slider 滑块", path: "/comp/slider" },
      { title: "Transfer 穿梭框", path: "/comp/transfer" },
      { title: "Upload 上传", path: "/comp/upload" },
      { title: "Input 输入框", path: "/comp/input" },
      { title: "InputNumber 数字输入框", path: "/comp/inputNumber" },
      { title: "Select 下拉选择", path: "/comp/select" },
      { title: "DatePicker 日期选择器", path: "/comp/date-picker" },
      { title: "TimePicker 时间选择器", path: "/comp/time-picker" },
      { title: "Form 表单", path: "/comp/form" },
    ],
  },
  {
    category: "数据展示",
    components: [
      { title: "Avatar 头像", path: "/comp/avatar" },
      { title: "Badge 徽标数", path: "/comp/badge" },
      { title: "Collapse 折叠面板", path: "/comp/collapse" },
      { title: "Carousel 走马灯", path: "/comp/carousel" },
      { title: "Card 卡片", path: "/comp/card" },
      { title: "List 列表", path: "/comp/list" },
      { title: "Tag 标签", path: "/comp/tag" },
      { title: "Tabs 标签页", path: "/comp/tabs" },
      { title: "Timeline 时间轴", path: "/comp/timeline" },
      { title: "Tree 树形控件", path: "/comp/tree" },
      { title: "Tree Check树形多选", path: "/comp/treeCheck" },
      { title: "Table 表单", path: "/comp/table" },
    ],
  },
  {
    category: "反馈",
    components: [
      { title: "Progress 进度条", path: "/comp/progress" },
      { title: "Spin 加载中", path: "/comp/spin" },
      { title: "popconfirm 气泡确认框", path: "/comp/popconfirm" },
      { title: "Modal 对话框", path: "/comp/modal" },
      { title: "Alert 警告提示", path: "/comp/alert" },
      { title: "Notification 通知提示框", path: "/comp/notification" },
      { title: "Tooltip 文字提示", path: "/comp/tooltip" },
      { title: "Message 全局提示", path: "/comp/message" },
    ],
  },
  {
    category: "其他",
    components: [
      { title: "Anchor锚点", path: "/comp/anchor" },
      { title: "BackTop 返回顶部", path: "/comp/backTop" },
    ],
  },
];

export const menus = [
  // {
  //   title: "配置中心",
  //   icon: "setting",
  //   path: "/config-index",
  // },
  // {
  //   title: "快速开始",
  //   icon: "smile-o",
  //   path: "/quick-start",
  // },
  {
    title: "组件",
    icon: "bars",
    routes: componentsList,
  },
];
