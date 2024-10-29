import React from 'react';
import { FaLocationDot } from 'react-icons/fa6';
import { FiMail } from 'react-icons/fi';

const ContactInfo = ({ icon, content }: { icon: JSX.Element; content: string | JSX.Element }) => {
  return (
    <div className="flex gap-[16px] items-center">
      {icon} <p className="text-[22px] md:text-[28px]">{content}</p>
    </div>
  );
};

const ContactInfoContainer = () => {
  return (
    <div className="flex flex-col items-center">
      <h2 className="text-2xl text-[#003F5A] md:text-4xl text-center mb-[16px]">Quick Details</h2>
      <ContactInfo
        icon={<FiMail size={20} />}
        content={
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=artreasurehuntku@gmail.com"
            target="_blank">
            artreasurehuntku@gmail.com
          </a>
        }
      />
      <ContactInfo icon={<FaLocationDot size={20} />} content="Kathmandu University, Dhulikhel" />
    </div>
  );
};

export default ContactInfoContainer;
