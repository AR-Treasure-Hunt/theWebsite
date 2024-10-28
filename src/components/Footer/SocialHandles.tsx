import { FiFacebook, FiInstagram, FiLinkedin, FiTwitter } from 'react-icons/fi';

const socialMediaLinks = [
  { icon: FiFacebook, url: 'https://www.facebook.com/artreasurehunt' },
  { icon: FiInstagram, url: 'https://www.instagram.com/ar_treasurehunt.itmeet/' },
  { icon: FiTwitter, url: 'https://x.com/ar_treasurehunt' },
  { icon: FiLinkedin, url: 'https://www.linkedin.com/company/ar-treasure-hunt/posts/?feedView=all' },
];

const SocialHandles = () => {
  return (
    <div className='mb-[18px]'>
      <p className='text-2xl md:text-4xl text-center text-[#003F5A] mb-[12px]'>Follow us on</p>
      <div className='flex gap-[18px] justify-center'>
        {socialMediaLinks.map((link, index) => {
          const Icon = link.icon;
          return (
            <a key={index} href={link.url} className='hover:text-[#003F5A]' target='_blank' rel='noopener noreferrer'>
              <Icon size={32} />
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default SocialHandles;