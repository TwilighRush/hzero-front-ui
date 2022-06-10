import React from "react";
import { Row, Col } from "hzero-ui";
import { Content } from "root/components/Page";
import { withThemedLayout } from "../../utils/withThemedLayout";
import notification from "../../components/Notification";
import Button from "../../components/Button";

const notificationPage = () => {
  const openNotification = (type) => {
    notification[type]({
      message: "Notification Title",
      description: `This is the content of the ${type} notification.This is the content of the ${type} notification.This is the content of the ${type} notification.`,
      placement: "topLeft",
    });
    notification.config({
      duration: null,
    });
  };
  return (
    <>
      <Content>
        <Row>
          <Col span={6}>
            <Button type="default" onClick={() => openNotification("success")}>
              success
            </Button>
          </Col>
          <Col span={6}>
            <Button type="primary" onClick={() => openNotification("info")}>
              info
            </Button>
          </Col>
          <Col span={6}>
            <Button type="dashed" onClick={() => openNotification("warning")}>
              warning
            </Button>
          </Col>
          <Col span={6}>
            <Button type="danger" onClick={() => openNotification("error")}>
              error
            </Button>
          </Col>
        </Row>
      </Content>
    </>
  );
};

export default withThemedLayout({
  title: "Notification 通知提示",
  name: "notification",
  styleCount: 3,
})(notificationPage);
