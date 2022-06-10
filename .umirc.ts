import { IConfig } from 'umi';
import path from 'path';

export default {
  dynamicImport: {},
  define: {
    'process.env.REACT_APP_SC_DISABLE_SPEEDY': 'false',
  },
  alias: {
    components: path.resolve(__dirname, './src/components'),
  },
  chainWebpack: (config) => {
    const includes = ['themes', 'config-center', 'core'];
    includes.forEach((p) => {
      config.module.rule('js').include.add(path.resolve(__dirname, 'packages', p)).end();
    });
    return config;
  },
  theme: {
    'input-height-base': '28px',
    'btn-height-base': '28px',
    'font-size-base': '12px',
    'text-color': '#333',
    'border-radius-base': '2px',
    'primary-color': '#29BECE',
    'layout-header-height': '48px',
    'modal-mask-bg': 'rgba(0, 0, 0, 0.288)',
    'pagination-item-size': '26px',
    'form-item-margin-bottom': '14px',
    // 'icon-url': '/assets/hzero-ui/font_148784_v4ggb6wrjmkotj4i',
  }
} as IConfig;
