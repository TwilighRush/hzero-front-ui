import React, { useContext, useState } from "react";
import { ThemeContext } from "@hzero-front-ui/core";
import { Button } from "hzero-ui";
import Layout from "root/layouts/DefaultLayout";
import { Header } from "root/components/Page";

export const withThemeContext = (WrappedComponent) => (props) => (
  <Layout>
    <WrappedComponent {...props} />
  </Layout>
);

export function withThemedLayout({ name, title, styleCount = 1 }) {
  return (WrappedComponent) => (props) => {
    const { config, setTheme, schema } = useContext(ThemeContext);
    const [pointer, setPointer] = useState(config[name]);
    const changeStyle = () => {
      let p = pointer;
      if (p < styleCount - 1) {
        p += 1;
        setPointer(p);
      } else if (p === styleCount - 1) {
        p = 0;
        setPointer(p);
      }
      setTheme(schema, {
        ...config,
        [name]: p,
      });
    };
    const setComponentTheme = (val) => {
      setTheme({
        ...config,
        [name]: val,
      });
    };
    const setRawTheme = (obj) => {
      setTheme({
        ...config,
        ...obj,
      });
    };
    return (
      <>
        <Header title={title}>
          {/* <Button onClick={changeStyle}>点击切换样式</Button> */}
        </Header>
        <WrappedComponent
          {...props}
          setTheme={setComponentTheme}
          setRawTheme={setRawTheme}
        />
      </>
    );
  };
}
