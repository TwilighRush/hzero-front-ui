import React from "react";
import { DataSet, Icon } from "choerodon-ui/pro";
import Table from "../../components/TablePro";

const { Column } = Table;
const LineTable = () => {
  const common = {
    primaryKey: "id",
    // name: "user",
    autoQuery: false,
    selection: false,
    fields: [
      { name: "userid", type: "string", label: "员工编号" },
      { name: "name", type: "string", label: "姓名" },
      { name: "sex", type: "string", label: "性别" },
      { name: "email", type: "string", label: "邮箱" },
      { name: "department", type: "string", label: "部门" },

      { name: "account", type: "number", label: "账户" },
      { name: "username", type: "string", label: "用户名" },
      { name: "tenant", type: "string", label: "所属租户" },
      { name: "effect", type: "date", label: "生效时间" },
      { name: "invalid", type: "date", label: "失效时间" },
      { name: "enable", type: "boolean", label: "是否开启" },

      { name: "mainTableName", type: "string", label: "主表名称" },
      { name: "subTableName", type: "string", label: "分表名称" },
      { name: "mainTableSize", type: "string", label: "主表数据量" },
      { name: "subTableSize", type: "string", label: "分表数据量" },
      { name: "subTableStatus", type: "string", label: "分表创建状态" },

      { name: "path", type: "string", label: "API路径" },
      { name: "method", type: "string", label: "请求方式" },
      { name: "code", type: "string", label: "权限编码" },
      { name: "status", type: "string", label: "处理状态" },
      { name: "serviceName", type: "string", label: "服务名称" },
    ],
    data: Array.from({ length: 9 }).map((_, i) => ({
      id: i,
      parentId: i > 4 ? 1 : null,
      userid: 18982,
      name: "李丽丽",
      sex: "女",
      email: "lili.li@qq.com",
      department: "部门名称",
      account: "18982",
      username: "李丽丽",
      tenant: "Hzero平台",
      effect: "2021.05.11",
      invalid: "2021.05.11",
      enable: false,
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
    })),
  };
  const ds = new DataSet(common);
  return (
    <Table
      dataSet={ds}
      customizable
      pagination={false}
      customizedCode="pre-customized-p"
    >
      <Column name="userid" />
      <Column name="name" />
      <Column name="sex" />
      <Column name="email" />
      <Column name="tenant" />
      <Column name="department" />
    </Table>
  );
};
function iconRenderer({ record, text }) {
  return [
    <Icon key="icon" type={record.get("icon")} />,
    <span key="text">{text}</span>,
  ];
}

function expandedRowRenderer() {
  return <LineTable />;
}
class App extends React.Component {
  ds = new DataSet({
    primaryKey: "id",
    queryUrl: "/tree.mock",
    submitUrl: "/tree.mock",
    autoQuery: true,
    parentField: "parentId",
    idField: "id",
    // checkField: 'ischecked',
    fields: [
      { name: "id", type: "number" },
      { name: "text", type: "string", label: "功能名称" },
      { name: "url", type: "string", label: "入口页面" },
      { name: "expand", type: "boolean", label: "是否展开" },
      { name: "ischecked", type: "boolean", label: "是否开启" },
      { name: "score", type: "number", order: "asc" },
      { name: "parentId", type: "number", parentFieldName: "id" },
    ],
    events: {
      indexchange: ({ current }) => console.log("current user", current),
      submit: ({ data }) => console.log("submit tree data", data),
    },
  });

  state = {
    expandIconColumnIndex: 0,
    border: false,
    mode: "tree",
    expandedRender: true,
    checkFieldAsColumn: true,
    selectionMode: "rowbox",
  };


  handleCreateChild = () => {
    this.ds.create({ parentId: this.ds.current.get("id") });
  };

  handleChangeExpandRender = () =>
    this.setState({ expandedRender: !this.state.expandedRender });

  handleChangeExpandIconIndex = () =>
    this.setState((prevState) => ({
      expandIconColumnIndex:
        prevState.expandIconColumnIndex > 2
          ? 0
          : prevState.expandIconColumnIndex + 1,
    }));

  handleChangeBorder = () => this.setState({ border: !this.state.border });

  handleChangeMode = () =>
    this.setState((prevState) => ({
      mode: prevState.mode === "tree" ? "list" : "tree",
    }));

  handleChangeCheckFieldAsColumn = () =>
    this.setState((prevState) => ({
      checkFieldAsColumn: !prevState.checkFieldAsColumn,
    }));

  handleChangeSelectionMode = () =>
    this.setState((prevState) => ({
      selectionMode:
        prevState.selectionMode === "rowbox" ? "treebox" : "rowbox",
    }));

  render() {
    const {
      mode,
      expandIconColumnIndex,
      border,
      expandedRender,
    } = this.state;
    return (
      <div>
        <Table
          mode={mode}
          expandIcon={<Icon type="add" />}
          dataSet={this.ds}
          expandIconColumnIndex={expandIconColumnIndex}
          border={border}
          expandedRowRenderer={expandedRender && expandedRowRenderer}
          selectedHighLightRow
          selectionMode="none"
        >
          <Column name="text" renderer={iconRenderer} width={250} />
          <Column name="url" />
          <Column header="权限设置" width={150} align="center" />
        </Table>
      </div>
    );
  }
}

export default App;
