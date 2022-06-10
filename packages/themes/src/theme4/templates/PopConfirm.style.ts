import { css } from 'styled-components';

import { getThemeData } from '@hzero-front-ui/core';

const PopconfirmStyle = (props) => {
  const { primary } = getThemeData(props, 'common');
  const {
    fontFamily,
    fontSize,
    wrapBgColor,
    wrapRadius,
    iconBgImage,
    c7nIconSize,
    buttonRadius,
    leftButtonBorderColor,
    textColor,
    leftButtonBorderWidth,
    buttonPadding,
    rightButtonBorder,
    rightButtonColor,
    rightButtonBgColor,
    boxShadow,
  } = getThemeData(props, 'popconfirm');
  const colors = getThemeData(props, 'colors');
  return css`
    .c7n-popover {
    }
  `;
};
export default PopconfirmStyle;

/* // a {
      //   color: ${colors.primary};
      // }
      // .c7n-popover-content {
      //   .c7n-popover-inner {
      //     box-shadow: ${boxShadow};
      //     .c7n-popover-inner-content {
      //       background-color: ${wrapBgColor};
      //       border-radius: ${wrapRadius}px;
      //       /* 文字 */
//       font-family: ${fontFamily};
//       font-size: ${fontSize}px;
//       .c7n-popover-message {
//         color: ${textColor};
//         .icon {
//           width: 0.14rem;
//           height: 0.18rem;
//           background-size: ${c7nIconSize};
//           background-position: center;
//           background-repeat: no-repeat;
//           background-image: url(${iconBgImage});
//           &:before {
//             display: none;
//           }
//         }
//       }
//       .c7n-popover-message-title {
//         padding-left: 0.18rem;
//       }
//       /* 按钮 */
//       .c7n-popover-buttons {
//         .c7n-btn.c7n-btn-sm {
//           border-radius: ${buttonRadius}px;
//           background-color: transparent;
//           border-color: ${leftButtonBorderColor};
//           border-width: ${leftButtonBorderWidth}px;
//
//           height: auto;
//           padding: 0.02rem 0.06rem;
//           min-width: 0;
//           padding: ${buttonPadding};
//
//           span {
//             line-height: 0.16rem;
//           }
//
//           &:hover {
//             border-color: ${
//  leftButtonBorderColor === ''
//               ? primary
//               : leftButtonBorderColor};
//             color: ${primary};
//           }
//           &.c7n-btn-primary {
//             &:hover {
//               color: #fff;
//             }
//             background-color: ${primary};
//             border: ${rightButtonBorder}; // border 设置none
//             color: ${rightButtonColor};
//             background-color: ${rightButtonBgColor};
//           }
//         }
//       }
//     }
//   }
//   .c7n-popover-arrow {
//     background-color: ${wrapBgColor};
//   }
// } */
