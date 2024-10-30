import { useHandleSmoothScroll } from '@/utils/useHandleSmoothScroll';
import React from 'react';
import {Link} from '@tanstack/react-router';

interface NavItem {
  label: string;
  href: string;
  hasDropdown?: boolean;
  dropdownItems?: {
    id: string; label: string; href: string 
}[];
  id?: string;
}

interface NavMenuProps {
  navItems: NavItem[];
  isDropdownOpen: boolean;
  toggleDropdown: () => void;
}

const BlueTriangle: React.FC<{ isOpen: boolean }> = ({ isOpen }) => (
  <svg
    width="4vh"
    height="4vh"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`ml-1 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
    <path d="M10 14L5 7H15L10 14Z" fill="#004B6E" />
  </svg>
);

const NavMenu: React.FC<NavMenuProps> = ({ navItems, isDropdownOpen, toggleDropdown }) => {
  return (
    <ul className="hidden lg:flex space-x-2 sm:space-x-4 xl:space-x-8 2xl:space-x-10 text-[3vh] lg:text-[3.5vh] leading-8 text-[#004B6E] items-center tracking-normal">
      {navItems.map((item: NavItem, index: number) => (
        <li key={index} className="relative">
          <Link to={item.href} className="px-0 flex items-center" onClick={(e) => {if(item.hasDropdown) {toggleDropdown()}; useHandleSmoothScroll(e, item.id || '')}}>
            {item.label}
            {item.hasDropdown && <BlueTriangle isOpen={isDropdownOpen} />}
          </Link>
          {item.hasDropdown && isDropdownOpen && (
            <ul className="absolute top-full mt-2 shadow-lg rounded-md p-2 bg-white border-t border-[#004B6E]">
              {item.dropdownItems?.map((dropdownItem, idx) => (
                <li key={idx}>
                  <Link to={dropdownItem.href}  className="block text-[2.5vh] lg:text-[3.5vh] px-[1vh] py-[1.5vh] 2xl:leading-[2vh]  hover:bg-gray-100 text-[#FF8700]" onClick={(e) => {if(item.hasDropdown) {toggleDropdown()}; useHandleSmoothScroll(e, dropdownItem.id || '')}} >
                    {dropdownItem.label}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </li>
      ))}
      <li className="hidden lg:flex justify-center">
      <Link
        to='/registration'
        className="h-[5vh] lg:h-[6vh] w-auto flex justify-center items-center py-[1.1vh] px-[1.5vh] 2xl:py-[2.4vh] border rounded-[1vh] bg-[#004B6E] hover:bg-[#002a3d] transition-colors text-white text-[3vh] lg:text-[3.8vh]">
        Register
      </Link>
      </li>
    </ul>
  );
};

export default NavMenu;
