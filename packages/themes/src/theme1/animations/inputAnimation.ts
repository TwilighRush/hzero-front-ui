import { css, keyframes } from 'styled-components';
import { getThemeData } from '@hzero-front-ui/core';

const motion1 = keyframes`
  0% {top: -1px; right: 100%; bottom: 100%; left: -1px;}
  30% {top: -1px; left: -1px; right: 100%; bottom: -1px;}
  100% {top: -1px; left: -1px; bottom: -1px; right: -1px;}
`;

const motion2 = keyframes`
  0% {left: -1px; top: -1px; right: 100%; bottom: 100%;}
  70% {left: -1px; top: -1px; right: -1px; bottom: 100%;}
  100% {left: -1px; top: -1px; right: -1px; bottom: -1px;}
`;

export const coreBorderAnimation = css`
  :after,
  :before {
    content: '';
    display: none;
    position: absolute;
    left: -1px;
    top: -1px;
    right: -1px;
    bottom: -1px;
    animation-fill-mode: forwards;
    z-index: 1;
  }
  :after {
    border-bottom: 1px solid #4f7de7;
    border-left: 1px solid #4f7de7;
    animation: ${motion1} linear;
    animation-duration: 0.3s;
  }

  :before {
    border-top: 1px solid #4f7de7;
    border-right: 1px solid #4f7de7;
    animation: ${motion2} linear 0.3s;
    animation-duration: 0.3s;
  }
  :hover,
  :focus {
    :after,
    :before {
      display: block;
    }
  }
`;

const coreBottomScaleAnimation = css`
  && {
    background: none;
  }
  :after {
    content: '';
    position: absolute;
    bottom: -1px;
    height: 0;
    border-bottom: 1px solid #4f7de7;
    width: 100%;
    left: 0;
    transform-origin: center;
    transform: scale(0);
    transition: all 0.3s;
  }
  .t-field-focused .theme-input-inner:after,
  :hover:after,
  :focus-within:after {
    transform: scale(1);
    z-index: 2;
  }
`;

export const borderCircleAnimation = css`
  .c7n-pro-table .c7n-pro-table-editor label {
    :before,
    :after {
      display: none !important;
    }
  }
  .themed-input-wrapper .themed-input-inner,
  .ant-select,
  .ant-cascader-picker,
  .c7n-select.c7n-select.c7n-select {
    ${coreBorderAnimation};
  }
  .ant-cascader-picker-disabled {
    :after,
    :before {
      display: none !important;
    }
  }
  .themed-input-wrapper.t-field-focused .themed-input-inner {
    :before,
    :after {
      display: block;
    }
  }
  .c7n-pro-color-picker-wrapper,
  .c7n-pro-cascader-wrapper,
  .c7n-pro-auto-complete-wrapper,
  .c7n-pro-icon-picker-wrapper,
  .c7n-pro-calendar-picker-wrapper,
  .c7n-pro-input-wrapper,
  .c7n-pro-password-wrapper,
  .c7n-pro-input-number-wrapper,
  .c7n-pro-select-wrapper,
  .c7n-pro-textarea-wrapper {
    label {
      ${coreBorderAnimation};
      input {
        z-index: 5;
      }
    }
  }
  .c7n-input-wrapper .c7n-input-content,
  .c7n-input-wrapper.c7n-input-textarea {
    ${coreBorderAnimation};
  }
`;

export const bottomScaleAnimation = css`
  .themed-input-wrapper .themed-input-inner,
  .ant-select,
  .ant-cascader-picker,
  .c7n-select.c7n-select.c7n-select {
    ${coreBottomScaleAnimation};
  }

  .ant-cascader-picker-disabled {
    :after,
    :before {
      display: none !important;
    }
  }
  .c7n-pro-cascader-wrapper,
  .c7n-pro-auto-complete-wrapper,
  .c7n-pro-icon-picker-wrapper,
  .c7n-pro-calendar-picker-wrapper,
  .c7n-pro-input-wrapper,
  .c7n-pro-password-wrapper,
  .c7n-pro-input-number-wrapper,
  .c7n-pro-select-wrapper,
  .c7n-pro-textarea-wrapper {
    label {
      ${coreBottomScaleAnimation};
      input {
        z-index: 5;
      }
    }
  }
  .c7n-input-wrapper .c7n-input-content,
  .c7n-input-wrapper.c7n-input-textarea .c7n-input-rendered-wrapper {
    ${coreBottomScaleAnimation};
  }
`;

const getBorderAndBottom = (props: any) => {
  const { border = '' } = getThemeData(props, 'input');
  return border === 'all' || border.length === 4 ? borderCircleAnimation : bottomScaleAnimation;
};

const inputAnimations = {
  border: borderCircleAnimation,
  bottom: bottomScaleAnimation,
  borderAndBottom: css`
    ${getBorderAndBottom}
  `,
};

export default inputAnimations;
