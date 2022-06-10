import React from "react";
import { Row, Col } from "hzero-ui";
import { Content } from "root/components/Page";
import { withThemedLayout } from "../../utils/withThemedLayout";
import message from "../../components/Message";
import Form from "../../components/Form";
import Button from "../../components/Button";

const info = () => {
  message.info("这是一条询问消息，会主动消失。");
};

const success = () => {
  message.success("这是一条成功消息，会主动消失。");
};

const error = () => {
  message.error("这是一条异常消息，会主动消失。");
};
const warning = () => {
  message.warning("这是一条警告信息，会主动消失。");
};
const boxStyle = {
  margin: 20,
  padding: 20,
  border: "1px solid rgba(90, 94, 154, 0.2)",
  marginLeft: 0,
  borderRadius: 5,
};

const MessagePage = () => {
  const handleClick = (placement) => {
    message.destroy();
    message.config({
      top: 100,
      bottom: 100,
      duration: 5,
    });
    message.success(placement, undefined, undefined, placement);
  };
  return (
    <>
      <Content>
        <h2>提示位置</h2>
        <div style={boxStyle}>
          <Button
            onClick={() => {
              handleClick("topLeft");
            }}
          >
            topLeft
          </Button>
          <Button
            onClick={() => {
              handleClick("top");
            }}
          >
            top
          </Button>
          <Button
            onClick={() => {
              handleClick("topRight");
            }}
          >
            topRight
          </Button>
          <Button
            onClick={() => {
              handleClick("leftTop");
            }}
          >
            leftTop
          </Button>
          <Button
            onClick={() => {
              handleClick("left");
            }}
          >
            left
          </Button>
          <Button
            onClick={() => {
              handleClick("leftBottom");
            }}
          >
            leftBottom
          </Button>
          <div style={{ marginTop: "10px" }} />
          <Button
            onClick={() => {
              handleClick("rightTop");
            }}
          >
            rightTop
          </Button>
          <Button
            onClick={() => {
              handleClick("right");
            }}
          >
            right
          </Button>
          <Button
            onClick={() => {
              handleClick("rightBottom");
            }}
          >
            rightBottom
          </Button>
          <Button
            onClick={() => {
              handleClick("bottomLeft");
            }}
          >
            bottomLeft
          </Button>
          <Button
            onClick={() => {
              handleClick("bottom");
            }}
          >
            bottom
          </Button>
          <Button
            onClick={() => {
              handleClick("bottomRight");
            }}
          >
            bottomRight
          </Button>
        </div>
        <h2>提示类型</h2>
        <div style={boxStyle}>
          <Row type="flex" justify="space-between">
            <Col span={6}>
              <Button type="primary" onClick={info}>
                info提示
              </Button>
            </Col>
            <Col span={6}>
              <Button type="primary" onClick={success}>
                success成功
              </Button>
            </Col>
            <Col span={6}>
              <Button type="primary" onClick={error}>
                error失败
              </Button>
            </Col>
            <Col span={6}>
              <Button type="primary" onClick={warning}>
                warning警告
              </Button>
            </Col>
          </Row>
        </div>
      </Content>
    </>
  );
};

export default withThemedLayout({
  title: "Message 全局提示",
  name: "message",
  styleCount: 2,
})(Form.create({})(MessagePage));
