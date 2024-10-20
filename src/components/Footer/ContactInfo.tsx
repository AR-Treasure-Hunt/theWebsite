import React, { ReactNode } from 'react'

interface ContactInfoProps {
    icon: ReactNode;
    content: ReactNode | string;
}

const ContactInfo = (props: ContactInfoProps) => {
    // Props goes here
    const { icon, content } = props;

  return (
    <div className="flex gap-[16px] items-center">
        {icon} <p className='text-[22px] md:text-[28px]'>{content}</p>
    </div>
  )
}

export default ContactInfo