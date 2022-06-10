import { ComponentData } from '@hzero-front-ui/core';
import ListHzeroStyle from '../templates-hzero/List.style';
const listData: ComponentData = {
  name: 'list',
  data: [
    {
      striped: true,
      stripedBg: '#F0F8FF',
      fontFamily: '',
      fontSize: 14,
      // 最外层边框
      wrapBorder: 'none',

      /* 是否去除 header、item、footer 边框，none：去除 */
      itemBorder: 'none',
      // 边框颜色
      borderColor: '',

      /* list 的 header 样式 */
      headFontSize: 16,
      minHeight: 38,
      headerColor: 'rgba(0,0,0,0.85)',
      // 上下 左右 内边距
      padding: '6px 12px',
      // 头内容左边距离
      headerPaddingLeft: '',

      /* list 每一项的样式 */
      itemColor: '#4d4d4d',
      // item 边框阴影
      boxShadow: '',
      borderRadius: '',
      // 每个 item 的间距
      marginBottom: '',

      /* list 文字描述样式 */
      descriptionColor: 'rgba(0,0,0,0.65)',

      /* c7n padding */
      c7npadding: '0.06rem 0.12rem',
    },
  ],
  onlyTemplate:ListHzeroStyle
};

export default listData;
