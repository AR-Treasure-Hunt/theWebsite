export const navItems = [
    { label: <span>Home</span>, href: "#" },
    { label: <span>About</span>, href: "#" },
    { 
      label: <span>Past Iterations <span className="text-xl"></span></span>, 
      href: "#", 
      hasDropdown: true, 
      dropdownItems: [
        { label: 'Iteration 2023', href: '#2022' },
        { label: 'Iteration 2022', href: '#2021' },
      ],
    },
    { label: <span>FAQ</span>, href: "#" },
  ];
  