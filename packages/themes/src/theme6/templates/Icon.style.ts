import { css } from 'styled-components';
import { getThemeData, createStyleComponent } from '@hzero-front-ui/core';

const IconStyle = (props) => {
  const { iconfontFamily } = getThemeData(props, 'common');
  return css`
    /*滚动条样式*/
    ::-webkit-scrollbar {
      /*滚动条整体样式*/
      width: 6px;
    }
    ::-webkit-scrollbar-thumb {
      /*滚动条里面小方块*/
      border-radius: 4px;
      -webkit-box-shadow: none;
      /*background: rgb(59,135,245);*/
      background: rgba(0, 0, 0, 0.15);
    }
    ::-webkit-scrollbar-track {
      /*滚动条里面轨道*/
      -webkit-box-shadow: none;
      border-radius: 0;
      background: #fff;
    }

    .icon.icon {
      font-size: 16px;
      // ...更多
      &.icon-more_horiz :before {
        font-family: ${iconfontFamily} !important;
        content: '\\e72a';
      }
      &.icon-check:before {
        font-family: ${iconfontFamily} !important;
        content: '\\e712';
      }
      //上传
      &.icon-upload:before {
        font-family: ${iconfontFamily} !important;
        content: '\\e711';
      }
      //loading
      &.icon.icon-loading:before {
        font-family: ${iconfontFamily} !important;
        content: '\\e71d';
      }
      &.icon.icon-first_page:before {
        font-family: ${iconfontFamily} !important;
        content: '\\e71b';
      }
      &.icon.icon-last_page:before {
        font-family: ${iconfontFamily} !important;
        content: '\\e718';
      }
      &.icon.icon-navigate_before:before {
        font-family: ${iconfontFamily} !important;
        content: '\\e71c';
      }
      &.icon.icon-navigate_next:before {
        font-family: ${iconfontFamily} !important;
        content: '\\e725';
      }
      &.icon.icon-expand_more:before {
        font-family: ${iconfontFamily} !important;
        content: '\\e717';
      }
      &.icon.icon-baseline-arrow_drop_down:before {
        font-family: ${iconfontFamily} !important;
        content: '\\e717';
      }
      &.icon.icon-delete {
        &:before {
          font-family: ${iconfontFamily} !important;
          content: '\\e71a';
        }
      }
      &.icon.icon-inbox:before {
        font-family: ${iconfontFamily} !important;
        content: '\\e710';
      }
      //关闭
      &.icon {
        &.icon-search {
          &:before {
            content: '\\e728';
            font-family: ${iconfontFamily} !important;
          }
        }
        &.icon-add {
          &:before {
            content: '\\e726';
            font-family: ${iconfontFamily} !important;
          }
        }
        .icon-visibility_off:before {
          font-family: ${iconfontFamily} !important;
          content: '\\e720';
        }
      }
    }
    //message中的icon
    .icon.icon-check_circle:before {
      font-family: ${iconfontFamily} !important;
      content: '\\e70a';
    }
    .icon.icon-error:before {
      font-family: ${iconfontFamily} !important;
      content: '\\e713';
    }
    .icon.icon-warning:before {
      font-family: ${iconfontFamily} !important;
      content: '\\e723';
    }
    .icon.icon-finished:before {
      font-family: ${iconfontFamily} !important;
      content: '\\e70a';
    }
    .icon.icon-cancle_a:before {
      font-family: ${iconfontFamily} !important;
      content: '\\e713';
    }
  `;
};

export default IconStyle;
