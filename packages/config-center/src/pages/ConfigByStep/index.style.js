import styled from "styled-components";
import { Row } from "hzero-ui";

export const StyledConfigRow = styled(Row)``;

export const CfgStepsWrapper = styled.div`
  width: 100%;
  position: relative;
  padding-bottom: 36px;
`;

export const ConfigStepContainer = styled.div`
  width: 100%;
  max-width: 1100px;
  height: auto;
`;

export const MotionWrapper = styled.div`
  height: 200px;
  width: 100%;
  position: relative;
  overflow: hidden;
  img {
    width: 100%;
    height: auto;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

export const ThumbnailContainer = styled.picture`
  width: 100%;
  height: fit-content;
  max-height: 300px;
  flex-wrap: nowrap;
  overflow-y: auto;
  .thumbnail {
    width: 100%;
    flex: 0 0 auto;
    margin-top: 16px;
    background-color: #ccc;
    cursor: pointer;
    img {
      width: 100%;
      height: auto;
    }
  }
`;

export const PreviewBtnContainer = styled.div`
  width: 100%;
  height: 20px;
  line-height: 20px;
  font-size: 12px;
  font-family: PingFangSC-Regular;
  color: #525a6e;
  text-align: center;
  margin: 16px 0;
  cursor: pointer;
  img {
    width: 20px;
    height: 20px;
    margin-right: 8px;
  }
`;
