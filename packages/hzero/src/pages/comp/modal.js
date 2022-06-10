import React, { useState } from "react";
import { Content } from "root/components/Page";
import Button from "../../components/Button";
import Modal from "../../components/Modal";
import Drawer from "../../components/Drawer";
import { withThemedLayout } from "../../utils/withThemedLayout";

const { confirm } = Modal;

function showConfirm() {
  confirm({
    title: "删除提示",
    content: "确定要删除该条数据？",
    okText: "确定",
    cancelText: "取消",
  });
}
const boxStyle = {
  margin: 20,
  padding: 20,
  border: "1px solid rgba(90, 94, 154, 0.2)",
  marginLeft: 0,
  borderRadius: 5,
};
const ModalPage = () => {
  const [state, setState] = useState(false);
  const [showDrawer, setShowDrawer] = useState(false);
  const showModal = () => {
    setState(true);
  };
  const handleOk = (e) => {
    console.log(e);
    setState(false);
  };

  const handleCancel = (e) => {
    console.log(e);
    setState(false);
  };
  return (
    <>
      <Content>
        <h2>基础</h2>
        <div style={boxStyle}>
          <Button type="primary" onClick={showModal}>
            Open
          </Button>
          <Modal
            title="Basic Modal"
            visible={state}
            onOk={handleOk}
            onCancel={handleCancel}
          >
            <p>Some contents...</p>
            <p>Some contents...</p>
            <p>Some contents...</p>
          </Modal>
        </div>
        <h2>确认对话框</h2>
        <div style={boxStyle}>
          <Button onClick={showConfirm}>Confirm</Button>
        </div>
        <h2>抽屉</h2>
        <div style={boxStyle}>
          <Button onClick={() => setShowDrawer(true)}>Drawer</Button>
          <Drawer
            visible={showDrawer}
            footer="test"
            onClose={() => setShowDrawer(false)}
          >
            content
          </Drawer>
        </div>
      </Content>
    </>
  );
};

export default withThemedLayout({
  title: "Modal 对话框",
  name: "modal",
  styleCount: 3,
})(ModalPage);
