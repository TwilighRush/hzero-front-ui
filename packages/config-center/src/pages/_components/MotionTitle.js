import React from "react";
import styled from "styled-components";
import motionIcon from "../../assets/icons/motions.png";

const StyledTitle = styled.span`
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  img {
    width: 16px;
    height: 16px;
  }
  span {
    font-family: MicrosoftYaHei;
    font-size: 12px;
    color: #b1b1b1;
    line-height: 20px;
  }
`;

export default function MotionTitle({ text }) {
  return (
    <StyledTitle>
      <img src={motionIcon} alt="motion" />
      <span>{text}</span>
    </StyledTitle>
  );
}
