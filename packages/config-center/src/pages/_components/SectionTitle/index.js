import React from "react";
import styled from "styled-components";

export const Title = styled.h4`
  position: relative;
  padding: 8px;
  line-height: 20px;
  margin-bottom: 16px;
  //margin-top: 32px;
  font-size: 20px;
  font-weight: normal;
  vertical-align: bottom;
  box-sizing: border-box;
  border-bottom: 1px solid #f1f1f1;
  :before {
    content: "";
    position: absolute;
    left: 0;
    top: 8px;
    bottom: 8px;
    width: 3px;
    background: #40a9ff;
  }
`;

export const TitleTail = styled.span`
  padding-left: 8px;
  font-size: 16px;
  color: #666;
`;

const SectionTitle = ({ title = "", titleTail, style = {} }) => {
  return (
    <Title style={style}>
      {title}
      <TitleTail>{titleTail}</TitleTail>
    </Title>
  );
};

export default SectionTitle;
