import { css } from "styled-components";
import { createStyleComponent, getThemeData } from "@hzero-front-ui/core";

const getDropdownCss = (props) => {
  const { radius } = getThemeData(props, "button");
  return css`
    .c7n-btn-group.c7n-pro-dropdown-button {
      && {
        border-radius: ${radius}px;
        .c7n-pro-btn {
          &:nth-child(1) {
            border-top-right-radius: 0;
            border-bottom-right-radius: 0;
            border-top-left-radius: ${radius}px;
            border-bottom-left-radius: ${radius}px;
          }
          &:nth-child(2) {
            border-top-left-radius: 0;
            border-bottom-left-radius: 0;
            border-top-right-radius: ${radius}px;
            border-bottom-right-radius: ${radius}px;
            .icon-arrow_drop_down {
              ::before {
                content: "";
              }
            }
          }
          &:nth-child(2).c7n-pro-btn-disabled {
            button {
              .icon-arrow_drop_down {
                line-height: 0;
              }
            }
            &:hover {
              i {
                animation: none;
              }
            }
          }
        }
      }
    }
  `;
};

export default createStyleComponent("dropdown", getDropdownCss);
