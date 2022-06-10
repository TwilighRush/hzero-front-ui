// import { Link } from 'gatsby';
// import PropTypes from 'prop-types';
import React from "react";
import { Layout, Icon } from "hzero-ui";
import styled from "styled-components";

import bg from "../assets/images/bg@2x.png";

const { Header } = Layout;

const StyledHeader = styled(Header)`
  && {
    padding: 0;
    font-size: 0.1rem;
    position: absolute;
    box-sizing: border-box;
    top: 0;
    left: 0;
    right: 0;
    height: 64px;
    background: rgb(59, 135, 245);
    color: #fff;
    .background-img {
      width: 100%;
      height: auto;
      z-index: -1;
    }
    a {
      position: absolute;
      top: calc(50% - 12px);
      left: 12px;
      width: 24px;
      height: 24px;
      line-height: 24px;
      z-index: 2;
    }
    a i.anticon {
      color: #fff;
      font-size: 16px;
    }
  }
`;

const WrapHeader = ({ setCollapsed, collapsed }) => (
  <StyledHeader>
    <img className="background-img" src={bg} alt="bg" />
    <a onClick={() => setCollapsed(!collapsed)}>
      <Icon type={collapsed ? "menu-fold" : "menu-unfold"} />
    </a>
  </StyledHeader>
);

export default WrapHeader;
