import { ComponentData } from '@hzero-front-ui/core';
import alertInfoIcon from '../assets/icons/tip-blue@3x.png';
import alertWarnIcon from '../assets/icons/tip-yellow@3x.png';
import alertErrorIcon from '../assets/icons/tip-red@3x.png';

const alertData: ComponentData = {
  name: 'alert',
  data: [
    {
      height: 36,
      borderRadius: 2,
      backgroundInfoColor: '#e6f1ff',
      backgroundWarnColor: '#fff8e5',
      backgroundErrorColor: '#ffe4e4',
      borderInfoColor: '#6ea5ff',
      borderWarnColor: '#ffcb3f',
      borderErrorColor: '#ff7777',
      paddingLeft: 'unset',
      iconBeforeDisplay: 'none',
      iconWidth: 16,
      iconHeight: 16,
      iconTop: 18,
      iconBackgroundRepeat: 'no-repeat',
      iconBackgroundPosition: 'center',
      iconBackgroundSize: '16px 16px',
      iconInfoBackgroundImage: alertInfoIcon,
      iconWarnBackgroundImage: alertWarnIcon,
      iconErrorBackgroundImage: alertErrorIcon,

      /* 样式二圆点颜色 */
      iconBeforeInfoBackgroundColor: 'transparent',
      iconBeforeWarnBackgroundColor: 'transparent',
      iconBeforeErrorBackgroundColor: 'transparent',
    },
  ],
};

export default alertData;
