import { ComponentData } from '@hzero-front-ui/core';
import uploadStyle from '../templates/Upload.style';
import uploadHzeroStyle from '../templates-hzero/Upload.style';
const uploadData: ComponentData = {
  name: 'upload',
  data: [
    {
      dragBackgroundColor: '#f8faff',
      dragIconColor: '#6887e8',
      cardBorderRadius: '0.16rem',
      cardBackgroundColor: '#f8faff',
      cardTextDisplay: 'none',
      cardIconAddFontSize: '0.35rem',
      cardIconAddColor: '#6887e8',
      cardIconAddContent: '\\ea19',
      cardFontAddIconFamily: 'icomoon',

      listInfoBackgroundColor: 'rgba(158, 173, 190, 0.06)',
      listInfoBorderRadius: '.04rem',
      listInfoVerticalAlign: 'middle',
      listLineHeight: '.4rem',
      listIconTop: '.15rem',
      listIcontransform: 'rotate(45deg)',
      listIconColor: '#53675ea',
      listNameColor: '#0f1358',
      listIconBefore: 'anticon',
      listIconContent: '\\E6AE',
      listProgressPaddingLeft: '0rem',
      listProgressLineHeight: '0.26rem',
      listProgressBGColor: '#5365ea',
      listErrorColor: '#fd729c',
      listErrorborderBottom: '.02rem solid',
      listIconCloseOpcity: '1',
      listIconCloseTop: '50%',
      listIconCloseBoeder: '.01rem solid #d9e6f2',
      listIconCloseBorderRadius: '50%',

      cardListPadding: '0rem',
      cardListBorderRadius: '.16rem',
      cardListOverflow: 'hidden',
      cardListBackgroundColor: 'rgba(0,0,0, 0.25)',
      cardListProgressBottom: '.62rem',
      cardListProgressPaddingLeft: '.2rem',
      cardListProgressHeight: '.04rem',
      cardListProgressBackground: '#6887e8',
      cardListIconCloseColor: 'white',
      cardListTextColor: 'white',
      cardListTextMarginTop: '.6rem',
      cardListTextMarginBottom: '.2rem',
      listIconCloseLineHeight: 'initial',
      listIconCloseTransform: 'translateY(-50%)',

      cardListSize: 104,
      listHeight: '.3rem',
      listColor: 'rgba(0,0,0,0.65)',
      listHoverBgColor: 'rgba(0, 0, 0, 0.04)',
      errorColor: '#F84A53',
    },
  ],
  onlyTemplate: [uploadStyle,uploadHzeroStyle],
};

export default uploadData;
