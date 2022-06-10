import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import { Layout } from 'choerodon-ui';
// import zhCN from 'choerodon-ui/lib/locale-provider/zh_CN';
// import enUs from "choerodon-ui/lib/locale-provider/en_US";
import styled from 'styled-components';
import { ThemeContext } from '@hzero-front-ui/core';
import cls from 'classnames';

import Header from './Header';
import MainLayoutContent from './MainLayoutContent';
import Sider from './Sider';
import './layout.css';
import 'hzero-ui/dist/hzero-ui.css';

const StyledLayout = styled(Layout)`
  position: relative;
  height: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: column;
`;

const StyledMainLayout = styled(Layout)`
  position: relative;
  padding-left: ${(props) => (props.collapsed ? 80 : 400)}px;
  transition: padding-left 0.2s;
`;

const StyledContainer = styled.div`
  position: relative;
  flex: 1;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  padding: 8px;
  display: flex;
  flex-direction: column;
`;

const WrapLayout = ({ children }) => {
  const [collapsed, setCollapsed] = useState(false);
  const { schema } = useContext(ThemeContext);
  return (
    <StyledLayout className={cls(`layout-theme-${schema}`)}>
      <Sider collapsed={collapsed} menus={window.menus || []} />
      <StyledMainLayout collapsed={collapsed ? 'true' : ''}>
        <StyledContainer>
          <Header setCollapsed={setCollapsed} collapsed={collapsed} />
          <MainLayoutContent>{children}</MainLayoutContent>
        </StyledContainer>
      </StyledMainLayout>
    </StyledLayout>
  );
};

WrapLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default WrapLayout;
