import React, { useState } from "react";
import { Row } from "choerodon-ui/pro";
import { Content } from "root/components/Page";
import { withThemedLayout } from "../../utils/withThemedLayout";
import Button from "../../components/ButtonPro";
// let currentColor;

const boxStyle = {
  margin: 20,
  padding: 20,
  border: "1px solid rgba(90, 94, 154, 0.2)",
  marginLeft: 0,
  borderRadius: 5,
};
const ButtonPage = () => {
  const [showD, setshowD] = useState(false);
  return (
    <Content>
      <h2>基本</h2>
      <div style={boxStyle}>
        <Button color="#000">默认rasled</Button>
        <Button>默认rasled</Button>
        <Button funcType="raised">线框按钮</Button>
        <Button funcType="raised" color="default">
          线框按钮
        </Button>
        <Button funcType="raised" color="primary">
          主按钮
        </Button>
        <Button funcType="raised" icon="people">
          {false}
        </Button>
        <Button funcType="flat">文字按钮</Button>
        <Button funcType="flat" color="default" icon="delete">
          文字按钮
        </Button>
        <Button funcType="flat" color="primary">
          文字主色按钮
        </Button>
        <Button funcType="flat" icon="people">
          {false}
        </Button>
        <Button funcType="link">链接按钮</Button>
      </div>
      <h2 style={{ marginBottom: 20 }}>颜色</h2>
      <Button onClick={() => setshowD(!showD)}>disabled</Button>
      <div style={boxStyle}>
        <div>
          <div style={{ margin: "20px 0" }}> 线框</div>
          <Button color="primary" disabled={showD}>
            Primary
          </Button>
          <Button color="default" disabled={showD}>
            Default
          </Button>
          <Button color="gray" disabled={showD}>
            Gray
          </Button>
          <Button color="blue" disabled={showD}>
            Blue
          </Button>
          <Button color="green" disabled={showD}>
            Green
          </Button>
          <Button color="red" disabled={showD}>
            Red
          </Button>
          <br />
          <br />
          <Button color="yellow" disabled={showD}>
            Yellow
          </Button>
          <Button color="purple" disabled={showD}>
            Purple
          </Button>
          <Button color="dark" disabled={showD}>
            Dark
          </Button>
        </div>
        <div>
          <div style={{ margin: "20px 0" }}>文字</div>
          <Button funcType="flat" color="primary" disabled={showD}>
            Primary
          </Button>
          <Button funcType="flat" color="default" disabled={showD}>
            Default
          </Button>
          <Button funcType="flat" color="gray" disabled={showD}>
            Gray
          </Button>
          <Button funcType="flat" color="blue" disabled={showD}>
            Blue
          </Button>
          <Button funcType="flat" color="green" disabled={showD}>
            Green
          </Button>
          <Button funcType="flat" color="red" disabled={showD}>
            Red
          </Button>
          <br />
          <br />
          <Button funcType="flat" color="yellow" disabled={showD}>
            Yellow
          </Button>
          <Button funcType="flat" color="purple" disabled={showD}>
            Purple
          </Button>
          <Button funcType="flat" color="dark" disabled={showD}>
            Dark
          </Button>
        </div>
        <div>
          <div style={{ margin: "20px 0" }}>链接</div>
          <Button
            funcType="flat"
            href="https://baidu.com"
            color="primary"
            disabled={showD}
          >
            Primary
          </Button>
          <Button href="https://baidu.com" color="default" disabled={showD}>
            Default
          </Button>
          <Button funcType="link" color="gray" disabled={showD}>
            Gray
          </Button>
          <Button funcType="link" color="blue" disabled={showD}>
            Blue
          </Button>
          <Button funcType="link" color="green" disabled={showD}>
            Green
          </Button>
          <Button funcType="link" color="red" disabled={showD}>
            Red
          </Button>
          <br />
          <br />
          <Button funcType="link" color="yellow" disabled={showD}>
            Yellow
          </Button>
          <Button funcType="link" color="purple" disabled={showD}>
            Purple
          </Button>
          <Button funcType="link" color="dark" disabled={showD}>
            Dark
          </Button>
        </div>
        <div style={{ margin: "20px 0" }}>图标</div>
        <Button color="primary" icon="search" disabled={showD}>
          {false}
        </Button>
        <Button color="default" icon="search" disabled={showD}>
          {false}
        </Button>
        <Button color="gray" icon="search" disabled={showD}>
          {false}
        </Button>
        <Button color="blue" icon="search" disabled={showD}>
          {false}
        </Button>
        <Button color="green" icon="search" disabled={showD}>
          {false}
        </Button>
        <Button color="red" icon="search" disabled={showD}>
          {false}
        </Button>
        <br />
        <br />
        <Button color="yellow" icon="search" disabled={showD}>
          {false}
        </Button>
        <Button color="purple" icon="search" disabled={showD}>
          {false}
        </Button>
        <Button color="dark" icon="search" disabled={showD}>
          {false}
        </Button>
      </div>
      <h2>图标按钮</h2>
      <div style={boxStyle}>
        <Row>
          <Button icon="k">{false}</Button>
          <Button icon="delete">{false}</Button>
          <Button funcType="flat" icon="filter2">
            {false}
          </Button>
          <Button funcType="link" icon="help_outline">
            {false}
          </Button>
          <Button funcType="raised" icon="baseline-arrow_drop_down">
            {false}
          </Button>
        </Row>
      </div>
      <h2 style={{ marginBottom: 20 }}>按钮大小</h2>
      <div style={boxStyle}>
        <div>
          <Button funcType="raised" icon="search" size="large" color="primary">
            大主按钮
          </Button>
          <Button funcType="raised" size="large">
            大线框按钮
          </Button>
          <Button funcType="flat" size="large">
            大文字按钮
          </Button>
          <Button funcType="flat" size="large">
            大文字按钮
          </Button>
          <Button funcType="link" href="http://example.com" size="large">
            大链接按钮
          </Button>
          <Button funcType="link" icon="search" size="large" />
        </div>
        <div style={{ marginTop: 10 }}>
          <Button funcType="raised" icon="search" color="primary">
            主按钮
          </Button>
          <Button funcType="raised">线框按钮</Button>
          <Button funcType="flat">文字按钮</Button>
          <Button funcType="flat" href="http://example.com">
            链接按钮
          </Button>
          <Button funcType="flat" icon="search" size="large" />
        </div>
        <div style={{ marginTop: 10 }}>
          <Button icon="search" size="small" color="primary">
            小主按钮
          </Button>
          <Button funcType="raised" size="small">
            小线框按钮
          </Button>
          <Button funcType="flat" size="small">
            小文字按钮
          </Button>
          <Button funcType="raised" href="http://example.com" size="small">
            小链接按钮
          </Button>
          <Button funcType="raised" icon="search" size="small" />
        </div>
      </div>
      <h2 style={{ marginBottom: 20 }}>主题5按钮</h2>
      <div style={boxStyle}>
        <Row>
          <Button color="primary">颜色主按钮</Button>
          <Button funcType="raised" color="primary" icon="add">
            新建值集
          </Button>
          <Button funcType="raised">线框按钮</Button>
          <Button funcType="raised" icon="import_export">
            角色导入
          </Button>
          <Button funcType="flat">文字按钮</Button>
          <Button funcType="flat" icon="delete">
            删除
          </Button>
          <Button funcType="flat" href="http://example.com">
            链接按钮
          </Button>
          <Button icon="save">{false}</Button>
        </Row>
      </div>
      <h2 style={{ marginBottom: 20 }}>disabled</h2>
      <div style={boxStyle}>
        <Button disabled color="primary">
          颜色主按钮
        </Button>
        <Button disabled funcType="raised" color="primary" icon="add">
          新建值集
        </Button>
        <Button disabled funcType="raised">
          线框按钮
        </Button>
        <Button disabled funcType="raised" icon="import_export">
          角色导入
        </Button>
        <Button disabled funcType="flat">
          文字按钮
        </Button>
        <Button disabled funcType="flat" icon="delete">
          删除
        </Button>
        <Button disabled href="http://example.com">
          链接按钮
        </Button>
        <Button disabled icon="save">
          {false}
        </Button>
        <Button color="red">Close</Button>
        {/* <h2>高度处理</h2> */}
      </div>
    </Content>
  );
};

export default withThemedLayout({
  title: "Button 按钮",
  name: "button",
  styleCount: 4,
})(ButtonPage);
