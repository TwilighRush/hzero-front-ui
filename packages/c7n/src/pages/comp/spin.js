import React from "react";
import { Content } from "root/components/Page";
import Spin from "../../components/Spin";
import SpinPro from "../../components/SpinPro";
import { withThemedLayout } from "../../utils/withThemedLayout";

const boxStyle = {
  margin: 20,
  padding: 20,
  border: "1px solid rgba(90, 94, 154, 0.2)",
  marginLeft: 0,
  borderRadius: 5,
};
const ButtonPage = () => {
  return (
    <Content>
      <h3 style={{ marginBottom: 20 }}>Component</h3>
      <div style={boxStyle}>
        <Spin tip="loading" size="small" />
        <Spin tip="loading" />
        <Spin tip="loading" size="large" />
      </div>
      <h3>pro</h3>
      <div style={boxStyle}>
        <div>
          <SpinPro tip="loading" size="small" />
          <SpinPro tip="loading" />
          <SpinPro tip="loading" size="large" />
        </div>
      </div>
    </Content>
  );
};

export default withThemedLayout({
  title: "Spin 组件",
  name: "spin",
  styleCount: 2,
})(ButtonPage);
