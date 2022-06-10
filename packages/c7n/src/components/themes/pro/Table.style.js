import { css } from "styled-components";
import { getThemeData, createStyleComponent } from "@hzero-front-ui/core";
import deleteIcon from "../icons/delete.png";
import editIcon from "../icons/edit.png";
import favoriteIcon from "../icons/favorite.png";
import favoriteDefaultIcon from "../icons/default-favorite.png";
import menuIcon from "../icons/icon-menu.png";

function getRowBorder(d) {
  return d.bordered
    ? css`
        border-left: 1px solid ${d.borderColor};
        border-right: 1px solid ${d.borderColor};
      `
    : "border-left: none; border-right: none;";
}
// 个性化部分
function customizationCss() {
  return css`
    .c7n-pro-table-customization.c7n-pro-table-customization {
      .c7n-pro-table-customization-form {
        // 个性化显示设置中选中样式修复
        .c7n-pro-select-box-wrapper {
          .c7n-pro-table-customization-select-view-option {
            margin-right: 24px;
          }
          .c7n-pro-radio-inner {
            z-index: 3 !important;
            background-color: transparent !important;
            &::after {
              z-index: 2;
            }
          }
        }
      }
    }
    .c7n-pro-table-customization-panel-header.c7n-pro-table-customization-panel-header {
      &:before {
        display: none;
      }
    }
  `;
}
// function getStripStyle(d) {
//   return d.striped
//     ? css`
//         &:nth-of-type(2n) {
//           td,
//           .c7n-pro-table-cell {
//             background: ${d.stripedBg};
//           }
//         }
//       `
//     : "";
// }

