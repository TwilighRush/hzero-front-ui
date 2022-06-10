import React from "react";
import p0 from "../assets/others/p0.png";
import p1 from "../assets/others/p1.png";
import p2 from "../assets/others/p2.png";
import p3 from "../assets/others/p3.png";

const PropsSettingInfo = () => {
  return (
    <>
      <h2>
        参考示例：
        <span style={{ fontSize: 12, fontWeight: "normal", color: "red" }}>
          (注意：代码中不允许出现单引号)
        </span>
      </h2>
      <h3>
        仅设置 <b>ReactNode</b> 属性：
      </h3>
      <img src={p0} alt="ReactNode" width={400} />
      <h3>
        仅设置 <b>ReactNode[]</b> 属性：
      </h3>
      <div style={{ fontSize: 12, color: "red" }}>
        (多个 ReactNode 以换行区分)
      </div>
      <img src={p1} alt="ReactNode[]" width={400} />
      <h3>
        设置 <b>多类型</b> 属性：
      </h3>
      <div style={{ fontSize: 12, color: "red" }}>
        (默认为第一个属性可不用声明，使用第二属性或者其他属性则需要声明，换行后再输入该值)
      </div>
      <img src={p2} alt="多类型" width={400} />
      <h3>
        设置 <b>函数类型</b> 属性：
      </h3>
      <div style={{ fontSize: 12, color: "red" }}>
        (函数类型返回只支持返回基础类型，如：string, boolean, number, object
        等，暂不支持返回 ReactNode 类型)
      </div>
      <img src={p3} alt="函数类型" width={400} />
    </>
  );
};

export default PropsSettingInfo;
