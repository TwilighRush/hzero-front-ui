/*
 * 注意：所有常量的都是以一下命名为前提：
 * 主题命名： 统一为 theme1、theme2、theme3 ......以此类推
 * */

import intl from './intl';
import overviewBlue from '../assets/images/overview-blue.png';
import overviewBlack from '../assets/images/overview-black.png';
import overview3 from '../assets/images/overview3.png';
import theme5Cover from '../assets/images/nightingale-sel.svg';

export type ThemeDescriptionItem = {
  desc: string;
  configurable: boolean;
  overview: string;
};
export type ThemeDescription = {
  theme1: ThemeDescriptionItem;
  theme2: ThemeDescriptionItem;
  theme3: ThemeDescriptionItem;
  theme4: ThemeDescriptionItem;
  theme5: ThemeDescriptionItem;
  theme6: ThemeDescriptionItem;
};

export const getThemeDescription = (): ThemeDescription => ({
  theme1: {
    desc: intl
      .get('hzero.hzeroTheme.page.theme1Desc')
      .d('您已切换冰峰白主题，配套组件已全部为您配置完成，可一键保存体验。'), // 主题描述
    configurable: true, // 组件是否可配置
    overview: overviewBlue,
  },
  theme2: {
    desc: intl.get('hzero.hzeroTheme.page.theme2Desc').d('您已切换到孔雀蓝主题。'),
    configurable: false,
    overview: overviewBlack,
  },
  theme3: {
    desc: '您已切换到极光蓝主题。',
    configurable: true,
    overview: overview3,
  },
  theme4: {
    desc: '您已切换到c7n2020主题。',
    configurable: false,
    overview: overviewBlack,
  },
  theme5: {
    desc: '您已切换到凌莺蓝主题。',
    configurable: false,
    overview: theme5Cover,
  },
  theme6: {
    desc: '您已切换到合同主题。',
    configurable: false,
    overview: overview3,
  },
});

export const schemaName = new Map<any, string>([
  ['theme1', intl.get('page.businessBlue').d('冰峰白')],
  ['theme2', intl.get('page.originConcise').d('孔雀蓝')],
  ['theme3', intl.get('page.applicationProdTheme').d('极光蓝')],
  ['theme4', 'c7n new主题'],
  ['theme5', intl.get('page.lingYingBlue').d('凌莺蓝')],
  ['theme6', intl.get('page.theme6').d('合同新主题')],
  [undefined, '默认'],
  [null, '默认'],
  [NaN, '默认'],
]);

export const colorsMap = new Map([
  [
    'theme1',
    {
      primary: ['#4f7de7', '#5A6677'],
      secondary: ['#39C878', '#F8B303', '#FD6868'],
    },
  ],
  [
    'theme2',
    {
      primary: ['#1E3255', '#29BECE'],
      secondary: ['#0687FF', '#CB38AD', '#FFBC00', '#F02B2B'],
    },
  ],
  [
    'theme3',
    {
      primary: ['#4C5974', '#3889FF'],
      secondary: ['#F0F6FF', '#39C878', '#FFB700', '#FF5656'],
    },
  ],
  [
    'theme4',
    {
      primary: ['#4C5974', '#3889FF'],
      secondary: ['#F0F6FF', '#39C878', '#FFB700', '#FF5656'],
    },
  ],
  [
    'theme5',
    {
      primary: ['#4C5974', '#3889FF'],
      secondary: ['#F0F6FF', '#39C878', '#FFB700', '#FF5656'],
    },
  ],
  [
    'theme6',
    {
      primary: ['#4C5974', '#3889FF'],
      secondary: ['#F0F6FF', '#39C878', '#FFB700', '#FF5656'],
    },
  ],
]);

// 配置中心首页显示配置
export const showConfig = {
  theme1: {
    showIcons: true,
    showAvatar: true,
    showInsets: true,
    showColors: true,
    showNextStep: true,
  },
  theme2: {
    showIcons: false,
    showAvatar: true,
    showInsets: true,
    showColors: true,
    showNextStep: false,
  },
  theme3: {
    showIcons: false,
    showAvatar: false,
    showInsets: false,
    showColors: true,
    showNextStep: true,
  },
  theme4: {
    showIcons: false,
    showAvatar: true,
    showInsets: true,
    showColors: true,
    showNextStep: false,
  },
  theme5: {
    showIcons: false,
    showAvatar: true,
    showInsets: true,
    showColors: true,
    showNextStep: false,
  },
  theme6: {
    showIcons: false,
    showAvatar: true,
    showInsets: true,
    showColors: true,
    showNextStep: false,
  },
};

// 组件配置页面隐藏项配置
export const hideConfig = {
  theme1: {
    money: true,
    fastSelect: true,
    timeSelect: true,
    stepsGroup: true,
    anchor: false,
    collapse: false,
  },
  theme2: {},
  theme3: {
    email: true,
    buttonMotion: true,
    inputMotion: true,
    selectMotion: true,
    password: true,
    number: true,
    checkboxButton: true,
  },
  theme4: {},
  theme5: {},
  theme6: {},
};
