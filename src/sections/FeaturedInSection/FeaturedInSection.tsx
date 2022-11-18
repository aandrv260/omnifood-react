import styles from './FeaturedInSection.module.scss';

// Logos
import businessInsiderLogo from '../../assets/images/logos/business-insider.png';
import forbesLogo from '../../assets/images/logos/forbes.png';
import techcrunchLogo from '../../assets/images/logos/techcrunch.png';
import NYTimesLogo from '../../assets/images/logos/the-new-york-times.png';
import USATodayLogo from '../../assets/images/logos/usa-today.png';
import React from 'react';

type LogoProps = {
  src: string;
  alt: string;
};

const allLogos: LogoProps[] = [
  { src: businessInsiderLogo, alt: 'Business Insider company logo' },
  { src: forbesLogo, alt: 'Forbes company logo' },
  { src: techcrunchLogo, alt: 'Techcrunch company logo' },
  { src: NYTimesLogo, alt: 'The New York Times company Logo' },
  { src: USATodayLogo, alt: 'USA Today company logo' },
];

const FeaturedInSection = () => {
  const Logo: React.FC<LogoProps> = ({ src, alt }) => {
    return <img className={styles['featured-logo']} src={src} alt={alt} />;
  };

  const Logos = () => {
    return allLogos.map(logo => <Logo src={logo.src} alt={logo.alt} key={Math.random()} />);
  };

  return (
    <section className={styles['featured-in']}>
      <div className="container">
        <h2 className={styles['heading-featured-in']}>As featured in</h2>
        <div className={styles['companies-feautured']}>{Logos()}</div>
      </div>
    </section>
  );
};

export default FeaturedInSection;
