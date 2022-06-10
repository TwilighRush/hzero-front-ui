import {
  createMainStyleComponent,
  defineGlobalVersion,
} from "@hzero-front-ui/core";
import common from "./CommonDropdown.style";

defineGlobalVersion(require("@hzero-front-ui/hzero-ui/package.json"));

const dynamicImportHzeroTemplate = createMainStyleComponent({
  name: "hzero-ui",
  styles: [
    {
      listenCompKey: "alert",
      loadCssData: () => import("./Alert.style"),
    },
    {
      listenCompKey: "anchor",
      loadCssData: () => import("./Anchor.style"),
    },
    {
      listenCompKey: "badge",
      loadCssData: () => import("./Badge.style"),
    },
    {
      listenCompKey: "breadcrumb",
      loadCssData: () => import("./Breadcrumb.style"),
    },
    {
      listenCompKey: "button",
      loadCssData: () => import("./Button.style"),
    },
    {
      listenCompKey: "card",
      loadCssData: () => import("./Card.style"),
    },
    {
      listenCompKey: "carousel",
      loadCssData: () => import("./Carousel.style"),
    },
    {
      listenCompKey: "cascader",
      loadCssData: () => import("./Cascader.style"),
    },
    {
      listenCompKey: "checkbox",
      loadCssData: () => import("./Checkbox.style"),
    },
    {
      listenCompKey: "collapse",
      loadCssData: () => import("./Collapse.style"),
    },
    {
      listenCompKey: "datepicker",
      loadCssData: () => import("./DatePicker.style"),
    },
    {
      listenCompKey: "drawer",
      loadCssData: () => import("./Drawer.style"),
    },
    {
      listenCompKey: "dropdown",
      loadCssData: () => import("./DropDown.style"),
    },
    {
      listenCompKey: "form",
      loadCssData: () => import("./Form.style"),
    },
    {
      listenCompKey: "input",
      loadCssData: () => import("./Input.style"),
    },
    {
      listenCompKey: "list",
      loadCssData: () => import("./List.style"),
    },
    {
      listenCompKey: "menu",
      loadCssData: () => import("./Menu.style"),
    },
    {
      listenCompKey: "message",
      loadCssData: () => import("./Message.style"),
    },
    {
      listenCompKey: "modal",
      loadCssData: () => import("./Modal.style"),
    },
    {
      listenCompKey: "notification",
      loadCssData: () => import("./Notification.style"),
    },
    {
      listenCompKey: "pagination",
      loadCssData: () => import("./Pagination.style"),
    },
    {
      listenCompKey: "popconfirm",
      loadCssData: () => import("./Popconfirm.style"),
    },
    {
      listenCompKey: "radio",
      loadCssData: () => import("./Radio.style"),
    },
    {
      listenCompKey: "select",
      loadCssData: () => import("./Select.style"),
    },
    {
      listenCompKey: "slider",
      loadCssData: () => import("./Slider.style"),
    },
    {
      listenCompKey: "spin",
      loadCssData: () => import("./Spin.style"),
    },
    {
      listenCompKey: "steps",
      loadCssData: () => import("./Steps.style"),
    },
    {
      listenCompKey: "switch",
      loadCssData: () => import("./Switch.style"),
    },
    {
      listenCompKey: "table",
      loadCssData: () => import("./Table.style"),
    },
    {
      listenCompKey: "tabs",
      loadCssData: () => import("./Tabs.style"),
    },
    {
      listenCompKey: "tag",
      loadCssData: () => import("./Tag.style"),
    },
    {
      listenCompKey: "timepicker",
      loadCssData: () => import("./TimePicker.style"),
    },
    {
      listenCompKey: "timeline",
      loadCssData: () => import("./Timeline.style"),
    },
    {
      listenCompKey: "tooltip",
      loadCssData: () => import("./Tooltip.style"),
    },
    {
      listenCompKey: "transfer",
      loadCssData: () => import("./Transfer.style"),
    },
    {
      listenCompKey: "tree",
      loadCssData: () => import("./Tree.style"),
    },
    {
      listenCompKey: "treeselect",
      loadCssData: () => import("./TreeSelect.style"),
    },
    {
      listenCompKey: "upload",
      loadCssData: () => import("./Upload.style"),
    },
    common,
  ],
});

dynamicImportHzeroTemplate.__is__buildin__ = true;

export default dynamicImportHzeroTemplate;
