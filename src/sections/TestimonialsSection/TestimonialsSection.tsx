import Testimonial from '../../components/Testimonial/Testimonial';
import styles from './TestimonialsSection.module.scss';

// Testimonial Images
import customer1Img from '../../assets/images/customers/dave.jpg';
import customer2Img from '../../assets/images/customers/ben.jpg';
import customer3Img from '../../assets/images/customers/steve.jpg';
import customer4Img from '../../assets/images/customers/hannah.jpg';

// Gallery Images
import galleryImg1 from '../../assets/images/gallery/gallery-1.jpg';
import galleryImg2 from '../../assets/images/gallery/gallery-2.jpg';
import galleryImg3 from '../../assets/images/gallery/gallery-3.jpg';
import galleryImg4 from '../../assets/images/gallery/gallery-4.jpg';
import galleryImg5 from '../../assets/images/gallery/gallery-5.jpg';
import galleryImg6 from '../../assets/images/gallery/gallery-6.jpg';
import galleryImg7 from '../../assets/images/gallery/gallery-7.jpg';
import galleryImg8 from '../../assets/images/gallery/gallery-8.jpg';
import galleryImg9 from '../../assets/images/gallery/gallery-9.jpg';
import galleryImg10 from '../../assets/images/gallery/gallery-10.jpg';
import galleryImg11 from '../../assets/images/gallery/gallery-11.jpg';
import galleryImg12 from '../../assets/images/gallery/gallery-12.jpg';

import TestimonialInfo from '../../models/testimonial';
import Testimonials from '../../components/Testimonials/Testimonials';
import Image from '../../models/image';
import Gallery from '../../components/Gallery/Gallery';

const testimonialsData: TestimonialInfo[] = [
  {
    name: 'Dave Bryson',
    text: 'Inexpensive, healthy and great-tasting meals, without even having to order manually! It feels truly magical.',

    image: {
      src: customer1Img,
      alt: 'Customer 1',
    },
  },

  {
    name: 'Ben Hadley',
    text: "The AI algorithm is crazy good, it chooses the right meals for me every time. It's amazing not to worry about food anymore!",

    image: {
      src: customer2Img,
      alt: 'Customer 2',
    },
  },

  {
    name: 'Steve Miller',
    text: "Omnifood is a life saver! I just started a company, so there's no time for cooking. I couldn't live without my daily meals now!",

    image: {
      src: customer3Img,
      alt: 'Customer 3',
    },
  },

  {
    name: 'Hannah Smith',
    text: 'I got Omnifood for the whole family, and it frees up so much time! Plus, everything is organic and vegan and without plastic.',

    image: {
      src: customer4Img,
      alt: 'Customer 4',
    },
  },
];

const images: Image[] = [
  {
    src: galleryImg1,
    alt: 'Gallery image 1',
  },

  {
    src: galleryImg2,
    alt: 'Gallery image 2',
  },

  {
    src: galleryImg3,
    alt: 'Gallery image 3',
  },

  {
    src: galleryImg4,
    alt: 'Gallery image 4',
  },

  {
    src: galleryImg5,
    alt: 'Gallery image 5',
  },

  {
    src: galleryImg6,
    alt: 'Gallery image 6',
  },

  {
    src: galleryImg7,
    alt: 'Gallery image 7',
  },

  {
    src: galleryImg8,
    alt: 'Gallery image 8',
  },

  {
    src: galleryImg9,
    alt: 'Gallery image 9',
  },

  {
    src: galleryImg10,
    alt: 'Gallery image 10',
  },

  {
    src: galleryImg11,
    alt: 'Gallery image 11',
  },

  {
    src: galleryImg12,
    alt: 'Gallery image 12',
  },
];

const TestimonialsSection = () => {
  return (
    <section className={styles['section-testimonials']} id="section-testimonials">
      <div className={styles['testimonial-col']}>
        <span className="subheading">Testimonials</span>
        <h2 className="heading-secondary">Once you try it, you can't go back</h2>

        <Testimonials data={testimonialsData} />
      </div>

      <Gallery images={images} />
    </section>
  );
};

export default TestimonialsSection;
