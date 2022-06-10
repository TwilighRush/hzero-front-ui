import React from "react";
// import { Avatar, Button, List, Spin } from "choerodon-ui";

import reqwest from "reqwest";
import { Content } from "root/components/Page";
import { withThemedLayout } from "../../utils/withThemedLayout";
import List from "../../components/List";
import Spin from "../../components/Spin";
import Button from "../../components/Button";
import Avatar from "../../components/Avatar";

const fakeDataUrl =
  "https://randomuser.me/api/?results=5&inc=name,gender,email,nat&noinfo";
class LoadMoreList extends React.Component {
  state = {
    loading: true,
    loadingMore: false,
    showLoadingMore: true,
    data: [],
  };

  componentDidMount() {
    this.getData((res) => {
      this.setState({
        loading: false,
        data: res.results,
      });
    });
  }

  getData = (callback) => {
    reqwest({
      url: fakeDataUrl,
      type: "json",
      method: "get",
      contentType: "application/json",
      success: (res) => {
        callback(res);
      },
    });
  };

  onLoadMore = () => {
    this.setState({
      loadingMore: true,
    });
    this.getData((res) => {
      const data = this.state.data.concat(res.results);
      this.setState(
        {
          data,
          loadingMore: false,
        },
        () => {
          // Resetting window's offsetTop so as to display react-virtualized demo underfloor.
          // In real scene, you can using public method of react-virtualized:
          // https://stackoverflow.com/questions/46700726/how-to-use-public-method-updateposition-of-react-virtualized
          window.dispatchEvent(new Event("resize"));
        }
      );
    });
  };

  render() {
    const { loading, loadingMore, showLoadingMore, data } = this.state;
    const loadMore = showLoadingMore ? (
      <div
        style={{
          textAlign: "center",
          marginTop: 12,
          height: 32,
          lineHeight: "32px",
        }}
      >
        {loadingMore && <Spin />}
        {!loadingMore && (
          <Button onClick={this.onLoadMore}>loading more</Button>
        )}
      </div>
    ) : null;
    return (
      <List
        className="demo-loadmore-list"
        loading={loading}
        itemLayout="horizontal"
        loadMore={loadMore}
        dataSource={data}
        renderItem={(item) => (
          <List.Item
            key={item.name.last}
            actions={[<a key="edit">edit</a>, <a key="more">more</a>]}
          >
            <List.Item.Meta
              avatar={
                <Avatar
                  size="large"
                  src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                />
              }
              title={
                <a href="https://open-hand.github.io/choerodon-ui/">
                  {item.name.last}
                </a>
              }
              description="Choerodon"
            />
            <div>content</div>
          </List.Item>
        )}
      />
    );
  }
}
const boxStyle = {
  margin: 20,
  padding: 20,
  border: "1px solid rgba(90, 94, 154, 0.2)",
  marginLeft: 0,
  borderRadius: 5,
};
const ListPage = () => {
  const data = [
    {
      title: "Choerodon UI Title 1",
    },
    {
      title: "Choerodon UI Title 2",
    },
    {
      title: "Choerodon UI Title 3",
    },
    {
      title: "Choerodon UI Title 4",
    },
  ];
  return (
    <>
      <Content>
        {/* <h2>未给样式，样式没修改</h2>
        <Row type="flex" justify="space-between" style={{ marginBottom: 40 }}>
          <Col span={7}>
            <List
              header={<Head />}
              footer={<div>footer</div>}
              bordered
              dataSource={data}
              renderItem={item => <List.Item>{item}</List.Item>}
            />
          </Col>
          <Col span={7}>
            <List
              header={<Head />}
              dataSource={data}
              renderItem={item => (
                <List.Item actions={[<Button type="default">操作</Button>]}>
                  <List.Item.Meta
                    avatar={
                      <Avatar shape="square" size="large" icon="person" />
                    }
                    title={<a href="https://ant.design">{item}</a>}
                  />
                </List.Item>
              )}
            />
          </Col>
          <Col span={7}>
            <List
              header={<Head />}
              dataSource={data}
              renderItem={item => (
                <List.Item actions={[<Button type="default">操作</Button>]}>
                  <List.Item.Meta
                    // avatar={<Avatar shape="square" size="large" icon="user" />}
                    title={<a href="https://ant.design">{item}</a>}
                    description="介绍文案介绍文案介绍文案介绍文案介绍文案介绍文案介绍文案介绍文案介绍文案介绍文案介绍文案介绍文案"
                  />
                </List.Item>
              )}
            />
          </Col>
        </Row> */}
        <h2>基础</h2>
        <div style={boxStyle}>
          <List
            itemLayout="horizontal"
            dataSource={data}
            renderItem={(item) => (
              <List.Item>
                <List.Item.Meta
                  avatar={
                    <Avatar
                      src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                      size="large"
                    />
                  }
                  title={
                    <a href="https://open-hand.github.io/choerodon-ui/">
                      {item.title}
                    </a>
                  }
                  description="Choerodon"
                />
              </List.Item>
            )}
          />
        </div>
        <h2>简单列表</h2>
        <div style={boxStyle}>
          <List
            itemLayout="horizontal"
            dataSource={data}
            renderItem={(item) => (
              <List.Item>
                <List.Item.Meta
                  title={
                    <a href="https://open-hand.github.io/choerodon-ui/">
                      {item.title}
                    </a>
                  }
                  description="Choerodon"
                />
              </List.Item>
            )}
          />
        </div>
        <h2>加载</h2>
        <div style={boxStyle}>
          <LoadMoreList />
        </div>
      </Content>
    </>
  );
};

export default withThemedLayout({
  title: "List 列表",
  name: "list",
  styleCount: 3,
})(ListPage);
