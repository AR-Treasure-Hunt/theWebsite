import React from 'react'

interface ContactPersonDetailsProps {
    name: string;
    position: string;
    event: string;
    contact: string;
}

const ContactPersonDetails = (props: ContactPersonDetailsProps) => {
    // Props goes here
    const { name, position, event, contact } = props;

  return (
    <p className="text-[24px] md:text-[28px] text-center">
        {name}<br />
        {position}<br />
        {event}<br />
        {contact}
    </p>
  )
}

export default ContactPersonDetails