import { css, keyframes } from "styled-components";
import { getThemeData } from "@hzero-front-ui/core";
import inputAnimation from "./inputAnimation";

const topToBottomLeftKeyframes = keyframes`
  0% {left: -1px; top: -1px; right: 100%; bottom: 100%;}
  50% {left: -1px; top: -1px; right: 100%; bottom: -1px;}
  100% {left: -1px; top: -1px; right: 50%; bottom: -1px;}
`;

const topToBottomRightKeyframes = keyframes`
  0% {left: 100%; top: -1px; right: -1px; bottom: 100%;}
  50% {left: 100%; top: -1px; right: -1px; bottom: -1px;}
  100% {left: 50%; top: -1px; right: -1px; bottom: -1px;}
`;

const bottomToTopLeftKeyframes = keyframes`
  0% {left: -1px; bottom: -1px; top: 100%; right: 100%;}
  50% {left: -1px; bottom: -1px; top: -1px; right: 100%;}
  100% {left: -1px; bottom: -1px; top: -1px; right: 50%;}
`;

const bottomToTopRightKeyframes = keyframes`
  0% {right: -1px; bottom: -1px; top: 100%; left: 100%;}
  50% {right: -1px; bottom: -1px; top: -1px; left: 100%;}
  100% {right: -1px; bottom: -1px; top: -1px; left: 50%;}
`;

const dropdownBaseCss = css`
  :after,
  :before {
    content: "";
    display: block;
    position: absolute;
    background: none;
    border-color: #4f7de7;
    z-index: 1;
  }
`;

const borderAnimMixinBottom = css`
  ${dropdownBaseCss};
  :before {
    left: -1px;
    right: 50%;
    top: -1px;
    bottom: -1px;
    border-bottom: 1px solid #4f7de7;
    border-left: 1px solid #4f7de7;
    animation: ${topToBottomLeftKeyframes} 0.5s linear forwards;
  }
  :after {
    right: -1px;
    left: 50%;
    top: -1px;
    bottom: -1px;
    border-bottom: 1px solid #4f7de7;
    border-right: 1px solid #4f7de7;
    animation: ${topToBottomRightKeyframes} 0.5s linear forwards;
  }
`;

const borderAnimMixinTop = css`
  ${dropdownBaseCss};
  :before {
    right: -1px;
    bottom: -1px;
    left: -1px;
    top: -1px;
    border-top: 1px solid #4f7de7;
    border-left: 1px solid #4f7de7;
    animation: ${bottomToTopLeftKeyframes} 0.5s linear forwards;
  }
  :after {
    right: -1px;
    bottom: -1px;
    left: -1px;
    top: -1px;
    border-top: 1px solid #4f7de7;
    border-right: 1px solid #4f7de7;
    animation: ${bottomToTopRightKeyframes} 0.5s linear forwards;
  }
`;

