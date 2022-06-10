import React from "react";
import styled from "styled-components";
import { Row, Col } from "choerodon-ui";
import {
  // Modal as ProModal,
  ModalProvider,
  useModal,
  // TextField,
  // Switch,
  RichText,
  // Select,
  // DatePicker,
  // Button as Btn,
  // Output,
  DataSet,
} from "choerodon-ui/pro";
import { Content } from "root/components/Page";
import { withThemedLayout } from "../../utils/withThemedLayout";
import Form from "../../components/FormPro";

import ProModal from "../../components/ModalPro";
import TextField from "../../components/TextFieldPro";
import Switch from "../../components/SwitchPro";
import Select from "../../components/SelectPro";
import DatePicker from "../../components/DatePickerPro";
import Btn from "../../components/ButtonPro";
import Button from "../../components/Button";
import Output from "../../components/OutputPro";

const { Option } = Select;
const Box = styled.div`
  margin: 20px;
  padding: 20px;
  border: 1px solid rgba(90, 94, 154, 0.2);
  margin-left: 0;
  border-radius: 5px;
`;

const ProCompModaltheme5 = () => {
  const showWarningPro = () => {
    ProModal.warning({
      title: "警示提示标题",
      children: (
        <div>
          切换页面未保存的内容被丢弃，建议保存后切换。请确认是否切换页面。
        </div>
      ),
      footer: (okBtn, cancelBtn) => (
        <div>
          {cancelBtn}
          {okBtn}
        </div>
      ),
      closable: false,
      autoCenter: true,
      okFirst: false,
      contentStyle: {
        width: "3.54rem",
      },
    });
  };
  const showModalPro = () => {
    ProModal.open({
      title: "新建编码规则",
      okFirst: false,
      children: (
        <Form
          dataSet={
            new DataSet({
              autoCreate: true,
              fields: [
                {
                  name: "phone",
                  defaultValue: "15888888888",
                  type: "string",
                  label: "手机号",
                },
                {
                  name: "age",
                  defaultValue: 18,
                  type: "number",
                  label: "年龄",
                },
                {
                  name: "sex",
                  defaultValue: "F",
                  type: "string",
                  label: "性别",
                  lookupCode: "HR.EMPLOYEE_GENDER",
                },
                {
                  name: "language",
                  defaultValue: "zh-CN",
                  type: "string",
                  label: "语言",
                },
                {
                  name: "email",
                  defaultValue: "some@example.com",
                  type: "string",
                  label: "邮箱",
                },
                {
                  name: "user",
                  type: "string",
                  label: "用户",
                  defaultValue: "Jack,Rose,Hugh",
                  required: true,
                  multiple: ",",
                },
                {
                  name: "homepage",
                  defaultValue: "www.baidu.com",
                  type: "string",
                  label: "个人主页",
                },
                {
                  name: "birth",
                  defaultValue: "2018-12-26",
                  type: "date",
                  label: "生日",
                },
              ],
            })
          }
          style={{ width: "3.5rem" }}
        >
          <Output name="phone" />
          <Output name="user" />
          <Output name="sex" />
          <Output name="language" />
          <Output name="homepage" />
          <Output name="birth" />
          {/* <NumberField name="age" /> */}
          {/* <EmailField name="email" required /> */}
        </Form>
      ),
      closable: true,
      autoCenter: true,
      style: {
        width: "5.95rem",
      },
    });
  };
  const showConfirmPro = () => {
    ProModal.open({
      style: { width: "957px" },
      autoCenter: true,
      okFirst: false,
      title: "新建编码规则",
      children: (
        <Row>
          <Col span={12}>
            <Form labelAlign="left">
              <TextField label="层级" name="level" type="string" required />
              <TextField label="值" name="value" type="string" required />
              <TextField label="展示与描述" name="des" type="string" required />
            </Form>
          </Col>
          <Col span={12}>
            <Form labelAlign="left">
              <TextField label="层级" name="level2" type="string" required />
              <TextField label="值" name="value2" type="string" required />
              <TextField
                label="展示与描述"
                name="des2"
                type="string"
                required
              />
            </Form>
          </Col>
        </Row>
      ),
      footer: (okBtn, cancelBtn) => (
        <div>
          {cancelBtn}
          {okBtn}
        </div>
      ),
      closable: true,
    });
  };
  const showDrawerProS = () => {
    ProModal.open({
      title: "侧弹窗标题",
      children: (
        <Form>
          <TextField label="层级" name="level" type="string" required />
          <TextField label="值" name="value" type="string" required />
          <TextField label="展示与描述" name="des" type="string" required />
          <Switch label="启用" name="frozen" type="boolean" />
        </Form>
      ),
      drawer: true,
      okFirst: false,
      closable: true,
    });
  };

  const showDrawerProM = () => {
    const options = {
      modules: {
        toolbar: [
          ["bold", "italic", "underline", "strike"],
          ["blockquote", "code-block"],
          [{ header: 1 }, { header: 2 }],
          [{ list: "ordered" }, { list: "bullet" }],
          [{ script: "sub" }, { script: "super" }],
          [{ indent: "-1" }, { indent: "+1" }][{ direction: "rtl" }],
          [{ size: ["small", false, "large", "huge"] }],
          [{ header: [1, 2, 3, 4, 5, 6, false] }],
          [{ color: [] }, { background: [] }],
          [{ font: [] }],
          [{ align: [] }],
          ["clean"],
        ],
        imageDropAndPaste: false,
      },
    };
    ProModal.open({
      title: "新建公告",
      children: (
        <Form>
          <TextField label="层级" name="level" type="string" required />
          <TextField label="值" name="value" type="string" required />
          <TextField label="展示与描述" name="des" type="string" required />
          <RichText
            mode="editor"
            style={{ height: 200 }}
            options={options}
            toolbar="none"
          />
        </Form>
      ),
      drawer: true,
      okFirst: false,
      closable: true,
      style: {
        width: "7.16rem",
      },
    });
  };

  const showDrawerProL = () => {
    ProModal.open({
      title: "标题名称",
      children: (
        <Row>
          <Col span={12}>
            <Form>
              <TextField label="层级" name="level" type="string" required />
              <TextField label="值" name="value" type="string" required />
              <TextField label="展示与描述" name="des" type="string" required />
            </Form>
          </Col>
          <Col span={12}>
            <Form>
              <TextField label="层级" name="level2" type="string" required />
              <TextField label="值" name="value2" type="string" required />
              <TextField
                label="展示与描述"
                name="des2"
                type="string"
                required
              />
            </Form>
          </Col>
        </Row>
      ),
      drawer: true,
      okFirst: false,
      closable: true,
      style: {
        width: "9.58rem",
      },
    });
  };

  return (
    <Box>
      <Row>
        <Col>
          <Button onClick={showWarningPro}>对话框布局S</Button>
          <Button onClick={showModalPro}>对话框布局M</Button>
          <Button onClick={showConfirmPro}>对话框布局L</Button>
          <Button onClick={showDrawerProS}>侧弹布局S</Button>
          <Button onClick={showDrawerProM}>侧弹布局M</Button>
          <Button onClick={showDrawerProL}>侧弹布局L</Button>
        </Col>
      </Row>
    </Box>
  );
};

