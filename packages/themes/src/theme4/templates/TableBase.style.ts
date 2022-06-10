import { css } from 'styled-components';
import { getThemeData, createStyleComponent } from '@hzero-front-ui/core';

function getTableCss(props: any) {
  const d = getThemeData(props, 'table');
  const colors = getThemeData(props, 'colors');
  const stripedStyle = css`
    .c7n-table-row {
      &:nth-of-type(2n) {
        background-color: ${d.stripedBg};
      }
    }
  `;
  return css`
    .c7n-pro-table-filter-select-multiple-block > div:not(:last-child) {
      max-width: ${d.blockMaxWidth};
    }
    .c7n-pro-table-filter-select-wrapper {
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
    .c7n-table-filter-bar {
      border-bottom: none;
    }
    .c7n-table-filter-dropdown-link {
      color: ${colors.primary};
    }
    width: 100%;
    .c7n-table {
      width: 100%;
      .c7n-table-bordered .c7n-table-title {
        border-top: ${d.titleBorderTop};
      }
      a {
        color: ${colors.primary};
      }
      .c7n-table-content {
        .c7n-table-body {
          table {
            border: 1px solid ${d.borderColor};
            border-width: ${d.bordered ? '1px' : 0};
          }
          .c7n-table-thead {
            tr > th {
              height: ${d.headHeight}px;
              min-height: ${d.headHeight}px;
              padding: 0 8px;
              background: ${d.headBg} !important;
              border-color: ${d.borderColor};
              border-right: solid ${d.borderColor};
              border-width: ${d.bordered ? '1px' : 0};
              border-bottom: 1px solid ${d.borderColor};
              span {
                font-family: ${d.fontFamily};
                font-size: ${d.headFontSize}px;
                color: ${d.headFontColor};
              }
            }
          }
          .c7n-table-tbody {
            .c7n-table-row-hover > td,
            tr:hover > td {
              background: ${d.bodyHoverBg} !important;
            }
            .c7n-table-expanded-row td {
              padding: 0.08rem 0;
            }
            .c7n-table-row {
              min-height: ${d.rowHeight}px;
              td {
                box-sizing: border-box;
                font-family: ${d.fontFamily};
                font-size: ${d.bodyFontSize}px;
                min-height: ${d.rowHeight}px;
                border-right: solid;
                padding: 8px;
                color: ${d.bodyFontColor};
                line-height: 20px;
                border-bottom: 1px solid #eef4f9;
                border-right-width: ${d.bordered ? '1px' : 0};
              }
              .c7n-table-row-expand-icon-cell {
                .c7n-table-row-expand-icon {
                  font-size: ${d.expandFontSize};
                  color: ${d.expandFontColor};
                  padding-top: ${d.expandIconPaddingTop};
                  transform: unset;
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
                    background: ${d.notExpandBackground};
                    color: ${d.notExpandColor};
                  }
                  &.c7n-table-row-expanded {
                    transform: unset;
                    :before {
                      color: ${d.expandColor};
                      content: '${d.collapseContent}';
                      background-image: url('${d.expandedIcon}');
                      background: ${d.expandBackground};
                    }
                  }
                }
              }
            }
            ${d.striped ? stripedStyle : ''}
          }
        }
        .c7n-table-fixed-right,
        .c7n-table-fixed-left {
          .c7n-table-fixed {
            border-width: 1px;
          }
          .c7n-table-row-hover > td,
          tr:hover > td {
            background: ${d.bodyHoverBg} !important;
          }
          .c7n-table-thead {
            > tr > th {
              height: ${d.headHeight}px;
              min-height: ${d.headHeight}px;
              padding: 0 8px;
              background: ${d.headBg} !important;
              border-color: ${d.borderColor};
              border-right: solid ${d.borderColor};
              border-width: ${d.bordered ? '1px' : 0};
              border-bottom: 1px solid ${d.borderColor};
              span {
                font-family: ${d.fontFamily};
                font-size: ${d.headFontSize}px;
                color: ${d.headFontColor};
              }
            }
          }
          .c7n-table-tbody {
            .c7n-table-row {
              td {
                box-sizing: border-box;
                font-family: ${d.fontFamily};
                font-size: ${d.bodyFontSize}px;
                min-height: ${d.rowHeight}px;
                border-right: solid;
                padding: 8px;
                color: ${d.bodyFontColor};
                line-height: 20px;
                border-bottom: 1px solid #eef4f9;
                border-right-width: ${d.bordered ? '1px' : 0};
              }
            }
            .c7n-table-expanded-row td {
              padding: 0.08rem 0;
            }
            ${d.striped ? stripedStyle : ''};
          }
        }
      }
    }
  `;
}

const tableCss = css`
  .c7n-table-wrapper {
    ${getTableCss};
  }
`;

export default tableCss;
