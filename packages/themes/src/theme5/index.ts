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
import { circleProgressData, lineProgressData, progressData } from './data/progress';
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
import iconData from './data/icon';
import iconPickerData from './data/iconPicker';
import inputNumberData from './data/inputnumber';
import skeletonData from './data/skeleton';
import resultData from './data/result';
import imageCropData from './data/imageCrop';
import RangeData from './data/range';
import RateData from './data/rate';
import StatisticData from './data/statistic';
import DividerData from './data/divider';
import AttachmentData from './data/attachment';
import screeningData from './data/screening';
import colorPickerData from './data/colorPicker';
import autoCompleteData from './data/autoComplete';
import TypographyData from './data/typography';
import performanceData from './data/performanceTable';
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
    iconData,
    iconPickerData,
    inputNumberData,
    skeletonData,
    resultData,
    imageCropData,
    RangeData,
    RateData,
    StatisticData,
    DividerData,
    AttachmentData,
    progressData,
    screeningData,
    colorPickerData,
    autoCompleteData,
    TypographyData,
    performanceData,
  ],
  {
    resolveModifyVars({ colors: { primary = '' } = {} }) {
      if (primary) {
        const gradation = getColorGradation(primary);
        return {
          common: {
            primary,
            primary1: gradation.step1,
            primary2: gradation.step2,
            primary3: gradation.step3,
            primary4: gradation.step4,
            primary5: gradation.step5,
            primary6: gradation.step6,
            primary7: gradation.step7,
            primary8: gradation.step8,
            primary9: gradation.step9,
          },
        };
      }
      return {};
    },
  }
);

// TODO: 后续版本优化，暂时作为解决方法
// themeData.__only__ = true;

export default themeData;
