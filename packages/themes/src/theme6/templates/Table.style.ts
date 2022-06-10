import { css } from 'styled-components';
import { getThemeData } from '@hzero-front-ui/core';
import deleteIcon from '@hzero-front-ui/c7n-ui/lib/themes/icons/delete.png';
import editIcon from '@hzero-front-ui/c7n-ui/lib/themes/icons/edit.png';
import favoriteIcon from '@hzero-front-ui/c7n-ui/lib/themes/icons/favorite.png';
import favoriteDefaultIcon from '@hzero-front-ui/c7n-ui/lib/themes/icons/default-favorite.png';

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
  const { primary6, primary1, iconfontFamily } = getThemeData(props, 'common');
  const { background, borderColor, errorColor, errorFontColor, errorBgColor } = getThemeData(
    props,
    'input'
  );
  return css`
    //勾选行高亮背景色修改
    .c7n-pro-table-row-selected.c7n-pro-table-row-selected,
    .c7n-pro-table-parity-row.c7n-pro-table-parity-row
      .c7n-pro-table-row-selected:nth-of-type(even) {
      > .c7n-pro-table-cell,
      .c7n-pro-table-expanded-row > .c7n-pro-table-cell {
        background-color: ${primary1};
      }
    }
    //拖拽线样式
    .c7n-pro-table-split-line.c7n-pro-table-split-line {
      background-color: ${primary6};
    }
    .c7n-pro-table.c7n-pro-table {
      table {
        font-size: 14px;
        //头部样式
        .c7n-pro-table-thead {
          &.c7n-pro-table-column-resizable {
            .c7n-pro-table-cell {
              &:hover {
                // 顶部拖拽边框样式
                .c7n-pro-table-resizer {
                  background-color: rgba(0, 0, 0, 0.15);
                  width: 0.01rem;
                  height: 0.14rem;
                  margin: 0.13rem 0;
                }
              }
            }
          }
        }
        .c7n-pro-table-tbody {
          //属性可展开行样式
          .c7n-pro-table-row {
            //展开图标样式
            .c7n-pro-table-expand-icon {
              &:before {
                color: rgba(0, 0, 0, 0.85);
                font-size: ${d.expandFontSize};
                content: '\\e726';
                font-family: ${iconfontFamily} !important;
                background: transparent;
              }
              &.c7n-pro-table-expand-icon-expanded {
                position: relative;
                border-color: ${primary6};
                &:after {
                  content: '';
                  width: 0.1rem;
                  height: 2px;
                  background-color: ${primary6};
                  position: absolute;
                  top: 6px;
                  left: 2px;
                }
                &:before {
                  display: none;
                }
              }
            }
          }
        }
      }
    }
    .c7n-pro-table-filter-select-multiple-block.c7n-pro-table-filter-select-multiple-block
      > div:not(:last-child) {
      max-width: ${d.blockMaxWidth};
    }
    .c7n-pro-select-dropdown-menu-item-active.c7n-pro-select-dropdown-menu-item-active
      .c7n-pro-table-filter-menu-option
      .c7n-pro-table-filter-menu-option-icons
      .icon {
      display: inline-block;
    }
    /* 支持按钮左右对齐 */
    .c7n-pro-table-dynamic-filter-bar {
      .c7n-pro-table-filter-buttons {
        order: ${d.buttonsAlign === 'left' ? '' : 2};
        margin-left: ${d.buttonsAlign === 'left' ? '' : 'auto'};
      }
    }
    .c7n-pro-table-filter-menu-option.c7n-pro-table-filter-menu-option
      .c7n-pro-table-filter-menu-option-icons {
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
    }
    .c7n-pro-table-wrapper.c7n-pro-table-wrapper {
      /* 移除重复边框（1.3）*/
      .c7n-pro-table-content-overflow {
        border-right: none;
        ::-webkit-scrollbar-thumb {
          background: rgba(28, 28, 28, 0.3);
          border-radius: 0.02rem;
          &:active {
            background: rgba(28, 28, 28, 0.7);
          }
        }
        ::-webkit-scrollbar-track {
          -webkit-box-shadow: none;
          box-shadow: none;
          background: none;
          border-top: 0.01rem solid #e8e8e8;
          border-bottom: 0.01rem solid #e8e8e8;
        }
        ::-webkit-scrollbar {
          height: 0.04rem;
        }
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
        justify-content: flex-end;
        .c7n-pro-table-query-bar {
          order: -1;
          margin-bottom: 8px;
        }
        .c7n-pro-table-toolbar-button-group {
          order: 2;
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
          /* height: 0.24rem; */
          min-height: unset;
        }
      }
      .c7n-pro-table-professional-query-bar {
        &-button .c7n-pro-table-professional-query-more {
          border: none !important;
          box-shadow: none;
          padding: 0 !important;
          margin-left: 8px;
          color: ${primary6} !important;
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
      //筛选
      .c7n-pro-table-dynamic-filter-bar {
        .c7n-pro-table-filter-wrapper {
          width: 100%;
          padding: 0.04rem;
          .c7n-pro-table-filter-content {
            :hover {
              background-color: ${primary1};
              .c7n-pro-table-filter-label {
                color: ${primary6};
              }
            }
            .c7n-pro-table-filter-label {
              font-size: 14px;
              color: rgba(0, 0, 0, 0.65);
            }
            .c7n-pro-table-filter-item {
              > span {
                border: none !important;
                box-shadow: none !important;
              }
              label {
                .c7n-pro-calendar-picker-suffix {
                  border-left: none !important;
                }
              }
            }
          }
        }

        .c7n-pro-table-add-fields,
        .c7n-pro-table-filter-menu-expand {
          margin-left: 0.04rem;
          color: ${primary6};
          font-size: 0.14rem;
          i {
            line-height: 0;
            margin-right: 10px;
          }
          .icon-baseline-arrow_drop_up {
            color: ${primary6};
            background-color: ${primary1};
          }
          .icon-baseline-arrow_drop_down {
            color: rgba(0, 0, 0, 0.65);
          }
          .icon-baseline-arrow_drop_up,
          .icon-baseline-arrow_drop_down {
            :hover {
              color: ${primary6};
              background-color: ${primary1};
            }
            :before {
              content: '${'\\e71f'}';
              font-family: ${iconfontFamily} !important;
            }
          }
        }
        .c7n-pro-table-add-fields {
          :hover {
            color: ${primary6};
            background-color: ${primary1};
            border-radius: 2px;
          }
        }
      }
      .c7n-pro-table-toolbar {
        text-align: right;
      }
      .c7n-pro-table .c7n-pro-table-thead > tr > th {
        background: initial;
        .c7n-pro-table-cell-inner .icon {
          color: ${primary6};
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
          top: -0.01rem;

          ul {
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
            .c7n-pro-table-expand-icon {
              border: 1px solid rgba(0, 0, 0, 0.15);
              color: ${d.expandFontColor};
              width: 16px;
              height: 16px;
              :focus {
                transform: unset;
              }

              &.c7n-pro-table-expand-icon-expanded {
                transform: unset;
              }
            }
            .c7n-pro-table-cell-prefix.c7n-pro-table-cell-prefix {
              padding-right: 0rem;
              padding-left: 0.16rem;
              + .c7n-pro-table-cell-inner {
                padding-left: 12px;
              }
            }
            .c7n-pro-table-tfoot,
            .c7n-pro-table-thead {
              tr {
                th {
                  background: ${d.headBg};
                }
                .c7n-pro-table-cell {
                  border-color: ${d.tableHeaderBorderColor || d.borderColor};
                  padding: ${d.cellPadding || '4px'} 4px;
                  ${getRowBorder(d)}
                  border-bottom: 1px solid #F0F0F0;
                  border-top: none;
                  :first-of-type {
                    border-left-width: 0;
                  }
                  .c7n-pro-table-cell-inner {
                    box-sizing: border-box;
                    padding: 0 0.16rem;
                    /* background: #fff; */
                    height: ${d.headHeight}px !important;
                    line-height: ${d.headHeight}px !important;

                    span {
                      color: ${d.headFontColor};
                      font-weight: ${d.tableCellInnerSpanFontWeight || 'normal'};
                    }
                  }

                  &:last-of-type {
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
            //展开行内容
            .c7n-pro-table-tbody {
              tr.c7n-pro-table-expanded-row {
                thead {
                  tr {
                    th {
                      background: rgba(250, 250, 250);
                    }
                  }
                }
                td {
                  padding: 4px;
                  border-bottom: 1px solid #eef4f9;
                  background: #fff;
                }
                > td {
                  border-bottom: none;
                }
                > .c7n-pro-table-cell {
                  padding: 0;

                  > .c7n-pro-table-cell-inner {
                    background: rgba(0, 0, 0, 0.02);
                    font-size: 14px;
                    color: rgba(0, 0, 0, 0.65);
                    line-height: 22px;
                    padding: 0 0.16rem;
                    padding-right: 0;
                  }
                }
              }
            }
          }

          .c7n-pro-table-row {
            background: ${d.bodyBg};
            td:last-of-type {
              border-right: none;
            }
            .c7n-pro-table-row-selected {
              .c7n-pro-table-cell {
                background: ${primary1} !important;
              }
            }
            .c7n-pro-table-parity-row .c7n-pro-table-row-selected:nth-of-type(even),
            .c7n-pro-table-row-selected + .c7n-pro-table-expanded-row {
              > .c7n-pro-table-cell {
                background-color: ${primary1} !important;
              }
            }

            /* 适配 UI > 1.2 的版本 */
            &.c7n-pro-table-row-current,
            &.c7n-pro-table-row-current > td,
            &.c7n-pro-table-row-current > .c7n-pro-table-cell {
              background: ${primary1};
            }
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
              padding: 4px 4px;
              border-bottom: 1px solid #f0f0f0;

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
                padding: 0 0.16rem;
                color: ${d.bodyFontColor};
              }
            }
          }
        }
      }
    }
    //筛选列表
    .c7n-pro-table-filter-list.c7n-pro-table-filter-list {
      .c7n-pro-table-filter-list-search {
        .c7n-pro-input-wrapper {
          border: none;
          box-shadow: none;
        }
      }
      .c7n-pro-table-filter-list-header {
        .c7n-pro-table-filter-list-search-action {
          color: ${primary6};
        }
      }
      .c7n-pro-table-filter-list-content {
        .c7n-pro-table-filter-list-item {
          .c7n-pro-checkbox:checked {
            ~ .c7n-pro-checkbox-label {
              font-weight: 500;
              color: rgba(0, 0, 0, 0.85);
            }
          }
        }
      }
    }
    .c7n-pro-modal.c7n-pro-modal .c7n-pro-table-filter-modal-item {
      .c7n-pro-field-label {
        text-align: left !important;
      }
    }
    /* 大数据表格 滚动条样式 */
    .c7n-performance-table {
      font-size: 0.14rem;
      .c7n-performance-table-column-group-header-content {
        padding: 0;
      }
      .c7n-performance-table-scrollbar {
        background: #fff;
        border: 0.01rem solid #e8e8e8;
        .c7n-performance-table-scrollbar-handle {
          background: rgba(28, 28, 28, 0.3);
          height: 0.04rem;
          width: 0.04rem;
          border-radius: 0.02rem;
          box-shadow: none;
          -webkit-box-shadow: none;
          &:active {
            background: rgba(28, 28, 28, 0.7);
            box-shadow: none;
            -webkit-box-shadow: none;
          }
        }
        &.c7n-performance-table-scrollbar-horizontal,
        &.c7n-performance-table-scrollbar-vertical {
          &:active {
            box-shadow: none;
            -webkit-box-shadow: none;
          }
        }
      }
      /* 表格行样式 */
      .c7n-performance-table-row {
        &:nth-child(odd) {
          .c7n-performance-table-cell-content {
            background: #fff;
          }
          .c7n-performance-table-row-expanded {
            background: #fff;
          }
        }
        &.c7n-performance-table-row-header {
          .c7n-performance-table-cell {
            color: ${d.headFontColor};
            font-weight: 500;
          }
        }
      }
      .c7n-performance-table-body-row-wrapper {
        color: ${d.bodyFontColor};
        a {
          color: ${primary6};
        }
      }
    }
    .c7n-pro-table-content.c7n-pro-table-content {
      border-color: transparent !important;
      .c7n-pro-table-tbody {
        .c7n-pro-table-row {
          height: 0.38rem;
          border-radius: 0.02rem;
          .c7n-pro-table-cell {
            padding: 0 0.04rem;
            .c7n-pro-table-cell-inner-required {
              background: transparent;
            }
            .c7n-pro-table-cell-inner {
              &.c7n-pro-table-cell-inner-editable {
                background: #fff;
              }
              .c7n-pro-btn-icon-only {
                background: transparent;
                border: none;
                color: ${primary6};
              }
              a {
                color: ${primary6};
              }
              .icon {
                &.icon-finished:before {
                  color: ${d.confirmIconColor};
                }
                &.icon-cancle_a:before {
                  color: ${d.cancelIconColor};
                }
              }
            }
          }
        }
      }
      .c7n-pro-table-editor {
        label {
          background: #fff;
          .c7n-pro-input-number-plus,
          .c7n-pro-input-number-minus {
            height: 0.12rem !important;
          }
        }
      }
    }
    .c7n-pro-table.c7n-pro-table .c7n-pro-table-content table .c7n-pro-table-tfoot tr th,
    .c7n-pro-table.c7n-pro-table .c7n-pro-table-content table .c7n-pro-table-thead tr th {
      /* background: none !important; */
      color: #7c859b;
      &.c7n-pro-table-cell-last {
        .c7n-pro-btn-icon-only {
          border: none;
          width: 0.34rem;
          border-left: 1px solid #eee;
          .icon-settings {
            color: ${d.headFontColor};
            &:before {
              content: '\\EB85';
            }
          }
        }
      }
      &.c7n-pro-table-cell-sticky-shadow {
        &:after {
          box-shadow: none;
        }
      }
    }
    /* 个性化设置样式 */
    .c7n-pro-table-customization.c7n-pro-table-customization {
      .c7n-pro-table-customization-panel-title {
        color: ${primary6};
      }
      .icon-navigate_next {
        font-size: 0.1rem;
        &:before {
          color: ${primary6};
        }
      }
      .icon-expand_more {
        font-size: 0.1rem;
        &:before {
          color: ${primary6};
        }
      }
      .c7n-pro-table-customization-form {
        .c7n-pro-input-number {
          padding-top: 0 !important;
        }
      }
      .c7n-pro-select-box {
        .c7n-pro-table-customization-option {
          .c7n-pro-input-number {
            height: 0.32rem;
          }
        }
      }
      .c7n-pro-table-customization-tree-treenode {
        padding: 0rem 0.08rem 0rem 0.1rem;
        &:hover {
          background: rgba(56, 107, 215, 0.1);
          border-radius: 0.02rem;
        }
        &.c7n-pro-table-customization-tree-treenode-hover {
          &:before {
            background: none;
          }
        }
        button.c7n-pro-table-customization-tree-treenode-hover-button {
          background: transparent !important;
          border: none !important;
        }
        .c7n-pro-table-customization-tree-treenode-switcher {
          .icon {
            &:before {
              color: #000;
            }
          }
        }
        .c7n-pro-table-customization-tree-treenode-title {
          .c7n-pro-table-customization-tree-treenode-title-text {
            position: relative;
            top: -0.01rem;
          }
          .c7n-pro-table-customization-tree-treenode-switcher {
            position: relative;
            top: 0.02rem;
          }
        }
      }
    }
  `;
}

export default getTableCss;
