import { css } from "styled-components";
import { getThemeData, createStyleComponent } from "@hzero-front-ui/core";

const uploadStyle = (props) => {
  const d = getThemeData(props, "upload");
  const colors = getThemeData(props, "colors");
  return css`
    .c7n-upload {
      &.c7n-upload-drag {
        background-color: ${d.dragBackgroundColor};
        .c7n-upload-drag-icon .icon {
          color: ${d.dragIconColor} !important;
        }
      }
      &.c7n-upload-select-picture-card {
        border-radius: ${d.cardBorderRadius};
        background-color: ${d.cardBackgroundColor};
        .c7n-upload-text {
          display: ${d.cardTextDisplay};
        }
        .c7n-upload {
          .icon-add {
            font-size: ${d.cardIconAddFontSize};
            color: ${d.cardIconAddColor};
            &:before {
              content: "${d.cardIconAddContent || "\\e635"} ";
              font-family: "${d.cardFontAddIconFamily || "icomoon"}" !important;
            }
          }
        }
      }
    }
    .c7n-upload-list {
      a {
        color: ${colors.primary};
      }
      .c7n-progress-success-bg,
      .c7n-progress-bg {
        background-color: ${d.listProgressBGColor};
      }
      &.c7n-upload-list-text {
        .c7n-upload-list-item {
          height: ${d.listHeight};
          .c7n-upload-list-item-info {
            background: ${d.listInfoBackgroundColor};
            border-radius: ${d.listInfoBorderRadius};
            vertical-align: ${d.listInfoVerticalAlign};
            line-height: ${d.listLineHeight};
            .c7n-upload-list-item-span {
              position: relative;
              height: ${d.listItemSpanHeight};
            }
            .c7n-upload-list-item-text {
              align-items: center;
            }
            .icon {
              top: ${d.listIconTop};
              transform: ${d.listIcontransform};
              color: ${d.listIconColor};
            }
            .c7n-upload-list-item-name {
              color: ${d.listNameColor};
            }
            .icon.icon-loading {
              &:before {
                font-family: ${d.listIconBefore || "icomoon"} !important;
                content: "${d.listIconContent}";
              }
            }
          }
          .c7n-upload-list-item-progress {
            padding-left: ${d.listProgressPaddingLeft};
            .c7n-progress-line {
              line-height: ${d.listProgressLineHeight};
              .c7n-progress-success-bg,
              .c7n-progress-bg {
                background-color: ${d.listProgressBGColor};
              }
            }
          }

          &.c7n-upload-list-item-error {
            color: ${d.listErrorColor};
            border-bottom: ${d.listErrorborderBottom};
            .c7n-upload-list-item-info {
              .icon {
                color: ${d.listErrorColor};
              }
              .c7n-upload-list-item-name {
                color: ${d.listErrorColor};
              }
            }
          }
          .icon {
            &.icon-close {
              opacity: ${d.listIconCloseOpcity};
              height: ${d.listIconCloseHeight};
              width: ${d.listIconCloseWidth};
              position: absolute;
              top: ${d.listIconCloseTop};
              /* margin-top: ${d.iconMarginTop}; */
              padding-left: ${d.listIconClosePaddingLeft};
              border: ${d.listIconCloseBoeder};
              border-radius: ${d.listIconCloseBorderRadius};
              transform: ${d.listIconCloseTransform};
              line-height: ${d.listIconCloseLineHeight};
            }
          }
        }
      }
      &.c7n-upload-list-picture-card {
        .c7n-upload-list-item {
          padding: ${d.cardListPadding};
          border-radius: ${d.cardListBorderRadius};
          overflow: ${d.cardListOverflow};
          background: ${d.cardListBackgroundColor};
          .c7n-upload-list-item-progress {
            bottom: ${d.cardListProgressBottom};
            padding-left: ${d.cardListProgressPaddingLeft};
            .c7n-progress-bg {
              height: ${d.cardListProgressHeight} !important;
              background: ${d.cardListProgressBackground};
            }
          }
          .icon-close {
            color: ${d.cardListIconCloseColor};
          }
          .c7n-upload-list-item-uploading-text {
            color: ${d.cardListTextColor};
            margin-top: ${d.cardListTextMarginTop};
            margin-left: ${d.cardListTextMarginBottom};
          }
        }
      }
    }
  `;
};

export default createStyleComponent("comp/upload", uploadStyle);
