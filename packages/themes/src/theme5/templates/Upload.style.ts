import { css } from 'styled-components';
import { getThemeData } from '@hzero-front-ui/core';

function UploadStyle(props: any) {
  const { fontSize, cardSize, lineHeightBase } = getThemeData(props, 'upload');
  const {
    primary6,
    primary4,
    primary1,
    bgColor,
    lineColor1,
    lineColor4,
    titleColor2,
    errorColor,
    iconfontFamily,
  } = getThemeData(props, 'common');

  return css`
    .c7n-upload.c7n-upload {
      .c7n-upload-text.c7n-upload-text,
      .c7n-upload-hint.c7n-upload-hint {
        font-size: ${fontSize}px;
      }
      &.c7n-upload-select {
        &.c7n-upload-select-picture-card {
          background: ${bgColor};
          border: 0.01rem solid ${lineColor1};
          border-radius: 0.02rem;
          width: ${cardSize}px;
          height: ${cardSize}px;
          &:not(.c7n-upload-disabled):hover {
            border-color: ${primary4};
          }
        }
      }
      &.c7n-upload-drag {
        background: ${bgColor};
        &:not(.c7n-upload-disabled):hover {
          border-color: ${primary4};
        }
        &.c7n-upload-drag-hover:not(.c7n-upload-disabled) {
          background: ${lineColor4};
          border: 0.01rem dashed ${primary6};
        }
        .c7n-upload-drag-container {
          .c7n-upload-drag-icon {
            margin-bottom: 0.09rem;
            .icon {
              color: ${primary6};
              font-size: 16px;
              &.icon-inbox {
                :before {
                  content: '\\e75d';
                  font-family: ${iconfontFamily};
                }
              }
            }
          }
        }
      }
    }
    .c7n-upload-list.c7n-upload-list {
      &.c7n-upload-list-text {
        .c7n-upload-list-item {
          font-size: ${fontSize}px;
          .c7n-upload-list-item-info {
            height: 0.28rem;
            line-height: ${lineHeightBase}px;
            &:hover {
              background: ${primary1};
              border-radius: 0.02rem;
            }
            .c7n-upload-list-item-name {
              color: ${titleColor2};
            }
          }
          &.c7n-upload-list-item-error {
            .c7n-upload-list-item-info {
              background: transparent;
              box-sizing: border-box;
              position: relative;
              .c7n-upload-list-item-name {
                color: ${errorColor};
              }
              .icon.icon-close {
                color: ${errorColor} !important;
              }
            }
          }
          .icon.icon-close {
            color: ${primary6} !important;
            font-size: 0.16rem;
            top: 0.03rem;
            right: 0.08rem;
            &:before {
              font-family: ${iconfontFamily};
              content: '\\e741';
            }
          }
          &.c7n-upload-list-item-uploading {
            .c7n-progress-loading {
              width: 0.2rem;
            }
            .c7n-upload-list-item-info {
              position: relative;
              .c7n-upload-list-item-progress {
                position: absolute;
                bottom: 1px;
              }
            }
          }
        }
      }
      &.c7n-upload-list-picture-card {
        .c7n-upload-list-item {
          width: ${cardSize}px;
          height: ${cardSize}px;
          padding: 0.07rem;
          background-color: #ffffff;
          /* 上传中 */
          &.c7n-upload-list-item-uploading {
            .c7n-upload-list-item-info {
              height: 100%;
              background-color: ${lineColor4};
              .c7n-upload-list-item-uploading-text {
                display: none;
              }
            }
            .icon.icon-close {
              text-align: center;
              color: ${titleColor2};
              opacity: 1;
              position: absolute;
              top: 0.2rem;
              left: 0;
              right: 0;
              bottom: 0;
              margin: auto;
              font-size: 0.14rem;
              &:before {
                content: '取消';
                font-size: ${fontSize}px;
              }
            }
          }
          &.c7n-upload-list-item-error {
            border-color: ${errorColor};
          }
          .c7n-upload-list-item-progress {
            margin-top: 50px;
            margin-left: 12px;
            padding-left: 0;
          }
        }
      }
      &.c7n-upload-list-picture {
        .c7n-progress-loading.c7n-progress-small {
          .c7n-progress-inner {
            width: 20px;
          }
        }
      }
      /* 基本样式 */
      .c7n-upload-list-item {
        /* 上传失败 */
        &.c7n-upload-list-item-error {
          .c7n-upload-list-item-info {
            background: rgba(28, 28, 28, 0.3);
            &:before {
              background: transparent;
              span {
                display: none;
              }
            }
            &:hover {
              background: ${primary1};
              border-radius: 0.02rem;
            }
            a {
              img {
                display: none;
              }
            }
          }
          .c7n-upload-list-item-actions {
            opacity: 1;
            a {
              display: none;
            }
            .icon.icon-delete {
              color: ${primary6};
            }
          }
        }
        .c7n-upload-list-item-progress {
          /* padding-left: 0.21rem; */
          .c7n-progress-outer {
            height: 2px;
            /* overflow: hidden; */
            .c7n-progress-bg {
              background-color: ${primary6};
            }
          }
        }
        .c7n-upload-list-item-actions {
          .icon-visibility {
            &:before {
              content: '\\EBD6';
              font-family: 'icomoon' !important;
            }
          }
          .icon-delete {
            &:before {
              font-family: ${iconfontFamily};
              content: '\\e741';
            }
          }
        }
      }
      &.c7n-upload-list-picture {
        .c7n-upload-list-item-span {
          .c7n-upload-list-item-name {
            color: ${titleColor2};
            font-size: ${fontSize}px;
          }
          i {
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            &:before {
              color: ${primary6};
              font-family: ${iconfontFamily};
              content: '\\e741';
            }
          }
        }
        .c7n-upload-list-item-error {
          border-color: ${errorColor};
          .c7n-upload-list-item-name {
            color: ${errorColor};
          }
          .c7n-upload-list-item-info {
            background: none;
            .c7n-upload-list-item-thumbnail {
              background: ${lineColor1};
            }
          }
          .icon-close:before {
            color: ${errorColor}!important;
          }
        }
        .c7n-upload-list-item-uploading {
          border-style: solid;
          .c7n-upload-list-item-info {
            .c7n-upload-list-item-progress {
              padding-left: 0.56rem;
            }
          }
        }
      }
    }
    .c7n-upload-list-item-error.c7n-upload-list-item-error {
      &,
      .c7n-upload-list-item-info-filesize,
      .c7n-upload-list-item-name {
        color: ${errorColor};
      }
    }
  `;
}

export default UploadStyle;
