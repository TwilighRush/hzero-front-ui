import { css } from 'styled-components';
import { getThemeData } from '@hzero-front-ui/core';

const TagStyle = (props) => {
  const { infoColor } = getThemeData(props, 'common');
  return css`
    .ant-tag.ant-tag {
      &.ant-tag-checkable-checked {
        background-color: ${infoColor};
      }
      &.ant-tag-checkable:not(.ant-tag-checkable-checked):hover {
        color: ${infoColor};
      }
    }
  `;
};
export default TagStyle;
