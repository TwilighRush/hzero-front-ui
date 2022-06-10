import React from "react";
import { Row, Col, Icon } from "choerodon-ui";
import { Content } from "root/components/Page";
import { withThemedLayout } from "../../utils/withThemedLayout";
import notification from "../../components/Notification";
import Button from "../../components/ButtonPro";

notification.config({
  foldCount: 2,
});

const notificationPage = () => {
  const openNotification = (type) => {
    notification[type]({
      message: "Notification Title",
      description: `This is the content of the ${type} notification.This is the content of the ${type} notification.This is the content of the ${type} notification.`,
      duration: null,
      placement: "topLeft",
    });
  };

  const openNotification2 = () => {
    notification.open({
      message: "Notification Title",
      description:
        "This is the content of the notification. This is the content of the notification. This is the content of the notification.",
      icon: <Icon type="delete" style={{ color: "#108ee9" }} />,
      duration: null,
    });
  };

  const openNotification3 = () => {
    notification.open({
      message: "Notification Title",
      description:
        "This is the content of the notification. This is the content of the notification. This is the content of the notification.",
    });
  };
  const openNotification4 = () => {
    const key = `open${Date.now()}`;
    const btn = [
      <Button
        funcType="flat"
        size="small"
        onClick={() => notification.close(key)}
      >
        取消
      </Button>,
      <Button
        funcType="raised"
        color="primary"
        size="small"
        onClick={() => notification.close(key)}
      >
        确认
      </Button>,
    ];
    notification.open({
      message: "Notification Title",
      description:
        "一系列的信息描述，可能会很长。也可以是很短同样也可以带标点。",
      btn,
      key,
      duration: null,
    });
  };
  const boxStyle = {
    margin: 20,
    padding: 20,
    border: "1px solid rgba(90, 94, 154, 0.2)",
    marginLeft: 0,
    borderRadius: 5,
  };
  return (
    <>
      <Content>
        <h2>基本</h2>
        <div style={boxStyle}>
          <Row>
            <Col span={6}>
              <Button onClick={() => openNotification2()}>自定义图标</Button>
              <Button type="primary" onClick={openNotification3}>
                正常显示
              </Button>
            </Col>
          </Row>
        </div>
        <h2>带有图标的通知提醒框</h2>
        <div style={boxStyle}>
          <Row>
            <Col span={6}>
              <Button
                type="default"
                onClick={() => openNotification("success")}
              >
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
        </div>
        <h2>带按钮</h2>
        <div style={boxStyle}>
          <Row>
            <Col span={6}>
              <Button type="primary" onClick={openNotification4}>
                按钮
              </Button>
            </Col>
          </Row>
        </div>
      </Content>
    </>
  );
};

export default withThemedLayout({
  title: "Notification 通知提示",
  name: "notification",
  styleCount: 3,
})(notificationPage);
