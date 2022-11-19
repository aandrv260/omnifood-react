import Container from '../../components/Container/Container';
import Features from '../../components/Features/Features';
import PricingPlan from '../../components/PricingPlan/PricingPlan';
import SectionHeading from '../../components/SectionHeading/SectionHeading';
import FeaturesData from '../../models/features';
import PricingPlanData from '../../models/pricingPlanData';
import styles from './PricingSection.module.scss';

const pricingPlansData: PricingPlanData[] = [
  {
    price: 399,
    type: 'starter',
    mealsPerDay: 1,
    list: [
      { text: '1 meal per day', icon: 'checkmark' },
      { text: 'Order from 11am to 9pm', icon: 'checkmark' },
      { text: 'Delivery is free', icon: 'close' },
    ],
  },

  {
    price: 649,
    type: 'complete',
    mealsPerDay: 2,
    list: [
      { text: '2 meals per day', icon: 'checkmark' },
      { text: 'Order 24/7', icon: 'checkmark' },
      { text: 'Delivery is free', icon: 'close' },
    ],
  },
];

const featuresData: FeaturesData[] = [
  {
    iconName: 'infinite-outline',
    heading: 'Never cook again!',
    description: 'Our subscriptions cover 365 days per year, even including major holidays.',
  },

  {
    iconName: 'nutrition-outline',
    heading: 'Local and organic',
    description: 'Our cooks only use local, fresh, and organic products to prepare your meals.',
  },

  {
    iconName: 'leaf-outline',
    heading: 'No waste',
    description: 'All our partners only use reusable containers to package all your meals',
  },

  {
    iconName: 'pause-outline',
    heading: 'Pause anytime',
    description: 'Going on vacation? Just pause your subscription, and we refund unused days.',
  },
];

const PricingSection = () => {
  return (
    <section className={styles['section-pricing']}>
      <SectionHeading heading="Eating well without breaking the bank" subheading="Pricing" />

      <Container className="grid grid--2-cols">
        {pricingPlansData.map(planData => (
          <PricingPlan
            list={planData.list}
            mealsPerDay={planData.mealsPerDay}
            price={planData.price}
            type={planData.type}
            key={Math.random()}
          />
        ))}
      </Container>

      <p className={styles['addit-text']}>
        Prices include all applicable taxes. You can cancel at any time. Both plans include the
        following:
      </p>

      <Features data={featuresData} />
    </section>
  );
};

export default PricingSection;
