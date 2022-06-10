import styled from "styled-components";

export const ComponentConfigPage = styled.div`
  width: 100%;
  height: 100%;
  padding-right: 150px;
  position: relative;
`;

export const SideContainer = styled.div`
  display: none;
  width: 150px;
  position: fixed;
  right: 30px;
  top: 0;
  line-height: 0;
  text-align: center;
  background: none;
  transition: all 0.3s ease;
  .t-divider {
    width: 80%;
    height: 1px;
    background: #f1f1f1;
    display: inline-block;
  }
  .anchor-item-container-disabled {
    pointer-events: none;
    .ant-anchor-link-title {
      cursor: not-allowed;
      pointer-events: none;
      color: #ccc !important;
    }
  }
  .ant-anchor {
    .ant-anchor-link .ant-anchor-link-title {
      color: #666;
      :hover {
        color: #1f59ff;
      }
    }
    position: relative;
    display: inline-block;
    margin: 20px 0;
  }
`;

export const BlockContainer = styled.section`
  margin-top: 32px;
  width: 100%;
  height: auto;
  &:first-of-type {
    margin-top: 0;
  }
`;

export const CommonItemsWrapper = styled.div`
  position: relative;
  display: flex;
  flex-flow: row wrap;
  padding: 0;
  .ant-btn {
    margin-right: 5px;
  }
`;

export const BottomTitle = styled.div`
  position: absolute;
  margin: 0;
  width: 100%;
  left: 0;
  top: calc(100% + 16px);
  height: 20px;
  font-family: MicrosoftYaHei;
  font-size: 12px;
  color: #525a6e;
  line-height: 20px;
  text-align: center;
`;

export const PreviewContainer = styled.div`
  position: fixed;
  right: 0;
  top: 300px;
  width: 38px;
  height: 272px;
  background: #ffffff;
  //writing-mode: vertical-lr;
  box-shadow: -2px 0 6px 0 rgba(0, 0, 0, 0.1);
  border-radius: 2px;
  font-family: PingFangSC-Regular;
  font-size: 20px;
  color: #4f7de7;
  line-height: 32px;
  text-align: center;
  cursor: pointer;
  .text {
    display: inline-block;
    margin-top: 20px;
  }
  .icon {
    display: inline-block;
    width: 24px;
    height: 24px;
    line-height: 18px;
    border-radius: 50%;
    border: 1px solid #4f7de7;
    :before {
      content: "";
      display: inline-block;
      width: 0;
      height: 0;
      border: 6px solid;
      border-color: transparent transparent #adc6ff;
      transform-origin: center;
      transform: rotateZ(-90deg) translateY(-5px);
    }
  }
`;
