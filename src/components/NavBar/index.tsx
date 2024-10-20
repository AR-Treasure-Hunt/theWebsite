import React, { useState } from 'react';
import { assets } from '../../sections/LandingSection/components/HeroSection/assets/assets';
import { navItems } from './constants/index';
import { Menu, X } from 'lucide-react';

interface NavItem {
  href: string;
  label: string | JSX.Element;
  hasDropdown?: boolean;
  dropdownItems?: { href: string; label: string }[];
}

const BlueTriangle: React.FC<{ isOpen: boolean }> = ({ isOpen }) => (
  <svg
    width="30"
    height="30"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`ml-1 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
  >
    <path d="M10 14L5 7H15L10 14Z" fill="#004B6E" />
  </svg>
);

const Navbar: React.FC = () => {
  const [isMobileDrawerOpen, setIsMobileDrawerOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleNavbar = () => setIsMobileDrawerOpen(!isMobileDrawerOpen);
  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

  return (
    <nav className="sticky top-0 z-50 h-14 lg:h-16 py-3 px-10 sm:px-10 lg:px-12 border-b border-[#004B6E] backdrop-blur bg-white/80">
      <div className="max-w-full relative h-full flex justify-between items-center">
        <div className="flex items-center flex-shrink-0">
          <img className="h-6 md:h-10 w-6 md:w-10" src={assets.Logo} alt="logo" />
          <h1 className="ml-2 sm:ml-4 text-3xl md:text-4xl lg:text-[40px] leading-tight tracking-normal text-[#004B6E] whitespace-nowrap">
            AR Treasure Hunt
          </h1>
        </div>
        <ul className="hidden lg:flex space-x-2 sm:space-x-4 xl:space-x-8 text-lg lg:text-3xl leading-8 text-[#004B6E] items-center tracking-normal">
          {navItems.map((item: NavItem, index: number) => (
            <li key={index} className="relative">
              <a href={item.href} className="px-0 flex items-center " onClick={item.hasDropdown ? toggleDropdown : undefined}>
                {item.label}
                {item.hasDropdown && <BlueTriangle isOpen={isDropdownOpen} />}
              </a>
              {item.hasDropdown && isDropdownOpen && (
                <ul className="absolute  top-full mt-2 shadow-lg rounded-md p-2 bg-white border-t border-[#004B6E]">
                  {item.dropdownItems?.map((dropdownItem, idx) => (
                    <li key={idx}>
                      <a href={dropdownItem.href} className="block text-md px-3 py-2 hover:bg-gray-100 text-[#FF8700]">
                        {dropdownItem.label}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
          <li className="hidden lg:flex justify-center items-center">
            <a href="#" className="h-[48px] py-1 px-5 border rounded-lg bg-[#004B6E] hover:bg-[#002a3d] transition-colors text-white text-lg lg:text-3xl">
              Sponsor Us
            </a>
          </li>
        </ul>
          <button className="lg:hidden" onClick={toggleNavbar} aria-expanded={isMobileDrawerOpen} aria-label="Toggle navigation menu">
          {isMobileDrawerOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {isMobileDrawerOpen && (
        <div className="absolute top-full left-0 right-0 z-50 bg-white p-6 sm:p-12 flex flex-col justify-center items-center text-xl sm:text-3xl text-[#004B6E] border-t border-[#004B6E]">
          <ul className="space-y-4 sm:space-y-6 text-center">
            {navItems.map((item: NavItem, index: number) => (
              <li key={index} className="relative w-full">
                <a href={item.href} onClick={item.hasDropdown ? toggleDropdown : undefined} className="flex items-center justify-center">
                  {item.label}
                  {item.hasDropdown && <BlueTriangle isOpen={isDropdownOpen} />}
                </a>
                {item.hasDropdown && isDropdownOpen && (
                  <ul className="text-[#FF8700] translate-y-4 hover:bg-gray-50">
                    {item.dropdownItems?.map((dropdownItem, idx) => (
                      <li key={idx}>
                        <a href={dropdownItem.href} className="block py-1 px-4 hover:bg-gray-200">
                          {dropdownItem.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
            <li>
              <a href="#" className="inline-block mt-4 py-2 px-4 sm:px-6 border rounded-lg bg-[#004B6E] text-white">
                Sponsor Us
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

