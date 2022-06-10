import React, { useState } from "react";
import { Row, Col } from "choerodon-ui";
import { Content } from "root/components/Page";
import { withThemedLayout } from "../../utils/withThemedLayout";
import Alert from "../../components/Alert";
import Button from "../../components/Button";

const boxStyle = {
  margin: 20,
  padding: 20,
  border: "1px solid rgba(90, 94, 154, 0.2)",
  marginLeft: 0,
  borderRadius: 5,
};
const AlertPage = () => {
  const [showIcon, setShowIcon] = useState(true);
  return (
    <>
      <Content>
        <h2>基本</h2>
        <Button funcType="raised" onClick={() => setShowIcon(true)}>
          显示图标
        </Button>
        <Button funcType="raised" onClick={() => setShowIcon(false)}>
          不显示图标
        </Button>
        <div style={boxStyle}>
          <div style={{ marginBottom: 10 }}>
            <Alert
              message="你好，欢迎使用HZERO 3.0专业版，你可以根据业务场景需求添加 ！你可以根据业务场景需求添加 ！你可以根据业务场景需求添加 ！你可以根据业务场景需求添加 ！"
              closable
              type="info"
              showIcon={showIcon}
            />
          </div>
          <div style={{ marginBottom: 10 }}>
            <Alert
              message="系统错误，请稍后重试。"
              closable
              type="warning"
              showIcon={showIcon}
            />
          </div>
          <div style={{ marginBottom: 10 }}>
            <Alert
              message="系统错误，请稍后重试。"
              closable
              type="error"
              showIcon={showIcon}
            />
          </div>
          <div>
            <Alert
              message="恭喜！你所提交的信息已经审核通过，如有问题请联系客服。"
              closable
              type="success"
              showIcon={showIcon}
            />
          </div>
        </div>
        <h2>辅助性文字介绍</h2>
        <div style={boxStyle}>
          <Row type="flex" justify="space-between">
            <Col span={24} style={{ marginBottom: 10 }}>
              <Alert
                message="你好，欢迎使用HZERO 3.0专业版，你可以根据业务场景需求添加！你好，欢迎使用HZERO 3.0专业版，你可以根据业务场景需求添加 ！你可以根据业务场景需求添加 ！你可以根据业务场景需求添加 ！你可以根据业务场景需求添加 ！"
                type="info"
                showIcon={showIcon}
              />
            </Col>
            <Col span={24} style={{ marginBottom: 10 }}>
              <Alert
                message="系统错误，请稍后重试。"
                type="warning"
                showIcon={showIcon}
              />
            </Col>
            <Col span={24} style={{ marginBottom: 10 }}>
              <Alert
                message="系统错误，请稍后重试。"
                type="error"
                showIcon={showIcon}
              />
            </Col>
            <Col span={24}>
              <Alert
                message="恭喜！你所提交的信息已经审核通过，如有问题请联系客服。"
                type="success"
                showIcon={showIcon}
              />
            </Col>
          </Row>
        </div>
        <h2>自定义关闭(查看详情样式业务实现)</h2>
        <div style={boxStyle}>
          <Row>
            <Alert
              showIcon={showIcon}
              message="Info Text你好，欢迎使用HZERO 3.0专业版，你可以根据业务场景需求添加！你好，欢迎使用HZERO 3.0专业版，你可以根据业务场景需求添加 ！你可以根据业务场景需求添加 ！你可以根据业务场景需求添加 ！你可以根据业务场景需求添加 ！"
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
              style={{ marginBottom: "4px" }}
              message="Success Tips"
              description="Detailed description and advices about successful copywriting."
              type="success"
              showIcon={showIcon}
              closable
            />
            <Alert
              style={{ marginBottom: "4px" }}
              message="Informational Notes"
              description="Additional description and informations about copywriting."
              type="info"
              showIcon={showIcon}
              closable
            />
            <Alert
              style={{ marginBottom: "4px" }}
              message="Warning"
              description="This is a warning notice about copywriting."
              type="warning"
              showIcon={showIcon}
              closable
            />
            <Alert
              style={{ marginBottom: "4px" }}
              message="Error"
              description="This is an error message about copywriting."
              type="error"
              showIcon={showIcon}
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
})(AlertPage);
