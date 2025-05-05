import React from "react";
import HeaderV1 from "../../components/header/HeaderV1";
import BreadCrumb from "../../components/breadCrumb/BreadCrumb";
import AboutV2 from "../../components/about/AboutV2";
import WhyChooseUsV2 from "../../components/whyChoose/WhyChooseUsV2";
import TestimonialV2 from "../../components/testimonial/TestimonialV2";
import FooterV1 from "../../components/footer/FooterV1";

const AboutUs = () => {
  return (
    <>
      <HeaderV1 headerClass="dark" />
      <BreadCrumb breadCrumb="Sobre Nós" title1="Sobre Nós" bottomSpace="pb-0" />
      <AboutV2 />
      <WhyChooseUsV2 />
      <TestimonialV2 />
      <FooterV1 />
    </>
  );
};

export default AboutUs;
