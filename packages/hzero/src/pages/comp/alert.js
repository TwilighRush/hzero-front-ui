import React from "react";
import { Row, Col, Form } from "hzero-ui";
import { Content } from "root/components/Page";
import { withThemedLayout } from "../../utils/withThemedLayout";
import Alert from "../../components/Alert";

const boxStyle = {
  margin: 20,
  padding: 20,
  border: "1px solid rgba(90, 94, 154, 0.2)",
  marginLeft: 0,
  borderRadius: 5,
};
const AlertPage = () => {
  return (
    <>
      <Content>
        <h2>基本</h2>
        <div style={boxStyle}>
          <div style={{ marginBottom: 10 }}>
            <Alert
              message="你好，欢迎使用HZERO 3.0专业版，你可以根据业务场景需求添加！"
              closable
              type="info"
              showIcon
            />
          </div>
          <div style={{ marginBottom: 10 }}>
            <Alert
              message="系统错误，请稍后重试。"
              closable
              type="warning"
              showIcon
            />
          </div>
          <div style={{ marginBottom: 10 }}>
            <Alert
              message="系统错误，请稍后重试。"
              closable
              type="error"
              showIcon
            />
          </div>
          <div>
            <Alert
              message="恭喜！你所提交的信息已经审核通过，如有问题请联系客服。"
              closable
              type="success"
              showIcon
            />
          </div>
        </div>
        <h2>辅助性文字介绍</h2>
        <div style={boxStyle}>
          <Row type="flex" justify="space-between">
            <Col span={24} style={{ marginBottom: 10 }}>
              <Alert
                message="你好，欢迎使用HZERO 3.0专业版，你可以根据业务场景需求添加！"
                type="info"
                showIcon
              />
            </Col>
            <Col span={24} style={{ marginBottom: 10 }}>
              <Alert message="系统错误，请稍后重试。" type="warning" showIcon />
            </Col>
            <Col span={24} style={{ marginBottom: 10 }}>
              <Alert message="系统错误，请稍后重试。" type="error" showIcon />
            </Col>
            <Col span={24}>
              <Alert
                message="恭喜！你所提交的信息已经审核通过，如有问题请联系客服。"
                type="success"
                showIcon
              />
            </Col>
          </Row>
        </div>
        <h2>自定义关闭(查看详情样式业务实现)</h2>
        <div style={boxStyle}>
          <Row>
            <Alert
              showIcon
              message="Info Text"
              type="info"
              onClose={() => {
                window.location.href = "https://baidu.com";
              }}
              // closeText={
              //   <a
              //     type="_blank"
              //     style={{ color: "#3889FF" }}
              //     href="https://baidu.com"
              //   >
              //     查看详情
              //   </a>
              // }
              closeText="查看详情"
            />
          </Row>
        </div>
        <h2>辅助性文字介绍</h2>
        <div style={boxStyle}>
          <div>
            <Alert
              style={{ margin: "4px" }}
              message="Success Tips"
              description="Detailed description and advices about successful copywriting."
              type="success"
              showIcon
              closable
            />
            <Alert
              style={{ margin: "4px" }}
              message="Informational Notes"
              description="Additional description and informations about copywriting."
              type="info"
              showIcon
              closable
            />
            <Alert
              style={{ margin: "4px" }}
              message="Warning"
              description="This is a warning notice about copywriting."
              type="warning"
              showIcon
              closable
            />
            <Alert
              style={{ margin: "4px" }}
              message="Error"
              description="This is an error message about copywriting."
              type="error"
              showIcon
              closable
            />
          </div>
        </div>
      </Content>
    </>
  );
};

export default withThemedLayout({
  title: "Alert 警告提示",
  name: "alert",
  styleCount: 2,
})(Form.create({})(AlertPage));
