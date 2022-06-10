import React, { useState } from "react";
import { Row, Col } from "hzero-ui";
import { Content } from "root/components/Page";
import InputNumber from "../../components/InputNumber";
import Slider from "../../components/Slider";
import { withThemedLayout } from "../../utils/withThemedLayout";

const boxStyle = {
  margin: 20,
  padding: 20,
  border: "1px solid rgba(90, 94, 154, 0.2)",
  marginLeft: 0,
  borderRadius: 5,
};
const style = {
  float: "left",
  height: 300,
  marginLeft: 70,
};
const marks = {
  0: "状态1",
  25: "状态2",
  50: "状态3",
  75: "状态4",
  100: "状态5",
};
const SliderPage = () => {
  const [inputValue, setInputValue] = useState(1);
  const onChange = (value) => {
    setInputValue(value);
  };
  return (
    <>
      <Content>
        <h2>水平Sider</h2>
        <div style={boxStyle}>
          <h3>基础</h3>
          <Row type="flex" gutter={24}>
            <Col span={6}>
              <Slider defaultValue={30} />
            </Col>
            <Col span={6}>
              <Slider defaultValue={[20, 50]} range />
            </Col>
          </Row>
          <h3>禁用</h3>
          <Row type="flex" gutter={24}>
            <Col span={6}>
              <Slider disabled defaultValue={30} />
            </Col>
            <Col span={6}>
              <Slider disabled defaultValue={[20, 50]} range />
            </Col>
          </Row>
        </div>
        <h2>竖直Sider</h2>
        <div style={boxStyle}>
          <h3>基础</h3>
          <div style={{ height: 300 }}>
            <div style={style}>
              <Slider vertical defaultValue={30} />
            </div>
            <div style={style}>
              <Slider vertical range step={10} defaultValue={[20, 50]} />
            </div>
          </div>
          <h3>禁用</h3>
          <div style={{ height: 300 }}>
            <div style={style}>
              <Slider vertical defaultValue={30} disabled />
            </div>
            <div style={style}>
              <Slider
                vertical
                range
                step={10}
                defaultValue={[20, 50]}
                disabled
              />
            </div>
          </div>
        </div>
        <h2>自定义提示</h2>
        <div style={boxStyle}>
          <Slider />
        </div>
        <h2>带标签滑块</h2>
        <div style={boxStyle}>
          <Slider marks={marks} defaultValue={25} />
        </div>
        <h2>带数字滑块</h2>
        <div style={boxStyle}>
          <Row>
            <Col span={12}>
              <Slider min={1} max={20} onChange={onChange} value={inputValue} />
            </Col>
            <Col span={4}>
              <InputNumber
                min={1}
                max={20}
                style={{ marginLeft: 16 }}
                value={inputValue}
                onChange={onChange}
              />
            </Col>
            <Col span={4}>
              <span style={{ marginTop: "4px", display: "inline-block" }}>
                各单位
              </span>
            </Col>
          </Row>
        </div>
      </Content>
    </>
  );
};

export default withThemedLayout({
  title: "Slider 组件",
  name: "slider",
  styleCount: 2,
})(SliderPage);
