import { Container, getLocalConfig } from '@hzero-front-ui/core';
import React, { FC, useMemo } from 'react';
import Scheduler from './Scheduler';

const UedContainer: FC = (props) => {
  const defaults = useMemo(() => {
    return getLocalConfig();
  }, []);

  return (
    <Container defaultTheme={defaults.schema}>
      <Scheduler />
      {props.children}
    </Container>
  );
};

export default UedContainer;