function getTableCss(props) {
  const d = getThemeData(props, "table");
  const { primary } = getThemeData(props, "common");
  const {
    background,
    borderColor,
    layout,
    inputHeight,
    errorColor,
    errorFontColor,
    errorBgColor,
    labelFontColor,
    requiredBgColor,
    requiredBorderColor,
  } = getThemeData(props, "input");
  const btnData = getThemeData(props, "button");
  /* 解决过滤条撑出滚动条问题 */
  const filterBarFix = () => {
    return [
      "&.c7n-pro-select-multiple",
      "&.c7n-pro-select-lov-multiple",
      "&.c7n-pro-calendar-picker-multiple",
      "&.c7n-pro-color-picker-multiple",
      "&.c7n-pro-select-suffix-button",
      "&.c7n-pro-input-number-multiple",
      "&.c7n-pro-input-multiple",
    ].map((selector) => {
      return `
        ${selector} {
          input {
            height: 0 !important;
          }
          > label {
            height: 100% !important;
            ${[
              ".c7n-pro-select-suffix",
              ".c7n-pro-calendar-picker",
              ".c7n-pro-color-picker",
              ".c7n-pro-select",
              ".c7n-pro-input",
              ".c7n-pro-input-number",
            ].map((item) => {
              return `
                  ${item} {
                      border: none !important;
                      min-height: 100%;
                      box-shadow: none !important;
                      ul {
                        min-height: 0;
                        height: 100%;
                        margin: 0;
                        > li {
                          height: 100%;
                          line-height: 1;
                          margin: 0;
                          > input {
                            height: 100% !important;
                            min-width: 48px;
                          }
                        }
                      }
                    }
                `;
            })}
          }
        }
      `;
    });
  };
  return css`
    .c7n-pro-select-dropdown-menu-item-active
      .c7n-pro-table-filter-menu-option
      .c7n-pro-table-filter-menu-option-icons
      .icon {
      display: inline-block;
    }
    .c7n-pro-table-filter-status.c7n-pro-table-filter-status {
      width: 0.38rem;
      height: 0.16rem;
      margin: 0 0.12rem;
      padding: 0;
      color: #20d489;
      text-align: center;
      background: rgba(32, 212, 137, 0.12);
      border: none;
      border-radius: 0.02rem;
    }
    .c7n-pro-table-filterName-select.c7n-pro-table-filterName-select {
      border: none;
    }
    .c7n-pro-table-customized-column > .c7n-pro-table-cell-inner {
      display: flex;
      margin-right: 2px;
      align-items: center;
      justify-content: center;
      .c7n-pro-btn.c7n-pro-btn.c7n-pro-btn.c7n-pro-btn.c7n-pro-btn.c7n-pro-btn {
        border: none !important;
        background: none !important;
        padding: 0 !important;
        &:after,
        &:before {
          display: none !important;
        }
      }
    }
    .c7n-pro-table-filter-menu-option .c7n-pro-table-filter-menu-option-icons {
      .icon:before {
        content: "";
      }
      .icon {
        width: 16px;
        height: 16px;
        background-size: cover;
        display: none;
      }
      .icon-grade-o {
        background-image: url(${favoriteDefaultIcon});
      }
      .icon-star {
        background-image: url(${favoriteIcon});
      }
      .icon-edit-o {
        background-image: url(${editIcon});
      }
      .icon-delete_forever-o {
        background-image: url(${deleteIcon});
      }
      .icon-more_horiz:before {
        content: "\\e5d3";
      }
    }
    .c7n-pro-table-editor .c7n-pro-table-multi input {
      height: ${inputHeight - 2}px !important;
    }
    .c7n-pro-table-cell-multiple-block.c7n-pro-table-cell-multiple-block {
      background-color: ${primary};
    }
    /* 解决 parityRow 属性不生效问题 */
    .c7n-pro-table-parity-row
      .c7n-pro-table-row:nth-child(even)
      > td.c7n-pro-table-cell {
      background: ${d.stripedBg} !important;
    }
    .c7n-pro-table-wrapper {
      font-family: ${d.fontFamily};
      .c7n-pro-table-cell {
        transition: none;
      }
      /* 1.4.4 Table 个性化 boder消失问题修复 */
      .c7n-spin-nested-loading {
        .c7n-pro-table-last-row-bordered {
          .c7n-pro-table-row {
            &:last-of-type {
              .c7n-pro-table-cell {
                border-bottom: 0.01rem solid ${d.borderColor};
              }
            }
          }
        }
      }
      /* 1.4.0 Lov Table 多选 */
      .c7n-pro-table-row.c7n-pro-table-row-selected > td {
        background-color: ${d.bodyHoverBg};
      }
      /* 移除重复边框（1.3）*/
      .c7n-pro-table-content-overflow {
        border-right: none;
      }
      .c7n-pro-table-bordered .c7n-pro-table-filter-bar,
      .c7n-pro-table-bordered .c7n-pro-table-head,
      .c7n-pro-table-bordered .c7n-pro-table-body,
      .c7n-pro-table-bordered .c7n-pro-table-foot,
      .c7n-pro-table-bordered .c7n-pro-table-empty-row {
        border-right: none;
      }
      /* 移除重复边框（1.3）END */
      .c7n-pro-table-fixed-left,
      .c7n-pro-table-fixed-right {
        z-index: 3;
      }
      .c7n-pro-form {
        .c7n-pro-field-label {
          text-align: ${d.formLabelTextAligin};
          vertical-align: ${d.fromLabelVerticalAligin};
        }
      }
      .c7n-pro-table-filter-select-wrapper {
        .c7n-pro-table-filter-select-multiple-block {
          background: ${d.filterBackgroundColor};
          border-radius: ${d.filterBoderRadius};
          font-family: ${d.filterFontFamily};
          font-size: ${d.filterFontSize};
          color: ${d.filterColor};
          .icon.icon-cancel {
            color: ${d.filterColor};
            /* &:before {
              content: "${d.filterContent}";
            } */
          }
        }
        .c7n-pro-table-filter-select-suffix {
          .c7n-pro-table-columns-chooser {
            height: ${d.filterChooser};
            overflow: ${d.filterChooserOverflow};
            button {
              border-radius: ${d.filterChooserButtonRadius};
              :hover {
                border-radius: ${d.filterChooserButtonRadius};
              }
            }
          }
          .c7n-pro-btn-wrapper {
            &,
            &:hover,
            &:active {
              border: ${d.filterSelectButtonborder};
              background-color: ${d.filterSelectButtonBgColor};
              color: ${d.filterSelectButtonColor};
            }
          }
        }
        .c7n-pro-input-number-multiple,
        .c7n-pro-auto-complete-wrapper,
        .c7n-pro-input-multiple,
        .c7n-pro-icon-picker-wrapper,
        .c7n-pro-calendar-picker-wrapper,
        .c7n-pro-input-wrapper,
        .c7n-pro-password-wrapper,
        .c7n-pro-textarea-wrapper,
        .c7n-pro-input-number-wrapper,
        .c7n-pro-select-wrapper {
          border: ${d.filterSelectInputBorder};
          &.c7n-pro-color-picker-focused,
          &.c7n-pro-cascader-focused,
          &.c7n-pro-auto-complete-focused,
          &.c7n-pro-calendar-picker-focused,
          &.c7n-pro-textarea-focused,
          &.c7n-pro-icon-picker-focused,
          &.c7n-pro-input-focused,
          &.c7n-pro-password-focused,
          &.c7n-pro-input-number-focused,
          &.c7n-pro-select-focused {
            :before {
              border: ${d.filterSelectInputBorder};
            }
          }
        }
      }
      .c7n-pro-table-fixed-right {
        border-left: ${d.bordered ? 1 : 0}px solid ${d.borderColor};
      }
      .c7n-pro-table-row-height-fixed .c7n-pro-table-cell-inner {
        line-height: ${d.rowHeight}px;
      }
      .c7n-pro-table-toolbar {
        display: flex;
        align-items: center;
        justify-content: flex-end;
        .c7n-pro-table-query-bar {
          margin-bottom: 8px;
        }
        .c7n-pro-table-summary-group {
          float: left !important;
        }
        .c7n-pro-table-toolbar-button-group {
          display: flex;
          align-items: center;
          order: 2;
        }
      }
      .c7n-pro-table-professional-query-bar {
        &-button {
          // padding-top: 0;
          // padding-left: 12px;
          padding: 8px 0 8px 12px;
          margin-top: ${layout === "vertical" ? inputHeight : ""}px;
          .c7n-pro-table-professional-query-more {
            border: none !important;
            padding: 0 !important;
            margin-left: 8px;
            color: ${primary} !important;
            background: none !important;
            > * {
              vertical-align: middle;
            }
            .icon {
              font-size: 22px;
            }
            &:before,
            &:after {
              display: none !important;
            }
            &:after {
              content: initial !important;
            }
            &:before {
              content: "";
              border: none !important;
              display: inline-block !important;
              width: 0 !important;
              height: 100% !important;
              vertical-align: middle;
            }
          }
        }
      }
      .c7n-pro-table-dynamic-filter-bar {
        .c7n-pro-table-filter-search,
        .c7n-pro-table-filter-item {
          /* display: block; */
        }
        .c7n-pro-table-filter-label {
          height: ${inputHeight}px;
          color: #6a6a6a;
        }
        .c7n-pro-table-filter-menu {
          > .c7n-pro-select-wrapper label {
            &:before,
            &:after {
              display: none !important;
            }
          }
          > .icon-sort {
            width: 18px;
            height: 18px;
            background-image: url(${menuIcon});
            background-size: 14px 14px;
            background-repeat: no-repeat;
            background-position: center;
            &:before {
              display: none;
            }
          }
          > .c7n-pro-select-wrapper {
            .icon-baseline-arrow_drop_down:before {
              font-family: icomoon, sans-serif;
              content: "\\E966";
            }
          }
          .c7n-pro-table-filter-buttons {
            width: auto;
          }
          .c7n-pro-select-clear-button-flat {
            right: 16px;
          }
        }
        .c7n-pro-table-filter-wrapper {
          width: 100%;
        }

        .c7n-pro-table-filter-item {
          .c7n-pro-color-picker-wrapper,
          .c7n-pro-cascader-wrapper,
          .c7n-pro-input-number-multiple,
          .c7n-pro-auto-complete-multiple,
          .c7n-pro-input-multiple,
          .c7n-pro-auto-complete-wrapper,
          .c7n-pro-icon-picker-wrapper,
          .c7n-pro-calendar-picker-wrapper,
          .c7n-pro-input-wrapper,
          .c7n-pro-password-wrapper,
          .c7n-pro-textarea-wrapper,
          .c7n-pro-input-number-wrapper,
          .c7n-pro-select-wrapper {
            &:before {
              display: none !important;
            }
            border: none;
            label:before,
            label:after {
              display: none !important;
            }
            input {
              /* padding: 0 0.28rem 0 0.02rem; */
            }
            input::placeholder {
              color: ${labelFontColor};
              font-weight: normal;
            }
          }
        }
        .c7n-pro-table-add-fields,
        .c7n-pro-table-filter-menu-expand {
          margin-left: 4px;
          color: ${primary};
          font-size: 13px;
        }
        [class*="-dynamic-filter-single-wrapper"] {
          .c7n-pro-table-dynamic-filter-bar-single-action {
            .c7n-pro-table-filter-menu-query .icon-refresh {
              line-height: ${btnData.height - 6}px;
            }
          }
        }
      }
      .c7n-pro-table-toolbar {
        text-align: right;
      }
      .c7n-pro-table .c7n-pro-table-thead > tr > th {
        background: initial;
        .c7n-pro-table-cell-inner .icon {
          color: ${primary};
        }
      }
      .c7n-pro-table-toolbar {
        .c7n-pro-btn {
          margin-bottom: 4px;
        }
      }
      .c7n-pro-content {
        overflow: visible;
      }
      .c7n-pro-table {
        border-color: ${d.borderColor}!important;
        ${getRowBorder(d)};
        &.c7n-pro-table-bordered {
          ${d.bordered
            ? css`
                border-left: 1px solid ${d.borderColor};
                border-right: 1px solid ${d.borderColor};
              `
            : ""}
        }
        .c7n-pro-table-editor {
          .c7n-pro-input-number-multiple,
          .c7n-pro-auto-complete-wrapper,
          .c7n-pro-input-multiple,
          .c7n-pro-icon-picker-wrapper,
          .c7n-pro-calendar-picker-wrapper,
          .c7n-pro-input-wrapper,
          .c7n-pro-password-wrapper,
          .c7n-pro-textarea-wrapper,
          .c7n-pro-input-number-wrapper,
          .c7n-pro-select-wrapper {
            border-color: ${d.editableActiveBorderColor};
            border-radius: ${d.tableEditorBeforeRadius};
            :before {
              display: ${d.tableEditorBeforeDisplay};
            }
            &.c7n-pro-color-picker-focused,
            &.c7n-pro-cascader-focused,
            &.c7n-pro-auto-complete-focused,
            &.c7n-pro-calendar-picker-focused,
            &.c7n-pro-textarea-focused,
            &.c7n-pro-icon-picker-focused,
            &.c7n-pro-input-focused,
            &.c7n-pro-password-focused,
            &.c7n-pro-input-number-focused,
            &.c7n-pro-select-focused {
              :before {
                border-radius: ${d.tableEditorBeforeRadius};
                border: ${d.tableEditorBeforeBorder};
                bottom: -${d.tableEditorborderWidthFocused}px;
              }
            }
          }
        }
        .c7n-pro-table-content {
          table {
            .c7n-pro-table-row:last-of-type td {
              border-bottom: none;
            }
            .c7n-pro-table-expand-icon {
              font-size: ${d.expandFontSize};
              color: ${d.expandFontColor};
              padding-top: ${d.expandIconPaddingTop};
              :focus {
                transform: unset;
              }
              :before {
                content: "${d.expandContent}";
                display: inline-block;
                width: 14px;
                height: 14px;
                border-radius: ${d.expandRadius};
                background-image: url("${d.expandIcon}");
                background-size: 100% 100%;
                background: ${d.expandIconBGColor};
              }
              &.c7n-pro-table-expand-icon-expanded {
                transform: unset;
                :before {
                  content: "${d.collapseContent}";
                  background-image: url("${d.expandedIcon}");
                }
              }
            }
            .c7n-p x {
              margin-right: 0.08rem;
            }
            .c7n-pro-table-thead {
              tr {
                th {
                  background: ${d.headBg} !important;
                }
                .c7n-pro-table-cell {
                  background: initial;
                  border-color: ${d.tableHeaderBorderColor || d.borderColor};
                  padding: 4px;

                  border-top: none;
                  border-left-width: 0;
                  .c7n-pro-table-cell-inner {
                    padding: 0 0.04rem 0 0.04rem;
                    box-sizing: border-box;
                    &.c7n-pro-table-cell-search-header {
                      /* 修复表格内部的组合框筛选样式 */
                      padding: 0;
                    }
                    span {
                      font-size: ${d.headFontSize}px;
                      color: ${d.headFontColor};
                      font-weight: normal;
                    }
                  }

                  &:last-of-type.c7n-pro-table-cell-last {
                    border-right: none;
                  }
                }
              }
            }
            .c7n-pro-table-thead.c7n-pro-table-column-group {
              tr {
                .c7n-pro-table-cell {
                  border-color: ${d.borderGroupHeaderColor
                    ? d.borderGroupHeaderColor
                    : d.tableHeaderBorderColor || d.borderColor};
                  border-left: ${d.borderGroupHeaderColor
                    ? `1px solid${d.borderGroupHeaderColor}`
                    : "none"};
                  border-right: ${d.borderGroupHeaderColor
                    ? `1px solid${d.borderGroupHeaderColor}`
                    : "none"};
                  border-top: ${d.borderGroupHeaderColor
                    ? `1px solid${d.borderGroupHeaderColor}`
                    : "none"};
                  border-bottom: ${d.borderGroupHeaderColor
                    ? `1px solid${d.borderGroupHeaderColor}`
                    : "none"};
                }
              }
            }
            .c7n-pro-table-tbody {
              tr.c7n-pro-table-expanded-row {
                &:last-child > .c7n-pro-table-cell,
                &:last-child > td {
                  border-bottom: none;
                }
                > .c7n-pro-table-cell,
                > td {
                  border-left: none;
                  border-bottom: 1px solid ${d.borderColor};
                }
                > .c7n-pro-table-cell > .c7n-pro-table-cell-inner {
                  border: none;
                }
              }
            }
          }

          .c7n-pro-table-row {
            background: ${d.bodyBg};
            td:last-of-type {
              border-right: none;
            }
            /* 适配 UI > 1.2 的版本 */
            &.c7n-pro-table-row-current,
            &.c7n-pro-table-row-current > td,
            &.c7n-pro-table-row-current > .c7n-pro-table-cell,
            &.c7n-pro-table-row-hover,
            &.c7n-pro-table-row-hover > td,
            &.c7n-pro-table-row-hover > .c7n-pro-table-cell,
            :hover,
            :hover > td,
            :hover > .c7n-pro-table-cell {
              background: ${d.bodyHoverBg};
            }
            .c7n-pro-table-cell {
              ${getRowBorder(d)};
              border-color: ${d.borderColor};
              box-sizing: border-box;
              padding: 4px;
              background: #fff;
              border-top: none;
              .c7n-pro-output-multiple-block {
                background: ${primary};
              }
              border-left-width: 0;
              &.c7n-pro-table-cell-editable {
                .c7n-pro-table-cell-prefix {
                  margin-right: 0.08rem;
                  margin-left: 0.08rem;
                }
                &.c7n-pro-table-cell-required .c7n-pro-table-cell-inner {
                  border-color: ${requiredBorderColor};
                  background: ${requiredBgColor};
                }
                &.c7n-pro-table-cell-required .c7n-pro-output-invalid {
                  border-color: ${errorColor};
                  color: ${errorFontColor};
                  background: ${errorBgColor};
                }
                .c7n-pro-table-cell-inner {
                  border: 1px solid;
                  border-color: ${borderColor};
                  background: ${background};
                }
              }
              .c7n-pro-table-cell-inner {
                box-sizing: border-box;
                font-size: ${d.bodyFontSize}px;
                color: ${d.bodyFontColor};
              }
            }
          }
        }
      }
      // 去除过滤条中输入框边框
      .c7n-pro-table-filter-select-wrapper {
        .c7n-pro-table-filter-select {
          .c7n-pro-table-filter-select-multiple-input {
            &,
            &:before,
            &:after {
              border: none;
              box-shadow: none;
            }
            > label {
              &:before,
              &:after {
                display: none;
              }
            }
            ${filterBarFix()}
          }
        }
      }
    }
    .c7n-pro-modal .c7n-pro-table-filter-modal-item {
      .c7n-pro-field-label {
        text-align: left !important;
      }
    }
    //bar样式
    .c7n-pro-table-filter-select-wrapper.c7n-pro-table-filter-select-wrapper {
      .c7n-pro-table-filter-select-select-field {
        font-size: ${d.barFontsize}px;
        line-height: 24px;
      }
      .c7n-pro-table-filter-select-multiple-block > div:not(:last-child) {
        max-width: none;
      }
    }
    .c7n-pro-table-filter-select.c7n-pro-table-filter-select {
      .c7n-pro-table-filter-select-multiple-input {
        border: none;
        box-shadow: none;
        input {
          height: 24px;
          font-size: ${d.barFontsize}px;
          font-weight: 500;
        }
      }
    }
  `;
}

export default createStyleComponent(
  "table",
  css`
    ${getTableCss}
    ${customizationCss}
  `
);
