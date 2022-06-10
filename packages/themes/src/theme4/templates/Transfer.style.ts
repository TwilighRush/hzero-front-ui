import { css } from 'styled-components';

const transferStyle = (props: any) => {
  return css`
    .c7n-pro-transfer-wrapper {
      .c7n-pro-transfer {
        .c7n-pro-transfer-header {
          > label {
            padding-top: 0;
            height: 100%;
          }
        }
      }
    }
  `;
};

export default transferStyle;
