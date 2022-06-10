import React, { useState } from "react";
import { Icon } from "choerodon-ui";
import { Row, Col } from "choerodon-ui/pro";
import { Content } from "root/components/Page";
import { withThemedLayout } from "../../utils/withThemedLayout";
import Menu from "../../components/Menu";

const { SubMenu } = Menu;
const MenuItemGroup = Menu.ItemGroup;
function handleClick(e) {
  console.log("click", e);
}
const boxStyle = {
  margin: 20,
  padding: 20,
  border: "1px solid rgba(90, 94, 154, 0.2)",
  marginLeft: 0,
  borderRadius: 5,
};
class Amenu extends React.Component {
  state = {
    current: "mail",
  };

  handleClick = (e) => {
    console.log("click ", e);
    this.setState({
      current: e.key,
    });
  };

  render() {
    return (
      <Menu
        onClick={this.handleClick}
        selectedKeys={[this.state.current]}
        mode="horizontal"
      >
        <Menu.Item key="mail">
          <Icon type="mail_outline" />
          Navigation One
        </Menu.Item>
        <Menu.Item key="app" disabled>
          <Icon type="apps" />
          Navigation Two
        </Menu.Item>
        <SubMenu
          title={
            <span>
              <Icon type="settings" />
              Navigation Three - Submenu
            </span>
          }
        >
          <MenuItemGroup title="Item 1">
            <Menu.Item key="setting:1">Option 1</Menu.Item>
            <Menu.Item key="setting:2">Option 2</Menu.Item>
          </MenuItemGroup>
          <MenuItemGroup title="Item 2">
            <Menu.Item key="setting:3">Option 3</Menu.Item>
            <Menu.Item key="setting:4">Option 4</Menu.Item>
          </MenuItemGroup>
        </SubMenu>
        <Menu.Item key="alipay">
          <a
            href="https://open-hand.github.io/choerodon-ui/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Navigation Four - Link
          </a>
        </Menu.Item>
      </Menu>
    );
  }
}
const MenuPage = () => {
  const [collapsed, setCollapsed] = useState(true);
  return (
    <Content>
      {/* <div style={boxStyle}>
        <div style={{ width: 256 }}>
          <Button type="primary" onClick={() => setCollapsed(true)} style={{ marginBottom: 16 }}>
            <Icon type={collapsed ? 'folder_open' : 'folder'} />
          </Button>
          <Menu
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            mode="inline"
            inlineCollapsed={collapsed}
          >
            <Menu.Item key="1" disabled>
              <Icon type="pie_chart_outlined" />
              <span>Option 1</span>
            </Menu.Item>
            <Menu.Item key="2">
              <Icon type="desktop_windows" />
              <span>Option 2</span>
            </Menu.Item>
            <Menu.Item key="3">
              <Icon type="inbox" />
              <span>Option 3</span>
            </Menu.Item>
            <SubMenu
              key="sub1"
              disabled
              title={
                <span>
                  <Icon type="mail_outline" />
                  <span>Navigation One</span>
                </span>
              }
            >
              <Menu.Item key="5">Option 5</Menu.Item>
              <Menu.Item key="6">Option 6</Menu.Item>
              <Menu.Item key="7">Option 7</Menu.Item>
              <Menu.Item key="8">Option 8</Menu.Item>
            </SubMenu>
            <SubMenu
              key="sub2"
              title={
                <span>
                  <Icon type="apps" />
                  <span>Navigation Two</span>
                </span>
              }
            >
              <Menu.Item key="9">Option 9</Menu.Item>
              <Menu.Item key="10">Option 10</Menu.Item>
              <SubMenu key="sub3" title="Submenu">
                <Menu.Item key="11">Option 11</Menu.Item>
                <Menu.Item key="12">Option 12</Menu.Item>
              </SubMenu>
            </SubMenu>
          </Menu>
        </div>
      </div> */}
      <div style={boxStyle}>
        <Row style={{ marginBottom: 50 }}>
          <Col span={3}>
            <Menu
              style={{ width: 256 }}
              defaultSelectedKeys={["1"]}
              defaultOpenKeys={["sub1"]}
              mode="inline"
            >
              <SubMenu
                key="sub1"
                disabled
                title={
                  <span>
                    <Icon type="mail_outline" />
                    <span>Navigation One</span>
                  </span>
                }
              >
                <MenuItemGroup key="g1" title="Item 1">
                  <Menu.Item key="1">
                    {" "}
                    <Icon type="mail_outline" />
                    Option 1
                  </Menu.Item>
                  <Menu.Item key="2">
                    Option 2 <Icon type="mail_outline" />
                  </Menu.Item>
                </MenuItemGroup>
                <MenuItemGroup key="g2" title="Item 2">
                  <Menu.Item key="3">Option 3</Menu.Item>
                  <Menu.Item key="4">Option 4</Menu.Item>
                </MenuItemGroup>
              </SubMenu>
              <SubMenu
                key="sub2"
                title={
                  <span>
                    <Icon type="apps" />
                    <span>Navigation Two</span>
                  </span>
                }
              >
                <Menu.Item key="5" disabled>
                  Option 5
                </Menu.Item>
                <Menu.Item key="6">Option 6</Menu.Item>
                <SubMenu key="sub3" title="Submenu">
                  <Menu.Item key="7">Option 7</Menu.Item>
                  <Menu.Item key="8">Option 8</Menu.Item>
                </SubMenu>
              </SubMenu>
              <SubMenu
                key="sub4"
                title={
                  <span>
                    <Icon type="settings" />
                    <span>Navigation Three</span>
                  </span>
                }
              >
                <Menu.Item key="9">Option 9</Menu.Item>
                <Menu.Item key="10">Option 10</Menu.Item>
                <Menu.Item key="11">Option 11</Menu.Item>
                <Menu.Item key="12">Option 12</Menu.Item>
              </SubMenu>
            </Menu>
          </Col>
        </Row>
      </div>
      <div style={boxStyle}>
        <Row style={{ marginBottom: 50 }}>
          <Menu onClick={handleClick} style={{ width: 256 }} mode="vertical">
            <SubMenu
              key="sub1"
              title={
                <span>
                  <Icon type="mail_outline" />
                  <span>Navigation One</span>
                </span>
              }
            >
              <MenuItemGroup title="Item 1">
                <Menu.Item key="1">Option 1</Menu.Item>
                <Menu.Item key="2">Option 2</Menu.Item>
              </MenuItemGroup>
              <MenuItemGroup title="Iteom 2">
                <Menu.Item key="3">Option 3</Menu.Item>
                <Menu.Item key="4">Option 4</Menu.Item>
              </MenuItemGroup>
            </SubMenu>
            <SubMenu
              key="sub2"
              title={
                <span>
                  <Icon type="apps" />
                  <span>Navigation Two</span>
                </span>
              }
            >
              <Menu.Item key="5">Option 5</Menu.Item>
              <Menu.Item key="6">Option 6</Menu.Item>
              <SubMenu key="sub3" title="Submenu">
                <Menu.Item key="7">Option 7</Menu.Item>
                <Menu.Item key="8">Option 8</Menu.Item>
              </SubMenu>
            </SubMenu>
            <SubMenu
              key="sub4"
              title={
                <span>
                  <Icon type="settings" />
                  <span>Navigation Three</span>
                </span>
              }
            />
          </Menu>
        </Row>
      </div>
      <div style={boxStyle}>
        <Row style={{ marginBottom: 50 }}>
          <Amenu />
        </Row>
      </div>
    </Content>
  );
};

export default withThemedLayout({
  title: "Menu 菜单",
  name: "menu",
  styleCount: 1,
})(MenuPage);
