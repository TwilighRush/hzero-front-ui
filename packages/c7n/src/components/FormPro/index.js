import isNil from "lodash/isNil";
import { Form as CForm } from "choerodon-ui/pro";
import { ThemeContext, isEmpty } from "@hzero-front-ui/core/lib/utils";
import ConfigContext from "choerodon-ui/lib/config-provider/ConfigContext";
import React, {
  forwardRef,
  useRef,
  useContext,
  useImperativeHandle,
  useMemo,
} from "react";
import "./css";

const Form = forwardRef((props, ref) => {
  const formRef = useRef(null);
  const { getConfig } = useContext(ConfigContext);
  const Layout = getConfig("labelLayout");
  const {
    className = "",
    columns = 1,
    labelLayout,
    labelAlign,
    ...rest
  } = props;
  const { resolvedTheme, schema } = useContext(ThemeContext);
  useImperativeHandle(ref, () => formRef.current);
  const finalLayout = useMemo(() => {
    if (!isEmpty(schema, resolvedTheme) && resolvedTheme.input) {
      return labelLayout || resolvedTheme.input.layout || undefined;
    }
    return labelLayout;
  }, [schema, resolvedTheme, labelLayout]);
  const textAlign = useMemo(() => {
    if (!isEmpty(schema, resolvedTheme) && resolvedTheme.input) {
      return labelAlign || resolvedTheme.input.labelAlign || undefined;
    }
    return labelAlign;
  }, [schema, resolvedTheme, labelAlign]);

  const classNames = [
    className,
    `c7n-pro-form-${finalLayout || Layout || "horizontal"}`,
    `c7n-pro-form-${(columns && columns) > 1 ? "multi" : "single"}`,
  ];
  return (
    <CForm
      ref={formRef}
      className={classNames.join(" ")}
      labelLayout={finalLayout}
      columns={columns}
      labelAlign={textAlign}
      {...rest}
    />
  );
});

if (!isNil(CForm)) {
  Object.assign(Form, CForm);
} else {
  ["FormVirtualGroup", "Item", "ItemGroup", "displayName"].forEach((prop) => {
    Object.defineProperties(Form, {
      [prop]: {
        get: () => CForm[prop],
      },
    });
  });
}

export default Form;
