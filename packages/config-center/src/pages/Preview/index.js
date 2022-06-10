import React, { useEffect, useState } from "react";
import styled from "styled-components";
import TablePreview from "./TablePreview";
import PreviewAction from "../_components/PreviewAction";
import FormPreview from "./FormPreview";
// import ThemeContext from "../../utils/ThemeContext";
import { pageEvents } from "../../utils/event";

const PreviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
  position: absolute;
  top: 0;
  left: 0;
  transform: scale(0);
  transform-origin: right center;
  transition: all 0.3s;
  z-index: 10;
  &.enter {
    transform: scale(1);
  }
`;

const components = [TablePreview, FormPreview];

const PreviewPage = props => {
  const [page, setPage] = useState(0);
  const [enter, setEnter] = useState(false);
  // const theme = useContext(ThemeContext);
  useEffect(() => {
    setEnter(true);
    return () => setEnter(false);
  }, []);

  const handleExit = () => {
    setEnter(false);
    setTimeout(() => {
      // props.history.push("/theme-config/components");
      props.onBack();
      pageEvents.emit("previewBack");
    }, 300);
  };
  const handleChildBack = () => {
    if (page > 0) {
      setPage(page - 1);
    }
  };
  const handleNext = () => {
    if (page < 1) setPage(page + 1);
  };
  const Component = components[page];
  return (
    <PreviewContainer className={enter ? "enter" : ""}>
      <Component
        onBack={handleChildBack}
        onExit={handleExit}
        onNext={handleNext}
      />
      <PreviewAction
        onPrev={handleChildBack}
        onNext={handleNext}
        noPrev={page === 0}
        noNext={page === 1}
        showNext={page < 1}
      />
    </PreviewContainer>
  );
};

PreviewPage.defaultProps = {
  onBack: () => {},
};

export default PreviewPage;
