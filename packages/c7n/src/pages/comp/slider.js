import React, { useState } from "react";
import { Row, Col } from "choerodon-ui";
import { NumberField } from "choerodon-ui/pro";
import { Content } from "root/components/Page";
import { withThemedLayout } from "../../utils/withThemedLayout";
import Slider from "../../components/Slider";

const ButtonPage = () => {
  const [inputValue, setInputValue] = useState();
  const onChange = (value) => {
    setInputValue(value);
  };
  const marks = {
    0: "状态1",
    33: "状态2",
    66: "状态3",
    100: "状态4",
  };
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
  return (
    // <Content>
    //   <h2 style={{ marginBottom: 20 }}>基本</h2>
    //   <div style={boxStyle}>
    //     <Row>
    //       <Slider defaultValue={37} />
    //       <Slider marks={marks} defaultValue={33} />
    //       <Row>
    //         <Col span={12}>
    //           <Slider min={1} max={20} onChange={onChange} value={inputValue} />
    //         </Col>
    //         <Col span={4}>
    //           <InputNumber
    //             min={1}
    //             max={20}
    //             style={{ marginLeft: 16 }}
    //             value={inputValue}
    //             onChange={onChange}
    //             placeholder="请输入"
    //           />
    //         </Col>
    //         <Col span={6} style={{ marginLeft: 20, lineHeight: "32px" }}>
    //           个单位
    //         </Col>
    //       </Row>
    //     </Row>
    //   </div>
    // </Content>
    <Content>
      <h2>水平Sider</h2>
      <div style={boxStyle}>
        <h3>基础</h3>
        <Row type="flex" gutter={24}>
          <Col span={6}>
            <Slider defaultValue={30} tipFormatter={(value) => value} />
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
            <Slider vertical range step={10} defaultValue={[20, 50]} disabled />
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
          <Col span={2}>
            <NumberField
              precision={0}
              step={1}
              style={{ marginLeft: 16, marginTop: 4, width: 74 }}
              onChange={onChange}
            />
          </Col>
          <Col span={2}>
            <span style={{ marginTop: "8px", display: "inline-block" }}>
              各单位
            </span>
          </Col>
        </Row>
      </div>
    </Content>
  );
};

export default withThemedLayout({
  title: "slider 组件",
  name: "slider",
  styleCount: 2,
})(ButtonPage);
