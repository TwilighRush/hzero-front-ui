import React from 'react';
import { Container } from '@hzero-front-ui/core';
import DefaultLayout from './DefaultLayout';
import C7nPolyfill from '../components/DefaultC7NPolyfill'

const Layout = (props) => {
  return (
    <Container>
      <C7nPolyfill />
      <DefaultLayout>{props.children}</DefaultLayout>
    </Container>
  );
};

export default Layout;
