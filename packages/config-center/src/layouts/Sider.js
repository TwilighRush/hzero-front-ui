import React from "react";
import PropTypes from "prop-types";
import { Icon, Layout, Menu } from "hzero-ui";
import styled from "styled-components";
import logo from "../assets/hzero-default-favicon.png";
import searchImg from "../assets/search@3x.png";
import { pageEvents } from "../utils/event";

const { Sider } = Layout;
const { Item: MenuItem, SubMenu, ItemGroup } = Menu;

const Link = ({ to, children }) => (
  <a onClick={() => pageEvents.emit("push", to)}>{children}</a>
);

const StyledSider = styled(Sider)`
  && {
    background-color: #fff;
    //position: fixed;
    left: 0;
    overflow: auto;
    z-index: 1;
    height: 100vh;
  }
`;

const StyledLogo = styled.header`
  && {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 16px;
    a h1 {
      font-size: 16px;
      color: #333;
      margin: 0 0 0 12px;
      line-height: 32px;
      float: left;
      font-weight: 400;
    }
    a img {
      float: left;
      width: 32px;
      height: 32px;
      margin: 0;
      vertical-align: middle;
    }
  }
`;

const StyledSearch = styled.div`
  padding: 20px 16px;
  img {
    margin: 0;
  }
  div.hzero-front-ui-wrap-search {
    line-height: 32px;
    background: rgba(201, 201, 201, 0.2);
  }

  div.hzero-front-ui-wrap-search > a {
    float: right;
  }

  div.hzero-front-ui-wrap-search > a > img {
    width: 16px;
    height: 16px;
    margin-right: 8px;
  }

  div.hzero-front-ui-wrap-search > input {
    box-sizing: border-box;
    width: calc(100% - 42px);
    text-indent: 8px;
    outline: none;
    border: none;
    background: transparent;
    color: #b1b1b1;
  }
`;

const MenusWrapper = styled.div`
  width: 100%;
  box-sizing: border-box;
  padding: 8px;
`;

const ComponentsIcon = styled(Icon)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 40px;
  height: 40px;
`;

const Logo = ({ title, collapsed }) => (
  <StyledLogo collapsed={collapsed}>
    <a>
      <img alt="HZERO Front UI" src={logo} />
      {!collapsed && <h1>{title}</h1>}
    </a>
  </StyledLogo>
);

const Search = ({ collapsed }) =>
  !collapsed && (
    <StyledSearch className="hzero-front-ui-search">
      <div className="hzero-front-ui-wrap-search">
        <a>
          <img alt="搜索菜单" src={searchImg} />
        </a>
        <input placeholder="搜索菜单" />
      </div>
    </StyledSearch>
  );

const generateSubMenuItems = routes => {
  return routes.map(({ category, components }) => (
    <ItemGroup title={category} key={category}>
      {components.map(({ path, title }) => (
        <MenuItem key={path}>
          <Link to={path}>{title}</Link>
        </MenuItem>
      ))}
    </ItemGroup>
  ));
};

const WrapSider = ({ title, collapsed, menus, selectedKeys }) => (
  <StyledSider collapsible collapsed={collapsed} trigger={null}>
    <Logo collapsed={collapsed} title={title} />
    <Search collapsed={collapsed} />
    <MenusWrapper>
      <Menu
        mode="inline"
        defaultOpenKeys={["side-submenu"]}
        selectedKeys={selectedKeys}
      >
        {menus.map(({ title: menuTitle, path, icon, routes }) =>
          !routes ? (
            <MenuItem key={path}>
              {collapsed ? (
                <Icon type={icon} />
              ) : (
                <Link to={path}>{menuTitle}</Link>
              )}
            </MenuItem>
          ) : (
            <SubMenu
              title={collapsed ? <ComponentsIcon type={icon} /> : menuTitle}
              key="side-submenu"
            >
              {generateSubMenuItems(routes)}
            </SubMenu>
          )
        )}
      </Menu>
    </MenusWrapper>
  </StyledSider>
);

WrapSider.propTypes = {
  title: PropTypes.string,
  menus: PropTypes.array,
  selectedKeys: PropTypes.array,
};

WrapSider.defaultProps = {
  title: ``,
  menus: [],
  selectedKeys: [],
};

export default WrapSider;
