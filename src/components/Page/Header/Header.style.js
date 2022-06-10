import styled from "styled-components";

export const Container = styled.div`
  display: block;
  width: 100%;
  padding: 0 16px;
  border-radius: 4px;
  overflow: hidden;
  background: #fff;
  flex: 0 0 auto;
  :after {
    content: "";
    display: block;
    width: 100%;
    height: 1px;
  }
`;

export const TitleWrapper = styled.div`
  position: relative;
  width: 100%;
  padding: 0;
  margin: 9px 0;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

export const Title = styled.h2`
  font-family: PingFangSC-Medium;
  font-size: 14px;
  height: 14px;
  margin: 0;
  line-height: 14px;
  font-weight: normal;
  color: #5a6677;
`;

export const ActionsWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
`;

export const BackImage = styled.img`
  flex: 0 0 24px;
  height: 24px;
  margin: 0 8px 0 0;
  cursor: pointer;
`;

export const TabsWrapper = styled.div`
  width: 100%;
`;
