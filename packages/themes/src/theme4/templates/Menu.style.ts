import { css } from 'styled-components';
import { getThemeData, createStyleComponent } from '@hzero-front-ui/core';

const MenuStyle = (props) => {
  const { fontColor } = getThemeData(props, 'menu');
  const d = getThemeData(props, 'steps');
  return css`
    .c7n-menu.c7n-menu {
      color: ${fontColor};
      /* steps */
      &.c7n-steps-dropdown-menu {
        .c7n-steps-item {
          &.c7n-steps-item-finish {
            .c7n-steps-item-icon {
              background: ${d.finishIconBg};
              border: ${d.finishIconBorder};
              span {
                color: ${d.finishIconColor};
              }
            }
          }
          &.c7n-steps-item-process {
            .c7n-steps-item-icon {
              border: ${d.processIconBorder};
              background: ${d.processIconBg};
              .c7n-steps-icon {
                color: ${d.processIconColor};
              }
            }
          }
          &.c7n-steps-item-error {
            .c7n-steps-item-icon {
              border: ${d.errorIconBorder || '#fd6868'};
              background: ${d.errorIconBg || '#fd6868'};
              .c7n-steps-icon {
                color: ${d.errorIconColor || '#fff'};
              }
            }
          }
          &.c7n-steps-item-wait {
            .c7n-steps-item-icon {
              border: ${d.waitingIconBorder};
              background: ${d.waitingIconBg};
              .c7n-steps-icon {
                color: ${d.waitingIconColor};
              }
            }
            div.c7n-steps-item-title {
              color: ${d.titleFontColor};
              > span {
                color: ${d.titleFontColor};
              }
            }
          }
          .c7n-steps-item-dropdown-title {
            color: ${d.finishTitleColor};
          }
        }
      }
      .c7n-menu-item {
        [class*='-btn'] {
          line-height: 1.5;
        }
      }
    }
  `;
};

export default MenuStyle;
