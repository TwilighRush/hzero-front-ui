import React, { useState } from "react";
import { Icon } from "choerodon-ui";
import { Content } from "root/components/Page";
import { withThemedLayout } from "../../utils/withThemedLayout";
import Tag from "../../components/Tag";
import Input from "../../components/Input";
import Tooltip from "../../components/Tooltip";

const { CheckableTag } = Tag;
const boxStyle = {
  margin: 20,
  padding: 20,
  border: "1px solid rgba(90, 94, 154, 0.2)",
  marginLeft: 0,
  borderRadius: 5,
};
class App extends React.Component {
  state = {
    tags: ["标签", "标签1", "标签2"],
    inputVisible: false,
    inputValue: "",
  };

  handleClose = (removedTag) => {
    const tags = this.state.tags.filter((tag) => tag !== removedTag);
    this.setState({ tags });
  };

  showInput = () => {
    this.setState({ inputVisible: true }, () => this.input.focus());
  };

  handleInputChange = (e) => {
    this.setState({ inputValue: e.target.value });
  };

  handleInputConfirm = () => {
    const { state } = this;
    const { inputValue } = state;
    let { tags } = state;
    if (inputValue && tags.indexOf(inputValue) === -1) {
      tags = [...tags, inputValue];
    }
    this.setState({
      tags,
      inputVisible: false,
      inputValue: "",
    });
  };

  saveInputRef = (input) => (this.input = input);

  render() {
    const { tags, inputVisible, inputValue } = this.state;
    return (
      <div>
        {tags.map((tag, index) => {
          const isLongTag = tag.length > 20;
          const tagElem = (
            <Tag
              key={tag}
              closable={index !== 0}
              afterClose={() => this.handleClose(tag)}
            >
              {isLongTag ? `${tag.slice(0, 20)}...` : tag}
            </Tag>
          );
          return isLongTag ? (
            <Tooltip title={tag} key={tag}>
              {tagElem}
            </Tooltip>
          ) : (
            tagElem
          );
        })}
        {inputVisible && (
          <Input
            ref={this.saveInputRef}
            type="text"
            size="small"
            style={{ width: 78 }}
            value={inputValue}
            onChange={this.handleInputChange}
            onBlur={this.handleInputConfirm}
            onPressEnter={this.handleInputConfirm}
          />
        )}
        {!inputVisible && (
          <Tag
            onClick={this.showInput}
            style={{
              background: "#fff",
              color: "#0840F8",
              border: "1px dashed rgba(0,0,0,0.10)",
            }}
          >
            <Icon
              type="add"
              style={{
                marginTop: "-3px",
                marginRight: "8px",
                fontSize: "12px",
                color: "#0840F8",
              }}
            />
            新建
          </Tag>
        )}
      </div>
    );
  }
}

