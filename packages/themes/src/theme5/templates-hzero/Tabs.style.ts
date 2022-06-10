import { css } from 'styled-components';
import { getThemeData } from '@hzero-front-ui/core';

const tabsStyle = (props) => {
  const { primary6 } = getThemeData(props, 'common');
  return css`
    .ant-tabs.ant-tabs {
      .ant-tabs-ink-bar {
        background-color: ${primary6};
      }
      .ant-tabs-nav {
        .ant-tabs-tab {
          &:hover {
            color: ${primary6};
            i {
              color: ${primary6};
            }
          }
        }
        // 提高优先级
        .ant-tabs-tab-active.ant-tabs-tab-active.ant-tabs-tab-active {
          color: ${primary6};
          i,
          .anticon-close {
            color: ${primary6};
          }
        }
      }
    }
  `;
};
export default tabsStyle;
