import { ComponentData } from '@hzero-front-ui/core';
import alertInfoIcon from '../assets/icons/alert@2X.png';
import alertWarnIcon from '../assets/icons/alert-2@2X.png';
import alertErrorIcon from '../assets/icons/alert-3@2X.png';

const alertData: ComponentData = {
  name: 'alert',
  data: [
    {
      height: 26,
      borderRadius: 2,
      backgroundInfoColor: '#E6F1FF',
      backgroundWarnColor: '#FFF8E5',
      backgroundErrorColor: '#FFF4F4',
      borderInfoColor: 'none',
      borderWarnColor: 'none',
      borderErrorColor: 'none',
      paddingLeft: 38,
      iconBeforeDisplay: 'none',
      iconWidth: 14,
      iconHeight: 14,
      iconTop: 19,
      iconBeforeContent: '',
      iconBackgroundRepeat: 'no-repeat',
      iconBackgroundPosition: 'center',
      iconBackgroundSize: '14px 14px',
      iconInfoBackgroundImage: alertInfoIcon,
      infoIconContent: '',
      successIconContent: '',
      iconWarnBackgroundImage: alertWarnIcon,
      iconErrorBackgroundImage: alertErrorIcon,

      border: 'none',
      borderRadiusNew: '17px 17px 17px 17px',
      iconFontSize: 18,
    },
  ],
};

export default alertData;
