import React from "react";
import { Content } from "root/components/Page";
import { withThemedLayout } from "../../utils/withThemedLayout";
import Divider from "../../components/Divider";

const boxStyle = {
  margin: 0,
  padding: 20,
  border: "1px solid rgba(90, 94, 154, 0.2)",
  marginLeft: 0,
  borderRadius: 5,
  color: "rgba(0, 0, 0, 0.65)",
};
const DividerPage = () => {
  return (
    <Content>
      <h2>水平分割</h2>
      <div style={boxStyle}>
        <div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne
            merninisti licere mihi ista probare, quae sunt a te dicta? Refert
            tamen, quo modo.
          </p>
          <Divider />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne
            merninisti licere mihi ista probare, quae sunt a te dicta? Refert
            tamen, quo modo.
          </p>
          <Divider>With Text</Divider>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne
            merninisti licere mihi ista probare, quae sunt a te dicta? Refert
            tamen, quo modo.
          </p>
          <Divider dashed />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne
            merninisti licere mihi ista probare, quae sunt a te dicta? Refert
            tamen, quo modo.
          </p>
          <Divider orientation="left">With Text</Divider>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne
            merninisti licere mihi ista probare, quae sunt a te dicta? Refert
            tamen, quo modo.
          </p>
          <Divider orientation="right">With Text</Divider>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne
            merninisti licere mihi ista probare, quae sunt a te dicta? Refert
            tamen, quo modo.
          </p>
        </div>
      </div>
      <h2>垂直分割线</h2>
      <div style={boxStyle}>
        <div>
          Text
          <Divider type="vertical" />
          <a href="#">Link</a>
          <Divider type="vertical" />
          <a href="#">Link</a>
        </div>
      </div>
    </Content>
  );
};

export default withThemedLayout({
  title: "Divider 分割线",
  name: "divider",
})(DividerPage);
