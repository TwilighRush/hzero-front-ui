import styled, { css } from "styled-components";

function getInintStyle() {
  return css`
    .c7n-pro-range-wrapper {
      & + .c7n-pro-field-help {
        padding-top: 20px;
      }
      &.c7n-pro-field + .c7n-pro-field-help {
        padding-top: 15px;
      }
      .c7n-slider-indicator {
        position: absolute;
        left: 0;
        top: 17px;
        margin-left: -4px;
        min-width: 18px;
        height: 18px;
        text-align: center;
      }
      /* .c7n-pro-range-track {
        background: linear-gradient(
          90deg,
          rgb(69, 136, 244) 0%,
          rgb(56, 107, 215) 100%
        );
      }
      .c7n-pro-range-handle.c7n-pro-range-handle {
        border-color: #3e7ae6;
        :focus {
          box-shadow: 0 0 0 0.05rem #ABCAFF;
        }
      } */
    }
    .c7n-pro-range-vertical {
      .c7n-slider-indicator {
        position: absolute;
        top: 0;
        left: 100%;
        margin-top: -5px;
        margin-left: 5px;
      }
    }
    .c7n-pro-range.c7n-pro-range {
      :hover,
      :focus {
        .c7n-pro-range-handle.c7n-pro-range-handle {
          border-color: #3e7ae6;
        }
      }
    }
  `;
}

export const StyledContainer = styled.span`
  ${getInintStyle}
`;
