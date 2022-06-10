/* eslint-disable hzero/no-custom-tag */
import React, { PureComponent } from "react";
import { Progress as HzeroUIProgress } from "hzero-ui";
import { ThemeConsumer, isEmpty } from "@hzero-front-ui/core";
import StyledContainer from "./StyledContainer";
import "./css";
// 好像没有
// notifyComponentLoaded("hzero-ui::progress");
function getOffset(length, index) {
  const step = 100 / (length - 1);
  return `${step * index}%`;
}

class Progress extends PureComponent {
  constructor(props) {
    super(props);
    this.progressRef = React.createRef();
  }

  componentDidMount() {
    if (!this._theme || isEmpty(this._schema, this._theme)) return;
    const type = this.props.type || "line";
    if (type === "line") {
      const container = this.progressRef.current.getElementsByClassName(
        "ant-progress-bg"
      )[0];
      const div = document.createElement("div");
      div.appendChild(document.createElement("span"));
      div.className = "bg-inner";
      container.appendChild(div);
    }
  }

  renderProgress = (theme = {}) => {
    const { type = "line", size, forwardedRef, ...others } = this.props;
    const { resolvedTheme: themeObj = {}, schema } = theme || {};
    const { circleProgress = {} } = themeObj;
    const {
      normalStopColors,
      successStopColors,
      exceptionStopColors,
    } = circleProgress;
    this._schema = schema;
    let linearGradientMap = {
      normal: normalStopColors,
      exception: exceptionStopColors,
      success: successStopColors,
      active: normalStopColors,
    };
    this._schema = schema;
    if (!normalStopColors || !successStopColors || !exceptionStopColors) {
      linearGradientMap = {};
    }
    this._theme = themeObj;
    const { forwardedRef: _, ...rest } = this.props;
    return isEmpty(this._schema, this._theme) ? (
      <HzeroUIProgress ref={forwardedRef} {...rest} />
    ) : (
      <StyledContainer ref={this.progressRef} type={type} data={themeObj}>
        <HzeroUIProgress
          ref={this.props.forwardedRef}
          type={type}
          size="normal"
          {...others}
        />
        {type === "circle" && (
          <svg style={{ position: "absolute", visibility: "hidden" }}>
            <defs>
              {Object.keys(linearGradientMap).map((g) => (
                <linearGradient
                  key={g}
                  id={`hzeroUiProgressGradient-${g}`}
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
      </StyledContainer>
    );
  };

  render() {
    return <ThemeConsumer>{this.renderProgress}</ThemeConsumer>;
  }
}

export default React.forwardRef((props, ref) => (
  <Progress {...props} forwardedRef={ref} />
));
