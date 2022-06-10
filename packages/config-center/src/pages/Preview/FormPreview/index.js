import React from "react";
import styled from "styled-components";
import {
  Row,
  Col,
  Form,
  Input,
  Upload,
  Icon,
  Button,
  Select,
  InputNumber,
  DatePicker,
  Slider,
  Switch,
} from "hzero-ui";
import intl from "../../../utils/intl";

import { Content, Header } from "../../../components/Page";

const { Item } = Form;
const { Option } = Select;

const { RangePicker } = DatePicker;

const selectAfter = (
  <Select defaultValue=".com" style={{ width: 80 }}>
    <Option value=".com">.com</Option>
    <Option value=".jp">.jp</Option>
    <Option value=".cn">.cn</Option>
    <Option value=".org">.org</Option>
  </Select>
);

const StyledDescTitle = styled.h3`
  font-size: 12px;
  line-height: 24px;
  color: #999;
`;

const FormPreview = props => {
  return (
    <>
      <Header
        title={intl.get("hzero.hzeroTheme.page.formPreview").d("表单预览")}
        onBack={props.onBack}
      >
        <Button onClick={props.onExit} type="primary">
          <Icon type="logout" />
          {intl.get("hzero.hzeroTheme.page.exitPreview").d("退出预览")}
        </Button>
      </Header>
      <Content style={{ zIndex: 0 }}>
        <Row gutter={16}>
          <Col span={8}>
            <Item label={intl.get("hzero.hzeroTheme.page.email").d("邮箱")}>
              <Input addonAfter={selectAfter} defaultValue={123456} />
            </Item>
          </Col>
          <Col span={8}>
            <Item
              label={intl
                .get("hzero.hzeroTheme.page.passwordInput")
                .d("密码输入框")}
              required
            >
              <Input type="password" defaultValue={123456789} />
            </Item>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col span={8}>
            <Item
              label={intl
                .get("hzero.hzeroTheme.page.numberInput")
                .d("数字输入框")}
              required
            >
              <InputNumber defaultValue={100} />
            </Item>
          </Col>
          <Col span={8}>
            <Item
              label={intl.get("hzero.hzeroTheme.page.language").d("语言")}
              required
            >
              <Select defalutValue="1"  style={{ width: 120 }}>
                <Option value="1">简体中文</Option>
                <Option value="2">English</Option>
                <Option value="3">日本语</Option>
              </Select>
            </Item>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col span={8}>
            <Item
              label={intl
                .get("hzero.hzeroTheme.page.startEndDate")
                .d("开始-结束日期")}
              required
              style={{ height: 56 }}
            >
              <RangePicker
                placeholder={["开始日期", "结束日期"]}
                style={{ width: "100%" }}
              />
            </Item>
          </Col>
          <Col span={8}>
            <Item
              label={intl
                .get("hzero.hzeroTheme.page.sliderDisplay")
                .d("滑块展示")}
              required
            >
              <Slider defaultValue={12} />
            </Item>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col span={8}>
            <Item
              label={intl.get("hzero.hzeroTheme.components.switch").d("开关")}
            >
              <Switch />
            </Item>
          </Col>
          <Col span={8}>
            <Item
              label={intl.get("hzero.hzeroTheme.components.switch").d("开关")}
            >
              <Switch />
            </Item>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col span={8}>
            <Item
              label={intl
                .get("hzero.hzeroTheme.page.uploadAppendix")
                .d("上传附件")}
            >
              <Upload>
                <Button>
                  <Icon type="upload" />
                  {intl
                    .get("hzero.hzeroTheme.page.uploadAppendix")
                    .d("上传附件")}
                </Button>
              </Upload>
            </Item>
          </Col>
          <Col span={8}>
            <Item
              label={intl
                .get("hzero.hzeroTheme.page.publishObjectType")
                .d("发布对象类别")}
            >
              <Select mode="multiple" defaultValue={["1", "2"]}>
                <Option value="1">对象类别1</Option>
                <Option value="2">对象类别2</Option>
                <Option value="3">对象累别3</Option>
                <Option value="4">对象类别4</Option>
              </Select>
            </Item>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col span={16}>
            <StyledDescTitle>
              {intl
                .get("hzero.hzeroTheme.page.descriptionMessage")
                .d("请输入描述信息")}
              ：
            </StyledDescTitle>
            <Input.TextArea
              placeholder={intl
                .get("hzero.hzeroTheme.page.descriptionMessage")
                .d("请输入描述信息")}
              rows={8}
            />
          </Col>
        </Row>
      </Content>
    </>
  );
};

FormPreview.defaultProps = {
  onBack: () => {},
  onExit: () => {},
};

export default FormPreview;
