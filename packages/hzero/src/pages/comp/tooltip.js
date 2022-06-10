import React from "react";
import { Row, Col } from "hzero-ui";
import { Content } from "root/components/Page";
import { withThemedLayout } from "../../utils/withThemedLayout";
import Button from "../../components/Button";
import Tooltip from "../../components/Tooltip";

const text = <span>prompt text</span>;
const buttonWidth = 70;
const longTip =
  "提示文案提示文案提示文案提示文案提示文案提示文案提示文案提示文案提示文案提示文案提示文案提示文案提示文案提示文案提示文案提示文案提示文案提示文案提示文案提示文案提示文案提示文案提示文案提示文案提示文案提示文案提示文案提示文案提示文案提示文案";
const TooltipPage = () => {
  return (
    <>
      <Content style={{ paddingBottom: 60 }}>
        <h4>动效一</h4>
        <Row type="flex" style={{ marginBottom: 40 }} justify="center">
          <Col span={4}>
            <Tooltip placement="top" trigger="click" title={longTip}>
              <Button>点击提示</Button>
            </Tooltip>
          </Col>
          <Col span={4}>
            <Tooltip placement="top" title="提示文案提示文案">
              <Button>悬浮提示</Button>
            </Tooltip>
          </Col>
        </Row>
        <h4>动效二</h4>
        <Row type="flex" style={{ marginBottom: 40 }} justify="center">
          <div className="demo">
            <div
              style={{
                marginLeft: buttonWidth,
                marginRight: buttonWidth,
                whiteSpace: "nowrap",
                textAlign: "center",
              }}
            >
              <Tooltip placement="topLeft" title={text}>
                <Button>TL</Button>
              </Tooltip>
              <Tooltip placement="top" title={text}>
                <Button>Top</Button>
              </Tooltip>
              <Tooltip placement="topRight" title={text}>
                <Button>TR</Button>
              </Tooltip>
            </div>
            <div
              style={{ width: buttonWidth, float: "left", textAlign: "center" }}
            >
              <Tooltip placement="leftTop" title={text}>
                <Button>LT</Button>
              </Tooltip>
              <Tooltip placement="left" title={text}>
                <Button>Left</Button>
              </Tooltip>
              <Tooltip placement="leftBottom" title={text}>
                <Button>LB</Button>
              </Tooltip>
            </div>
            <div
              style={{
                width: buttonWidth,
                marginLeft: buttonWidth * 4 + 24,
                textAlign: "center",
              }}
            >
              <Tooltip placement="rightTop" title={text}>
                <Button>RT</Button>
              </Tooltip>
              <Tooltip placement="right" title={text}>
                <Button>Right</Button>
              </Tooltip>
              <Tooltip placement="rightBottom" title={text}>
                <Button>RB</Button>
              </Tooltip>
            </div>
            <div
              style={{
                marginLeft: buttonWidth,
                marginRight: buttonWidth,
                clear: "both",
                whiteSpace: "nowrap",
                textAlign: "center",
              }}
            >
              <Tooltip placement="bottomLeft" title={text}>
                <Button>BL</Button>
              </Tooltip>
              <Tooltip placement="bottom" title={text}>
                <Button>Bottom</Button>
              </Tooltip>
              <Tooltip placement="bottomRight" title={text}>
                <Button>BR</Button>
              </Tooltip>
            </div>
          </div>
        </Row>
      </Content>
    </>
  );
};

export default withThemedLayout({
  title: "TooltipPage 文字提示",
  name: "tooltip",
  styleCount: 2,
})(TooltipPage);
