import React, { useState, useCallback } from "react";
import {
  // ImageCrop,
  // Avatar,
  Icon,
  // Modal,
  // Upload
} from "choerodon-ui";
import { Content } from "root/components/Page";
import { withThemedLayout } from "../../utils/withThemedLayout";

import ImageCrop from "../../components/ImageCrop";
import Avatar from "../../components/Avatar";
import Modal from "../../components/Modal";
import Upload from "../../components/Upload";

const boxStyle = {
  margin: 20,
  padding: 20,
  border: "1px solid rgba(90, 94, 154, 0.2)",
  marginLeft: 0,
  borderRadius: 5,
};
const { AvatarUploader } = ImageCrop;
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
        <Icon type="add" />
        <div className="c7n-upload-text">Upload</div>
      </div>
    );
    return (
      <div className="clearfix">
        <ImageCrop grid aspect={12 / 13}>
          <Upload
            action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
            listType="picture-card"
            fileList={fileList}
            onPreview={this.handlePreview}
            onChange={this.handleChange}
            requestFileKeys="imageCropArea"
          >
            {fileList.length >= 3 ? null : uploadButton}
          </Upload>
        </ImageCrop>
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
const ImageCropPage = () => {
  const [visable, setVisiable] = useState(false);

  const hanleClick = useCallback(() => {
    setVisiable(true);
  }, []);

  const hanleOk = useCallback(() => {
    setVisiable(false);
  }, []);

  const hanleCancel = useCallback(() => {
    setVisiable(false);
    console.log("close");
  }, []);
  return (
    <Content>
      <h2>尚未修改，待组件库支持</h2>
      <h2>基础</h2>
      <div style={boxStyle}>
        <PicturesWall />
      </div>
      <h2>头像</h2>
      <div style={boxStyle}>
        <Avatar onClick={hanleClick} style={{ backgroundColor: "#87d068" }}>
          我绿了
        </Avatar>
        <AvatarUploader
          onUploadOk={hanleOk}
          onClose={hanleCancel}
          uploadUrl="https://www.mocky.io/v2/5cc8019d300000980a055e76"
          visible={visable}
        />
      </div>
    </Content>
  );
};

export default withThemedLayout({
  title: "ImageCrop 评分",
  name: "imageCrop",
})(ImageCropPage);
