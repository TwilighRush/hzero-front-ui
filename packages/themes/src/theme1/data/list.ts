import { ComponentData } from '@hzero-front-ui/core';

const listData: ComponentData = {
  name: 'list',
  data: [
    {
      striped: false,
      stripedBg: '',
      fontFamily: 'MicrosoftYaHei',
      fontSize: 12,
      // 最外层边框
      wrapBorder: 'none',

      /* 是否去除 header、item、footer 边框，none：去除 */
      removeAllBorder: '',
      // 边框颜色
      borderColor: '#e8e8e8',

      /* list 的 header 样式 */
      headFontSize: 14,
      minHeight: 36,
      headerColor: '#333333',
      // 上下 左右 内边距
      padding: '6px 12px',
      // 头内容左边距离
      headerPaddingLeft: '',

      /* list 每一项的样式 */
      itemColor: '#5a6677',
      // item 边框阴影
      boxShadow: '',
      borderRadius: '',
      // 每个 item 的间距
      marginBottom: '',

      /* list 文字描述样式 */
      descriptionColor: '#9b9b9b',

      /* c7n padding */
      c7npadding: '0.06rem 0.12rem',
    },
  ],
};

export default listData;
