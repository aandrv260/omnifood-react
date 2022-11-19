import styles from './MealCard.module.scss';
import { IonIcon, IonIcons } from 'react-ion-icon';
import Image from '../../models/image';
import React from 'react';

type MealCardTag = {
  text: string;
  type: 'vegetarian' | 'vegan' | 'paleo';
};

type MealCardProps = {
  tags: MealCardTag[];
  heading: string;
  calories: number | string;
  nutriScore?: string;
  rating?: {
    total: number | string;
    rate: number | string;
  };
  image: Image;
};

const MealCard: React.FC<MealCardProps> = props => {
  const { calories, heading, tags, nutriScore, rating, image } = props;

  const ListIcon: React.FC<{ name: IonIcons }> = ({ name }) => {
    return (
      <div className={styles['meal-icon']}>
        <IonIcon name={name} />
      </div>
    );
  };

  return (
    <div className={styles['meal-card']}>
      <img src={image.src} alt={image.alt} className={styles['card-img']} />

      <div className={styles['meal-card-content']}>
        <div className={styles['tags']}>
          {tags.map(tag => (
            <span className={`${styles['tag']} ${styles[`tag--${tag.type}`]}`} key={Math.random()}>
              {tag.text}
            </span>
          ))}
        </div>

        <p className={styles['meal-heading']}>{heading}</p>

        <ul className={styles['meal-list']}>
          <li className={styles['meal-list-item']}>
            <ListIcon name="flame-outline" />

            <p>
              <strong>{calories}</strong> calories
            </p>
          </li>

          {nutriScore && (
            <li className={styles['meal-list-item']}>
              <ListIcon name="restaurant-outline" />

              <p>
                NutriScore &reg; <strong>{nutriScore}</strong>
              </p>
            </li>
          )}

          {rating && (
            <li className={styles['meal-list-item']}>
              <ListIcon name="star-half-outline" />

              <p>
                <strong>{rating?.rate}</strong> rating ({rating?.total})
              </p>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default MealCard;
