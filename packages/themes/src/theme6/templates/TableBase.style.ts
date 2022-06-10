import { css } from 'styled-components';
import { getThemeData } from '@hzero-front-ui/core';

function getTableCss(props: any) {
  const d = getThemeData(props, 'table');
  const colors = getThemeData(props, 'colors');
  const { primary6, primary1, iconfontFamily } = getThemeData(props, 'common');
  const stripedStyle = css``;
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
      color: ${colors.primary6};
    }
    width: 100%;
    .c7n-table {
      width: 100%;
      .c7n-table-bordered .c7n-table-title {
        border-top: ${d.titleBorderTop};
      }
      a {
        color: ${colors.primary6};
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
                font-size: ${d.headFontSize}px;
                color: ${d.headFontColor};
              }
            }
          }
          .c7n-table-tbody {
            .c7n-input-wrapper {
              background: ${d.bodyBg};
            }
            .c7n-table-row-hover > td,
            tr:hover > td {
              background: ${d.bodyHoverBg} !important;
            }
            .c7n-table-expanded-row td {
              padding: 0.08rem 0;
              background-color: rgba(0, 0, 0, 0.02) !important;
              font-size: 14px;
              color: rgba(0, 0, 0, 0.65);
              line-height: 22px;
            }
            > tr.c7n-table-row-selected td {
              background-color: ${primary1};
            }
            .c7n-table-row {
              min-height: ${d.rowHeight}px;
              td {
                box-sizing: border-box;

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
                  transform: unset;
                  position: relative;
                  width: 16px;
                  height: 16px;
                  border: 1px solid rgba(0, 0, 0, 0.15);
                  border-radius: ${d.expandRadius};
                  :focus {
                    transform: unset;
                  }
                  :before {
                    content: '\\e726';
                    display: inline-block;
                    font-family: ${iconfontFamily} !important;
                    color: ${d.notExpandColor};
                  }
                  &.c7n-table-row-expanded {
                    transform: unset;
                    border-color: ${primary6};
                    :after {
                      content: '';
                      width: 0.1rem;
                      height: 2px;
                      background-color: ${primary6};
                      position: absolute;
                      top: 6px;
                      left: 2px;
                    }
                    :before {
                      display: none;
                    }
                  }
                }
              }
            }
            ${d.striped ? stripedStyle : ''}
            a {
              color: ${primary6};
            }
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
              line-height: 20px;
              padding: 8px;
              background: ${d.headBg}!important;
              border: solid ${d.borderColor};
              border-top: 1px solid ${d.borderColor};
              border-width: ${d.bordered ? '1px' : 0};
              border-bottom: 1px solid ${d.borderColor};
              span {
                font-size: ${d.bodyFontSize}px;
                background: none;
                color: ${d.bodyFontColor};
                line-height: 20px;
              }
            }
          }
          .c7n-table-tbody {
            .c7n-table-row {
              td {
                height: ${d.rowHeight}px;
                padding: 8px;
                line-height: 20px;
                border-bottom: 1px solid #eef4f9;
                border-right: solid ${d.borderColor};
                border-right-width: ${d.bordered ? '1px' : 0};
              }
            }
            ${d.striped ? stripedStyle : ''};
          }
        }
      }
    }
  `;
}

const tableCss = css`
  .c7n-table-wrapper.c7n-table-wrapper {
    ${getTableCss};
  }
`;

export default tableCss;
