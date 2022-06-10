import React from "react";
// import PropTypes from 'prop-types';
import { Layout } from "hzero-ui";
import styled from "styled-components";

const { Footer } = Layout;

const StyledFooter = styled(Footer)`
  height: 32px;
  padding: 0;
  line-height: 32px;
  font-size: 12px;
  text-align: center;
`;

const WrapFooter = () => <StyledFooter>HZERO Front UI</StyledFooter>;

export default WrapFooter;
