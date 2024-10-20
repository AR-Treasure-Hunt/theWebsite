import React from 'react'
import { FOOTER_LINKS } from './FooterConsts'

const RedirectLinks = () => {
  return (
    <ul className='pl-0 list-none'>
        {
            FOOTER_LINKS.map((link) => (
                <li key={link.title} className='text-center'> 
                    <a href={link.link} className='text-[24px] md:text-[28px] text-gold hover:underline hover:decoration-wavy'>{link.title}</a>
                </li>
            ))
        }
    </ul>
  )
}

export default RedirectLinks