import React from "react";
import { Row } from "choerodon-ui/pro";
import { Content } from "root/components/Page";
import Skeleton from "../../components/Skeleton";
import { withThemedLayout } from "../../utils/withThemedLayout";

const ButtonPage = () => {
  return (
    <Content>
      <h2 style={{ marginBottom: 20 }}>表单骨架屏</h2>
      <Row>
        <Skeleton
          active
          paragraph={{ rows: 4, width: "300px" }}
          title={{ width: 88 }}
        />
      </Row>
      <h2>表格骨架屏</h2>
      <Row>
        <Skeleton
          skeletonTitle={{ width: 88 }}
          grid={{ rows: 3, column: 3, gutter: 30 }}
          paragraph={false}
          active
          // paragraph={{ rows: 4, width: "300px" }}
        />
        <div style={{ marginTop: "16px" }}>
          <Skeleton
            active
            paragraph={{ rows: 1, width: "32%" }}
            skeletonTitle={false}
          />
        </div>
      </Row>
      {/* <Row>
        <h4>PRO</h4>
        <Skeleton active paragraph={{ rows: 4, width: '300px' }} title={{ width: '88px' }} />
      </Row>
      <Row>
        <h4>component</h4>
        <ComSkeleton active avatar paragraph title />
      </Row> */}
    </Content>
  );
};

export default withThemedLayout({
  title: "Skeleton 组件",
  name: "skeleton",
  styleCount: 1,
})(ButtonPage);
