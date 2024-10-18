
import ContactInfoContainer from "./ContactInfoContainer";
import FooterTopContentWrapper from "./FooterTopContentWrapper";
import ContactPersonContainer from "./ContactPersonContainer";
import RedirectLinks from "./RedirectLinks";
import FooterBottomContentWrapper from "./FooterBottomContentWrapper";
import SocialHandles from "./SocialHandles";

function Footer() {
    return (
        <div>
            <h1 className="text-[48px] md:text-[72px] text-center mb-[16px]">Contact Us</h1>
            <FooterTopContentWrapper>
                <ContactInfoContainer />
                <ContactPersonContainer />
                <RedirectLinks />
            </FooterTopContentWrapper>
            <FooterBottomContentWrapper>
                <SocialHandles/>
                <p className="text-[28px]">Copyright &#169; 2023 IT MEET. All rights reserved.</p>
            </FooterBottomContentWrapper>
        </div>
    )
}

export default Footer