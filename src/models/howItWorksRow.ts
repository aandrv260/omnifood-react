import Image from './image';

type HowItWorksRowInfo = {
  stepNumber: number | string;
  heading: string;
  description: string;
  image: Image;
  imageSide: 'left' | 'right' | undefined;
};

export default HowItWorksRowInfo;
