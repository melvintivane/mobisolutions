import React from "react";
import HeaderV1 from "../../components/header/HeaderV1";
import BreadCrumb from "../../components/breadCrumb/BreadCrumb";
import ServicesV3Grid from "../../components/services/ServicesV3Grid";
import WhyChooseUsV1 from "../../components/whyChoose/WhyChooseUsV1";
import TestimonialV1 from "../../components/testimonial/TestimonialV1";
import ProcessV1 from "../../components/process/ProcessV1";
import FooterV1 from "../../components/footer/FooterV1";

const Services3 = () => {
  return (
    <>
      <div className="wrapper">
        <HeaderV1 headerClass="dark" />
        <BreadCrumb
          breadCrumb="Serviços"
          title1="Transforme Informações"
          title2="Em Soluções Práticas"
        />
        <ServicesV3Grid />
        <WhyChooseUsV1 />
        <TestimonialV1 />
        <ProcessV1 processClass="default-padding" />
        <FooterV1 />
      </div>
    </>
  );
};

export default Services3;
