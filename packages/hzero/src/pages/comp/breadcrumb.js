import React from "react";
import { Icon } from "hzero-ui";
import { Content } from "root/components/Page";
import { withThemedLayout } from "../../utils/withThemedLayout";
import Breadcrumb from "../../components/Breadcrumb";

const boxStyle = {
  margin: 20,
  padding: 20,
  border: "1px solid rgba(90, 94, 154, 0.2)",
  marginLeft: 0,
  borderRadius: 5,
};
const BreadCrumbPage = () => {
  return (
    <>
      <Content>
        <h2>基础</h2>
        <div style={boxStyle}>
          <Breadcrumb>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>Application Center</Breadcrumb.Item>
            <Breadcrumb.Item>Application List</Breadcrumb.Item>
            <Breadcrumb.Item>An Application</Breadcrumb.Item>
          </Breadcrumb>
        </div>
        <h2>带图标</h2>
        <div style={boxStyle}>
          <Breadcrumb>
            <Breadcrumb.Item href="">
              <Icon type="home" />
            </Breadcrumb.Item>
            <Breadcrumb.Item href="">
              <Icon type="user" />
              <span>Application List</span>
            </Breadcrumb.Item>
            <Breadcrumb.Item>Application</Breadcrumb.Item>
          </Breadcrumb>
        </div>
        <h2>自定义分隔符</h2>
        <div style={boxStyle}>
          <Breadcrumb separator=">">
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item href="">Application Center</Breadcrumb.Item>
            <Breadcrumb.Item href="">Application List</Breadcrumb.Item>
            <Breadcrumb.Item>An Application</Breadcrumb.Item>
          </Breadcrumb>
        </div>
      </Content>
    </>
  );
};

export default withThemedLayout({
  title: "breadCrumb",
  name: "breadCrumb",
  styleCount: 2,
})(BreadCrumbPage);
