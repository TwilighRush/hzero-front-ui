import { TimePicker } from "hzero-ui";
import { getRequiredInputComponent } from "../Input";
import "./css";

export default Object.assign(
  getRequiredInputComponent(TimePicker, "t-time-picker"),
  TimePicker
);
