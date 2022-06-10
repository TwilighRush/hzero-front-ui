import React from "react";

import { Row, Col } from "choerodon-ui";
import { Content } from "root/components/Page";
import { withThemedLayout } from "../../utils/withThemedLayout";
import Button from "../../components/Button";
import Popconfirm from "../../components/Popconfirm";
import Popover from "../../components/Popover";

const boxStyle = {
  margin: 20,
  padding: 20,
  border: "1px solid rgba(90, 94, 154, 0.2)",
  marginLeft: 0,
  borderRadius: 5,
};

const content = (
  <div style={{ width: 400 }}>
    使用设计工具的好处在于，当这些项目材料同时呈现，能够帮助我们进行模式识别，并促进更多创新结合体的出现，这些是当资源隐藏分散在各种文件夹、笔记本和幻灯片里时难以实现的
    <div
      style={{
        marginTop: 6,
        width: "100%",
        height: 115,
        lineHeight: "115px",
        textAlign: "center",
        background: "#F2F2F2",
        border: "1px solid #E8E8E8",
        opacity: 0.4,
        fontSize: "12px",
        color: "#686868",
      }}
    >
      图片区域
    </div>
  </div>
);
const content1 = (
  <div style={{ width: 400 }}>
    使用设计工具的好处在于，当这些项目材料同时呈现，能够帮助我们进行模式识别，并促进更多创新结合体的出现，这些是当资源隐藏分散在各种文件夹、笔记本和幻灯片里时难以实现的
  </div>
);
const text = () => {
  // return <div>你确定要关闭吗？</div>;
  return (
    <div>
      <div
        style={{
          color: "#1C1C1C",
          fontWeight: "600",
          paddingBottom: "0.08rem",
        }}
      >
        删除提示
      </div>
      <div style={{ marginLeft: "-21px", color: "#686868" }}>
        确认要删除该业务对象吗？
      </div>
    </div>
  );
};
class PopconfirmPage extends React.Component {
  // state = {
  //   text: "确认要删除该条数据？",
  // };

  render() {
    // const { text } = this.state;
    return (
      <>
        <Content style={{ paddingBottom: 60 }}>
          <h2>气泡确认框</h2>
          <div style={boxStyle}>
            <Row type="flex" justify="center">
              <Col>
                <div className="demo">
                  <div style={{ textAlign: "center", whiteSpace: "nowrap" }}>
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
                  <div
                    style={{ width: 80, float: "left", textAlign: "center" }}
                  >
                    <Popconfirm
                      placement="leftTop"
                      title={text}
                      okText="确认"
                      cancelText="取消"
                    >
                      <Button>LT</Button>
                    </Popconfirm>
                    <div style={{ width: "80px", height: "10px" }} />
                    <Popconfirm
                      placement="left"
                      title={text}
                      okText="确认"
                      cancelText="取消"
                    >
                      <Button>Left</Button>
                    </Popconfirm>
                    <div style={{ width: "80px", height: "10px" }} />
                    <Popconfirm
                      placement="leftBottom"
                      title={text}
                      okText="确认"
                      cancelText="取消"
                    >
                      <Button>LB</Button>
                    </Popconfirm>
                  </div>
                  <div
                    style={{ width: 80, marginLeft: 304, textAlign: "center" }}
                  >
                    <Popconfirm
                      placement="rightTop"
                      title={text}
                      okText="确认"
                      cancelText="取消"
                    >
                      <Button>RT</Button>
                    </Popconfirm>
                    <div style={{ width: "80px", height: "10px" }} />
                    <Popconfirm
                      placement="right"
                      title={text}
                      okText="确认"
                      cancelText="取消"
                    >
                      <Button>Right</Button>
                    </Popconfirm>
                    <div style={{ width: "80px", height: "10px" }} />
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
                      clear: "both",
                      whiteSpace: "nowrap",
                      textAlign: "center",
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
          <h2>气泡卡片(新主题)</h2>
          <div style={boxStyle}>
            <Popover content={content1}>
              <Button type="primary">Hover me</Button>
            </Popover>
            <Popover content={content} title="标题">
              <Button type="primary">Hover me</Button>
            </Popover>
          </div>
          <h2>气泡卡片(合同主题)</h2>
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
