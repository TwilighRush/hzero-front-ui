/* eslint-disable */
import React from "react";
import { withThemedLayout } from "../../utils/withThemedLayout";
import { Content } from "root/components/Page";
import PerformanceTable from "../../components/PerformanceTablePro";
import CheckBox from "../../components/CheckBoxPro";
import Button from "../../components/ButtonPro";
import Popover from "../../components/Popover";

const boxStyle = {
  margin: 20,
  padding: 20,
  border: "1px solid rgba(90, 94, 154, 0.2)",
  marginLeft: 0,
  borderRadius: 5,
};

const NameCell = ({ rowData, dataIndex }) => {
  return (
    <Popover
      title="Description"
      content={
        <>
          <p>
            <b>Name:</b> {`${rowData.firstName} ${rowData.lastName}`}{" "}
          </p>
          <p>
            <b>Email:</b> {rowData.email}{" "}
          </p>
          <p>
            <b>Company:</b> {rowData.companyName}{" "}
          </p>
          <p>
            <b>Sentence:</b> {rowData.sentence}{" "}
          </p>
        </>
      }
    >
      {rowData[dataIndex].toLocaleString()}
    </Popover>
  );
};

const ActionCell = ({ rowData, dataIndex }) => {
  function handleAction() {
    alert(`id:${rowData[dataIndex]}`);
    console.log(rowData, dataIndex);
  }

  return (
    <span>
      <a onClick={handleAction}> Edit </a>|
      <a onClick={handleAction}> Remove </a>
    </span>
  );
};

@withThemedLayout({
  title: "表单 组件",
  name: "table",
  styleCount: 3,
})
export default class CustomColumnTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: fakeData,
      checkValues: [],
    };
  }

  handleChange = (value, oldValue) => {
    console.log("[controlled]", value, "[oldValues]", oldValue);
    const { checkValues } = this.state;
    if (value) {
      checkValues.push(value);
    } else {
      checkValues.splice(checkValues.indexOf(value), 1);
    }
    this.setState({
      checkValues,
    });
  };

  handleCheckAllChange = (value, oldValue) => {
    console.log("[controlled]", value, "[oldValues]", oldValue);
    const { data } = this.state;
    if (value) {
      this.setState({
        checkValues: data.map((i) => i.id),
      });
    } else {
      this.setState({
        checkValues: [],
      });
    }
  };

  CheckCell = ({ rowData }) => {
    const { checkValues } = this.state;
    return (
      <CheckBox
        name="controlled"
        value={rowData.id}
        checked={checkValues.indexOf(rowData.id) !== -1}
        onChange={this.handleChange}
      />
    );
  };

  render() {
    const { data, checkValues } = this.state;
    const columns = [
      {
        title: (
          <CheckBox
            name="controlled"
            checked={checkValues.length === data.length}
            onChange={this.handleCheckAllChange}
          />
        ),
        dataIndex: "id",
        key: "id",
        width: 80,
        align: "center",
        fixed: true,
        render: ({ rowData, dataIndex }) =>
          this.CheckCell({ rowData, dataIndex }),
      },
      {
        title: "firstName",
        dataIndex: "firstName",
        key: "firstName",
        width: 130,
        resizable: true,
        render: ({ rowData, dataIndex }) => NameCell({ rowData, dataIndex }),
      },
      {
        title: "lastName",
        dataIndex: "lastName",
        key: "lastName",
        width: 200,
        resizable: true,
      },
      {
        title: "邮箱",
        key: "email",
        width: 300,
        resizable: true,
        render: ({ rowData }) => (
          <a href={`mailto:${rowData.email}`}>{rowData.email}</a>
        ),
      },
      {
        title: "Date",
        key: "date",
        width: 300,
        align: "right",
        editor: true,
        render: ({ rowData }) => <span>{rowData.date.toLocaleString()}</span>,
      },
      {
        title: "Action",
        dataIndex: "id",
        key: "action",
        width: 300,
        fixed: "right",
        render: ({ rowData, dataIndex }) => ActionCell({ rowData, dataIndex }),
      },
    ];
    return (
      <Content>
        {/* 基本 */}
        <div>
          <h2>基本-pro</h2>
          <h4>最简单的用法</h4>
          <div style={boxStyle}>
            <PerformanceTable
              // headerHeight={36}
              // rowHeight={36}
              height={400}
              data={data}
              columns={columns}
              bordered={false}
            />
          </div>
        </div>
        {/* 调整列宽 */}
        <div>
          <h2>调整列宽-pro</h2>
          <h4>
            把鼠标移动到列分割线的时候，会显示出一个蓝色的移动手柄，点击不松开并左右拖动就可以调整列的宽度
          </h4>
          <div style={boxStyle}>
            <FixedColumnTable />
          </div>
        </div>
        {/* 可展开 */}
        <div>
          <h2>可展开-pro</h2>
          <h4>实现一个可以展开的 Table ,需要以下几个属性的组合完成</h4>
          <div style={boxStyle}>
            <ExpandedTable />
          </div>
        </div>
      </Content>
    );
  }
}

class FixedColumnTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: fakeData,
    };
  }

  render() {
    const columns = [
      {
        title: "Id",
        dataIndex: "id",
        key: "id",
        width: 70,
        align: "center",
        verticalAlign: "middle",
        fixed: true,
      },
      {
        header: "基本信息",
        type: "ColumnGroup",
        align: "center",
        verticalAlign: "middle",
        fixed: true,
        children: [
          {
            title: "姓",
            dataIndex: "lastName",
            key: "lastName",
            width: 150,
            resizable: true,
          },
          {
            title: "名",
            dataIndex: "firstName",
            key: "firstName",
            width: 150,
            resizable: true,
          },
          {
            title: "邮箱",
            dataIndex: "email",
            key: "email",
            width: 200,
            resizable: true,
          },
        ],
      },
      {
        title: "公司",
        dataIndex: "companyName",
        key: "companyName",
        width: 300,
        verticalAlign: "middle",
        resizable: true,
      },
      {
        title: "城市",
        dataIndex: "city",
        key: "city",
        width: 300,
        colSpan: 2,
        verticalAlign: "middle",
        resizable: true,
      },
      {
        title: "街道",
        dataIndex: "street",
        key: "street",
        width: 300,
        verticalAlign: "middle",
        resizable: true,
      },
    ];
    return (
      <PerformanceTable
        bordered
        height={400}
        rowHeight={36}
        headerHeight={72}
        data={this.state.data}
        columns={columns}
        onRowClick={(data) => {
          console.log(data);
        }}
      />
    );
  }
}

const ExpandCell = ({ rowData, dataIndex, expandedRowKeys, onChange }) => (
  <Button
    onClick={() => {
      onChange(rowData);
    }}
    funcType="flat"
    size="small"
  >
    {expandedRowKeys.some((key) => key === rowData["id"]) ? "-" : "+"}
  </Button>
);

class ExpandedTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: fakeData,
      expandedRowKeys: [0],
    };
    this.handleExpanded = this.handleExpanded.bind(this);
  }
  handleExpanded(rowData, dataKey) {
    const { expandedRowKeys } = this.state;

    let open = false;
    const nextExpandedRowKeys = [];

    expandedRowKeys.forEach((key) => {
      if (key === rowData["id"]) {
        open = true;
      } else {
        nextExpandedRowKeys.push(key);
      }
    });

    if (!open) {
      nextExpandedRowKeys.push(rowData["id"]);
    }
    this.setState({
      expandedRowKeys: nextExpandedRowKeys,
    });
  }
  render() {
    const { expandedRowKeys, data } = this.state;
    const columns = [
      {
        title: "#",
        dataIndex: "id",
        key: "id",
        width: 70,
        align: "center",
        fixed: true,
        render: ({ rowData, dataIndex }) =>
          ExpandCell({
            rowData,
            dataIndex,
            expandedRowKeys,
            onChange: this.handleExpanded,
          }),
      },
      {
        title: "姓",
        dataIndex: "lastName",
        key: "lastName",
        width: 150,
        fixed: true,
      },
      {
        title: "名",
        dataIndex: "firstName",
        key: "firstName",
        width: 150,
      },
      {
        title: "城市",
        dataIndex: "city",
        key: "city",
        width: 300,
      },
      {
        title: "街道",
        dataIndex: "street",
        key: "street",
        width: 300,
      },
      {
        title: "公司",
        dataIndex: "companyName",
        key: "companyName",
        width: 300,
      },
    ];

    return (
      <PerformanceTable
        height={400}
        data={data}
        rowKey={"id"}
        expandedRowKeys={expandedRowKeys}
        columns={columns}
        onRowClick={(data) => {
          console.log(data);
        }}
        renderRowExpanded={(rowData) => {
          return (
            <div>
              <div
                style={{
                  width: 60,
                  height: 60,
                  float: "left",
                  marginRight: 10,
                  background: "#eee",
                }}
              >
                <img src={rowData.avartar} style={{ width: 60 }} />
              </div>
              <p>{rowData.email}</p>
              <p>{rowData.date}</p>
            </div>
          );
        }}
      />
    );
  }
}

