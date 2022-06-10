import { ComponentData, getColorGradation } from '@hzero-front-ui/core';

const primary = '#29bece';
const primaryColors = getColorGradation(primary);

const commonData: ComponentData = {
  name: 'common',
  data: [
    {
      fontFamily: 'MicrosoftYaHei',
      primary,
      primary1: primaryColors.step1,
      primary2: primaryColors.step2,
      primary3: primaryColors.step3,
      primary4: primaryColors.step4,
      primary5: primaryColors.step5,
      primary6: primaryColors.step6,
      primary7: primaryColors.step7,
      primary8: primaryColors.step8,
      primary9: primaryColors.step9,
    },
  ],
};

export default commonData;
