import { configure } from "choerodon-ui";
import { Axios } from 'choerodon-ui/pro';
import moment from 'moment';
import uuid from 'uuid/v4';

const fetchData = [
  { fileId: 1, fileName: 'demo1.png', fileType: 'image/png', fileSize: 300000, fileUrl: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png' },
  { fileId: 2, fileName: 'demo1.png', fileType: 'image/png', fileSize: 300000, fileUrl: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png' },
];

// 使用附件功能前需要在全局配置中配置如下， 开发者无需配置
const AttachmentCfg = () => {
  configure({
    attachment: {
      defaultFileKey: 'file',
      defaultFileSize: 500 * 1024 * 1024,
      action({ isPublic }) {
        console.log('attachment action: isPublic', isPublic);
        return {
          url: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
          headers: {
            'Access-Control-Allow-Origin': '*',
          },
        };
      },
      fetchList({ attachmentUUID }) {
        return Axios.get(`/attachment/${attachmentUUID}`).then(response => {
          return fetchData.map(file => ({
            uid: file.fileId,
            name: file.fileName,
            size: file.fileSize,
            type: file.fileType,
            url: file.fileUrl,
            creationDate: moment(file.creationDate).toDate(),
            status: 'done',
          }));
        });
      },
      batchFetchCount(uuids) {
        return Axios.get(`/attachment-count/${uuids.sort().join(',')}`);
      },
      onRemove() {
        return new Promise((resolve) => setTimeout(() => resolve(Math.random() >= 0.1), 1000));
      },
      onOrderChange() {
        return Promise.resolve();
      },
      getAttachmentUUID() {
        return uuid();
      },
      getPreviewUrl({ attachment }) {
        return attachment.url;
      },
      getDownloadAllUrl({ attachmentUUID }) {
        return `/${attachmentUUID}`;
      },
      onUploadSuccess(resp, attachment) {
        attachment.load({
          name: resp.name,
          uid: uuid(),
          // url: resp.url,
        });
      },
      renderHistory() {
        return 'empty';
      },
    },
  });
};

export default AttachmentCfg;
