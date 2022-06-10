import React from "react";
import PropTypes from "prop-types";
import { Layout } from "choerodon-ui";
import styled from "styled-components";

const { Content } = Layout;

const StyledMainLayoutContent = styled(Content)`
  flex: 1;
  //margin: 8px 0 0 0;
  margin: calc(0.64rem + 8px) 0 0 0;
  position: relative;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  background: none;
`;

const MainLayoutContent = ({ children }) => (
  <StyledMainLayoutContent>{children}</StyledMainLayoutContent>
);

MainLayoutContent.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MainLayoutContent;
