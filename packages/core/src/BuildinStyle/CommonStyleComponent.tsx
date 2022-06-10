import { css } from 'styled-components';
import { getThemeData } from '../utils/utils';
import { createMainStyleComponent, createStyleComponent } from '../utils/createStyleComponent';

const commonCss = (props: any) => {
  const { fontFamily, primary } = getThemeData(props, 'common');
  return css`
    body {
      font-family: ${fontFamily};
    }
    .ued-primary-bg {
      background-color: ${primary} !important;
    }
    .ued-primary-color {
      color: ${primary} !important;
    }
    .ued-primary-border-color {
      border-color: ${primary} !important;
    }
  `;
};

const CommonStyle = createStyleComponent('common', commonCss);

const CommonStyleComponent = createMainStyleComponent({
  name: 'build-in',
  styles: [CommonStyle],
});

export default CommonStyleComponent;
