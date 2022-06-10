import React from "react";
import { Row, Col, Icon } from "hzero-ui";
import { Content } from "root/components/Page";
import { withThemedLayout } from "../../utils/withThemedLayout";
import Switch from "../../components/Switch";

const SwitchDisplayPage = () => {
  return (
    <>
      <Content>
        <h4>普通Switch</h4>
        <Row type="flex" gutter={16}>
          <Col span={8}>
            <p>选中</p>
            <Switch defaultChecked />
            <Switch
              defaultChecked
              checkedChildren="开"
              unCheckedChildren="关"
              checkedValue="开"
              unCheckedValue="关"
            />
            <Switch
              checkedChildren={<Icon type="check" />}
              unCheckedChildren={<Icon type="cross" />}
              defaultChecked
            />
          </Col>
          <Col span={8}>
            <p>未选中</p>
            <Switch />
            <Switch
              checkedChildren="开"
              unCheckedChildren="关"
              checkedValue="开"
              unCheckedValue="关"
            />
            <Switch
              checkedChildren={<Icon type="check" />}
              unCheckedChildren={<Icon type="cross" />}
            />
          </Col>
        </Row>
        <h4 style={{ marginTop: 16 }}>disabled</h4>
        <Row type="flex" gutter={16}>
          <Col span={8}>
            <p>选中</p>
            <Switch defaultChecked disabled />
            <Switch
              defaultChecked
              checkedChildren="开"
              unCheckedChildren="关"
              checkedValue="开"
              unCheckedValue="关"
              disabled
            />
            <Switch
              checkedChildren={<Icon type="check" />}
              unCheckedChildren={<Icon type="cross" />}
              defaultChecked
              disabled
            />
          </Col>
          <Col span={8}>
            <p>未选中</p>
            <Switch disabled />
            <Switch
              checkedChildren="开"
              unCheckedChildren="关"
              checkedValue="开"
              unCheckedValue="关"
              disabled
            />
            <Switch
              checkedChildren={<Icon type="check" />}
              unCheckedChildren={<Icon type="cross" />}
              disabled
            />
          </Col>
        </Row>
      </Content>
    </>
  );
};

export default withThemedLayout({
  title: "Switch组件",
  styleCount: 2,
  name: "switch",
})(SwitchDisplayPage);
