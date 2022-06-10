import { keyframes, css } from 'styled-components';
import { getThemeData } from '@hzero-front-ui/core';

const btnShake = keyframes`
  0% {
    transform: rotate(0);
  }
  33% {
    transform: rotate(30deg);
  }
  66% {
    transform: rotate(-15deg);
  }
  100% {
    transform: rotate(0deg);
  }
`;

const btnPop = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(0.8);
  }
  100% {
    transform: scale(1);
  }
`;

const topBorder = keyframes`
  0% {left: -1px; top: -1px; right: 100%; bottom: 100%; opacity: 1;}
  70% {left: -1px; top: -1px; right: -1px; bottom: 100%; opacity: 1;}
  100% {left: -1px; top: -1px; right: -1px; bottom: -1px; opacity: 1;}
`;

const bottomBorder = keyframes`
  0% {left: 100%; top: 100%; right: -1px; bottom: -1px; opacity: 1;}
  70% {left: -1px; top: 100%; right: -1px; bottom: -1px; opacity: 1;}
  100% {left: -1px; top: -1px; right: -1px; bottom: -1px; opacity: 1;}
`;
const getBorderCss = (props: any) => {
  const button = getThemeData(props, 'button');
  const { radius } = button;
  const coreBorderAnimation = css`
    :after,
    :before {
      display: none;
      top: -1px;
      left: -1px;
      right: -1px;
      bottom: -1px;
      content: '';
      position: absolute;
      border-radius: ${button.radius}px;
      animation-fill-mode: forwards;
      background: none;
      z-index: 1;
      opacity: 0;
    }
    :after {
      opacity: 0;
      border-bottom: 1px solid #4f7de7;
      border-left: 1px solid #4f7de7;
      border-top: none;
      border-right: none;
      animation: ${bottomBorder} linear 0.15s;
      animation-fill-mode: forwards;
      animation-delay: 0.15s;
    }

    :before {
      border-left: none;
      border-bottom: none;
      border-top: 1px solid #4f7de7;
      border-right: 1px solid #4f7de7;
      animation: ${topBorder} linear 0.2s;
      animation-fill-mode: forwards;
    }
    :hover,
    :focus {
      :after,
      :before {
        display: block !important;
      }
    }
  `;
  // @ts-ignore
  return css`
    .ant-btn.ant-btn:not(.ant-btn-circle),
    .c7n-btn.c7n-btn:not(.c7n-btn-circle),
    .c7n-pro-btn.c7n-pro-btn {
      width: auto;
      position: relative;
      ${coreBorderAnimation};
      :hover,
      :hover * {
        color: #4f7de7;
        transition: all 0.3s;
      }
      :disabled:hover,
      :disabled:hover * {
        color: ${button.defaultDisabledColor};
      }
      &.ant-btn-primary,
      &.c7n-btn-primary,
      &.c7n-pro-btn-primary {
        :hover,
        :hover * {
          color: ${button.primaryHoverColor};
        }
      }
      border-color: ${button.borderColor};
      :after,
      :before {
        border-radius: ${button.radius}px;
      }
      :disabled {
        :before,
        :after {
          display: none !important;
        }
      }
    }
    ${button.radius > 4
      ? css`
          .ant-btn-group.ant-btn-group {
            > .ant-btn,
            > span > .ant-btn {
              line-height: initial;
              > span {
                line-height: 0;
              }
              &:first-of-type:not(:last-of-type):after,
              &:first-of-type:not(:last-of-type):before {
                border-top-left-radius: ${radius}px;
                border-bottom-left-radius: ${radius}px;
                border-top-right-radius: 0;
                border-bottom-right-radius: 0;
              }
              &:last-of-type:not(:first-of-type):after,
              &:last-of-type:not(:first-of-type):before {
                border-top-left-radius: 0;
                border-bottom-left-radius: 0;
                border-top-right-radius: ${radius}px;
                border-bottom-right-radius: ${radius}px;
              }
              &:only-child {
                border-radius: ${radius}px;
              }
            }
          }
          .c7n-btn-group.c7n-btn-group {
            > .c7n-btn.c7n-btn.c7n-btn.c7n-btn,
            > span > .c7n-btn.c7n-btn.c7n-btn.c7n-btn {
              line-height: initial;
              border-radius: 0;
              &:after,
              &:before {
                border-radius: 0;
              }
              > span {
                line-height: 0;
              }
              &:first-of-type:not(:last-of-type):after,
              &:first-of-type:not(:last-of-type):before {
                border-top-left-radius: ${radius}px;
                border-bottom-left-radius: ${radius}px;
                border-top-right-radius: 0;
                border-bottom-right-radius: 0;
              }
              &:last-of-type:not(:first-of-type):after,
              &:last-of-type:not(:first-of-type):before {
                border-top-left-radius: 0;
                border-bottom-left-radius: 0;
                border-top-right-radius: ${radius}px;
                border-bottom-right-radius: ${radius}px;
              }
              &:only-child {
                border-radius: ${radius}px;
              }
            }
          }
          :after,
          :before {
            animation-duration: 0s !important;
            animation-delay: initial !important;
          }
        `
      : ''};
  `;
};

export { btnPop, btnShake };

const buttonMotion = {
  shake: css`
    .ant-btn.ant-btn:active,
    .ant-btn.ant-btn:hover {
      i {
        animation: ${btnShake} 0.5s linear;
      }
    }
    .c7n-btn.c7n-btn,
    .c7n-pro-btn.c7n-pro-btn {
      :hover,
      :active {
        i {
          animation: ${btnShake} 0.5s linear;
        }
      }
    }
  `,
  pop: css`
    .ant-btn.ant-btn:focus {
      animation: ${btnPop} 0.5s linear;
    }
    .c7n-btn.c7n-btn,
    .c7n-pro-btn.c7n-pro-btn {
      :focus,
      :active {
        animation: ${btnPop} 0.5s linear;
      }
    }
  `,
  circle: css`
    ${getBorderCss}
  `,
  borderColor: css`
    .ant-btn,
    .c7n-btn:not(.c7n-btn-link),
    .c7n-pro-btn:not(.c7n-pro-btn-link) {
      transition: all 0.2s;
      &&&&&&&:hover {
        border-color: #4f7de7;
        color: #4f7de7;
      }
      &&&&&&&.ant-btn-primary,
      &&&&&&&.c7n-btn-primary,
      &&&&&&&.c7n-pro-btn-primary {
        color: ${(p) => getThemeData(p, 'button', 'primaryColor')};
      }
    }
  `,
};

export default buttonMotion;
