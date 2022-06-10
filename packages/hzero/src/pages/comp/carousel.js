import React from "react";
import styled from "styled-components";
import { Content } from "root/components/Page";
import { withThemedLayout } from "../../utils/withThemedLayout";
import Carousel from "../../components/Carousel";

const Div = styled.div`
  height: 100px;
  background-color: #898;
`;

const CardPage = () => {
  return (
    <>
      <Content style={{ marginBottom: 60 }}>
        <Carousel>
          <Div>
            <h3>1</h3>
          </Div>
          <Div>
            <h3>2</h3>
          </Div>
          <Div>
            <h3>3</h3>
          </Div>
          <Div>
            <h3>4</h3>
          </Div>
        </Carousel>
        <br />
        <Carousel vertical>
          <Div>
            <h3>1</h3>
          </Div>
          <Div>
            <h3>2</h3>
          </Div>
          <Div>
            <h3>3</h3>
          </Div>
          <Div>
            <h3>4</h3>
          </Div>
        </Carousel>
      </Content>
    </>
  );
};

export default withThemedLayout({
  title: "Carousel",
  name: "carousel",
  styleCount: 2,
})(CardPage);
