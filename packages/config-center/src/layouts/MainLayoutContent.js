import React from "react";
import PropTypes from "prop-types";
import { Layout } from "hzero-ui";
import styled from "styled-components";

const { Content } = Layout;

const StyledMainLayoutContent = styled(Content)`
  margin: 64px 0 0 0;
  height: 100%;
  position: relative;
  //background: #fff;
  border-radius: 4px;
  //padding: 16px;
  overflow-y: hidden;
  display: flex;
  flex-direction: column;
`;

const MainLayoutContent = ({ children }) => (
  <StyledMainLayoutContent>{children}</StyledMainLayoutContent>
);

MainLayoutContent.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MainLayoutContent;
