import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import MobileMenu from './MobileMenu';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Navigation structure
  const navItems = [
    { name: 'Home', path: '/' },
    { 
      name: 'About Us', 
      path: '/about',
      dropdown: false
    },
    { 
      name: 'Careers', 
      path: '/careers',
      dropdown: true,
      dropdownItems: [
        { name: 'Search Jobs', path: '/careers/jobs' },
        { name: 'Early Careers', path: '/careers/early-careers' },
        { name: 'Experienced Professionals', path: '/careers/experienced' }
      ]
    },
    { 
      name: 'Industries', 
      path: '/industries',
      dropdown: true,
      dropdownItems: [
        { name: 'Financial Services', path: '/industries/financial-services' },
        { name: 'Healthcare', path: '/industries/healthcare' },
        { name: 'Technology', path: '/industries/technology' },
        { name: 'Retail', path: '/industries/retail' }
      ]
    },
    { 
      name: 'Capabilities', 
      path: '/capabilities',
      dropdown: true,
      dropdownItems: [
        { name: 'Digital Marketing', path: '/capabilities/digital-marketing' },
        { name: 'Data Analytics', path: '/capabilities/data-analytics' },
        { name: 'Brand Strategy', path: '/capabilities/brand-strategy' },
        { name: 'Market Research', path: '/capabilities/market-research' }
      ]
    },
    { name: 'Alumni', path: '/alumni' },
    { name: 'Decibello Blogs', path: '/blog' }
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

  const handleDropdownToggle = (name: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setActiveDropdown(activeDropdown === name ? null : name);
  };

  const handleClickOutside = () => {
    setActiveDropdown(null);
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      <nav className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center">
              <span className={`font-bold text-2xl ${
                isScrolled ? 'text-primary' : 'text-white'
              }`}>Decibello</span>
            </Link>
            
            {/* Desktop menu */}
            <div className="hidden lg:flex items-center space-x-6">
              {navItems.map((item) => (
                <div key={item.name} className="relative" onClick={(e) => e.stopPropagation()}>
                  {item.dropdown ? (
                    <div>
                      <button
                        onClick={(e) => handleDropdownToggle(item.name, e)}
                        className={`flex items-center text-body font-medium hover:text-secondary transition-colors ${
                          isScrolled ? 'text-dark' : 'text-white'
                        }`}
                        aria-expanded={activeDropdown === item.name}
                      >
                        {item.name}
                        <svg 
                          className={`ml-1 h-4 w-4 transition-transform ${activeDropdown === item.name ? 'rotate-180' : ''}`} 
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                        </svg>
                      </button>
                      
                      {/* Dropdown menu */}
                      {activeDropdown === item.name && (
                        <div className="absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-50">
                          <div className="py-1" role="menu" aria-orientation="vertical">
                            {item.dropdownItems?.map((dropdownItem) => (
                              <Link
                                key={dropdownItem.name}
                                to={dropdownItem.path}
                                className="block px-4 py-2 text-sm text-dark hover:bg-light hover:text-primary transition-colors"
                                role="menuitem"
                              >
                                {dropdownItem.name}
                              </Link>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      to={item.path}
                      className={`text-body font-medium hover:text-secondary transition-colors ${
                        isScrolled ? 'text-dark' : 'text-white'
                      }`}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
              
              {/* Contact button */}
              <Link
                to="/contact"
                className="text-body bg-secondary text-dark px-6 py-2 rounded hover:bg-opacity-90 transition-all font-medium border border-secondary"
              >
                Contact Us
              </Link>
            </div>

            {/* Mobile menu button */}
            <div className="lg:hidden">
              <button 
                onClick={() => setIsMobileMenuOpen(true)}
                className={`p-2 rounded-md focus:outline-none ${
                  isScrolled ? 'text-primary' : 'text-white'
                }`}
                aria-label="Open menu"
              >
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      <MobileMenu 
        isOpen={isMobileMenuOpen} 
        onClose={() => setIsMobileMenuOpen(false)} 
        navItems={navItems}
      />
    </>
  );
};

export default Navbar;