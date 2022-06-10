import React from "react";
import { Icon } from "choerodon-ui";
import { Row, Col } from "choerodon-ui/pro";
import { Content } from "root/components/Page";
import { withThemedLayout } from "../../utils/withThemedLayout";
import Popover from "../../components/Popover";
// import Menu from "../../components/Menu";
import ProMenu from "../../components/MenuPro";
import Dropdown from "../../components/DropdownPro";
import Button from "../../components/ButtonPro";
import Form from "../../components/FormPro";
import SelectBox from "../../components/SelectBoxPro";
import ProSelect from "../../components/SelectPro";

const { SubMenu, Item } = ProMenu;

const boxStyle = {
  margin: 20,
  padding: 20,
  border: "1px solid rgba(90, 94, 154, 0.2)",
  marginLeft: 0,
  borderRadius: 5,
};
// const menubaseya = (
//   <Menu>
//     <Menu.Item disabled>1st menu item</Menu.Item>
//     <Menu.Item>2nd menu item</Menu.Item>
//     <SubMenu title="sub menu">
//       <Menu.Item>3rd menu item</Menu.Item>
//       <Menu.Item>4th menu item</Menu.Item>
//     </SubMenu>
//     <SubMenu title="disabled sub menu" disabled>
//       <Menu.Item>5d menu item</Menu.Item>
//       <Menu.Item>6th menu item</Menu.Item>
//     </SubMenu>
//   </Menu>
// );
const DropdownPage = () => {
  const renderForm = () => {
    return (
      <Form style={{ width: 348 }} labelAlign="left">
        <SelectBox label="角色层级" name="role">
          <SelectBox.Option value="1">全部</SelectBox.Option>
          <SelectBox.Option value="2">平台层</SelectBox.Option>
          <SelectBox.Option value="3">租户层</SelectBox.Option>
        </SelectBox>
        <SelectBox label="状态" name="status">
          <SelectBox.Option value="1">启用</SelectBox.Option>
          <SelectBox.Option value="2">禁用</SelectBox.Option>
        </SelectBox>
        <SelectBox label="角色来源" name="source">
          <SelectBox.Option value="1">全部</SelectBox.Option>
          <SelectBox.Option value="2">预定义</SelectBox.Option>
          <SelectBox.Option value="3">自定义</SelectBox.Option>
        </SelectBox>
        <ProSelect label="语言" name="language" labelInValue>
          <ProSelect.Option value="zh-cn">简体中文</ProSelect.Option>
          <ProSelect.Option value="en-us">英语(美国)</ProSelect.Option>
          <ProSelect.Option value="ja-jp">日本語</ProSelect.Option>
        </ProSelect>
        <div style={{ textAlign: "right" }}>
          <Button type="reset" style={{ marginRight: 8 }}>
            重置
          </Button>
          <Button type="submit" color="primary">
            查询
          </Button>
        </div>
      </Form>
    );
  };
  return (
    <Content>
      {/* <div style={boxStyle}>
        <Down overlay={menubaseya} trigger="click">
          <a className="c7n-dropdown-link" href="#">
            Cascading menu <Icon type="arrow_drop_down" />
          </a>
        </Down>
      </div> */}
      <div>
        <h2>基本-pro</h2>
        <h4>最简单的下拉菜单</h4>
        <div style={boxStyle}>
          <Row>
            <Col span={8}>
              <Dropdown overlay={menu} trigger="hover">
                <Button>
                  快速筛选
                  <Icon type="expand_more" style={{ marginLeft: "8px" }} />
                </Button>
              </Dropdown>
              <Dropdown overlay={menu1} trigger="hover">
                <Button color="primary">
                  下载
                  <Icon type="expand_more" style={{ marginLeft: "8px" }} />
                </Button>
              </Dropdown>
            </Col>
            <Col span={8}>
              <Dropdown overlay={cascadingMenu} trigger="hover">
                <Button>
                  Cascading menu <Icon type="expand_more" />
                </Button>
              </Dropdown>
            </Col>
          </Row>
        </div>
      </div>

      <div>
        <h2>创建下拉-pro</h2>
        <h4>创建下拉</h4>
        <div style={boxStyle}>
          <Row>
            <Col span={8}>
              <Dropdown
                overlay={() => (
                  <ProMenu>
                    <Item>新建平级公司</Item>
                    <Item>新建子公司</Item>
                    <Item>新建部门</Item>
                  </ProMenu>
                )}
                trigger="hover"
              >
                <Button icon="add" />
              </Dropdown>
            </Col>
            <Col span={8}>
              <Dropdown
                overlay={() => (
                  <ProMenu>
                    <Item>简体中文</Item>
                    <Item>Englist</Item>
                    <Item>日本語の表記</Item>
                    <Item>중국어간체</Item>
                  </ProMenu>
                )}
                trigger="hover"
              >
                <Button icon="more_horiz" />
              </Dropdown>
            </Col>
            <Col span={8}>
              <Popover
                placement="bottomLeft"
                title={null}
                content={() => renderForm()}
                trigger="hover"
              >
                <Button icon="filter2" />
              </Popover>
            </Col>
          </Row>
        </div>
      </div>

      <div>
        <h2>带按钮的下拉菜单</h2>
        <h4>Dropdown.Button</h4>
        <div style={boxStyle}>
          <Row>
            <Col span={8}>
              <Dropdown.Button overlay={menu} trigger="hover">
                Dropdown.Button
              </Dropdown.Button>
              &nbsp;&nbsp;&nbsp;&nbsp;
              <Dropdown.Button overlay={menu} funcType="flat">
                Dropdown.Button
              </Dropdown.Button>
              <br />
              <br />
              <Dropdown.Button overlay={menu} size="large" trigger="hover">
                large Dropdown
              </Dropdown.Button>
              &nbsp;&nbsp;&nbsp;&nbsp;
              <Dropdown.Button overlay={menu} funcType="flat" size="small">
                small Dropdown
              </Dropdown.Button>
            </Col>

            <Col span={8}>
              <Dropdown.Button
                overlay={menu}
                trigger="hover"
                buttonProps={{ href: "www.baidu.com" }}
              >
                link Dropdown
              </Dropdown.Button>
              &nbsp;&nbsp;&nbsp;&nbsp;
              <Dropdown.Button
                overlay={menu}
                funcType="flat"
                buttonProps={{ href: "www.baidu.com" }}
              >
                link Dropdown.Button
              </Dropdown.Button>
              <br />
              <br />
              <Dropdown.Button
                overlay={menu}
                size="large"
                disabled
                buttonProps={{ href: "www.baidu.com" }}
              >
                large link Dropdown
              </Dropdown.Button>
              &nbsp;&nbsp;&nbsp;&nbsp;
              <Dropdown.Button overlay={menu} buttonProps={{ loading: true }}>
                Dropdown.Button
              </Dropdown.Button>
            </Col>
          </Row>
        </div>
      </div>
    </Content>
  );
};

