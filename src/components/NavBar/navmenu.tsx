import React from 'react';

interface NavItem {
  label: string;
  href: string;
  hasDropdown?: boolean;
  dropdownItems?: { label: string; href: string }[];
}

interface NavMenuProps {
  navItems: NavItem[];
  isDropdownOpen: boolean;
  toggleDropdown: () => void;
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
  

const NavMenu: React.FC<NavMenuProps> = ({ navItems, isDropdownOpen, toggleDropdown }) => {
  return (
    <ul className="hidden lg:flex space-x-2 sm:space-x-4 xl:space-x-8 text-lg lg:text-3xl leading-8 text-[#004B6E] items-center tracking-normal">
      {navItems.map((item: NavItem, index: number) => (
        <li key={index} className="relative">
          <a href={item.href} className="px-0 flex items-center" onClick={item.hasDropdown ? toggleDropdown : undefined}>
            {item.label}
            {item.hasDropdown && <BlueTriangle isOpen={isDropdownOpen} />}
          </a>
          {item.hasDropdown && isDropdownOpen && (
            <ul className="absolute top-full mt-2 shadow-lg rounded-md p-2 bg-white border-t border-[#004B6E]">
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
  );
};

export default NavMenu;