import { css } from 'styled-components';
import { getThemeData } from '@hzero-front-ui/core';

const UploadStyle = (props) => {
  const { primary6, primary4, primary1 } = getThemeData(props, 'common');
  return css`
    .ant-upload.ant-upload {
      &.ant-upload-select-picture-card,
      &.ant-upload-drag:not(.ant-upload-disabled) {
        :hover {
          border-color: ${primary4};
        }
      }
      &.ant-upload-drag.ant-upload-drag-hover:not(.ant-upload-disabled) {
        border-color: ${primary6};
      }
      div .anticon.anticon,
      p.ant-upload-drag-icon .anticon.anticon {
        color: ${primary6};
      }
    }
    .ant-upload-list:not(.ant-upload-list-picture-card) {
      .ant-upload-list-item:hover {
        .ant-upload-list-item-info {
          background-color: ${primary1};
        }
      }
    }
  `;
};
export default UploadStyle;
