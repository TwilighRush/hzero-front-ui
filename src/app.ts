import 'choerodon-ui/dist/choerodon-ui.less';
import 'choerodon-ui/dist/choerodon-ui-pro.less';
import {
  theme1,
  theme2,
  theme3,
  theme4,
  theme5,
  theme6,
} from "@hzero-front-ui/themes/src";
import { initTheme } from "@hzero-front-ui/core/lib/utils/store";
import { configure } from "choerodon-ui";
import { localeContext } from 'choerodon-ui/pro';
import zh_CN from 'choerodon-ui/pro/lib/locale-context/zh_CN';
// @ts-ignore
import c7nTemplate from '@hzero-front-ui/c7n-ui/lib/themes';
import 'moment/locale/zh-cn';
// @ts-ignore
import { menus } from './config/menu-config';
import './assets/styles'
// @ts-ignore
window.menus = menus;

localeContext.setLocale(zh_CN);
configure({
  pagination: {
    showTotal: (total) => `共 ${total} 条`,
    pageSizeOptions: ["10 条/页", "20 条/页", "50 条/页", "100 条/页"],
    showSizeChangerLabel: false,
    sizeChangerPosition: "right" as any,
    position: "bottom" as any,
  },
  // table: {
  //   highLightRow: false,
  // },
  tableHighLightRow: false,
  selectTrigger: ["hover" as any],
});

const defaultTheme =
  window.localStorage.getItem("__c7n__ui__debug__theme__") || "theme6";

initTheme({
  defaultTheme: defaultTheme,
  themes: [
    { name: "theme1", data: theme1 },
    { name: "theme2", data: theme2 },
    { name: "theme3", data: theme3 },
    { name: "theme4", data: theme4 },
    { name: "theme5", data: theme5 },
    { name: "theme6", data: theme6 },
  ],
  templates: [{ id: "c7n", component: c7nTemplate }],
});
