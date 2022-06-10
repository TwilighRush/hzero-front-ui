import { css } from "styled-components";
import { getThemeData, createStyleComponent } from "@hzero-front-ui/core";

const getCardCss = (props) => {
  const { primary } = getThemeData(props, "common");
  return css`
    .c7n-card {
      && {
        a {
          color: ${primary};
        }
        &.c7n-card-bordered {
          border: 0.01rem solid #e8e8e8;
        }
        border: initial;
        padding: 0 8px;
        .c7n-card-head {
          padding: 0 12px;
          position: relative;
          border-color: #f1f1f1;
          &-wrapper {
            min-height: 48px;
            align-items: center;
          }
          &:before {
            content: "";
            display: block;
            position: absolute;
            left: 0;
            top: 50%;
            transform: translateY(-50%);
            width: 3px;
            height: 22px;
            background: ${primary};
          }
          &-title {
            line-height: 16px;
            font-size: 16px;
            &:before {
              content: "";
              display: inline-block;
              height: 100%;
              width: 0;
              vertical-align: middle;
            }
            > * {
              vertical-align: middle;
              display: inline-block;
              margin: 0;
            }
          }
        }
        .c7n-card-body {
          padding: 12px;
        }
      }
    }
  `;
};

export default createStyleComponent("comp/card", getCardCss);
