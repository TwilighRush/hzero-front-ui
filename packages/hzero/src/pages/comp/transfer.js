import React from "react";
import { Row, Col } from "hzero-ui";
import { Content } from "root/components/Page";
import { withThemedLayout } from "../../utils/withThemedLayout";
import Transfer from "../../components/Transfer";

class TransferPage extends React.Component {
  state = {
    mockData: [],
    targetKeys: [],
  };

  componentDidMount() {
    this.getMock();
  }

  getMock = () => {
    const targetKeys = [];
    const mockData = [];
    for (let i = 0; i < 20; i++) {
      const data = {
        key: i.toString(),
        title: `content${i + 1}`,
        description: `description of content${i + 1}`,
        chosen: Math.random() * 2 > 1,
      };
      if (data.chosen) {
        targetKeys.push(data.key);
      }
      mockData.push(data);
    }
    this.setState({ mockData, targetKeys });
  };

  filterOption = (inputValue, option) => {
    return option.description.indexOf(inputValue) > -1;
  };

  handleChange = (targetKeys) => {
    this.setState({ targetKeys });
  };

  render() {
    return (
      <>
        <Content>
          <Row type="flex" style={{ marginBottom: 60 }}>
            <Col span={12}>
              <h4>样式一</h4>
              <Transfer
                dataSource={this.state.mockData}
                showSearch
                filterOption={this.filterOption}
                targetKeys={this.state.targetKeys}
                onChange={this.handleChange}
                render={(item) => item.title}
              />
            </Col>
            <Col span={12}>
              <h4>样式二</h4>
              <Transfer
                theme={{ style: "theme-two" }}
                dataSource={this.state.mockData}
                showSearch
                filterOption={this.filterOption}
                targetKeys={this.state.targetKeys}
                onChange={this.handleChange}
                render={(item) => item.title}
              />
            </Col>
          </Row>
        </Content>
      </>
    );
  }
}

export default withThemedLayout({
  title: "Transfer 穿梭框",
  name: "transfer",
  styleCount: 2,
})(TransferPage);
