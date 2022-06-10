import React from "react";
import styled from "styled-components";
import { Divider, Icon } from "hzero-ui";
import { Content } from "root/components/Page";
import Table from "../../components/Table";
import { withThemedLayout } from "../../utils/withThemedLayout";
import Tabs from "../../components/Tabs";

const { TabPane } = Tabs;

const Title = styled.h6`
  font-size: 14px;
  color: #333;
  font-weight: normal;
  padding: 12px 0;
  margin: 0;
`;

const columns = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
    render: (text) => <a>{text}</a>,
  },
  {
    title: "Age",
    dataIndex: "age",
    key: "age",
  },
  {
    title: "Address",
    dataIndex: "address",
    key: "address",
  },
  {
    title: "Action",
    key: "action",
    render: (text, record) => (
      <span>
        <a>Action 一 {record.name}</a>
        <Divider type="vertical" />
        <a>Delete</a>
        <Divider type="vertical" />
        <a className="ant-dropdown-link">
          More actions <Icon type="down" />
        </a>
      </span>
    ),
  },
];

const data = [
  {
    key: "1",
    name: "John Brown",
    age: 32,
    address: "New York No. 1 Lake Park",
  },
  {
    key: "2",
    name: "Jim Green",
    age: 42,
    address: "London No. 1 Lake Park",
  },
  {
    key: "3",
    name: "Joe Black",
    age: 32,
    address: "Sidney No. 1 Lake Park",
  },
];

const columnsFixed = [
  {
    title: "Full Name",
    width: 100,
    dataIndex: "name",
    key: "name",
    fixed: "left",
  },
  { title: "Age", width: 100, dataIndex: "age", key: "age", fixed: "left" },
  { title: "Column 1", dataIndex: "address", key: "1" },
  { title: "Column 2", dataIndex: "address", key: "2" },
  { title: "Column 3", dataIndex: "address", key: "3" },
  { title: "Column 4", dataIndex: "address", key: "4" },
  { title: "Column 5", dataIndex: "address", key: "5" },
  { title: "Column 6", dataIndex: "address", key: "6" },
  { title: "Column 7", dataIndex: "address", key: "7" },
  { title: "Column 8", dataIndex: "address", key: "8" },
  {
    title: "Action",
    key: "operation",
    fixed: "right",
    width: 100,
    render: () => <a>action</a>,
  },
];

const dataFixed = [
  {
    key: "1",
    name: "John Brown",
    age: 32,
    address: "New York Park",
  },
  {
    key: "2",
    name: "Jim Green",
    age: 40,
    address: "London Park",
  },
];

const columnsTree = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Age",
    dataIndex: "age",
    key: "age",
    width: "12%",
  },
  {
    title: "Address",
    dataIndex: "address",
    width: "30%",
    key: "address",
  },
];

