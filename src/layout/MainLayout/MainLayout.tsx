import FeaturedInSection from '../../sections/FeaturedInSection/FeaturedInSection';
import HeroSection from '../../sections/Hero/HeroSection';
import HowItWorksSection from '../../sections/HowItWorksSection/HowItWorksSection';
import SectionMeals from '../../sections/SectionMeals/SectionMeals';
import TestimonialsSection from '../../sections/TestimonialsSection/TestimonialsSection';

const MainLayout = () => {
  return (
    <main>
      <HeroSection />
      <FeaturedInSection />
      <HowItWorksSection />
      <SectionMeals />
      <TestimonialsSection />
    </main>
  );
};

export default MainLayout;
