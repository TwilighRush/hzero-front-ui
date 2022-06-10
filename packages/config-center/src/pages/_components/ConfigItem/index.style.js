import styled from "styled-components";

export const ConfigContainer = styled.div`
  width: 100%;
  height: auto;
  position: relative;
`;

export const Title = styled.h4`
  height: 20px;
  line-height: 20px;
  font-family: MicrosoftYaHei;
  font-size: 12px;
  color: #b1b1b1;
  margin: 0;
`;

export const ContentWrapper = styled.div`
  margin-top: 5px;
  position: relative;
  display: flex;
  flex-flow: row wrap;
  align-items: flex-start;
  .item-outer-wrapper {
    height: auto;
    min-width: 271px;
    margin: 0 0 8px 0;
    box-sizing: border-box;
    .bottom-title {
      height: 20px;
      text-align: center;
      font-family: MicrosoftYaHei;
      font-size: 10px;
      color: #4f7de7;
      line-height: 20px;
    }
  }
`;

export const ItemWrapper = styled.div`
  flex: 1;
  position: relative;
  box-sizing: border-box;
  width: calc(100% - 8px);
  margin-right: 8px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  border: 1px solid #fff;
  cursor: pointer;
  .config-item-title {
    margin-top: 16px;
    margin-left: 8px;
  }
  img {
    width: 100%;
    height: auto;
  }
  &.selected {
    background: #fafafa;
    border: 1px solid rgba(79, 125, 231, 0.5);
    cursor: pointer;
  }
  &.item-disabled {
    background: #eee;
    opacity: 0.5;
    cursor: not-allowed;
  }
  &:hover:not(.selected) {
    border: 1px solid #ccc;
  }
`;

export const ItemTitle = styled.span`
  margin-right: 8px;
  font-family: MicrosoftYaHei;
  font-size: 12px;
  color: #525a6e;
  text-align: right;
  line-height: 22px;
  white-space: nowrap;
`;

export const CheckedIcon = styled.div`
  width: 24px;
  height: 24px;
  position: absolute;
  right: 8px;
  bottom: 4px;
  border-radius: 50%;
  background: #4f7de7;
  transform: scale(0.67);
  z-index: 10;
  :after {
    display: block;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -70%) rotate(-45deg);
    content: "";
    width: 14px;
    height: 8px;
    border-bottom: 2px solid #fff;
    border-left: 2px solid #fff;
  }
`;
