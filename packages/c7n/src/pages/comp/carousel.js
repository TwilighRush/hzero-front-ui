import React from "react";
import { Content } from "root/components/Page";
import { withThemedLayout } from "../../utils/withThemedLayout";
import Carousel from "../../components/Carousel";

const CarouselPage = () => {
  return (
    <>
      <Content>
        <Carousel vertical style={{ background: "#aaa" }}>
          <div>
            <h3 style={{ height: 150 }}>1</h3>
          </div>
          <div>
            <h3 style={{ height: 150 }}>2</h3>
          </div>
          <div>
            <h3 style={{ height: 150 }}>3</h3>
          </div>
          <div>
            <h3 style={{ height: 150 }}>4</h3>
          </div>
        </Carousel>
        <Carousel style={{ background: "#aaa", marginTop: 44 }}>
          <div>
            <h3 style={{ height: 150 }}>1</h3>
          </div>
          <div>
            <h3 style={{ height: 150 }}>2</h3>
          </div>
          <div>
            <h3 style={{ height: 150 }}>3</h3>
          </div>
          <div>
            <h3 style={{ height: 150 }}>4</h3>
          </div>
        </Carousel>
      </Content>
    </>
  );
};

export default withThemedLayout({
  title: "Carousel 走马灯",
  name: "carousel",
  styleCount: 2,
})(CarouselPage);
