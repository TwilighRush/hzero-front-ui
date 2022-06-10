import styled from "styled-components";

export const PageContainer = styled.div`
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  position: relative;
`;

export const OverviewRow = styled.div`
  padding: 16px 0;
  width: 100%;
  display: flex;
  &:nth-of-type(2n) {
    padding-top: 0;
  }
`;

export const IndexTop = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 32px 0;
`;

export const IndexTitle = styled.h2`
  margin-bottom: 0;
  padding: 0;
  height: 42px;
  line-height: 42px;
  font-family: PingFangSC-Regular;
  font-size: 30px;
  color: #5a6677;
  text-align: center;
`;

export const IndexSubTitle = styled.p`
  margin: 9px 0 0 0;
  padding: 0;
  height: 38px;
  font-family: PingFangSC-Regular;
  font-size: 16px;
  color: #aaadba;
  text-align: center;
  line-height: 38px;
`;

export const OverviewImg = styled.img`
  width: 100%;
  height: auto;
  margin: 0 10px 0 0;
  border-radius: 6px;
`;

export const TopDescription = styled.p`
  width: 384px;
  min-height: 44px;
  margin: 32px 0 0 0;
  line-height: 22px;
  font-size: 14px;
  font-family: PingFangSC-Regular;
  color: #5a6677;
  text-align: center;
`;

export const OverviewTitle = styled.h4`
  width: 100%;
  height: 20px;
  line-height: 20px;
  margin: 0 0 12px;
  font-weight: normal;
  font-family: PingFangSC-Regular;
  font-size: 14px;
  color: #5a6677;
`;

export const OverviewItem = styled.div`
  width: 100%;
  box-sizing: border-box;
  padding-left: 8px;
  margin-top: 19px;
  display: flex;
  flex-direction: row;
  flex-flow: wrap;
`;

export const OverviewIcons = styled.img`
  display: block;
  width: 100%;
  margin: 0;
  height: auto;
`;

export const OverviewContent = styled.div`
  width: 100%;
  height: auto;
  padding: 16px 36px;
  display: flex;
  flex-flow: row wrap;
  background: #fafafa;
  .config-content {
    margin-top: 0;
  }
  .c7n-pro-form {
    width: 100%;
    height: auto;
  }
`;

export const ColorItemWrapper = styled.div`
  width: 60px;
  border-radius: 50%;
  margin-right: 36px;
  //cursor: pointer;
  position: relative;
  .color-item {
    width: 60px;
    height: 60px;
    border-radius: 50%;
  }
  .desc {
    width: 100%;
    height: 20px;
    line-height: 20px;
    margin: 12px 0 0 0;
    font-family: PingFangSC-Regular;
    font-size: 14px;
    color: #5a6677;
    text-align: center;
    position: relative;
    span {
      position: absolute;
      line-height: 20px;
      width: fit-content;
      font-family: PingFangSC-Regular;
      font-size: 14px;
      color: #5a6677;
      white-space: nowrap;
      left: 50%;
      transform: translateX(-50%);
    }
  }
  .detail {
    position: absolute;
    font-size: 12px;
    width: auto;
    white-space: nowrap;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    color: #b2b2b2;
  }
`;

export const PictureItem = styled.div`
  width: 150px;
  height: auto;
  margin-right: 24px;
  .img-wrapper {
    width: 100%;
    height: 150px;
    margin: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background: #fff;
    position: relative;
    overflow: hidden;
    img {
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      width: 100%;
      height: auto;
    }
  }
  .title {
    height: 20px;
    margin: 12px 0 0 0;
    line-height: 20px;
    font-family: PingFangSC-Regular;
    font-size: 14px;
    text-align: center;
    color: #5a6677;
  }
`;

export const AvatarItem = styled.div`
  width: 80px;
  padding: 0;
  margin-right: 20px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  .img-wrapper {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    overflow: hidden;
    background: #fff;
    img {
      width: 100%;
      height: 100%;
      margin: 0;
    }
  }
  .title {
    height: 20px;
    margin: 12px 0 0 0;
    line-height: 20px;
    text-align: center;
    font-family: PingFangSC-Regular;
    font-size: 14px;
    color: #5a6677;
  }
`;

export const ControlWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-flow: row wrap;
  padding-bottom: 24px;
  &:first-of-type {
    border-bottom: 1px solid #d8d8d8;
  }
  :last-of-type {
    margin-top: 16px;
  }
`;
export const ControlItem = styled.div`
  box-sizing: border-box;
  padding: 8px;
  .title {
    height: 20px;
    line-height: 20px;
    font-family: MicrosoftYaHei;
    font-size: 12px;
    margin-bottom: 8px;
    color: #b1b1b1;
  }
  .badges-wrapper {
    position: relative;
    width: 100%;
    display: flex;
    flex-flow: row nowrap;
    .badged {
      width: 24px;
      height: 24px;
      margin-right: 32px;
      background: #ffffff;
      border: 1px solid rgba(0, 0, 0, 0.15);
      border-radius: 1px;
    }
  }
`;
