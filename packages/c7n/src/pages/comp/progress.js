import React from "react";
import { Row } from "choerodon-ui/pro";
import { Content } from "root/components/Page";
import Progress from "../../components/ProgressPro";
import CProgress from "../../components/Progress";
import { withThemedLayout } from "../../utils/withThemedLayout";

const CheckBoxPage = () => {
  return (
    <Content>
      <h3 style={{ marginBottom: 20 }}>Pro Progress</h3>
      <Row>
        <Progress style={{ marginRight: 10 }} type="loading" size="small" />
        <Progress style={{ marginRight: 10 }} type="loading" status="success" />
        <Progress type="loading" size="large" status="exception" />
      </Row>
      <Row>
        <Progress percent={15} />
        <Progress percent={15} status="active" />
        <Progress percent={15} status="normal" />
        <Progress percent={100} status="success" />
        <Progress percent={15} status="exception" />
      </Row>
      <Row>
        <Progress type="circle" percent={15} />
        <Progress type="circle" status="success" percent={100} />
        <Progress type="circle" status="exception" percent={75} />
        <Progress type="circle" status="active" percent={50} />
      </Row>
      <Row>
        <Progress type="dashboard" showPointer percent={15} />
        <Progress type="dashboard" showPointer status="success" percent={100} />
        <Progress
          type="dashboard"
          showPointer
          status="exception"
          percent={75}
        />
        <Progress type="dashboard" showPointer status="active" percent={50} />
      </Row>
      <h3 style={{ marginBottom: 20 }}>components Progress</h3>
      <Row>
        <CProgress percent={15} status="active" />
        <CProgress percent={15} status="normal" />
        <CProgress percent={100} status="success" />
        <CProgress percent={15} status="exception" />
      </Row>
      <Row>
        <CProgress type="dashboard" showPointer percent={75} />
        <CProgress type="circle" percent={75} />
        <CProgress type="circle" status="success" percent={100} />
        <CProgress type="circle" status="exception" percent={75} />
        <CProgress type="circle" status="active" percent={75} />
      </Row>
    </Content>
  );
};

export default withThemedLayout({
  title: "Progress Pro 组件",
  name: "lineProgress",
  styleCount: 2,
})(CheckBoxPage);
