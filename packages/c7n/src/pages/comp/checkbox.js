import React from "react";
import { Row, Col } from "choerodon-ui/pro";
import { Content } from "root/components/Page";
import { withThemedLayout } from "../../utils/withThemedLayout";
import Checkbox from "../../components/Checkbox";
import ProCheckbox from "../../components/CheckBoxPro";
import SelectBox from "../../components/SelectBoxPro";

function handleChange(value, oldValue) {
  console.log("[button]", value, "[oldValue]", oldValue);
}
const boxStyle = {
  margin: 20,
  padding: 20,
  border: "1px solid rgba(90, 94, 154, 0.2)",
  marginLeft: 0,
  borderRadius: 5,
};
const { Option } = SelectBox;
const CheckBoxPage = () => {
  return (
    <Content>
      {/* <h2>SelectBox</h2>
      <div style={boxStyle}>
        <h3>基础</h3>
        <Row>
          <SelectBox multiple defaultValue={["1", "5"]}>
            <SelectBox.Option disabled value="1">
              选项1
            </SelectBox.Option>
            <SelectBox.Option value="2">选项2</SelectBox.Option>
            <SelectBox.Option value="3">选项3</SelectBox.Option>
            <SelectBox.Option disabled value="4">
              选项4
            </SelectBox.Option>
            <SelectBox.Option disabled value="5">
              选项5
            </SelectBox.Option>
          </SelectBox>
        </Row>
        <Row>
          <SelectBox defaultValue={["5"]}>
            <SelectBox.Option disabled value="1">
              选项1
            </SelectBox.Option>
            <SelectBox.Option value="2">选项2</SelectBox.Option>
            <SelectBox.Option value="3">选项3</SelectBox.Option>
            <SelectBox.Option disabled value="4">
              选项4
            </SelectBox.Option>
            <SelectBox.Option disabled value="5">
              选项5
            </SelectBox.Option>
          </SelectBox>
        </Row>
        <h3 style={{ marginBottom: 10 }}>垂直布局</h3>
        <h4 style={{ marginBottom: 10 }}>单选</h4>
        <Row>
          <SelectBox vertical mode="button">
            <SelectBox.Option value="jack">Jack</SelectBox.Option>
            <SelectBox.Option value="lucy">Lucy</SelectBox.Option>
            <SelectBox.Option value="wu">Wu</SelectBox.Option>
          </SelectBox>
        </Row>
        <h4 style={{ marginBottom: 10 }}>多选：</h4>
        <Row>
          <SelectBox vertical mode="button" multiple>
            <SelectBox.Option value="jack">Jack</SelectBox.Option>
            <SelectBox.Option value="lucy">Lucy</SelectBox.Option>
            <SelectBox.Option value="wu">Wu</SelectBox.Option>
          </SelectBox>
        </Row>
        <h3 style={{ marginBottom: 10 }}>水平布局</h3>
        <h4 style={{ marginBottom: 10 }}>单选：</h4>
        <Row>
          <SelectBox mode="button">
            <SelectBox.Option value="jack">Jack</SelectBox.Option>
            <SelectBox.Option value="lucy">Lucy</SelectBox.Option>
            <SelectBox.Option value="wu">Wu</SelectBox.Option>
          </SelectBox>
        </Row>
        <h4 style={{ marginBottom: 10 }}>多选：</h4>
        <Row>
          <SelectBox mode="button" multiple>
            <SelectBox.Option value="jack">Jack</SelectBox.Option>
            <SelectBox.Option value="lucy">Lucy</SelectBox.Option>
            <SelectBox.Option value="wu">Wu</SelectBox.Option>
          </SelectBox>
        </Row>
      </div> */}
      <h2>CheckBox</h2>
      <div style={boxStyle}>
        <h3>pro 组件</h3>
        <Row gutter={8}>
          <ProCheckbox>非选中状态</ProCheckbox>
          <ProCheckbox defaultChecked>选中状态</ProCheckbox>
          <ProCheckbox indeterminate>中间状态</ProCheckbox>
          <ProCheckbox disabled>非选中状态禁用</ProCheckbox>
          <ProCheckbox defaultChecked disabled>
            选中状态禁用
          </ProCheckbox>
          <ProCheckbox indeterminate disabled>
            中间状态禁用
          </ProCheckbox>
        </Row>
        <h3 style={{ marginBottom: 10 }}>components 组件</h3>
        <Row>
          <Checkbox>非选中状态</Checkbox>
          <Checkbox defaultChecked>选中状态</Checkbox>
          <Checkbox indeterminate>中间状态</Checkbox>
          <Checkbox disabled>非选中状态禁用</Checkbox>
          <Checkbox disabled defaultChecked>
            选中状态禁用
          </Checkbox>
          <Checkbox indeterminate disabled>
            中间状态禁用
          </Checkbox>
        </Row>
      </div>
      <h2>CheckBox</h2>
      <div style={boxStyle}>
        <h3>pro组件 按钮显示效果</h3>
        <div>
          <ProCheckbox
            mode="button"
            name="base"
            value="A"
            onChange={handleChange}
            defaultChecked
          >
            A
          </ProCheckbox>
          <ProCheckbox
            mode="button"
            name="base"
            value="B"
            onChange={handleChange}
          >
            B
          </ProCheckbox>
          <ProCheckbox
            mode="button"
            name="base"
            value="C"
            onChange={handleChange}
          >
            C
          </ProCheckbox>
        </div>
        <h2>
          selectbox
          <Col span={12}>
            <SelectBox mode="button" multiple onChange={handleChange}>
              <Option value="jack">Jack</Option>
              <Option value="lucy">Lucy</Option>
              <Option value="wu">Wu</Option>
            </SelectBox>
          </Col>
        </h2>
      </div>
    </Content>
  );
};

export default withThemedLayout({
  title: "Checkbox 组件",
  name: "checkboxBtn",
  styleCount: 2,
})(CheckBoxPage);
