import { css } from 'styled-components';
import { getThemeData } from '@hzero-front-ui/core';

const checkedStyle = css`
  :before {
    transform: scale(1);
    transition: all 0.5s cubic-bezier(0.17, 2.24, 0.78, 0.57);
  }
  :after {
    transition: all 0.5s cubic-bezier(0.17, 2.24, 0.78, 0.57);
    transform: rotate(45deg) scale(1);
  }
`;

function getCheckBoxStyle(props: any) {
  const {
    radius,
    fontSize,
    boxSize,
    fontColor,
    borderColor,
    disabledBorderColor,
    disabledBg,
    checkedDisabledBg,
    disabledFontColor,
  } = getThemeData(props, 'checkbox');
  const { primary6, iconfontFamily } = getThemeData(props, 'common');
  return css`
    .c7n-checkbox-wrapper.c7n-checkbox-wrapper {
      span {
        font-size: ${fontSize}px;
        color: ${fontColor};
      }
      //hover样式
      &:hover {
        .c7n-checkbox {
          .c7n-checkbox-inner {
            border: 0.01rem solid ${primary6};
          }
        }
      }

      .c7n-checkbox {
        //基础样式
        .c7n-checkbox-inner {
          width: ${boxSize}px;
          height: ${boxSize}px;
          border: 0.01rem solid ${borderColor};
          background: unset;
          border-radius: ${radius}px;
          :before {
            display: block;
            content: '';
            position: absolute;
            box-sizing: border-box;
            top: -0.01rem;
            bottom: -0.01rem;
            left: -0.01rem;
            right: -0.01rem;
            background: ${primary6};
            transform: scale(0);
            transition: all 0.2s;
            border-radius: ${radius}px;
          }
          :after {
            transition: all 0.2s;
            left: 0.04rem;
            top: -0.01rem;
          }
        }
        //选中样式
        &.c7n-checkbox-checked:not(.c7n-checkbox-indeterminate) {
          .c7n-checkbox-inner {
            border-color: ${primary6};
            ${checkedStyle}
            :before {
              content: '\\e712';
              font-family: ${iconfontFamily} !important;
              color: #fff;
              font-size: 12px;
              padding-top: 2px;
              padding-left: 2px;
            }
            :after {
              display: none;
            }
          }
        }
        //indeterminate样式
        &.c7n-checkbox-indeterminate {
          .c7n-checkbox-inner {
            border-color: ${borderColor}; // 选中后，边框与底色同色

            :after {
              left: 50%;
              top: 50%;
              transform: translate(-50%, -50%) !important;
              border: none;
              width: 8px;
              height: 8px;
              background: ${primary6} !important;
            }
          }
        }
        //禁用样式
        &.c7n-checkbox-disabled {
          + span {
            color: ${disabledFontColor};
          }
          .c7n-checkbox-inner {
            border-color: ${disabledBorderColor} !important;
            background-color: ${disabledBg} !important;
          }
          &.c7n-checkbox-indeterminate {
            .c7n-checkbox-inner {
              :before {
                border-color: ${disabledBorderColor} !important;
                background-color: ${disabledBg} !important;
              }
              :after {
                background-color: ${disabledFontColor} !important;
              }
            }
          }
        }
        &.c7n-checkbox-disabled .c7n-checkbox-input:checked + .c7n-checkbox-inner {
          ${checkedStyle}
          :before {
            background: ${checkedDisabledBg};
            color: rgba(0, 0, 0, 0.25);
          }
        }
      }
    }
  `;
}

export default getCheckBoxStyle;
