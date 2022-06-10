import { css } from 'styled-components';
import { getThemeData, createStyleComponent } from '@hzero-front-ui/core';

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

function getSelectStyle(props: any) {
  const d = getThemeData(props, 'select');
  const dc = getThemeData(props, 'checkbox');
  const {
    primary,
    placeholderColor,
    fontFamily,
    disabledBg = '#f8f8f8',
    disabledColor = '#aaadba',
    disabledBorderColor = '#E7EAED',
  } = getThemeData(props, 'common');

  return css`
    input::-webkit-input-placeholder,
    textarea::-webkit-input-placeholder {
      color: ${d.placeholderColor};
    }

    input:-moz-placeholder,
    textarea:-moz-placeholder {
      color: ${d.placeholderColor};
    }

    input::-moz-placeholder,
    textarea::-moz-placeholder {
      color: ${d.placeholderColor};
    }

    input:-ms-input-placeholder,
    textarea:-ms-input-placeholder {
      color: ${d.placeholderColor};
    }
    .c7n-pro-select-select-all-none.c7n-pro-select-select-all-none {
      color: #0f1358;
    }
    [class$='-placeholder'][class$='-placeholder'] {
      color: ${placeholderColor};
    }
    .c7n-pro-select-dropdown-menu.c7n-pro-select-dropdown-menu,
    .c7n-pro-tree-select-dropdown-menu.c7n-pro-tree-select-dropdown-menu {
      .c7n-pro-select-dropdown-menu-item,
      .c7n-pro-tree-select-dropdown-menu-item {
        color: #0f1358;
      }
      .c7n-pro-select-dropdown-menu-item:hover,
      .c7n-pro-tree-select-dropdown-menu-item:hover,
      .c7n-pro-select-dropdown-menu-item-active,
      .c7n-pro-tree-select-dropdown-menu-item-active {
        background: rgba(15, 19, 88, 0.03);
      }
      .c7n-pro-select-dropdown-menu-item-selected,
      .c7n-pro-tree-select-dropdown-menu-item-selected {
        background: rgba(104, 135, 232, 0.08);
        color: #5365ea;
      }
      .c7n-pro-select-dropdown-menu-item-disabled,
      .c7n-pro-tree-select-dropdown-menu-item-disabled {
        background: #fff;
        color: rgba(15, 19, 88, 0.25);
      }
    }
    .c7n-pro-select-wrapper.c7n-pro-select-wrapper,
    .c7n-pro-tree-select-wrapper.c7n-pro-tree-select-wrapper {
      .icon-baseline-arrow_drop_down:before {
        content: '\\E5CF';
      }
    }
    .c7n-pro-select-dropdown-menu,
    .c7n-pro-tree-select-dropdown-menu {
      // font-family: PingFangSC-Regular;
      font-size: 13px;
      color: ${d.dropdownItemFontColor};

      .c7n-checkbox-wrapper:not(.c7n-checkbox-button) {
        &.c7n-checkbox-indeterminate .c7n-checkbox-inner {
          ${checkedStyle};
        }

        &.c7n-checkbox-indeterminate,
        &.c7n-checkbox-indeterminate:hover {
          .c7n-checkbox-inner {
            background: ${primary};
            border-color: ${primary};
            background-color: ${primary} !important;
            :after {
              left: 50%;
              top: 50%;
              transform: translate(-50%, -50%) !important;
            }
          }
        }
        &.c7n-checkbox-disabled .c7n-checkbox-label {
          color: ${disabledColor};
        }
        &.c7n-checkbox-focused {
          .c7n-checkbox-inner {
            border-color: ${primary};
          }
          .c7n-checkbox {
            :checked + .c7n-checkbox-inner {
              ${checkedStyle};
              background: ${primary};
              border-color: ${primary};
            }
            :focus + .c7n-checkbox-inner {
              border-color: ${primary};
            }
          }
        }

        .c7n-checkbox:hover + .c7n-checkbox-inner,
        .c7n-checkbox-wrapper:hover .c7n-checkbox-inner {
          border-color: ${primary};
        }
        .c7n-checkbox:disabled + .c7n-checkbox-inner {
          :before {
            border: 1px solid ${disabledBorderColor};
            transform: scale(1);
            background: ${disabledBg};
          }
        }
        &.c7n-checkbox-indeterminate {
          .c7n-checkbox:disabled + .c7n-checkbox-inner {
            :before {
              background: ${dc.indeterminateCheckedBgColor};
            }
          }
        }
        .c7n-checkbox:disabled.c7n-checkbox:checked + .c7n-checkbox-inner {
          ${checkedStyle}
          :before {
            background: ${dc.indeterminateCheckedBgColor};
          }
        }
        .c7n-checkbox-checked .c7n-checkbox-inner,
        .c7n-checkbox-indeterminate .c7n-checkbox-inner {
          background-color: ${primary} !important;
          border-color: ${primary};
          ${checkedStyle}
        }
        .c7n-checkbox-inner {
          position: relative;
          box-sizing: border-box;
          width: 0.14rem;
          height: 0.14rem;
          border: 0.02rem solid ${dc.borderColor};
          border-radius: ${dc.radius}px;
          background: ${dc.innerbackGroundColor || 'transparent !important'};
          background-clip: content-box;
          vertical-align: middle;
          :hover {
            border-color: ${primary};
          }
          :after {
            position: relative;
            z-index: 0;
            /* transform: rotate(45deg) scale(0); */
            transform-origin: center;
            transition: all 0.5s;
          }
          :before {
            content: '';
            position: absolute;
            top: -0.01rem;
            bottom: -0.01rem;
            left: -0.01rem;
            right: -0.01rem;
            background: ${primary};
            transform-origin: center;
            transform: scale(0);
            transition: all 0.5s;
            border-radius: ${dc.radius}px;
          }
        }

        .c7n-checkbox:disabled + .c7n-checkbox-inner:after {
          border-color: ${dc.disabledImageColor} !important;
        }
        .c7n-checkbox-label {
          font-family: ${fontFamily};
          font-size: ${dc.fontSize}px;
          color: ${dc.fontColor};
        }
      }
    }
    /* 解决Select下偏的问题 */
    .c7n-pro-select-group-wrapper {
      vertical-align: middle;
    }
    /* 常用项样式修正 */
    .c7n-pro-select-common-item-wrapper {
      .c7n-pro-select-common-item {
        background-color: ${d.commonItemBg};
        color: ${d.commonItemFontColor};
      }
    }
  `;
}

export default getSelectStyle;
