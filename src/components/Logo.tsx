import React from 'react';
import logoSvg from '../assets/file(1).svg';
import logoWhiteSvg from '../assets/file(3).svg';

interface LogoProps {
  variant?: 'default' | 'white';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  showText?: boolean;
}

const Logo: React.FC<LogoProps> = ({ 
  variant = 'default', 
  size = 'md',
  className = '',
  showText = true
}) => {
  const sizeClasses = {
    sm: 'h-10 w-10',
    md: 'h-12 w-12', 
    lg: 'h-16 w-16'  };

  const logoSrc = variant === 'white' ? logoWhiteSvg : logoSvg;

  return (
    <div className={`flex items-center ${className}`}>
      <img 
        src={logoSrc} 
        alt="Decibello Logo" 
        className={`${sizeClasses[size]}`}
      />
      {showText && (
        <span className={`ml-2 font-bold text-xl ${variant === 'white' ? 'text-yellow' : 'text-primary'}`}>
          Decibello
        </span>
      )}
    </div>
  );
};

export default Logo;