const dataTree = [
  {
    key: 1,
    name: "John Brown sr.",
    age: 60,
    address: "New York No. 1 Lake Park",
    children: [
      {
        key: 11,
        name: "John Brown",
        age: 42,
        address: "New York No. 2 Lake Park",
      },
      {
        key: 12,
        name: "John Brown jr.",
        age: 30,
        address: "New York No. 3 Lake Park",
        children: [
          {
            key: 121,
            name: "Jimmy Brown",
            age: 16,
            address: "New York No. 3 Lake Park",
          },
        ],
      },
      {
        key: 13,
        name: "Jim Green sr.",
        age: 72,
        address: "London No. 1 Lake Park",
        children: [
          {
            key: 131,
            name: "Jim Green",
            age: 42,
            address: "London No. 2 Lake Park",
            children: [
              {
                key: 1311,
                name: "Jim Green jr.",
                age: 25,
                address: "London No. 3 Lake Park",
              },
              {
                key: 1312,
                name: "Jimmy Green sr.",
                age: 18,
                address: "London No. 4 Lake Park",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    key: 2,
    name: "Joe Black",
    age: 32,
    address: "Sidney No. 1 Lake Park",
  },
];
const columns11 = [
  {
    title: "币种代码",
    width: 120,
    dataIndex: "fromCurrencyCode",
  },
  {
    title: "币种名称",
    dataIndex: "fromCurrencyName",
  },
  {
    title: "兑换币种代码",
    width: 120,
    dataIndex: "toCurrencyCode",
  },
  {
    title: "兑换币种名称",
    dataIndex: "toCurrencyName",
    width: 200,
  },
  {
    title: "汇率类型",
    key: "rateTypeName",
    width: 100,
    dataIndex: "rateTypeName",
  },
  {
    title: "兑换日期",
    width: 150,
    dataIndex: "rateDate",
  },
  {
    title: "货币数量",
    width: 100,
    dataIndex: "currencyNumber",
    render: () => {
      return <span>1</span>;
    },
  },
  {
    title: "兑换数量",
    width: 100,
    dataIndex: "exchangeNumber",
  },
  {
    title: "状态",
    width: 100,
    dataIndex: "enabledFlag",
  },
  {
    title: "操作",
    // width: 80,
    fixed: "right",
  },
];
const columnsFilter = [
  {
    title: "Name",
    dataIndex: "name",
    filters: [
      {
        text: "Joe",
        value: "Joe",
      },
      {
        text: "Jim",
        value: "Jim",
      },
      {
        text: "Submenu",
        value: "Submenu",
        children: [
          {
            text: "Green",
            value: "Green",
          },
          {
            text: "Black",
            value: "Black",
          },
        ],
      },
    ],
    // specify the condition of filtering result
    // here is that finding the name started with `value`
    onFilter: (value, record) => record.name.indexOf(value) === 0,
    sorter: (a, b) => a.name.length - b.name.length,
  },
  {
    title: "Age",
    dataIndex: "age",
    defaultSortOrder: "descend",
    sorter: (a, b) => a.age - b.age,
  },
  {
    title: "Address",
    dataIndex: "address",
    fixed: "right",
    filters: [
      {
        text: "London",
        value: "London",
      },
      {
        text: "New York",
        value: "New York",
      },
    ],
    filterMultiple: false,
    onFilter: (value, record) => record.address.indexOf(value) === 0,
    sorter: (a, b) => a.address.length - b.address.length,
  },
];

const dataFilter = [
  {
    key: "1",
    name: "John Brown",
    age: 32,
    address: "New York No. 1 Lake Park",
  },
  {
    key: "2",
    name: "Jim Green",
    age: 42,
    address: "London No. 1 Lake Park",
  },
  {
    key: "3",
    name: "Joe Black",
    age: 32,
    address: "Sidney No. 1 Lake Park",
  },
  {
    key: "4",
    name: "Jim Red",
    age: 32,
    address: "London No. 2 Lake Park",
  },
];

const TablePage = () => (
  <>
    <Content>
      <Title>样式一</Title>
      <Tabs defaultActiveKey="1">
        <TabPane tab="普通表格" key="1">
          <Table columns={columns} dataSource={data} loading />
        </TabPane>
        <TabPane tab="固定列" key="2">
          <Table
            columns={columnsFixed}
            dataSource={dataFixed}
            scroll={{ x: 1300 }}
          />
        </TabPane>
        <TabPane tab="可选择" key="3">
          <Table
            columns={columns}
            dataSource={data}
            scroll={{ x: 1300 }}
            rowSelection={{ onChange: () => {} }}
          />
        </TabPane>
        <TabPane tab="树形选择" key="4">
          <Table
            columns={columnsTree}
            dataSource={dataTree}
            rowSelection={{ onChange: () => {} }}
          />
        </TabPane>
        <TabPane tab="可筛选" key="5">
          <Table
            columns={columnsFilter}
            dataSource={dataFilter}
            rowSelection={{ onChange: () => {} }}
          />
        </TabPane>
        <TabPane tab="可调宽度" key="6">
          <Table
            resizable
            columns={columnsFixed}
            dataSource={dataFilter}
            rowSelection={{ onChange: () => {} }}
          />
        </TabPane>
      </Tabs>
      <Table
        bordered
        columns={columns11}
        dataSource={[]}
        rowSelection={{ onChange: () => {} }}
        autoHeight={{ type: "maxHeight" }}
        scroll={{ x: 2000 }}
      />
      <Table
        bordered
        rowKey="exchangeRateId"
        // loading={initLoading}
        dataSource={[]}
        columns={columns11}
        // scroll={{ x: tableScrollWidth(columns) }}
        // pagination={pagination}
        // onChange={this.handleStandardTableChange}
        autoHeight={{ type: "maxHeight" }}
      />
    </Content>
  </>
);

export default withThemedLayout({
  title: "Table 组件",
  name: "table",
  styleCount: 3,
})(TablePage);
