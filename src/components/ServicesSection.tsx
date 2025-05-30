import React from 'react';
import MotionCard from './MotionCard';
import ServiceCard from './ServiceCard';
import marketAnalysisIcon from '../assets/icon-market-analysis.svg';
import brandMessagingIcon from '../assets/icon-brand-messaging.svg';
import leadGenerationIcon from '../assets/icon-lead-generation.svg';

const ServicesSection = () => {
  return (
    <section id="services" className="relative py-24 overflow-hidden bg-gradient-to-br from-light/50 to-white">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-gradient-to-tr from-secondary/5 to-primary/5 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center mb-20">
          <span className="inline-block bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent text-base font-semibold tracking-wider mb-3">
            WHAT WE OFFER
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-dark mb-6 leading-tight">Our Services</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-8 rounded-full"></div>
          <p className="text-dark/70 max-w-2xl mx-auto text-lg leading-relaxed">
            Through deep market analysis and performance diagnostics, we uncover opportunities that position businesses for success.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          <MotionCard delay={0.1}>
            <ServiceCard 
              title="Market Analysis"
              description="Deep dive into market trends and consumer behavior to identify growth opportunities for your business."
              color="primary"
              iconSvg={marketAnalysisIcon}
              icon={
                <svg className="h-8 w-8 text-primary" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path>
                  <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path>
                </svg>
              }
            />
          </MotionCard>

          <MotionCard delay={0.2}>
            <ServiceCard 
              title="Brand Messaging"
              description="Refine your brand voice and messaging to connect deeply with your target audience and stand out."
              color="secondary"
              iconSvg={brandMessagingIcon}
              icon={
                <svg className="h-8 w-8 text-secondary" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"></path>
                  <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd"></path>
                </svg>
              }
            />
          </MotionCard>

          <MotionCard delay={0.3} className="sm:col-span-2 md:col-span-1">
            <ServiceCard 
              title="Lead Generation"
              description="Attract high-quality leads through data-driven marketing strategies and targeted campaigns."
              color="primary"
              iconSvg={leadGenerationIcon}
              icon={
                <svg className="h-8 w-8 text-primary" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M5.5 16a3.5 3.5 0 01-.369-6.98 4 4 0 117.753-1.977A4.5 4.5 0 1113.5 16h-8z"></path>
                </svg>
              }
            />
          </MotionCard>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;