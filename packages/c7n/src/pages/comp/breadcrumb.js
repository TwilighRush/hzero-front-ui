import React from "react";
import { Row, Col, Icon } from "choerodon-ui/pro";
import { Content } from "root/components/Page";
import { withThemedLayout } from "../../utils/withThemedLayout";
import Breadcrumb from "../../components/Breadcrumb";
import Menu from "../../components/Menu";

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
        <div>
          <h2>基本</h2>
          <h4>最简单的用法</h4>
          <div style={boxStyle}>
            <Row>
              <Col span={24}>
                <Breadcrumb>
                  <Breadcrumb.Item>Option</Breadcrumb.Item>
                  <Breadcrumb.Item>Option01</Breadcrumb.Item>
                  <Breadcrumb.Item>Option02</Breadcrumb.Item>
                  <Breadcrumb.Item>Option03</Breadcrumb.Item>
                </Breadcrumb>
              </Col>
            </Row>
          </div>
        </div>
        {/* 折叠 */}
        <div>
          <h2>折叠</h2>
          <h4>最简单的用法（更多折叠待组件库支持）</h4>
          <div style={boxStyle}>
            <Row>
              <Col span={24}>
                <Breadcrumb>
                  <Breadcrumb.Item>Option01</Breadcrumb.Item>
                  <Breadcrumb.Item>Option02</Breadcrumb.Item>
                  <Breadcrumb.Item overlay={menu}>
                    <Icon type="more_horiz" />
                  </Breadcrumb.Item>
                  <Breadcrumb.Item>Option06</Breadcrumb.Item>
                </Breadcrumb>
              </Col>
            </Row>
          </div>
        </div>
        <h2>基本</h2>
        <div style={boxStyle}>
          <Breadcrumb>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>
              <a href="">Application Center</a>
            </Breadcrumb.Item>
            <Breadcrumb.Item>
              <a href="">Application List</a>
            </Breadcrumb.Item>
            <Breadcrumb.Item>An Application</Breadcrumb.Item>
          </Breadcrumb>
        </div>
        <h2>带有图标的</h2>
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
      </Content>
    </>
  );
};

const menu = (
  <Menu>
    <Menu.Item>Option03</Menu.Item>
    <Menu.Item>Option04</Menu.Item>
    <Menu.Item>Option05</Menu.Item>
  </Menu>
);

export default withThemedLayout({
  title: "Breadcrumb 面包屑",
  name: "breadcrumb",
  styleCount: 0,
})(BreadCrumbPage);
