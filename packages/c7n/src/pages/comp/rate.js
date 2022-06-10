import React, { useState } from "react";
import { Content } from "root/components/Page";
import { withThemedLayout } from "../../utils/withThemedLayout";
import RatePro from "../../components/RatePro";
import Rate from "../../components/Rate";

const boxStyle = {
  margin: 20,
  padding: 20,
  border: "1px solid rgba(90, 94, 154, 0.2)",
  marginLeft: 0,
  borderRadius: 5,
};
const RatePage = () => {
  const [value, setValue] = useState(3.5);
  const handleChange = (values) => {
    setValue(values);
  };
  return (
    <Content>
      <h2>基础</h2>
      <div style={boxStyle}>
        <Rate
          allowHalf
          value={value}
          onChange={(values) => handleChange(values)}
        />
        {value && <span className="c7n-rate-text">{value} stars</span>}
      </div>
      <h2>Pro</h2>
      <div style={boxStyle}>
        <RatePro allowHalf value={value} />
      </div>
    </Content>
  );
};

export default withThemedLayout({
  title: "Rate 评分",
  name: "rate",
})(RatePage);
