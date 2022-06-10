import React from "react";
import { Content } from "root/components/Page";
import { withThemedLayout } from "../../utils/withThemedLayout";
import InputNumber from "../../components/InputNumber";

const boxStyle = {
  margin: 20,
  padding: 20,
  border: "1px solid rgba(90, 94, 154, 0.2)",
  marginLeft: 0,
  borderRadius: 5,
};
const InputNumberPage = () => {
  return (
    <>
      <Content>
        <h2>基础</h2>
        <div style={boxStyle}>
          <InputNumber
            min={1}
            max={10}
            defaultValue={3}
            style={{ width: "200px", marginRight: "10px" }}
          />
          <InputNumber
            allowThousandth
            precision={5}
            style={{ width: "200px", marginRight: "10px" }}
          />
          <InputNumber
            defaultValue={1000}
            precision={2}
            formatter={(value) =>
              `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
            parser={(value) => value.replace(/\$\s?|(,*)/g, "")}
            style={{ width: "200px", marginRight: "10px" }}
          />
          <InputNumber
            min={0}
            max={10}
            step={0.1}
            style={{ width: "200px", marginRight: "10px" }}
          />
          ,
        </div>
        <h2>三种大小</h2>
        <div style={boxStyle}>
          <InputNumber
            size="large"
            min={1}
            max={100000}
            defaultValue={3}
            style={{ width: "200px", marginRight: "10px" }}
          />
          <InputNumber
            min={1}
            max={100000}
            defaultValue={3}
            style={{ width: "200px", marginRight: "10px" }}
          />
          <InputNumber
            size="small"
            min={1}
            max={100000}
            defaultValue={3}
            style={{ width: "200px", marginRight: "10px" }}
          />
        </div>
        <h2>禁用</h2>
        <div style={boxStyle}>
          <InputNumber
            min={1}
            max={10}
            disabled
            defaultValue={3}
            style={{ width: "200px", marginRight: "10px" }}
          />
        </div>
      </Content>
    </>
  );
};
export default withThemedLayout({
  title: "InputNumber 数字输入框",
  name: "inputNumber",
  styleCount: 0,
})(InputNumberPage);
