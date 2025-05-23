/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from 'react';
import MotionCard from './MotionCard';

const ServicesSection = () => {
  const [activeService, setActiveService] = useState<string | null>(null);

  const services = [
    {
      title: "Market Analysis",
      description: "Deep dive into market trends and consumer behavior to identify growth opportunities for your business.",
      details: "Leverage advanced analytics and market research to uncover hidden opportunities and stay ahead of competition.",
      icon: (
        <svg className="h-8 w-8 text-white" fill="currentColor" viewBox="0 0 20 20">
          <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path>
          <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path>
        </svg>
      ),
      gradient: "from-primary to-primary/60",
      delay: 0.1
    },
    {
      title: "Brand Messaging",
      description: "Refine your brand voice and messaging to connect deeply with your target audience and stand out.",
      details: "Create compelling narratives that resonate with your target audience and establish a strong brand presence.",
      icon: (
        <svg className="h-8 w-8 text-white" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"></path>
          <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd"></path>
        </svg>
      ),
      gradient: "from-secondary to-secondary/60",
      delay: 0.2
    },
    {
      title: "Lead Generation",
      description: "Attract high-quality leads through data-driven marketing strategies and targeted campaigns.",
      details: "Implement cutting-edge strategies to convert high-value prospects into loyal customers.",
      icon: (
        <svg className="h-8 w-8 text-white" fill="currentColor" viewBox="0 0 20 20">
          <path d="M5.5 16a3.5 3.5 0 01-.369-6.98 4 4 0 117.753-1.977A4.5 4.5 0 1113.5 16h-8z"></path>
        </svg>
      ),
      gradient: "from-primary to-primary/60",
      delay: 0.3
    }
  ];

  return (
    <section  id="services" className="relative py-24 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-light/50 to-white"></div>
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

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, _index) => (
            <MotionCard key={service.title} delay={service.delay}>
              <div 
                className={`group backdrop-blur-xl bg-white/30 p-8 rounded-2xl border border-white/20 shadow-xl h-full transition-all duration-300 hover:-translate-y-1 cursor-pointer relative ${
                  activeService === service.title ? 'ring-2 ring-primary ring-offset-4' : ''
                }`}
                onClick={() => setActiveService(activeService === service.title ? null : service.title)}
              >
                {/* Icon */}
                <div className={`bg-gradient-to-br ${service.gradient} p-4 rounded-xl w-16 h-16 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  {service.icon}
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold text-dark mb-4">{service.title}</h3>
                <p className="text-dark/70 mb-6">{service.description}</p>

                {/* Learn More Link */}
                <div className="inline-flex items-center text-primary hover:text-secondary transition-colors group/link">
                  <span className="mr-2">Learn More</span>
                  <svg 
                    className={`w-4 h-4 transform transition-transform duration-300 ${
                      activeService === service.title ? 'rotate-90' : 'group-hover/link:translate-x-1'
                    }`}
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                  </svg>
                </div>

                {/* Expanded Details */}
                <div className={`overflow-hidden transition-all duration-300 ${
                  activeService === service.title ? 'max-h-48 mt-6 opacity-100' : 'max-h-0 opacity-0'
                }`}>
                  <div className="p-4 bg-white/50 backdrop-blur-sm rounded-lg border border-white/10">
                    <p className="text-dark/80">{service.details}</p>
                  </div>
                </div>
              </div>
            </MotionCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;