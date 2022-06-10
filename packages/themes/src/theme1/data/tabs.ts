import { ComponentData } from '@hzero-front-ui/core';

const tabsData: ComponentData = {
  name: 'tabs',
  data: [
    {
      showInkBar: false,
      inkBarBg: '#4f7de7',
      activeFontColor: '#4f7de7',
      tabFontSize: 14,
      tabFontColor: '#5a6677',
      tabPadding: '12px 0',
      // tabMargin: "6px 0 1px 0",
      // tabBorderWidth: 1,
      // tabBorderColor: "rgba(0, 0, 0, 0.15)",
      // showLeftBorder: false,
      // tabActiveBorderColor: "#4f7de7",
      // tabRadius: 2,
      verticalRightBorderWidth: 2,
      showVerticalRightBorder: true,
      showVerticalInk: true,
      verticalTabsWrapperBg: '',
      verticalActiveBg: '',
      verticalItemBottomMargin: 24,
      verticalItemHeight: '',
      lineBottomBorderColor: '#4F7DE7',
    },
  ],
};

const tabsCardData: ComponentData = {
  name: 'tabsCard',
  data: [
    {
      margin: '',
      trapezium: false, // 是否是梯形Tab
      height: 38,
      bg: '#f6f6f6',
      fontColor: '#4c4c4c',
      borderColor: '#eeeeee',
      fontSize: 14,
      radius: 0,
      activeFontColor: '#1e3255',
      activeBg: '#fff',
      activeHeight: 38,
    },
  ],
};

export { tabsCardData, tabsData };
