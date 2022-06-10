import React from "react";
import styled from "styled-components";
import { Row, Col } from "hzero-ui";
import { Content, Header } from "root/components/Page";
import TimePicker from "../../components/TimePicker";

const StyledContent = styled(Content)`
  h5 {
    margin-top: 8px;
    font-weight: normal;
    font-size: 14px;
    color: #666;
  }
`;

const DatePickerPage = () => {
  return (
    <>
      <Header title="TimePicker 组件" />
      <StyledContent>
        <h5>DatePicker</h5>
        <Row gutter={24}>
          <Col span={8}>
            <TimePicker />
          </Col>
          <Col span={8}>
            <TimePicker />
          </Col>
        </Row>
      </StyledContent>
    </>
  );
};

export default DatePickerPage;
