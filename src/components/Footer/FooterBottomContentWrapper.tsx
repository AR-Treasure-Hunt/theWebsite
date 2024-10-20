import React, { ReactNode } from 'react'

interface FooterContentProps {
    children: ReactNode;
}

const FooterBottomContentWrapper = (props: FooterContentProps) => {
  // Props goes here
  const {children} = props;

  return (
    <div className='flex flex-wrap flex-col gap-[24px] items-center'>{children}</div>
  )
}

export default FooterBottomContentWrapper