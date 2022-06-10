import React from "react";
// import { Switch, Form } from "choerodon-ui/pro";
import { Icon } from "choerodon-ui";
//  Row
// import { Switch as SwitchCom, Icon } from "choerodon-ui";
import { Content } from "root/components/Page";
import { withThemedLayout } from "../../utils/withThemedLayout";
import Switch from "../../components/SwitchPro";
import Form from "../../components/FormPro";

const boxStyle = {
  margin: 20,
  padding: 20,
  border: "1px solid rgba(90, 94, 154, 0.2)",
  marginLeft: 0,
  borderRadius: 5,
};
const SwitchPage = () => {
  const [loading, setLoading] = React.useState(true);

  return (
    <Content>
      <h2 style={{ marginBottom: 20 }}>Switch 开关 - pro</h2>
      <div style={boxStyle}>
        <h4>基本</h4>
        <Form columns={3}>
          <div>正常</div>
          <div>大</div>
          <div>小</div>
          <Switch label="关闭" />
          <Switch label="关闭" size="large" />
          <Switch label="关闭" size="small" />

          <Switch label="开启" defaultChecked />
          <Switch label="开启" defaultChecked size="large" />
          <Switch label="开启" defaultChecked size="small" />

          <Switch checked disabled label="开启禁用" />
          <Switch checked disabled label="开启禁用" size="large" />
          <Switch checked disabled label="开启禁用" size="small" />

          <Switch disabled label="关闭禁用" />
          <Switch disabled label="关闭禁用" size="large" />
          <Switch disabled label="关闭禁用" size="small" />
        </Form>
        <h4>带图标</h4>
        <Form>
          <Switch label="关闭" unCheckedChildren={<Icon type="close" />}>
            <Icon type="check" />
          </Switch>
          {/* <Switch label="关闭" unCheckedChildren={<Icon type="close" />} size="large">
            <Icon type="check" />
          </Switch>
          <Switch label="关闭" unCheckedChildren={<Icon type="close" />} size="small">
            <Icon type="check" />
          </Switch> */}

          <Switch
            label="开启"
            defaultChecked
            unCheckedChildren={<Icon type="close" />}
          >
            <Icon type="check" />
          </Switch>
          {/* <Switch
            label="开启"
            defaultChecked
            unCheckedChildren={<Icon type="close" />}
            size="large"
          >
            <Icon type="check" />
          </Switch>
          <Switch
            label="开启"
            defaultChecked
            unCheckedChildren={<Icon type="close" />}
            size="small"
          >
            <Icon type="check" />
          </Switch> */}

          <Switch
            label="开启禁用"
            checked
            disabled
            unCheckedChildren={<Icon type="close" />}
          >
            <Icon type="check" />
          </Switch>
          {/* <Switch
            label="开启禁用"
            checked
            disabled
            unCheckedChildren={<Icon type="close" />}
            size="large"
          >
            <Icon type="check" />
          </Switch>
          <Switch
            label="开启禁用"
            checked
            disabled
            unCheckedChildren={<Icon type="close" />}
            size="small"
          >
            <Icon type="check" />
          </Switch> */}

          <Switch
            label="关闭禁用"
            disabled
            unCheckedChildren={<Icon type="close" />}
          >
            <Icon type="check" />
          </Switch>
          {/* <Switch
            label="关闭禁用"
            disabled
            unCheckedChildren={<Icon type="close" />}
            size="large"
          >
            <Icon type="check" />
          </Switch>
          <Switch
            label="关闭禁用"
            disabled
            unCheckedChildren={<Icon type="close" />}
            size="small"
          >
            <Icon type="check" />
          </Switch> */}
        </Form>
        <h4>带文字</h4>
        <Form>
          <Switch label="关闭" unCheckedChildren="关">
            开
          </Switch>
          <Switch label="开启" defaultChecked unCheckedChildren="关">
            开
          </Switch>
          <Switch label="开启禁用" disabled checked unCheckedChildren="关">
            开
          </Switch>
          <Switch label="关闭禁用" disabled unCheckedChildren="关">
            开
          </Switch>
        </Form>
        <h4>加载中</h4>
        <Form>
          <Switch
            label="loading"
            checked={loading}
            onChange={(v) => setLoading(v)}
          />
        </Form>
        <Form>
          <Switch label="small" size="small" loading={loading} defaultChecked />
          <Switch label="default" loading={loading} defaultChecked />
          <Switch label="large" size="large" loading={loading} defaultChecked />
          <Switch label="readOnly" readOnly loading={loading} defaultChecked />
          <Switch label="disabled" disabled loading={loading} defaultChecked />
          <Switch
            label="开关"
            loading={loading}
            defaultChecked
            unCheckedChildren="关"
          >
            开开开开开
          </Switch>
        </Form>
        {/* <Switch>Switch</Switch>
        <Switch style={{ margin: '.1rem' }} unCheckedChildren="0">1</Switch>
        <Switch
          style={{ margin: ".1rem" }}
          unCheckedChildren="关"
          defaultChecked
        >
          开
        </Switch> */}
        {/* <h4>只读</h4>
        <Switch checked readOnly />
        <Switch readOnly style={{ margin: ".1rem" }} />
        <h4>禁用</h4>
        <Switch checked disabled />
        <Switch disabled style={{ margin: ".1rem" }} /> */}
      </div>
      {/* <h2 style={{ marginTop: 20 }}>Switch 开关 - Components </h2>
      <div style={boxStyle}>
        <h4>基本</h4>
        <SwitchCom />
        <h4>禁用</h4>
        <SwitchCom checked disabled />
        <SwitchCom disabled style={{ margin: '.1rem' }} />
        <h4>文字</h4>
        <SwitchCom checkedChildren="开" unCheckedChildren="关" defaultChecked />
        <SwitchCom checkedChildren="1" unCheckedChildren="0" style={{ margin: '.1rem' }} />
        <h4>大小</h4>
        <SwitchCom defaultChecked />
        <SwitchCom size="small" defaultChecked style={{ margin: '.1rem' }} />
      </div> */}
      {/* <div>
        <Switch
          style={{ margin: ".1rem" }}
          unCheckedChildren="关"
          defaultChecked
        >
          开
        </Switch>
        <br />
        <Switch style={{ margin: ".1rem" }} unCheckedChildren="0">1</Switch><br />
        <Switch
          style={{ margin: ".1rem" }}
          unCheckedChildren={<Icon type="close" />}
        >
          <Icon type="check" />
        </Switch>
      </div> */}
    </Content>
  );
};

export default withThemedLayout({
  title: "Checkbox 组件",
  name: "switch",
  styleCount: 2,
})(SwitchPage);
