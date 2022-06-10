import React from "react";
import styled from "styled-components";
// import { Modal, Form, TextField } from "choerodon-ui/pro";
import {
  Row,
  Col,
  // Badge,
  // Input
} from "choerodon-ui";
import { Content } from "root/components/Page";
import Table from "../../components/Table";
import { withThemedLayout } from "../../utils/withThemedLayout";

import Modal from "../../components/ModalPro";
import Form from "../../components/FormPro";
import TextField from "../../components/TextFieldPro";
import Badge from "../../components/Badge";
import Input from "../../components/Input";

const { Column } = Table;

const ALink = styled.a`
  /* &:before {
    content: "\\e70f";
    font-family: iconfont-hzero-compact !important;
    margin-right: 0.08rem;
    color: transparent;
  }
  &:hover {
    &:before {
      color: #0840f8;
    }
  } */
`;

const EditableCell = ({ editable, value, onChange }) => (
  <div>
    {editable ? (
      <Input
        style={{ margin: "-5px 0" }}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    ) : (
      value
    )}
  </div>
);

// UED测试demo
class TableDemo extends React.Component {
  constructor(props) {
    super(props);
    this.ds = Array.from({ length: 3 }).map((_, i) => ({
      id: i,
      key: i,
      userid: "18982",
      name: "李丽丽",
      sex: "女",
      email: "lili.li@qq.com",
      department: "部门名称",
      account: "18982",
      username: "李丽丽",
      tenant: "Hzero平台",
      effect: "2021.05.11",
      invalid: "2021.05.11",
      mainTableName: "Hzero_hgsga_shga",
      subTableName: "Fen_biao_19",
      mainTableSize: "120",
      subTableSize: "180",
      subTableStatus: "已创建",
      path: "/hitf/v1/trace-logs/business/fail/ranking",
      method: "GET",
      code: "hzero-interface.trace-log-site-level.businessF",
      status: "已处理",
      serviceName: "hzero-interface",
    }));
    this.ds = Array.from({ length: 3 }).map((_, i) => ({
      id: i,
      key: i,
      userid: "18982",
      name: "李丽丽",
      sex: "女",
      email: "lili.li@qq.com",
      department: "部门名称",
      account: "18982",
      username: "李丽丽",
      tenant: "Hzero平台",
      effect: "2021.05.11",
      invalid: "2021.05.11",
      mainTableName: "Hzero_hgsga_shga",
      subTableName: "Fen_biao_19",
      mainTableSize: "120",
      subTableSize: "180",
      subTableStatus: "已创建",
      path: "/hitf/v1/trace-logs/business/fail/ranking",
      method: "GET",
      code: "hzero-interface.trace-log-site-level.businessF",
      status: "已处理",
      serviceName: "hzero-interface",
    }));
    this.columns = [
      {
        title: "账户",
        dataIndex: "account",
        render: (text, record) => this.renderColumns(text, record, "account"),
      },
      {
        title: "用户名",
        dataIndex: "username",
        render: (text, record) => this.renderColumns(text, record, "username"),
      },
      {
        title: "所属租户",
        dataIndex: "tenant",
        render: (text, record) => this.renderColumns(text, record, "tenant"),
      },
      {
        title: "生效时间",
        dataIndex: "effect",
        render: (text, record) => this.renderColumns(text, record, "effect"),
      },
      {
        title: "失效时间",
        dataIndex: "invalid",
        render: (text, record) => this.renderColumns(text, record, "invalid"),
      },
      {
        title: "操作",
        dataIndex: "action",
        render: (text, record) => {
          const { editable } = record;
          return (
            <div>
              {editable ? (
                <span>
                  <a onClick={() => this.save(record.key)}>保存</a>
                  <a
                    onClick={() => this.cancel(record.key)}
                    style={{ marginLeft: "10px" }}
                  >
                    取消
                  </a>
                </span>
              ) : (
                <a onClick={() => this.edit(record)}>编辑</a>
              )}
            </div>
          );
        },
      },
    ];
    this.state = {
      data: this.ds,
    };
  }

  renderColumns(text, record, column) {
    return (
      <EditableCell
        editable={record.editable}
        value={text}
        onChange={(value) => this.handleChange(value, record.key, column)}
      />
    );
  }

  handleChange(value, key, column) {
    const newData = [...this.state.data];
    const target = newData.filter((item) => key === item.key)[0];
    if (target) {
      target[column] = value;
      this.setState({ data: newData });
    }
  }

  edit(record) {
    // const newData = [...this.state.data];
    // const { key } = record;
    // const target = newData.filter((item) => key === item.key)[0];
    // if (target) {
    //   target.editable = true;
    //   this.setState({ data: newData });
    // }

    Modal.open({
      drawer: true,
      width: 600,
      children: (
        <Form>
          <TextField label="账户" defaultValue={record.account} />
          <TextField label="用户名" defaultValue={record.username} />
          <TextField label="所属租户" defaultValue={record.tenant} />
          <TextField label="生效时间" defaultValue={record.effect} />
          <TextField label="失效时间" defaultValue={record.invalid} />
        </Form>
      ),
      onOk: () => {},
      onCancel: () => {},
      afterClose: () => {},
      footer: (okBtn, cancelBtn) => (
        <div>
          {cancelBtn}
          {okBtn}
        </div>
      ),
    });
  }

  save(key) {
    const newData = [...this.state.data];
    const target = newData.filter((item) => key === item.key)[0];
    if (target) {
      delete target.editable;
      this.setState({ data: newData });
    }
  }

  cancel(key) {
    const newData = [...this.state.data];
    const target = newData.filter((item) => key === item.key)[0];
    if (target) {
      delete target.editable;
      this.setState({ data: newData });
    }
  }

