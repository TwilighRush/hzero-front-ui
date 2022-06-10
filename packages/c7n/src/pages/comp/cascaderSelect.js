import React from "react";
import { Content } from "root/components/Page";
import { withThemedLayout } from "../../utils/withThemedLayout";
import Cascader from "../../components/CascaderPro";

const boxStyle = {
  margin: 20,
  padding: 20,
  border: "1px solid rgba(90, 94, 154, 0.2)",
  marginLeft: 0,
  borderRadius: 5,
};
const CascaderSelectPage = () => {
  const options = [
    {
      value: "zhejiang",
      meaning: "Zhejiang",
      children: [
        {
          value: "hangzhou",
          meaning: "Hangzhou22222222222",
          children: [
            {
              value: "xihu",
              meaning: "West Lake1111111111111",
            },
          ],
        },
      ],
    },
    {
      value: "jiangsu",
      meaning: "Jiangsu",
      children: [
        {
          value: "nanjing",
          meaning: "Nanjing",
          children: [
            {
              value: "zhonghuamen",
              meaning: "Zhong Hua Men",
            },
          ],
        },
      ],
    },
  ];

  function onChange(value) {
    console.log(value);
  }

  return (
    <Content>
      <h2>基础</h2>
      <div style={boxStyle}>
        <Cascader
          value={["zhejiang", "hangzhou", "xihu"]}
          options={options}
          onChange={onChange}
          placeholder="请选择对应的地方"
        />
        <Cascader placeholder="请选择对应的地方" options={[]} />
        <div style={{ marginTop: "10px" }}>
          <Cascader
            value={["zhejiang", "hangzhou", "xihu"]}
            options={options}
            onChange={onChange}
            placeholder="请选择对应的地方"
            disabled
          />
        </div>
      </div>
      {/* <h2>多选</h2>
      <div style={boxStyle}>
        <Cascader
          options={options}
          onChange={onChange}
          placeholder="Please select"
          multiple
        />
      </div> */}
    </Content>
  );
};
export default withThemedLayout({
  title: "CascaderSelect 组件",
  name: "cascaderSelect",
})(CascaderSelectPage);
