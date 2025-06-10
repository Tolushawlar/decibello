import React from 'react';

const RetailPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-primary mb-6">Retail & Consumer Goods</h1>
        
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold text-primary mb-4">Transform the Retail Experience</h2>
          <p className="text-dark mb-4">
            We help retail and consumer goods companies navigate digital disruption, enhance customer 
            experiences, and optimize operations to stay competitive in a rapidly evolving market.
          </p>
          
          <div className="grid md:grid-cols-2 gap-6 mt-8">
            <div className="border border-gray-200 rounded-lg p-5">
              <h3 className="text-xl font-medium text-primary mb-3">Omnichannel Strategy</h3>
              <p className="text-dark/80">
                Create seamless shopping experiences across physical stores, e-commerce, 
                mobile apps, and social commerce.
              </p>
            </div>
            
            <div className="border border-gray-200 rounded-lg p-5">
              <h3 className="text-xl font-medium text-primary mb-3">Supply Chain Optimization</h3>
              <p className="text-dark/80">
                Improve visibility, efficiency, and resilience in your supply chain with 
                advanced analytics and digital technologies.
              </p>
            </div>
            
            <div className="border border-gray-200 rounded-lg p-5">
              <h3 className="text-xl font-medium text-primary mb-3">Customer Analytics</h3>
              <p className="text-dark/80">
                Leverage data to understand customer behavior, personalize experiences, 
                and increase loyalty and lifetime value.
              </p>
            </div>
            
            <div className="border border-gray-200 rounded-lg p-5">
              <h3 className="text-xl font-medium text-primary mb-3">Digital Commerce</h3>
              <p className="text-dark/80">
                Build and optimize e-commerce platforms that drive conversion, reduce friction, 
                and scale with your business.
              </p>
            </div>
          </div>
        </div>
        
        <div className="bg-light/50 rounded-lg p-6">
          <h2 className="text-2xl font-semibold text-primary mb-4">Industry Challenges We Solve</h2>
          
          <div className="space-y-4 mt-6">
            <div className="flex items-start">
              <div className="bg-secondary text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 mt-1">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-medium text-primary">Changing Consumer Expectations</h3>
                <p className="text-dark/80">Adapt to evolving customer preferences and demands for personalized experiences</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="bg-secondary text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 mt-1">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-medium text-primary">Digital Disruption</h3>
                <p className="text-dark/80">Navigate the shift to digital channels and new business models</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="bg-secondary text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 mt-1">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-medium text-primary">Supply Chain Complexity</h3>
                <p className="text-dark/80">Manage global supply networks and mitigate disruption risks</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="bg-secondary text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 mt-1">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-medium text-primary">Data Integration</h3>
                <p className="text-dark/80">Connect siloed systems to create a unified view of operations and customers</p>
              </div>
            </div>
          </div>
          
          <div className="mt-8 bg-white p-5 rounded-lg border border-secondary/20">
            <h3 className="text-xl font-medium text-primary mb-3">Success Stories</h3>
            <p className="text-dark/80 mb-4">
              Our retail clients have achieved significant results through our partnership:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-dark/80">
              <li>30% increase in online conversion rates</li>
              <li>25% reduction in inventory costs</li>
              <li>40% improvement in customer retention</li>
              <li>50% faster time-to-market for new products</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RetailPage;