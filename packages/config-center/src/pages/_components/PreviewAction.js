import React from "react";
import styled from "styled-components";

const PreviewContainer = styled.div`
  position: fixed;
  bottom: 24px;
  left: 50%;
  transform: translateX(-50%);
  width: auto;
  display: flex;
  .prev,
  .next {
    width: 36px;
    flex: 0 0 36px;
    height: 36px;
    position: relative;
    background: #5a6677;
    border-radius: 50%;
    margin: 0 32px;
    cursor: pointer;
    :after {
      content: "";
      position: absolute;
      width: 12px;
      height: 12px;
      background: none;
      border-right: 2px solid #fff;
      border-bottom: 2px solid #fff;
      transform: rotateZ(-45deg) translate(-1px, 16px);
    }
    &.disabled {
      opacity: 0.5;
      pointer-events: none;
    }
  }
  .prev:after {
    transform: rotateZ(135deg) translate(-2px, -19px);
  }
`;

const OptActions = props => {
  return (
    <PreviewContainer style={props.style || {}}>
      <div
        className={`prev ${props.noPrev ? "disabled" : ""}`}
        onClick={() => props.onPrev()}
      />
      <div
        className={`next ${props.noNext ? "disabled" : ""}`}
        onClick={() => props.onNext()}
      />
    </PreviewContainer>
  );
};

OptActions.defaultProps = {
  onNext: () => {},
  onPrev: () => {},
  noPrev: false,
  noNext: false,
};

export default OptActions;
