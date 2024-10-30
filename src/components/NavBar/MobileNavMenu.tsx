import React from 'react';
import { Link } from '@tanstack/react-router';
import { useHandleSmoothScroll } from '@/utils/useHandleSmoothScroll';

interface NavItem {
  label: string;
  href: string;
  hasDropdown?: boolean;
  dropdownItems?: {
    id: string; label: string; href: string 
}[];
  id?: string;
}

interface MobileNavMenuProps {
  navItems: NavItem[];
  isDropdownOpen: boolean;
  toggleDropdown: () => void;
  closeNavMenu: () => void; // Add this prop to close the navbar
}

const BlueTriangle: React.FC<{ isOpen: boolean }> = ({ isOpen }) => (
  <svg
    width="30"
    height="30"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`ml-1 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
    <path d="M10 14L5 7H15L10 14Z" fill="#004B6E" />
  </svg>
);


const MobileNavMenu: React.FC<MobileNavMenuProps> = ({ navItems, isDropdownOpen, toggleDropdown, closeNavMenu }) => {
  return (
    <div className="absolute top-full left-0 right-0 z-50 bg-white p-6 sm:p-12 flex flex-col justify-center items-center text-[3vh] sm:text-[4vh] text-[#004B6E] border-t border-[#004B6E]">
      <ul className="space-y-4 sm:space-y-6 text-center">
        {navItems.map((item: NavItem, index: number) => (
          <li key={index} className="relative w-full">
            <Link
              to="/"
              onClick={(e) => {
                if (item.hasDropdown) {
                  toggleDropdown();
                } else {
                  closeNavMenu(); // Close the navbar only if the item does not have a dropdown
                }
                useHandleSmoothScroll(e, item.id || '');
              }}
              className="flex items-center justify-center"
            >
              {item.label}
              {item.hasDropdown && <BlueTriangle isOpen={isDropdownOpen} />}
            </Link>
            {item.hasDropdown && isDropdownOpen && (
              <ul className="text-[#FF8700] translate-y-4 hover:bg-gray-50">
                {item.dropdownItems?.map((dropdownItem, idx) => (
                  <li key={idx}>
                    <Link
                      to={`/#${dropdownItem.href}`}
                      className="block py-[1vh] px-[2vh] hover:bg-gray-200"
                      onClick={(e) => {
                        useHandleSmoothScroll(e, dropdownItem.id || '');
                        closeNavMenu(); // Close the navbar when a dropdown link is clicked
                      }}
                    >
                      {dropdownItem.label}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
        <li>
          <Link
            to="/registration"
            className="flex justify-center items-center mx-auto bg-[#003F5A] text-white text-[2.1vh] sm:text-[2.5vh] lg:text-[3vh] xl:text-[4vh] rounded-[1vh] hover:bg-[#002a3d] transition-colors whitespace-nowrap h-[5vh] md:h-[6vh] lg:h-[7vh] xl:h-[8vh] w-[20vh] lg:w-[23vh] xl:w-[30vh]"
            onClick={closeNavMenu} // Close the navbar when the registration link is clicked
          >
            Join The Adventure
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default MobileNavMenu;