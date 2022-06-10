const componentsList = [
  {
    category: "属性整体添加 测试页面",
    components: [
      {
        title: "可视化测试",
        path: "/test-view/main",
      },
      {
        title: "TextField关联测试",
        path: "/test-pages/text-field-about",
      },
      {
        title: "Badge 徽标",
        path: "/test-pages/badge",
      },
      {
        title: "Attachment 附件",
        path: "/test-pages/attachment",
      },
    ],
  },
  {
    category: "通用",
    components: [
      { title: "Button/pro 按钮/pro", path: "/comp/button" },
      { title: "Button/components 按钮", path: "/comp/button-components" },
      // { title: "Icon", path: "/comp/icon" },
      { title: "Card 卡片", path: "/comp/card" },
      { title: "Divider 分割线", path: "/comp/divider" },
      { title: "Typography 排版", path: "/comp/typography" },
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
      { title: "Formtest", path: "/comp/formtest" },
      { title: "Form/pro 表单/pro", path: "/comp/form-pro" },
      // { title: "Form/components", path: "/comp/form" },
      { title: "Input 输入框", path: "/comp/input" },
      { title: "Radio 单选框", path: "/comp/radio" },
      { title: "Range 滑块", path: "/comp/range" },
      { title: "Slider 滑动输入条", path: "/comp/slider" },
      { title: "CheckBox 平铺选择框", path: "/comp/checkbox" },
      { title: "Switch 开关", path: "/comp/switch" },
      { title: "Picker 选择框", path: "/comp/datepicker" },
      { title: "Select 选择器", path: "/comp/select" },
      { title: "TreeSelect 树形选择器", path: "/comp/treeSelect" },
      { title: "CascaderSelect 联级选择", path: "/comp/cascaderSelect" },
      { title: "Output 文本展示", path: "/comp/output" },
      { title: "Upload 上传", path: "/comp/upload" },
      { title: "RichText 富文本编辑器", path: "/comp/richtext" },
      { title: "imagecrop 图片裁剪", path: "/comp/imageCrop" },
    ],
  },
  {
    category: "数据展示",
    components: [
      { title: "Statistic 数值统计", path: "/comp/statistic" },
      { title: "Pagination 分页", path: "/comp/pagination" },
      { title: "Table 表格/pro", path: "/comp/table" },
      { title: "Table 动态筛选条", path: "/comp/dybar" },
      {
        title: "Performance Table 大数据表格",
        path: "/comp/performance-table",
      },
      // { title: "Table 表格/comp", path: "/comp/table-components" },
      { title: "List 列表", path: "/comp/list" },
      { title: "Transfer 穿梭框", path: "/comp/transfer" },
      { title: "Tabs 标签页", path: "/comp/tabs" },
      { title: "Tag 标签", path: "/comp/tag" },
      { title: "Steps 步骤条", path: "/comp/steps" },
      { title: "Timeline 时间轴", path: "/comp/timeline" },
      { title: "Tree 树形控件", path: "/comp/tree" },
      { title: "TreeCheck", path: "/comp/treeCheck" },
      { title: "Collapse 折叠面板", path: "/comp/collapse" },
      //     { title: "Carousel 走马灯", path: "/comp/carousel" },
      { title: "Badge 徽标数", path: "/comp/badge" },
      { title: "avatar 头像", path: "/comp/avatar" },
      { title: "Rate 评分", path: "/comp/rate" },
      { title: "BackTop 返回顶部", path: "/comp/BackTop" },
      // { title: "CodeArea 代码域", path: "/comp/codearea" },
    ],
  },
  {
    category: "反馈",
    components: [
      { title: "Progress 进度条", path: "/comp/progress" },
      { title: "spin 加载中", path: "/comp/spin" },
      { title: "Popconfirm 气泡确认框", path: "/comp/popconfirm" },
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
      { title: "Result 结果", path: "/comp/result" },
    ],
  },
];

export const menus = [
  // {
  //   title: "Hzero Front (hzero-ui)",
  //   icon: "home",
  //   path: "/introduce",
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
