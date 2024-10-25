import React, { useState } from 'react';
import Logo from '/images/Logo.webp';
import { navItems } from './navitems';
import { Menu, X } from 'lucide-react';
import NavMenu from './navmenu';
import MobileNavMenu from './MobileNavMenu';

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

const Title = () => {
  return (
    <div className="flex items-center flex-shrink-0">
      <img className="h-[4vh] md:h-[5vh] w-[4vh] md:w-[5vh]" src={Logo} alt="logo" />
      <h1 className="ml-2 sm:ml-[2vh] text-[3vh] md:text-[4vh] xl:text-[5vh] leading-tight tracking-normal text-[#004B6E] whitespace-nowrap">
        AR Treasure Hunt
      </h1>
    </div>
  );
};

const Navbar: React.FC = () => {
  const [isMobileDrawerOpen, setIsMobileDrawerOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleNavbar = () => setIsMobileDrawerOpen(!isMobileDrawerOpen);
  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 h-[6vh] lg:h-[7vh] py-3 px-10 sm:px-10 lg:px-20 border-b border-[#004B6E] backdrop-blur bg-white/80">
      <div className="max-w-full relative h-full flex justify-between items-center">
        <Title />
        <NavMenu navItems={navItems} isDropdownOpen={isDropdownOpen} toggleDropdown={toggleDropdown} />
        <button className="lg:hidden" onClick={toggleNavbar} aria-expanded={isMobileDrawerOpen} aria-label="Toggle navigation menu">
          {isMobileDrawerOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {isMobileDrawerOpen && (
        <MobileNavMenu navItems={navItems} isDropdownOpen={isDropdownOpen} toggleDropdown={toggleDropdown} />
      )}
    </nav>
  );
};

export default Navbar;
