import { css } from 'styled-components';
import { getThemeData } from '@hzero-front-ui/core';

const sliderStyle = (props) => {
  const { primary6, primary4, primary1 } = getThemeData(props, 'common');
  return css`
    .ant-slider.ant-slider {
      .ant-slider-track {
        background-color: ${primary4};
      }
      .ant-slider-handle {
        border-color: ${primary4};
      }
      .ant-slider-dot-active {
        border-color: ${primary4};
      }
      .ant-slider-handle:focus {
        border-color: ${primary6};
        box-shadow: 0 0 0 2px ${primary1};
      }
      &:hover {
        .ant-slider-track {
          background-color: ${primary6};
        }
        .ant-slider-handle {
          border-color: ${primary6};
        }
        .ant-slider-dot-active {
          border-color: ${primary6};
        }
      }
    }
  `;
};
export default sliderStyle;
