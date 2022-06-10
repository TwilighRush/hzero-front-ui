import React, { useState } from "react";
import { RichText, Switch } from "choerodon-ui/pro";
import { withThemedLayout } from "../../utils/withThemedLayout";
import { Content } from "root/components/Page";

const style = { height: 200 };
const boxStyle = {
  margin: 20,
  padding: 20,
  border: "1px solid rgba(90, 94, 154, 0.2)",
  marginLeft: 0,
  borderRadius: 5,
};
const RichTextPage = () => {
  const [readOnly, setReadOnly] = useState(false);

  const handleChange = (value) => {
    setReadOnly(value);
  };
  return (
    <Content>
      <h2>基础</h2>
      {/* <div style={boxStyle}> */}
      <RichText
        readOnly={readOnly}
        style={style}
        defaultValue={[{ insert: "readOnly" }]}
      />
      {/* <Switch style={{ paddingTop: 10 }} onChange={handleChange} checked={readOnly}>readOnly</Switch> */}
      {/* </div> */}
    </Content>
  );
};

export default withThemedLayout({
  title: "RichText 富文本编辑器",
  name: "richtext",
  styleCount: 2,
})(RichTextPage);
