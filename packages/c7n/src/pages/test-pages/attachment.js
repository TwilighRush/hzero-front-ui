import React, { Component } from "react";
import {
  DataSet,
  Row,
  Select,
  Switch,
  Table,
  Button,
  TextField,
  Attachment,
} from "choerodon-ui/pro";
import { Modal, Col, Icon } from "choerodon-ui";
import { Content } from "root/components/Page";
import { withThemedLayout } from "../../utils/withThemedLayout";
import Form from "../../components/FormPro";
import {
  attachmentAttrsDs,
  attachmentAttrsList,
} from "./store/attachmentAttrsDs";
// AttachmentCfg组件的全局配置
import AttachmentCfg from "./config/AttachmentCfg";
import "./style/index.less";

const { Group, Dragger } = Attachment;

const boxStyle = {
  margin: 20,
  padding: 20,
  border: "1px solid rgba(90, 94, 154, 0.2)",
  marginLeft: 0,
  borderRadius: 5,
};
AttachmentCfg();
const Base = () => {
  const [value, setValue] = React.useState(
    "4c74a34a-fa37-4e92-be9d-5cf726fb1472"
  );
  const props = {
    label: "技术附件",
    labelLayout: "float",
    accept: [".deb", ".txt", ".pdf", "image/*"],
    max: 9,
    value,
    onChange: setValue,
    showHistory: true,
    help: "支持文件类型： .deb .txt .pdf image/*",
  };

  return (
    <>
      <Row gutter={10}>
        <Col span={12}>
          <Attachment {...props} />
        </Col>
        <Col span={12}>
          <Attachment readOnly {...props} />
        </Col>
      </Row>
      <h2>拖拽上传</h2>
      <Dragger {...props}>
        <div style={{ padding: 20 }}>
          <p className="c7n-upload-drag-icon">
            <Icon type="inbox" />
          </p>
          <p style={{ paddingTop: 20, color: "rgba(0, 0, 0, 0.85)" }}>
            点击这里或者拖拽文件到这里上传
          </p>
          <p style={{ color: "rgba(0, 0, 0, 0.45)" }}>
            支持文件类型： .deb .txt .pdf image/*
          </p>
        </div>
      </Dragger>
    </>
  );
};
const Photo = () => {
  const [value, setValue] = React.useState(
    "4c74a34a-fa37-4e92-be9d-5cf726fb1472"
  );
  const props = {
    label: "技术附件",
    labelLayout: "float",
    accept: [".deb", ".txt", ".pdf", "image/*"],
    listType: "picture",
    value,
    onChange: setValue,
  };
  return (
    <Row gutter={10}>
      <Col span={12}>
        <Attachment {...props} />
      </Col>
      <Col span={12}>
        <Attachment readOnly {...props} />
      </Col>
    </Row>
  );
};
const { Sidebar } = Modal;
const valueEditor = (record) => {
  const { type, options } = record.data;
  if (["boolean", "callback", "ReactNode"].includes(type)) return false;
  if (["string", "enumerate"].includes(type)) {
    return options ? <Select options={options} /> : true;
  }
};

const columns = [
  { name: "name" },
  // { name: "nickName" },
  { name: "type" },
  { name: "value", editor: valueEditor },
  { name: "flag", editor: true },
  { name: "bindFor" },
];
let propValue = "4c74a34a-fa37-4e92-be9d-5cf726fb1472";

function setPropValue(newValue) {
  propValue = newValue;
}
const defaultProps = {
  label: "技术附件",
  labelLayout: "float",
  accept: [".deb", ".txt", ".pdf", "image/*"],
  max: 9,
  value: propValue,
  onChange: setPropValue,
  showHistory: true,
  help: "支持文件类型： .deb .txt .pdf image/*",
};

const attachmentds = new DataSet({
  data: [{ attachment: "88888888-fa37-4e92-be9d-5cf726fb1472" }],
  fields: [
    {
      name: "attachment",
      type: "attachment",
      label: <span>管理附件</span>,
      max: 9,
      required: true,
    },
  ],
});

const Bubble = () => {
  const [value, setValue] = React.useState();
  const props = {
    label: "技术附件",
    labelLayout: "float",
    accept: [".deb", ".txt", ".pdf", "image/*"],
    max: 9,
    value,
    onChange: setValue,
    viewMode: "popup",
  };

  React.useEffect(() => {
    setValue("4c74a34a-fa37-4e92-be9d-5cf726fb1472");
  }, []);

  return (
    <Row gutter={10}>
      <Col span={12}>
        <Attachment {...props} />
      </Col>
      <Col span={12}>
        <Attachment readOnly {...props} />
      </Col>
    </Row>
  );
};
// const commonDataSet = new DataSet({});
// 缓存已更改的属性  只有两个元素，前者属性名，后者属性值
const changedAttr = [];
class AttachmentAbout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isControlled: false,
      compProps: {},
      visible: false,
      searchStr: "",
      tableSpinning: false,
      isPublic: false,
    };
  }

  componentDidMount() {
    this.classifyAttrs();
  }

  initFunction() {
    // TODO
  }

  // 属性分类
  classifyAttrs = async () => {
    const res = await this.tableDataSet.validate();
    if (!res) return false;
    this.tableDataSet.reset();
    const dsData = this.tableDataSet.toData();
    const compPropsTemp = {};
    const fieldPropsTemp = {};
    const dsPropsTemp = {};
    const bothPropsTemp = {};
    dsData.forEach((item) => {
      const { flag, type, value, bindFor, name } = item;
      if (
        (type === "boolean" && flag === "default") ||
        (type !== "boolean" && (flag === "default" || flag === "false"))
      ) {
        return undefined;
      }
      // const valueTemp = type === 'boolean' ? flag === 'true' : value;
      let valueTemp;
      // 布尔类型判断flag是否为 'true'
      if (type === "boolean") {
        valueTemp = flag === "true";
      } else {
        // 非布尔类型直接返回 value
        valueTemp = value;
      }
      // 将不同绑定的属性放入对应集合
      if (bindFor.includes("comp") && bindFor.length === 1) {
        // 只能绑定到组件上的属性集合
        compPropsTemp[name] = valueTemp;
      } else if (bindFor.includes("field") && bindFor.length === 1) {
        // 只能绑定到字段上的属性集合
        fieldPropsTemp[name] = valueTemp;
      } else if (bindFor.includes("ds") && bindFor.length === 1) {
        // 只能绑定到dataSet上的属性集合
        dsPropsTemp[name] = valueTemp;
      } else {
        // 既可以绑定到字段上又可以绑定到组件上的属性集合
        bothPropsTemp[name] = valueTemp;
      }
    });
    // 根据是否为受控使用对属性进行分类处理
    if (this.state.isControlled) {
      // 创建绑定到组件上的dataSet
      const dsTemp = new DataSet({
        // 将只能绑定到ds上的属性解构到dataSet中去
        ...dsPropsTemp,
        fields: Array.from(new Map([]).values()).map((value) => {
          return {
            name: this.state.isControlled ? undefined : value.label,
            // 将只能绑定到字段上的属性结构到每一个字段上去
            ...fieldPropsTemp,
            ...value,
          };
        }),
      });
      // 受控状态下将既可以绑定到组件又可以绑定到字段上的属性统一绑定到组件上
      this.setState({ compProps: { ...bothPropsTemp, ...compPropsTemp } });
      // 给绑定到组件上的dataSet赋值
      this.commonDataSet = dsTemp;
    } else {
      const dsTemp = new DataSet({
        ...dsPropsTemp,
        fields: Array.from(new Map([]).values()).map((value) => {
          return {
            name: this.state.isControlled ? undefined : value.label,
            // 非受控状态下将即可以绑定到字段又可以绑定到组件上的属性统一绑定到字段上
            ...fieldPropsTemp,
            ...bothPropsTemp,
            ...value,
          };
        }),
      });
      // 非受控状态下组件只绑定只能绑定到组件上的属性
      this.setState({ compProps: compPropsTemp });
      this.commonDataSet = dsTemp;
    }
  };

  // 更新属性状态
  updateAttrs = ({ record, value }) => {
    // 拿到绑定到组件上的所有属性
    const compPropsTemp = this.state.compProps;
    const bindFor = record.get("bindFor");
    const type = record.get("type");
    const attrValue = record.get("value");
    const flag = record.get("flag");
    const recordName = record.get("name");

    // 由于从始至终都是操作的同一个data对象，因此在变更之后，需要清空之前保存的变更属性
    changedAttr.splice(0, changedAttr.length);
    // 由于每次操作属性表进行属性变更都会执行updateAttrs函数，因此每次changedAttr只会存储一个属性变更信息
    changedAttr.push(recordName, value);

    // 同步已经修改的属性信息
    attachmentAttrsList.map((eachAttr) => {
      const [changedAttr0, changedAttr1] = changedAttr;
      if (eachAttr.name === changedAttr0) {
        // 针对不同的属性类型，做不用数据同步处理
        if (eachAttr.type === "boolean") {
          Object.assign(eachAttr, { flag: changedAttr1 });
        } else {
          Object.assign(eachAttr, { value: changedAttr1 });
        }
        // 若是已更改的属性值，则将属性值同步到最新的属性集合数据源中
        return eachAttr;
      } else {
        return eachAttr;
      }
    });

    // 更新的属性只能绑定到组件，或者既能绑定到组件又能绑定到字段并且在受控状态下时，对compProps的对应属性进行修改
    if (
      (bindFor.includes("comp") && bindFor.length === 1) ||
      (bindFor.length > 1 && this.state.isControlled)
    ) {
      // 属性为布尔类型并且为默认值  或者  不为布尔类型并且阀门为关闭或默认状态
      const condition =
        (type === "boolean" && flag === "default") ||
        (type !== "boolean" && flag !== "true");
      if (condition) {
        // 删除相应属性
        delete compPropsTemp[recordName];
      } else {
        // compPropsTemp[recordName] = record.get('type') === 'boolean' ? value === 'true' : value;
        // 属性为布尔值将值更新成 value === 'true' 属性不为布尔值 将值赋为正常 value
        compPropsTemp[recordName] =
          type === "boolean" ? flag === "true" : attrValue;
      }
    }
    // 将更新后的属性集合重新赋值到state
    this.setState({ compProps: compPropsTemp });
    // 当属性只能绑定到 ds 或者 field 或者为 ds 状态时
    if (
      (bindFor.includes("ds") && bindFor.length === 1) ||
      (bindFor.includes("field") && bindFor.length === 1) ||
      (bindFor.length > 1 && !this.state.isControlled)
    ) {
      // 遍历字段  将对应的属性进行修改
      this.commonDataSet.fields.forEach((item) => {
        // 根据类型和属性阀门状态 对该属性进行去除
        if (
          (type === "boolean" && flag === "default") ||
          (type !== "boolean" && flag !== "true")
        ) {
          item.set(recordName, undefined);
        } else {
          // 对每个字段的对应属性 更新状态
          item.set(
            recordName,
            record.get("type") === "boolean"
              ? record.get("flag") === "true"
              : record.get("value")
          );
        }
      });
    }
  };

  tableDataSet = new DataSet({
    ...attachmentAttrsDs,
    events: {
      update: this.updateAttrs,
    },
  });

  // 根据属性名搜索属性
  searchAttrName = () => {
    this.setState({ tableSpinning: true });
    this.tableDataSet.records.map((record) => {
      if (
        record.get("name").includes(this.state.searchStr) ||
        this.state.searchStr.trim().length === 0
      ) {
        record.set("searchFlag", true);
      } else {
        record.set("searchFlag", false);
      }
      return record;
    });
    this.setState({ tableSpinning: false });
  };

  // 重置搜索结果
  resetSearch = () => {
    this.setState({ tableSpinning: true });
    this.setState({ searchStr: "" });
    this.tableDataSet.records.map((record) => {
      record.set("searchFlag", true);
      return record;
    });
    this.setState({ tableSpinning: false });
  };

  componentWillUnmount() {}

  componentDidUpdate(preProps, preState) {
    if (this.state.isControlled !== preState.isControlled) {
      // 是否受控状态改变时进行属性分类
      this.classifyAttrs();
    }
  }

  render() {
    return (
      <Content>
        <div style={boxStyle}>
          <h2>气泡显示</h2>
          <Bubble />
        </div>
        <div style={boxStyle}>
          <h2>图片</h2>
          <Photo />
        </div>
        <div style={boxStyle}>
          <h2>基础</h2>
          <Base />
        </div>
        <Button
          style={{ position: "fixed", top: "90px", left: "50%" }}
          onClick={() => this.setState({ visible: true })}
        >
          Attachment.Group属性控制面板
        </Button>
        <Sidebar
          visible={this.state.visible}
          onCancel={() => this.setState({ visible: false })}
          onOk={() => this.setState({ visible: false })}
          width={1000}
          footer={
            <>
              <Button
                funcType="raised"
                onClick={() => this.setState({ visible: false })}
              >
                关闭
              </Button>
            </>
          }
        >
          <Form columns={2}>
            <Switch
              checked={this.state.isControlled}
              unCheckedChildren="数据源"
              onChange={(val) => this.setState({ isControlled: val })}
              label="受控/数据源"
            >
              受控
            </Switch>
            <div className="search-box">
              <TextField
                value={this.state.searchStr}
                onInput={(e) => this.setState({ searchStr: e.target.value })}
                label="属性搜索"
                placeholder="输入属性名(区分大小写)"
                onEnterDown={this.searchAttrName}
              />
              <Button color="primary" onClick={this.searchAttrName}>
                搜索
              </Button>
              <Button color="default" onClick={this.resetSearch}>
                重置
              </Button>
            </div>
            <Switch
              checked={this.state.isPublic}
              unCheckedChildren="false"
              onChange={(val) => this.setState({ isPublic: val })}
              label="isPublic"
            >
              true
            </Switch>
          </Form>
          <div style={{ height: "500px" }}>
            <Table
              columns={columns}
              dataSet={this.tableDataSet}
              pagination={false}
              showRemovedRow={false}
              autoHeight={{ type: "minHeight", diff: 0 }}
              spin={{ spinning: this.state.tableSpinning }}
              filter={(record) => {
                return (
                  record.get("searchFlag") === true ||
                  record.get("searchFlag") === undefined
                );
              }}
            />
          </div>
        </Sidebar>
        <Row>
          <h2>Attachment单独使用(非属性控制)</h2>
          <Attachment
            label="技术附件"
            value={propValue}
            onChange={setPropValue}
            {...defaultProps}
            isPublic={this.state.isPublic}
          />
          <Attachment
            dataSet={attachmentds}
            name="attachment"
            {...defaultProps}
            isPublic={this.state.isPublic}
          />
        </Row>
        <br />
        <h2>Attachment.Group(属性整体控制)</h2>
        <Form columns={2}>
          <Group colSpan={1} label="分组1" {...this.state.compProps}>
            <Attachment
              label="技术附件"
              value={propValue}
              onChange={setPropValue}
              {...defaultProps}
              isPublic={this.state.isPublic}
            />
            <Attachment
              dataSet={attachmentds}
              name="attachment"
              {...defaultProps}
              isPublic={this.state.isPublic}
            />
          </Group>
          <Group colSpan={1} label="分组2" {...this.state.compProps}>
            <Attachment
              label="技术附件"
              value={propValue}
              onChange={setPropValue}
              {...defaultProps}
              isPublic={this.state.isPublic}
            />
            <Attachment
              dataSet={attachmentds}
              name="attachment"
              {...defaultProps}
              isPublic={this.state.isPublic}
            />
          </Group>
        </Form>
      </Content>
    );
  }
}

// 使用附件功能前需要在全局配置中配置如下， 开发者无需配置
// configure({
//   attachment: {
//     defaultFileKey: "file",
//     defaultFileSize: 500 * 1024 * 1024,
//     action: {
//       url: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
//       headers: {
//         "Access-Control-Allow-Origin": "*",
//       },
//     },
//     fetchList({ attachmentUUID }) {
//       return Axios.get(`/attachment/${attachmentUUID}`).then(response => {
//         return response.map(file => ({
//           uid: file.fileId,
//           name: file.fileName,
//           size: file.fileSize,
//           type: file.fileType,
//           url: file.fileUrl,
//           creationDate: moment(file.creationDate).toDate(),
//           status: "done",
//         }));
//       });
//     },
//     batchFetchCount(uuids) {
//       return Axios.get(`/attachment-count/${uuids.sort().join(",")}`);
//     },
//     onRemove() {
//       return new Promise(resolve =>
//         setTimeout(() => resolve(Math.random() >= 0.1), 1000)
//       );
//     },
//     onOrderChange() {
//       return Promise.resolve();
//     },
//     getAttachmentUUID() {
//       return uuid();
//     },
//     getPreviewUrl({ attachment }) {
//       return attachment.url;
//     },
//     getDownloadAllUrl({ attachmentUUID }) {
//       return `/${attachmentUUID}`;
//     },
//     onUploadSuccess(resp, attachment) {
//       attachment.load({
//         name: resp.name,
//         uid: uuid(),
//         // url: resp.url,
//       });
//     },
//     renderHistory() {
//       return "empty";
//     },
//   },
// });

export default withThemedLayout({
  title: "Attchment 附件",
  name: "input",
  styleCount: 2,
})(AttachmentAbout);
