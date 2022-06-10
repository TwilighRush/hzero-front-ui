import { DatePicker as HDatePicker } from "hzero-ui";
import { getRequiredInputComponent } from "../Input";
import "./css";

const { RangePicker, WeekPicker, MonthPicker, YearPicker } = HDatePicker;

const DatePicker = getRequiredInputComponent(HDatePicker, "t-datepicker");

DatePicker.RangePicker = getRequiredInputComponent(RangePicker, "t-datepicker");
DatePicker.WeekPicker = getRequiredInputComponent(WeekPicker, "t-datepicker");
DatePicker.MonthPicker = getRequiredInputComponent(MonthPicker, "t-datepicker");
DatePicker.YearPicker = getRequiredInputComponent(YearPicker, "t-datepicker");

export default DatePicker;
