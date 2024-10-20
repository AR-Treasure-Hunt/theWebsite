
import React from "react";
import ContactInfoContainer from "./ContactInfoContainer";
import ContactPersonContainer from "./ContactPersonContainer";
import RedirectLinks from "./RedirectLinks";
import SocialHandles from "./SocialHandles";

const FooterTopContentWrapper = ({ children }:{children:React.ReactNode}) => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-[24px] mb-[36px] pt-[36px] border-t-2 border-black border-dashed'>
      {children}
    </div>
  );
};

const FooterBottomContentWrapper = ({ children }:{children:React.ReactNode}) => {
    return (
      <div className='flex flex-wrap flex-col gap-[24px] items-center'>{children}</div>
    )
  }

const  Footer = () => {
    return (
        <div className="text-[#003F5A">
            <h1 className="text-5xl text-[#003F5A] md:text-7xl text-center mb-[16px]">Get In Touch</h1>
            <FooterTopContentWrapper>
                <ContactInfoContainer />
                <ContactPersonContainer />
                <RedirectLinks />
            </FooterTopContentWrapper>
            <FooterBottomContentWrapper>
                <SocialHandles/>
                <p className="text-2xl">Copyright &#169; {new Date().getFullYear()} IT MEET. All rights reserved.</p>
            </FooterBottomContentWrapper>
        </div>
    )
}

export default Footer