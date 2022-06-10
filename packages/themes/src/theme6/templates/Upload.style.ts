import { css } from 'styled-components';
import { getThemeData } from '@hzero-front-ui/core';

function UploadStyle(props: any) {
  const upload = getThemeData(props, 'upload');
  const { primary6, primary5, iconfontFamily } = getThemeData(props, 'common');

  return css`
    .c7n-upload.c7n-upload {
      &.c7n-upload-select {
        &.c7n-upload-select-text {
        }
        &.c7n-upload-select-picture-card {
          background: #ffffff;
          border: 0.01rem dashed rgba(0, 0, 0, 0.15);
          border-radius: 0.02rem;
          width: 1.04rem;
          height: 1.04rem;
          &:not(.c7n-upload-disabled):hover {
            border-color: ${primary5};
          }
        }
      }
      //拖拽样式
      &.c7n-upload-drag {
        background: #ffffff;
        //拖拽中的文字
        p.c7n-upload-hint,
        p.c7n-upload-text {
          font-size: 12px;
          line-height: 0.2rem;
          margin: 0;
        }
        &:not(.c7n-upload-disabled):hover {
          border-color: ${primary5};
        }
        &.c7n-upload-drag-hover:not(.c7n-upload-disabled) {
          background: #ebf0fb;
          border: 0.01rem dashed ${primary6};
        }

        //拖拽中的图标
        .c7n-upload-drag-container {
          .c7n-upload-drag-icon {
            margin-bottom: 0.04rem;
            .icon {
              color: ${primary6};
              font-size: 0.24rem;
            }
          }
        }
      }
    }
    .c7n-upload-list.c7n-upload-list {
      &.c7n-upload-list-text {
        .c7n-upload-list-item {
          height: ${upload.listHeight};
          line-height: ${upload.listHeight};
          color: ${upload.listColor};
          //正常列表样式
          .c7n-upload-list-item-info {
            .icon {
              font-size: 16px;
              margin-top: 2px;
            }
            &:hover {
              background: ${upload.listHoverBgColor};
            }
            .c7n-upload-list-item-name {
              font-size: 14px;
              color: ${upload.listColor};
            }
          }
          //错误列表样式
          &.c7n-upload-list-item-error {
            .icon {
              color: ${upload.errorColor} !important;
            }
            .c7n-upload-list-item-info {
              background: transparent;
              box-sizing: border-box;
              .c7n-upload-list-item-name {
                border-bottom: 0.02rem solid ${upload.errorColor};
                padding-left: 0;
                margin-left: 0.21rem;
                width: calc(100% - 0.12rem);
              }
            }
          }
          //换成delete
          .icon.icon-close {
            font-size: 0.16rem;
            line-height: ${upload.listHeight};
            right: 0.08rem;
            &:before {
              font-family: ${iconfontFamily} !important;
              content: '\\e71a';
            }
          }
          //上传中的样式
          &.c7n-upload-list-item-uploading {
            .c7n-progress-inner {
              background-color: rgba(0, 0, 0, 0.06);
            }
          }
        }
      }
      // 卡片样式
      &.c7n-upload-list-picture-card {
        .c7n-upload-list-item {
          width: ${upload.cardListSize}px;
          height: ${upload.cardListSize}px;
          padding: 0.07rem;
          /* 上传中 */
          &.c7n-upload-list-item-uploading {
            border-style: solid;
            background-color: #fff;
            .c7n-upload-list-item-info {
              width: 88px;
              height: 88px;
              background-color: rgba(0, 0, 0, 0.04);
              .c7n-upload-list-item-uploading-text {
                display: none;
              }
            }
            .c7n-upload-list-item-progress {
              margin-left: 10px;
            }
            .icon.icon-close {
              text-align: center;
              color: #465476;
              opacity: 1;
              position: absolute;
              top: 0.35rem;
              left: 0;
              right: 0;
              bottom: 0;
              margin: auto;
              font-size: 0.12rem;
              &:before {
                content: '文字上传中';
              }
            }
          }
          &.c7n-upload-list-item-error {
            border-color: rgba(0, 0, 0, 0.15);
            .c7n-upload-list-item-actions {
              .icon.icon-delete {
                color: ${upload.errorColor};
              }
            }
          }
        }
      }
      .c7n-upload-list-item {
        /* 上传失败 */
        &.c7n-upload-list-item-error {
          .c7n-upload-list-item-info {
            background: rgba(0, 0, 0, 0.04);
            &:before {
              background: transparent;
              span {
                display: none;
              }
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
          .c7n-progress-outer {
            .c7n-progress-bg {
              background-color: ${primary6};
            }
          }
        }
        .c7n-upload-list-item-info {
          &:before {
            background-color: rgba(28, 28, 28, 0.3);
          }
        }
        .c7n-upload-list-item-actions {
          .icon-visibility {
            &:before {
              content: '\\EBD6';
            }
          }
        }
      }
    }
  `;
}

export default UploadStyle;
