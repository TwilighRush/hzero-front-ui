/* eslint-disable */
import React, { useContext, useRef, useState, useEffect, useLayoutEffect } from 'react';
import { Anchor, Button, Icon, notification } from 'hzero-ui';
import styled from 'styled-components';
import { PageContainer } from '../index.style';
import { Content, Header } from '../../components/Page';
import { setLocalConfig } from '@hzero-front-ui/core/lib/utils';
import { SideContainer } from '../ComponentsConfig/index.style';
import PreviewPage from '../Preview';
import ConfigStepOne from './ConfigStepOne';
import ConfigStepTwo from './ConfigStepTwo';
import ConfigStepThree from './ConfigStepThree';
import ConfigStepFour from './ConfigStepFour';
import { CfgStepsWrapper, ThumbnailContainer, PreviewBtnContainer } from './index.style';
import OptActions from '../_components/PreviewAction';
import { ThemeContext, getDefaultConfig } from '@hzero-front-ui/core/lib/utils';
import { pageEvents } from '../../utils/event';

import previewIcon from '../../assets/icons/preview@3x.png';
import intl from '../../utils/intl';

const StyledContent = styled(Content)`
  padding-right: 180px;
  position: relative;
  box-sizing: border-box;
  padding-bottom: 32px;

  .t-divider {
    display: inline-block;
    width: 65%;
    height: 1px;
    background: #ccc;
  }
`;

// 用于缓存进入组件配置时的配置数据
let firstLoadThemeConfig = null;

const stepMap = [ConfigStepOne, ConfigStepTwo, ConfigStepThree, ConfigStepFour];

