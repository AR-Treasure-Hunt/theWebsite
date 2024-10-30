export const navItems = [
    { label: "Home", href: "/", id:"home" },
    { label: "About", href: "/", id:'about-section' },
    { 
      label: "Past Iterations", 
      href: "/", 
      hasDropdown: true, 
      dropdownItems: [
        { label: 'Iteration 2023', href: '/', id:'2023' },
        { label: 'Iteration 2022', href: '/', id:'2022' },
      ],
    },
    { label:"FAQ", href: "/", id: 'faq' },
  ];
  
