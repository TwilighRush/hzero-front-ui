import React, { useContext, useMemo, useState } from "react";
import ThemeContext from "@hzero-front-ui/core/lib/utils/ThemeContext";
import {
  ColorPicker,
  Button,
  useModal,
  TextField,
  Dropdown,
} from "choerodon-ui/pro";
import { isNil } from "lodash";
import { Icon, Menu } from "choerodon-ui";
import { Header } from "root/components/Page";
import Layout from "root/layouts/DefaultLayout";
import ConfigProps from "./configProps";
import {
  textFieldProps,
  defaultPropsValue,
} from "../propsConfig/textFieldProps";
import PropsSettingInfo from "../propsConfig/PropsSettingInfo";

export const withThemeContext = (WrappedComponent) => (props) => (
  <Layout>
    <WrappedComponent {...props} />
  </Layout>
);
export function withThemedLayout({ name, title }) {
  return (WrappedComponent) => (props) => {
    const { config = {}, setTheme } = useContext(ThemeContext);
    const [configProps, setConfigProps] = useState(defaultPropsValue);
    const [tempConfig, setTempConfig] = useState(textFieldProps);
    const [menuActiveKey, setMenuActiveKey] = useState(0);
    const [modalVisible, setModalVisible] = useState(true);
    const [searchVal, setSearchVal] = useState("");
    const defaultExpandKey = ["通用配置"];
    const [expandkey, setExpandkey] = useState(defaultExpandKey);
    const [refreshKey, setRefreshKey] = useState("");
    // const [pointer, setPointer] = useState(config[name]);
    // const changeStyle = () => {
    //   let p = pointer;
    //   if (p < styleCount - 1) {
    //     p += 1;
    //     setPointer(p);
    //   } else if (p === styleCount - 1) {
    //     p = 0;
    //     setPointer(p);
    //   }
    //   setTheme(schema, {
    //     ...config,
    //     [name]: p,
    //   });
    // };
    let currentColor;
    const handleChange = (theme, color = undefined) => {
      if (theme === "theme6") {
        setTheme("theme5", config, {
          colors: { primary: color },
          data: {
            collapse: {
              headerFontSize: 14,
              headerLineHeight: 22,
              addPadding: 1,
            },
            pagination: {
              itemWidth: 28,
              itemHeight: 28,
              itemFontSize: 14,
            },
            badge: {
              textFontSize: 14,
            },
            timeline: {
              fontSize: 14,
              lineHeight: 22,
            },
            radio: {
              fontSize: 14,
              lineHeight: 22,
            },
            radioButton: {
              fontSize: 14,
              btnHeight: 32,
            },
            input: {
              fontSize: 14,
              lineHeight: 22,
              inputHeight: 32,
              addPadding: 1,
              iconFontSize: 16,
            },
            select: {
              fontSize: 14,
              lineHeight: 22,
              addPadding: 1,
            },
            output: {
              lineHeight: 32,
              fontSize: 14,
            },
            menu: {
              fontSize: 14,
              lineHeight: 22,
              addPadding: 1,
            },
            dropdown: {
              itemHeight: 32,
              fontSize: 14,
            },
            datePicker: {
              fontSize: 14,
              btnWidth: 44,
              btnHeight: 24,
            },
            tree: {
              fontSize: 14,
              lineHeight: 32,
            },
            cascader: {
              fontSize: 14,
              lineHeight: 22,
              addPadding: 1,
            },
            checkbox: {
              fontSize: 14,
              btnHeight: 32,
              lineHeight: 22,
            },
            alert: {
              fontSize: 14,
              lineHeight: 22,
              addPadding: 1,
            },
            message: {
              fontSize: 14,
              fontLineHeight: 22,
              addPadding: 1,
            },
            notification: {
              fontSize: 14,
              contentLineheight: 22,
              titleFontSize: 16,
              titleLineHeight: 24,
            },
            tooltip: {
              fontSize: 14,
              lineHeight: 22,
            },
            popconfirm: {
              fontSize: 14,
              lineHeight: 22,
            },
            upload: {
              fontSize: 14,
              cardSize: 104,
              lineHeightBase: 22,
            },
            tabs: {
              marginBottom: 32,
              marginTop: 4,
            },
            table: {
              fontSize: 14,
              // paddingAggregation: 12,
              // paddingAggregationTop: 8,
              rowHeight: 32,
              filterBarLiHeight: 12,
            },
            switch: {
              lineHeight: 32,
            },
            button: {
              // 大
              lgHeight: 40,
              lgFontSize: 16,
              lgIconFontSize: 20,
              // 中
              height: 32,
              fontSize: 14,
              iconFontSize: 16,
              // 小
              smIconFontSize: 12,
            },
          },
        });
      } else {
        setTheme("theme5", config, {
          colors: { primary: color },
          data: {
            collapse: {
              headerFontSize: 12,
              headerLineHeight: 20,
              addPadding: 0,
            },
            pagination: {
              itemWidth: 24,
              itemHeight: 24,
              itemFontSize: 12,
            },
            badge: {
              textFontSize: 12,
            },
            timeline: {
              fontSize: 12,
              lineHeight: 20,
            },
            radio: {
              fontSize: 12,
              lineHeight: 20,
            },
            radioButton: {
              fontSize: 12,
              btnHeight: 28,
            },
            input: {
              fontSize: 12,
              lineHeight: 20,
              inputHeight: 28,
              addPadding: 0,
              iconFontSize: 14,
            },
            select: {
              fontSize: 12,
              lineHeight: 20,
              addPadding: 0,
            },
            output: {
              lineHeight: 28,
              fontSize: 12,
            },
            menu: {
              fontSize: 12,
              lineHeight: 20,
              addPadding: 0,
            },
            dropdown: {
              itemHeight: 28,
              fontSize: 12,
            },
            datePicker: {
              fontSize: 12,
              btnWidth: 56,
              btnHeight: 28,
            },
            tree: {
              fontSize: 12,
              lineHeight: 28,
            },
            cascader: {
              fontSize: 12,
              lineHeight: 20,
              addPadding: 0,
            },
            checkbox: {
              fontSize: 12,
              btnHeight: 28,
              lineHeight: 20,
            },
            // 待商议
            alert: {
              fontSize: 12,
              lineHeight: 20,
              addPadding: 0,
            },
            message: {
              fontSize: 12,
              fontLineHeight: 20,
              addPadding: 0,
            },
            notification: {
              fontSize: 12,
              titleFontSize: 14,
              titleLineHeight: 22,
              contentLineheight: 20,
            },
            tooltip: {
              fontSize: 12,
              lineHeight: 20,
            },
            popconfirm: {
              fontSize: 12,
              lineHeight: 20,
            },
            upload: {
              fontSize: 12,
              cardSize: 96,
              lineHeightBase: 20,
            },
            tabs: {
              marginBottom: 16,
              marginTop: 8,
            },
            table: {
              fontSize: 12,
              rowHeight: 28,
              filterBarLiHeight: 16,
            },
            switch: {
              lineHeight: 28,
            },
            button: {
              // 大
              lgHeight: 32,
              lgFontSize: 14,
              lgIconFontSize: 14,
              // 中
              height: 28,
              fontSize: 12,
              iconFontSize: 14,
              // 小
              smIconFontSize: 12,
            },
          },
        });
      }
    };
    const setComponentTheme = (val) => {
      setTheme({
        ...config,
        [name]: val,
      });
    };
    const setRawTheme = (obj) => {
      setTheme({
        ...config,
        ...obj,
      });
    };
    const handleSearch = (val) => {
      if (val) {
        const expandKey = [];
        const searchConfig = textFieldProps.map((x) => {
          const filterProps = x.props.filter((y) =>
            y.name.toLowerCase().includes(val.toLowerCase())
          );
          if (filterProps.length) {
            expandKey.push(x.header);
          }
          return { ...x, props: filterProps };
        });
        setExpandkey(expandKey);
        setTempConfig(searchConfig);
      } else {
        setExpandkey(defaultExpandKey);
        setTempConfig(textFieldProps);
      }
      setMenuActiveKey("");
    };
    const renderDropMenu = (
      <Menu
        onClick={({ key }) => {
          setMenuActiveKey(key);
          if (key.includes("reset")) {
            handleRefresh();
          }
        }}
      >
        <Menu.Item key="1">全部展开</Menu.Item>
        <Menu.Item key="2">全部收起</Menu.Item>
        <Menu.Item key="3">切换英文名称</Menu.Item>
        <Menu.Item key="4">切换中文名称</Menu.Item>
        <Menu.Item key={`reset${Math.random()}`}>重置属性</Menu.Item>
      </Menu>
    );
    const Modal = useModal();

    const openInfo = () => {
      Modal.open({
        title: "属性设置说明",
        children: <PropsSettingInfo />,
        okText: "确定",
        style: { width: 800 },
        bodyStyle: { height: 500, width: 800 },
        autoCenter: true,
      });
    };

    const modal = useMemo(() => {
      if (title === "可视化测试") {
        return Modal.open({
          key: "control",
          title: "控制面板",
          style: { width: 400 },
          drawer: true,
          drawerTransitionName: "slide-left",
          mask: false,
          destroyOnClose: false,
          okButton: false,
          cancelButton: false,
          bodyStyle: { padding: 0, height: "calc(100% - 50px)" },
          header: () => (
            <article>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <h3>控制面板</h3>
                <div>
                  <Icon
                    type="info_outline"
                    style={{ padding: "0 10px", cursor: "pointer" }}
                    onClick={openInfo}
                  />
                  <Dropdown overlay={renderDropMenu}>
                    <Button>
                      功能 <Icon type="settings-o" />
                    </Button>
                  </Dropdown>
                  <Button
                    type="primary"
                    icon="arrow_back"
                    onClick={() => {
                      setModalVisible(false);
                      modal.close(false);
                    }}
                  >
                    返回菜单
                  </Button>
                </div>
              </div>
              <TextField
                onInput={(e) => setSearchVal(e.target.value)}
                placeholder="输入属性名搜索"
                clearButton
                style={{ width: "100%", marginTop: 10 }}
                suffix={
                  <Icon
                    type="search"
                    clearButton
                    onClick={() => handleSearch(searchVal)}
                  />
                }
                onChange={(val) => handleSearch(val)}
              />
            </article>
          ),
          children: (
            <ConfigProps
              config={tempConfig}
              menuActiveKey={menuActiveKey}
              onChange={(val) => setConfigProps(val)}
              configName={name}
              expandkey={expandkey}
            />
          ),
        });
      }
      return null;
    }, [Modal, title, tempConfig, menuActiveKey, searchVal]);

    const handleSwitchModalVisible = () => {
      if (isNil(modal)) {
        return;
      }
      if (modalVisible) {
        modal.close();
      } else {
        modal.open();
      }
      setModalVisible(!modalVisible);
    };

    const handleRefresh = () => {
      setRefreshKey(Date.now());
    };

    return (
      <>
        <Header
          title={title}
          icon={
            !isNil(modal) && (
              <Button
                funcType="flat"
                onClick={() => handleSwitchModalVisible()}
              >
                <Icon
                  style={{
                    fontSize: 18,
                    transform: modalVisible ? "rotate(90deg)" : "rotate(0deg)",
                  }}
                  type="settings_input_composite"
                />
              </Button>
            )
          }
        >
          {!isNil(modal) && (
            <Icon
              type="refresh"
              onClick={handleRefresh}
              title="重置"
              style={{ cursor: "pointer", marginRight: 10 }}
            />
          )}
          <div>
            <ColorPicker
              placeholder="请选择颜色"
              onChange={(c) => {
                currentColor = c;
              }}
            />
            <Button onClick={() => handleChange("theme5", currentColor)}>
              凌莺蓝主题
            </Button>
            <Button onClick={() => handleChange("theme6", currentColor)}>
              合同主题
            </Button>
          </div>
        </Header>
        {React.cloneElement(
          <WrappedComponent
            {...props}
            setTheme={setComponentTheme}
            setRawTheme={setRawTheme}
            configProps={configProps}
          />,
          { key: refreshKey }
        )}
      </>
    );
  };
}
