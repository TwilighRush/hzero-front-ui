import React, { useState } from "react";
import { Icon } from "hzero-ui";
import { Content } from "root/components/Page";
import { withThemedLayout } from "../../utils/withThemedLayout";
import Tag from "../../components/Tag";
import Tooltip from "../../components/Tooltip";
import Input from "../../components/Input";

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
              border: "1px dashed rgba(0,0,0,0.15)",
              // color: "#0840F8",
            }}
          >
            <Icon
              type="plus"
              style={{
                marginTop: "-3px",
                marginRight: "8px",
                fontSize: "12px",
                // color: "#0840F8",
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
        <Tag>自定义</Tag>
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
        <Tag color="blue">新建</Tag>
        <Tag color="orange">审批中</Tag>

        <Tag color="green">已批准</Tag>
        <Tag color="magenta">已拒绝</Tag>
        <Tag color="cyan">已取消</Tag>
        <Tag color="purple">全部用章</Tag>
      </div>
    </Content>
  );
};

export default withThemedLayout({
  title: "Tag 组件",
  name: "Tag",
  styleCount: 3,
})(TabsPage);
