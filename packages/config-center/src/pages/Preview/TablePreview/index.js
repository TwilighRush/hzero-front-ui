import React, { useState } from "react";
import styled from "styled-components";
import {
  Row,
  Col,
  Form,
  Input,
  Select,
  Button,
  Table,
  Icon,
  // Menu,
  // Dropdown,
  Modal,
  notification,
} from "hzero-ui";
import intl from "../../../utils/intl";
import { Content, Header } from "../../../components/Page";
import { ButtonItems } from "./index.style";
import TableAction from "../../../components/TableAction";
// import operationIcon from "../../../../assets/components/svgs/operation.svg";

const { Item } = Form;
const { Option } = Select;

const StyledRow = styled(Row)`
  .ant-form-item {
    margin-bottom: 8px;
  }
`;

const TablePreview = props => {
  const [showMore, setShowMore] = useState(false);
  const handleDelete = () => {
    // 打开Modal
    Modal.confirm({
      title: "确定删除吗？",
    });
  };
  const handlePublish = () => {
    Modal.confirm({
      title: "是否发布",
      onOk: () => notification.success({ message: "发布成功", duration: 3 }),
      onCancel: () => notification.info({ message: "取消发布", duration: 3 }),
    });
  };

  const tableActionOptions = [
    { key: "1", text: "编辑", icon: "edit", action: () => props.onNext() },
    { key: "2", text: "发布", icon: "cloud-upload", action: handlePublish },
    {
      key: "3",
      text: "删除",
      icon: "delete",
      subOptions: [
        { key: "3-1", text: "删除远端", icon: "delete", action: handleDelete },
        { key: "3-2", text: "删除本地", icon: "delete", action: handleDelete },
      ],
    },
  ];
  const tableProps = {
    dataSource: Array.from({ length: 500 }).map((v, i) => ({
      type: `系统公告${i}`,
      title: `这是标题文案这是标题文案这是标题文案这是标题文案这是标题文案这是标题文案${i}`,
      publisher: `管理员${i}`,
      status: `已发布${i}`,
      publishTime: `2019-8-15${i}`,
      action: `...${i}`,
    })),
    columns: [
      {
        title: intl.get("hzero.hzeroTheme.page.annoType").d("公告类型"),
        dataIndex: "type",
        key: "type",
      },
      {
        title: intl.get("hzero.hzeroTheme.page.annoTitle").d("公告标题"),
        dataIndex: "title",
        key: "title",
      },
      {
        title: intl.get("hzero.hzeroTheme.page.publisher").d("发布人"),
        dataIndex: "publisher",
        key: "publisher",
      },
      {
        title: intl.get("hzero.hzeroTheme.page.annoStatus").d("公告状态"),
        dataIndex: "status",
        key: "status",
      },
      {
        title: intl.get("hzero.hzeroTheme.page.publishTime").d("发布时间"),
        dataIndex: "publishTime",
        key: "publishTime",
      },
      {
        title: "操作",
        dataIndex: "action",
        render: () => <TableAction options={tableActionOptions} />,
        key: "action",
      },
    ],
    pagination: {
      pageSize: 10,
      totalCount: 500,
    },
    rowKey: record => record.type,
  };
  return (
    <>
      <Header
        title={intl.get("hzero.hzeroTheme.page.tablePreview").d("表格预览")}
        onBack={props.onBack}
        hideBackBtn
      >
        <Button onClick={props.onExit} type="primary">
          <Icon type="logout" />
          {intl.get("hzero.hzeroTheme.page.exitPreview").d("退出预览")}
        </Button>
      </Header>
      <Content>
        <StyledRow type="flex" gutter={24} align="bottom">
          <Col span={5}>
            <Item
              label={intl.get("hzero.hzeroTheme.page.annoTitle").d("公告标题")}
            >
              <Select defaultValue="1">
                <Option value="1">选项1</Option>
                <Option value="2">选项2</Option>
                <Option value="3">选项3</Option>
                <Option value="4">选项4</Option>
              </Select>
            </Item>
          </Col>
          <Col span={5}>
            <Item
              label={intl
                .get("hzero.hzeroTheme.page.companyName")
                .d("公司名称")}
            >
              {props.form.getFieldDecorator("name")(<Input />)}
            </Item>
          </Col>
          <Col span={5}>
            <Item
              label={intl.get("hzero.hzeroTheme.page.deptName").d("部门名称")}
            >
              {props.form.getFieldDecorator("dept")(<Input />)}
            </Item>
          </Col>
          <Col span={7}>
            <ButtonItems>
              <Button onClick={() => setShowMore(v => !v)}>
                {intl.get("hzero.hzeroTheme.page.more").d("更多")}
              </Button>
              <Button>
                {intl.get("hzero.hzeroTheme.page.reset").d("重置")}
              </Button>
              <Button type="primary">
                {intl.get("hzero.hzeroTheme.page.query").d("查询")}
              </Button>
            </ButtonItems>
          </Col>
        </StyledRow>
        {showMore && (
          <Row type="flex" gutter={24} align="bottom">
            <Col span={5}>
              <Item
                label={`${intl.get("hzero.hzeroTheme.page.query").d("查询")} 1`}
              >
                <Input />
              </Item>
            </Col>
            <Col span={5}>
              <Item
                label={`${intl.get("hzero.hzeroTheme.page.query").d("查询")} 2`}
              >
                <Input />
              </Item>
            </Col>
          </Row>
        )}
        <Table {...tableProps} />
      </Content>
    </>
  );
};

TablePreview.defaultProps = {
  onBack: () => {},
  onNext: () => {},
  onExit: () => {},
};

export default Form.create()(TablePreview);
