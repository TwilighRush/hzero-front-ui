import { createThemeData } from '@hzero-front-ui/core';
import alertData from './data/alert';
import anchorData from './data/anchor';
import allAnimations from './data/animations';
import badgeData from './data/badge';
import buttonData from './data/button';
import carouselData from './data/carousel';
import cascaderData from './data/cascader';
import checkboxData from './data/checkbox';
import checkboxBtnData from './data/checkboxBtn';
import collapseData from './data/collapse';
import commonData from './data/common';
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

const themeData = createThemeData([
  collapseData,
  commonData,
  buttonData,
  badgeData,
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
  stepsData,
  stepsGroupData,
  carouselData,
  cascaderData,
  outputData,
  uploadData,
  timelineData,
  ...allAnimations,
]);

export default themeData;
