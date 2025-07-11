import Hero from '../components/Hero';
import ServicesSection from '../components/ServicesSection';
import ApproachSection from '../components/ApproachSection';
import CaseStudySection from '../components/CaseStudySection';
import InsightsSection from '../components/InsightsSection';
import ContactFooterSection from '../components/ContactFooterSection';

const HomePage = () => {
  return (
    <>
      <Hero />
      <ServicesSection />
      <ApproachSection />
      <CaseStudySection />
      <InsightsSection />
      <ContactFooterSection />
    </>
  );
};

export default HomePage;