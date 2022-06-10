import { DataSet } from "choerodon-ui/pro";

// 属性分类方法
export const classifyAttrs = (compsMap = new Map([]), attrsDs, isControlled) => {
  const dsData = attrsDs.toData();
  const compPropsTemp = {};
  const fieldPropsTemp = {};
  const dsPropsTemp = {};
  const bothPropsTemp = {};
  dsData.forEach((item) => {
    const { flag, type, value, bindFor, name } = item;
    if (
      (type === "boolean" && flag === "default") ||
      (type !== "boolean" && (flag === "default" || flag === "false"))
    ) {
      return undefined;
    }
    // const valueTemp = type === 'boolean' ? flag === 'true' : value;
    let valueTemp;
    // 布尔类型判断flag是否为 'true'
    if (type === "boolean") {
      valueTemp = flag === "true";
    } else {
      // 非布尔类型直接返回 value
      valueTemp = value;
    }
    // 将不同绑定的属性放入对应集合
    if (bindFor.includes("comp") && bindFor.length === 1) {
      // 只能绑定到组件上的属性集合
      compPropsTemp[name] = valueTemp;
    } else if (bindFor.includes("field") && bindFor.length === 1) {
      // 只能绑定到字段上的属性集合
      fieldPropsTemp[name] = valueTemp;
    } else if (bindFor.includes("ds") && bindFor.length === 1) {
      // 只能绑定到dataSet上的属性集合
      dsPropsTemp[name] = valueTemp;
    } else {
      // 既可以绑定到字段上又可以绑定到组件上的属性集合
      bothPropsTemp[name] = valueTemp;
    }
  });
  // 根据是否为受控使用对属性进行分类处理
  if (isControlled) {
    // 创建绑定到组件上的dataSet
    const dsTemp = new DataSet({
      // 将只能绑定到ds上的属性解构到dataSet中去
      ...dsPropsTemp,
      fields: Array.from(compsMap.values()).map((value) => {
        return {
          name: isControlled ? undefined : value.label,
          // 将只能绑定到字段上的属性结构到每一个字段上去
          ...fieldPropsTemp,
          ...value,
        };
      }),
    });
    return {compProps: { ...bothPropsTemp, ...compPropsTemp }, commonDs: dsTemp};
  } else {
    const dsTemp = new DataSet({
      ...dsPropsTemp,
      fields: Array.from(compsMap.values()).map((value) => {
        return {
          name: isControlled ? undefined : value.label,
          // 非受控状态下将即可以绑定到字段又可以绑定到组件上的属性统一绑定到字段上
          ...fieldPropsTemp,
          ...bothPropsTemp,
          ...value,
        };
      }),
    });
    return {compProps: compPropsTemp, commonDs: dsTemp};
  }
};

  // 根据属性名搜索属性
export const searchAttrsByName = (attrsTableDs, searchStr) => {
    // this.setState({ tableSpinning: true });
    attrsTableDs.records.map((record) => {
      if (
        record.get("name").includes(searchStr) ||
        searchStr.trim().length === 0
      ) {
        record.set("searchFlag", true);
      } else {
        record.set("searchFlag", false);
      }
      return record;
    });
    // this.setState({ tableSpinning: false });
  };
