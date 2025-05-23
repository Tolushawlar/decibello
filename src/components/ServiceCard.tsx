import React from 'react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  gradient: string;
  onClick?: () => void;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  icon,
  gradient,
  onClick
}) => {
  return (
    <div 
      className="group backdrop-blur-xl bg-white/30 p-8 rounded-2xl border border-white/20 shadow-xl h-full transition-all duration-300 hover:-translate-y-1 cursor-pointer"
      onClick={onClick}
    >
      {/* Icon */}
      <div className={`bg-gradient-to-br ${gradient} p-4 rounded-xl w-16 h-16 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
        {icon}
      </div>

      {/* Content */}
      <h3 className="text-xl font-semibold text-dark mb-4">{title}</h3>
      <p className="text-dark/70 mb-6">{description}</p>

      {/* Learn More Link */}
      <div className="inline-flex items-center text-primary hover:text-secondary transition-colors group/link">
        <span className="mr-2">Learn More</span>
        <svg 
          className="w-4 h-4 transform transition-transform group-hover/link:translate-x-1" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
        </svg>
      </div>
    </div>
  );
};

export default ServiceCard;