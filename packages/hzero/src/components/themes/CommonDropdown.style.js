import { css } from "styled-components";
import {
  getThemeData,
  createStyleComponent,
} from "@hzero-front-ui/core/lib/utils";

/**
 * 因为这里的样式需要作为全局渲染，并不需要作用域，所有单独处理
 * @param {*} props
 * @returns css
 */

function getDatePickerLanguageRedColCss(props) {
  const { weekendFontColor } = getThemeData(props, "datePicker");
  let locale = "";
  if (typeof window !== "undefined") {
    locale = (window.sessionStorage.getItem("language") || "").toLowerCase();
  }
  if (!(locale.indexOf("zh_cn") > -1 || locale.indexOf("en_us") > -1)) {
    return "";
  }
  const enCss = css`
    :first-of-type,
    :last-of-type {
      > div {
        color: ${weekendFontColor};
      }
    }
  `;

  const zhCss = css`
    :nth-of-type(6),
    :nth-of-type(7) {
      > div {
        color: ${weekendFontColor};
      }
    }
  `;
  const isZh = locale.toLowerCase().indexOf("zh_cn") > -1;
  return css`
    .ant-calendar-picker-container
      .ant-calendar-panel
      .ant-calendar-body
      table.ant-calendar-table {
      tr {
        td,
        th {
          ${isZh ? zhCss : enCss}
        }
      }
    }
  `;
}

export default createStyleComponent(
  "commonDropdown",
  css`
    ${getDatePickerLanguageRedColCss}
  `,
  true
);
