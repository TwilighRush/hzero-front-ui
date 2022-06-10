import React from "react";
import {
  Row,
  Col,
  // Radio
} from "choerodon-ui/pro";
import {
  // Radio as ComRadio,
  Icon,
} from "choerodon-ui";
import { Content } from "root/components/Page";
import { withThemedLayout } from "../../utils/withThemedLayout";
import Radio from "../../components/RadioPro";
import ComRadio from "../../components/Radio";

const RadioButton = ComRadio.Button;
const RadioGroup = ComRadio.Group;
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
const RadioPage = () => {
  return (
    <Content>
      <h2>单选按钮-Pro</h2>
      <div style={boxStyle}>
        <h4>基础</h4>
        <Row>
          <Col span={12}>
            <Radio name="base" value="1">
              常规
            </Radio>
            <Radio name="base" value="2">
              悬停
            </Radio>
            <Radio name="base" value="3">
              选中
            </Radio>
          </Col>
          <Col span={12}>
            <Radio name="disabled" value="4" disabled>
              未选中失效
            </Radio>
            <Radio name="disabled" value="5" disabled checked>
              选中失效
            </Radio>
          </Col>
        </Row>
      </div>

      <h2>按钮单选-Comp</h2>
      <div style={boxStyle}>
        <h4>基础</h4>
        <Row>
          <Col span={12}>
            <RadioGroup>
              <ComRadio name="base1" value="1">
                常规
              </ComRadio>
              <ComRadio name="base1" value="2">
                悬停
              </ComRadio>
              <ComRadio name="base1" value="3">
                选中
              </ComRadio>
            </RadioGroup>
          </Col>
          <Col span={12}>
            <ComRadio name="disabled1" value="4" disabled>
              未选中失效
            </ComRadio>
            <ComRadio name="disabled1" value="5" disabled checked>
              选中失效
            </ComRadio>
          </Col>
        </Row>
      </div>

      <div style={boxStyle}>
        <h4>按钮样式的单选组合</h4>
        <Row>
          <Col span={24} style={{ marginBottom: 20 }}>
            <RadioGroup defaultValue="a">
              <RadioButton value="a">杭州</RadioButton>
              <RadioButton value="b">上海</RadioButton>
              <RadioButton value="c">成都</RadioButton>
            </RadioGroup>
          </Col>
          <Col span={24}>
            <RadioGroup disabled>
              <RadioButton value="a">杭州</RadioButton>
              <RadioButton value="b">上海</RadioButton>
              <RadioButton value="c">成都</RadioButton>
            </RadioGroup>
          </Col>
        </Row>
      </div>

      <h2>按钮单选-Comp</h2>
      <div style={boxStyle}>
        <h4>按钮单选(带图标)</h4>
        <Row>
          <Col span={24} style={{ marginBottom: 20 }}>
            <RadioGroup defaultValue="a">
              <RadioButton value="a">
                <Icon type="assignment-o" style={{ marginRight: 5 }} />
                <span>标题</span>
              </RadioButton>
              <RadioButton value="b">
                <Icon type="assignment-o" style={{ marginRight: 5 }} />
                <span>标题</span>
              </RadioButton>
              <RadioButton value="c">
                <Icon type="assignment-o" style={{ marginRight: 5 }} />
                <span>标题</span>
              </RadioButton>
            </RadioGroup>
          </Col>
          <Col span={24}>
            <RadioGroup disabled>
              <RadioButton value="a">
                <Icon type="assignment-o" style={{ marginRight: 5 }} />
                <span>标题</span>
              </RadioButton>
              <RadioButton value="b">
                <Icon type="assignment-o" style={{ marginRight: 5 }} />
                <span>标题</span>
              </RadioButton>
              <RadioButton value="c">
                <Icon type="assignment-o" style={{ marginRight: 5 }} />
                <span>标题</span>
              </RadioButton>
            </RadioGroup>
          </Col>
        </Row>
      </div>

      <h2>按钮显示效果</h2>
      <div style={boxStyle}>
        <form>
          <Radio
            mode="button"
            name="base"
            value="A"
            onChange={handleChange}
            defaultChecked
          >
            A
          </Radio>
          <Radio mode="button" name="base" value="B" onChange={handleChange}>
            B
          </Radio>
          <Radio mode="button" name="base" value="C" onChange={handleChange}>
            C
          </Radio>
        </form>
      </div>
    </Content>
  );
};

export default withThemedLayout({
  title: "Radio 单选框",
  name: "radio",
  styleCount: 2,
})(RadioPage);
