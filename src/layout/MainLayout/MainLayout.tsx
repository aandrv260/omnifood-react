import FeaturedInSection from '../../sections/FeaturedInSection/FeaturedInSection';
import HeroSection from '../../sections/Hero/HeroSection';
import HowItWorksSection from '../../sections/HowItWorksSection/HowItWorksSection';
import SectionMeals from '../../sections/SectionMeals/SectionMeals';

const MainLayout = () => {
  return (
    <main>
      <HeroSection />
      <FeaturedInSection />
      <HowItWorksSection />
      <SectionMeals />
    </main>
  );
};

export default MainLayout;
