import React from 'react'
import ContactInfo from './ContactInfo'
import { FaLocationDot } from 'react-icons/fa6'
import { FiMail } from 'react-icons/fi'

const ContactInfoContainer = () => {
  return (
    <div>
        <ContactInfo icon={<FaLocationDot size={20}/>} content="Kathmandu University, Dhulikhel, Kavre" />
        <ContactInfo icon={<FiMail size={20}/>} content={<a href='https://mail.google.com/mail/?view=cm&fs=1&to=artreasurehuntku@gmail.com' target='_blank'>artreasurehuntku@gmail.com</a>} />
    </div>
  )
}

export default ContactInfoContainer