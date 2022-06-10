import { ComponentData } from '@hzero-front-ui/core';
import ImageCropStyle from '../templates/ImageCrop.style';
const imageCropData: ComponentData = {
  name: 'imageCrop',
  data: [
    {
      iconSize: 80,
    },
  ],
  onlyTemplate: { base: ImageCropStyle },
};

export default imageCropData;
