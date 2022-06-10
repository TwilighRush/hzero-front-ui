import React from "react";
import {
  Row,
  Col,
  // Select as ProSelect,
  DataSet,
} from "choerodon-ui/pro";
import {
  // Button,
  // Tooltip,
  Icon,
} from "choerodon-ui";
import { Content } from "root/components/Page";
import { withThemedLayout } from "../../utils/withThemedLayout";
import mock from "./_mock";
import Button from "../../components/Button";
import Tooltip from "../../components/Tooltip";
import ProSelect from "../../components/SelectPro";

mock();
const { Option, OptGroup } = ProSelect;

const boxStyle = {
  margin: 20,
  padding: 20,
  border: "1px solid rgba(90, 94, 154, 0.2)",
  marginLeft: 0,
  borderRadius: 5,
};

class SelectMore extends React.Component {
  optionDs = new DataSet({
    selection: "single",
    transport: {
      read({ params: { page, pagesize } }) {
        return {
          url: `/dataset/user/page/${pagesize}/${page}`,
        };
      },
    },
    autoQuery: true,
  });

  ds = new DataSet({
    data: [{ userid: "15", name: "戴刚" }],
    fields: [
      {
        name: "user",
        type: "object",
        textField: "name",
        valueField: "userid",
        label: "用户",
        options: this.optionDs,
        ignore: "always",
      },
      {
        name: "account",
        multiple: true,
      },
      {
        name: "name",
        bind: "user.name",
      },
      {
        name: "userid",
        bind: "user.userid",
      },
    ],
  });

  optionNoPageDs = new DataSet({
    selection: "single",
    queryUrl: "/dataset/user/queries",
    autoQuery: true,
    paging: false,
  });

  dsOne = new DataSet({
    fields: [
      {
        name: "user",
        type: "string",
        textField: "name",
        valueField: "userid",
        label: "用户",
        options: this.optionNoPageDs,
      },
    ],
  });

  changeOptions = () => {
    this.ds.addField("account", {
      name: "account",
      type: "string",
      textField: "name",
      valueField: "userid",
      label: "账户",
      options: this.optionDs,
    });
  };

  render() {
    return (
      <>
        <Row span={24}>分页加载：</Row>
        <Row>
          <Col span={8}>
            <ProSelect
              multiple
              optionsFilter={(record) => record.get("sex") === "F"}
              dataSet={this.ds}
              name="user"
            />
          </Col>
          <Col span={8}>
            <ProSelect multiple dataSet={this.ds} name="account" />
          </Col>
          <Col span={8}>
            <Button onClick={this.changeOptions}>切换选项</Button>
          </Col>
        </Row>
        <Row span={8}>不分页：</Row>
        <Row gutter={10}>
          <Col span={8}>
            <ProSelect dataSet={this.dsOne} name="user" />
          </Col>
        </Row>
      </>
    );
  }
}

