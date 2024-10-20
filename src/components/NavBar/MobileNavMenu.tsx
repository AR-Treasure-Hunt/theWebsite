import React from 'react';

interface NavItem {
  label: string;
  href: string;
  hasDropdown?: boolean;
  dropdownItems?: { label: string; href: string }[];
}

interface MobileNavMenuProps {
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

const MobileNavMenu: React.FC<MobileNavMenuProps> = ({ navItems, isDropdownOpen, toggleDropdown }) => {
  return (
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
  );
};

export default MobileNavMenu;