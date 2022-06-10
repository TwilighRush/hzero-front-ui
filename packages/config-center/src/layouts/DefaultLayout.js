/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Layout } from 'hzero-ui';
import styled from 'styled-components';

import Header from './Header';
import MainLayoutContent from './MainLayoutContent';
// import Footer from "./Footer";
import Sider from './Sider';
import './layout.css';
// import Container from "../components/Container";
import Container from '../components/Container';

if (process.env.TARGET === 'static') {
  // eslint-disable-next-line no-unused-expressions
  import('hzero-ui/dist/hzero-ui.css');
}

const menus = [
  {
    title: '配置中心',
    icon: 'setting',
    path: 'theme-config',
  },
  {
    title: '组件配置',
    icon: 'smile-o',
    path: 'theme-config/components',
  },
];

const StyledLayout = styled(Layout)`
  position: relative;
  padding: 0;
  height: 100%;
  overflow-y: hidden;
  background: #efefef;
`;

const StyledMainLayout = styled(Layout)`
  height: 100%;
  padding: 0;
  position: relative;
  transition: padding-left 0.2s;
  overflow-y: hidden;
`;

const StyledContainer = styled.div`
  position: relative;
  flex: 1;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  padding: 8px 8px 0 8px;
  display: flex;
  flex-direction: column;
  overflow-y: hidden;
`;

const WrapLayout = ({ children }) => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Container>
      <StyledLayout className="main-content">
        <Sider collapsed={collapsed} menus={menus} />
        <StyledMainLayout collapsed={collapsed ? 'true' : ''}>
          <StyledContainer>
            <Header setCollapsed={setCollapsed} collapsed={collapsed} />
            <MainLayoutContent>{children}</MainLayoutContent>
            {/* <Footer>HZERO Front UI</Footer> */}
          </StyledContainer>
        </StyledMainLayout>
      </StyledLayout>
    </Container>
  );
};

WrapLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default WrapLayout;
