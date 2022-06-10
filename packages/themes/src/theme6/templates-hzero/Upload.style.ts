import { css } from 'styled-components';
import { getThemeData } from '@hzero-front-ui/core';

const UploadStyle = (props) => {
  const { primary5, primary6 } = getThemeData(props, 'common');
  return css`
    .ant-upload.ant-upload {
      &.ant-upload-select-picture-card,
      &.ant-upload-drag:not(.ant-upload-disabled) {
        :hover {
          border-color: ${primary5};
        }
        .anticon {
          color: ${primary6};
        }
      }
      &.ant-upload-drag.ant-upload-drag-hover:not(.ant-upload-disabled) {
        border-color: ${primary5};
      }
    }
    .ant-upload-list.ant-upload-list{
      .ant-upload-list-item:hover .ant-upload-list-item-info {
        background-color: rgba(0, 0, 0, 0.04);
      }
    }
  `;
};
export default UploadStyle;
