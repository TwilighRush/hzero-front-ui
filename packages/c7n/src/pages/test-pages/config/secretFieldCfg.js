import { configure } from "choerodon-ui";

// SecretField组件全局配置
const SecretFieldCfg = () => {
  configure({
    // SecretField 相关配置
    secretFieldFetchVerifyCode() {
      return Promise.resolve({
        captcha: null,
        captchaKey: "ff62f4b0bcbc440d981fb1145beb9089",
        lastCheckKey: null,
        message: "短信验证码已发送至手机:185*****331，请在5分钟内完成验证",
        code: "captcha.send.phone",
        interval: 60,
        errorTimes: 0,
        surplusTimes: 0,
        messageParams: null,
        success: true,
      });
    },
    secretFieldTypes() {
      const type = [
        { type: "phone", name: "电话", value: "110" },
        { type: "string", name: "测试", value: "测试验证号码" },
        { type: "email", name: "邮箱", value: "100@gmail.com" },
      ];
      return type;
    },
    secretFieldEnable() {
      return true;
    },
    secretFieldQueryData() {
      return Promise.resolve("oldData");
    },
    secretFieldSaveData() {
      return Promise.resolve("editData");
    },
  });
};

export default SecretFieldCfg;
