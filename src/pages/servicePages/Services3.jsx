import BreadCrumb from "../../components/breadCrumb/BreadCrumb";
import FooterV1 from "../../components/footer/FooterV1";
import HeaderV1 from "../../components/header/HeaderV1";
import ProcessV1 from "../../components/process/ProcessV1";
import ServicesV3Grid from "../../components/services/ServicesV3Grid";
import TestimonialV1 from "../../components/testimonial/TestimonialV1";
import WhyChooseUsV1 from "../../components/whyChoose/WhyChooseUsV1";
import { useLanguage } from "../../context/LanguageContext";

const Services3 = () => {
  const { language } = useLanguage();
  const servicesText = {
    pt: {
      title1 : "Transforme Informações",
      title2 : "Em Soluções Práticas",
      title3 : "Serviços",
    },
    en: {
      title1 : "Transform Information",
      title2 : "Into Practical Solutions",
      title3 : "Services",
    },
  };
  const t = servicesText[language] || servicesText["pt"]; // Fallback to Portuguese if language not found
  return (
    <>
      <div className="wrapper">
        <HeaderV1 headerClass="dark" />
        <BreadCrumb
          breadCrumb={t.title3}
          title1={t.title1}
          title2={t.title2}
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
