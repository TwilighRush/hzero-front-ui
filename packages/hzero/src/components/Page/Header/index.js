/**
 * 工作区 Header
 *
 * @date: 2018-6-30
 * @author: wangshihao <shihao.wang@hand-china.com>
 * @version: 0.0.1
 * @copyright Copyright (c) 2019, Hand
 */
import React, { Component } from "react";
import {
  ActionsWrapper,
  BackImage,
  Container,
  Title,
  TitleWrapper,
} from "./Header.style.";
import backImg from "../../../assets/components/images/back@2x.png";

class PageHeader extends Component {
  // handleBackClick = () => {
  //   const { onBack } = this.props;
  //   if (onBack) {
  //     onBack();
  //   }
  // };

  handleTabChange = key => {
    const { onTabsChange } = this.props;
    if (onTabsChange) {
      onTabsChange(key);
    }
  };

  render() {
    const { title, children, tabsConfig, hideBackBtn, onBack } = this.props;
    const { tabs = [] } = tabsConfig;
    return (
      <Container className="page-head">
        <TitleWrapper className="title-wrapper">
          {!hideBackBtn && <BackImage src={backImg} onClick={onBack} />}
          {title && (
            <Title key="page-head-title" className="page-head-title">
              {title}
            </Title>
          )}
          <ActionsWrapper
            key="page-head-operator"
            className="page-head-operator"
          >
            {children}
          </ActionsWrapper>
        </TitleWrapper>
        {tabs.length > 0 ? <div className="tabs-wrapper" /> : null}
      </Container>
    );
  }
}

PageHeader.defaultProps = {
  onBack: () => {},
  hideBackBtn: false,
  tabsConfig: {},
};

export default PageHeader;
