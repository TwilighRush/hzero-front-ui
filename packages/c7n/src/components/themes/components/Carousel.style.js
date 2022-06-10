import { css } from "styled-components";
import { getThemeData, createStyleComponent } from "@hzero-front-ui/core";

const getStyle = (props) => {
  const {
    radius = 0,
    verticalWidth = 2,
    verticalHeight = 16,
    horizontalWidth = 16,
    horizontalHeight = 2,
    dotHorizontalPosition = "center",
    dotVerticalPosition = "center",
  } = getThemeData(props, "carousel");
  const { primary } = getThemeData(props, "common");

  return css`
    .c7n-carousel.c7n-carousel {
      .slick-dots {
        padding-right: 8px;
        text-align: ${dotHorizontalPosition};
      }
      .slick-dots li {
        button {
          border-radius: ${radius}px;
          width: ${horizontalWidth}px;
          height: ${horizontalHeight}px;
        }
        &.slick-active button {
          width: ${horizontalWidth}px;
          background-color: ${primary};
        }
      }
      &.c7n-carousel-vertical {
        .slick-dots {
          text-align: ${dotVerticalPosition};
        }
        .slick-dots li {
          button {
            border-radius: ${radius}px;
            width: ${verticalWidth}px;
            height: ${verticalHeight}px;
          }
          &.slick-active button {
            background-color: ${primary};
          }
        }
      }
    }
  `;
};

export default createStyleComponent("comp/carousel", getStyle);