const SelectPage = () => {
  const optionDs = new DataSet({
    selection: "single",
    queryUrl: "/dataset/user/queries",
    autoQuery: true,
    paging: false,
  });
  const optionCodeDs = new DataSet({
    selection: "single",
    queryUrl: "/common/lov/dataset/LOV_CODE",
    fields: [{ name: "enabledFlag", type: "string", group: 0 }],
    autoQuery: true,
  });
  const ds = new DataSet({
    autoCreate: true,
    fields: [
      { name: "last-name", type: "string" },
      { name: "first-name", type: "string" },
      { name: "second-name", readOnly: true },
      { name: "sex", type: "string", lookupCode: "HR.EMPLOYEE_GENDER" },
      {
        name: "sex2",
        type: "string",
        dynamicProps: {
          lookupAxiosConfig: ({ record }) => ({
            url: record.get("sex") ? "/common/code/HR.EMPLOYEE_GENDER/" : null,
            transformResponse(data) {
              return data;
            },
          }),
        },
      },
      {
        name: "lov2",
        type: "string",
        lookupCode: "HR.EMPLOYEE_GENDER",
        defaultValue: ["QP", "XH", "HD"],
        multiple: true,
      },
      {
        name: "user",
        type: "string",
        textField: "text",
        label: "用户",
        multiple: true,
      },
      {
        name: "userList",
        type: "string",
        textField: "name",
        valueField: "userid",
        label: "用户",
        options: optionDs,
      },
      {
        name: "code",
        type: "string",
        textField: "description",
        valueField: "code",
        label: "用户",
        options: optionCodeDs,
      },
    ],
    data: [
      {
        "second-name": "zhangsan",
      },
    ],
    events: {
      // update: handleDataSetChange,
    },
  });

  const searchMatcher = ({ text, props: { text: propText } }) => {
    return propText.toLowerCase().indexOf(text.toLowerCase()) !== -1;
  };

  const renderer = ({ text }) => (
    <div style={{ width: "100%" }}>
      {text && <Icon type="people" />} {text}
    </div>
  );

  const optionRenderer = ({ text }) => (
    <Tooltip title={text} placement="left">
      {renderer({ text })}
    </Tooltip>
  );

  return (
    <Content>
      {/* 基本使用 */}
      <div>
        <h2>基本使用-pro</h2>
        <h4>下拉选择器</h4>
        <div style={boxStyle}>
          <Row>
            <Col span={12}>
              <ProSelect
                searchable
                searchFieldInPopup
                trigger="click"
                placeholder="请选择"
                style={{ width: 200 }}
              >
                <Option value="1">筛选名称1</Option>
                <Option value="2">筛选名称2</Option>
                <Option value="3">筛选名称3</Option>
                <Option value="4">筛选名称4</Option>
                <Option value="5">筛选名称5</Option>
              </ProSelect>
            </Col>
            <Col span={12}>
              <ProSelect placeholder="请选择" disabled style={{ width: 200 }}>
                <Option value="1">筛选名称1</Option>
              </ProSelect>
            </Col>
          </Row>
        </div>
      </div>
      {/* 值列表代码 */}
      <div>
        <h2>值列表代码-pro</h2>
        <h4>值列表代码</h4>
        <div style={boxStyle}>
          <Row>
            <Col span={12}>
              <ProSelect
                dataSet={ds}
                name="user"
                placeholder="数据源多选"
                maxTagCount={2}
                maxTagTextLength={3}
                maxTagPlaceholder={(restValues) => `+${restValues.length}...`}
                selectAllButton={false}
              >
                <Option value="jack">Jack</Option>
                <Option value="lucy">Lucy</Option>
                <Option value="wu">Wu</Option>
                <Option value="a1">a1</Option>
                <Option value="b2">b2</Option>
                <Option value="c3">c3</Option>
              </ProSelect>
            </Col>
            <Col span={12}>
              <ProSelect
                placeholder="请选择"
                notFoundContent="暂无保存筛选"
                style={{ width: 200 }}
              />
            </Col>
          </Row>
        </div>
      </div>
      {/* 分组 */}
      <div>
        <h2>分组-pro</h2>
        <h4>有两种方式进行选项分组：</h4>
        <ul>
          <li>1.用 OptGroup 进行选项分组。</li>
          <li>
            2.为OptionDs的Field添加group属性，属性值为从1开始的序数，用来指定分组的优先级。
          </li>
        </ul>
        <div style={boxStyle}>
          <Row>
            <Col span={12}>
              <ProSelect trigger="=click">
                <OptGroup label="Manager">
                  <Option value="jack">Jack</Option>
                  <Option value="lucy">Lucy</Option>
                </OptGroup>
                <OptGroup label="Engineer">
                  <Option value="wu">Wu</Option>
                </OptGroup>
              </ProSelect>
            </Col>
          </Row>
        </div>
      </div>
      {/* 可搜索 */}
      <div>
        <h2>可搜索-pro</h2>
        <h4>可搜索</h4>
        <div style={boxStyle}>
          <Row>
            <Col span={8}>
              <ProSelect
                dataSet={ds}
                name="last-name"
                searchable
                searchMatcher={searchMatcher}
              >
                <Option value="jack" text="Jack">
                  Jack
                </Option>
                <Option value="lucy" text="Lucy">
                  lucy
                </Option>
                <Option value="zhangsan" text="Zhangsan">
                  Zhangsan
                </Option>
                <Option value="aaa" text="Zhangsan">
                  Zhangsan
                </Option>
              </ProSelect>
            </Col>
            <Col span={8}>
              <ProSelect
                dataSet={ds}
                name="first-name"
                searchable
                searchMatcher={searchMatcher}
              >
                <Option value="jack" text="Jack">
                  Jack
                </Option>
                <Option value="lucy" text="Lucy">
                  Lucy
                </Option>
                <Option value="zhangsan" text="Zhangsan">
                  Zhangsan
                </Option>
                <Option value="aaa" text="Zhangsan">
                  Zhangsan
                </Option>
              </ProSelect>
            </Col>
            <Col span={8}>
              <ProSelect
                dataSet={ds}
                name="sex"
                searchable
                searchMatcher="key"
              />
            </Col>
          </Row>
        </div>
      </div>
      {/* 只读 */}
      <div>
        <h2>只读-pro</h2>
        <h4>只读</h4>
        <div style={boxStyle}>
          <Row>
            <Col span={12}>
              <ProSelect
                name="last-name"
                placeholder="请选择"
                readOnly
                defaultValue="jack"
              >
                <Option value="jack">Jack</Option>
                <Option value="lucy">Lucy</Option>
                <Option value="wu">Wu</Option>
              </ProSelect>
            </Col>
            <Col span={12}>
              <ProSelect dataSet={ds} name="second-name" />
            </Col>
          </Row>
        </div>
      </div>
      {/* 多值 */}
      <div>
        <h2>多值-pro</h2>
        <h4>通过属性multiple设置为多值</h4>
        <div style={boxStyle}>
          <Row>
            <Col style={{ marginBottom: 10 }} span={8}>
              <ProSelect
                dataSet={ds}
                name="user"
                placeholder="数据源多选"
                maxTagCount={2}
                maxTagTextLength={3}
                maxTagPlaceholder={(restValues) => `+${restValues.length}...`}
                // selectAllButton={this.renderSelectAllButtons}
                selectAllButton={false}
              >
                <Option value="jack">Jack</Option>
                <Option value="lucy">Lucy</Option>
                <Option value="wu">Wu</Option>
                <Option value="a1">a1</Option>
                <Option value="b2">b2</Option>
                <Option value="c3">c3</Option>
              </ProSelect>
            </Col>
            <Col style={{ marginBottom: 10 }} span={8}>
              <ProSelect
                multiple
                placeholder="多选"
                defaultValue={["jack", "wu", "lucy"]}
              >
                <Option value="jack">Jack</Option>
                <Option value="lucy">Lucy</Option>
                <Option value="wu">Wu</Option>
              </ProSelect>
            </Col>
            <Col style={{ marginBottom: 10 }} span={8}>
              <ProSelect multiple searchable placeholder="多选+搜索">
                <Option value="jack">Jack</Option>
                <Option value="lucy">Lucy</Option>
                <Option value="wu">Wu</Option>
                <Option value="a1">a1</Option>
                <Option value="b2">b2</Option>
                <Option value="c3">c3</Option>
              </ProSelect>
            </Col>
            <Col style={{ marginBottom: 10 }} span={8}>
              <ProSelect trigger="click" multiple combo placeholder="多选+复合">
                <Option value="jack">Jack</Option>
                <Option value="lucy">Lucy</Option>
                <Option value="wu">Wu</Option>
                <Option value="a1">a1</Option>
                <Option value="b2">b2</Option>
                <Option value="c3">c3</Option>
              </ProSelect>
            </Col>
            <Col style={{ marginBottom: 10 }} span={8}>
              <ProSelect multiple combo searchable placeholder="多选+复合+过滤">
                <Option value="jack">Jack</Option>
                <Option value="lucy">Lucy</Option>
                <Option value="wu">Wu</Option>
                <Option value="a1">a1</Option>
                <Option value="b2">b2</Option>
                <Option value="c3">c3</Option>
              </ProSelect>
            </Col>
            <Col style={{ marginBottom: 10 }} span={8}>
              <ProSelect
                multiple
                placeholder="多选+禁用"
                disabled
                defaultValue={["jack", "wu"]}
              >
                <Option value="jack">Jack</Option>
                <Option value="lucy">Lucy</Option>
                <Option value="wu">Wu</Option>
                <Option value="a1">a1</Option>
                <Option value="b2">b2</Option>
                <Option value="c3">c3</Option>
              </ProSelect>
            </Col>
            <Col style={{ marginBottom: 10 }} span={8}>
              <ProSelect
                multiple
                placeholder="多选+只读"
                readOnly
                defaultValue={["jack", "wu"]}
              >
                <Option value="jack">Jack</Option>
                <Option value="lucy">Lucy</Option>
                <Option value="wu">Wu</Option>
                <Option value="a1">a1</Option>
                <Option value="b2">b2</Option>
                <Option value="c3">c3</Option>
              </ProSelect>
            </Col>
          </Row>
        </div>
      </div>
      {/* optionRenderer 输入属性 */}
      <div>
        <h2>optionRenderer 输入属性-pro</h2>
        <h4>使用optionRenderer属性</h4>
        <div style={boxStyle}>
          <Row>
            <Col span={8}>
              <ProSelect
                dataSet={ds}
                name="userList"
                optionRenderer={optionRenderer}
                renderer={renderer}
              />
            </Col>
          </Row>
        </div>
      </div>
      {/* 常用项 */}
      <div>
        <h2>常用项-pro</h2>
        <h4>设置常用项</h4>
        <div style={boxStyle}>
          <Row>
            <Col span={8}>
              <ProSelect
                maxCommonTagTextLength={5}
                style={{ width: 300 }}
                dataSet={ds}
                name="user"
                commonItem={["jack", "zhangsan", "jack22222aaa"]}
              >
                <Option value="jack">Jack</Option>
                <Option value="lucy">Lucy</Option>
                <Option value="jack22222aaa">Kack22222aaasss</Option>
                <Option value="zhangsan">zhangsan</Option>
              </ProSelect>
            </Col>
          </Row>
        </div>
      </div>
      {/* DataSet group 分组 */}
      <div>
        <h2>DataSet group 分组-pro</h2>
        <h4>DataSet group 分组</h4>
        <div style={boxStyle}>
          <SelectMore />
        </div>
      </div>
      {/* 创建下拉 */}
      {/* <div>
        <h2>创建下拉-pro</h2>
        <h4>创建下拉</h4>
        <div style={boxStyle}>
          <Row>
            <Col span={8}>
              <Dropdown
                overlay={() => (
                  <Menu>
                    <Menu.Item>新建平级公司</Menu.Item>
                    <Menu.Item>新建子公司</Menu.Item>
                    <Menu.Item>新建部门</Menu.Item>
                  </Menu>
                )}
                trigger="hover"
              >
                <ButtonPro icon="add" />
              </Dropdown>
            </Col>
            <Col span={8}>
              <Dropdown
                overlay={() => (
                  <Menu>
                    <Menu.Item>简体中文</Menu.Item>
                    <Menu.Item>Englist</Menu.Item>
                    <Menu.Item>日本語の表記</Menu.Item>
                    <Menu.Item>중국어간체</Menu.Item>
                  </Menu>
                )}
                trigger="hover"
              >
                <ButtonPro icon="more_horiz" />
              </Dropdown>
            </Col>
            <Col span={8}>
              <Popover
                placement="bottomLeft"
                title={null}
                content={() => renderForm()}
                trigger="hover"
              >
                <ButtonPro icon="filter2" />
              </Popover>
            </Col>
          </Row>
        </div>
      </div> */}

      {/* <Row>
        <h3>select</h3>
        <Col span={8}>
          <Select
            placeholder="place"
            labelInValue
            // defaultValue={{ key: "lucy" }}
            style={{ width: 120 }}
          >
            <Select.Option value="jack">Jack (100)</Select.Option>
            <Select.Option value="lucy">Lucy (101)</Select.Option>
          </Select>
        </Col>
        <Col span={8}>
          <Select mode="multiple" labelInValue defaultValue={{ key: "lucy" }}>
            <Select.Option value="jack">Jack (100)</Select.Option>
            <Select.Option value="lucy">Lucy (101)</Select.Option>
          </Select>
        </Col>
        <Col span={8}>
          <Select
            mode="multiple"
            labelInValue
            defaultValue={{ key: "lucy" }}
            disabled
          >
            <Select.Option value="jack">Jack (100)</Select.Option>
            <Select.Option value="lucy">Lucy (101)</Select.Option>
          </Select>
        </Col>
      </Row>
      <Row>
        <h3>Cascader</h3>
        <Col span={8}>
          <Cascader options={options} />
        </Col>
        <Col span={8}>
          <Cascader disabled options={options} />
        </Col>
      </Row>
      <Row>
        <h3>TreeSelect</h3>
        <Col span={8}>
          <TreeSelect style={{ width: 120 }} showSearch placeholder="tree">
            <TreeNode value="parent 1" title="parent 1" key="0-1">
              <TreeNode value="parent 1-0" title="parent 1-0" key="0-1-1">
                <TreeNode value="leaf1" title="my leaf" key="random" />
                <TreeNode value="leaf2" title="your leaf" key="random1" />
              </TreeNode>
              <TreeNode value="parent 1-1" title="parent 1-1" key="random2">
                <TreeNode
                  value="sss"
                  title={<b style={{ color: "#08c" }}>sss</b>}
                  key="random3"
                />
              </TreeNode>
            </TreeNode>
          </TreeSelect>
        </Col>
        <Col span={8}>
          <TreeSelect style={{ width: 120 }} disabled>
            <TreeNode value="parent 1" title="parent 1" key="0-1">
              <TreeNode value="parent 1-0" title="parent 1-0" key="0-1-1">
                <TreeNode value="leaf1" title="my leaf" key="random" />
                <TreeNode value="leaf2" title="your leaf" key="random1" />
              </TreeNode>
              <TreeNode value="parent 1-1" title="parent 1-1" key="random2">
                <TreeNode
                  value="sss"
                  title={<b style={{ color: "#08c" }}>sss</b>}
                  key="random3"
                />
              </TreeNode>
            </TreeNode>
          </TreeSelect>
        </Col>
      </Row>
      <Row>
        <h3>components / AutoComplete </h3>
        <Col span={8}>
          <ComAutoComplete dataSource={["a", "aaa"]} />
        </Col>
        <Col span={8} />
      </Row>

      <h3 style={{ margin: 20 }}>Pro</h3>
      <Row>
        <h3>select - pro</h3>
        <Col span={8}>
          <ProSelect
            dataSet={ds}
            name="lov2"
            placeholder="请选择"
            maxTagCount={2}
            maxTagTextLength={3}
            maxTagPlaceholder={(restValues) => `+${restValues.length}...`}
          />
          <ProSelect
            searchable
            labelInValue
            defaultValue={["searchable"]}
            style={{ width: 120 }}
          >
            <ProSelect.Option value="jack">Jack</ProSelect.Option>
            <ProSelect.Option value="searchable">searchable</ProSelect.Option>
            <ProSelect.Option disabled value="xxx">
              xxx (101)
            </ProSelect.Option>
          </ProSelect>
        </Col>
        <Col span={8}>
          <ProSelect multiple labelInValue defaultValue={["lucy"]}>
            <ProSelect.Option value="jack">Jack (100)</ProSelect.Option>
            <ProSelect.Option value="lucy">Lucy (101)</ProSelect.Option>
          </ProSelect>
        </Col>
        <Col span={8}>
          <ProSelect multiple labelInValue defaultValue={["lucy"]}>
            <ProSelect.Option value="jack">Jack (100)</ProSelect.Option>
            <ProSelect.Option value="lucy">Lucy (101)</ProSelect.Option>
          </ProSelect>
        </Col>
        <Col span={8}>
          <ProSelect
            multiple
            labelInValue
            defaultValue={["lucy"]}
            addonAfter={<span>111</span>}
          >
            <ProSelect.Option value="jack">Jack (100)</ProSelect.Option>
            <ProSelect.Option value="lucy">Lucy (101)</ProSelect.Option>
          </ProSelect>
        </Col>
        <Col span={8}>
          <ProSelect
            multiple
            labelInValue
            defaultValue={["lucy"]}
            addonAfter={<span>111</span>}
          >
            <ProSelect.Option value="jack">Jack (100)</ProSelect.Option>
            <ProSelect.Option value="lucy">Lucy (101)</ProSelect.Option>
          </ProSelect>
        </Col>
        <Col span={8}>
          <ProSelect
            multiple
            labelInValue
            defaultValue={["lucy"]}
            placeholder="搜索过滤条件"
          >
            <ProSelect.Option value="jack">Jack (100)</ProSelect.Option>
            <ProSelect.Option value="lucy">Lucy (101)</ProSelect.Option>
          </ProSelect>
        </Col>
      </Row>

      <Row>
        <h3>IconPicker</h3>
        <Col span={8}>
          <IconPicker />
        </Col>
      </Row>

      <Row>
        <h3>AutoComplete</h3>
        <Col span={8}>
          <AutoComplete options={autoCompleteOptions} />
        </Col>
        <Col span={8}>
          <AutoComplete disabled options={autoCompleteOptions} />
        </Col>
      </Row>
      <Row>
        <h3>Cascader</h3>
        <Col span={8}>
          <ProCascader options={proCascaderOptions} />
        </Col>
      </Row>
      <Row>
        <h3>Cascader 但列表模式</h3>
        <Col span={8}>
          <ProCascader options={proCascaderOptions} menuMode="single" />
          <Apphaha />
          <ProCascader
            options={proCascaderOptions}
            menuMode="single"
            addonAfter={<span>addon</span>}
          />
        </Col>
      </Row> */}
    </Content>
  );
};

