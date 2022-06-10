import { css } from 'styled-components';
import { getThemeData } from '@hzero-front-ui/core';

const stepsStyle = (props) => {
  const { primary6 } = getThemeData(props, 'common');
  return css`
    .ant-steps.ant-steps {
      .ant-steps-item {
        cursor: pointer;
        &:not(.ant-steps-item-process):not(.ant-steps-item-error):hover {
          .ant-steps-item-title {
            color: ${primary6};
          }
          .ant-steps-item-description {
            color: ${primary6};
          }
          .ant-steps-item-icon.ant-steps-item-icon {
            border-color: ${primary6};
            background-color: #fff;
            .ant-steps-icon {
              color: ${primary6};
            }
            .ant-steps-icon-dot {
              background-color: ${primary6};
            }
          }
        }
        &.ant-steps-item-finish {
          .ant-steps-item-icon {
            border-color: ${primary6};
            .ant-steps-icon {
              color: ${primary6};
            }
          }
          > .ant-steps-item-tail:after {
            background-color: #e8e8e8;
          }
          .ant-steps-item-content {
            .ant-steps-item-title {
              :after {
                background-color: #e8e8e8;
              }
            }
          }
        }
        &.ant-steps-item-process {
          .ant-steps-item-icon {
            background: ${primary6};
            border-color: ${primary6};
          }
        }
      }
      &.ant-steps-dot {
        .ant-steps-item-process {
          .ant-steps-item-icon {
            background-color: transparent;
          }
        }
        .ant-steps-item-process,
        .ant-steps-item-finish {
          .ant-steps-item-icon > .ant-steps-icon .ant-steps-icon-dot {
            background-color: ${primary6};
          }
        }
      }
    }
  `;
};

export default stepsStyle;
