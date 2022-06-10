import { css } from 'styled-components';
import { getThemeData } from '@hzero-front-ui/core/lib/utils';

const FormStyle = (props) => {
  const { primary6 } = getThemeData(props, 'common');
  return css`
    .ant-form.ant-form {
      .ant-form-item-label {
        .anticon.anticon-question-circle-o {
          :hover {
            color: ${primary6};
          }
        }
      }
    }
  `;
};

export default FormStyle;
