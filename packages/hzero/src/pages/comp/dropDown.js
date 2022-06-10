import React from "react";

import { Icon } from "hzero-ui";
import { Content } from "root/components/Page";
import { withThemedLayout } from "../../utils/withThemedLayout";
import Menu from "../../components/Menu";
import Dropdown from "../../components/Dropdown";
import Button from "../../components/Button";

const { SubMenu } = Menu;
const boxStyle = {
  margin: 20,
  padding: 20,
  border: "1px solid rgba(90, 94, 154, 0.2)",
  marginLeft: 0,
  borderRadius: 5,
};
const menu = (
  <Menu>
    <Menu.Item>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="http://www.alipay.com/"
      >
        1st menu item
      </a>
    </Menu.Item>
    <Menu.Item>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="http://www.taobao.com/"
      >
        2nd menu item
      </a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">
        3rd menu item
      </a>
    </Menu.Item>
  </Menu>
);

const menu2 = (
  <Menu>
    <Menu.Item>1st menu item</Menu.Item>
    <Menu.Item>2nd menu item</Menu.Item>
    <SubMenu title="sub menu">
      <Menu.Item>3rd menu item</Menu.Item>
      <Menu.Item>4th menu item</Menu.Item>
    </SubMenu>
    <SubMenu title="disabled sub menu" disabled>
      <Menu.Item>5d menu item</Menu.Item>
      <Menu.Item>6th menu item</Menu.Item>
    </SubMenu>
  </Menu>
);
const DropDownPage = () => {
  return (
    <>
      <Content>
        <h2>基础</h2>
        <div style={boxStyle}>
          <Dropdown overlay={menu}>
            <Button type="primary">
              Hover me <Icon type="down" />
            </Button>
          </Dropdown>
          <Dropdown overlay={menu} trigger={["click"]}>
            <Button>
              Click me <Icon type="down" />
            </Button>
          </Dropdown>
        </div>
        <h2>弹出位置</h2>
        <div style={boxStyle}>
          <Dropdown overlay={menu} placement="bottomLeft">
            <Button>bottomLeft</Button>
          </Dropdown>
          <Dropdown overlay={menu} placement="bottomCenter">
            <Button>bottomCenter</Button>
          </Dropdown>
          <Dropdown overlay={menu} placement="bottomRight">
            <Button>bottomRight</Button>
          </Dropdown>
          <Dropdown overlay={menu} placement="topLeft">
            <Button>topLeft</Button>
          </Dropdown>
          <Dropdown overlay={menu} placement="topCenter">
            <Button>topCenter</Button>
          </Dropdown>
          <Dropdown overlay={menu} placement="topRight">
            <Button>topRight</Button>
          </Dropdown>
        </div>
        <h2>多级菜单</h2>
        <div style={boxStyle}>
          <Dropdown overlay={menu2}>
            <a className="ant-dropdown-link" href="#">
              Cascading menu <Icon type="down" />
            </a>
          </Dropdown>
        </div>
      </Content>
    </>
  );
};

export default withThemedLayout({
  title: "Dropdown 下拉菜单",
  name: "dropDown",
  styleCount: 1,
})(DropDownPage);
