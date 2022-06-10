import React from "react";
import { Row, Col, DataSet } from "choerodon-ui/pro";
import moment from "moment";
import { Content } from "root/components/Page";
import { withThemedLayout } from "../../utils/withThemedLayout";
import DatePicker from "../../components/DatePickerPro";
import IconPicker from "../../components/IconPickerPro";
import DateTimePicker from "../../components/DateTimePickerPro";
import TimePicker from "../../components/TimePickerPro";
import ColorPicker from "../../components/ColorPickerPro";
import MonthPicker from "../../components/MonthPickerPro";
import YearPicker from "../../components/YearPickerPro";
import WeekPicker from "../../components/WeekPickerPro";
// const {
//   RangePicker,
//   MonthPicker: ComMonthPicker,
//   WeekPicker: ComWeekPicker,
// } = ComDatePicker;

function handleChange(value, oldValue) {
  console.log("[multiple]", value, "[oldValue]", oldValue);
}

function handleDataSetChange({ record, name, value, oldValue }) {
  console.log(
    "[dataset multiple]",
    value,
    "[oldValue]",
    oldValue,
    `[record.get('${name}')]`,
    record.get(name)
  );
}

class App extends React.Component {
  ds = new DataSet({
    autoCreate: true,
    fields: [
      {
        name: "date",
        type: "date",
        defaultValue: "1984-11-22,2019-08-09",
        required: true,
        multiple: ",",
      },
    ],
    events: {
      update: handleDataSetChange,
    },
  });

