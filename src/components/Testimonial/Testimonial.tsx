import React from 'react';
import Image from '../../models/image';
import TestimonialInfo from '../../models/testimonial';
import styles from './Testimonial.module.scss';

type TestimonialProps = TestimonialInfo;

const Testimonial: React.FC<TestimonialProps> = props => {
  const { image, text, name } = props;

  return (
    <figure className="testimonial">
      <img alt={image?.alt} src={image?.src} className={styles['testimonial-img']} />
      <blockquote className={styles['testimonial-text']}>{text}</blockquote>
      <p className={styles['testimonial-name']}>&ndash; {name}</p>
    </figure>
  );
};

export default Testimonial;
