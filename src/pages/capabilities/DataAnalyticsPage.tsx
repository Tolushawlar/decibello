import React from 'react';

const DataAnalyticsPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-primary mb-6">Data & Analytics</h1>
        
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold text-primary mb-4">Unlock the Power of Your Data</h2>
          <p className="text-dark mb-4">
            Our data and analytics services help organizations transform raw data into actionable insights 
            that drive better business decisions and create competitive advantage.
          </p>
          
          <div className="grid md:grid-cols-2 gap-6 mt-8">
            <div className="border border-gray-200 rounded-lg p-5">
              <h3 className="text-xl font-medium text-primary mb-3">Data Strategy</h3>
              <p className="text-dark/80">
                Develop a comprehensive data strategy aligned with your business objectives to maximize 
                the value of your data assets.
              </p>
            </div>
            
            <div className="border border-gray-200 rounded-lg p-5">
              <h3 className="text-xl font-medium text-primary mb-3">Data Engineering</h3>
              <p className="text-dark/80">
                Build robust data pipelines and infrastructure to collect, process, and store data 
                efficiently and securely.
              </p>
            </div>
            
            <div className="border border-gray-200 rounded-lg p-5">
              <h3 className="text-xl font-medium text-primary mb-3">Advanced Analytics</h3>
              <p className="text-dark/80">
                Apply statistical analysis, machine learning, and AI to extract deeper insights 
                and enable predictive capabilities.
              </p>
            </div>
            
            <div className="border border-gray-200 rounded-lg p-5">
              <h3 className="text-xl font-medium text-primary mb-3">Data Visualization</h3>
              <p className="text-dark/80">
                Create intuitive dashboards and reports that make complex data accessible and 
                actionable for decision-makers.
              </p>
            </div>
          </div>
        </div>
        
        <div className="bg-light/50 rounded-lg p-6">
          <h2 className="text-2xl font-semibold text-primary mb-4">Our Data & Analytics Solutions</h2>
          
          <div className="space-y-6 mt-6">
            <div className="bg-white p-5 rounded-lg shadow-sm">
              <h3 className="text-xl font-medium text-primary mb-2">Big Data Processing</h3>
              <p className="text-dark/80">
                Implement scalable solutions for processing and analyzing large volumes of structured 
                and unstructured data using technologies like Hadoop, Spark, and cloud-based data lakes.
              </p>
            </div>
            
            <div className="bg-white p-5 rounded-lg shadow-sm">
              <h3 className="text-xl font-medium text-primary mb-2">Business Intelligence</h3>
              <p className="text-dark/80">
                Deploy modern BI tools and platforms that enable self-service analytics and 
                data-driven decision making across your organization.
              </p>
            </div>
            
            <div className="bg-white p-5 rounded-lg shadow-sm">
              <h3 className="text-xl font-medium text-primary mb-2">AI & Machine Learning</h3>
              <p className="text-dark/80">
                Develop and implement AI and ML models that automate processes, generate predictions, 
                and uncover patterns that human analysis might miss.
              </p>
            </div>
            
            <div className="bg-white p-5 rounded-lg shadow-sm">
              <h3 className="text-xl font-medium text-primary mb-2">Data Governance</h3>
              <p className="text-dark/80">
                Establish frameworks and processes to ensure data quality, security, compliance, 
                and ethical use throughout your organization.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DataAnalyticsPage;