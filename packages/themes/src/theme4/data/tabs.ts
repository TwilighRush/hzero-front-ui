import { ComponentData } from '@hzero-front-ui/core';
import tabsStyle from '../templates/Tabs.style';
import { css } from 'styled-components';

const tabsData: ComponentData = {
  name: 'tabs',
  data: [
    {
      bottom: 0,
      radius: '0px',
      height: '2px',
      showInkBar: true,
      hideBottomScale: true,
      inkBarBg: '#5365EA',
      activeFontColor: '#5365EA',
      tabFontSize: 14,
      tabPadding: '8px 0 10px 0',
      tabFontColor: '#0F1358',
      tabBorderWidth: 0,
      tabBorderColor: '',
      showLeftBorder: false,
      lineBottomBorderColor: '#6887E8',
      tabActiveBorderColor: '#5365EA',
      tabRadius: 2,
      barBottomBorder: 'none',
    },
  ],
  onlyTemplate: { base: tabsStyle },
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
      activeFontColor: '#5365EA',
      activeBg: '#FFFFFF',
      activeHeight: 35,
    },
  ],
};

export { tabsCardData, tabsData };
