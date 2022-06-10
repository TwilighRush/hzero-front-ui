import React from "react";
import { Row, Col } from "hzero-ui";
import { Content } from "root/components/Page";
import { withThemedLayout } from "../../utils/withThemedLayout";
import Popconfirm from "../../components/Popconfirm";
import Button from "../../components/Button";
import Popover from "../../components/Popover";

const boxStyle = {
  margin: 20,
  padding: 20,
  border: "1px solid rgba(90, 94, 154, 0.2)",
  marginLeft: 0,
  borderRadius: 5,
};
class PopconfirmPage extends React.Component {
  state = {
    text: "确认要删除该条数据？",
  };

  render() {
    const { text } = this.state;
    return (
      <>
        <Content>
          <h2>气泡确认框</h2>
          <div style={boxStyle}>
            <Row type="flex" justify="center">
              <Col span={10} style={{ marginTop: 100 }}>
                <div className="demo">
                  <div style={{ marginLeft: 70, whiteSpace: "nowrap" }}>
                    <Popconfirm
                      placement="topLeft"
                      title={text}
                      okText="确认"
                      cancelText="取消"
                    >
                      <Button>TL</Button>
                    </Popconfirm>
                    <Popconfirm
                      placement="top"
                      title={text}
                      okText="确认"
                      cancelText="取消"
                    >
                      <Button>Top</Button>
                    </Popconfirm>
                    <Popconfirm
                      placement="topRight"
                      title={text}
                      okText="确认"
                      cancelText="取消"
                    >
                      <Button>TR</Button>
                    </Popconfirm>
                  </div>
                  <div style={{ width: 70, float: "left" }}>
                    <Popconfirm
                      placement="leftTop"
                      title={text}
                      okText="确认"
                      cancelText="取消"
                    >
                      <Button>LT</Button>
                    </Popconfirm>
                    <Popconfirm
                      placement="left"
                      title={text}
                      okText="确认"
                      cancelText="取消"
                    >
                      <Button>Left</Button>
                    </Popconfirm>
                    <Popconfirm
                      placement="leftBottom"
                      title={text}
                      okText="确认"
                      cancelText="取消"
                    >
                      <Button>LB</Button>
                    </Popconfirm>
                  </div>
                  <div style={{ width: 70, marginLeft: 304 }}>
                    <Popconfirm
                      placement="rightTop"
                      title={text}
                      okText="确认"
                      cancelText="取消"
                    >
                      <Button>RT</Button>
                    </Popconfirm>
                    <Popconfirm
                      placement="right"
                      title={text}
                      okText="确认"
                      cancelText="取消"
                    >
                      <Button>Right</Button>
                    </Popconfirm>
                    <Popconfirm
                      placement="rightBottom"
                      title={text}
                      okText="确认"
                      cancelText="取消"
                    >
                      <Button>RB</Button>
                    </Popconfirm>
                  </div>
                  <div
                    style={{
                      marginLeft: 70,
                      clear: "both",
                      whiteSpace: "nowrap",
                    }}
                  >
                    <Popconfirm
                      placement="bottomLeft"
                      title={text}
                      okText="确认"
                      cancelText="取消"
                    >
                      <Button>BL</Button>
                    </Popconfirm>
                    <Popconfirm
                      placement="bottom"
                      title={text}
                      okText="确认"
                      cancelText="取消"
                    >
                      <Button>Bottom</Button>
                    </Popconfirm>
                    <Popconfirm
                      placement="bottomRight"
                      title={text}
                      okText="确认"
                      cancelText="取消"
                    >
                      <Button>BR</Button>
                    </Popconfirm>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
          <h2>气泡卡片</h2>
          <div style={boxStyle}>
            <Row type="flex" justify="center">
              <Col>
                <div className="demo">
                  <div style={{ textAlign: "center", whiteSpace: "nowrap" }}>
                    <Popover
                      placement="topLeft"
                      content="点击/鼠标移入元素，弹出气泡式的卡片浮层。"
                      title="上左方向"
                    >
                      <Button>topLeft</Button>
                    </Popover>
                    <Popover
                      placement="top"
                      content="点击/鼠标移入元素，弹出气泡式的卡片浮层。"
                      title="上中方向"
                    >
                      <Button>Top</Button>
                    </Popover>
                    <Popover
                      placement="topRight"
                      content="点击/鼠标移入元素，弹出气泡式的卡片浮层。"
                      title="上右方向"
                    >
                      <Button>topRight</Button>
                    </Popover>
                  </div>
                  <div
                    style={{
                      width: 150,
                      margin: "10px 0",
                      float: "left",
                      textAlign: "center",
                    }}
                  >
                    <Popover
                      placement="leftTop"
                      content="点击/鼠标移入元素，弹出气泡式的卡片浮层。"
                      title="左上方向"
                    >
                      <Button>leftTop</Button>
                    </Popover>
                    <div style={{ width: "80px", height: "10px" }} />
                    <Popover
                      placement="left"
                      content="点击/鼠标移入元素，弹出气泡式的卡片浮层。"
                      title="左中方向"
                    >
                      <Button>left</Button>
                    </Popover>
                    <div style={{ width: "80px", height: "10px" }} />
                    <Popover
                      placement="leftBottom"
                      content="点击/鼠标移入元素，弹出气泡式的卡片浮层。"
                      title="左下方向"
                    >
                      <Button>leftBottom</Button>
                    </Popover>
                  </div>
                  <div
                    style={{
                      width: 150,
                      marginLeft: 404,
                      marginTop: 10,
                      marginBottom: 10,
                      textAlign: "center",
                    }}
                  >
                    <Popover
                      placement="rightTop"
                      content="点击/鼠标移入元素，弹出气泡式的卡片浮层。"
                      title="右上方向"
                    >
                      <Button>rightTop</Button>
                    </Popover>
                    <div style={{ width: "80px", height: "10px" }} />
                    <Popover
                      placement="right"
                      content="点击/鼠标移入元素，弹出气泡式的卡片浮层。"
                      title="右中方向"
                    >
                      <Button>right</Button>
                    </Popover>
                    <div style={{ width: "80px", height: "10px" }} />
                    <Popover
                      placement="rightBottom"
                      content="点击/鼠标移入元素，弹出气泡式的卡片浮层。"
                      title="右下方向"
                    >
                      <Button>rightBottom</Button>
                    </Popover>
                  </div>
                  <div
                    style={{
                      clear: "both",
                      whiteSpace: "nowrap",
                      textAlign: "center",
                    }}
                  >
                    <Popover
                      placement="bottomLeft"
                      content="点击/鼠标移入元素，弹出气泡式的卡片浮层。"
                      title="下左方向"
                    >
                      <Button>bottomLeft</Button>
                    </Popover>
                    <Popover
                      placement="bottom"
                      content="点击/鼠标移入元素，弹出气泡式的卡片浮层。"
                      title="下中方向"
                    >
                      <Button>bottom</Button>
                    </Popover>
                    <Popover
                      placement="bottomRight"
                      content="点击/鼠标移入元素，弹出气泡式的卡片浮层。"
                      title="下右方向"
                    >
                      <Button>bottomRight</Button>
                    </Popover>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </Content>
      </>
    );
  }
}

export default withThemedLayout({
  title: "Popconfirm 气泡确认框",
  name: "popconfirm",
  styleCount: 2,
})(PopconfirmPage);
