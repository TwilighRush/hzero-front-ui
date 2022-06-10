import {
  createMainStyleComponent,
  defineGlobalVersion,
} from "@hzero-front-ui/core";
import button from "./Button.style";
import alert from "./Alert.style";
import anchor from "./Anchor.style";
import badge from "./Badge.style";
import breadcrumb from "./Breadcrumb.style";
import card from "./Card.style";
import carousel from "./Carousel.style";
import cascader from "./Cascader.style";
import checkbox from "./Checkbox.style";
import collapse from "./Collapse.style";
import datePicker from "./DatePicker.style";
import form from "./Form.style";
import input from "./Input.style";
import list from "./List.style";
import menu from "./Menu.style";
import modal from "./Modal.style";
import notification from "./Notification.style";
import pagination from "./Pagination.style";
import popconfirm from "./Popconfirm.style";
import radio from "./Radio.style";
import select from "./Select.style";
import slider from "./Slider.style";
import spin from "./Spin.style";
import steps from "./Steps.style";
import switchStyle from "./Switch.style";
import table from "./Table.style";
import tabs from "./Tabs.style";
import tag from "./Tag.style";
import timeline from "./Timeline.style";
import timePicker from "./TimePicker.style";
import tooltip from "./Tooltip.style";
import transfer from "./Transfer.style";
import tree from "./Tree.style";
import dropdown from "./DropDown.style";
import upload from "./Upload.style";
import message from "./Message.style";
import commonDropdown from "./CommonDropdown.style";
import drawer from "./Drawer.style";
import treeselect from "./TreeSelect.style";

defineGlobalVersion(require("@hzero-front-ui/hzero-ui/package.json"));

const HzeroTemplate = createMainStyleComponent({
  name: "hzero-ui",
  styles: [
    alert,
    anchor,
    badge,
    breadcrumb,
    button,
    card,
    carousel,
    cascader,
    checkbox,
    collapse,
    commonDropdown,
    datePicker,
    drawer,
    dropdown,
    form,
    input,
    list,
    menu,
    message,
    modal,
    notification,
    pagination,
    popconfirm,
    radio,
    select,
    slider,
    spin,
    steps,
    switchStyle,
    table,
    tabs,
    tag,
    timeline,
    timePicker,
    tooltip,
    transfer,
    tree,
    treeselect,
    upload,
  ],
});

HzeroTemplate.__is__buildin__ = true;

export default HzeroTemplate;
