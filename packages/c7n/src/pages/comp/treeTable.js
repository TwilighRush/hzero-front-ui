import React from "react";
import { DataSet, Icon } from "choerodon-ui/pro";
import Table from "../../components/TablePro";

const { Column } = Table;

function iconRenderer({ record, text }) {
  return [
    <Icon key="icon" type={record.get("icon")} />,
    <span key="text">{text}</span>,
  ];
}

function expandedRowRenderer({ record }) {
  return (
    <div>
      功能代码：{record.get("functionCode")} 入口页面：{record.get("url")}
    </div>
  );
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
    const { mode, expandIconColumnIndex, border, expandedRender } = this.state;
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
