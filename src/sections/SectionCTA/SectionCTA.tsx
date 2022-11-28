import Container from '../../components/Container/Container';
import CTAForm from '../../components/CTAForm/CTAForm';
import styles from './SectionCTA.module.scss';

import bgImage from '../../assets/images/eating.jpg';

const formBackground = `linear-gradient(rgba(207, 113, 31, 0.25), rgba(230, 125, 34, 0.25)), url(${bgImage})`;

const SectionCTA = () => {
  return (
    <section className={styles['section-cta']} id="section-cta">
      <Container>
        <CTAForm
          heading="Get your first meal for free!"
          description="Healthy, tasty and hassle-free meals are waiting for you. Start eating well today. You can cancel or pause anytime. And the first meal is on us!"
          imageUrl={formBackground}
        />
      </Container>
    </section>
  );
};

export default SectionCTA;
