import React from "react";
import { Row, Col } from "choerodon-ui";
import { Content } from "root/components/Page";
import { withThemedLayout } from "../../utils/withThemedLayout";
import Statistic from "../../components/Statistic";
import Button from "../../components/Button";

const StatisticPage = () => {
  return (
    <Content>
      <Row gutter={16}>
        <Col span={12}>
          <Statistic title="Active Users" value={112893} />
        </Col>
        <Col span={12}>
          <Statistic
            title="Account Balance (CNY)"
            value={112893}
            precision={2}
          />
          <Button style={{ marginTop: 16 }} type="primary" funcType="raised">
            Recharge
          </Button>
        </Col>
      </Row>
    </Content>
  );
};
export default withThemedLayout({
  title: "StatisticPage 数值统计",
  name: "StatisticPage",
  styleCount: 3,
})(StatisticPage);
