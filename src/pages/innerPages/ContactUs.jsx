import React from "react";
import HeaderV1 from "../../components/header/HeaderV1";
import BreadCrumb from "../../components/breadCrumb/BreadCrumb";
import FooterV1 from "../../components/footer/FooterV1";
import ContactV1Reverse from "../../components/contact/ContactV1Reverse";

const ContactUs = () => {
  return (
    <>
      <HeaderV1 headerClass="dark" />
      <BreadCrumb
        breadCrumb="contacte nos"
        title1="Entre em contacto conosco"
        bottomSpace="pb-0"
      />
      <ContactV1Reverse />
      <FooterV1 />
    </>
  );
};

export default ContactUs;
