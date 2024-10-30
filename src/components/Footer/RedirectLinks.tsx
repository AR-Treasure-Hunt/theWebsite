import { useHandleSmoothScroll } from '@/utils/useHandleSmoothScroll';
import { Link } from '@tanstack/react-router';
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
    link: '/',
    id: 'faq'
  },
];

const RedirectLinks = () => {
  return (
    <div>
      <h2 className="text-2xl text-[#003F5A] md:text-4xl text-center leading-tight mb-[16px]">
        Quick Links
      </h2>
      <ul className="pl-0 list-none">
        {FOOTER_LINKS.map((link) => (
          <li key={link.title} className="text-center">
            <a
              href={link.link}
              className="text-[24px] md:text-[28px]  hover:underline"
              onClick={(e) => useHandleSmoothScroll(e, link.id || '')}>
              {link.title}
            </a>
          </li>
        ))}
        <li className="text-center">
          <Link to="/code-of-conduct" className="text-[24px] md:text-[28px]  hover:underline">

            Code of Conduct
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default RedirectLinks;