const fakeData = [
  {
    id: 1,
    avartar: "https://s3.amazonaws.com/uifaces/faces/twitter/ariil/128.jpg",
    city: "Trentonborough",
    email: "Cleo.Keeling@hotmail.com",
    firstName: "Doris",
    lastName: "Stokes",
    street: "VonRueden Mall",
    zipCode: "94051-1351",
    date: "2016-07-17T18:39:19.965Z",
    bs: "customized engage technologies",
    catchPhrase: "Operative 3rd generation emulation",
    companyName: "Carroll, Dicki and Casper",
    words: "aspernatur voluptas quidem",
    sentence:
      "Laboriosam aut blanditiis quos est quis assumenda eligendi sequi ipsa.",
  },
  {
    id: 2,
    avartar: "https://s3.amazonaws.com/uifaces/faces/twitter/shojberg/128.jpg",
    city: "Wiegandborough",
    email: "Gwendolyn23@hotmail.com",
    firstName: "Lola",
    lastName: "O'Hara",
    street: "Marlon Corners",
    zipCode: "21758-7794",
    date: "2016-11-04T10:29:50.023Z",
    bs: "holistic transform web services",
    catchPhrase: "Persevering systematic firmware",
    companyName: "Ward Group",
    words: "modi velit et",
    sentence: "Error perferendis sunt est optio.",
  },
  {
    id: 3,
    avartar:
      "https://s3.amazonaws.com/uifaces/faces/twitter/allthingssmitty/128.jpg",
    city: "Jastfort",
    email: "Camille_Tillman65@gmail.com",
    firstName: "Shakira",
    lastName: "Erdman",
    street: "Haleigh Mountain",
    zipCode: "34640",
    date: "2016-04-16T17:51:50.387Z",
    bs: "real-time strategize interfaces",
    catchPhrase: "Object-based high-level protocol",
    companyName: "Shields - Marks",
    words: "et amet et",
    sentence:
      "Aperiam dolorum assumenda voluptatem rerum nostrum neque illum est et.",
  },
  {
    id: 4,
    avartar: "https://s3.amazonaws.com/uifaces/faces/twitter/SULiik/128.jpg",
    city: "Lake Moseburgh",
    email: "Forrest_Turner@yahoo.com",
    firstName: "Destini",
    lastName: "Kautzer",
    street: "Marcelle Plains",
    zipCode: "78303",
    date: "2016-05-02T13:26:36.381Z",
    bs: "B2B harness networks",
    catchPhrase: "Assimilated mobile application",
    companyName: "Kulas, Baumbach and Wintheiser",
    words: "id enim cupiditate",
    sentence: "Architecto consequatur qui qui.",
  },
  {
    id: 5,
    avartar: "https://s3.amazonaws.com/uifaces/faces/twitter/sawrb/128.jpg",
    city: "East Edwina",
    email: "Laila_Hickle@yahoo.com",
    firstName: "Etha",
    lastName: "VonRueden",
    street: "Claud Expressway",
    zipCode: "36975",
    date: "2016-04-22T20:20:22.728Z",
    bs: "end-to-end incubate eyeballs",
    catchPhrase: "Realigned maximized application",
    companyName: "Skiles, Rolfson and Mills",
    words: "esse non saepe",
    sentence: "Suscipit sit atque sed placeat quod dignissimos voluptatibus.",
  },
  {
    id: 6,
    avartar: "https://s3.amazonaws.com/uifaces/faces/twitter/tomaslau/128.jpg",
    city: "Reidside",
    email: "Kenton.Mayer46@hotmail.com",
    firstName: "Esta",
    lastName: "Brakus",
    street: "Rogahn Pike",
    zipCode: "21484",
    date: "2016-10-24T12:48:20.829Z",
    bs: "best-of-breed transition metrics",
    catchPhrase: "Proactive 24/7 strategy",
    companyName: "Kutch LLC",
    words: "saepe omnis magni",
    sentence: "Reprehenderit et aut eveniet consequatur ducimus.",
  },
  {
    id: 7,
    avartar: "https://s3.amazonaws.com/uifaces/faces/twitter/joe_black/128.jpg",
    city: "Bechtelarberg",
    email: "Alverta55@hotmail.com",
    firstName: "Jay",
    lastName: "Johnston",
    street: "Willa Square",
    zipCode: "62181-9414",
    date: "2016-04-14T19:23:45.545Z",
    bs: "web-enabled visualize supply-chains",
    catchPhrase: "Networked demand-driven neural-net",
    companyName: "Okuneva, Goyette and Windler",
    words: "dolores necessitatibus blanditiis",
    sentence: "In nemo in ipsum voluptatem et libero.",
  },
  {
    id: 8,
    avartar:
      "https://s3.amazonaws.com/uifaces/faces/twitter/the_purplebunny/128.jpg",
    city: "Lake Nyasia",
    email: "Roma_Wiza@gmail.com",
    firstName: "Benedict",
    lastName: "Bailey",
    street: "Huels Circles",
    zipCode: "15574-4917",
    date: "2016-05-02T04:09:14.604Z",
    bs: "transparent aggregate platforms",
    catchPhrase: "Re-engineered dedicated policy",
    companyName: "Bins, Mills and Runte",
    words: "officia et laborum",
    sentence: "Hic ut minima ut aliquid consequatur pariatur quas.",
  },
  {
    id: 9,
    avartar:
      "https://s3.amazonaws.com/uifaces/faces/twitter/alek_djuric/128.jpg",
    city: "Rohanfort",
    email: "Golda_Schmeler7@hotmail.com",
    firstName: "Mina",
    lastName: "Hermiston",
    street: "Fisher Springs",
    zipCode: "83576-2605",
    date: "2016-07-25T12:55:49.136Z",
    bs: "vertical recontextualize ROI",
    catchPhrase: "Reduced scalable circuit",
    companyName: "Fisher Inc",
    words: "et voluptas laborum",
    sentence: "Et illum nostrum sint qui eum sunt eveniet minus deserunt.",
  },
  {
    id: 10,
    avartar:
      "https://s3.amazonaws.com/uifaces/faces/twitter/jordyvdboom/128.jpg",
    city: "West Reyna",
    email: "Frances.Crooks62@hotmail.com",
    firstName: "Colby",
    lastName: "Douglas",
    street: "Yasmeen Club",
    zipCode: "22692-2337",
    date: "2017-03-16T13:07:33.090Z",
    bs: "user-centric visualize users",
    catchPhrase: "Self-enabling multimedia complexity",
    companyName: "Yost and Sons",
    words: "quaerat facere modi",
    sentence: "Qui reiciendis qui cupiditate qui quo.",
  },
];
