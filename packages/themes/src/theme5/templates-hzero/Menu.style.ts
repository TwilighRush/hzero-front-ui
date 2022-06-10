import { css } from 'styled-components';
import { getThemeData } from '@hzero-front-ui/core';

const stepsStyle = (props) => {
  const { primary1, primary6 } = getThemeData(props, 'common');
  return css`
    .ant-menu.ant-menu {
      //去除右侧边框
      .ant-menu-item:after {
        display: none;
      }
      //明亮主题
      &.ant-menu-light {
        //hover样式
        .ant-menu-item:hover,
        .ant-menu-item-active,
        .ant-menu:not(.ant-menu-inline) .ant-menu-submenu-open,
        .ant-menu-submenu-active,
        .ant-menu-submenu-title:hover {
          background-color: ${primary1};
          color: rgba(0, 0, 0, 0.65);
          a,
          i {
            color: rgba(0, 0, 0, 0.65);
          }
        }

        .ant-menu-submenu-selected,
        .ant-menu-vertical .ant-menu-submenu-selected,
        .ant-menu-vertical-left .ant-menu-submenu-selected,
        .ant-menu-vertical-right .ant-menu-submenu-selected {
          color: ${primary6};
          i {
            color: ${primary6};
          }
        }
        .ant-menu-submenu-selected i {
          color: inherit;
        }
        .ant-menu-item:active,
        .ant-menu-submenu-title:active {
          background-color: ${primary1};
          color: ${primary6};
          i {
            color: ${primary6};
          }
        }
        .ant-menu-item:active,
        .ant-menu-item:focus,
        .ant-menu-item-selected,
        .ant-menu-item-selected > a,
        .ant-menu-item-selected > a:hover {
          background-color: ${primary1};
          color: ${primary6};
          i {
            color: ${primary6};
          }
        }
        .ant-menu-submenu-inline,
        .ant-menu-submenu-vertical,
        .ant-menu-submenu-vertical-left,
        .ant-menu-submenu-vertical-right {
          > .ant-menu-submenu-title {
            :hover {
              .ant-menu-submenu-arrow:before,
              .ant-menu-submenu-arrow:after {
                background-image: linear-gradient(to right, #595959, #595959);
              }
            }
            :focus,
            :active {
              .ant-menu-submenu-arrow:before,
              .ant-menu-submenu-arrow:after {
                background-image: linear-gradient(to right, ${primary6}, ${primary6});
              }
            }
          }
        }
      }

      &.ant-menu-dark.ant-menu-dark {
        .ant-menu-item {
          :hover {
            background-color: ${primary6};
            color: #fff;
            i {
              color: #fff;
            }
          }
        }
        .ant-menu-item:active,
        .ant-menu-item:focus,
        .ant-menu-item-selected,
        .ant-menu-item-selected > a,
        .ant-menu-item-selected > a:hover {
          background-color: ${primary6};
          color: #fff;
          i {
            color: #fff;
          }
        }
      }
    }
  `;
};
export default stepsStyle;
