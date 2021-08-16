import React from "react";
import ImgSrc from "../../assets/images/contact-bg.jpg";
import {
  ContactSection,
  ContactWrapper,
  ContactContainer,
  ContactBg,
  ImgItem,
  HeadLine,
  FormInput,
  ContactBtn
} from "./ContactElements";
const Contact = () => {
  return (
    <>
      <ContactSection id="contact">
        <ContactBg>
          <ImgItem src={ImgSrc} />
        </ContactBg>
        <ContactContainer>
          <ContactWrapper>
            <HeadLine>
              To Get Latest & Updated News Please Subscribe to Our
              <span> Newsletter</span>
            </HeadLine>
            <FormInput>
              <input
                type="email"
                name="Email"
                placeholder="your e-mail address"
              />
              <ContactBtn to="/sign-up">Subscribe</ContactBtn>
            </FormInput>
          </ContactWrapper>
        </ContactContainer>
      </ContactSection>
    </>
  );
};

export default Contact;
