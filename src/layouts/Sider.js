import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'umi';
import { Layout, Menu } from 'choerodon-ui';
import styled from 'styled-components';
import logoIcon from './images/hzero-default-favicon.png';

const { SubMenu, Item, ItemGroup } = Menu;

const { Sider } = Layout;

const StyledSider = styled(Sider)`
  background-color: #fff !important;
  position: fixed !important;
  left: 0;
  overflow: auto;
  z-index: 1;
  height: 100vh;
  box-sizing: border-box;
  padding: 12px;
`;
const StyledLogo = styled.header`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 16px;
  span h1 {
    font-size: 16px;
    color: #333;
    margin: 0 0 0 12px;
    line-height: 32px;
    float: left;
    font-weight: 400;
  }
  span img {
    float: left;
    width: 32px;
    height: 32px;
    margin: 0;
    vertical-align: middle;
  }
`;

const Logo = ({ title, collapsed }) => (
  <StyledLogo collapsed={collapsed}>
    <span>
      <img alt="HZERO Front UI" src={logoIcon} />
      {!collapsed && <h1>{title}</h1>}
    </span>
  </StyledLogo>
);

const MenuWrapper = styled.div`
  width: 100%;
  height: calc(100% - 70px);
  overflow: auto;
  margin-top: 24px;
  .c7n-menu-item-group {
    margin-bottom: 16px;
  }
  ::-webkit-scrollbar {
    display: none;
  }
`;

const WrapSider = ({ collapsed, menus }) => {
  const [selectKeys, setSelectKeys] = useState([]);
  useEffect(() => {
    const path = window.location.pathname;
    setSelectKeys([path]);
  }, []);
  return (
    <StyledSider collapsible collapsed={collapsed} trigger={null} width={400}>
      <Link to="/">
        <Logo src={logoIcon} title="HZERO-FRONT-UI" />
      </Link>
      {/* <Search style={{ marginTop: 16 }} /> */}
      <MenuWrapper>
        <Menu
          mode="inline"
          selectedKeys={selectKeys}
          openKeys={['open-menu-key']}
          onSelect={(keys) => setSelectKeys([keys.key])}
        >
          {menus.map(({ path, title, routes }) =>
            !routes ? (
              <Item key={path}>
                <Link to={path}>{title}</Link>
              </Item>
            ) : (
              <SubMenu title={title} key="open-menu-key">
                {routes.map(({ category, components }) => (
                  <ItemGroup title={category} key={category}>
                    {components.map(({ path: p, title: t }) => (
                      <Item key={p}>
                        <Link to={p}>{t}</Link>
                      </Item>
                    ))}
                  </ItemGroup>
                ))}
              </SubMenu>
            )
          )}
        </Menu>
      </MenuWrapper>
    </StyledSider>
  );
};

WrapSider.propTypes = {
  menus: PropTypes.array,
};

WrapSider.defaultProps = {
  menus: [],
};

export default WrapSider;
