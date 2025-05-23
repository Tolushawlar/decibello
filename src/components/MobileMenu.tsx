import React from 'react';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose }) => {
  return (
    <div className={`fixed inset-0 z-50 transform transition-transform duration-300 ${
      isOpen ? 'translate-x-0' : 'translate-x-full'
    }`}>
      {/* Backdrop */}
      <div 
        className={`absolute inset-0 bg-dark/50 backdrop-blur-sm transition-opacity duration-300 ${
          isOpen ? 'opacity-100' : 'opacity-0'
        }`}
        onClick={onClose}
      ></div>
      
      {/* Menu content */}
      <div className="absolute right-0 top-0 h-full w-64 bg-white shadow-lg">
        <div className="p-6">
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 text-dark hover:text-primary transition-colors"
          >
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
          
          <nav className="mt-8">
            <div className="flex flex-col space-y-4">
              <a href="#services" onClick={onClose} className="text-dark hover:text-primary transition-colors py-2">
                Services
              </a>
              <a href="#about" onClick={onClose} className="text-dark hover:text-primary transition-colors py-2">
                About
              </a>
              <a href="#approach" onClick={onClose} className="text-dark hover:text-primary transition-colors py-2">
                Our Approach
              </a>
              <a href="#contact" onClick={onClose} className="bg-secondary text-dark px-4 py-2 rounded text-center hover:bg-opacity-90 transition-colors">
                Contact Us
              </a>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;