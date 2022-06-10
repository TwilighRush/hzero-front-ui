import React from 'react';
import ReactDom from 'react-dom';
import { initTheme } from '@hzero-front-ui/core';
import 'choerodon-ui/dist/choerodon-ui-pro.css';
// @ts-ignore
import Hzero from '@hzero-front-ui/hzero-ui/lib/themes/index';
import C7n from '@hzero-front-ui/c7n-ui/lib/themes/index';
import { theme1, theme2, theme3, theme5, theme6 } from '@hzero-front-ui/themes';

import './index.css';

import App from './App';

initTheme({
  modifyVars: {
    common: {
      primary: '#000',
    },
  },
  defaultTheme: 'theme3',
  themes: [
    {
      name: 'theme1',
      data: theme1,
    },
    {
      name: 'theme2',
      data: theme2,
    },
    {
      name: 'theme3',
      data: theme3,
    },
    {
      name: 'theme5',
      data: theme5,
    },
    {
      name: 'theme6',
      data: theme6,
    },
  ],
  templates: [
    {
      id: 'hzero',
      component: Hzero,
    },
    {
      id: 'c7n',
      component: C7n,
    },
    // {
    //   id: 'my',
    //   component: createMainStyleComponent({
    //     name: 'test',
    //     styles: [
    //       createStyleComponent('test', css`body {color: red !important;}`)
    //     ]
    //   })
    // }
  ],
});

ReactDom.render(<App />, document.getElementById('root'));
