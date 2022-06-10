/* eslint-disable */
import React from "react";
import {
  DataSet,
  // Modal,
  // Button,
  // Form,
  // TextField,
  // Switch,
  // Dropdown,
  // Menu,
  // CheckBox,
  // Select,
} from "choerodon-ui/pro";
import {
  Row,
  // Badge, Tag,
  configure,
} from "choerodon-ui";
import { withThemedLayout } from "../../utils/withThemedLayout";
import { Content } from "root/components/Page";
import Table from "../../components/TablePro";
import mock from "./_mock";
import TreeTable from "./treeTable";
import TreeTable1 from "./treeTable1";

import Badge from "../../components/Badge";
import Tag from "../../components/Tag";
import Modal from "../../components/ModalPro";
import Button from "../../components/ButtonPro";
import Form from "../../components/FormPro";
import TextField from "../../components/TextFieldPro";
import Switch from "../../components/SwitchPro";
import Dropdown from "../../components/DropdownPro";
import Menu from "../../components/MenuPro";
import CheckBox from "../../components/CheckBoxPro";
import Select from "../../components/SelectPro";

const { Column } = Table;
const { Option } = Select;
mock();
configure({
  xlsx: () => import("xlsx"),
});

let needLoadFlag = true;
const rowCombineArr = [];

const transformData = (CombRowDs) => {
  const data = CombRowDs.toData();
  let currentName = null;
  let repeatNum = 0;
  let repeatStart = 0;

  for (let i = 0; i < data.length; i++) {
    const record = data[i];
    // 根据name进行合并
    const { name } = record;
    if (currentName === null) {
      currentName = name;
      repeatNum = 1;
      repeatStart = i;
      rowCombineArr[repeatStart] = 1;
    } else if (currentName === name) {
      rowCombineArr[i] = 0;
      repeatNum++;
    } else {
      currentName = null;
      rowCombineArr[repeatStart] = repeatNum;
      repeatNum = 0;
      i--;
    }
    if (i === data.length - 1) {
      rowCombineArr[repeatStart] = repeatNum;
    }
  }
  CombRowDs.loadData(data);
};

const CombRowDataSet = {
  fields: [
    {
      name: "name",
      type: "string",
      label: "name",
    },
    {
      name: "task",
      type: "string",
      label: "task",
    },
  ],
  events: {
    load: ({ dataSet }) => {
      if (dataSet.records.length === 0) return;
      if (needLoadFlag) {
        needLoadFlag = false;
        transformData(dataSet);
      } else {
        needLoadFlag = true;
      }
    },
  },
};

const CombRowDs = new DataSet(CombRowDataSet);

const columns = [
  {
    label: "姓名",
    name: "name",
    onCell({ record }) {
      const { index } = record;
      const rowSpan = rowCombineArr[index];
      return {
        rowSpan,
        hidden: rowSpan === 0,
      };
    },
  },
  {
    label: "任务",
    name: "task",
  },
];

const menu = (
  <Menu>
    <Menu.Item>操作一</Menu.Item>
    <Menu.Item>操作二</Menu.Item>
    <Menu.Item>操作三</Menu.Item>
    <Menu.Item>操作四</Menu.Item>
  </Menu>
);

