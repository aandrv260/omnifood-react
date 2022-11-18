import styles from '../../sections/HowItWorksSection/HowItWorksSection.module.scss';
import HowItWorksRowInfo from '../../models/howItWorksRow';

type HowItWorksRowProps = HowItWorksRowInfo;

const HowItWorksRow: React.FC<HowItWorksRowProps> = props => {
  const { stepNumber, heading, description, image, imageSide } = props;

  console.log('imgSide', imageSide);

  const TextCol = () => {
    return (
      <div className={styles['text-col']}>
        {stepNumber && <span className={styles['step-num']}>{stepNumber}</span>}
        <h3 className="heading-tertiary">{heading}</h3>

        <p className={styles['step-description']}>{description}</p>
      </div>
    );
  };

  const ImageCol = () => {
    return (
      <div className={styles['img-col']}>
        <img src={image.src} alt={image.alt} className={styles['step-img']} />
      </div>
    );
  };

  return (
    <>
      {(!imageSide || imageSide === 'left') && (
        <>
          <ImageCol />
          <TextCol />
        </>
      )}

      {imageSide === 'right' && (
        <>
          <TextCol />
          <ImageCol />
        </>
      )}
    </>
  );
};

export default HowItWorksRow;
