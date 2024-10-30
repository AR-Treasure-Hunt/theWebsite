import React from 'react';
import { SocialLinks as SocialLinksType } from './type';
import { Github, Instagram, Linkedin } from 'lucide-react';

interface SocialLinksProps {
  socialLinks?: SocialLinksType;
}

export const SocialLinks: React.FC<SocialLinksProps> = ({ socialLinks }) => {
  if (!socialLinks) return null;

  return (
    <div className="absolute bottom-5 right-5 text-white flex space-x-4 z-50">
      {socialLinks.github && (
        <a
          href={socialLinks.github}
          target="_blank"
          rel="noopener noreferrer"
          className="text-2xl transition-colors ease-in-out hover:text-gray-500">
          <Github size={24} />
        </a>
      )}
      {socialLinks.instagram && (
        <a
          href={socialLinks.instagram}
          target="_blank"
          rel="noopener noreferrer"
          className="text-2xl transition-colors ease-in-out hover:text-pink-500">
          <Instagram size={24} />
        </a>
      )}
      {socialLinks.linkedin && (
        <a
          href={socialLinks.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="text-2xl transition-colors ease-in-out hover:text-[#0077b5]">
          <Linkedin size={24} />
        </a>
      )}
    </div>
  );
};
