import React from "react";
import { Icon } from "choerodon-ui";
import { CodeArea, DataSet } from "choerodon-ui/pro";
import { Content } from "root/components/Page";
import { withThemedLayout } from "../../utils/withThemedLayout";
import Switch from "../../components/SwitchPro";

// 处理 codemirror 的SSR问题， 如无需SSR，请用import代替require;
import "codemirror/mode/jsx/jsx";
import "codemirror/theme/mdn-like.css";
import "codemirror/addon/fold/foldgutter.css";

const htmlText = `
import React,{ useState } from 'react';
import ReactDOM from 'react-dom';
import { TextField, Row, Col, Tooltip, Button } from 'choerodon-ui/pro';

function log(value) {
  console.log('[basic]', value);
}
const c = useState(false);
/*注释样式*/
ReactDOM.render(
  <Row gutter={10}>
    <Col span={8}>
      <TextField placeholder="请输入" onChange={log} range/>
    </Col>
    <Col span={8}>
      <TextField
        placeholder="清除按钮"
        defaultValue="点击清除"
        clearButton
        onChange={log}
      />
    </Col>
    <Col span={8}>
    <Button>按钮</Button>
    </Col>
    <Col span={8}>
      <Tooltip title="disabled">
        <TextField value="不可用" disabled />
      </Tooltip>
    </Col>
  </Row>,
  document.getElementById('container'),
);
`;
const style = { height: 250 };

const headerLightStyle = {
  height: "28px",
  background: "#F2F2F2",
  borderRadius: "2px 2px 0 0",
  lineHeight: "28px",
  paddingRight: "12px",
  textAlign: "right",
};
const headerDarkStyle = {
  height: "28px",
  background: "#1C1C1C",
  borderRadius: "2px 2px 0 0",
  lineHeight: "28px",
  paddingRight: "12px",
  textAlign: "right",
};
class CodeAreaPage extends React.Component {
  state = {
    theme: "light",
  };

  ds = new DataSet({
    autoCreate: true,
    fields: [
      {
        name: "content",
        type: "string",
        defaultValue: htmlText,
        required: true,
      },
    ],
  });

  handleThemeChange = (value) => {
    this.setState({ theme: value ? "light" : "dark" });
  };

  render() {
    return (
      <Content>
        <div style={{ width: 558 }}>
          <div
            style={
              this.state.theme === "light" ? headerLightStyle : headerDarkStyle
            }
          >
            <Switch
              onChange={this.handleThemeChange}
              unCheckedChildren={<Icon type="brightness_2" />}
              defaultChecked
            >
              <Icon type="wb_sunny-o" />
            </Switch>
          </div>
          <CodeArea
            dataSet={this.ds}
            name="content"
            options={{
              theme: this.state.theme,
              mode: "jsx",
            }}
            style={style}
          />
        </div>
      </Content>
    );
  }
}

export default withThemedLayout({
  title: "codearea 组件",
  name: "codearea",
  styleCount: 2,
})(CodeAreaPage);
