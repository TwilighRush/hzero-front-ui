import { css } from 'styled-components';
import { getThemeData } from '@hzero-front-ui/core';

const AttachmentStyle = (props: any) => {
  const { titleColor2, primary6, lineColor1, bgColor, textSizeBase } = getThemeData(
    props,
    'common'
  );
  return css`
    .c7n-pro-attachment-list-wrapper {
       /* 头部样式 */
       .c7n-pro-attachment-header.c7n-pro-attachment-header {
         font-size: 12px;
         .c7n-pro-attachment-header-label {
           color: ${titleColor2};
         }
         .c7n-pro-attachment-header-divider {
           height: 12px;
           margin: 0 8px;
         }
         > .c7n-pro-select-wrapper {
           margin-right: 8px;
         }
         /* font */
         > .c7n-pro-btn-wrapper {
           &:before {
             background-image: linear-gradient(90deg, #595959 0, #595959 100%),
               linear-gradient(90deg, #595959 0, #595959 100%),
               linear-gradient(90deg, #595959 0, #595959 100%),
               linear-gradient(to bottom right, transparent 50%, #595959 50%),
               linear-gradient(to bottom left, transparent 50%, #595959 50%),
               linear-gradient(0deg, #595959 0, #595959 100%);
           }
         }
         /* 按钮 */
         .c7n-pro-attachment-header-buttons {
           > .c7n-pro-btn.c7n-pro-btn.c7n-pro-btn.c7n-pro-btn.c7n-pro-btn.c7n-pro-btn-link.c7n-pro-btn-link:hover {
             color: ${primary6};
           }
   
           i.icon-file_upload ::before {
             font-family: 'hzero-c7n-font' !important;
             content: '\\e758';
           }
           i.icon-get_app ::before {
             content: '\\e74e' !important;
             font-family: 'hzero-c7n-font';
           }
         }
       }
       /* list样式 */
       .c7n-pro-attachment-list.c7n-pro-attachment-list.c7n-pro-attachment-list {
         .c7n-pro-attachment-list-item.c7n-pro-attachment-list-item {
           background: ${bgColor};
           border: 1px solid ${lineColor1};
           border-radius: 2px;
           :hover {
             .c7n-pro-attachment-list-item-content {
               > i {
                 color: ${primary6};
               }
             }
           }
           .c7n-pro-attachment-list-item-title {
             span {
               font-size: ${textSizeBase}px;
             }
             a {
               color: ${titleColor2};
             }
           }
           .c7n-pro-attachment-list-item-container {
             padding-top: 0;
             padding-bottom: 0;
           }
           /* item 尾部button的icon图标样式 */
           .c7n-pro-attachment-list-item-buttons.c7n-pro-attachment-list-item-buttons {
             button {
               .icon-library_books::before {
                 content: '\\e765' !important;
                 font-family: 'hzero-c7n-font';
               }
               .icon-close::before {
                 content: '\\e741' !important;
                 font-family: 'hzero-c7n-font';
               }
             }
             a {
               .icon-get_app::before {
                 content: '\\e74e' !important;
                 font-family: 'hzero-c7n-font';
               }
             }
           }
         }
         .c7n-pro-attachment-list-item-content {
           picture {
             i::before {
               font-family: 'iconfont-c7n-font' !important;
               content: '\\e752';
             }
           }
         }
         &-card {
           .c7n-pro-attachment-list-item-content {
             .c7n-pro-picture-preview {
               padding-top: 0;
               padding-bottom: 0;
             }
           }
         }
         &-no-card {
           .c7n-pro-attachment-list-item-content {
            .c7n-pro-picture-preview {
               margin-top: 8px;
               margin-bottom: 8px;
             }
              .c7n-pro-attachment-list-item-icon {
               padding-top: 0;
               padding-bottom: 0;
               margin:0;
             }
           }
         }
       }
     }
    /*group和pop item无边框 */
    .c7n-pro-attachment-group.c7n-pro-attachment-group, .c7n-pro-attachment-popup-inner.c7n-pro-attachment-popup-inner  {
      .c7n-pro-attachment-list-item {
        border: none !important;
      }
    }
 

  `;
};
export default AttachmentStyle;
