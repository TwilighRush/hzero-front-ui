import React from "react";
import { Row, Col } from "hzero-ui";
import { Content } from "root/components/Page";
import { withThemedLayout } from "../../utils/withThemedLayout";
import Pagination from "../../components/Pagination";

class PaginationPage extends React.Component {
  render() {
    return (
      <>
        <Content>
          <h4>样式一</h4>
          <Row type="flex" justify="center" style={{ marginBottom: 60 }}>
            <Col span={12}>
              <Pagination defaultCurrent={3} total={500} />
            </Col>
          </Row>
          <h4>样式二</h4>
          <Row type="flex" justify="center" style={{ marginBottom: 60 }}>
            <Col span={12}>
              <Pagination
                theme={{ style: "theme-two" }}
                showSizeChanger
                showTotal={(total) => `共 ${total} 条`}
                defaultCurrent={3}
                total={500}
              />
            </Col>
          </Row>
          <h4>样式三</h4>
          <Row type="flex" justify="center" style={{ marginBottom: 60 }}>
            <Col span={12}>
              <Pagination
                theme={{ style: "theme-three" }}
                showSizeChanger
                showQuickJumper
                defaultCurrent={3}
                total={500}
              />
            </Col>
          </Row>
          <h4>迷你分页</h4>
          <Row type="flex" justify="center" style={{ marginBottom: 60 }}>
            <Col span={12}>
              <Row style={{ marginBottom: 10 }}>
                <Pagination size="small" total={50} />
              </Row>
              <Row style={{ marginBottom: 10 }}>
                <Pagination
                  size="small"
                  total={50}
                  showSizeChanger
                  showQuickJumper
                />
              </Row>
              <Row style={{ marginBottom: 10 }}>
                <Pagination
                  size="small"
                  total={50}
                  showTotal={(total) => `共 ${total} 条`}
                />
              </Row>
            </Col>
          </Row>
        </Content>
      </>
    );
  }
}

export default withThemedLayout({
  title: "Pagination 组件",
  name: "pagination",
  styleCount: 3,
})(PaginationPage);
