import { IonIcon } from 'react-ion-icon';
import FeaturesData from '../../models/features';
import Icon from '../Icon/Icon';
import styles from './Feature.module.scss';

type FeatureProps = FeaturesData;

const Feature: React.FC<FeatureProps> = ({ heading, description, iconName }) => {
  return (
    <div className={styles['feature']}>
      <Icon name={iconName} className={styles['feature-icon']} />

      <p className={styles['feature-heading']}>{heading}</p>
      <p className={styles['feature-text']}>{description}</p>
    </div>
  );
};

export default Feature;