  render() {
    return (
      <Row gutter={10}>
        <Col span={12}>
          <DatePicker dataSet={this.ds} name="date" placeholder="数据源多选" />
        </Col>
        <Col span={12}>
          <DatePicker
            multiple
            onChange={handleChange}
            placeholder="多选"
            defaultValue={[new Date()]}
          />
        </Col>
      </Row>
    );
  }
}
const boxStyle = {
  margin: 20,
  padding: 20,
  border: "1px solid rgba(90, 94, 154, 0.2)",
  marginLeft: 0,
  borderRadius: 5,
};
const DatePickerPage = () => {
  const ds = new DataSet({
    autoCreate: true,
    fields: [
      {
        name: "date",
        type: "date",
        range: ["start", "end"],
        defaultValue: { start: "1984-11-22", end: new Date() },
        required: true,
        validator: true,
      },
      {
        name: "date2",
        type: "date",
        range: true,
        defaultValue: ["1985-11-22", new Date()],
        validator: true,
      },
      {
        name: "multipleDate",
        type: "date",
        range: true,
        multiple: true,
        required: true,
      },
      {
        name: "time",
        type: "time",
        range: true,
      },
    ],
  });
  return (
    <Content>
      <h2>DatePicker 时间选择器</h2>
      <h4 style={{ marginBottom: 20 }}>DatePicker-Pro</h4>
      <div style={boxStyle}>
        <h5 style={{ marginBottom: 10 }}>最大最小值禁用</h5>
        <Col span={12}>
          <DateTimePicker
            trigger="click"
            min={moment()}
            placeholder="Select date time"
          />
        </Col>
        <h5 style={{ marginBottom: 10 }}>基础</h5>
        <Row gutter={10}>
          <Col style={{ marginBottom: 10 }} span={12}>
            <DatePicker
              placeholder="Select date"
              onChange={handleChange}
              required
            />
          </Col>
          <Col style={{ marginBottom: 10 }} span={12}>
            <MonthPicker placeholder="Select month" onChange={handleChange} />
          </Col>
          <Col style={{ marginBottom: 10 }} span={12}>
            <YearPicker placeholder="Select year" onChange={handleChange} />
          </Col>
          <Col style={{ marginBottom: 10 }} span={12}>
            <DateTimePicker
              mode="dateTime"
              placeholder="修改这个"
              trigger="click"
              onChange={handleChange}
            />
          </Col>
          <Col style={{ marginBottom: 10 }} span={12}>
            <TimePicker placeholder="Select time" onChange={handleChange} />
          </Col>
          <Col style={{ marginBottom: 10 }} span={12}>
            <WeekPicker placeholder="Select week" onChange={handleChange} />
          </Col>
        </Row>
        <h5 style={{ margin: "10px 0" }}>前置后置标签</h5>
        <Row>
          <Col span={8}>
            <DatePicker
              addonAfter={<span>addonAfter</span>}
              addonBefore={<span>addonAfter</span>}
            />
          </Col>
        </Row>
        <h5 style={{ margin: "10px 0" }}>禁用</h5>
        <Row>
          <Col style={{ marginBottom: 10 }} span={12}>
            <DatePicker placeholder="禁用" disabled />
          </Col>
          <Col style={{ marginBottom: 10 }} span={12}>
            <WeekPicker
              placeholder="Select week"
              onChange={handleChange}
              disabled
            />
          </Col>
        </Row>
        <h5 style={{ margin: "10px 0" }}>多值</h5>
        <Row>
          <Col style={{ marginBottom: 10 }} span={12}>
            <DatePicker multiple placeholder="placeholder" />
          </Col>
        </Row>
        <Row>
          <App />
        </Row>
        <h5 style={{ margin: "10px 0" }}>范围</h5>
        <Row gutter={10}>
          <Col style={{ marginBottom: 10 }} span={24}>
            <DatePicker
              dataSet={ds}
              name="date"
              placeholder={["Start Date", "End Date"]}
            />
          </Col>
          <Col style={{ marginBottom: 10 }} span={24}>
            <DatePicker
              dataSet={ds}
              name="date2"
              placeholder={["Start Date", "End Date"]}
            />
          </Col>
          <Col style={{ marginBottom: 10 }} span={24}>
            <DatePicker
              range
              disabled
              defaultValue={["1986-11-22", new Date()]}
              placeholder={["Start Date", "End Date"]}
              onChange={handleChange}
            />
          </Col>
          <Col style={{ marginBottom: 10 }} span={24}>
            <DatePicker
              range={["start", "end"]}
              defaultValue={{ start: "1987-11-22", end: new Date() }}
              placeholder={["Start Date", "End Date"]}
              onChange={handleChange}
            />
          </Col>
          <Col style={{ marginBottom: 10 }} span={24}>
            <TimePicker dataSet={ds} name="time" placeholder="Choose Time" />
          </Col>
          <Col style={{ marginBottom: 10 }} span={24}>
            <DatePicker
              dataSet={ds}
              name="multipleDate"
              placeholder="Choose Date"
            />
          </Col>
        </Row>
        <Row>
          <Col style={{ marginBottom: 10 }} span={12}>
            <DatePicker
              range={["start", "end"]}
              defaultValue={{ start: "1984-11-22", end: new Date() }}
              placeholder={["Start Date", "End Date"]}
            />
          </Col>
          <Col style={{ marginBottom: 10 }} span={12}>
            <TimePicker
              range={["start", "end"]}
              placeholder={["Start Time", "End Time"]}
            />
          </Col>
        </Row>
      </div>
      {/* <h4 style={{ marginBottom: 20 }}>DatePicker - Com</h4>
      <div style={boxStyle}>
        <h5 style={{ marginBottom: 10 }}>基础</h5>
        <div>
          <Row>
            <Col span={12}>
              <h6>DatePicker</h6>
              <ComDatePicker
                style={{ margin: '5 0' }}
                label="日期框"
              />
            </Col>
            <Col span={12}>
              <h6>MonthPicker</h6>
              <ComMonthPicker placeholder="Select month" />
            </Col>
          </Row>

          <Row>
            <Col span={12}>
              <h6>RangePicker</h6>
              <RangePicker label="日期范围" />
            </Col>
            <Col span={12}>
              <h6>WeekPicker</h6>
              <ComWeekPicker
                placeholder="Select week"
                label="选择周"
              />
            </Col>
          </Row>
        </div>
        <h5 style={{ margin: '10px 0' }}>禁用</h5>
        <div>
          <Row>
            <Col span={12}>
              <h6>DatePicker</h6>
              <ComDatePicker
                style={{ margin: '5 0' }}
                label="日期框"
                disabled
              />
            </Col>
            <Col span={12}>
              <h6>MonthPicker</h6>
              <ComMonthPicker placeholder="Select month" disabled />
            </Col>
          </Row>
          <Row>
            <Col span={12}>
              <h6>RangePicker</h6>
              <RangePicker label="日期范围" disabled />
            </Col>
            <Col span={12}>
              <h6>WeekPicker</h6>
              <ComWeekPicker
                placeholder="Select week"
                label="选择周"
                disabled
              />
            </Col>
          </Row>
        </div>
        <h5 style={{ margin: '10px 0' }}>三种大小</h5>
        <Row>
          <Col span={12}>
            <h6>DatePicker</h6>
            <ComDatePicker
              style={{ margin: '5 0' }}
              label="正常日期框"
              placeholder="正常日期框"
            />
          </Col>
          <Col span={12}>
            <h6>DatePicker</h6>
            <ComDatePicker
              style={{ margin: '5 0' }}
              label="大日期框"
              placeholder="大日期框"
              size="large"
            />
          </Col>
          <Col span={12}>
            <h6>DatePicker</h6>
            <ComDatePicker
              style={{ margin: '5 0' }}
              label="小日期框"
              placeholder="小日期框"
              size="small"
            />
          </Col>
        </Row>
      </div> */}
      <h2 style={{ marginBottom: 20 }}>IconPicker-pro 图标选择框</h2>
      <div style={boxStyle}>
        <Row gutter={12}>
          <Col span={8}>
            <IconPicker />
          </Col>
          <Col span={8}>
            <IconPicker disabled />
          </Col>
          <Col span={8}>
            <IconPicker
              addonAfter={<span>addonAfter</span>}
              addonBefore={<span>addonAfter</span>}
            />
          </Col>
        </Row>
      </div>
      <h2 style={{ marginBottom: 20 }}>ColorPicker-pro 颜色选择器</h2>
      <div style={boxStyle}>
        <Row gutter={12}>
          <Col span={8}>
            <ColorPicker />
          </Col>
          <Col span={8}>
            <ColorPicker disabled />
          </Col>
          <Col span={8}>
            <ColorPicker
              label="Color Picker"
              addonAfter={<span>addonAfter</span>}
              addonBefore={<span>addonAfter</span>}
            />
          </Col>
        </Row>
      </div>
      <h2 style={{ marginBottom: 20 }}>TimePicker 时间选择框</h2>
      <h4 style={{ marginBottom: 20 }}>TimePicker- pro 时间选择框</h4>
      <div style={boxStyle}>
        <Row gutter={12}>
          <Col span={8}>
            <TimePicker />
          </Col>
          <Col span={8} />
        </Row>
      </div>
      {/* <h4 style={{ marginBottom: 20, marginTop: 20 }}>TimePicker- Com 时间选择框</h4>
      <div style={boxStyle}>
        <h5 style={{ marginBottom: 10 }}>基础</h5>
        <ComTimePicker />
        <h5 style={{ marginBottom: 10, marginTop: 10 }}>三种大小</h5>
        <div>
          <ComTimePicker defaultValue={moment('12:08:23', 'HH:mm:ss')} size="large" />
          <ComTimePicker defaultValue={moment('12:08:23', 'HH:mm:ss')} style={{ margin: '10px 0' }} />
          <ComTimePicker defaultValue={moment('12:08:23', 'HH:mm:ss')} size="small" />
        </div>
        <h5 style={{ marginBottom: 10, marginTop: 10 }}>禁用</h5>
        <ComTimePicker defaultValue={moment('12:08:23', 'HH:mm:ss')} disabled />,
      </div> */}
    </Content>
  );
};

export default withThemedLayout({
  title: "Checkbox 组件",
  name: "input",
  styleCount: 2,
})(DatePickerPage);
