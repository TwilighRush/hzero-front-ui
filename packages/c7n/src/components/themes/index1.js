import {
  createMainStyleComponent,
  defineGlobalVersion,
} from "@hzero-front-ui/core";
import dropdown from "./dropdown";
import icon from "./components/Icon.style";

defineGlobalVersion(require("@hzero-front-ui/c7n-ui/package.json"));

const dynamicImportC7nTemplate = createMainStyleComponent({
  name: "choerodon-ui",
  styles: [
    // components
    {
      listenCompKey: "alert",
      loadCssData: () => import("./components/Alert.style"),
    },
    {
      listenCompKey: "anchor",
      loadCssData: () => import("./components/Anchor.style"),
    },
    {
      listenCompKey: "avatar",
      loadCssData: () => import("./components/Avatar.style"),
    },
    {
      listenCompKey: "badge",
      loadCssData: () => import("./components/Badge.style"),
    },
    {
      listenCompKey: "breadcrumb",
      loadCssData: () => import("./components/Breadcrumb.style"),
    },
    {
      listenCompKey: "button",
      loadCssData: () => import("./components/Button.style"),
    },
    {
      listenCompKey: "card",
      loadCssData: () => import("./components/Card.style"),
    },
    {
      listenCompKey: "carousel",
      loadCssData: () => import("./components/Carousel.style"),
    },
    {
      listenCompKey: "cascader",
      loadCssData: () => import("./components/Cascader.style"),
    },
    {
      listenCompKey: "checkbox",
      loadCssData: () => import("./components/Checkbox.style"),
    },
    {
      listenCompKey: "collapse",
      loadCssData: () => import("./components/Collapse.style"),
    },
    {
      listenCompKey: "datePicker",
      loadCssData: () => import("./components/DatePicker.style"),
    },
    {
      listenCompKey: "divider",
      loadCssData: () => import("./components/Divider.style"),
    },
    {
      listenCompKey: "dropdown",
      loadCssData: () => import("./components/Dropdown.style"),
    },
    {
      listenCompKey: "form",
      loadCssData: () => import("./components/Form.style"),
    },
    {
      listenCompKey: "input",
      loadCssData: () => import("./components/FormInput.style"),
    },
    {
      listenCompKey: "imagecrop",
      loadCssData: () => import("./components/ImageCrop.style"),
    },
    {
      listenCompKey: "list",
      loadCssData: () => import("./components/List.style"),
    },
    {
      listenCompKey: "menu",
      loadCssData: () => import("./components/Menu.style"),
    },
    {
      listenCompKey: "message",
      loadCssData: () => import("./components/Message.style"),
    },
    {
      listenCompKey: "modal",
      loadCssData: () => import("./components/Modal.style"),
    },
    {
      listenCompKey: "notification",
      loadCssData: () => import("./components/Notification.style"),
    },
    {
      listenCompKey: "pagination",
      loadCssData: () => import("./components/Pagination.style"),
    },
    {
      listenCompKey: "popconfirm",
      loadCssData: () => import("./components/Popconfirm.style"),
    },
    {
      listenCompKey: "progress",
      loadCssData: () => import("./components/Progress.style"),
    },
    {
      listenCompKey: "radio",
      loadCssData: () => import("./components/Radio.style"),
    },
    {
      listenCompKey: "rate",
      loadCssData: () => import("./components/Rate.style"),
    },
    {
      listenCompKey: "result",
      loadCssData: () => import("./components/Result.style"),
    },
    {
      listenCompKey: "select",
      loadCssData: () => import("./components/Select.style"),
    },
    {
      listenCompKey: "skeleton",
      loadCssData: () => import("./components/Skeleton.style"),
    },
    {
      listenCompKey: "slider",
      loadCssData: () => import("./components/Slider.style"),
    },
    {
      listenCompKey: "spin",
      loadCssData: () => import("./components/Spin.style"),
    },
    {
      listenCompKey: "statistic",
      loadCssData: () => import("./components/Statistic.style"),
    },
    {
      listenCompKey: "steps",
      loadCssData: () => import("./components/Steps.style"),
    },
    {
      listenCompKey: "switch",
      loadCssData: () => import("./components/Switch.style"),
    },
    {
      listenCompKey: "table",
      loadCssData: () => import("./components/Table.style"),
    },
    {
      listenCompKey: "tabs",
      loadCssData: () => import("./components/Tabs.style"),
    },
    {
      listenCompKey: "tag",
      loadCssData: () => import("./components/Tag.style"),
    },
    {
      listenCompKey: "timeline",
      loadCssData: () => import("./components/Timeline.style"),
    },
    {
      listenCompKey: "timePicker",
      loadCssData: () => import("./components/TimePicker.style"),
    },
    {
      listenCompKey: "tooltip",
      loadCssData: () => import("./components/Tooltip.style"),
    },
    {
      listenCompKey: "transfer",
      loadCssData: () => import("./components/Transfer.style"),
    },
    {
      listenCompKey: "tree",
      loadCssData: () => import("./components/Tree.style"),
    },
    {
      listenCompKey: "treeSelect",
      loadCssData: () => import("./components/TreeSelect.style"),
    },
    {
      listenCompKey: "upload",
      loadCssData: () => import("./components/Upload.style"),
    },
    // pro
    {
      listenCompKey: "attachmentPro",
      loadCssData: () => import("./pro/Attachment.style"),
    },
    {
      listenCompKey: "autoCompletePro",
      loadCssData: () => import("./pro/AutoComplete.style"),
    },
    {
      listenCompKey: "buttonPro",
      loadCssData: () => import("./pro/Button.style"),
    },
    {
      listenCompKey: "cascaderPro",
      loadCssData: () => import("./pro/Cascader.style"),
    },
    {
      listenCompKey: "checkboxPro",
      loadCssData: () => import("./pro/Checkbox.style"),
    },
    {
      listenCompKey: "checkboxBtnPro",
      loadCssData: () => import("./pro/CheckboxBtn.style"),
    },
    {
      listenCompKey: "colorPickerPro",
      loadCssData: () => import("./pro/ColorPicker.style"),
    },
    {
      listenCompKey: "datePickerPro",
      loadCssData: () => import("./pro/DatePicker.style"),
    },
    {
      listenCompKey: "dropdownPro",
      loadCssData: () => import("./pro/Dropdown.style"),
    },
    {
      listenCompKey: "formPro",
      loadCssData: () => import("./pro/Form.style"),
    },
    {
      listenCompKey: "inputPro",
      loadCssData: () => import("./pro/FormInputs.style"),
    },
    {
      listenCompKey: "iconPickerPro",
      loadCssData: () => import("./pro/IconPicker.style"),
    },
    {
      listenCompKey: "modalPro",
      loadCssData: () => import("./pro/Modal.style"),
    },
    {
      listenCompKey: "outputPro",
      loadCssData: () => import("./pro/Output.style"),
    },
    {
      listenCompKey: "paginationPro",
      loadCssData: () => import("./pro/Pagination.style"),
    },
    {
      listenCompKey: "performanceTablePro",
      loadCssData: () => import("./pro/PerformanceTable.style"),
    },
    {
      listenCompKey: "radioPro",
      loadCssData: () => import("./pro/Radio.style"),
    },
    {
      listenCompKey: "rangePro",
      loadCssData: () => import("./pro/Range.style"),
    },
    {
      listenCompKey: "richtextPro",
      loadCssData: () => import("./pro/RichText.style"),
    },
    {
      listenCompKey: "screeningPro",
      loadCssData: () => import("./pro/Screening.style"),
    },
    {
      listenCompKey: "selectPro",
      loadCssData: () => import("./pro/Select.style"),
    },
    {
      listenCompKey: "selectBoxPro",
      loadCssData: () => import("./pro/SelectBox.style"),
    },
    {
      listenCompKey: "switchPro",
      loadCssData: () => import("./pro/Switch.style"),
    },
    {
      listenCompKey: "tablePro",
      loadCssData: () => import("./pro/Table.style"),
    },
    {
      listenCompKey: "tooltipPro",
      loadCssData: () => import("./pro/Tooltip.style"),
    },
    {
      listenCompKey: "transferPro",
      loadCssData: () => import("./pro/Transfer.style"),
    },
    {
      listenCompKey: "typographyPro",
      loadCssData: () => import("./pro/Typography.style"),
    },
    dropdown,
    icon,
  ],
});

dynamicImportC7nTemplate.__is__buildin__ = true;

export default dynamicImportC7nTemplate;