// UED测试demo
class TableDemo extends React.Component {
  // 组合行
  componentDidMount() {
    CombRowDs.loadData([
      {
        name: "彭霞",
        task: "任务1",
      },
      {
        name: "彭霞",
        task: "任务2",
      },
      {
        name: "彭霞",
        task: "任务3",
      },
      {
        name: "彩霞",
        task: "任务3",
      },
      {
        name: "彩霞",
        task: "任务4",
      },
      {
        name: "彩霞",
        task: "任务5",
      },
    ]);
  }
  // 组合列
  colDs = new DataSet({
    primaryKey: "userid",
    queryUrl: "/dataset/user/queries",
    autoQuery: true,
    pageSize: 5,
    queryFields: [
      { name: "name", type: "string", label: "姓名" },
      { name: "age", type: "number", label: "年龄" },
      { name: "code", type: "object", label: "代码描述", lovCode: "LOV_CODE" },
      {
        name: "sex",
        type: "string",
        label: "性别",
        lookupCode: "HR.EMPLOYEE_GENDER",
      },
      { name: "date.startDate", type: "date", label: "开始日期" },
      {
        name: "sexMultiple",
        type: "string",
        label: "性别（多值）",
        lookupCode: "HR.EMPLOYEE_GENDER",
        multiple: true,
      },
    ],
    fields: [
      { name: "userid", type: "string", label: "编号", required: true },
      { name: "name", type: "string", label: "姓名" },
      { name: "age", type: "number", label: "年龄", max: 100, step: 1 },
      {
        name: "sex",
        type: "string",
        label: "性别",
        lookupCode: "HR.EMPLOYEE_GENDER",
      },
      {
        name: "date.startDate",
        type: "date",
        label: "开始日期",
        defaultValue: new Date(),
      },
      {
        name: "sexMultiple",
        type: "string",
        label: "性别（多值）",
        lookupCode: "HR.EMPLOYEE_GENDER",
        multiple: true,
      },
    ],
  });
  expandedRowRenderer() {
    return "---";
  }
  state = { editable: false, border: true, resizable: true };
  common = {
    primaryKey: "id",
    // name: "user",
    autoQuery: false,
    selection: false,
    fields: [
      { name: "userid", type: "string", label: "员工编号" },
      { name: "name", type: "intel", label: "姓名" },
      { name: "sex", type: "string", label: "性别", multiple: true },
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
      { name: "tags", type: "array", label: "标签" },
      {
        name: "code_string",
        type: "object",
        lovQueryUrl:
          "https://www.fastmock.site/mock/423302b318dd24f1712751d9bfc1cbbc/mock/lov",
        lovCode: "LOV_CODE",
        label: "Lov测试",
      },
    ],
    data: Array.from({ length: 9 }).map((_, i) => ({
      id: i,
      parentId: i > 4 ? 1 : null,
      userid: 18982,
      name: "李丽丽",
      sex: ["女", "男"],
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
      tags: ["tabs1", "tabs2", "tabs3"],
    })),
  };
  common1 = {
    primaryKey: "id",
    // name: "user",
    autoQuery: false,
    selection: "single",
    fields: [
      { name: "userid", type: "string", label: "员工编号" },
      { name: "name", type: "string", label: "姓名" },
      { name: "sex", type: "string", label: "性别" },
      { name: "email", type: "string", label: "邮箱" },
      { name: "department", type: "string", label: "部门" },
      { name: "account", type: "string", label: "账户" },
      { name: "username", type: "string", label: "用户名" },
      { name: "tenant", type: "string", label: "所属租户" },
      { name: "effect", type: "string", label: "生效时间" },
      { name: "invalid", type: "string", label: "失效时间" },
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
      { name: "tags", type: "string", label: "标签" },
    ],
    data: Array.from({ length: 4 }).map((_, i) => ({
      id: i,
      userid: "18982",
      name: "李丽丽",
      sex: "男",
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
      tags: ["tabs1", "tabs2", "tabs3"],
    })),
  };
  common3 = {
    primaryKey: "id",
    autoQuery: false,
    selection: false,
    fields: [
      { name: "billStatus", type: "string" /* label: "账单状态" */ },
      { name: "billId", type: "string" /*label: "账单编号"*/ },
      { name: "gatherStatus", type: "string" /*label: "汇总状态"*/ },
      { name: "gatherId", type: "string" /*label: "汇总编号"*/ },
      { name: "company", type: "string", label: "签约公司:" },
      { name: "customer", type: "string", label: "客户名称:" },
      { name: "currency", type: "string", label: "币种:" },
      { name: "rmb", type: "number", label: "本币金额:" },
      { name: "foreignCurrency", type: "number", label: "外币金额:" },
      { name: "pattern", type: "string", label: "结算:" },
      { name: "cycle", type: "string", label: "周期:" },
    ],
    queryFields: [
      {
        name: "name",
        label: "姓名",
        type: "string",
        multiple: true,
      },
      {
        name: "name1",
        label: "姓名1",
        type: "string",
        multiple: false,
      },
      {
        name: "age",
        label: "年龄",
        type: "number",
        multiple: true,
      },
      {
        name: "code",
        label: "code",
        type: "object",
        lovCode: "LOV_CODE",
        multiple: false,
        lovQueryUrl: "/dataset/common/lov/dataset/LOV_CODE",
      },
      {
        name: "code1",
        label: "code1",
        type: "object",
        lovCode: "LOV_CODE",
        multiple: false,
        lovQueryUrl: "/dataset/common/lov/dataset/LOV_CODE",
      },
      {
        name: "date",
        label: "date",
        type: "date",
        multiple: true,
      },
      {
        name: "date1",
        label: "date1",
        type: "date",
      },
      {
        name: "color1",
        label: "color1",
        type: "color",
        multiple: true,
      },
      {
        name: "color2",
        label: "color2",
        type: "color",
        multiple: false,
      },
      {
        name: "sex",
        label: "sex",
        type: "string",
        lookupCode: "HR.EMPLOYEE_GENDER",
        multiple: true,
      },
    ],
    data: Array.from({ length: 4 }).map((_, i) => ({
      id: i,
      billStatus: ["应收", "未付款", "审核通过"],
      billId: "Hand2020101",
      gatherStatus: ["已汇总"],
      gatherId: "ARREC2021052100000",
      company: "上海汉得信息技术股份有限公司",
      customer: "优衣库",
      currency: "人名币",
      rmb: 900,
      foreignCurrency: 500,
      pattern: "后结",
      cycle: "月结",
    })),
  };
  queryFields = [
    { name: "userid", type: "number", label: "员工编号" },
    { name: "name", type: "intl", label: "姓名" },
    { name: "sex", type: "string", label: "性别" },
    { name: "tenant", type: "string", label: "租户" },
    { name: "email", type: "string", label: "邮箱" },
    { name: "department", type: "string", label: "部门" },
    { name: "effect", type: "date", label: "生效时间" },
    {
      name: "code_string",
      type: "object",
      lovQueryUrl:
        "https://www.fastmock.site/mock/423302b318dd24f1712751d9bfc1cbbc/mock/lov",
      lovCode: "LOV_CODE",
      label: "Lov测试",
    },
  ];
  ds1 = new DataSet(this.common3);
  ds = new DataSet(this.common);
  dsx = new DataSet(this.common1);
  dsxx = new DataSet({
    ...this.common,
    parentField: "parentId",
  });
  multipleDs = new DataSet({
    ...this.common,
    selection: "multiple",
  });
  queryDs = new DataSet({
    ...this.common,
    selection: "multiple",
    queryFields: this.queryFields,
  });
  exportDs = new DataSet({
    primaryKey: "userid",
    dataKey: "rows",
    exportMode: "client",
    transport: {
      read: () => {
        return {
          url:
            "https://www.fastmock.site/mock/423302b318dd24f1712751d9bfc1cbbc/mock/user",
        };
      },
      exports: {
        url:
          "http://gitee.com/xurime/excelize/raw/master/test/SharedStrings.xlsx",
        method: "get",
      },
    },
    autoQuery: true,
    pageSize: 50,
    fields: [
      {
        name: "userid",
        type: "string",
        label: "编号",
        required: true,
      },
      {
        name: "name",
        type: "intl",
        label: "姓名",
      },
      {
        name: "age",
        type: "number",
        label: "年龄",
        max: 100,
        step: 1,
      },
      {
        name: "sex",
        type: "string",
        label: "性别",
        lookupCode: "HR.EMPLOYEE_GENDER",
        required: true,
      },
      { name: "enable", type: "boolean", label: "是否开启" },
    ],
    events: {
      query: (props) => {
        console.log(props);
      },
    },
  });
  exportTableColumns = [
    { name: "userid", lock: true, width: 200 },
    { name: "name", width: 500 },
    { name: "age", width: 500 },
    { name: "sex", width: 200 },
    { name: "enable", lock: "right", width: 200 },
  ];
  /**
   * 行内操作按钮组
   */
  commands = ({ record }) => {
    return [
      <span>
        <a style={{ marginRight: 16 }} onClick={() => this.handleEdit(record)}>
          编辑
        </a>
        <a>排除权限</a>
      </span>,
    ];
  };
  commands1 = ({ record }) => {
    return [
      <span>
        <a style={{ marginRight: 16 }} onClick={() => this.handleEdit(record)}>
          编辑
        </a>
      </span>,
    ];
  };
  moreCommands = ({ record }) => {
    return [
      record.get("id") > 2 ? (
        <div style={{ textAlign: "left", color: "#0840F8" }}>
          <Dropdown overlay={menu} trigger="hover">
            <span
              className="compacticon icon-a-more-level1x"
              style={{ fontSize: 16 }}
            ></span>
          </Dropdown>
        </div>
      ) : (
        <div style={{ textAlign: "left", color: "#0840F8" }}>
          {record.get("id") > -1 && <a style={{ marginRight: 16 }}>操作一</a>}
          {record.get("id") > 0 && <a style={{ marginRight: 16 }}>操作二</a>}
          {record.get("id") > 1 && <a>操作三</a>}
        </div>
      ),
    ];
  };

