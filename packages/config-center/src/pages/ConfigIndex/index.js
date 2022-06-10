/* eslint-disable react-hooks/rules-of-hooks */
import React, { useContext, useState, useEffect } from 'react';
import styled from 'styled-components';
import { Button } from 'hzero-ui';
import Spin from '@hzero-front-ui/hzero-ui/lib/Spin';
import { setLocalConfig, getLocalOriginConfig } from '@hzero-front-ui/core/lib/utils';

import intl from '../../utils/intl';

import { pageEvents } from '../../utils/event';

import {
  AvatarItem,
  ColorItemWrapper,
  IndexSubTitle,
  IndexTitle,
  IndexTop,
  OverviewContent,
  // OverviewIcons,
  OverviewImg,
  OverviewItem,
  OverviewTitle,
  PageContainer,
  PictureItem,
  TopDescription,
  OverviewRow,
} from '../index.style';
import { Header, Content } from '../../components/Page';
import ConfigItem from '../_components/ConfigItem';

import { ThemeContext, getStore } from '@hzero-front-ui/core';
import IconDisplay from '../_components/IconDisplay';
import { _getAsset } from '../../utils/utils';
import { getThemeDescription, showConfig, colorsMap } from '../../utils/constants';

const StyledConfigItem = styled(ConfigItem)`
  .config-item-wrapper {
    padding: 16px;
  }
  .item-outer-wrapper .config-item-wrapper .check-icon {
    transform: scale(1);
  }
`;

