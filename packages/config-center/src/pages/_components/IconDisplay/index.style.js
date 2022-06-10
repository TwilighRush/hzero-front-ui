import styled from "styled-components";

export const IconDisplayWrapper = styled.div`
  width: 100%;
  height: 346px;
  padding: 16px;
  background: #fafafa;
  overflow-y: auto;
  ::-webkit-scrollbar {
    width: 4px;
    height: 4px;
  }
  ::-webkit-scrollbar-thumb {
    border-radius: 5px;
    box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
    background: rgba(0, 0, 0, 0.2);
  }
  ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 5px rgba(0, 0, 0, 0);
    border-radius: 0;
    background: rgba(0, 0, 0, 0);
  }
`;

export const IconSectionTitle = styled.h4`
  font-size: 14px;
  color: #666;
  line-height: 32px;
  padding: 8px 16px;
`;

export const IconSectionWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
`;

export const IconWrapper = styled.div`
  flex: 0 0 12.5%;
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: flex-start;
  margin-bottom: 28px;
  i {
    text-align: center;
  }
`;

export const IconTitle = styled.h6`
  font-size: 12px;
  color: #666;
  line-height: 20px;
  font-weight: normal;
  text-align: center;
`;
