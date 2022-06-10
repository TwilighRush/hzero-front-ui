import React from 'react';
import { Header, Content } from 'components/Page';
import { withThemeCss, getThemeData } from '@hzero-front-ui/core';
import { css } from 'styled-components';
import { Row } from 'choerodon-ui/pro';

const hoc = () => {
  return (
    <>
      <Header title="高阶组件测试" />
      <Content>
        <Row>
          <h4>自定义组件样式</h4>
          <button className="my-button2">123232</button>
        </Row>
      </Content>
    </>
  );
};

const WHOC = withThemeCss((props) => {
  const { primary3 } = getThemeData(props, 'common');
  return css`
    .my-button2 {
      background-color: ${primary3};
      color: #fff;
      transition: all 0.3s;
      border: 1px solid ${primary3};
      width: 80px;
      height: 28px;
      outline: none;
    }
  `;
})(hoc);

export default WHOC;
