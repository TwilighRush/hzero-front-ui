import React from "react";
import styled from "styled-components";
import {
  Row,
  Col,
  // Switch,
  DataSet,
  // NumberField,
  // Form
} from "choerodon-ui/pro";
import { Content } from "root/components/Page";
import { observer } from "mobx-react";
import Pagination from "../../components/PaginationPro";
import { withThemedLayout } from "../../utils/withThemedLayout";
import NumberField from "../../components/NumberFieldPro";
import Switch from "../../components/SwitchPro";
import Form from "../../components/FormPro";

const Box = styled.div`
  margin: 20px;
  padding: 20px;
  border: 1px solid rgba(90, 94, 154, 0.2);
  margin-left: 0;
  border-radius: 5px;
`;
const boxStyle = {
  margin: 20,
  padding: 20,
  border: "1px solid rgba(90, 94, 154, 0.2)",
  marginLeft: 0,
  borderRadius: 5,
};
function handleChange(page, pageSize) {
  console.log("[pagination]", page, pageSize);
}
@observer
class TotalPagination extends React.Component {
  ds = new DataSet({
    autoCreate: true,
    fields: [
      {
        name: "showSizeChanger",
        type: "boolean",
        label: "showSizeChanger",
        defaultValue: true,
      },
      {
        name: "showTotal",
        type: "boolean",
        label: "showTotal",
        defaultValue: true,
      },
      {
        name: "showPager",
        type: "boolean",
        label: "showPager",
        defaultValue: false,
      },
      {
        name: "showQuickJumper",
        type: "boolean",
        label: "showQuickJumper",
        defaultValue: false,
      },
      {
        name: "hideOnSinglePage",
        type: "boolean",
        label: "hideOnSinglePage",
        defaultValue: false,
      },
      { name: "simple", type: "boolean", label: "simple", defaultValue: false },
      { name: "total", type: "number", label: "total", defaultValue: 90 },
    ],
  });

  render() {
    const {
      ds,
      ds: { current },
    } = this;
    return (
      <div>
        <Form columns={3} dataSet={ds} labelWidth={150}>
          <Switch name="showSizeChanger" />
          <Switch name="showTotal" />
          <Switch name="showPager" />
          <Switch name="showQuickJumper" />
          <Switch name="hideOnSinglePage" />
          <Switch name="simple" />
          <NumberField name="total" />
        </Form>
        <Pagination
          showSizeChanger={current.get("showSizeChanger")}
          showTotal={current.get("showTotal")}
          showPager={current.get("showPager")}
          simple={current.get("simple")}
          showQuickJumper={current.get("showQuickJumper")}
          total={current.get("total")}
          hideOnSinglePage={current.get("hideOnSinglePage")}
          onChange={handleChange}
        />
      </div>
    );
  }
}
const PaginationPage = () => {
  return (
    <Content>
      {/* ???????????? */}
      <div>
        <h4>????????????</h4>
        <Box>
          <Row>
            <Col span={24}>
              <Pagination
                showQuickJumper
                total={500}
                showPager
                showSizeChanger={false}
                showTotal={false}
                sizeChangerPosition="right"
                disabled
              />
            </Col>
            <Col span={24} style={{ margin: "20px 0" }}>
              <Pagination
                total={500}
                showPager
                showSizeChangerLabel={false}
                sizeChangerPosition="right"
                pageSize={10}
                page={1}
                showTotal={(total) => `??? ${total} ???`}
                pageSizeOptions={["10", "20", "50", "100"]}
                sizeChangerOptionRenderer={({ value }) => {
                  return <div>{value}???/???</div>;
                }}
              />
            </Col>
            <Col span={24}>
              <Pagination
                total={500}
                showSizeChanger
                showSizeChangerLabel={false}
                sizeChangerPosition="right"
                showPager
                showQuickJumper
                hideOnSinglePage={false}
                showTotal={(total) => `??? ${total} ???`}
                pageSizeOptions={["10", "20", "50", "100"]}
                sizeChangerOptionRenderer={({ value }) => {
                  return <div>{value}???/???</div>;
                }}
              />
            </Col>
          </Row>
          <Row>
            <Col span={24}>
              <Pagination
                total={500}
                showPager
                showSizeChanger={false}
                showTotal={false}
              />
            </Col>
            <Col span={24} style={{ margin: "20px 0" }}>
              <Pagination
                total={500}
                showPager
                pageSize={10}
                page={1}
                showTotal={(total) => `??? ${total} ???`}
                pageSizeOptions={["10", "20", "50", "100"]}
              />
            </Col>
            <Col span={24}>
              <Pagination
                total={500}
                showSizeChanger
                showPager
                showQuickJumper
                pageSizeEditable
                hideOnSinglePage={false}
                showTotal={(total) => `??? ${total} ???`}
                pageSizeOptions={["10", "20", "50", "100"]}
              />
            </Col>
          </Row>
        </Box>
      </div>
      <div>
        <h4>????????????</h4>
        <div style={boxStyle}>
          <Row>
            <Col span={12}>
              <Pagination showSizeChanger={false} total={50} />
            </Col>
          </Row>
        </div>
      </div>
      <div>
        <h4>??????</h4>
        <div style={boxStyle}>
          <TotalPagination />
        </div>
      </div>
      {/* ???????????? */}
      {/* <div>
        <h4>????????????</h4>
        <Box>
          <Row>
            <Col span={12}>
              <Pagination showSizeChanger={false} total={50} />
            </Col>
          </Row>
        </div>
      </div> */}
      {/* <Row style={{ marginBottom: 50 }}>
        <Col span={8}>
          <Pagination
            showSizeChangerLabel={false}
            showTotal={false}
            showPager
            sizeChangerPosition="right"
            total={500}
            pageSize={10}
            page={1}
          />
        </Col>
        <Col span={8}>
          <Pagination
            showSizeChangerLabel={false}
            showTotal={false}
            showPager
            sizeChangerPosition="right"
            total={500}
            pageSize={10}
            page={1}
            disabled
          />
        </Col>
        <Col span={8}>
          <Pagination total={50} page={5} pageSize={10} />
        </Col>
      </Row>
      <Row>
        <Col>
          <Pagination
            showQuickJumper
            showSizeChangerLabel={false}
            total={90}
            showPager
            showTotal={(total, range) =>
              `??????${range[0]}-${range[1]} ??? ${total} ???`}
          />
        </Col>
      </Row>
      <Row>
        <h4>Pagination components</h4>
        <CPagination
          defaultCurrent={6}
          total={500}
          tiny={false}
          showTotal={false}
          showSizeChanger
        />
        <h4>Pagination components -- simple</h4>
        <CPagination simple defaultCurrent={2} total={50} />
      </Row>
      <Pagination simple defaultCurrent={2} total={50} />
      <Pagination
        showQuickJumper={{ goButton: <Button type="button">??????</Button> }}
        total={90}
      /> */}
    </Content>
  );
};

export default withThemedLayout({
  title: "Pagination ??????",
  name: "pagination",
  styleCount: 3,
})(PaginationPage);
