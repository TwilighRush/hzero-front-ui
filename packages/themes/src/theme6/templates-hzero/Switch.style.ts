import { css } from 'styled-components';
import { getThemeData } from '@hzero-front-ui/core';

const switchStyle = (props) => {
  const { primary6 } = getThemeData(props, 'common');
  return css`
    .ant-switch.ant-switch {
      &.ant-switch-checked {
        background-color: ${primary6};
        &.ant-switch-disabled{
          opacity: 1;
        }
      }
      &:active:after {
        width: 18px;
        height: 18px;
      }
    }
  `;
};

export default switchStyle;
