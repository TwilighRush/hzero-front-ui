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
  const { radius, fontSize, boxSize, lineHeight } = getThemeData(props, 'checkbox');
  const { primary6, titleColor1, titleColor4, lineColor1, lineColor3 } = getThemeData(
    props,
    'common'
  );
  return css`
    .c7n-checkbox-wrapper.c7n-checkbox-wrapper {
      &:hover {
        .c7n-checkbox {
          .c7n-checkbox-inner {
            border: 0.01rem solid ${primary6};
          }
        }
      }
      span {
        font-size: ${fontSize}px;
        line-height: ${lineHeight}px;
        color: ${titleColor1};
      }
      .c7n-checkbox {
        .c7n-checkbox-inner {
          width: ${boxSize}px;
          height: ${boxSize}px;
          border: 0.01rem solid ${lineColor1};
          /* background: unset; */
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
            border: 0.01rem solid ${lineColor1};
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
        &.c7n-checkbox-checked {
          .c7n-checkbox-inner {
            border-color: ${primary6};
            ${checkedStyle}
            :before {
              border-color: ${primary6};
            }
          }
        }
        &.c7n-checkbox-indeterminate {
          .c7n-checkbox-inner {
            border-color: ${primary6}; // 选中后，边框与底色同色

            :before {
              transform: scale(1);
              border-color: ${primary6};
            }
            :after {
              border: none;
              background: #fff;
              display: block;
              position: absolute;
              top: calc(50% - 0.02rem);
              left: 0.02rem;
              transform: translateY(1px) !important;
            }
          }
        }
        &.c7n-checkbox-disabled {
          .c7n-checkbox-inner {
            border-color: ${lineColor1} !important;
            background-color: ${lineColor3} !important;
            :before {
              border-color: ${lineColor1} !important;
              background-color: ${lineColor3};
            }
          }
          &.c7n-checkbox-indeterminate {
            .c7n-checkbox-inner {
              :before {
                background: ${titleColor4};
                border-color: ${titleColor4} !important;
              }
              :after {
                background: #fff;
              }
            }
          }
        }
        &.c7n-checkbox-disabled .c7n-checkbox-input:checked + .c7n-checkbox-inner {
          ${checkedStyle}
          :before {
            background: ${titleColor4};
            border-color: ${titleColor4} !important;
          }
          :after {
            border-color: #fff;
          }
        }
      }
    }
  `;
}

export default getCheckBoxStyle;
