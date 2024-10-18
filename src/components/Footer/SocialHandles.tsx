import React from 'react'
import { FiFacebook, FiInstagram, FiLinkedin, FiTwitter } from 'react-icons/fi'

const SocialHandles = () => {
  return (
    <div className='mb-[18px]'>
        <p className='text-[24px] md:text-[28px] text-center mb-[12px]'>Follow us on</p>
        <div className='flex gap-[18px]'>
            <a href="" className='hover:text-opulent-blue'><FiInstagram size={32} /></a>
            <a href="" className='hover:text-opulent-blue'><FiFacebook size={32} /></a>
            <a href="" className='hover:text-opulent-blue'><FiTwitter size={32} /></a>
            <a href="" className='hover:text-opulent-blue'><FiLinkedin size={32} /></a>
        </div>
    </div>
  )
}

export default SocialHandles