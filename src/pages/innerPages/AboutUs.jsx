import AboutV2 from "../../components/about/AboutV2";
import BreadCrumb from "../../components/breadCrumb/BreadCrumb";
import FooterV1 from "../../components/footer/FooterV1";
import HeaderV1 from "../../components/header/HeaderV1";
import TestimonialV2 from "../../components/testimonial/TestimonialV2";
import WhyChooseUsV2 from "../../components/whyChoose/WhyChooseUsV2";
import { useLanguage } from "../../context/LanguageContext";

const AboutUs = () => {
  const { language } = useLanguage();
  const aboutUsText = {
    pt: "Sobre Nós",
    en: "About Us",
  };
  const t = aboutUsText[language] || aboutUsText["pt"]; // Fallback to Portuguese if language not found
  return (
    <>
      <HeaderV1 headerClass="dark" />
      <BreadCrumb breadCrumb={t} title1={t} bottomSpace="pb-0" />
      <AboutV2 />
      <WhyChooseUsV2 />
      <TestimonialV2 />
      <FooterV1 />
    </>
  );
};

export default AboutUs;
