import HowItWorksRowInfo from '../../models/howItWorksRow';

// Images
import image1 from '../../assets/images/app/app-screen-1.png';
import image2 from '../../assets/images/app/app-screen-2.png';
import image3 from '../../assets/images/app/app-screen-3.png';

const rowsInfo: HowItWorksRowInfo[] = [
  {
    stepNumber: '01',
    heading: 'Tell us what you like (and what not)',
    description:
      'Never again waste time thinking about what to eat! Omnifood AI will create a 100% personalized weekly meal plan just for you. It makes sure you get all the nutrients and vitamins you need, no matter what diet you follow!',
    image: {
      src: image1,
      alt: 'Image 1 of our iPhone app',
    },
    imageSide: 'right',
  },

  {
    stepNumber: '02',
    heading: 'Approve your weekly meal plan',
    description:
      'Once per week, approve the meal plan generated for you by Omnifood AI. You can change ingredients, swap entire meals, or even add your own recipes.',
    image: {
      src: image2,
      alt: 'Image 2 of our iPhone app',
    },
    imageSide: 'left',
  },

  {
    stepNumber: '03',
    heading: 'Receive meals at convenient time',
    description:
      'Best chefs in town will cook your selected meal every day, and we will deliver it to your door whenever works best for you. You can change delivery schedule and address daily!',
    image: {
      src: image3,
      alt: 'Image 3 of our iPhone app',
    },
    imageSide: 'right',
  },
];

export default rowsInfo;
