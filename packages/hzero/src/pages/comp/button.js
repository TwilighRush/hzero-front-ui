import React, { useContext } from "react";
import { Form, Row, Col } from "hzero-ui";
import { ThemeContext } from "@hzero-front-ui/core";
import { Content } from "root/components/Page";
import C7nButton from "@hzero-front-ui/c7n-ui/lib/Button";
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
  const { setTheme, config } = useContext(ThemeContext);
  const handleChange = (theme, color = undefined) => {
    setTheme(theme, config, { colors: { primary: color } });
  };

  return (
    <>
      <Content>
        <h2>主题色切换</h2>
        <div style={boxStyle}>
          <C7nButton>c7n按钮</C7nButton>
          <Button onClick={() => handleChange("theme6", "#ff7200")}>
            theme6#ff7200
          </Button>
          <Button onClick={() => handleChange("theme5", "#ff7200")}>
            theme5#ff7200
          </Button>
        </div>
        <h2>基础</h2>
        <div style={boxStyle}>
          <Row>
            <Col span={3}>
              <Button type="default">次按钮</Button>
            </Col>
            <Col span={3}>
              <Button icon="plus" type="default">
                次按钮
              </Button>
            </Col>
            <Col span={3}>
              <Button type="primary">主按钮</Button>
            </Col>
            <Col span={3}>
              <Button icon="plus" type="primary">
                主按钮
              </Button>
            </Col>
            <Col span={3}>
              <Button type="danger">危险按钮</Button>
            </Col>
            <Col span={3}>
              <Button icon="warning" type="danger">
                危险按钮
              </Button>
            </Col>
            <Col span={3}>
              <Button type="dashed">虚线按钮</Button>
            </Col>
            <Col span={3}>
              <Button icon="warning" type="dashed">
                虚线按钮
              </Button>
            </Col>
          </Row>
          <Row style={{ marginTop: "10px" }}>
            <Col span={3}>
              <Button icon="search" />
            </Col>
          </Row>
        </div>
        <h2>禁用样式</h2>
        <div style={boxStyle}>
          <Row>
            <Col span={3}>
              <Button type="default" disabled>
                Default
              </Button>
            </Col>
            <Col span={3}>
              <Button icon="plus" type="default" disabled>
                Default
              </Button>
            </Col>
            <Col span={3}>
              <Button type="primary" disabled>
                Primary
              </Button>
            </Col>
            <Col span={3}>
              <Button icon="plus" type="primary" disabled>
                Primary
              </Button>
            </Col>
            <Col span={3}>
              <Button type="danger" disabled>
                Denger
              </Button>
            </Col>
            <Col span={3}>
              <Button icon="warning" type="danger" disabled>
                Denger
              </Button>
            </Col>
            <Col span={3}>
              <Button type="dashed" disabled>
                虚线按钮
              </Button>
            </Col>
            <Col span={3}>
              <Button icon="warning" type="dashed" disabled>
                虚线按钮
              </Button>
            </Col>
          </Row>
          <Row style={{ marginTop: "10px" }}>
            <Col span={3}>
              <Button icon="search" disabled />
            </Col>
          </Row>
        </div>
        <h2>按钮组</h2>
        <div style={boxStyle}>
          <Button.Group>
            <Button>按钮1</Button>
            <Button>按钮2</Button>
            <Button disabled>按钮2</Button>
          </Button.Group>
        </div>
        {/* <Row style={{ marginBottom: "20px" }}>
          <Col span={4}>
            <Badge count={100}>
              <Button icon="plus" type="default">
                Badge
              </Button>
            </Badge>
          </Col>
          <Col span={4}>
            <Button icon="plus" type="default">
              Default
            </Button>
          </Col>
          <Col span={4}>
            <Button icon="plus" type="primary">
              Primary
            </Button>
          </Col>
          <Col span={4}>
            <Button type="danger">Denger</Button>
          </Col>
          <Col span={4}>
            <Button type="dashed">Dashed</Button>
          </Col>
          <Col span={4}>
            <Button disabled type="default" icon="plus">
              Default
            </Button>
          </Col>
          <Col span={4}>
            <Button disabled type="primary" icon="plus">
              Primary
            </Button>
          </Col>
        </Row>
        <Button>
          <Icon type="sync" style={{ fontSize: 16 }} />
          恢复默认配置
        </Button>
        <Button>恢复默认配置</Button> */}
        {/* <Button.Group>
          <Button>按钮1</Button>
          <Button>按钮2</Button>
        </Button.Group> */}
        {/* <Button.Group>
          <Button>Group one</Button>
        </Button.Group> */}

        {/* <Row>
          <Button type="danger">danger</Button>
          <Button type="danger" disabled>
            danger disabled
          </Button>
        </Row> */}
        {/* <Row>
          <Button shape="circle" type="danger" icon="search" />
          <Button shape="circle-outline" type="danger" disabled />
        </Row> */}
      </Content>
    </>
  );
};

export default withThemedLayout({
  title: "Button 按钮",
  name: "button",
  styleCount: 4,
})(Form.create({})(ButtonPage));
