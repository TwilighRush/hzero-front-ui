import React, { useState } from "react";
import { Row } from "choerodon-ui";
import { Content } from "root/components/Page";
import { withThemedLayout } from "../../utils/withThemedLayout";
import Badge from "../../components/Badge";
import Button from "../../components/Button";

const boxStyle = {
  margin: 20,
  padding: 20,
  border: "1px solid rgba(90, 94, 154, 0.2)",
  marginLeft: 0,
  borderRadius: 5,
};
const headExample = {
  width: "42px",
  height: "42px",
  borderRadius: "4px",
  background: "#eee",
  display: "inline-block",
};
const AlertPage = () => {
  const [status, setStatus] = useState(undefined);
  return (
    <>
      <Content>
        <h2>State状态</h2>
        <div style={boxStyle}>
          <Row>
            <Badge dot status="success" text="启用" />
            <span style={{ marginRight: "20px" }}> </span>
            <Badge dot status="default" text="失效" />
            <span style={{ marginRight: "20px" }}> </span>
            <Badge dot status="error" text="禁用" />
          </Row>
        </div>
        <h2>徽标数</h2>
        <div style={boxStyle}>
          <Row>
            <Badge count={5} />
            <span style={{ marginRight: "20px" }}> </span>
            <Badge dot status="error" />
            <Badge count={5}>
              <div style={headExample} />
            </Badge>
            <span style={{ marginRight: "20px" }}> </span>
            <Badge count={0} showZero>
              <div style={headExample} />
            </Badge>
            <span style={{ marginRight: "20px" }}> </span>
            <Badge count={100} offset={[42, 0]}>
              <div style={headExample} />
            </Badge>
            <span style={{ marginRight: "20px" }}> </span>
            <Badge dot status="processing" offset={[42, 0]}>
              <div style={headExample} />
            </Badge>
          </Row>
        </div>
        <h2>颜色</h2>
        <Button funcType="raised" onClick={() => setStatus("success")}>
          success
        </Button>
        <Button funcType="raised" onClick={() => setStatus("processing")}>
          processing
        </Button>
        <Button funcType="raised" onClick={() => setStatus("error")}>
          error
        </Button>
        <Button funcType="raised" onClick={() => setStatus("warning")}>
          warning
        </Button>
        <Button funcType="raised" onClick={() => setStatus("default")}>
          default
        </Button>
        <div style={boxStyle}>
          <Row>
            <Badge dot color="pink" text="pink" status={status} />
            <span style={{ marginRight: "20px" }}> </span>
            <Badge dot color="magenta" text="magenta" status={status} />
            <span style={{ marginRight: "20px" }}> </span>
            <Badge dot color="red" text="red" status={status} />
            <span style={{ marginRight: "20px" }}> </span>
            <Badge dot color="volcano" text="volcano" status={status} />
            <span style={{ marginRight: "20px" }}> </span>
            <Badge dot color="orange" text="orange" status={status} />
            <span style={{ marginRight: "20px" }}> </span>
            <Badge dot color="yellow" text="yellow" status={status} />
            <span style={{ marginRight: "20px" }}> </span>
            <Badge dot color="gold" text="gold" status={status} />
            <span style={{ marginRight: "20px" }}> </span>
            <Badge dot color="cyan" text="cyan" status={status} />
          </Row>
          <Row style={{ marginTop: "10px" }}>
            <Badge dot color="lime" text="lime" status={status} />
            <span style={{ marginRight: "20px" }}> </span>
            <Badge dot color="green" text="green" status={status} />
            <span style={{ marginRight: "20px" }}> </span>
            <Badge dot color="blue" text="blue" status={status} />
            <span style={{ marginRight: "20px" }}> </span>
            <Badge dot color="geekblue" text="geekblue" status={status} />
            <span style={{ marginRight: "20px" }}> </span>
            <Badge dot color="purple" text="purple" status={status} />
            <span style={{ marginRight: "20px" }}> </span>
            <Badge dot color="dark" text="dark" status={status} />
            <span style={{ marginRight: "20px" }}> </span>
            <Badge dot color="gray" text="gray" status={status} />
          </Row>
          <Row style={{ marginTop: "20px" }}>
            <Badge count={5} color="pink" status={status}>
              <div style={headExample} />
            </Badge>
            <span style={{ marginRight: "20px" }}> </span>
            <Badge count={5} color="magenta" status={status}>
              <div style={headExample} />
            </Badge>
            <span style={{ marginRight: "20px" }}> </span>
            <Badge count={5} color="red" status={status}>
              <div style={headExample} />
            </Badge>
            <span style={{ marginRight: "20px" }}> </span>
            <Badge count={5} color="volcano" status={status}>
              <div style={headExample} />
            </Badge>
            <span style={{ marginRight: "20px" }}> </span>
            <Badge count={5} color="orange" status={status}>
              <div style={headExample} />
            </Badge>
            <span style={{ marginRight: "20px" }}> </span>
            <Badge count={5} color="yellow" status={status}>
              <div style={headExample} />
            </Badge>
            <span style={{ marginRight: "20px" }}> </span>
            <Badge count={5} color="gold" status={status}>
              <div style={headExample} />
            </Badge>
            <span style={{ marginRight: "20px" }}> </span>
            <Badge count={5} color="cyan" status={status}>
              <div style={headExample} />
            </Badge>
          </Row>
          <Row style={{ marginTop: "10px" }}>
            <Badge count={5} color="lime" status={status}>
              <div style={headExample} />
            </Badge>
            <span style={{ marginRight: "20px" }}> </span>
            <Badge count={5} color="green" status={status}>
              <div style={headExample} />
            </Badge>
            <span style={{ marginRight: "20px" }}> </span>
            <Badge count={5} color="blue" status={status}>
              <div style={headExample} />
            </Badge>
            <span style={{ marginRight: "20px" }}> </span>
            <Badge count={5} color="geekblue" status={status}>
              <div style={headExample} />
            </Badge>
            <span style={{ marginRight: "20px" }}> </span>
            <Badge count={5} color="purple" status={status}>
              <div style={headExample} />
            </Badge>
            <span style={{ marginRight: "20px" }}> </span>
            <Badge count={5} color="dark" status={status}>
              <div style={headExample} />
            </Badge>
            <span style={{ marginRight: "20px" }}> </span>
            <Badge count={5} color="gray" status={status}>
              <div style={headExample} />
            </Badge>
          </Row>
        </div>
        {/* <Badge count={5}>
            <div>点赞数</div>
          </Badge>
          <Badge count={1000}>
            <div>点赞数</div>
          </Badge>
          <Badge dot>
            <div>点赞数</div>
          </Badge> */}
        {/* <Row style={{ marginTop: 80, padding: 32 }}>
          <Badge dot status="success" text="启用" />
          <Badge dot status="error" text="禁用" />
        </Row> */}
      </Content>
    </>
  );
};

export default withThemedLayout({
  title: "Badge",
  name: "badge",
  styleCount: 2,
})(AlertPage);
