import { initTheme } from "@hzero-front-ui/core";
import C7n from "@hzero-front-ui/c7n-ui/lib/themes/index1";
import template from "./components/themes/index1";
import { menus } from "./config/menu-config";
import "choerodon-ui/lib/configure";

window.menus = menus;

initTheme({
  defaultTheme: "theme5",
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
  ],
  templates: [
    { id: "hzero", component: template },
    { id: "c7n", component: C7n },
  ],
});
