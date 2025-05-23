import React, { useState, useEffect } from 'react';
import { useScrollTo } from '../hooks/useScrollTo';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const scrollTo = useScrollTo();

  const navLinks = [
    { name: 'Approach', href: 'approach' },
    { name: 'Services', href: 'services' },
    // { name: 'About', href: 'about' },
    { name: 'Case Studies', href: 'case-studies' },
    { name: 'Insights', href: 'insights' },
    { name: 'Contact', href: 'contact' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    scrollTo(href);
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-md' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center">
            <span className={`font-bold text-2xl ${
              isScrolled ? 'text-primary' : 'text-dark'
            }`}>Decibello</span>
          </div>
          
          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.slice(0, -1).map(link => (
              <a
                key={link.name}
                href={`#${link.href}`}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`text-body font-medium hover:text-secondary transition-colors ${
                  isScrolled ? 'text-dark' : 'text-blue'
                }`}
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, 'contact')}
              className="text-body bg-secondary text-dark px-6 py-2 rounded hover:bg-opacity-90 transition-all font-medium border border-secondary"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;