  // 单条编辑
  handleEdit = (record) => {
    Modal.open({
      drawer: true,
      width: 600,
      children: (
        <Form record={record}>
          <TextField name="username" />
          <TextField name="tenant" />
          <TextField name="effect" />
          <TextField name="invalid" />
          <Switch name="enable" />
        </Form>
      ),
      onOk: () => this.multipleDs.submit(),
      onCancel: () => {},
      afterClose: () => {},
      footer: (okBtn, cancelBtn) => (
        <div>
          {cancelBtn}
          {okBtn}
        </div>
      ),
    });
  };

  // 批量编辑
  handleBatchEdit = () => {
    this.multipleDs.selected.map((record) => {
      record.setState("editing", true);
    });
    this.setState({ editable: true });
  };

  // 保存
  handleSave = () => {
    this.multipleDs.selected.map((record) => {
      record.setState("editing", false);
    });
    this.setState({ editable: false });
  };

  render() {
    const { editable, border, resizable, footer } = this.state;
    const buttons = [
      !editable && (
        <Button funcType="link" icon="mode_edit" onClick={this.handleBatchEdit}>
          批量编辑
        </Button>
      ),
      editable && (
        <Button funcType="link" icon="save" onClick={this.handleSave}>
          保存
        </Button>
      ),
      editable && (
        <Button funcType="link" icon="close" onClick={this.handleSave}>
          取消
        </Button>
      ),
    ];
    const colButtons = [
      <CheckBox
        key="border"
        checked={border}
        onChange={() => this.setState({ border: !border })}
        label="边框"
        labelLayout="float"
      />,
      <CheckBox
        ket="resizable"
        checked={resizable}
        onChange={() => this.setState({ resizable: !resizable })}
        label="可调整列宽"
        labelLayout="float"
      />,
      <CheckBox
        key="footer"
        checked={footer}
        onChange={() => this.setState({ footer: !footer })}
        label="表脚"
        labelLayout="float"
      />,
    ];
    const buttons1 = ["add", "save", "delete", "reset"];
    return (
      <Content>
        <Row>
          <div>聚合视图</div>
          <Table
            queryBar="bar"
            dataSet={this.ds1}
            customizable
            columnDraggable
            columnTitleEditable
            customizedCode="aggregation"
            key="user"
            buttons={buttons1}
            buttonsLimit={2}
            aggregation={true}
            virtualCell
          >
            <Column
              header="账单信息"
              aggregation
              key="billMessage"
              align="left"
            >
              <Column
                name="billStatus"
                renderer={({ record }) => {
                  return (
                    <div>
                      {record.data.billStatus.map((item) => {
                        return (
                          <Tag
                            color={
                              item === "应收"
                                ? "#3889FF"
                                : item === "未付款"
                                ? "#BFBFBF"
                                : "green"
                            }
                          >
                            {item}
                          </Tag>
                        );
                      })}
                    </div>
                  );
                }}
              />
              <Column
                name="billId"
                renderer={({ record }) => {
                  return (
                    <div style={{ color: "#0840F8" }}>{record.data.billId}</div>
                  );
                }}
              />
            </Column>
            <Column
              header="汇总信息"
              aggregation
              key="gatherMessage"
              align="left"
            >
              <Column
                name="gatherStatus"
                renderer={({ record }) => {
                  return (
                    <div>
                      {record.data.gatherStatus.map((item) => {
                        return <Tag color="cyan">{item}</Tag>;
                      })}
                    </div>
                  );
                }}
              />
              <Column name="gatherId" />
            </Column>
            <Column
              header="合作信息"
              aggregation
              key="cooperationMessage"
              align="left"
            >
              <Column name="company" />
              <Column name="customer" />
            </Column>
            <Column
              header="财务"
              aggregation
              key="financeMessage"
              align="left"
              width="100"
            >
              <Column name="currency" />
              <Column name="rmb" />
              <Column name="foreignCurrency" />
            </Column>
            <Column
              header="结算"
              aggregation
              width="100"
              key="settlementMessage"
              align="left"
            >
              <Column name="pattern" />
              <Column name="cycle" />
            </Column>
            <Column
              header="操作"
              lock="right"
              width={100}
              minWidth={100}
              align="left"
              command={({ record }) => ["edit", "delete", "add"]}
              // command={this.commands1}
            />
          </Table>

          <div>基本(可拖拽)</div>
          <Table
            dataSet={this.ds}
            bordered
            customizable
            customizedCode="pre-customized-p"
            editMode="inline"
          >
            {/* <Column name="userid" editor />
            <Column name="name" editor />
            <Column name="sex" editor />
            <Column name="email" editor /> */}
            <Column name="tenant" editor />
            <Column name="department" editor />
            <Column
              name="tags"
              renderer={({ record }) => {
                return (
                  <div>
                    {record.data.tags.map((item) => {
                      return <Tag>{item}</Tag>;
                    })}
                  </div>
                );
              }}
              editor={
                true && (
                  <Select multiple>
                    <Option value="tabs1">tabs1</Option>
                    <Option value="tabs2">tabs2</Option>
                    <Option value="tabs3">tabs3</Option>
                    <Option value="jack">Jack</Option>
                    <Option value="lucy">Lucy</Option>
                    <Option value="wu">Wu</Option>
                    <Option value="a1">a1</Option>
                    <Option value="b2">b2</Option>
                    <Option value="c3">c3</Option>
                    <Option value="a11">a11</Option>
                    <Option value="b12">b12</Option>
                    <Option value="c13">c13</Option>
                    <Option value="l1ucy">L1ucy</Option>
                    <Option value="wu1">Wu1</Option>
                  </Select>
                )
              }
            />
            <Column
              header="操作"
              // renderer={({ record }) => (
              //   <div>
              //     <Dropdown overlay={menu}>
              //       <Icon type="more_horiz" />
              //     </Dropdown>
              //   </div>
              // )}
              command={({ record }) => ["edit", "delete"]}
              lock="right"
              align="right"
            />
          </Table>
        </Row>
        {/* <div style={{ display: "flex" }}>
          <div style={{ flex: 1 }}>
            <div>
              <div>筛选</div>
              <FilterBarTable />
            </div>
          </div>
        </div> */}
        <div style={{ display: "flex" }}>
          <div style={{ flex: 1 }}>
            <div>
              <div>多选和可编辑</div>
              <Table
                dataSet={this.queryDs}
                customizable
                customizedCode="pre-customized-p"
                // editMode="inline"
                queryBar="professionalBar"
                selectedHighLightRow
                queryFieldsLimit="2"
                selectionMode="none"
              >
                <Column name="account" editor />
                <Column name="username" editor />
                <Column name="tenant" editor />
                <Column name="effect" editor />
                <Column name="invalid" editor />
                <Column name="code_string" editor />
                <Column name="enable" editor={true && <Switch />} />
                <Column
                  header="操作"
                  command={
                    ({ record }) => ["edit", "delete"]

                    // <div>
                    //   <a
                    //     style={{ marginRight: 16 }}
                    //     onClick={() => this.handleEdit(record)}
                    //   >
                    //     编辑
                    //   </a>
                    //   <a>排除权限</a>
                    // </div>
                  }
                  lock="right"
                />
              </Table>
            </div>
            <div>
              <div>单选</div>
              <Table
                dataSet={this.dsx}
                customizable
                customizedCode="pre-customized-p"
                selectedHighLightRow
              >
                <Column name="mainTableName" />
                <Column name="subTableName" />
                <Column name="mainTableSize" />
                <Column name="subTableSize" />
                <Column
                  name="subTableStatus"
                  renderer={(record) => (
                    <Badge status="success" text={record.value} />
                  )}
                />
              </Table>
            </div>
            <div>
              <div>展开</div>
              <TreeTable />
            </div>
            <div>
              <div>展开表格</div>
              <TreeTable1 />
            </div>
            <div>
              <div>操作多于三个全部收起</div>
              <Table
                dataSet={this.ds}
                customizable
                customizedCode="pre-customized-p"
              >
                <Column name="account" />
                <Column name="username" />
                <Column name="tenant" />
                <Column name="effect" />
                <Column name="invalid" />
                <Column
                  header="操作"
                  lock="right"
                  // command={["edit", "delete"]}
                  command={this.moreCommands}
                />
              </Table>
            </div>
          </div>
        </div>
        {/* <div>界面总宽度(可编辑行数据)</div>
        <Table
          dataSet={this.queryDs}
          customizable
          customizedCode="pre-customized-p"
          editMode="inline"
          queryBar="filterBar"
        >
          <Column name="userid" editor />
          <Column name="name" editor />
          <Column name="sex" editor />
          <Column name="email" editor />
          <Column name="department" editor />
          <Column
            header="操作"
            lock="right"
            renderer={({ record }) => (
              <div>
                <a
                  style={{ marginRight: 16 }}
                  onClick={() => this.handleEdit(record)}
                >
                  编辑
                </a>
              </div>
            )}
          />
        </Table> */}
        {/* <div>超链接(可跳转展示)</div>
        <Table
          dataSet={this.multipleDs}
          customizable
          customizedCode="pre-customized-p"
        >
          <Column
            name="path"
            renderer={(record) => (
              <a href={record.value}>{record.value}</a>
            )}
          />
          <Column name="method" />
          <Column name="code" />
          <Column
            name="status"
            renderer={(record) => (
              <Badge status="success" text={record.value} />
            )}
          />
          <Column name="serviceName" />
        </Table> */}
        <div>链接</div>
        <Table
          dataSet={this.multipleDs}
          customizable
          customizedCode="column-group"
          selectedHighLightRow
          columnDraggable={true}
        >
          <Column
            name="path"
            renderer={(record) => <a href={record.value}>{record.value}</a>}
          />
          <Column header="组合">
            <Column name="method" />
            <Column name="code" />
          </Column>
          <Column
            name="status"
            renderer={(record) => (
              <Badge status="success" text={record.value} />
            )}
          />
          <Column name="serviceName" />
        </Table>
        <div>组合行</div>
        <Table dataSet={CombRowDs} columns={columns} />
        <div>组合列</div>
        <Table
          dataSet={this.colDs}
          border={border}
          buttons={colButtons}
          customizable
          customizedCode="column-group"
          columnResizable={resizable}
          expandedRowRenderer={this.expandedRowRenderer}
          parityRow
        >
          <Column header="组合">
            <Column name="name" editor width={450} />
            <Column name="age" editor />
          </Column>
          <Column header="组合3">
            <Column header="组合2">
              <Column
                name="sex"
                editor
                footer={footer ? () => "--" : undefined}
              />
              <Column name="date.startDate" editor />
            </Column>
            <Column name="sexMultiple" editor />
          </Column>
        </Table>
        <div>表格前端导出</div>
        <Table
          buttons={["export"]}
          customizable
          customizedCode="customized"
          border
          key="basic"
          style={{ height: 300 }}
          dataSet={this.exportDs}
          columns={this.exportTableColumns}
        />
      </Content>
    );
  }
}

export default withThemedLayout({
  title: "表单 组件",
  name: "table",
  styleCount: 3,
})(TableDemo);