const ConfigIndex = () => {
  const [enabledThemes, setEnabledThemes] = useState([]);
  const contextValue = useContext(ThemeContext);
  const { setTheme, schema: schemaStr } = contextValue;
  useEffect(() => {
    const unsubscribe = getStore().subscribe((state) => {
      setEnabledThemes(state.enabledThemes || []);
    });
    return () => {
      unsubscribe();
    };
  }, []);
  const schemaIndex = enabledThemes.indexOf(schemaStr);
  const [loading, setLoading] = useState(false);
  const themeDescription = getThemeDescription();
  const normalPicture = [
    { title: '欢迎插画', src: _getAsset('welcome') },
    { title: '提示插画', src: _getAsset('remind') },
    { title: '引导插画1', src: _getAsset('guide1') },
    { title: '引导插画2', src: _getAsset('guide2') },
    { title: '引导插画3', src: _getAsset('guide3') },
    { title: '引导插画4', src: _getAsset('guide4') },
  ];
  const exceptionPicture = [
    { title: '无网络连接', src: _getAsset('noNetwork') },
    { title: '无搜索内容', src: _getAsset('noSearch') },
    { title: '无系统消息', src: _getAsset('noSysMessage') },
    { title: '无报告', src: _getAsset('noReport') },
  ];
  const genderAvatar = [
    { title: '默认女性', src: _getAsset('female') },
    { title: '默认男性', src: _getAsset('male') },
  ];
  const defaultAvatar = [
    { title: '默认头像1', src: _getAsset('nameAvatar1') },
    { title: '默认头像2', src: _getAsset('nameAvatar2') },
    { title: '默认头像3', src: _getAsset('nameAvatar3') },
    { title: '默认头像4', src: _getAsset('nameAvatar4') },
  ];
  const handleChange = (index) => {
    if (schemaIndex === index) return;
    const newSchema = enabledThemes[index] || 'theme1';
    const originData = getLocalOriginConfig();
    const oldConf = originData[newSchema];
    setLoading(true);
    setLocalConfig(newSchema, oldConf);
    setTimeout(() => {
      setLoading(false);
      setTheme(enabledThemes[index], oldConf);
    }, 500);
  };

  const handleNextStepClick = () => {
    pageEvents.emit('push', 'theme-config/components', {});
  };
  const colorsObj = colorsMap.get(schemaStr) || {
    primary: [],
    secondary: [],
  };
  return (
    <PageContainer>
      <Header title={intl.get('hzero.hzeroTheme.page.configCenter').d('配置中心')} hideBackBtn />
      <Content>
        <Spin spinning={loading} size={loading ? 'large' : 'small'}>
          <IndexTop className="cfg-top">
            <IndexTitle className="cfg-top-title">
              {intl.get('hzero.hzeroTheme.page.globalConfig').d('全局配置')}
            </IndexTitle>
            <IndexSubTitle className="cfg-top-sub-title">
              {intl
                .get('hzero.hzeroTheme.page.globalConfigDesc')
                .d('此项配置包含外观、布局等全局配置')}
            </IndexSubTitle>
            <StyledConfigItem
              className="cfg-themes"
              simple
              defaultSelected={schemaIndex}
              style={{ paddingLeft: 8 }}
              onChange={handleChange}
              items={enabledThemes.map((s) => ({
                render: <OverviewImg src={themeDescription[s].overview} />,
              }))}
            />
            <TopDescription className="cfg-description">
              {themeDescription[schemaStr]?.desc}&nbsp;
              {themeDescription[schemaStr]?.configurable &&
                intl.get('hzero.hzeroTheme.page.ifNeedModify').d('如需修改组件样式，请点击')}
              &nbsp;
              {themeDescription[schemaStr]?.configurable && (
                <a style={{ color: '#4588f4' }} onClick={handleNextStepClick}>
                  {intl.get('hzero.hzeroTheme.page.nextStep').d('下一步')}
                </a>
              )}
            </TopDescription>
            {showConfig[schemaStr]?.showNextStep && (
              <Button
                className="cfg-next-btn"
                onClick={handleNextStepClick}
                type="primary"
                style={{ marginTop: 12 }}
              >
                {intl.get('hzero.hzeroTheme.page.nextStepConfigComponent').d('下一步，配置组件')}
              </Button>
            )}
            {showConfig[schemaStr]?.showIcons && (
              <OverviewItem style={{ paddingRight: 16 }} className="cfg-icons">
                <OverviewTitle>
                  {intl.get('hzero.hzeroTheme.page.supportIcons').d('支持图标')}
                </OverviewTitle>
                <IconDisplay />
              </OverviewItem>
            )}
            {showConfig[schemaStr]?.showColors && (
              <OverviewItem className="cfg-colors">
                <OverviewTitle>色彩方案 Color</OverviewTitle>
                <OverviewContent style={{ paddingTop: 0, paddingBottom: 0 }}>
                  <OverviewRow>
                    {colorsObj.primary.map((c) => (
                      <ColorItemWrapper key={c}>
                        <div className="color-item" style={{ backgroundColor: c }} />
                        <p className="desc" style={{ paddingBottom: 54 }}>
                          <span>
                            {intl.get('hzero.hzeroTheme.page.primaryColor').d('主要颜色')}
                          </span>
                        </p>
                      </ColorItemWrapper>
                    ))}
                  </OverviewRow>
                  <OverviewRow style={{ paddingTop: 0 }}>
                    {colorsObj.secondary.map((color) => (
                      <ColorItemWrapper key={color}>
                        <div className="color-item" style={{ backgroundColor: color }} />
                        <p className="desc">
                          {intl.get('hzero.hzeroTheme.page.secondaryColor').d('次要颜色')}
                        </p>
                      </ColorItemWrapper>
                    ))}
                  </OverviewRow>
                </OverviewContent>
              </OverviewItem>
            )}
            {showConfig[schemaStr]?.showInsets && (
              <OverviewItem className="cfg-insets">
                <OverviewTitle>缺省页&插画 Default</OverviewTitle>
                <OverviewContent>
                  <OverviewRow>
                    {normalPicture.map((item) =>
                      item.src ? (
                        <PictureItem key={item.title}>
                          <div className="img-wrapper">
                            <img src={item.src} alt={item.title} />
                          </div>
                          <p className="title">{item.title}</p>
                        </PictureItem>
                      ) : null
                    )}
                  </OverviewRow>
                  <OverviewRow>
                    {exceptionPicture.map((item) =>
                      item.src ? (
                        <PictureItem key={item.title}>
                          <div className="img-wrapper">
                            <img src={item.src} alt={item.title} />
                          </div>
                          <p className="title">{item.title}</p>
                        </PictureItem>
                      ) : null
                    )}
                  </OverviewRow>
                </OverviewContent>
              </OverviewItem>
            )}
            {showConfig[schemaStr]?.showAvatar && (
              <OverviewItem className="cfg-avatar">
                <OverviewTitle>头像 Avatar</OverviewTitle>
                <OverviewContent style={{ paddingLeft: 26 }}>
                  <OverviewRow>
                    {genderAvatar.map((item) => (
                      <AvatarItem key={item.title}>
                        <div className="img-wrapper">
                          <img src={item.src} alt={item.title} className="avatar-img" />
                        </div>
                        <p className="title">{item.title}</p>
                      </AvatarItem>
                    ))}
                  </OverviewRow>
                  <OverviewRow>
                    {defaultAvatar.map((item) => (
                      <AvatarItem key={item.title}>
                        <div className="img-wrapper">
                          <img src={item.src} alt={item.title} className="avatar-img" />
                        </div>
                        <p className="title">{item.title}</p>
                      </AvatarItem>
                    ))}
                  </OverviewRow>
                </OverviewContent>
              </OverviewItem>
            )}
          </IndexTop>
        </Spin>
      </Content>
    </PageContainer>
  );
};

export default ConfigIndex;
