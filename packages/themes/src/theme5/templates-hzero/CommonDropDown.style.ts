import { css } from 'styled-components';
import { getThemeData } from '@hzero-front-ui/core/lib/utils';
function commonStyle(props) {
  const { primary6 } = getThemeData(props, 'common');
  return css`
    a,
    a:hover {
      color: ${primary6};
    }
    a[disabled] {
      color: #e8e8e8;
    }
  `;
}

function commonDropDownStyle(props: any) {
  return css`
    ${commonStyle}
  `;
}

export default commonDropDownStyle;
