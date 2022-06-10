import React, { useEffect, useState } from "react";
import { DataSet } from "choerodon-ui/pro";
import { Content } from "root/components/Page";

import { withThemedLayout } from "../../utils/withThemedLayout";
import ProTransfer from "../../components/TransferPro";
import HighTransfer from "../../components/Transfer";
import Button from "../../components/Button";

const { Option } = ProTransfer;
const boxStyle = {
  margin: 20,
  padding: 20,
  border: "1px solid rgba(90, 94, 154, 0.2)",
  marginLeft: 0,
  borderRadius: 5,
};
const mockData = [];
for (let i = 0; i < 20; i++) {
  mockData.push({
    key: i.toString(),
    title: `content${i + 1}`,
    description: `description of content${i + 1}`,
    disabled: i % 3 < 1,
  });
}

const targetKeys1 = mockData
  .filter((item) => +item.key % 3 > 1)
  .map((item) => item.key);
const ChickenTransfer = () => {
  const [targetKeysC, setTargetKeysC] = useState(targetKeys1);
  const [selectedKeysC, setSelectedKeysC] = useState([]);
  const handleChange = (nextTargetKeys, direction, moveKeys) => {
    setTargetKeysC(nextTargetKeys);
    console.log("direction: ", direction);
    console.log("moveKeys: ", moveKeys);
  };

  const handleSelectChange = (sourceSelectedKeys, targetSelectedKeys) => {
    setSelectedKeysC([...sourceSelectedKeys, ...targetSelectedKeys]);
    console.log("sourceSelectedKeys: ", sourceSelectedKeys);
    console.log("targetSelectedKeys: ", targetSelectedKeys);
  };

  const handleScroll = (direction, e) => {
    console.log("direction:", direction);
    console.log("target:", e.target);
  };

  return (
    <HighTransfer
      dataSource={mockData}
      titles={["Source", "Target"]}
      targetKeys={targetKeysC}
      selectedKeys={selectedKeysC}
      onChange={handleChange}
      onSelectChange={handleSelectChange}
      onScroll={handleScroll}
      render={(item) => item.title}
    />
  );
};
const BaseTransfer = () => {
  const [mockDataB, setMockDataB] = useState([]);
  const [targetKeysB, setTargetKeysB] = useState([]);
  useEffect(() => {
    getMock();
  }, []);

  const getMock = () => {
    const targetKeys2 = [];
    const mockData2 = [];
    for (let i = 0; i < 20; i++) {
      const data = {
        key: i.toString(),
        title: `content${i + 1}`,
        description: `description of content${i + 1}`,
        chosen: Math.random() * 2 > 1,
      };
      if (data.chosen) {
        targetKeys2.push(data.key);
      }
      mockData2.push(data);
    }
    setMockDataB(mockData2);
    setTargetKeysB(targetKeys2);
  };

  const handleChange = (targetKeys) => {
    setTargetKeysB(targetKeys);
  };

  const renderFooter = () => {
    return (
      <Button
        size="small"
        style={{ float: "right", margin: 5 }}
        onClick={getMock}
      >
        reload
      </Button>
    );
  };

  return (
    <HighTransfer
      dataSource={mockDataB}
      showSearch
      listStyle={{
        width: 250,
        height: 300,
      }}
      operations={["to right", "to left"]}
      targetKeys={targetKeysB}
      onChange={handleChange}
      render={(item) => `${item.title}-${item.description}`}
      footer={renderFooter}
    />
  );
};
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
        disabled: i % 3 < 1,
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
    function handleDataSetChange({ record, name, value, oldValue }) {
      console.log(
        "[searchable]",
        value,
        "[oldValue]",
        oldValue,
        `[record.get('${name}')]`,
        record.get(name)
      );
    }
    const data = [
      {
        "last-name": "huazhen",
      },
    ];
    const ds = new DataSet({
      data,
      fields: [{ name: "last-name", type: "string", label: "姓" }],
      events: {
        update: handleDataSetChange,
      },
    });
    const ds1 = new DataSet({
      data,
      fields: [{ name: "last-name", type: "string", label: "姓" }],
      events: {
        update: handleDataSetChange,
      },
    });
    return (
      <>
        <Content>
          {/* <h2>非pro </h2>
          <div style={boxStyle}>
            <ChickenTransfer />
            <BaseTransfer />
          </div> */}
          <h2>单选 pro</h2>
          <div style={boxStyle}>
            <ProTransfer multiple={false} onChange={this.handleChange} sortable>
              <Option value="jack">Jack</Option>
              <Option value="lucy">Lucy</Option>
              <Option value="wu">Wu</Option>
            </ProTransfer>
          </div>
          <h2>pro</h2>
          <div style={boxStyle}>
            <h4>基础</h4>
            <div>
              <ProTransfer
                dataSet={ds}
                name="last-name"
                // searchable
                // operations={["上上上", "下下下"]}
                titles={["Source", "Target"]}
                notFoundContent=""
                sortable
                // sortOperations={['上上上', '下下下']}
                // oneWay
              >
                <Option value="jack" disabled>
                  Jack
                </Option>
                <Option value="lucy">Lucy</Option>
                <Option value="huazhen">Huazhen</Option>
                <Option value="Zhejiang">Zhejiang</Option>
                <Option value="q">q</Option>
                <Option value="w">w</Option>
                <Option value="e">e</Option>
                <Option value="r">r</Option>
                <Option value="t">t</Option>
                <Option value="u">u</Option>
                <Option value="i">i</Option>
                <Option value="o">o</Option>
                <Option value="p">p</Option>
              </ProTransfer>
            </div>
            <h4 style={{ margin: "10px 0" }}>带搜索框</h4>
            <div>
              <ProTransfer
                dataSet={ds1}
                name="last-name"
                searchable
                titles={["Source", "Target"]}
                notFoundContent=""
              >
                <Option value="jack">Jack</Option>
                <Option value="lucy">Lucy</Option>
                <Option value="huazhen">Huazhen</Option>
                <Option value="Zhejiang">Zhejiang</Option>
                <Option value="q">q</Option>
                <Option value="w">w</Option>
                <Option value="e">e</Option>
                <Option value="r">r</Option>
                <Option value="t">t</Option>
                <Option value="u">u</Option>
                <Option value="i">i</Option>
                <Option value="o">o</Option>
                <Option value="p">p</Option>
              </ProTransfer>
            </div>
          </div>
        </Content>
      </>
    );
  }
}

export default withThemedLayout({
  title: "Transfer 穿梭框",
  name: "transfer",
  styleCount: 1,
})(TransferPage);
