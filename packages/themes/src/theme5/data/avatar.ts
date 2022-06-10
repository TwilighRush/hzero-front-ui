import { ComponentData } from '@hzero-front-ui/core';
import AvatarStyle from '../templates/Avatar.style';
const avatarData: ComponentData = {
  name: 'avatar',
  data: [
    {
      c7nSquareBorderRadius: '0.06rem',
      lgSize: 48,
      lgFontSize: 20,
      Size: 32,
      fontSize: 16,
      smSize: 24,
      smFontSize: 14,
    },
  ],
  onlyTemplate: { base: AvatarStyle },
};

export default avatarData;
