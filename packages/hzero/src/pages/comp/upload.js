import React from "react";
import { Icon } from "hzero-ui";
import { Content } from "root/components/Page";
import { withThemedLayout } from "../../utils/withThemedLayout";
import Button from "../../components/Button";
import Upload from "../../components/Upload";
import Modal from "../../components/Modal";

const { Dragger } = Upload;
const boxStyle = {
  margin: 20,
  padding: 20,
  border: "1px solid rgba(90, 94, 154, 0.2)",
  marginLeft: 0,
  borderRadius: 5,
};
const props = {
  action: "//jsonplaceholder.typicode.com/posts/",
  onChange({ file, fileList }) {
    if (file.status !== "uploading") {
      console.log(file, fileList);
    }
  },
  defaultFileList: [
    {
      uid: 1,
      name: "xxx.png",
      status: "done",
      response: "Server Error 500", // custom error message to show
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
      response: "Server Error 500", // custom error message to show
      url: "http://www.baidu.com/zzz.png",
    },
  ],
};
const props1 = {
  name: "file",
  multiple: true,
  action: "//jsonplaceholder.typicode.com/posts/",
};
class PicturesWall extends React.Component {
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
        uid: 2,
        name: "yyy.png",
        status: "uploading",
        url:
          "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
      },
      {
        uid: 3,
        name: "zzz.png",
        status: "error",
        response: "Server Error 500", // custom error message to show
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
        <Icon type="plus" />
        <div className="ant-upload-text">Upload</div>
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
          showUploadList={{
            removePopConfirmTitle: "是否删除",
          }}
        >
          {fileList.length >= 5 ? null : uploadButton}
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
    <>
      <Content>
        <h2>基础</h2>
        <div style={boxStyle}>
          <Upload {...props}>
            <Button>
              <Icon type="upload" /> Upload
            </Button>
          </Upload>
        </div>
        <h2>拖拽上传</h2>
        <div style={boxStyle}>
          <Dragger {...props1}>
            <p className="ant-upload-drag-icon">
              <Icon type="inbox" />
            </p>
            <p className="ant-upload-text">
              Click or drag file to this area to upload
            </p>
            <p className="ant-upload-hint">
              Support for a single or bulk upload. Strictly prohibit from
              uploading company data or other band files
            </p>
          </Dragger>
        </div>
        <h2>图片上传</h2>
        <div style={boxStyle}>
          <PicturesWall />
        </div>
      </Content>
    </>
  );
};
export default withThemedLayout({
  title: "upload 上传",
  name: "upload",
  styleCount: 1,
})(UploadPage);
