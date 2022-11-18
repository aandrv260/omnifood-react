import HowItWorksRow from '../../components/HowItWorksRow/HowItWorksRow';
import SectionHeading from '../../components/SectionHeading/SectionHeading';
import styles from './HowItWorksSection.module.scss';
import rowsInfo from './rowsInfo';

const HowItWorksSection = () => {
  return (
    <section className={styles['section-how-it-works']} id="section-how">
      <SectionHeading
        heading="Your daily dose of health in 3 simple steps"
        subheading="How it works"
      />

      <div className="container grid grid--2-cols center-grid">
        {rowsInfo.map(row => (
          <HowItWorksRow
            heading={row.heading}
            description={row.description}
            image={row.image}
            imageSide={row.imageSide}
            stepNumber={row.stepNumber}
            key={Math.random()}
          />
        ))}
      </div>
    </section>
  );
};

export default HowItWorksSection;
