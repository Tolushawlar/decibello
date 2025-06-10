import React from 'react';
import { Link } from 'react-router-dom';

const CaseStudiesPage: React.FC = () => {
  // Sample case studies data - in a real app, this would come from an API or CMS
  const caseStudies = [
    {
      id: 1,
      title: 'Global Bank Digital Transformation',
      client: 'Major Financial Institution',
      industry: 'Financial Services',
      excerpt: 'How we helped a global bank modernize its core systems and create a seamless digital experience for customers.',
      image: 'https://via.placeholder.com/800x450',
      results: ['40% increase in digital transactions', '60% reduction in processing time', '$25M annual cost savings'],
      slug: 'global-bank-digital-transformation'
    },
    {
      id: 2,
      title: 'Healthcare Provider Data Analytics Platform',
      client: 'Leading Healthcare Network',
      industry: 'Healthcare',
      excerpt: 'Developing a comprehensive data analytics platform to improve patient outcomes and operational efficiency.',
      image: 'https://via.placeholder.com/800x450',
      results: ['30% reduction in readmission rates', '25% improvement in resource allocation', 'Enhanced predictive capabilities for patient care'],
      slug: 'healthcare-data-analytics-platform'
    },
    {
      id: 3,
      title: 'Retail Supply Chain Optimization',
      client: 'International Retailer',
      industry: 'Retail',
      excerpt: 'Transforming a retailer supply chain with AI and IoT to improve resilience and customer satisfaction.',
      image: 'https://via.placeholder.com/800x450',
      results: ['35% reduction in inventory costs', '28% improvement in on-time deliveries', '99.8% order accuracy'],
      slug: 'retail-supply-chain-optimization'
    },
    {
      id: 4,
      title: 'Manufacturing IoT Implementation',
      client: 'Global Manufacturer',
      industry: 'Manufacturing',
      excerpt: 'Implementing IoT sensors and real-time analytics to create a smart factory ecosystem.',
      image: 'https://via.placeholder.com/800x450',
      results: ['22% increase in production efficiency', '45% reduction in unplanned downtime', '15% energy consumption reduction'],
      slug: 'manufacturing-iot-implementation'
    }
  ];

  const industries = [
    'Financial Services',
    'Healthcare',
    'Retail',
    'Manufacturing',
    'Energy',
    'Public Sector'
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-primary mb-2">Case Studies</h1>
        <p className="text-xl text-dark/70 mb-8">Real-world success stories from our client partnerships</p>
        
        {/* Filters */}
        <div className="mb-8 bg-white rounded-lg shadow-sm p-5">
          <h2 className="text-lg font-semibold text-primary mb-4">Filter by Industry</h2>
          <div className="flex flex-wrap gap-2">
            <button className="px-4 py-2 bg-secondary text-white rounded-full text-sm font-medium">
              All Industries
            </button>
            {industries.map((industry, index) => (
              <button 
                key={index} 
                className="px-4 py-2 bg-light hover:bg-light/70 text-dark rounded-full text-sm font-medium transition-colors"
              >
                {industry}
              </button>
            ))}
          </div>
        </div>
        
        {/* Case Studies Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-2">
          {caseStudies.map(study => (
            <div key={study.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <img src={study.image} alt={study.title} className="w-full h-56 object-cover" />
              <div className="p-6">
                <div className="flex items-center mb-3">
                  <span className="text-sm bg-light/70 text-primary px-3 py-1 rounded-full font-medium">
                    {study.industry}
                  </span>
                </div>
                <h3 className="text-2xl font-semibold text-primary mb-2">{study.title}</h3>
                <p className="text-dark/80 mb-4">{study.excerpt}</p>
                
                <div className="mb-5">
                  <h4 className="text-lg font-medium text-primary mb-2">Results:</h4>
                  <ul className="space-y-1">
                    {study.results.map((result, index) => (
                      <li key={index} className="flex items-start">
                        <svg className="w-5 h-5 text-secondary mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        <span className="text-dark/80">{result}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <Link 
                  to={`/insights/case-studies/${study.slug}`} 
                  className="inline-block px-5 py-2 bg-primary text-white font-medium rounded-lg hover:bg-primary/90 transition-colors"
                >
                  Read full case study
                </Link>
              </div>
            </div>
          ))}
        </div>
        
        {/* Contact CTA */}
        <div className="bg-light/50 rounded-lg p-8 mt-12 text-center">
          <h2 className="text-2xl font-semibold text-primary mb-3">Ready to achieve similar results?</h2>
          <p className="text-dark/80 mb-6 max-w-2xl mx-auto">
            Our team of experts is ready to help you transform your business with innovative technology solutions.
          </p>
          <Link 
            to="/contact" 
            className="inline-block px-6 py-3 bg-secondary text-white font-medium rounded-lg hover:bg-secondary/90 transition-colors"
          >
            Contact us today
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CaseStudiesPage;