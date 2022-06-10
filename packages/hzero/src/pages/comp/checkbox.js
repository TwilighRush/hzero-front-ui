import React from "react";
import { Row, Col } from "hzero-ui";
import { Content } from "root/components/Page";
import { withThemedLayout } from "../../utils/withThemedLayout";
import Checkbox from "../../components/Checkbox";

const CheckboxDisplayPage = () => {
  return (
    <>
      <Content>
        <Row type="flex" gutter={16}>
          <Col span={16}>
            <p>样式一</p>
            <Checkbox defaultChecked>A</Checkbox>
            <Checkbox disabled defaultChecked>
              A
            </Checkbox>
            <Checkbox indeterminate>B</Checkbox>
            <Checkbox indeterminate disabled>
              B
            </Checkbox>
            <Checkbox>C</Checkbox>
            <Checkbox disabled>C</Checkbox>
          </Col>
          {/* <Col span={8}>
            <p>button类型</p>
            <Checkbox type="button" defaultChecked>
              AB
            </Checkbox>
            <Checkbox type="button">ABC</Checkbox>
            <Checkbox type="button" disabled>
              ABD
            </Checkbox>
          </Col> */}
        </Row>
      </Content>
    </>
  );
};

export default withThemedLayout({
  title: "CheckBox组件",
  name: "checkboxBtn",
  styleCount: 2,
})(CheckboxDisplayPage);