const selectAnimationCss = css`
  .c7n-select-tree-dropdown {
    overflow: visible !important;
    &.c7n-select-dropdown-placement-bottomLeft > div {
      margin-top: -6px !important;
    }
  }

  /* body .c7n-cascader-menus, */
  /* body .ant-cascader-menus, */
  body .ant-select-dropdown {
    &.ant-select-dropdown-placement-bottomLeft,
    &.ant-cascader-menus-placement-bottomLeft,
    &.c7n-cascader-menus-placement-bottomLeft {
      > div {
        border: 1px solid rgba(0, 0, 0, 0.15);
        position: relative;
        margin-top: -6px !important;
        ${borderAnimMixinBottom};
      }
    }
    &.ant-select-dropdown-placement-topLeft,
    &.ant-cascader-menus-placement-topLeft,
    &.c7n-cascader-menus-placement-topLeft {
      > div {
        border: 1px solid rgba(0, 0, 0, 0.15);
        position: relative;
        margin-bottom: -6px;
        ${borderAnimMixinTop};
        z-index: 2;
      }
    }
  }
  .c7n-pro-icon-picker-popup,
  .c7n-select-dropdown {
    && {
      &.c7n-pro-select-popup-placement-bottomLeft,
      &.c7n-select-dropdown-placement-bottomLeft,
      &.c7n-pro-icon-picker-popup-placement-bottomLeft {
        > div {
          position: relative;
          ${borderAnimMixinBottom};
        }
      }
      &.c7n-select-dropdown-placement-topLeft,
      &.c7n-pro-icon-picker-popup-placement-topLeft {
        > div {
          position: relative;
          ${borderAnimMixinTop};
        }
      }
    }
  }
  .c7n-pro-icon-picker-popup {
    &.c7n-pro-icon-picker-popup-placement-bottomLeft {
      > div {
        background: #fff;
        margin-top: -6px;
      }
    }
    &.c7n-pro-icon-picker-popup-placement-topLeft {
      > div {
        background: #fff;
        margin-bottom: -6px;
      }
    }
  }
  .c7n-pro-cascader-popup,
  .c7n-pro-auto-complete-popup,
  .c7n-pro-select-popup {
    /* &.c7n-pro-cascader-popup-placement-bottomLeft, */
    &.c7n-pro-auto-complete-popup-placement-bottomLeft,
    &.c7n-pro-select-popup-placement-bottomLeft {
      border: 1px solid rgba(0, 0, 0, 0.15);
      > div {
        border-color: transparent;
        background: #fff;
        z-index: 10;
        position: relative;
        :first-of-type {
          margin-top: -6px;
          width: calc(100% + 2px);
          margin-left: -1px;
          border-left: 1px solid #4f7de7;
          border-right: 1px solid #4f7de7;
        }
      }
      ${borderAnimMixinBottom}
    }
    /* &.c7n-pro-cascader-popup-placement-topLeft, */
    &.c7n-pro-auto-complete-popup-placement-topLeft,
    &.c7n-pro-select-popup-placement-topLeft {
      border: 1px solid rgba(0, 0, 0, 0.15);
      .c7n-spin-container {
        margin-top: 0;
      }
      > div {
        border-color: transparent;
        background: #fff;
        z-index: 10;
        position: relative;
        :last-of-type {
          margin-bottom: -6px;
          width: calc(100% + 2px);
          margin-left: -1px;
          border-left: 1px solid #4f7de7;
          border-right: 1px solid #4f7de7;
        }
      }
      ${borderAnimMixinTop}
    }
  }
`;

const dropdownNoMotion = css`
  ${selectAnimationCss};
  body .ant-select-dropdown,
  /* body .ant-cascader-menus, */
  body .c7n-cascader-menus {
    &.ant-select-dropdown-placement-bottomLeft,
    &.ant-select-dropdown-placement-topLeft {
      > div {
        :before,
        :after {
          animation-duration: 0s !important;
        }
      }
    }
  }
  .c7n-pro-cascader-popup,
  .c7n-pro-icon-picker-popup,
  .c7n-select-dropdown {
    && {
      /* &.c7n-pro-cascader-placement-bottomLeft, */
      &.c7n-pro-select-popup-placement-bottomLeft,
      &.c7n-select-dropdown-placement-bottomLeft,
      &.c7n-pro-icon-picker-popup-placement-bottomLeft {
        > div {
          :before,
          :after {
            animation-duration: 0s !important;
          }
        }
      }
      /* &.c7n-pro-cascader-dropdown-placement-topLeft, */
      &.c7n-select-dropdown-placement-topLeft,
      &.c7n-pro-icon-picker-popup-placement-topLeft {
        > div {
          :before,
          :after {
            animation-duration: 0s !important;
          }
        }
      }
    }
  }
  .c7n-pro-select-popup {
    &.c7n-pro-select-popup-placement-bottomLeft,
    &.c7n-pro-select-popup-placement-topLeft {
      :after,
      :before {
        animation-duration: 0s !important;
      }
    }
  }
`;

function getAnimationDropdown(props: any, CSS: any) {
  const { border = "" } = getThemeData(props, "input");
  return border === "all" || border.length === 4 ? CSS : "";
}

const selectAnimation = {
  border: inputAnimation.border,
  dropdownBorder: css`
    ${props => getAnimationDropdown(props, selectAnimationCss)}
  `,
  dropdownBorderNoMotion: css`
    ${props => getAnimationDropdown(props, dropdownNoMotion)}
  `,
  bottom: inputAnimation.bottom
};

export default selectAnimation;
