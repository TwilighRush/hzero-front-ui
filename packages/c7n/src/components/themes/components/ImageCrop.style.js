import { css } from "styled-components";
import { createStyleComponent } from "@hzero-front-ui/core";

const getImageCropCss = () => {
  return css`
    .c7n-image-crop-modal {
      .c7n-image-crop-control {
        .c7n-btn.c7n-btn.c7n-btn-raised:not(.c7n-btn-circle, .c7n-btn-icon-only, &:last-of-child),
        .c7n-btn.c7n-btn.c7n-btn-flat:not(.c7n-btn-circle, .c7n-btn-icon-only) {
          border-color: transparent;
          :after {
            border-color: transparent;
          }
          :before {
            border-color: transparent;
          }
          background: transparent;
        }
      }
    }
  `;
};

export default createStyleComponent("comp/imageCrop", getImageCropCss);
