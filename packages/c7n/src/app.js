import { initTheme } from "@hzero-front-ui/core/lib/utils/store";
import { configure } from "choerodon-ui";
import { localeContext } from "choerodon-ui/pro";
// import { theme1, theme2, theme3, theme4, theme5 } from "@hzero-front-ui/themes";
import zhCN from "choerodon-ui/pro/lib/locale-context/zh_CN";
import "moment/locale/zh-cn";

import dynamicImportHzeroTemplate from "@hzero-front-ui/hzero-ui/src/components/themes/index1";
import dynamicImportC7nTemplate from "./components/themes/index1";

// import dynamicImportHzeroTemplate from "@hzero-front-ui/hzero-ui/src/components/themes/index";
// import dynamicImportC7nTemplate from "./components/themes/index";

// import "choerodon-ui/dist/choerodon-ui.css";
// import "choerodon-ui/dist/choerodon-ui-pro.css";
import { menus } from "./config/menu-config";
import "./index.css";

window.menus = menus;

localeContext.setLocale(zhCN);
configure({
  pagination: {
    showTotal: (total) => `共 ${total} 条`,
    pageSizeOptions: ["10 条/页", "20 条/页", "50 条/页", "100 条/页"],
    showSizeChangerLabel: false,
    sizeChangerPosition: "right",
    position: "bottom",
  },
  table: {
    highLightRow: false,
  },
  modalOkFirst: false,
  tableHighLightRow: false,
  selectTrigger: ["hover", "click"],
  showValidation: "newLine",
});

// const defaultTheme =
//   localStorage.getItem("__c7n__ui__debug__theme__") || "theme6";

initTheme({
  defaultTheme: "theme1",
  // defaultTheme: THEME_EMPTY,
  // scope: [
  //   "#root",
  //   '[class~="c7n-pro-popup-container"]',
  //   '[class~="c7n-pro-modal-container"]',
  //   ".c7n-modal",
  //   ".c7n-popover",
  // ],
  themes: [
    {
      name: "theme3",
      loadData: () =>
        import("@hzero-front-ui/themes/src/theme3").then((data) => ({
          ...(data.default || data),
        })),
    },
    {
      name: "theme1",
      loadData: () =>
        import("@hzero-front-ui/themes/src/theme1").then((data) => ({
          ...(data.default || data),
        })),
    },
    {
      name: "theme4",
      loadData: () =>
        import("@hzero-front-ui/themes/src/theme4").then((data) => ({
          ...(data.default || data),
        })),
    },
    {
      name: "theme5",
      loadData: () =>
        import("@hzero-front-ui/themes/src/theme5").then((data) => ({
          ...(data.default || data),
        })),
    },
    {
      name: "theme2",
      loadData: () =>
        import("@hzero-front-ui/themes/src/theme2").then((data) => ({
          ...(data.default || data),
        })),
    },

    // {
    //   name: "theme3",
    //   data: theme3,
    // },
    // {
    //   name: "theme1",
    //   data: theme1,
    // },
    // {
    //   name: "theme4",
    //   data: theme4,
    // },
    // {
    //   name: "theme5",
    //   data: theme5,
    // },
    // {
    //   name: "theme2",
    //   data: theme2,
    // },
  ],
  templates: [
    { id: "c7n", component: dynamicImportC7nTemplate },
    { id: "hzero", component: dynamicImportHzeroTemplate },
  ],
});
