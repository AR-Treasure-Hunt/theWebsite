import React, { ReactNode } from 'react'

interface FooterContentProps {
    children: ReactNode;
}

const FooterTopContentWrapper = (props: FooterContentProps) => {
  // Props goes here
  const {children} = props;

  return (
    <div className='flex flex-wrap flex-col gap-[24px] items-center md:flex-row md:justify-between mb-[36px] pt-[36px] border-t-2 border-black border-dashed'>{children}</div>
  )
}

export default FooterTopContentWrapper