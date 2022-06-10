/**
 * 工作区 Header
 *
 * @date: 2018-6-30
 * @author: wangshihao <shihao.wang@hand-china.com>
 * @version: 0.0.1
 * @copyright Copyright (c) 2019, Hand
 */
import React, { Component, ReactNode } from 'react';
import { ActionsWrapper, BackImage, Container, Title, TitleWrapper } from './Header.style';
import backImg from './back@2x.png';

export default class PageHeader extends Component<
  { onBack?: Function; title?: string; icon?: ReactNode; tabsConfig?: any; onTabsChange?: any },
  any
> {
  handleBackClick = () => {
    const { onBack } = this.props;
    if (onBack) {
      onBack();
    }
  };

  handleTabChange = (key) => {
    const { onTabsChange } = this.props;
    if (onTabsChange) {
      onTabsChange(key);
    }
  };

  render() {
    const { title, children, icon, tabsConfig = {} } = this.props;
    const { defaultActiveKey, tabs = [] } = tabsConfig;
    return (
      <Container className="page-head">
        <TitleWrapper className="title-wrapper">
          {icon ? icon : <BackImage src={backImg} onClick={this.handleBackClick} />}
          {title && (
            <Title key="page-head-title" className="page-head-title">
              {title}
            </Title>
          )}
          <ActionsWrapper key="page-head-operator" className="page-head-operator">
            {children}
          </ActionsWrapper>
        </TitleWrapper>
        {tabs.length > 0 ? <div className="tabs-wrapper"></div> : null}
      </Container>
    );
  }
}
