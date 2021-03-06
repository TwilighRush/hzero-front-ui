import { createThemeData, getColorGradation } from '@hzero-front-ui/core';
import alertData from './data/alert';
import anchorData from './data/anchor';
import buttonData from './data/button';
import carouselData from './data/carousel';
import cascaderData from './data/cascader';
import checkboxData from './data/checkbox';
import checkboxBtnData from './data/checkboxBtn';
import commonData, { formColor } from './data/common';
import datePickerData from './data/datePicker';
import inputData from './data/input';
import listData from './data/list';
import menuData from './data/menu';
import modalData from './data/modal';
import notificationData from './data/notification';
import outputData from './data/output';
import paginationData from './data/pagination';
import popConfirmData from './data/popConfirm';
import { circleProgressData, lineProgressData } from './data/progress';
import radioData from './data/radio';
import radioBtnData from './data/radioBtn';
import selectData from './data/select';
import sliderData from './data/slider';
import spinData from './data/spin';
import stepsData, { stepsGroupData } from './data/steps';
import switchData from './data/switch';
import tableData from './data/table';
import { tabsCardData, tabsData } from './data/tabs';
import timelineData from './data/timeline';
import timePickerData from './data/timePicker';
import tooltipData from './data/tooltip';
import transferData from './data/transfer';
import { treeCheckData, treeData } from './data/tree';
import uploadData from './data/upload';
import tagData from './data/tag';
import avatarData from './data/avatar';
import formData from './data/form';
import selectBoxData from './data/selectBox';
import badgeData from './data/badge';
import collapseData from './data/collapse';
import commonDropdownData from './data/commonDropdown';
import dropdownData from './data/dropdown';
import breadcrumbData from './data/breadcrumb';
import RichTextData from './data/richtext';
import messageData from './data/message';
import cardData from './data/card';
import RateData from './data/rate';
import iconData from './data/icon';
import inputNumberData from './data/inputnumber';
const themeData = createThemeData(
  [
    commonDropdownData,
    avatarData,
    collapseData,
    commonData,
    badgeData,
    buttonData,
    inputData,
    checkboxData,
    selectData,
    checkboxBtnData,
    alertData,
    sliderData,
    radioBtnData,
    radioData,
    listData,
    anchorData,
    switchData,
    notificationData,
    transferData,
    popConfirmData,
    paginationData,
    modalData,
    treeData,
    treeCheckData,
    menuData,
    spinData,
    datePickerData,
    tableData,
    tooltipData,
    tabsData,
    tabsCardData,
    lineProgressData,
    circleProgressData,
    timePickerData,
    timelineData,
    stepsData,
    stepsGroupData,
    carouselData,
    cascaderData,
    formColor,
    formData,
    outputData,
    uploadData,
    tagData,
    selectBoxData,
    dropdownData,
    breadcrumbData,
    RichTextData,
    messageData,
    cardData,
    RateData,
    iconData,
    inputNumberData,
  ],
  {
    // @ts-ignore
    resolveModifyVars: ({ colors: { primary } = {} }) => {
      let result: any = {
        common: {},
      };
      if (primary) {
        const steps = getColorGradation(primary);
        Object.keys(steps).forEach((k) => {
          const key = `primary${k.split('step')[1]}`;
          result.common[key] = steps[k];
        });
        result.common.primary = primary;
      }
      return result;
    },
  }
);
// TODO: ?????????????????????????????????????????????
// themeData.__only__ = true;
export default themeData;
