import MealCard from '../../components/MealCard/MealCard';
import SectionHeading from '../../components/SectionHeading/SectionHeading';
import styles from './SectionMeals.module.scss';

// Images
import meal1Img from '../../assets/images/meals/meal-1.jpg';
import meal2Img from '../../assets/images/meals/meal-2.jpg';
import MealList from '../../components/MealList/MealList';

const mealListItems = [
  'Vegetarian',
  'Vegan',
  'Pescatarian',
  'Gluten-free',
  'Lactose-free',
  'Keto',
  'Paleo',
  'Low FODMAP',
  'Kid-friendly',
];

const SectionMeals = () => {
  return (
    <section className={styles['section-meals']} id="section-meals">
      <SectionHeading
        heading="Omnifood AI chooses from 5,000+ recipes"
        subheading="Meals"
        textAlign="center"
      />

      <div className="container grid grid--3-cols margin-btm-md">
        <MealCard
          heading="Japanese Gyozas"
          image={{ src: meal1Img, alt: 'Japanese Gyozas meal' }}
          tags={[{ text: 'Vegetarian', type: 'vegetarian' }]}
          calories="650"
          nutriScore="74"
          rating={{ rate: 4.9, total: 537 }}
        />

        <MealCard
          heading="Japanese Gyozas"
          image={{ src: meal2Img, alt: 'Avocado Salad' }}
          tags={[{ text: 'Vegan', type: 'vegan' }]}
          calories="400"
          nutriScore="92"
          rating={{ rate: 4.8, total: 441 }}
        />

        <MealList heading="Works with any diet:" list={mealListItems} />
      </div>

      <div className={`${styles['recipes-cta']} center-text`}>
        <a href="#" className={styles['btn--all-recipes']}>
          See all recipes &rarr;
        </a>
      </div>
    </section>
  );
};

export default SectionMeals;
