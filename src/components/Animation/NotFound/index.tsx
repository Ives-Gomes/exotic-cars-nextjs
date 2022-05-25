import React from 'react';
import Lottie from 'react-lottie';

import { NotFound } from '@assets/index';

interface NotFoundAnimationProps {
  style?: {};
}

const NotFoundAnimationComponent: React.FC<NotFoundAnimationProps> = (
  { style }: NotFoundAnimationProps,
) => (
  <Lottie
    style={style}
    options={{
      loop: true,
      autoplay: true,
      animationData: NotFound,
      rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice',
      },
    }}
    height="40%"
    width="40%"
    isClickToPauseDisabled
  />
);

export default NotFoundAnimationComponent;
