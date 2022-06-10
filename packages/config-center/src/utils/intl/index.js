/* eslint-disable camelcase */
import { Intl } from "./Intl";

import zh_CN from "./zh_CN.json";
import en_US from "./en_US.json";

const defaultLocale = {
  zh_CN,
  en_US,
};

const intl = new Intl(defaultLocale);

export { defaultLocale };

export default intl;
