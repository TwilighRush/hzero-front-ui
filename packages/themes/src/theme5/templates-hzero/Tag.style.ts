import { css } from 'styled-components';
import { getThemeData } from '@hzero-front-ui/core';

const TagStyle = (props) => {
  const { defaultColor, primary1, primary6 } = getThemeData(props, 'common');
  return css`
    .ant-tag.ant-tag {
      border: transparent;
    }
    .ant-tag.ant-tag:not([class*='ant-tag-']) {
      color: ${defaultColor};
      border: transparent;
      background: #ebf0fb;
      .anticon-cross {
        color: ${defaultColor};
      }
    }
    .ant-tag.ant-tag-checkable:hover,
    .ant-tag.ant-tag-checkable {
      background-color: ${primary1};
      color: ${primary6};
    }
    .ant-tag-checkable-checked.ant-tag-checkable-checked:hover,
    .ant-tag-checkable-checked.ant-tag-checkable-checked {
      background-color: ${defaultColor};
      color: #fff;
    }
  `;
};
export default TagStyle;
