import { IonIcon } from 'react-ion-icon';

import styles from './MealList.module.scss';

type MealListProps = {
  heading?: string;
  list: string[];
};

type ListItemProps = {
  item: string;
};

const CheckmarkIcon = () => {
  return (
    <div className={styles['diet-list-icon']}>
      <IonIcon name="checkmark-outline" />
    </div>
  );
};

const ListItem: React.FC<ListItemProps> = ({ item }) => {
  return (
    <li className={styles['diet-list-item']}>
      <CheckmarkIcon />
      <span className={styles['diet-list-text']}>{item}</span>
    </li>
  );
};

const MealList: React.FC<MealListProps> = ({ heading, list }) => {
  return (
    <div className={styles['meal-list']}>
      <h3 className="heading-tertiary">{heading}</h3>

      <ul className={styles['diet-list']}>
        {list.map(item => (
          <ListItem item={item} key={Math.random()} />
        ))}
      </ul>
    </div>
  );
};

export default MealList;
