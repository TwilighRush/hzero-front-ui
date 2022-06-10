import { css } from 'styled-components';
import { getThemeData } from '@hzero-front-ui/core';

/*
 * 获取Select框边框
 * @param props
 * @returns {string}
 */
const getBorder = (props: any) => {
  const d = getThemeData(props, 'input');
  const { border, borderWidth, borderColor } = d;
  let style: any = '';
  if (border === 'all') {
    style = css`
      border: ${borderWidth}px solid ${borderColor};
    `;
  } else if (border && border.length) {
    const borders = border
      .map((v) => `border-${v}: ${borderWidth}px solid ${borderColor};`)
      .join(' ');
    style = css`
      ${borders}
    `;
  }
  return style;
};

const selectDropdown = (props: any) => {
  const { iconFontFamily, iconPickerIconColor, iconCheckIconContent } = getThemeData(
    props,
    'select'
  );
  const {
    rightItemHeight = '', // auto | ''
    noShadow = false,
    columnGap = 8,
    columnBorder = 'none',
    columnShadow = '0 1px 3px 0 rgba(0,0,0,0.20)',
    itemHeight,
  } = getThemeData(props, 'cascader');
  const d = getThemeData(props, 'input');
  const color = getThemeData(props, 'common');
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
    [class$='-placeholder'][class$='-placeholder'] {
      color: ${color.placeholderColor};
    }
    [class$='__placeholder'][class$='__placeholder'] {
      color: #9eadbe;
    }
    .c7n-select-dropdown-menu.c7n-select-dropdown-menu,
    .c7n-select-tree-treenode-list.c7n-select-tree-treenode-list {
      .c7n-select-dropdown-menu-item,
      .c7n-select-tree-treenode {
        color: #0f1358;
        margin: 0 0.08rem;
        cursor: pointer;
      }
      .c7n-select-dropdown-menu-item:hover,
      .c7n-select-tree-treenode:hover,
      .c7n-select-dropdown-menu-item-active,
      .c7n-select-tree-treenode-active {
        background: rgba(56, 107, 215, 0.1);
        color: ${color.primary};
      }
      .c7n-select-dropdown-menu-item-selected,
      .c7n-select-tree-treenode-selected {
        background: rgba(56, 107, 215, 0.1);
        border-radius: 0.02rem;
        color: ${color.primary};
        &:after {
          font-family: ${iconFontFamily};
          content: '${iconCheckIconContent}';
          position: absolute;
          right: 0.08rem;
        }
      }
      .c7n-select-dropdown-menu-item-disabled,
      .c7n-select-tree-treenode-disabled {
        background: #fff;
        color: rgba(15, 19, 88, 0.25);
      }
    }
    .c7n-cascader-picker.c7n-cascader-picker {
      .c7n-cascader-picker-arrow {
        right: 8px;
      }
      .c7n-cascader-picker-arrow:before {
        content: '\\E5CF';
        color: ${iconPickerIconColor};
      }
      .c7n-cascader-picker-clear {
        right: 8px;
        &:before {
          content: '${d.floatCloseIcon}';
          color: ${d.PrefixSuffixColor};
        }
      }
      .c7n-cascader-picker-clear:hover {
        &:before {
          color: ${d.floatCloseIconHoverColor};
        }
      }
    }
    .c7n-cascader-menus.c7n-cascader-menus {
      box-shadow: ${noShadow ? 'none' : ''};

      .c7n-cascader-menu {
        :last-child {
          margin: 0;
        }
        & + .c7n-cascader-menu {
          height: ${rightItemHeight};
          margin-left: ${columnGap}px;
        }
        border: ${columnBorder};
        box-shadow: ${columnShadow};
        border-radius: 0.02rem;
        position: relative;
        background: #fff;
        z-index: 10;
        .c7n-cascader-menu-item {
          padding: ${(itemHeight - 22) / 2}px 0.08rem;
          :hover {
            background: rgba(15, 19, 88, 0.03);
          }
          &-active {
            font-weight: 400;
            background: rgba(104, 135, 232, 0.08);
            color: #5365ea;
          }
        }
      }
    }
  `;
};

function getSelectStyle(props: any) {
  const s = getThemeData(props, 'select');
  const d = getThemeData(props, 'input');
  const color = getThemeData(props, 'common');
  return css`
    // border
    .c7n-select-has-border.c7n-select-has-border.c7n-select::before,
    .c7n-select-has-border.c7n-select-has-border.c7n-select:hover::before,
    [class$='-has-border'][class$='-has-border'].c7n-select::before {
      border-radius: ${d.radius}px;
      border: 1px solid ${d.borderColor};
    }
    [class$='-has-border'][class$='-has-border'].c7n-select-disabled::before {
      border: 1px solid ${d.borderColor} !important;
    }
    [class$='-has-border'][class$='-has-border'].c7n-select-focused.c7n-select::before {
      border-radius: ${d.radius}px ${d.radius}px 0 0;
      border-bottom: ${d.focusBorderbottom};
    }
    .c7n-select-has-border.c7n-select-focused.c7n-select::before {
      border: 1px solid ${d.borderColor};
      border-radius: ${d.radius}px ${d.radius}px 0 0;
      border-bottom: ${d.focusBorderbottom};
    }
    .has-error.has-error {
      [class$='-has-border'][class$='-has-border'].c7n-select::before {
        border-color: ${d.errorColor};
      }
      [class$='-has-border'][class$='-has-border'].c7n-select-focused.c7n-select::before {
        border-bottom: ${d.errorFocusBorderbottom};
      }
      .c7n-select-has-border.c7n-select-focused.c7n-select::before {
        border-color: ${d.errorColor};
        border-bottom: ${d.errorFocusBorderbottom};
      }
    }
    .c7n-select-has-border.c7n-select,
    [class$='-has-border'][class$='-has-border'].c7n-select {
      [class$='-arrow'] {
        right: 0.08rem;
        .icon-arrow_drop_down:before {
          content: '\\E5CF';
          color: ${s.iconPickerIconColor};
        }
      }
      [class$='-clear'] {
        right: 0.08rem;
        .icon-close:before {
          content: '${d.floatCloseIcon}';
          color: ${d.PrefixSuffixColor};
        }
      }
    }

    .c7n-select-selection__rendered.c7n-select-selection__rendered {
      .c7n-select-selection__choice {
        background-color: ${color.multipleColor || color.primary};
        border-radius: 0.05rem;
        color: #415bc9;
        padding: 0 0.04rem;
        margin: 0 0.03rem;
        font-weight: 400;
        &:first-child {
          margin-left: 0.1rem;
        }
        .icon-cancel {
          margin-top: -1px;
          &:before {
            color: ${d.floatMutipleItemColor};
            font-size: 0.14rem;
            content: '\\E5CD';
          }
        }
      }
    }

    .c7n-select-tags.c7n-select-tags,
    .c7n-select-multiple.c7n-select-multiple {
      .c7n-select-selection--multiple .c7n-select-selection__rendered {
        padding-right: 0.24rem;
      }
    }
  `;
}

const selectStyle = css`
  ${getSelectStyle}
  ${selectDropdown}
`;

export default selectStyle;
