import { IonIcon } from 'react-ion-icon';
import PricingPlanData, { PricingPlanIcon } from '../../models/pricingPlanData';
import Button from '../Button/Button';
import styles from './PricingPlan.module.scss';

type PricingPlanProps = PricingPlanData;

const PricingPlan: React.FC<PricingPlanProps> = ({ mealsPerDay, list, price, type }) => {
  const pricingPlanTypeClassName = styles[`pricing-plan--${type || 'starter'}`];
  const pricePerMeal = Math.floor(price / 30 / mealsPerDay);

  const Icon: React.FC<{ name: PricingPlanIcon }> = ({ name }) => {
    return (
      <div className={styles['pricing-list-item-icon']}>
        <IonIcon name={`${name}-outline`} />
      </div>
    );
  };

  return (
    <div className={`${styles['pricing-plan']} ${pricingPlanTypeClassName}`}>
      <header className={`${styles['plan-header']} center-text`}>
        <span className={styles['pricing-plan-type']}>{type}</span>
        <p className={styles['pricing-plan-price']}>
          <span>$</span>
          {price}
        </p>

        <p className={styles['pricing-plan-price-desc']}>
          per month. That's just ${pricePerMeal} per meal!
        </p>
      </header>

      <ul className={styles['pricing-plan-list']}>
        {list.map(item => (
          <li className={styles['pricing-plan-list-item']} key={Math.random()}>
            <Icon name={item.icon} />
            <span className={styles['pricing-list-item-text']}>{item.text}</span>
          </li>
        ))}
      </ul>

      <div className="center-text">
        <Button btnStyle="full">Start eating well</Button>
      </div>
    </div>
  );
};

export default PricingPlan;
