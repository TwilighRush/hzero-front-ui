import React from 'react';
import { Header, Content } from 'components/Page';
import { Button, Row } from 'choerodon-ui/pro';

const index = () => {
  return (
    <>
      <Header title="首页" />
      <Content>
        <Row>
          <Button color="primary">按钮 primary</Button>
        </Row>
        <Row>
          <h4>自定义组件样式</h4>
          <button className="my-button">123232</button>
        </Row>
      </Content>
    </>
  );
};

export default index;
