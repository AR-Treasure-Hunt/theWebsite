import React from 'react'
import {CONTACT_PERSON_DETAILS} from './FooterConsts'
import ContactPersonDetails from './ContactPersonDetails'

const ContactPersonContainer = () => {
  return (
    <>
    {CONTACT_PERSON_DETAILS.map((details)=> (
        <ContactPersonDetails key={details.name} {...details} />
    ))
    }
    </>
  )
}

export default ContactPersonContainer