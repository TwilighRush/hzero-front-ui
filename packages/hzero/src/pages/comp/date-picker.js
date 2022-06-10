import React from "react";

import { Row, Col } from "hzero-ui";
import DatePicker from "../../components/DatePicker";
import { Content } from "root/components/Page";
import { withThemedLayout } from "../../utils/withThemedLayout";

const { YearPicker, MonthPicker, RangePicker, WeekPicker } = DatePicker;

const DatePickerPage = () => {
  return (
    <>
      <Content>
        <h2>DatePicker</h2>
        <Row gutter={24}>
          <Col span={8}>
            <DatePicker allowClear />
          </Col>
          <Col span={8}>
            <DatePicker showTime allowClear />
          </Col>
          <Col span={8}>
            <DatePicker showTime allowClear disabled />
          </Col>
        </Row>
        <h2>YearPicker</h2>
        <Row gutter={24}>
          <Col span={8}>
            <YearPicker placeholder="Select year" allowClear />
          </Col>
          <Col span={8}>
            <YearPicker placeholder="Select year" allowClear />
          </Col>
        </Row>
        <h2>MonthPicker</h2>
        <Row gutter={24}>
          <Col span={8}>
            <MonthPicker placeholder="Select month" allowClear />
          </Col>
          <Col span={8}>
            <MonthPicker placeholder="Select month" allowClear />
          </Col>
        </Row>
        <h2>RangePicker</h2>
        <Row gutter={24}>
          <Col span={8}>
            <RangePicker allowClear />
          </Col>
          <Col span={8}>
            <RangePicker allowClear />
          </Col>
        </Row>
        <h2>WeekPicker</h2>
        <Row gutter={24}>
          <Col span={8}>
            <WeekPicker placeholder="Select week" />
          </Col>
          <Col span={8}>
            <WeekPicker placeholder="Select week" />
          </Col>
        </Row>
      </Content>
    </>
  );
};

export default withThemedLayout({
  name: "input",
  styleCount: 2,
  title: "DatePicker 组件",
})(DatePickerPage);
