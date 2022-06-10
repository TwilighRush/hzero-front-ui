import React, { useState } from "react";
// import { Button } from "choerodon-ui";
import { Content } from "root/components/Page";
import { withThemedLayout } from "../../utils/withThemedLayout";
import Result from "../../components/Result";
import Button from "../../components/Button";

const boxStyle = {
  margin: 20,
  padding: 20,
  border: "1px solid rgba(90, 94, 154, 0.2)",
  marginLeft: 0,
  borderRadius: 5,
};
const ResultPage = () => {
  const [value, setValue] = useState(3.5);
  const handleChange = (values) => {
    setValue(values);
  };
  return (
    <Content>
      <h2>基础</h2>
      <div style={boxStyle}>
        <Result
          status="success"
          title="Successfully Purchased Cloud Server ECS!"
          subTitle="Order number: 2017182818828182881 Cloud server configuration takes 1-5 minutes, please wait."
          extra={[
            <Button funcType="raised" key="buy">
              次要操作
            </Button>,
            <Button funcType="raised" type="primary" key="console">
              主要操作
            </Button>,
          ]}
        />
        <Result
          title="Your operation has been executed"
          subTitle="Order number: 2017182818828182881 Cloud server configuration takes 1-5 minutes, please wait."
          extra={[
            <Button funcType="raised" key="buy">
              次要操作
            </Button>,
            <Button funcType="raised" type="primary" key="console">
              主要操作
            </Button>,
          ]}
        />
        <Result
          status="warning"
          title="There are some problems with your operation."
          subTitle="Order number: 2017182818828182881 Cloud server configuration takes 1-5 minutes, please wait."
          extra={[
            <Button funcType="raised" key="buy">
              次要操作
            </Button>,
            <Button funcType="raised" type="primary" key="console">
              主要操作
            </Button>,
          ]}
        />
        <Result
          status="error"
          title="There are some problems with your operation."
          subTitle="Order number: 2017182818828182881 Cloud server configuration takes 1-5 minutes, please wait."
          extra={[
            <Button funcType="raised" key="buy">
              次要操作
            </Button>,
            <Button funcType="raised" type="primary" key="console">
              主要操作
            </Button>,
          ]}
        />
      </div>
    </Content>
  );
};

export default withThemedLayout({
  title: "Result 评分",
  name: "result",
})(ResultPage);