const ModalContent = () => {
  return (
    <div>
      <p>Some contents...</p>
      <p>Some contents...</p>
      <p>Some contents...</p>
    </div>
  );
};

const OpenModalButton = ({ children, drawer, autoCenter }) => {
  const Modal = useModal();
  const openModal = React.useCallback(() => {
    Modal.open({
      drawer,
      title: "Basic",
      children: <ModalContent />,
      closeOnLocationChange: false,
      mask: !drawer,
      size: "small",
      autoCenter,
    });
  }, [Modal]);

  return (
    <Button onClick={openModal} style={{ verticalAlign: "top" }}>
      {children}
    </Button>
  );
};

const TestGetContainer = () => {
  const containerRef = React.useRef();
  return (
    <div
      ref={containerRef}
      style={{ height: 300, backgroundColor: "#eee", overflow: "auto" }}
    >
      <ModalProvider getContainer={false}>
        <OpenModalButton drawer>Open Drawer</OpenModalButton>
      </ModalProvider>
      <div style={{ marginTop: 300 }}>
        <ModalProvider getContainer={() => containerRef.current}>
          <OpenModalButton autoCenter>Open autoCenter Modal</OpenModalButton>
          <OpenModalButton>Open Modal</OpenModalButton>
        </ModalProvider>
      </div>
    </div>
  );
};

const ProCompModal = () => {
  const showWarningModal = () => {
    ProModal.warning({
      title: "确认要删除采购补充协议文本吗？",
      okFirst: false,
      contentStyle: { width: 424 },
      children: <div>删除后将无法恢复，是否确定删除</div>,
      closable: false,
    });
  };
  function info() {
    ProModal.info({
      title: "This is title",
      children: "您的订单已经提交!",
    });
  }

  function success() {
    ProModal.success({ title: "title", children: "订单提交成功!" });
  }

  function error() {
    ProModal.error({ title: "title", children: "订单提交失败!" });
  }

  const showModal = () => {
    ProModal.open({
      title: "货运条款",
      style: { width: 620 },
      children: (
        <Form labelLayout="vertical" columns={2}>
          <DatePicker label="签约日期" name="data" type="string" required />
          <Select
            label="法人代表"
            name="people"
            type="string"
            required
            defaultValue="zhenyi"
          >
            <Option value="zhenyi">甄零</Option>
            <Option value="hand">汉得</Option>
          </Select>
          <Select
            label="相对方"
            name="other"
            type="string"
            required
            defaultValue="handCompany"
          >
            <Option value="handCompany">上海汉得信息技术股份有限公司</Option>
            <Option value="baiduCompany">北京百度有限公司</Option>
          </Select>
          <TextField
            label="注册地址"
            name="address"
            type="string"
            defaultValue="中国（上海）青浦区汇联路90号"
          />
        </Form>
      ),
      // okFirst: false,
      closable: true,
    });
  };
  return (
    <Box>
      <Row>
        <Col>
          <Button onClick={info}>Info</Button>
          <Button onClick={success}>Success</Button>
          <Button onClick={error}>Error</Button>
          <Button onClick={showWarningModal}>Warning</Button>
          <Button onClick={showModal}>普通提示框</Button>
        </Col>
      </Row>
    </Box>
  );
};
function warning() {
  ProModal.warning("订单信息不完整!");
}

const ModalPage = () => {
  return (
    <>
      <Content>
        <h2>modelwarnning</h2>
        <Btn onClick={warning}>Warning</Btn>

        <h2>pro</h2>
        <ProCompModal />
        <h2>新主题测试用例</h2>
        <ProCompModaltheme5 />
        <h2>测试1.5.0-alpha.28 ModalProvider.getContainer</h2>
        <TestGetContainer />
      </Content>
    </>
  );
};

export default withThemedLayout({
  title: "Modal 对话框",
  name: "modal",
  styleCount: 3,
})(ModalPage);