export default withThemedLayout({
  title: "Select 组件",
  name: "cascader",
  styleCount: 2,
})(SelectPage);

// const options = [
//   {
//     value: "zhejiang",
//     label: "Zhejiang",
//     children: [
//       {
//         value: "hangzhou",
//         label: "Hangzhou",
//         children: [
//           {
//             value: "xihu",
//             label: "West Lake",
//           },
//           {
//             value: "xihu1",
//             label: "West Lake",
//           },
//           {
//             value: "xihu2",
//             label: "West Lake",
//           },
//           {
//             value: "xihu3",
//             label: "West Lake",
//           },
//           {
//             value: "xihu4",
//             label: "West Lake",
//           },
//         ],
//       },
//     ],
//   },
//   {
//     value: "jiangsu",
//     label: "Jiangsu",
//     children: [
//       {
//         value: "nanjing",
//         label: "Nanjing",
//         children: [
//           {
//             value: "zhonghuamen",
//             label: "Zhong Hua Men",
//           },
//           {
//             value: "zhonghuamen1",
//             label: "Zhong Hua Men",
//           },
//           {
//             value: "zhonghuamen2",
//             label: "Zhong Hua Men",
//           },
//         ],
//       },
//     ],
//   },
// ];

// const autoCompleteOptions = new DataSet({
//   fields: [
//     {
//       name: "value",
//       type: "string",
//     },
//     {
//       name: "meaning",
//       type: "string",
//     },
//   ],
//   data: [
//     {
//       value: "1",
//       meaning: "1",
//     },
//     {
//       value: "12",
//       meaning: "12",
//     },
//     {
//       value: "123",
//       meaning: "123",
//     },
//   ],
// });

// const proCascaderOptions = [
//   {
//     value: "zhejiang",
//     meaning: "Zhejiang",
//     children: [
//       {
//         value: "hangzhou",
//         meaning: "Hangzhou",
//         children: [
//           {
//             value: "xihu",
//             meaning: "West Lake",
//           },
//         ],
//       },
//     ],
//   },
//   {
//     value: "jiangsu",
//     meaning: "Jiangsu",
//     children: [
//       {
//         value: "nanjing",
//         meaning: "Nanjing",
//         children: [
//           {
//             value: "zhonghuamen",
//             meaning: "Zhong Hua Men",
//           },
//         ],
//       },
//     ],
//   },
// ];
