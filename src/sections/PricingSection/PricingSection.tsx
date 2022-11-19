import Container from '../../components/Container/Container';
import PricingPlan from '../../components/PricingPlan/PricingPlan';
import SectionHeading from '../../components/SectionHeading/SectionHeading';
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
    </section>
  );
};

export default PricingSection;
