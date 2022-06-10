import { ComponentData } from '@hzero-front-ui/core';
import tabsStyle from '../templates/Tabs.style';
import tabsHzeroStyle from '../templates-hzero/Tabs.style';
const tabsData: ComponentData = {
  name: 'tabs',
  data: [
    {
      verticalItemHeight: 22,
      tabRadius: 2,
      tabFontSize: 14,
      tabFontSize12: 12,
      tabFontSize120: 20,
      barBottomBorder: 'none',
      showInkBar: true,
      bottom: '2px',
      radius: '0px',
      zIndex: '10',
      tabMargin: '0px 16px 1px 0',
      height: '2px',
      marginTop: 8,
      marginBottom: 16,
      tabColor: 'rgba(0, 0, 0, .65)',
      tabDisabledColor: 'rgba(0, 0, 0, .25)',
    },
  ],
  onlyTemplate: { base: tabsStyle, hzero: tabsHzeroStyle },
};

const tabsCardData: ComponentData = {
  name: 'tabsCard',
  data: [
    {
      trapezium: false, // 是否是梯形Tab
      height: 32,
      cardPadding: '0.05rem 0.16rem',
      margin: '0 6px 0 0',
      bg: '#f6f6f6',
      fontColor: '#4c4c4c',
      borderColor: '#eeeeee',
      fontSize: 14,
      radius: '6px 6px 0 0',
      activeFontColor: '#fff',
      activeBg: '#5365EA',
      activeHeight: 35,
    },
  ],
};

export { tabsCardData, tabsData };
