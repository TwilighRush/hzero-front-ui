import React from "react";
import { Row, Icon } from "hzero-ui";

import { Content } from "root/components/Page";
import { withThemedLayout } from "../../utils/withThemedLayout";
import Tabs from "../../components/Tabs";

const { TabPane } = Tabs;

const TabsDisplayPage = () => {
  return (
    <>
      <Content>
        <h4>普通Tabs</h4>
        <Row type="flex" gutter={16}>
          <p>样式一</p>
          <Tabs>
            <TabPane tab="切换1" key={1}>
              嵌套
              <Tabs type="card">
                <TabPane tab="切换2" key={2}>
                  选项2
                </TabPane>
                <TabPane tab="切换=" key={3}>
                  选项2
                </TabPane>
              </Tabs>
            </TabPane>
            <TabPane tab="切换2" key={2}>
              选项2
            </TabPane>
            <TabPane tab="切换3" key={3}>
              选项3
            </TabPane>
          </Tabs>
        </Row>
        <h4 style={{ marginTop: 16 }}>页签Tabs</h4>
        <Row gutter={16}>
          <Tabs type="editable-card">
            <TabPane
              tab={
                <>
                  <Icon type="home" /> 切换1
                </>
              }
              key={1}
            >
              选项1
            </TabPane>
            <TabPane tab="切换2" key={2}>
              选项2
            </TabPane>
            <TabPane tab="切换3" key={3}>
              选项3
            </TabPane>
          </Tabs>
        </Row>
        <Tabs tabPosition="left" style={{ height: 200 }}>
          <TabPane tab="切换1" key={1}>
            嵌套
            <Tabs type="card">
              <TabPane tab="切换2" key={2}>
                选项2
              </TabPane>
              <TabPane tab="切换=" key={3}>
                选项2
              </TabPane>
            </Tabs>
          </TabPane>
          <TabPane tab="切换2" key={2}>
            选项2
          </TabPane>
          <TabPane tab="切换3" key={3}>
            选项3
          </TabPane>
          <TabPane tab="切换2" key={4}>
            选项2
          </TabPane>
          <TabPane tab="切换3" key={5}>
            选项3
          </TabPane>
          <TabPane tab="切换2" key={6}>
            选项2
          </TabPane>
          <TabPane tab="切换3" key={7}>
            选项3
          </TabPane>
        </Tabs>
      </Content>
    </>
  );
};

export default withThemedLayout({
  title: "Tabs 组件",
  name: "tabs",
  styleCount: 3,
})(TabsDisplayPage);
