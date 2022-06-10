import React, { useState } from "react";
import { Row, Col } from "choerodon-ui";
import { Content } from "root/components/Page";
import { withThemedLayout } from "../../utils/withThemedLayout";
import Tooltip from "../../components/TooltipPro";
import ComTooltip from "../../components/Tooltip";
import Button from "../../components/Button";

const longTip =
  "提示文案提示文案提示文案提示文案提示文案提示文案提示文案提示文案提示文案提示文案提示文案提示文案提示文案提示文案提示文案提示文案";

const boxStyle = {
  margin: 20,
  padding: 20,
  border: "1px solid rgba(90, 94, 154, 0.2)",
  marginLeft: 0,
  borderRadius: 5,
};
const TooltipPage = () => {
  const [theme, setTheme] = useState("dark");
  const handleChange = (value) => {
    setTheme(value);
  };
  return (
    <>
      <Content style={{ paddingBottom: 60 }}>
        <h2>切换主题</h2>
        <div style={boxStyle}>
          <Button onClick={() => handleChange("light")}>明亮主题</Button>
          <Button onClick={() => handleChange("dark")}>黑暗主题</Button>
        </div>
        <h2>Tooltips Components</h2>
        <div style={boxStyle}>
          <h4>基础</h4>
          <Row type="flex" style={{ marginBottom: 40 }} justify="center">
            <Col span={4}>
              <ComTooltip
                placement="top"
                trigger="click"
                title={longTip}
                theme={theme}
              >
                <Button>点击提示</Button>
              </ComTooltip>
            </Col>
            <Col span={4}>
              <ComTooltip
                placement="topLeft"
                title="提示文案提示文案"
                theme={theme}
              >
                <Button>悬浮提示</Button>
              </ComTooltip>
            </Col>
            <Col span={4}>
              <ComTooltip
                placement="topRight"
                trigger="click"
                title="提示文案提示文案"
                theme={theme}
              >
                <Button>点击提示</Button>
              </ComTooltip>
            </Col>
          </Row>

          <Row type="flex" style={{ marginBottom: 40 }} justify="center">
            <Col span={4}>
              <ComTooltip
                theme={theme}
                placement="leftTop"
                trigger="click"
                title="提示文案提示文案"
              >
                <Button>点击提示</Button>
              </ComTooltip>
            </Col>

            <Col span={4}>
              <ComTooltip
                placement="left"
                trigger="click"
                title="提示文案提示文案"
                theme={theme}
              >
                <Button>点击提示</Button>
              </ComTooltip>
            </Col>

            <Col span={4}>
              <ComTooltip
                theme={theme}
                placement="leftBottom"
                trigger="click"
                title="提示文案提示文案"
              >
                <Button>点击提示</Button>
              </ComTooltip>
            </Col>
          </Row>

          <Row type="flex" style={{ marginBottom: 40 }} justify="center">
            <Col span={4}>
              <ComTooltip
                placement="rightTop"
                trigger="click"
                title="提示文案提示文案"
                theme={theme}
              >
                <Button>点击提示</Button>
              </ComTooltip>
            </Col>

            <Col span={4}>
              <ComTooltip
                placement="right"
                trigger="click"
                title="提示文案提示文案"
                theme={theme}
              >
                <Button>点击提示</Button>
              </ComTooltip>
            </Col>

            <Col span={4}>
              <ComTooltip
                placement="rightBottom"
                trigger="click"
                title="提示文案提示文案"
                theme={theme}
              >
                <Button>点击提示</Button>
              </ComTooltip>
            </Col>
          </Row>

          <Row type="flex" justify="center">
            <Col span={4}>
              <ComTooltip
                placement="bottomLeft"
                trigger="click"
                title="提示文案提示文案"
                theme={theme}
              >
                <Button>点击提示</Button>
              </ComTooltip>
            </Col>

            <Col span={4}>
              <ComTooltip
                placement="bottom"
                trigger="click"
                title="提示文案提示文案"
                theme={theme}
              >
                <Button>点击提示</Button>
              </ComTooltip>
            </Col>

            <Col span={4}>
              <ComTooltip
                placement="bottomRight"
                trigger="click"
                title="提示文案提示文案"
                theme={theme}
              >
                <Button>点击提示</Button>
              </ComTooltip>
            </Col>
          </Row>
        </div>
        <h2>Tooltips Pro</h2>
        <div style={boxStyle}>
          <h4>基础</h4>
          <Row type="flex" style={{ marginBottom: 40 }} justify="center">
            <Col span={4}>
              <Tooltip
                placement="top"
                trigger="click"
                title={longTip}
                theme={theme}
              >
                <Button>top</Button>
              </Tooltip>
            </Col>
            <Col span={4}>
              <Tooltip
                placement="topLeft"
                title="提示文案提示文案"
                theme={theme}
              >
                <Button>topLeft</Button>
              </Tooltip>
            </Col>
            <Col span={4}>
              <Tooltip
                placement="topRight"
                trigger="click"
                title="提示文案提示文案"
                theme={theme}
              >
                <Button>topRight</Button>
              </Tooltip>
            </Col>
          </Row>

          <Row type="flex" style={{ marginBottom: 40 }} justify="center">
            <Col span={4}>
              <Tooltip
                placement="leftTop"
                trigger="click"
                title="提示文案提示文案"
                theme={theme}
              >
                <Button>leftTop</Button>
              </Tooltip>
            </Col>

            <Col span={4}>
              <Tooltip
                placement="left"
                trigger="click"
                title="提示文案提示文案"
                theme={theme}
              >
                <Button>left</Button>
              </Tooltip>
            </Col>

            <Col span={4}>
              <Tooltip
                placement="leftBottom"
                trigger="click"
                title="提示文案提示文案"
                theme={theme}
              >
                <Button>leftBottom</Button>
              </Tooltip>
            </Col>
          </Row>

          <Row type="flex" style={{ marginBottom: 40 }} justify="center">
            <Col span={4}>
              <Tooltip
                placement="rightTop"
                trigger="click"
                title="提示文案提示文案"
                theme={theme}
              >
                <Button>rightTop</Button>
              </Tooltip>
            </Col>

            <Col span={4}>
              <Tooltip
                placement="right"
                trigger="click"
                title="提示文案提示文案"
                theme={theme}
              >
                <Button>right</Button>
              </Tooltip>
            </Col>

            <Col span={4}>
              <Tooltip
                placement="rightBottom"
                trigger="click"
                title="提示文案提示文案"
                theme={theme}
              >
                <Button>rightBottom</Button>
              </Tooltip>
            </Col>
          </Row>

          <Row type="flex" style={{ marginBottom: 40 }} justify="center">
            <Col span={4}>
              <Tooltip
                placement="bottomLeft"
                trigger="click"
                title="提示文案提示文案"
                theme={theme}
              >
                <Button>bottomLeft</Button>
              </Tooltip>
            </Col>

            <Col span={4}>
              <Tooltip
                placement="bottom"
                trigger="click"
                title="提示文案提示文案"
                theme={theme}
              >
                <Button>bottom</Button>
              </Tooltip>
            </Col>

            <Col span={4}>
              <Tooltip
                placement="bottomRight"
                trigger="click"
                title="提示文案提示文案"
                theme={theme}
              >
                <Button>bottomRight</Button>
              </Tooltip>
            </Col>
          </Row>
        </div>
      </Content>
    </>
  );
};

export default withThemedLayout({
  title: "Tooltip 文字提示",
  name: "tooltip",
  styleCount: 2,
})(TooltipPage);
