import React from "react";
import { Icon } from "choerodon-ui";
import { Content } from "root/components/Page";
import { withThemedLayout } from "../../utils/withThemedLayout";
import Button from "../../components/Button";

const boxStyle = {
  margin: 20,
  padding: 20,
  border: "1px solid rgba(90, 94, 154, 0.2)",
  marginLeft: 0,
  borderRadius: 5,
};
const ButtonPage = () => {
  return (
    <Content>
      <h2>按钮类型</h2>
      <h3>基础</h3>
      <div style={boxStyle}>
        <Button>默认flat</Button>
        <Button funcType="raised">线框按钮</Button>
        <Button funcType="raised" type="dashed">
          线框按钮
        </Button>
        <Button funcType="raised" type="primary">
          主按钮
        </Button>
        <Button funcType="raised" icon="people">
          {false}
        </Button>
        <Button funcType="flat">文字按钮</Button>
        <Button funcType="flat" type="type">
          文字按钮
        </Button>
        <Button funcType="flat" type="primary">
          文字主色按钮
        </Button>
        <Button funcType="flat" icon="people">
          {false}
        </Button>
        <Button
          style={{ marginRight: 10 }}
          type="primary"
          funcType="raised"
          shape="circle"
          icon="search"
        />
      </div>
      <div style={boxStyle}>
        <div>
          <Button funcType="raised" type="primary">
            主按钮
          </Button>
          <Button funcType="raised" type="primary" icon="add">
            刷新
          </Button>
          <Button funcType="raised">线框按钮</Button>
          <Button funcType="raised" icon="delete">
            线框按钮
          </Button>
          <Button funcType="flat">文字按钮</Button>
          <Button funcType="flat" icon="save">
            文字按钮
          </Button>
          <Button type="dashed">虚线按钮</Button>
          <Button href="http://example.com">链接按钮</Button>
          <Button type="danger">危险文字按钮</Button>
          <Button funcType="raised" type="danger">
            线框危险按钮
          </Button>
          <Button funcType="raised" icon="refresh" type="danger">
            {false}
          </Button>
          <Button icon="refresh" />
        </div>
        <h3>disabled</h3>
        <div>
          <Button funcType="raised" disabled type="primary">
            主按钮
          </Button>
          <Button funcType="raised" type="primary" icon="add" disabled>
            刷新
          </Button>
          <Button disabled funcType="raised">
            线框按钮
          </Button>
          <Button icon="delete" disabled funcType="raised">
            线框按钮
          </Button>
          <Button funcType="flat" disabled>
            文字按钮
          </Button>
          <Button funcType="flat" disabled icon="save">
            文字按钮
          </Button>
          <Button disabled type="dashed">
            虚框按钮
          </Button>
          <Button disabled href="http://example.com">
            链接按钮
          </Button>
          <Button type="danger" disabled>
            危险文字按钮
          </Button>
          <Button funcType="raised" type="danger" disabled>
            线框危险按钮
          </Button>
          <Button icon="refresh" type="danger" disabled>
            {false}
          </Button>
          <Button icon="refresh" disabled />
        </div>
      </div>
      <h2>按钮尺寸</h2>
      <div style={boxStyle}>
        <div>
          <Button funcType="raised" type="primary">
            主按钮
          </Button>
          <Button funcType="raised" icon="search" type="primary">
            主按钮
          </Button>
          <Button funcType="raised">线框按钮</Button>
          <Button funcType="flat">文字按钮</Button>
          <Button href="http://example.com">链接按钮</Button>
          <Button icon="search" />
          <Button icon="search" funcType="raised" />
        </div>
        <div style={{ marginTop: 10 }}>
          <Button funcType="raised" type="primary" size="large">
            主按钮
          </Button>
          <Button funcType="raised" icon="search" size="large" type="primary">
            大主按钮
          </Button>
          <Button funcType="raised" size="large">
            大线框按钮
          </Button>
          <Button funcType="dashed" size="large">
            大线框按钮
          </Button>
          <Button size="large" funcType="flat">
            文字按钮
          </Button>
          <Button size="large" href="http://example.com">
            链接按钮
          </Button>
          <Button icon="search" size="large" />
          <Button icon="search" funcType="raised" size="large" />
        </div>
        <div style={{ marginTop: 10 }}>
          <Button funcType="raised" size="small" type="primary">
            主按钮
          </Button>
          <Button funcType="raised" icon="search" size="small" type="primary">
            小主按钮
          </Button>
          <Button funcType="raised" size="small">
            小线框按钮
          </Button>
          <Button size="small" funcType="flat">
            文字按钮
          </Button>
          <Button size="small" href="http://example.com">
            链接按钮
          </Button>
          <Button icon="search" size="small" />
          <Button icon="search" funcType="raised" size="small" />
        </div>
      </div>
      {/* <h2 style={{ marginBottom: 20 }}>按钮功能 funcType</h2>
      <div style={boxStyle}>
        <Row>
          <h3>flat</h3>
          <StyledRow>
            <Button>按钮1</Button>
            <Button disabled>按钮1</Button>
            <Button type="primary">按钮1</Button>
            <Button type="primary" disabled>
              按钮1
            </Button>
          </StyledRow>
          <h3>Raised</h3>
          <StyledRow>
            <Button funcType="raised">按钮1</Button>
            <Button funcType="raised" disabled>
              按钮1
            </Button>
            <Button funcType="raised" type="primary">
              按钮1
            </Button>
            <Button funcType="raised" type="primary" disabled>
              按钮1
            </Button>
          </StyledRow>
        </Row>
      </div> */}
      {/* <h2>形状shape</h2>
      <h3>可选值为 circle 或者不设</h3>
      <div style={boxStyle}>
        <Button
          style={{ marginRight: 10 }}
          type="primary"
          funcType="raised"
          shape="circle"
          icon="search"
        />
        <Button
          style={{ marginRight: 10 }}
          type="primary"
          funcType="flat"
          shape="circle"
          icon="search"
        />
      </div> */}
      {/* <h2>图标加载中</h2>
      <h3>图标是否加载中（加载中无法点击）。</h3>
      <div style={boxStyle}>
        <App />
      </div> */}
      <h2>高度处理1</h2>
      <Button.Group size="large">
        <Button style={{ marginRight: 10 }} type="primary">
          <Icon type="keyboard_arrow_left" />
          Backward
        </Button>
        <Button style={{ marginRight: 10 }} type="primary">
          Forward
          <Icon type="keyboard_arrow_right" />
        </Button>
      </Button.Group>
    </Content>
  );
};

export default withThemedLayout({
  title: "Button 按钮",
  name: "button",
  styleCount: 4,
})(ButtonPage);
