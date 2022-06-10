import { css } from 'styled-components';
import { getThemeData, createStyleComponent } from '@hzero-front-ui/core';
import deleteIcon from '@hzero-front-ui/c7n-ui/lib/themes/icons/delete.png';
import editIcon from '@hzero-front-ui/c7n-ui/lib/themes/icons/edit.png';
import favoriteIcon from '@hzero-front-ui/c7n-ui/lib/themes/icons/favorite.png';
import favoriteDefaultIcon from '@hzero-front-ui/c7n-ui/lib/themes/icons/default-favorite.png';
import menuIcon from '@hzero-front-ui/c7n-ui/lib/themes/icons/icon-menu.png';

function getRowBorder(d: any) {
  return d.bordered
    ? css`
        border-left: 1px solid ${d.borderColor};
        border-right: 1px solid ${d.borderColor};
      `
    : 'border-left: none; border-right: none;';
}

function getTableCss(props: any) {
  const d = getThemeData(props, 'table');
  const fc = getThemeData(props, 'formColor');
  const { primary } = getThemeData(props, 'common');
  const {
    background,
    borderColor,
    inputHeight,
    errorColor,
    errorFontColor,
    errorBgColor,
    labelFontColor,
  } = getThemeData(props, 'input');
  const btnData = getThemeData(props, 'button');
  /* 解决过滤条撑出滚动条问题 */
  const filterBarFix = () => {
    return [
      '&.c7n-pro-select-multiple',
      '&.c7n-pro-select-lov-multiple',
      '&.c7n-pro-calendar-picker-multiple',
      '&.c7n-pro-color-picker-multiple',
      '&.c7n-pro-select-suffix-button',
      '&.c7n-pro-input-number-multiple',
      '&.c7n-pro-input-multiple',
    ].map((selector) => {
      return `
        ${selector} {
          > input {
            height: 0 !important;
          }
          > label {
            height: 100% !important;
            ${[
              '.c7n-pro-select-suffix',
              '.c7n-pro-calendar-picker',
              '.c7n-pro-color-picker',
              '.c7n-pro-select',
              '.c7n-pro-input',
              '.c7n-pro-input-number',
            ].map((item) => {
              return `
                ${item} {
                    border: none !important;
                    min-height: 100%;
                    box-shadow: none !important;
                    ul {
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
    .c7n-pro-table-row-height-fixed {
      .c7n-pro-table-tfoot,
      .c7n-pro-table-thead {
        .c7n-pro-table-cell-inner {
          line-height: ${d.headHeight}px !important;
        }
      }
    }
    .c7n-pro-table-parity-row .c7n-pro-table-row:nth-child(even) > td {
      background-color: ${d.stripedBg} !important;
    }
    .c7n-pro-table-wrapper
      .c7n-pro-table
      .c7n-pro-table-content
      table
      .c7n-pro-table-expand-icon.c7n-pro-table-expand-icon-expanded:before {
      background: ${d.expandBackground};
      color: ${d.expandColor};
    }
    .c7n-pro-table-wrapper
      .c7n-pro-table
      .c7n-pro-table-content
      table
      .c7n-pro-table-expand-icon:before {
      background: ${d.notExpandBackground};
      color: ${d.notExpandColor};
    }
    .c7n-pro-table-wrapper
      .c7n-pro-table-content
      .c7n-pro-table-drag-column
      .icon-baseline-drag_indicator {
      color: rgba(15, 19, 88, 0.35);
    }
    .c7n-pro-table-wrapper
      .c7n-pro-table-advanced-query-bar
      .c7n-pro-input-float-label
      .c7n-pro-field-label-wrapper
      .c7n-pro-field-label {
      background: #fff;
    }
    .c7n-pro-table-filter-select-multiple-block > div:not(:last-child) {
      max-width: ${d.blockMaxWidth};
    }
    .c7n-pro-select-dropdown-menu-item-active
      .c7n-pro-table-filter-menu-option
      .c7n-pro-table-filter-menu-option-icons
      .icon {
      display: inline-block;
    }
    .c7n-pro-table-filter-menu-option .c7n-pro-table-filter-menu-option-icons {
      .icon:before {
        content: '';
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
        content: '\\e5d3';
      }
    }
    .c7n-pro-table-editor .c7n-pro-table-multi input {
      height: ${inputHeight - 2}px !important;
    }
    .c7n-pro-table-wrapper {
      font-family: ${d.fontFamily};
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
      .c7n-pro-table-empty-row {
        color: ${d.filterPlaceholderColor};
        border-bottom: 1px solid #eef4f9;
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
        .c7n-pro-table-filter-select-suffix.c7n-pro-table-filter-select-suffix {
          opacity: 1;
          .c7n-pro-table-columns-chooser .icon {
            width: 0.24rem;
            height: 0.24rem;
          }
        }
        .c7n-pro-table-filter-select-clear-button {
          right: 0.7rem;
          top: 0.06rem;
          .icon-close:before {
            content: '\\E5C9';
            color: #abbccf;
          }
          &:hover {
            .icon-close:before {
              color: #9eadbe;
            }
          }
        }
        .c7n-pro-select-wrapper.c7n-pro-select-wrapper {
          background-color: transparent;
        }
        .icon-filter_list {
          color: ${d.filterIconColor};
        }
        .c7n-pro-table-filter-select-placeholder {
          font-size: ${d.filterPlaceholderFontSize};
          color: ${d.filterPlaceholderColor};
        }
        .icon-view_column {
          color: ${d.filterColumnColor};
        }
        .c7n-pro-table-filter-select-multiple-block {
          background: ${d.filterBackgroundColor};
          border-radius: ${d.filterBoderRadius};
          font-family: ${d.filterFontFamily};
          font-size: ${d.filterFontSize};
          color: ${d.filterColor};
          .icon.icon-cancel {
            font-size: ${d.iconCancelFontSize};
            color: ${d.filterColor};
            &:before {
              content: '${d.filterContent}';
              position: relative;
              top: ${d.iconCancelTop};
            }
          }
        }
        .c7n-pro-table-filter-select-suffix {
          .c7n-pro-table-columns-chooser {
            border-color: #d9e6f2;
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
        flex-direction: row;
        justify-content: space-between;
        .c7n-pro-table-query-bar {
          order: -1;
          margin-bottom: 8px;
        }
        .c7n-pro-table-toolbar-button-group {
          order: 2;
          display: flex;
          align-items: center;
        }
      }
      .c7n-pro-table-summary-col {
        height: 0.36rem;
        line-height: 0.36rem;
      }
      .c7n-pro-table-advanced-query-bar-options
        .c7n-pro-table-filter-select.c7n-pro-table-filter-select {
        input {
          padding: 0.01rem 0;
          height: 0.24rem;
          min-height: unset;
        }
      }
      .c7n-pro-table-professional-query-bar {
        .c7n-pro-form-wrapper {
          .c7n-pro-field-wrapper {
            .c7n-pro-checkbox-wrapper {
              top: 0.01rem;
            }
          }
        }

        &-button .c7n-pro-table-professional-query-more {
          border: none !important;
          box-shadow: none;
          padding: 0 !important;
          margin-left: 8px;
          color: ${primary} !important;
          background: none !important;
          > * {
            vertical-align: middle;
          }
          &:hover,
          &:focus {
            box-shadow: none;
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
            content: '';
            border: none !important;
            display: inline-block !important;
            width: 0 !important;
            height: 100% !important;
            vertical-align: middle;
          }
        }
      }
      .c7n-pro-table-dynamic-filter-bar {
        .c7n-pro-table-filter-wrapper {
          width: 100%;
          /* 修改动态筛选条下拉项内容与icon重叠问题 */
          .c7n-pro-table-filter-content {
            .c7n-pro-table-filter-item {
              > span {
                label > input {
                  margin-right: 0.12rem;
                }
              }
            }
          }
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
              padding: 0 0.06rem;
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
        /* 动态筛选条 筛选保存边框去除 */
        .c7n-pro-select-wrapper {
          border: none;
        }
        [class*='-dynamic-filter-single-wrapper'] {
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
        table {
          border-collapse: collapse;
        }
        &.c7n-pro-table-bordered {
          ${d.bordered
            ? css`
                border-left: 1px solid ${d.borderColor};
                border-right: 1px solid ${d.borderColor};
              `
            : ''}
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
            background: ${d.tableEditBackground};
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
          ul {
            // line-height: ${d.rowUlLineHeight};
            .icon {
              margin-top: -5px;
            }
          }
        }
        .c7n-pro-table-content {
          table {
            .c7n-pro-table-expanded-row + tr.c7n-pro-table-row > td.c7n-pro-table-cell {
              border-top: 1px solid ${d.borderColor};
            }
            .c7n-pro-checkbox-wrapper:not(.c7n-pro-checkbox-button).c7n-pro-checkbox-wrapper:not(.c7n-pro-checkbox-button) {
              /* line-height: 0.31rem; */
            }
            .c7n-pro-table-expand-icon {
              font-size: ${d.expandFontSize};
              color: ${d.expandFontColor};
              padding-top: ${d.expandIconPaddingTop};
              :focus {
                transform: unset;
              }
              :before {
                content: '${d.expandContent}';
                display: inline-block;
                width: 14px;
                height: 14px;
                border-radius: ${d.expandRadius};
                background-image: url('${d.expandIcon}');
                background-size: 100% 100%;
                background: ${d.expandIconBGColor};
              }
              &.c7n-pro-table-expand-icon-expanded {
                transform: unset;
                :before {
                  content: '${d.collapseContent}';
                  background-image: url('${d.expandedIcon}');
                }
              }
            }
            .c7n-pro-table-cell-prefix {
              margin-right: 0.08rem;
            }
            .c7n-pro-table-tfoot,
            .c7n-pro-table-thead {
              tr {
                th {
                  background: ${d.headBg} !important;
                }
                .c7n-pro-table-cell {
                  background: initial;
                  border-color: ${d.tableHeaderBorderColor || d.borderColor};
                  padding: ${d.cellPadding || '4px'} 4px;
                  border-bottom: 1px solid #eef4f9;
                  border-top: 1px solid #eef4f9;
                  :first-of-type {
                    border-left-width: 0;
                  }
                  .c7n-pro-table-cell-inner {
                    box-sizing: border-box;
                    padding: 0 0.1rem;
                    // height: ${d.headHeight}px !important;
                    // line-height: ${d.headHeight}px !important;
                    &.c7n-pro-table-cell-search-header {
                      /* 修复表格内部的组合框筛选样式 */
                      padding: 0;
                    }
                    span {
                      color: ${d.headFontColor};
                      font-family: PingFangSC-Medium;
                      font-weight: ${d.tableCellInnerSpanFontWeight || 'normal'};
                    }
                  }

                  &:last-of-type {
                    // border-right: none;
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
                    : 'none'};
                  border-right: ${d.borderGroupHeaderColor
                    ? `1px solid${d.borderGroupHeaderColor}`
                    : 'none'};
                  border-top: ${d.borderGroupHeaderColor
                    ? `1px solid${d.borderGroupHeaderColor}`
                    : 'none'};
                  border-bottom: ${d.borderGroupHeaderColor
                    ? `1px solid${d.borderGroupHeaderColor}`
                    : 'none'};
                }
              }
            }
            .c7n-pro-table-tbody {
              tr.c7n-pro-table-expanded-row {
                td {
                  padding: 0;
                  border-bottom: 1px solid #eef4f9;
                  background: #fff;
                }
              }
            }
          }

          .c7n-pro-table-expanded-row > td {
            border-bottom: none;
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
              padding: 5px 4px;
              border-bottom: 1px solid #eef4f9;
              // .c7n-pro-output-multiple-block {
              //   background: ${primary};
              // }
              :first-of-type {
                border-left-width: 0;
              }
              &.c7n-pro-table-cell-editable {
                .c7n-pro-table-cell-prefix {
                  margin-right: 0.08rem;
                  margin-left: 0.08rem;
                }
                &.c7n-pro-table-cell-required .c7n-pro-table-cell-inner {
                  border-color: ${fc.borderColor};
                  background: ${fc.bgColor};
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
                padding: 0 0.1rem;
                font-size: ${d.bodyFontSize}px;
                color: ${d.bodyFontColor};
              }
            }
          }
        }
      }
    }
    .c7n-pro-modal .c7n-pro-table-filter-modal-item {
      .c7n-pro-field-label {
        text-align: left !important;
      }
    }
    .c7n-pro-table:not(.c7n-pro-table-bordered)
      .c7n-pro-table-thead.c7n-pro-table-column-resizable:hover
      .c7n-pro-table-cell,
    .c7n-pro-table:not(.c7n-pro-table-bordered)
      .c7n-pro-table-thead.c7n-pro-table-column-resizable.c7n-pro-table-thead-hover
      .c7n-pro-table-cell {
      /* 确保优先级 */
      border-color: rgb(238, 244, 249) rgb(243, 246, 254) !important;
    }
    .c7n-pro-table-content {
      border-color: transparent !important;
    }
    //bar样式
    .c7n-pro-table-filter-select-wrapper.c7n-pro-table-filter-select-wrapper {
      .c7n-pro-table-filter-select-select-field {
        font-size: 12px;
        line-height: 24px;
      }
    }
    .c7n-pro-table-filter-select.c7n-pro-table-filter-select {
      border-top-color: #d9e6f2 !important;
      .c7n-pro-table-filter-select-multiple-input {
        border: none;
        box-shadow: none;
        input {
          font-size: 12px;
          height: 24px !important;
        }
        ::before {
          height: 100%;
          border: none;
        }
        ${filterBarFix()}
      }
    }
    /* hover表头显示右侧边框 */
    .c7n-pro-table-thead.c7n-pro-table-column-resizing {
      cursor: col-resize;
    }
    .c7n-pro-table-thead:not(.c7n-pro-table-column-resizing) {
      &:hover
        tr:nth-last-child(1):first-child
        th:not(:last-child)
        .c7n-pro-table-resizer.c7n-pro-table-resizer-right {
        &::before {
          position: absolute;
          display: block;
          content: '';
          width: 1px;
          height: 80%;
          top: 10%;
          right: 0;
          background-color: #c0d5ea;
        }
      }
      .c7n-pro-table-resizer.c7n-pro-table-resizer-right {
        &:hover::before {
          background-color: transparent !important;
        }
      }
    }
    /* 修改拖拽列宽分割线样式 */
    .c7n-pro-table-wrapper {
      .c7n-pro-table {
        .c7n-pro-table-split-line {
          background-color: #5365ea;
          box-shadow: 0px 2px 4px 0px rgba(83, 101, 234, 0.65);
        }
      }
    }
    /* 下拉按钮组 按钮样式修正 */
    .c7n-menu {
      .c7n-pro-table-button-menu-item {
        display: flex;
        align-items: center;
        .c7n-pro-btn {
          line-height: 1;
        }
      }
    }
  `;
}

const customizationCss = () => {
  return css`
    /* 个性化设置 */
    .c7n-pro-table-customization.c7n-pro-table-customization {
      .c7n-pro-table-customization-form {
        // 个性化显示设置中选中样式修复
        .c7n-pro-select-box-wrapper {
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
  `;
};

const TableStyle = css`
  ${getTableCss}
  ${customizationCss}
`;
export default TableStyle;
