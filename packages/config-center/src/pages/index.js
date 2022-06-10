import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { defineGlobalVersion } from '@hzero-front-ui/core';
import { pageEvents } from '../utils/event';
import intl, { defaultLocale } from '../utils/intl';
import ConfigIndex from './ConfigIndex';
import ConfigByStep from './ConfigByStep';

defineGlobalVersion(require('../../package.json'));

const pageMap = {
  'theme-config': ConfigIndex,
  'theme-config/components': ConfigByStep,
};

// language: zh_CN, en_US
const ProdApp = (props) => {
  const [page, setPage] = useState({
    path: 'theme-config',
    params: {},
  });
  intl.changeLocale(props.lang);
  if (props.localeData && typeof props.localeData === 'object') {
    intl.loadData({
      ...defaultLocale,
      ...props.localeData,
    });
  }
  useEffect(() => {
    pageEvents.on('push', (path, params = {}) => {
      setPage({
        path,
        params,
      });
    });
  }, []);
  const DisplayPage = pageMap[page.path] || (() => <div>404 Not Found</div>);
  return <DisplayPage {...page.params} />;
};

ProdApp.propTypes = {
  lang: PropTypes.string,
  localeData: PropTypes.any,
};

ProdApp.defaultProps = {
  lang: 'zh_CN',
  localeData: null,
};

export default ProdApp;
