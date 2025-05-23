import { useEffect } from 'react'
import Navbar from './components/Navbar'
import MinimalHero from './components/MinimalHero'
import ServicesSection from './components/ServicesSection'
import ApproachSection from './components/ApproachSection'
import CaseStudySection from './components/CaseStudySection'
import InsightsSection from './components/InsightsSection'
import ContactFooterSection from './components/ContactFooterSection'

function App() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.section-fade').forEach(section => {
      observer.observe(section);
    });

    return () => {
      document.querySelectorAll('.section-fade').forEach(section => {
        observer.unobserve(section);
      });
    };
  }, []);

  return (
    <>
      <Navbar />
      <MinimalHero />
      <ApproachSection />
      <ServicesSection />
      <CaseStudySection />
      <InsightsSection />
      <ContactFooterSection />
    </>
  )
}

export default App