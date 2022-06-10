import React from "react";
import { Row, Col } from "choerodon-ui/pro";
import { Icon } from "choerodon-ui";
import { Content } from "root/components/Page";
import { withThemedLayout } from "../../utils/withThemedLayout";
import Upload from "../../components/Upload";
import message from "../../components/message";
import Modal from "../../components/Modal";
import Button from "../../components/ButtonPro";

const { Dragger } = Upload;

const boxStyle = {
  margin: 20,
  padding: 20,
  border: "1px solid rgba(90, 94, 154, 0.2)",
  marginLeft: 0,
  borderRadius: 5,
};
// 图片样式
const fileListPhoto = [
  {
    uid: -1,
    name: "xxx.png",
    status: "uploading",
    percent: 50,
    url:
      "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
    thumbUrl:
      "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
  },
  {
    uid: -2,
    name: "yyy.png",
    status: "done",
    url:
      "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
    thumbUrl:
      "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
  },
];
const propsPhoto = {
  action: "//jsonplaceholder.typicode.com/posts/",
  listType: "picture",
  showFileSize: true,
  onChange({ file, fileList }) {
    if (file.status !== "uploading") {
      console.log(file, fileList);
    }
  },
  defaultFileList: [...fileListPhoto],
};

// 1.点击上传
const ClickUpload = (props) => (
  <Upload {...props}>
    <Button funcType="raised" icon="upload">
      上传logo
    </Button>
    <div
      style={{
        fontSize: 12,
        color: "rgba(0,0,0,0.45)",
        lineHeight: "20px",
        marginTop: "4px",
      }}
    >
      最多上传n个附件,单个文件大小不得超过10M,支持附件格式
    </div>
  </Upload>
);

const clickUploadProps = {
  action: "//jsonplaceholder.typicode.com/posts/",
  onChange({ file, fileList }) {
    if (file.status !== "uploading") {
      console.log(file, fileList);
    }
  },
  showFileSize: true,
  defaultFileList: [
    {
      uid: 1,
      name: "xxx.png",
      status: "done",
      reponse: "Server Error 500", // custom error message to show
      url: "http://www.baidu.com/xxx.png",
    },
    {
      uid: 2,
      name: "yyy.png",
      status: "done",
      url: "http://www.baidu.com/yyy.png",
    },
    {
      uid: 3,
      name: "zzz.png",
      status: "error",
      reponse: "Server Error 500", // custom error message to show
      url: "http://www.baidu.com/zzz.png",
    },
    {
      uid: 4,
      name: "xxx.png",
      status: "uploading",
      percent: 50,
      url:
        "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
    },
  ],
};

// 2.拖拽上传
const DraggerUpload = (props) => (
  <Dragger {...props}>
    <p className="c7n-upload-drag-icon">
      <Icon type="inbox" />
    </p>
    <p className="c7n-upload-text">点击或将文件拖拽到这里上传</p>
    <p className="c7n-upload-hint">仅支持扩展名: doc/docx/pdf</p>
  </Dragger>
);
const draggerUploadProps = {
  name: "file",
  multiple: true,
  action: "//jsonplaceholder.typicode.com/posts/",
  onChange(info) {
    const { status } = info.file;
    if (status !== "uploading") {
      console.log(info.file, info.fileList);
    }
    if (status === "done") {
      message.success(`${info.file.name} file uploaded successfully.`);
    } else if (status === "error") {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
};

// 3.图片上传
class PicturesUpload extends React.Component {
  state = {
    previewVisible: false,
    previewImage: "",
    fileList: [
      {
        uid: -1,
        name: "xxx.png",
        status: "done",
        url:
          "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
      },
      {
        uid: -2,
        name: "xxx.png",
        status: "uploading",
        percent: 50,
        url:
          "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
      },
      {
        uid: -3,
        name: "zzz.png",
        status: "error",
        reponse: "Server Error 500", // custom error message to show
        url:
          "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
      },
    ],
  };

  handleCancel = () => this.setState({ previewVisible: false });

  handlePreview = (file) => {
    this.setState({
      previewImage: file.url || file.thumbUrl,
      previewVisible: true,
    });
  };

  handleChange = ({ fileList }) => this.setState({ fileList });

  render() {
    const { previewVisible, previewImage, fileList } = this.state;
    const uploadButton = (
      <div>
        <Icon type="add" style={{ color: "#0840F8", fontSize: "16px" }} />
        <div className="c7n-upload-text">上传图片</div>
      </div>
    );
    return (
      <div className="clearfix">
        <Upload
          action="//jsonplaceholder.typicode.com/posts/"
          listType="picture-card"
          fileList={fileList}
          onPreview={this.handlePreview}
          onChange={this.handleChange}
        >
          {fileList.length >= 10 ? null : uploadButton}
        </Upload>
        <Modal
          visible={previewVisible}
          footer={null}
          onCancel={this.handleCancel}
        >
          <img alt="example" style={{ width: "100%" }} src={previewImage} />
        </Modal>
      </div>
    );
  }
}

const UploadPage = () => {
  return (
    <Content>
      <h2>图片列表</h2>
      <div>
        <Upload {...propsPhoto}>
          <Button funcType="raised" icon="upload">
            上传文件
          </Button>
        </Upload>
        <br />
      </div>
      <h2 style={{ marginBottom: 20 }}>点击上传</h2>
      <div style={boxStyle}>
        <Row>
          <Col span={24}>
            <ClickUpload {...clickUploadProps} />
          </Col>
        </Row>
      </div>
      <h2 style={{ marginBottom: 20 }}>拖拽上传</h2>
      <div style={boxStyle}>
        <Row>
          <Col span={24}>
            <DraggerUpload {...draggerUploadProps} />
          </Col>
        </Row>
      </div>
      <h2 style={{ marginBottom: 20 }}>图片上传</h2>
      <div style={boxStyle}>
        <Row>
          <Col span={24}>
            <PicturesUpload />
          </Col>
        </Row>
      </div>
    </Content>
  );
};

export default withThemedLayout({
  title: "Upload 上传组件",
  name: "Upload",
  styleCount: 2,
})(UploadPage);
