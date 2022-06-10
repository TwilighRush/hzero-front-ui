import React, { useContext } from "react";
import { Layout, Dropdown, Menu } from "choerodon-ui";
import styled from "styled-components";
import { ThemeContext } from "@hzero-front-ui/core";
import { themeMap } from '../config/theme';
import bg from "./images/bg@2x.png";

const { Header } = Layout;

const StyledHeader = styled(Header)`
  background: none;
  margin: 0;
  padding: 0;
  color: #fff;
  font-size: 0.1rem;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  overflow: visible;
  .back-img {
    max-width: 100%;
    height: auto;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    z-index: 0;
  }
  .side-toggle {
    display: inline-block;
    width: 30px;
    height: 30px;
    position: absolute;
    left: 16px;
    top: calc(50% - 15px);
    text-align: center;
    line-height: 30px;
    z-index: 10;
  }
  .page-header-options {
    position: absolute;
    right: 0;
    top: 0;
    height: 50px;
    padding: 8px 32px;
    font-size: 14px;
    .theme-change-icon {
      width: 32px;
      height: 32px;
      cursor: pointer;
    }
  }
`;

// setCollapsed, collapsed
const WrapHeader = () => {
  const { setTheme, schema } = useContext(ThemeContext);
  const handleThemeChange = (theme) => {
    setTheme(theme);
    localStorage.setItem("__c7n__ui__debug__theme__", theme);
  };
  const menu = (
    <Menu onClick={(e) => handleThemeChange(e.key)} selectedKeys={[schema]}>
      {Object.keys(themeMap).map((key) => (
        <Menu.Item key={key}>{themeMap[key]}</Menu.Item>
      ))}
    </Menu>
  );
  return (
    <StyledHeader>
      <img src={bg} alt="背景" className="back-img" />
      <div className="page-header-options">
        <Dropdown overlay={menu}>
          <span>
            <img
              className="theme-change-icon"
              src={require("./images/theme-configure.svg")}
              alt=""
            />
            <span>{themeMap[schema]}</span>
          </span>
        </Dropdown>
      </div>
      {/* <a onClick={() => setCollapsed(!collapsed)} className="side-toggle">
        <Icon style={{ fontSize: 20, color: "#fff" }} type="menu" />
      </a> */}
    </StyledHeader>
  );
};

export default WrapHeader;