const menu = (
  <ProMenu>
    <ProMenu.Item disabled>我参与的</ProMenu.Item>
    <ProMenu.Item>待我处理的</ProMenu.Item>
    <ProMenu.Item>待审批</ProMenu.Item>
    <ProMenu.Item>已归档</ProMenu.Item>
  </ProMenu>
);
const menu1 = (
  <ProMenu>
    <ProMenu.Item>下载为PDF格式</ProMenu.Item>
    <ProMenu.Item>下载为PNG格式</ProMenu.Item>
    <ProMenu.Item>下载源格式</ProMenu.Item>
  </ProMenu>
);
const cascadingMenu = (
  <ProMenu>
    <ProMenu.Item>1st menu item</ProMenu.Item>
    <ProMenu.Item>2nd menu item</ProMenu.Item>
    <SubMenu title="sub menu">
      <ProMenu.Item>3rd menu item</ProMenu.Item>
      <ProMenu.Item>4th menu item</ProMenu.Item>
    </SubMenu>
    <SubMenu title="sub menu">
      <ProMenu.Item>5d menu item</ProMenu.Item>
      <ProMenu.Item>6th menu item</ProMenu.Item>
    </SubMenu>
  </ProMenu>
);

export default withThemedLayout({
  title: "Dropdown 菜单",
  name: "dropdown",
  styleCount: 1,
})(DropdownPage);
