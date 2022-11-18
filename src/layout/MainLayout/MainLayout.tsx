import FeaturedInSection from '../../sections/FeaturedInSection/FeaturedInSection';
import HeroSection from '../../sections/Hero/HeroSection';
import HowItWorksSection from '../../sections/HowItWorksSection/HowItWorksSection';

const MainLayout = () => {
  return (
    <main>
      <HeroSection />
      <FeaturedInSection />
      <HowItWorksSection />
    </main>
  );
};

export default MainLayout;
