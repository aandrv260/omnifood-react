import Button from '../../components/Button/Button';
import styles from './HeroSection.module.scss';

// Images
import heroImg from '../../assets/images/hero.png';
import customer1Img from '../../assets/images/customers/customer-1.jpg';
import customer2Img from '../../assets/images/customers/customer-2.jpg';
import customer3Img from '../../assets/images/customers/customer-3.jpg';
import customer4Img from '../../assets/images/customers/customer-4.jpg';
import customer5Img from '../../assets/images/customers/customer-5.jpg';
import customer6Img from '../../assets/images/customers/customer-6.jpg';
import ScrollLink from '../../components/ScrollLink/ScrollLink';

const HeroSection = () => {
  return (
    <section className={styles['section-hero']} id="section-hero">
      <div className={`${styles.hero} container`}>
        <div className={styles['hero-box']}>
          <h1 className="heading-primary">
            A healthy meal delivered to your door, every single day
          </h1>

          <p className={styles['hero-desc']}>
            The smart 365-days-per-year food subscription that will make you eat healthy again.
            Tailored to your personal tastes and nutritional needs.
          </p>

          <div className={styles['btns']}>
            <ScrollLink className="btn btn--full" to="#section-cta" title="Main button">
              Start eating well
            </ScrollLink>

            <ScrollLink className="btn btn--outline" to="#section-how">
              Learn more &darr;
            </ScrollLink>
            {/* <ScrollLink */}
            {/* <Button url="#" btnStyle="full">
              Start eating well
            </Button>

            <Button url="#" btnStyle="outline" id="learn-more">
              Learn more &darr;
            </Button> */}
          </div>

          <div className={styles.delivered}>
            <div className={styles['delivered-imgs']}>
              <img src={customer1Img} alt="Customer 1" />
              <img src={customer2Img} alt="Customer 2" />
              <img src={customer3Img} alt="Customer 3" />
              <img src={customer4Img} alt="Customer 4" />
              <img src={customer5Img} alt="Customer 5" />
              <img src={customer6Img} alt="Customer 6" />
            </div>

            <p className={styles['delivered-text']}>
              <span>250,000+</span> meals delivered last year!
            </p>
          </div>
        </div>

        <div className={styles['hero-img-box']}>
          <img className={styles['hero-img']} src={heroImg} alt="Omnifood logo" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
