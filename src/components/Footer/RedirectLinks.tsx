export const FOOTER_LINKS = [
  {
      title: 'Sponsor Us',
      link: '/'
  },
  {
      title: 'Partnership',
      link: '/'
  },
  {
      title: 'FAQs',
      link: '/'
  },
  {
      title: 'Code of Conduct',
      link: '/'
  }
];

const RedirectLinks = () => {
  return (
    <div>
      <h2 className='text-2xl text-[#003F5A] md:text-4xl text-center leading-tight mb-[16px]'>Quick Links</h2>
    <ul className='pl-0 list-none'>
        {
            FOOTER_LINKS.map((link) => (
                <li key={link.title} className='text-center'> 
                    <a href={link.link} className='text-[24px] md:text-[28px]  hover:underline'>{link.title}</a>
                </li>
            ))
        }
    </ul>
    </div>
  )
}

export default RedirectLinks