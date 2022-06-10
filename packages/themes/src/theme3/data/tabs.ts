import { ComponentData } from '@hzero-front-ui/core';

const tabsData: ComponentData = {
  name: 'tabs',
  data: [
    {
      showInkBar: true,
      inkBarWidth: 12,
      hideBottomScale: true,
      inkBarBg: '#3889FF',
      activeFontColor: '#3889FF',
      tabFontSize: 12,
      tabFontColor: '#5a6677',
      tabPadding: '5px 0px',
      tabMargin: '6px 32px 1px 0',
      tabBorderWidth: 0,
      tabBorderColor: '',
      showLeftBorder: false,
      tabActiveBorderColor: '#3889FF',
      tabRadius: 2,
      verticalRightBorderWidth: 1,
      showVerticalRightBorder: true,
      showVerticalInk: true,
      verticalTabsWrapperBg: '',
      verticalActiveBg: '',
      verticalItemBottomMargin: 24,
      verticalItemHeight: '',
      lineBottomBorderColor: '#3889FF',
    },
  ],
};

const tabsCardData: ComponentData = {
  name: 'tabsCard',
  data: [
    {
      trapezium: false, // 是否是梯形Tab
      height: 35,
      margin: '0 6px 0 0',
      bg: '#f6f6f6',
      fontColor: '#4c4c4c',
      borderColor: '#eeeeee',
      fontSize: 14,
      radius: '6px 6px 0 0',
      activeFontColor: '#FFF',
      activeBg: '#3889FF',
      activeHeight: 35,
    },
  ],
};

export { tabsCardData, tabsData };
