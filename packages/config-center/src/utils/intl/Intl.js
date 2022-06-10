export class Intl {
  _data;

  active;

  locale;

  constructor(data) {
    this._data = data;
    this.active = data.zh_CN;
    this.locale = "zh_CN";
  }

  changeLocale(locale) {
    if (this._data[locale]) {
      this.locale = locale;
      this.active = this._data[locale] || this.data.zh_CN;
    }
  }

  loadData(data) {
    this._data = data;
    if (this.locale) {
      this.active = this._data[this.locale];
    }
  }

  get(key) {
    const realValue = this.active[key];
    return {
      d: defaultValue => realValue || defaultValue,
    };
  }

  getLocale() {
    return this.locale;
  }
}
