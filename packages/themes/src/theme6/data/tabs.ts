import { ComponentData } from '@hzero-front-ui/core';
import tabsStyle from '../templates/Tabs.style';
import tabsHzeroStyle from '../templates-hzero/Tabs.style';
const tabsData: ComponentData = {
  name: 'tabs',
  data: [
    {
      paddingLeft: '16px',
      bottom: '2px',
      zIndex: '1000',
      radius: '0px',
      height: '2px',
      showInkBar: true,
      inkBarWidth: 12,
      hideBottomScale: true,
      inkBarBg: '#3889FF',
      activeFontColor: '#3889FF',
      tabFontSize: 14,
      tabFontColor: 'rgba(0,0,0,0.65)',
      tabPadding: '12px 0px',
      tabMargin: '6px 24px 1px 0',
      tabBorderWidth: 0,
      tabBorderColor: '',
      showLeftBorder: false,
      lineBottomBorderColor: '#3889FF',
      tabActiveBorderColor: '#3889FF',
      tabRadius: 2,
      barBottomBorder: 'none',
      tabNavWrapBg: '#fff',
      tabNavActiveBg: '#F0F8FF',
    },
  ],
  onlyTemplate: [tabsStyle, tabsHzeroStyle],
};

const tabsCardData: ComponentData = {
  name: 'tabsCard',
  data: [
    {
      trapezium: false, // 是否是梯形Tab
      height: 32,
      margin: '0 2px 0 0',
      bg: 'rgba(0,0,0,0.02)',
      fontColor: 'rgba(0,0,0,0.65)',
      borderColor: '#F0F0F0',
      fontSize: 14,
      radius: '2px 2px 0 0',
      activeFontColor: '#fff',
      activeBg: '#5365EA',
      activeHeight: 32,
    },
  ],
};

export { tabsCardData, tabsData };
