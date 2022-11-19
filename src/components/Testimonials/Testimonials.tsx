import TestimonialInfo from '../../models/testimonial';
import Testimonial from '../Testimonial/Testimonial';

type TestimonialsProps = {
  data: TestimonialInfo[];
};

const Testimonials: React.FC<TestimonialsProps> = ({ data }) => {
  return (
    <div className="grid grid--2-cols">
      {data.map(testimonial => (
        <Testimonial
          name={testimonial.name}
          text={testimonial.text}
          image={testimonial.image}
          key={Math.random()}
        />
      ))}
    </div>
  );
};

export default Testimonials;
