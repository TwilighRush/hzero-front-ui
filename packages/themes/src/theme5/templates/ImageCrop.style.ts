import { getThemeData } from '@hzero-front-ui/core';
import { css } from 'styled-components';
const ImageCropStyle = (props) => {
  const { iconSize } = getThemeData(props, 'imageCrop');
  const { titleColor1, primary6, titleColor3 } = getThemeData(props, 'common');
  return css`
    .c7n-image-crop-modal.c7n-image-crop-modal {
      .c7n-modal-content {
        padding: 0.16rem;
        //头部
        .c7n-modal-header {
          .c7n-modal-title {
            line-height: 28px;
            margin: 0;
            margin-bottom: 16px;
            font-size: 16px;
            color: ${titleColor1};
          }
        }
        //body
        .c7n-modal-body {
          .c7n-image-crop-container {
            height: 380px;
          }
        }
        //底部
        .c7n-modal-footer {
          border: none;
          padding: 0;
          padding-top: 16px;
          margin: 0;
        }
      }
    }
    //头像拖拽部分
    .c7n-avatar-crop-dragger.c7n-avatar-crop-dragger {
      .icon {
        font-size: ${iconSize}px;
      }
      .c7n-upload-drag-container {
        i:before {
          color: ${primary6};
        }
      }
      .c7n-avatar-crop-dragger-text {
        span {
          color: ${titleColor1};
        }
      }
      .c7n-avatar-crop-dragger-hint {
        span {
          color: ${titleColor3};
        }
      }
    }

    .c7n-avatar-crop-edit-wraper.c7n-avatar-crop-edit-wraper {
      margin-top: 16px;
    }
  `;
};
export default ImageCropStyle;
