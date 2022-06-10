import React, { useRef } from "react";
import { BackTop, Icon } from "choerodon-ui";
import { Content } from "root/components/Page";
import { withThemedLayout } from "../../utils/withThemedLayout";

const BackTopPage = () => {
  const divref = useRef(null);
  return (
    <>
      <Content>
        <div ref={divref} style={{ height: "100%", overflow: "scroll" }}>
          <div style={{ height: 2000 }}>
            显示一点内容(需要组件库支持,暂时不能呈现)
            <Icon type="people" />
          </div>
        </div>
        <div>
          <BackTop
            visibilityHeight={1}
            target={() => divref.current || window}
          />
        </div>
      </Content>
    </>
  );
};

export default withThemedLayout({
  title: "backtop 返回顶部",
  name: "backtop",
})(BackTopPage);
