import { css } from "styled-components";
import {
  getThemeData,
  createStyleComponent,
} from "@hzero-front-ui/core/lib/utils";

const styles = (props) => {
  const {
    bgColor = "#F13131",
    fontColor = "#fff",
    borderColor = "#F13131",
    fontSize,
    height,
    radius,
    dotSize,
  } = getThemeData(props, "badge");
  return css`
    .ant-badge {
      && {
        .ant-badge-count {
          background-color: ${bgColor};
          color: ${fontColor};
          border: 1px solid ${borderColor};
          font-size: ${fontSize}px;
          height: ${height}px;
          line-height: ${height - 2}px;
          border-radius: ${radius}px;
          z-index: 5;
        }
        .ant-badge-dot {
          background-color: ${bgColor};
          border: 1px solid ${borderColor};
          width: ${dotSize}px;
          height: ${dotSize}px;
        }
      }
    }
  `;
};

export default createStyleComponent("badge", styles);
