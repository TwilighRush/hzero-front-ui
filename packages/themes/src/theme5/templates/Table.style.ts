import { css } from 'styled-components';
import { getThemeData } from '@hzero-front-ui/core';
import deleteIcon from '@hzero-front-ui/c7n-ui/lib/themes/icons/delete.png';
import editIcon from '@hzero-front-ui/c7n-ui/lib/themes/icons/edit.png';
import favoriteIcon from '@hzero-front-ui/c7n-ui/lib/themes/icons/favorite.png';
import favoriteDefaultIcon from '@hzero-front-ui/c7n-ui/lib/themes/icons/default-favorite.png';

function getRowBorder(d: any) {
  return d.bordered
    ? css`
        border-left: 1px solid transparent;
        border-right: 1px solid transparent;
      `
    : 'border-left: none; border-right: none;';
}

function getTableCss(props: any) {
  const d = getThemeData(props, 'table');
  const fc = getThemeData(props, 'formColor');
  const {
    primary,
    primary6,
    primary1,
    titleColor1,
    titleColor2,
    titleColor3,
    lineColor1,
    lineColor2,
    errorColor,
    warningColor,
    iconfontFamily,
    infoColor,
    infoBgColor,
  } = getThemeData(props, 'common');
  const { background, borderColor, errorFontColor, errorBgColor } = getThemeData(props, 'input');
  const { minWidth } = getThemeData(props, 'dropdown');
  return css`
    //拖拽线样式
    .c7n-pro-table-split-line.c7n-pro-table-split-line {
      background-color: ${primary6};
    }
    //偶数行背景颜色
    .c7n-pro-table-parity-row.c7n-pro-table-parity-row
      .c7n-pro-table-row:nth-of-type(even)
      > .c7n-pro-table-cell {
      background-color: ${d.stripedBg};
    }
    //顶部按钮组
    .c7n-pro-table-button-menu-item {
      display: flex;
      align-items: center;
    }
    // 拖拽样式的小竖线样式
    .c7n-pro-table-thead.c7n-pro-table-thead {
      &.c7n-pro-table-column-resizable {
        .c7n-pro-table-cell {
          &:hover {
            .c7n-pro-table-resizer {
              position: absolute;
              height: 100%;
              display: flex;
              align-items: center;
              justify-content: center;
              :before {
                content: '';
                background-color: ${lineColor2};
                width: 0.01rem;
                height: 0.2rem;
              }
            }
          }
        }
      }
    }
    //table自定义设置中
    .c7n-pro-table-dropdown-menu.c7n-pro-table-dropdown-menu {
      padding: 0;
      .c7n-pro-table-dropdown-menu-item {
        margin: 0rem;
        padding: 0 0.08rem;
        color: ${titleColor2};
        height: 0.28rem;
        line-height: 0.28rem;
        min-width: ${minWidth}px;
        font-size: 0.12rem;
        &:hover,
        &.c7n-pro-table-dropdown-menu-item-active {
          background-color: ${primary1};
        }
        &.c7n-pro-table-dropdown-menu-item-selected {
          background-color: ${primary1};
          color: ${primary6};
        }
        &.c7n-pro-table-dropdown-menu-item-disabled.c7n-pro-table-dropdown-menu-item-disabled:hover,
        &.c7n-pro-table-dropdown-menu-item-disabled.c7n-pro-table-dropdown-menu-item-disabled {
          background-color: #fff;
          color: ${titleColor2};
        }
      }
    }
    /* 组合搜索框样式覆盖 */
    .c7n-pro-table-combo-toolbar-filter.c7n-pro-table-combo-toolbar-filter {
      .c7n-pro-input-group-wrapper .c7n-pro-input-group-before {
        border: none;
        padding-right: 6px;
      }
    }
    .c7n-pro-table-cell-command.c7n-pro-table-cell-command {
      + .c7n-pro-table-cell-command.c7n-pro-table-cell-command.c7n-pro-table-cell-command {
        margin-left: 16px;
      }
    }
    //聚合视图下操作列的按钮魏display:block
    .c7n-pro-table-aggregation.c7n-pro-table-aggregation {
      .c7n-pro-table-cell-command.c7n-pro-table-cell-command {
        display: block;
        margin-bottom: 0;
      }
    }
    .c7n-pro-table-aggregation.c7n-pro-table-aggregation {
      .c7n-pro-table-cell-label {
        font-size: ${d.fontSize}px;
      }
    }
    //去除因为边框导致的不居中问题
    .c7n-pro-table-cell-inner-bordered.c7n-pro-table-cell-inner-bordered {
      border: none;
    }
    //内容部分
    .c7n-pro-table-content.c7n-pro-table-content {
      border-color: transparent !important;
      .c7n-pro-table-tbody {
        .c7n-pro-table-row {
          .c7n-pro-table-cell {
            padding: 0 0.04rem;
            .c7n-pro-table-cell-inner {
              &.c7n-pro-table-cell-inner-editable {
                background: transparent;
                border-radius: 0.02rem;
                border: 0.01rem solid ${lineColor1};
                &.c7n-pro-table-cell-inner-required {
                  border-color: ${warningColor};
                }
                &.c7n-pro-table-cell-inner-invalid {
                  border-color: ${errorColor};
                }
              }
              .c7n-pro-btn-icon-only {
                background: transparent;
                border: none;
                color: ${primary6};
              }
              a {
                color: ${primary6};
                &[disabled] {
                  color: ${titleColor3};
                }
              }
              .c7n-pro-table-cell-tree-treenode {
                /* padding-bottom: ${d.paddingAggregationTop}px; */
                .c7n-pro-table-cell-tree-title {
                  font-size: ${d.fontSize}px;
                }
              }
            }
          }
        }
      }
      .c7n-pro-table-cell-inner-dirty {
        &:after {
          // display: none;
          border-top-color: ${primary};
          border-left-color: ${primary};
        }
      }
      //内容为空
      .c7n-pro-table-empty-row {
        color: ${titleColor3};
      }
    }
    //头部和底部
    .c7n-pro-table.c7n-pro-table .c7n-pro-table-content table .c7n-pro-table-tfoot tr th,
    .c7n-pro-table.c7n-pro-table .c7n-pro-table-content table .c7n-pro-table-thead tr th {
      color: ${titleColor3};
      &.c7n-pro-table-cell-last.c7n-pro-table-customized-column {
        > .c7n-pro-table-cell-inner {
          .c7n-pro-btn-icon-only {
            .icon-predefine {
              :before {
                content: '\\e782';
                font-family: ${iconfontFamily};
              }
            }
          }
          &.c7n-pro-table-cell-inner-row-height-fixed {
            button {
              border-left: 1px solid ${lineColor1};
              border-radius: 0;
              color: ${titleColor3};
              :hover {
                color: ${primary6};
                border-radius: 2px;
              }
              .icon {
                line-height: 1;
              }
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

    .c7n-pro-table-wrapper.c7n-pro-table-wrapper {
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
        .c7n-pro-table-filter-select-suffix.c7n-pro-table-filter-select-suffix {
          opacity: 1;
        }
        .c7n-pro-table-filter-select-clear-button {
          right: 0.7rem;
          top: 0.06rem;
          .icon-close:before {
            color: ${titleColor2};
          }
        }
        .icon-filter_list {
          color: ${d.filterIconColor};
        }
        .c7n-pro-table-filter-select-placeholder {
          font-size: ${d.filterPlaceholderFontSize};
          color: ${d.filterPlaceholderColor};
          padding: ${d.filterSelectLinePadding};
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
              content: '\\e740';
              font-family: ${iconfontFamily};
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
        border-left: ${d.bordered ? 1 : 0}px solid transparent;
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
          /* .icon {
            font-size: 22px;
          } */
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
      .c7n-pro-table-toolbar {
        text-align: right;
      }
      .c7n-pro-table .c7n-pro-table-thead > tr > th {
        background: initial;
      }
      .c7n-pro-content {
        overflow: visible;
      }
      .c7n-pro-table {
        border-color: transparent !important;
        ${getRowBorder(d)};
        table {
          border-collapse: collapse;
          font-size: ${d.fontSize}px;
        }
        &.c7n-pro-table-bordered {
          ${d.bordered
            ? css`
                border-left: 1px solid transparent;
                border-right: 1px solid transparent;
              `
            : ''}
        }
        .c7n-pro-table-editor {
          ul {
            .icon {
              margin-top: -5px;
            }
          }
        }
        .c7n-pro-table-content {
          table {
            /* .c7n-pro-table-expanded-row + tr.c7n-pro-table-row > td.c7n-pro-table-cell {
              border-top: 1px solid transparent;
            } */
            .c7n-pro-table-cell-inner {
              padding: 0 8px;
            }
            //树形展开图标
            .c7n-pro-table-expand-icon {
              font-size: ${d.expandFontSize};
              color: ${d.expandFontColor};
              border-color: ${lineColor1};
              border-radius: 2px;
              width: 16px;
              height: 16px;
              :focus {
                transform: unset;
              }
              :before {
                font-family: ${iconfontFamily};
                content: '\\e764';
                display: inline-block;
                width: 14px;
                height: 14px;
                color: ${titleColor2};
                padding: 1px 0 0 1px;
              }
              &.c7n-pro-table-expand-icon-expanded {
                border: 1px solid ${primary6};
                transform: unset;
                position: relative;
                :before {
                  display: none;
                }
                :after {
                  content: '';
                  width: 0.08rem;
                  height: 0;
                  border-top: 2px solid ${primary6};
                  position: absolute;
                  top: 6px;
                  left: 3px;
                }
              }
            }
            //单元前缀样式
            .c7n-pro-table-cell-prefix {
              margin-right: 0rem;
              padding-right: 8px;
              align-items: center;
              padding-left: 8px;
              .c7n-pro-table-expand-icon + .c7n-pro-checkbox-wrapper {
                margin-left: 4px;
              }
            }
            .c7n-pro-table-tfoot,
            .c7n-pro-table-thead {
              tr {
                th {
                  background: ${d.headBg} !important;
                }
                .c7n-pro-table-cell {
                  font-size: ${d.fontSize}px;
                  background: initial;
                  border: none;
                  padding: 3px 8px;
                  ${getRowBorder(d)}
                  border-bottom: 1px solid ${lineColor2};
                  border-top: 1px solid ${lineColor2};
                  /* :first-of-type {
                    border-left-width: 0;
                  } */
                  .c7n-pro-table-cell-inner {
                    box-sizing: border-box;
                    padding: 0 8px;
                    &.c7n-pro-table-cell-search-header {
                      /* 修复表格内部的组合框筛选样式 */
                      padding: 0;
                    }
                    span {
                      color: ${titleColor3};
                      font-weight: 500;
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
            //这里是hover样式
            &.c7n-pro-table-row-current,
            &.c7n-pro-table-row-current > td,
            &.c7n-pro-table-row-current > .c7n-pro-table-cell,
            &.c7n-pro-table-row-hover,
            &.c7n-pro-table-row-hover > td,
            &.c7n-pro-table-row-hover > .c7n-pro-table-cell,
            :hover,
            :hover > td,
            :hover > .c7n-pro-table-cell {
              background: ${primary1};
            }
            /* 只改变默认 tag 的颜色 */
            :hover [class='c7n-tag'],
            :hover [class*='multiple-block'] {
              color: ${infoColor};
              background: ${infoBgColor};
            }
            //勾选行高亮背景色修改
            &.c7n-pro-table-row-selected.c7n-pro-table-row-selected,
            &.c7n-pro-table-parity-row.c7n-pro-table-parity-row .c7n-pro-table-row-selected {
              > .c7n-pro-table-cell,
              + .c7n-pro-table-expanded-row > .c7n-pro-table-cell {
                background-color: ${primary1};
              }
            }
            .c7n-pro-table-cell {
              ${getRowBorder(d)};
              border-color: transparent;
              box-sizing: border-box;
              padding: 3px 8px;
              border: none;

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
                /* padding: 0 0.1rem; */
                font-size: ${d.fontSize}px;
                color: ${titleColor1};
              }
              &.c7n-pro-table-cell-fix-left {
                line-height: 1;
              }
            }
            /* .c7n-pro-table-cell-aggregation {
              padding-top: ${d.paddingAggregation}px;
            }
            .c7n-pro-table-cell-aggregation + .c7n-pro-table-cell-fix-right {
              padding-top: ${d.paddingAggregation - 4}px;
            } */
          }
        }
      }
    }
  `;
}
//筛选条样式
const queryBarCss = (props) => {
  const d = getThemeData(props, 'table');
  const { primary6, lineColor1 } = getThemeData(props, 'common');
  const btnData = getThemeData(props, 'button');
  const types = [
    'c7n-pro-color-picker',
    'c7n-pro-cascader',
    'c7n-pro-auto-complete',
    'c7n-pro-icon-picker',
    'c7n-pro-calendar-picker',
    'c7n-pro-input',
    'c7n-pro-password',
    'c7n-pro-textarea',
    'c7n-pro-input-number',
    'c7n-pro-select',
    'c7n-pro-tree-select',
  ];
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
    //bar样式
    .c7n-pro-table-filter-select-wrapper.c7n-pro-table-filter-select-wrapper {
      .c7n-pro-table-filter-select-select-field {
        font-size: 12px;
        line-height: 24px;
      }
    }
    //query-bar样式
    .c7n-pro-table-professional-query-bar.c7n-pro-table-professional-query-bar,
    .c7n-performance-table-professional-query-bar.c7n-performance-table-professional-query-bar {
      [class*='-table-professional-query-bar-button'] {
        padding: 0.06rem 0 0.06rem 0.7rem;
      }
    }
    //filter-bar 筛选条
    .c7n-performance-table-dynamic-filter-bar.c7n-performance-table-dynamic-filter-bar,
    .c7n-pro-table-dynamic-filter-bar.c7n-pro-table-dynamic-filter-bar {
      .c7n-pro-table-filter-menu {
        //默认筛选样式
        .c7n-pro-table-filterName-select.c7n-pro-table-filterName-select {
          input {
            border: none;
            &:hover,
            &:active,
            &:focus {
              box-shadow: none;
            }
          }
        }
        //tag标签样式
        .c7n-pro-table-filter-status {
          margin: 0 0.12rem;
          padding: 0;
          line-height: 16px;
          height: 16px;
          border: none;
          background: #e6ffea;
          color: #11d954;
          + .c7n-pro-table-filter-buttons {
            button:first-child {
              margin: 0;
            }
          }
        }
        //垂直分割线
        .c7n-pro-table-filter-search-divide {
          background-color: ${lineColor1};
        }
        /* 支持按钮左右对齐 */
        .c7n-pro-table-filter-buttons {
          /* order: ${d.buttonsAlign === 'left' ? '' : 2}; */
          /* margin-left: ${d.buttonsAlign === 'left' ? '' : 'auto'}; */
          grid-gap: 0;
          gap: 0;
          button {
            height: 24px !important;
            min-width: 40px !important;
            padding: 3px 8px !important;
          }
        }
        .c7n-pro-table-dynamic-filter-toolbar {
          margin-left: ${d.buttonsAlign === 'left' ? '12px' : 'auto'};
        }
      }
      //搜索框部分内容
      [class*='-dynamic-filter-single-wrapper'] {
        .c7n-pro-table-filter-wrapper {
          width: 100%;
          padding: 0;
          padding-left: 0.04rem;
          span,
          input {
            background-color: transparent;
          }
          .c7n-pro-table-filter-content {
            margin-top: 0.02rem;
            margin-bottom: 0.02rem;
            .c7n-pro-table-filter-label {
              padding-top: 0;
              font-size: ${d.fontSize}px;
            }
            .c7n-pro-table-filter-item {
              [class*='-placeholder'] {
                padding: 0;
              }
              [class*='-suffix'][class*='-suffix'] {
                border-color: transparent !important;
                box-shadow: none;
              }
              > span {
                ${types.map((type) => {
                  return css`
                    .${type}.${type} {
                      border: none;
                      box-shadow: none;
                      padding: 0 auto;
                      padding-top: 0;
                      padding-bottom: 0;

                      flex: 1;
                    }
                  `;
                })}
              }

              label {
                .c7n-pro-calendar-picker-suffix {
                  border-left: none !important;
                }
              }
            }
            .c7n-pro-table-filter-item-close {
              display: none;
            }
            :focus-within,
            :hover {
              .c7n-pro-table-filter-item-close {
                display: inline-block;
              }
            }
          }
          .c7n-pro-table-filter-item {
            .c7n-pro-input-number-inner-button i {
              line-height: 1;
            }
            .c7n-pro-table-add-fields {
              /* line-height: 0.24rem; */
              .icon.icon-add {
                margin-right: 0.04rem;
                line-height: 0;
              }
              :hover,
              :focus {
                background: transparent;
                color: ${primary6};
              }
            }
            .c7n-pro-table-add-fields,
            .c7n-pro-table-filter-menu-expand {
              margin-left: 0.04rem;
              color: ${d.bodyFontColor};
              font-size: ${d.fontSize}px;
            }
          }
        }
        .c7n-pro-table-dynamic-filter-bar-single-action {
          .c7n-pro-table-filter-menu-query .icon-refresh {
            line-height: ${btnData.height - 6}px;
          }
        }
      }
    }
    //添加筛选展开内容
    .c7n-pro-table-filter-list.c7n-pro-table-filter-list {
      margin: -8px;
      .c7n-pro-table-filter-list-search {
        .c7n-pro-input-wrapper.c7n-pro-input-prefix-button {
          .c7n-pro-input-prefix {
            border-right: none !important;
          }
        }
      }
      .c7n-pro-table-filter-list-header {
        .c7n-pro-table-filter-list-search-action {
          color: ${primary6};
        }
      }
    }
    //默认筛选下拉展示框
    .c7n-pro-select-dropdown-menu-item.c7n-pro-select-dropdown-menu-item {
      .c7n-pro-table-filter-menu-option {
        align-items: center;
        .c7n-pro-table-filter-menu-option-icons,
        .c7n-pro-table-filter-menu-option-selected {
          color: ${primary6};
          align-items: center;
        }
        .c7n-pro-table-filter-menu-option-icons {
          .icon {
            width: 16px;
            height: 16px;
            background-size: cover;
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
      }
      &.c7n-pro-select-dropdown-menu-item-active {
        .c7n-pro-table-filter-menu-option {
          .c7n-pro-table-filter-menu-option-selected {
            .icon:before {
              display: none;
            }
          }
          .c7n-pro-table-filter-menu-option-icons {
            .icon {
              display: inline-block;
            }
          }
        }
      }
    }
    //未找到位置的样式
    .c7n-pro-modal.c7n-pro-modal .c7n-pro-table-filter-modal-item {
      .c7n-pro-field-label {
        text-align: left !important;
      }
    }
    .c7n-pro-table-filter-select-multiple-block.c7n-pro-table-filter-select-multiple-block
      > div:not(:last-child) {
      max-width: ${d.blockMaxWidth};
    }

    .c7n-pro-table-filter-select.c7n-pro-table-filter-select {
      .c7n-pro-select-wrapper {
        background-color: transparent;
      }
      .c7n-pro-table-filter-select-multiple-input {
        border: none;
        box-shadow: none;
        input {
          height: 24px !important;
          border: none !important;
          &.c7n-pro-table-filter-select-inner-editor {
            box-shadow: none;
          }
        }
        /* 解决过滤条撑出滚动条问题 */
        ${filterBarFix()}
      }
    }
  `;
};

//自定义个性化设置
const customizationCss = (props) => {
  const { primary1, primary6 } = getThemeData(props, 'common');
  return css`
    /* 个性化设置 */
    .c7n-pro-table-customization.c7n-pro-table-customization {
      .c7n-collapse-content.c7n-collapse-content.c7n-collapse-content {
        padding: 0 0.2rem;
      }
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
        // 个性化显示设置中选中样式修复
        .c7n-pro-select-box-wrapper {
          .c7n-pro-radio-inner {
            z-index: 3 !important;
            background-color: transparent !important;
            &::after {
              top: -6px !important;
              z-index: 2;
            }
          }
        }
      }
    }
    .c7n-pro-table-customization.c7n-pro-table-customization {
      //表头设置部分
      .c7n-pro-table-customization-panel-content {
        .c7n-pro-table-customization-tree {
          .c7n-pro-table-customization-tree-treenode {
            padding: 0rem 0.08rem 0rem 0.1rem;
            //hover样式
            &:hover {
              background: ${primary1};
              border-radius: 0.02rem;
            }
            &.c7n-pro-table-customization-tree-treenode-hover {
              &:before {
                background: none;
              }
            }

            .c7n-pro-table-customization-tree-treenode-content {
              height: 0.28rem;
              min-height: 0.28rem;
              padding: 0;
              //拖拽图标
              .c7n-pro-table-customization-tree-treenode-drag-icon {
                margin-right: 8px;
              }
              //拖拽标题
              .c7n-pro-table-customization-tree-treenode-title {
                .c7n-pro-table-customization-tree-treenode-title-text {
                  position: relative;
                  top: 0;
                }
                .c7n-pro-table-customization-tree-treenode-switcher {
                  position: relative;
                  top: 0rem;
                  display: flex;
                  justify-content: center;
                  align-items: center;
                  height: 0.28rem;
                  padding: 0;
                  .icon {
                    &:before {
                      color: #000;
                    }
                  }
                }
              }
              //拖拽按钮
              .c7n-pro-table-customization-tree-treenode-hover-button {
                background: transparent;
                border: none;
              }
            }
          }
          //拖拽ing样式
          .c7n-pro-table-customization-tree-treenode-dragging {
            .c7n-pro-table-customization-tree-treenode-drag-icon {
              color: ${primary6};
            }
          }
        }
      }
    }
  `;
};
const TableStyle = css`
  ${queryBarCss}
  ${getTableCss}
  ${customizationCss}
`;
export default TableStyle;
