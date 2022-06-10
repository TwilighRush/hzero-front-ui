import { css } from 'styled-components';
import { getThemeData } from '@hzero-front-ui/core';

const PaginationStyle = (props) => {
  const { primary6, primary1 } = getThemeData(props, 'common');
  return css`
    .ant-pagination.ant-pagination {
      .ant-pagination-item-active {
        border-color: ${primary6};
        background-color: ${primary6};
        a {
          color: #fff;
        }
      }
      .ant-pagination-item:not(.ant-pagination-item-active):focus,
      .ant-pagination-item:not(.ant-pagination-item-active):hover {
        border-color: ${primary1};
        background-color: ${primary1};
        a {
          color: ${primary6};
        }
      }
      .ant-pagination-jump-prev:focus:after,
      .ant-pagination-jump-next:focus:after,
      .ant-pagination-jump-prev:hover:after,
      .ant-pagination-jump-next:hover:after {
        color: ${primary6};
      }
      .ant-pagination-prev:focus .ant-pagination-item-link,
      .ant-pagination-next:focus .ant-pagination-item-link,
      .ant-pagination-prev:hover .ant-pagination-item-link,
      .ant-pagination-next:hover .ant-pagination-item-link {
        border-color: #d9d9d9;
        color: ${primary6};
      }
      .ant-select-selection {
        :hover {
          border-color: ${primary6};
        }
      }
      .ant-select-open .ant-select-selection,
      .ant-select-focused .ant-select-selection,
      .ant-select-selection:focus,
      .ant-select-selection:active {
        border-color: ${primary6};
      }
      .ant-pagination-options-quick-jumper {
        input:hover {
          border-color: ${primary6};
        }
        input:focus {
          border-color: ${primary6};
          box-shadow: 0 0 0 2px ${primary1};
        }
      }
    }
  `;
};
export default PaginationStyle;
