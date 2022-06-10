import React from "react";
// import PropTypes from 'prop-types';
import { Layout } from "choerodon-ui";
import styled from "styled-components";

const { Footer } = Layout;

const StyledFooter = styled(Footer)`
  padding: 10px;
  text-align: center;
`;

const WrapFooter = () => <StyledFooter>HZERO Front UI</StyledFooter>;

export default WrapFooter;
