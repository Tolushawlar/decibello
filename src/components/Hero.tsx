import React from 'react';

const Hero = () => {
  return (
    <section className="relative h-screen">
      {/* Background Image with Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://picsum.photos/id/1067/1920/1080" 
          alt="Hero Background" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-dark/70 to-transparent"></div>
      </div>
      
      {/* Content Container */}
      <div className="relative z-10 h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center h-full">
          {/* Content - Full width on mobile, half width on desktop */}
          <div className="w-full lg:w-1/2 lg:ml-auto text-white px-4 sm:px-6 lg:px-0">
            <h1 className="text-h1 font-bold mb-6 text-center lg:text-left">
              Transform Your <span className="text-secondary">Digital Presence</span>
            </h1>
            <p className="text-body mb-8 max-w-lg mx-auto lg:mx-0 text-center lg:text-left">
              Decibello Limited helps businesses leverage data-driven insights to create impactful marketing strategies that drive measurable growth and lasting customer connections.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center lg:justify-start">
              <button className="bg-secondary text-dark px-6 py-3 rounded hover:bg-opacity-90 text-body font-semibold">
                Get Started
              </button>
              <button className="border border-white text-white px-6 py-3 rounded hover:bg-white hover:bg-opacity-10 text-body transition-colors">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;