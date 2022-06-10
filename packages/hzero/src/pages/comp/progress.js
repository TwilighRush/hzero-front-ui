import React from "react";
import { Row, Col } from "hzero-ui";
import { Content } from "root/components/Page";
import Form from "../../components/Form";
import Progress from "../../components/Progress";
import { withThemedLayout } from "../../utils/withThemedLayout";

const ProgressDisplayPage = () => {
  return (
    <>
      <Content>
        <h4>条状进度</h4>
        <Row type="flex" gutter={16}>
          <Col span={8}>
            <p>样式一</p>
            <Progress percent={30} />
            <Progress percent={50} status="active" />
            <Progress percent={70} status="exception" />
            <Progress percent={100} />
            <Progress percent={50} showInfo={false} />
            <Form.Item label="测试formItem">
              <Progress percent={30} />
            </Form.Item>
          </Col>
        </Row>
        <h4>条状进度</h4>
        <Row type="flex" gutter={16}>
          <Col span={8}>
            <p>样式一</p>
            <Progress type="circle" percent={30} />
            <Progress type="circle" percent={50} status="active" />
            <Progress type="circle" percent={70} status="exception" />
            <Progress type="circle" percent={100} />
            <Progress type="circle" percent={50} showInfo={false} />
          </Col>
          <Col span={8}>
            <p>样式二</p>
            <Progress type="circle" percent={30} />
            <Progress type="circle" percent={50} status="active" />
            <Progress type="circle" percent={70} status="exception" />
            <Progress type="circle" percent={100} />
            <Progress type="circle" percent={50} showInfo={false} />
          </Col>
        </Row>
      </Content>
    </>
  );
};

export default withThemedLayout({
  title: "Progress 组件",
  name: "lineProgress",
  styleCount: 2,
})(ProgressDisplayPage);
