/* eslint-disable */
import React, { Component, forwardRef } from "react";
import { Progress as C7nProgress } from "choerodon-ui/pro";
import { ThemeContext } from "@hzero-front-ui/core/lib/utils/ThemeContext";
import { isEmpty } from "@hzero-front-ui/core/lib/utils/utils";
import "choerodon-ui/lib/progress/style";
import { StyledContainer } from "./index.style";
import "./css";

function getOffset(length, index) {
  if (length === 1) return "100%";
  const step = 100 / (length - 1);
  return `${step * index}%`;
}

export function getWrappedProgress(ToWrap) {
  class Progress extends Component {
    progressRef = React.createRef();

    componentDidMount() {
      if (!this._theme || isEmpty(this._schema, this._theme)) return;
      const type = this.props.type || "line";
      if (type === "line") {
        const container = this.progressRef.current.getElementsByClassName(
          "c7n-progress-bg"
        )[0];
        if (!container) return;
        const div = document.createElement("div");
        div.appendChild(document.createElement("span"));
        div.className = "bg-inner";
        container.appendChild(div);
      }
    }

    renderProgress = (theme = {}) => {
      const { type } = this.props;
      const { forwardedRef, ...other } = this.props;
      const { resolvedTheme = {}, schema } = theme;
      const { circleProgress = {} } = resolvedTheme;
      const {
        normalStopColors,
        successStopColors,
        exceptionStopColors,
        loadingNomalColors,
        loadingSuccessColors,
        loadingExceptionColors,
      } = circleProgress;
      this._theme = resolvedTheme;
      this._schema = schema;
      let linearGradientMap = {
        normal: normalStopColors,
        exception: exceptionStopColors,
        success: successStopColors,
        active: normalStopColors,
      };
      let loadingGradientMap = {
        normal: loadingNomalColors,
        exception: loadingExceptionColors,
        success: loadingSuccessColors,
      };
      if (!normalStopColors || !successStopColors || !exceptionStopColors)
        linearGradientMap = {};
      if (
        !loadingNomalColors ||
        !loadingExceptionColors ||
        !loadingSuccessColors
      )
        loadingGradientMap = {};
      return isEmpty(schema, this._theme) ? (
        <ToWrap ref={forwardedRef} {...this.props} />
      ) : (
        <StyledContainer
          data={resolvedTheme}
          ref={this.progressRef}
          type={this.props.type}
        >
          <ToWrap {...other} ref={forwardedRef} />
          {type === "circle" && (
            <svg style={{ position: "absolute", visibility: "hidden" }}>
              <defs>
                {Object.keys(linearGradientMap).map((g) => (
                  <linearGradient
                    key={g}
                    id={`c7nProUiProgressGradient-${g}`}
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="0%"
                  >
                    {linearGradientMap[g].map((c, i, arr) => (
                      <stop
                        offset={getOffset(arr.length, i)}
                        stopColor={c}
                        // eslint-disable-next-line react/no-array-index-key
                        key={i}
                      />
                    ))}
                  </linearGradient>
                ))}
              </defs>
            </svg>
          )}
          {/* {type === "loading" && (
            <svg style={{ position: "absolute", visibility: "hidden" }}>
              <defs>
                {Object.keys(loadingGradientMap).map((g) => (
                  <linearGradient
                    key={g}
                    id={`c7nProUiProgressLoadingGradient-${g}`}
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="0%"
                  >
                    {loadingGradientMap[g].map((c, i, arr) => (
                      <stop
                        offset={getOffset(arr.length, i)}
                        stopColor={c}
                        // eslint-disable-next-line react/no-array-index-key
                        key={i}
                      />
                    ))}
                  </linearGradient>
                ))}
              </defs>
            </svg>
          )} */}
        </StyledContainer>
      );
    };

    render() {
      const { Consumer } = ThemeContext;
      return <Consumer>{this.renderProgress}</Consumer>;
    }
  }

  return Object.assign(
    forwardRef((props, ref) => <Progress {...props} forwardedRef={ref} />),
    ToWrap
  );
}

export default getWrappedProgress(C7nProgress);