  render() {
    return (
      <>
        <Row>
          <Col span={9}>
            <div
              style={{
                backgroundColor: "#9DCEFF",
                color: "#0840F8",
                textAlign: "center",
              }}
            >
              万能行
            </div>
          </Col>
          <Col span={15}>
            <div>默认展示(15栅格)</div>
            <Table dataSource={this.ds} rowKey="id">
              <Column title="员工编码" dataIndex="userid" key="userid" />
              <Column title="姓名" dataIndex="name" key="name" />
              <Column title="性别" dataIndex="sex" key="sex" />
              <Column title="邮箱" dataIndex="email" key="email" />
              <Column title="部门" dataIndex="department" key="department" />
            </Table>
          </Col>
        </Row>
        <div style={{ display: "flex" }}>
          <div
            style={{
              backgroundColor: "#9DCEFF",
              color: "#0840F8",
              textAlign: "center",
              width: "216px",
              flexShrink: 0,
            }}
          >
            万能行(固定宽度)
          </div>
          <div style={{ flex: 1 }}>
            <div>
              <div>默认展示(勾选与操作)</div>
              <Table dataSource={this.ds} rowKey="id" rowSelection={() => {}}>
                <Column title="账户" dataIndex="account" key="account" />
                <Column title="用户名" dataIndex="username" key="username" />
                <Column title="所属租户" dataIndex="tenant" key="tenant" />
                <Column title="生效时间" dataIndex="effect" key="effect" />
                <Column title="失效时间" dataIndex="invalid" key="invalid" />
                <Column
                  title="操作"
                  key="action"
                  render={(record) => (
                    <div>
                      <a onClick={() => this.edit(record)}>编辑</a>{" "}
                      <a>排除权限</a>
                    </div>
                  )}
                />
              </Table>
            </div>
            <div>
              <div>默认展示(状态)</div>
              <Table dataSource={this.ds} rowKey="id">
                <Column
                  title="主表名称"
                  dataIndex="mainTableName"
                  key="mainTableName"
                />
                <Column
                  title="分表名称"
                  dataIndex="subTableName"
                  key="subTableName"
                />
                <Column
                  title="主表数据量"
                  dataIndex="mainTableSize"
                  key="mainTableSize"
                />
                <Column
                  title="分表数据量"
                  dataIndex="subTableSize"
                  key="subTableSize"
                />
                <Column
                  title="分表创建状态"
                  dataIndex="subTableStatus"
                  key="subTableStatus"
                  render={(record) => <Badge status="success" text={record} />}
                />
              </Table>
            </div>
            <div>
              <div>默认展示(可编辑行数据)</div>
              <Table
                dataSource={this.state.data}
                columns={this.columns}
                rowKey="id"
                rowSelection={() => {}}
              />
            </div>
          </div>
        </div>
        <div>界面总宽度(可编辑行数据)</div>
        {/* <Table dataSource={this.ds} rowKey='id'>
          <Column title="员工编码" dataIndex="userid" key="userid" />
          <Column title="姓名" dataIndex="name" key="name" />
          <Column title="性别" dataIndex="sex" key="sex" />
          <Column title="邮箱" dataIndex="email" key="email" />
          <Column title="部门" dataIndex="department" key="department" />
          <Column title="操作" dataIndex="" key="x" render={() => <a>编辑</a>} />
        </Table> */}
        <Table
          dataSource={this.state.data}
          columns={this.columns}
          rowKey="id"
        />
        <div>超链接(可跳转展示)</div>
        <Table
          dataSource={this.ds}
          rowKey="id"
          rowSelection={{ type: "radio" }}
        >
          <Column
            title="API路径"
            dataIndex="path"
            key="path"
            render={(record) => <ALink href={record}>{record}</ALink>}
          />
          <Column title="请求方式" dataIndex="method" key="method" />
          <Column title="权限编码" dataIndex="code" key="code" />
          <Column
            title="处理状态"
            dataIndex="status"
            key="status"
            render={(record) => <Badge status="success" text={record} />}
          />
          <Column title="服务名称" dataIndex="serviceName" key="serviceName" />
        </Table>
      </>
    );
  }
}

const TableComponentsPage = () => {
  const columns = [
    { title: "Name", dataIndex: "name", key: "name" },
    { title: "Age", dataIndex: "age", key: "age" },
    { title: "Address", dataIndex: "address", key: "address" },
    {
      title: "Action",
      dataIndex: "",
      key: "x",
      render: () => <a href="#">Delete</a>,
    },
  ];
  const data = [
    {
      key: 1,
      name: "John Brown",
      age: 32,
      address: "New York No. 1 Lake Park",
      description:
        "My name is John Brown, I am 32 years old, living in New York No. 1 Lake Park.",
    },
    {
      key: 2,
      name: "Jim Green",
      age: 42,
      address: "London No. 1 Lake Park",
      description:
        "My name is Jim Green, I am 42 years old, living in London No. 1 Lake Park.",
    },
    {
      key: 3,
      name: "Joe Black",
      age: 32,
      address: "Sidney No. 1 Lake Park",
      description:
        "My name is Joe Black, I am 32 years old, living in Sidney No. 1 Lake Park.",
    },
  ];
  return (
    <Content>
      <TableDemo />
      <Table
        dataSource={data}
        columns={columns}
        expandedRowRender={(record) => (
          <p style={{ margin: 0 }}>{record.description}</p>
        )}
      />
    </Content>
  );
};

export default withThemedLayout({
  title: "Table 组件",
  name: "table",
  styleCount: 3,
})(TableComponentsPage);
