import {
  createMainStyleComponent,
  defineGlobalVersion,
} from "@hzero-front-ui/core";

import attachmentPro from "./pro/Attachment.style";
import autoCompletePro from "./pro/AutoComplete.style";
import buttonPro from "./pro/Button.style";
import cascaderPro from "./pro/Cascader.style";
import checkboxPro from "./pro/Checkbox.style";
import checkboxBtnPro from "./pro/CheckboxBtn.style";
import colorPickerPro from "./pro/ColorPicker.style";
import datePickerPro from "./pro/DatePicker.style";
import dropdownPro from "./pro/Dropdown.style";
import formPro from "./pro/Form.style";
import inputPro from "./pro/FormInputs.style";
import iconPickerPro from "./pro/IconPicker.style";
import modalPro from "./pro/Modal.style";
import output from "./pro/Output.style";
import paginationPro from "./pro/Pagination.style";
import performanceTable from "./pro/PerformanceTable.style";
import radioPro from "./pro/Radio.style";
import rangePro from "./pro/Range.style";
import richtextPro from "./pro/RichText.style";
import screeningPro from "./pro/Screening.style";
import selectPro from "./pro/Select.style";
import selectBoxPro from "./pro/SelectBox.style";
import switchPro from "./pro/Switch.style";
import tablePro from "./pro/Table.style";
import tooltipPro from "./pro/Tooltip.style";
import transferPro from "./pro/Transfer.style";
import typographyPro from "./pro/Typography.style";
// components

import alert from "./components/Alert.style";
import anchor from "./components/Anchor.style";
import avatar from "./components/Avatar.style";
import badge from "./components/Badge.style";
import breadcrumb from "./components/Breadcrumb.style";
import button from "./components/Button.style";
import card from "./components/Card.style";
import carousel from "./components/Carousel.style";
import cascader from "./components/Cascader.style";
import checkbox from "./components/Checkbox.style";
import collapse from "./components/Collapse.style";
import datePicker from "./components/DatePicker.style";
import divider from "./components/Divider.style";
import dropdown from "./components/Dropdown.style";
import form from "./components/Form.style";
import input from "./components/FormInput.style";
import Icon from "./components/Icon.style";
import imageCrop from "./components/ImageCrop.style";
import list from "./components/List.style";
import menu from "./components/Menu.style";
import message from "./components/Message.style";
import modal from "./components/Modal.style";
import notification from "./components/Notification.style";
import pagination from "./components/Pagination.style";
import popconfirm from "./components/Popconfirm.style";
import progress from "./components/Progress.style";
import radio from "./components/Radio.style";
import rate from "./components/Rate.style";
import result from "./components/Result.style";
import select from "./components/Select.style";
import skeleton from "./components/Skeleton.style";
import slider from "./components/Slider.style";
import spin from "./components/Spin.style";
import statistic from "./components/Statistic.style";
import steps from "./components/Steps.style";
import switchComp from "./components/Switch.style";
import table from "./components/Table.style";
import tabs from "./components/Tabs.style";
import tag from "./components/Tag.style";
import timeline from "./components/Timeline.style";
import timePicker from "./components/TimePicker.style";
import tooltip from "./components/Tooltip.style";
import transfer from "./components/Transfer.style";
import tree from "./components/Tree.style";
import treeSelect from "./components/TreeSelect.style";
import upload from "./components/Upload.style";
import allDropdown from "./dropdown";

defineGlobalVersion(require("@hzero-front-ui/c7n-ui/package.json"));

const C7nTemplate = createMainStyleComponent({
  name: "choerodon-ui",
  // transformThemeData,
  styles: [
    allDropdown,
    autoCompletePro,
    colorPickerPro,
    dropdownPro,
    screeningPro,
    cascader,
    collapse,
    progress,
    dropdown,
    attachmentPro,
    buttonPro,
    cascaderPro,
    checkboxPro,
    checkboxBtnPro,
    datePickerPro,
    formPro,
    inputPro,
    iconPickerPro,
    modalPro,
    paginationPro,
    performanceTable,
    radioPro,
    rangePro,
    selectPro,
    selectBoxPro,
    switchPro,
    tablePro,
    tooltipPro,
    transferPro,
    alert,
    anchor,
    badge,
    button,
    breadcrumb,
    card,
    carousel,
    checkbox,
    datePicker,
    form,
    input,
    list,
    menu,
    modal,
    notification,
    pagination,
    popconfirm,
    radio,
    select,
    skeleton,
    slider,
    spin,
    steps,
    switchComp,
    table,
    tabs,
    tag,
    timeline,
    timePicker,
    tooltip,
    transfer,
    tree,
    treeSelect,
    upload,
    avatar,
    message,
    output,
    richtextPro,
    rate,
    Icon,
    result,
    imageCrop,
    statistic,
    divider,
    attachmentPro,
    typographyPro,
  ],
});

C7nTemplate.__is__buildin__ = true;

export default C7nTemplate;
