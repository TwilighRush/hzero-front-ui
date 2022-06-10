import React, { useRef } from "react";
import { BackTop } from "hzero-ui";
import { Content } from "root/components/Page";
import { withThemedLayout } from "../../utils/withThemedLayout";

const BackTopPage = () => {
  const divref = useRef(null);

  return (
    <>
      <Content>
        <div ref={divref} style={{ height: "70vh", overflowY: "scroll" }}>
          <div style={{ height: 2000 }}>下滑出现返回顶部</div>
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
