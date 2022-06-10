import { css } from 'styled-components';
import { getThemeData } from '@hzero-front-ui/core';
const getLanguageRedColCss = (props) => {
  const { weekendFontColor } = getThemeData(props, 'datePicker');
  let locale = '';
  if (typeof window !== 'undefined') {
    locale = (window.sessionStorage.getItem('language') || '').toLowerCase();
  }
  if (!(locale.indexOf('zh_cn') > -1 || locale.indexOf('en_us') > -1)) {
    return '';
  }
  const enCss = css`
    :first-of-type,
    :last-of-type {
      .c7n-pro-calendar-cell-inner {
        color: ${weekendFontColor};
      }
    }
  `;

  const zhCss = css`
    :nth-of-type(6),
    :nth-of-type(7) {
      .c7n-pro-calendar-cell-inner {
        color: ${weekendFontColor};
      }
    }
  `;
  const isZh = locale.toLowerCase().indexOf('zh_cn') > -1;
  return css`
    .c7n-pro-calendar-picker-popup
      .c7n-pro-calendar-view
      .c7n-pro-calendar-body
      table.c7n-pro-calendar-day-panel {
      tr {
        td,
        th {
          ${isZh ? zhCss : enCss}
        }
      }
    }
  `;
};
const commonDropDownStyle = css`
  ${getLanguageRedColCss}
`;
export default commonDropDownStyle;