const TabsPage = () => {
  const [checked, setChecked] = useState(false);
  const handleChange = () => {
    setChecked(!checked);
  };
  return (
    <Content>
      <h2 style={{ marginBottom: 20 }}>基础</h2>
      <div style={boxStyle}>
        <Tag>
          {" "}
          <a href="https://github.com/choerodon/choerodon-ui">自定义</a>
        </Tag>
        <Tag closable>自定义标签</Tag>
      </div>
      <h2>可编辑标签</h2>
      <div style={boxStyle}>
        <App />
      </div>
      <h2>可选择标签</h2>
      <div style={boxStyle}>
        <CheckableTag checked={checked} onChange={handleChange}>
          可选择
        </CheckableTag>
        <CheckableTag checked>可选择</CheckableTag>
      </div>
      <h2>彩色标签</h2>
      <div style={boxStyle}>
        <Tag>根目录</Tag>

        <Tag color="orange">审批中</Tag>
        <Tag color="magenta">已拒绝</Tag>
        <Tag color="cyan">已取消</Tag>
        <Tag color="purple">全部用章</Tag>
        <Tag color="yellow">yellow</Tag>
        {/* <Tag color="cyan">钉钉</Tag>
        <Tag color="gold">邮件</Tag>

        <Tag color="blue">企业微信号</Tag>
        <Tag color="magenta">站内消息</Tag> */}
        <div style={{ marginTop: 10 }}>
          选中信息行：
          <Tag color="#11D954">green</Tag>
          <Tag color="#3889FF">blue</Tag>
          <Tag color="rgba(0,0,0,0.45)">gray</Tag>
          <Tag color="#F23A50">red</Tag>
          <Tag color="green">green</Tag>
          <Tag color="blue">blue</Tag>
          <Tag color="gray">gray</Tag>
          <Tag color="red">red</Tag>
        </div>
      </div>
      <h2>彩色标签 全</h2>
      <div style={boxStyle}>
        <h4 style={{ marginBottom: 16 }}>Presets:</h4>
        <div>
          <Tag color="pink">pink</Tag>
          <Tag color="magenta">magenta</Tag>
          <Tag color="red">red</Tag>
          <Tag color="volcano">volcano</Tag>
          <Tag color="orange">orange</Tag>
          <Tag color="yellow">yellow</Tag>
          <Tag color="gold">gold</Tag>
          <Tag color="cyan">cyan</Tag>
          <Tag color="lime">lime</Tag>
          <Tag color="green">green</Tag>
          <Tag color="blue">blue</Tag>
          <Tag color="geekblue">geekblue</Tag>
          <Tag color="purple">purple</Tag>
          <Tag color="dark">dark</Tag>
          <Tag color="gray">gray</Tag>
        </div>
        <h4 style={{ marginBottom: 16 }}>Presets inverse:</h4>
        <div>
          <Tag color="pink-inverse">pink-inverse</Tag>
          <Tag color="magenta-inverse">magenta-inverse</Tag>
          <Tag color="red-inverse">red-inverse</Tag>
          <Tag color="volcano-inverse">volcano-inverse</Tag>
          <Tag color="orange-inverse">orange-inverse</Tag>
          <Tag color="yellow-inverse">yellow-inverse</Tag>
          <Tag color="gold-inverse">gold-inverse</Tag>
          <Tag color="cyan-inverse">cyan-inverse</Tag>
          <Tag color="lime-inverse">lime-inverse</Tag>
          <Tag color="green-inverse">green-inverse</Tag>
          <Tag color="blue-inverse">blue-inverse</Tag>
          <Tag color="geekblue-inverse">geekblue-inverse</Tag>
          <Tag color="purple-inverse">purple-inverse</Tag>
          <Tag color="dark-inverse">dark-inverse</Tag>
          <Tag color="gray-inverse">gray-inverse</Tag>
        </div>
        <h4 style={{ margin: "16px 0" }}>Custom:</h4>
        <div>
          <Tag color="#f50">#f50</Tag>
          <Tag color="#2db7f5">#2db7f5</Tag>
          <Tag color="#87d068">#87d068</Tag>
          <Tag color="#108ee9">#108ee9</Tag>
        </div>
      </div>
      {/* <h2>列表状态标签</h2>
      <div style={boxStyle}>
        <div>
          常规：
          <Tag color="green">green</Tag>
          <Tag color="blue">blue</Tag>
          <Tag style={{ background: "#e9eaed", color: "#7C859B" }}>gray</Tag>
          <Tag color="red">red</Tag>
        </div>
        <div style={{ marginTop: 10 }}>
          选中信息行：
          <Tag color="#20D489">green</Tag>
          <Tag color="#1688FF">blue</Tag>
          <Tag color="#7C859B">gray</Tag>
          <Tag color="#F45063">red</Tag>
        </div>
      </div> */}
      {/* <Row>
        <Tag>自定义</Tag>
        <Tag>
          <a href="https://github.com/choerodon/choerodon-ui">Link</a>
        </Tag>
        <Tag closable>自定义标签</Tag>
        <Tag closable>Prevent Default</Tag>
      </Row>
      <Row>
        <h4 style={{ marginBottom: 16 }}>Presets:</h4>
        <div>
          <Tag color="magenta">magenta</Tag>
          <Tag color="red">red</Tag>
          <Tag color="volcano">volcano</Tag>
          <Tag color="orange">orange</Tag>
          <Tag color="gold">gold</Tag>
          <Tag color="lime">lime</Tag>
          <Tag color="green">green</Tag>
          <Tag color="cyan">cyan</Tag>
          <Tag color="blue">blue</Tag>
          <Tag color="geekblue">geekblue</Tag>
          <Tag color="purple">purple</Tag>
        </div>
        <h4 style={{ margin: "16px 0" }}>Custom:</h4>
        <div>
          <Tag color="#f50">#f50</Tag>
          <Tag color="#2db7f5">#2db7f5</Tag>
          <Tag color="#87d068">#87d068</Tag>
          <Tag color="#108ee9">#108ee9</Tag>
        </div>
        <CheckableTag checked>可选择</CheckableTag>
        <CheckableTag>可选择</CheckableTag>
        <Tag>Tag 1</Tag>
        <Tag>
          <a href="https://github.com/choerodon/choerodon-ui">Link</a>
        </Tag>
        <Tag closable>Tag 2</Tag>
        <Tag closable>Prevent Default</Tag>
      </Row> */}
    </Content>
  );
};

export default withThemedLayout({
  title: "Tag 组件",
  name: "Tag",
  styleCount: 3,
})(TabsPage);