const ConfigByStep = () => {
  const anchorMap = {
    step1: [
      {
        title: intl.get('hzero.hzeroTheme.components.button').d('按钮'),
        href: '#button-config',
      },
      {
        title: intl.get('hzero.hzeroTheme.components.input').d('输入框'),
        href: '#inputs-config',
      },
      {
        title: intl.get('hzero.hzeroTheme.components.select').d('选择框'),
        href: '#select-config',
      },
      {
        title: intl.get('hzero.hzeroTheme.components.cascader').d('级联选择'),
        href: '#cascader-config',
      },
    ],

    step2: [
      {
        title: intl.get('hzero.hzeroTheme.components.pagination').d('页面导航'),
        href: '#pagination-config',
      },
      {
        title: intl.get('hzero.hzeroTheme.components.slider').d('滑块'),
        href: '#slider-config',
      },
      {
        title: intl.get('hzero.hzeroTheme.components.selectBox').d('选择器'),
        href: '#select-box-config',
      },
      {
        title: intl.get('hzero.hzeroTheme.components.switch').d('开关'),
        href: '#switch-config',
      },
      {
        title: intl.get('hzero.hzeroTheme.components.transfer').d('穿梭框'),
        href: '#transfer-config',
      },
    ],

    step3: [
      {
        title: intl.get('hzero.hzeroTheme.components.list').d('列表'),
        href: '#list-config',
      },
      {
        title: intl.get('hzero.hzeroTheme.components.prompt').d('提示'),
        href: '#prompt-config',
      },
      {
        title: intl.get('hzero.hzeroTheme.components.carousel').d('走马灯'),
        href: '#carousel-config',
      },
      {
        title: intl.get('hzero.hzeroTheme.components.badge').d('徽章'),
        href: '#badge-config',
      },
    ],

    step4: [
      {
        title: intl.get('hzero.hzeroTheme.components.timeline').d('时间轴'),
        href: '#timeline-config',
      },
      {
        title: intl.get('hzero.hzeroTheme.components.anchor').d('锚点'),
        href: '#anchor-config',
      },
      {
        title: intl.get('hzero.hzeroTheme.components.tabs').d('切换'),
        href: '#tab-config',
      },
      {
        title: intl.get('hzero.hzeroTheme.components.table').d('表格'),
        href: '#table-config',
      },
      {
        title: intl.get('hzero.hzeroTheme.components.feedback').d('反馈'),
        href: '#pop-confirm-config',
      },
      {
        title: intl.get('hzero.hzeroTheme.components.progress').d('进度条'),
        href: '#progress-config',
      },
      {
        title: intl.get('hzero.hzeroTheme.components.loading').d('加载'),
        href: '#loading-config',
      },
    ],
  };
  const [thumbnails, setThumbnails] = useState([]);
  const [step, setStep] = useState(0);
  const { setTheme = () => {}, config = {}, schema, dataMap } = useContext(ThemeContext);
  const [saving, setSaving] = useState(false);
  const [currentTheme, setCurrentTheme] = useState(config);
  const containerRef = useRef(null);
  const anchorRef = useRef(null);
  const resetScrollContainer = () => {
    const container = containerRef.current;
    if (container && container.scrollTo) {
      container.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth',
      });
    }
  };
  useEffect(() => {
    firstLoadThemeConfig = config; // 缓存配置
    pageEvents.on('previewBack', () => {
      // 监听从预览返回的页面事件，将配置重置为进入时的配置
      setTheme(schema, firstLoadThemeConfig);
    });
  }, []);
  useEffect(() => {
    setCurrentTheme(config);
  }, [config]);
  useEffect(() => {
    let imgIndex = 1;
    const resultImages = []; // 所有缩略图
    const lang = intl.getLocale() || 'zh_CN';
    // 加载预览图，可能有一张或者多张,所以异步递归调用
    async function loadImage(index) {
      try {
        const module = await import(
          `../_assets/${schema}/${lang}/preview-thumbnails/thumbnail${index}.png`
        );
        resultImages.push(module.default);
        imgIndex += 1;
        loadImage(imgIndex);
      } catch (e) {
        setThumbnails(resultImages);
      }
    }
    loadImage(imgIndex);
  }, [schema]);
  const handleStepItemChange = (values) => {
    setCurrentTheme({
      ...currentTheme,
      ...values,
    });
  };

  const handleNext = () => {
    if (step < stepMap.length - 1) {
      setStep((s) => {
        return s < stepMap.length - 1 ? s + 1 : s;
      });
      resetScrollContainer();
    }
  };
  const handlePrev = () => {
    setStep((s) => (s > 0 ? s - 1 : s));
    resetScrollContainer();
  };
  const resetToDefault = () => {
    const current = { ...getDefaultConfig(dataMap.get(schema).data || {}), schema };
    setTheme(schema, {
      ...current,
    });
    setCurrentTheme(current);
    resetScrollContainer();
    setStep(0);
  };
  const handleSubmit = () => {
    setSaving(true);
    setTimeout(() => {
      setSaving(false);
    }, 1000);
    setTimeout(() => {
      setTheme(schema, currentTheme);
      setLocalConfig(schema, currentTheme);
      firstLoadThemeConfig = currentTheme;
      notification.success({
        message: intl.get('hzero.common.notification.success.save').d('保存成功'),
        duration: 3,
      });
    }, 200);
  };

  const [preview, setPreview] = useState(false);
  const handlePreview = () => {
    setPreview(true);
    setTimeout(() => {
      setTheme(schema, currentTheme);
    }, 200);
  };
  useLayoutEffect(() => {
    const container = containerRef.current;
    const anchor = anchorRef.current;
    const top = container.getClientRects()[0].y;
    Object.assign(anchor.style, {
      display: 'block',
      top: top + 'px',
    });
    function onKeyDown(e) {
      if (e.keyCode === 39) {
        handleNext();
      }
      if (e.keyCode === 37) {
        handlePrev();
      }
    }
    if (typeof document !== 'undefined') {
      document.addEventListener('keydown', onKeyDown);
    }
    return () => {
      if (typeof document !== 'undefined') {
        document.removeEventListener('keydown', onKeyDown);
      }
    };
  }, []);
  const CurrentStep = stepMap[step] || (() => null);
  const currentAnchors = anchorMap[`step${step + 1}`] || [];
  return (
    <>
      <PageContainer>
        <Header
          title={intl.get('hzero.hzeroTheme.page.componentsConfig').d('组件配置')}
          icon="setting"
          onBack={() => pageEvents.emit('push', 'theme-config')}
        >
          <Button style={{ marginRight: 8 }} onClick={resetToDefault}>
            <Icon type="sync" style={{ fontSize: 14 }} />
            {intl.get('hzero.hzeroTheme.page.resetToDefault').d('恢复默认配置')}
          </Button>
          <Button type="primary" onClick={handleSubmit} loading={saving}>
            <Icon type="save" style={{ fontSize: 14 }} />
            {intl.get('hzero.hzeroTheme.page.save').d('保存')}
          </Button>
        </Header>

        <StyledContent id="component-config-scroll-content-container" ref={containerRef}>
          {/* 配置项从这里出来 */}
          <CfgStepsWrapper>
            <CurrentStep config={currentTheme} onChange={handleStepItemChange} />
            <OptActions
              onNext={handleNext}
              onPrev={handlePrev}
              noPrev={step === 0}
              style={{ position: 'absolute', bottom: 0 }}
              noNext={stepMap.length - 1 === step}
            />
          </CfgStepsWrapper>
        </StyledContent>
        <SideContainer ref={anchorRef}>
          <ThumbnailContainer>
            {thumbnails.map((v) => (
              <div className="thumbnail" onClick={handlePreview} key={v}>
                <img src={v} alt="" />
              </div>
            ))}
          </ThumbnailContainer>
          <PreviewBtnContainer onClick={handlePreview}>
            <img src={previewIcon} alt="" />
            <span>{intl.get('hzero.hzeroTheme.page.preview').d('预览效果')}</span>
          </PreviewBtnContainer>
          <div className="t-divider" />
          {/* [1, 2, 3, 4].map((v, i) => (
              <React.Fragment key={v}>
                <div
                  className={step !== i ? "anchor-item-container-disabled" : ""}
                >
                  <Anchor
                    // showInkInFixed
                    getContainer={() => {
                      return (
                        document.getElementById(
                          "component-config-scroll-content-container"
                        ) || window
                      );
                    }}
                  >
                    {anchorMap[`step${v}`].map(anchor => (
                      <Anchor.Link
                        key={anchor.title}
                        href={anchor.href}
                        title={anchor.title}
                      />
                    ))}
                  </Anchor>
                </div>
                {i < 3 && <div className="t-divider" />}
              </React.Fragment>
            )) */}
          <Anchor
            // showInkInFixed
            getContainer={() =>
              document.querySelector('#component-config-scroll-content-container')
            }
          >
            {currentAnchors.map((anchor) => (
              <Anchor.Link key={anchor.title} href={anchor.href} title={anchor.title} />
            ))}
          </Anchor>
        </SideContainer>
      </PageContainer>
      {preview && <PreviewPage onBack={() => setPreview(false)} />}
    </>
  );
};

export default ConfigByStep;
