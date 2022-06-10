import React from "react";
import { Row, DataSet } from "choerodon-ui/pro";
import { Content } from "root/components/Page";
import Range from "../../components/RangePro";
import { withThemedLayout } from "../../utils/withThemedLayout";

const RangePage = () => {
  // function handleDataSetChange({ value, oldValue }) {
  //   console.log('[dataset]', value, '[oldValue]', oldValue);
  // }
  const ds = new DataSet({
    autoCreate: true,
    fields: [
      {
        name: "rangerange",
        defaultValue: [15, 20],
        max: 100,
        step: 1,
        range: true,
      },
      {
        name: "norange",
        defaultValue: 0,
        max: 100,
        step: 1,
      },
    ],
    // events: {
    //   update: handleDataSetChange,
    // },
  });
  return (
    <Content>
      <h3 style={{ marginBottom: 20 }}>Range</h3>
      <Row span={12}>
        <Range marks={{ 0: 0, 50: 50, 100: 100 }} />
      </Row>
      <br />
      <Row span={12}>
        <Range range marks={{ 0: 0, 20: 20, 100: 100 }} />
      </Row>
      <br />
      <Row span={12}>
        <Range defaultValue={[0, 30]} range marks={{ 0: 0, 100: 100 }} />
      </Row>
      <br />
      <br />
      <h4>ds控制</h4>
      <Row span={12}>
        <Range dataSet={ds} name="norange" />
      </Row>
      <br />
      <Row span={12}>
        <Range dataSet={ds} name="norange" marks={{ 0: 0, 15: 15, 100: 100 }} />
      </Row>
      <br />
      <Row span={12}>
        <Range
          dataSet={ds}
          name="rangerange"
          marks={{ 0: 0, 15: 15, 100: 100 }}
        />
      </Row>
      <br />
      <div style={{ height: 200, width: 200 }}>
        <Range
          vertical
          min={0}
          max={100}
          step={5}
          range
          marks={{ 0: 0, 15: 15, 100: 100 }}
        />
      </div>
    </Content>
  );
};

export default withThemedLayout({
  title: "Range 组件",
  name: "range",
  styleCount: 0,
})(RangePage);
