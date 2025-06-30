import BreadCrumb from "../../components/breadCrumb/BreadCrumb";
import ContactV1Reverse from "../../components/contact/ContactV1Reverse";
import FooterV1 from "../../components/footer/FooterV1";
import HeaderV1 from "../../components/header/HeaderV1";
import { useLanguage } from "../../context/LanguageContext";

const ContactUs = () => {
  const { language } = useLanguage();
  const contactText = {
    pt: {
      breadCrumb: "contacte nos",
      title: "Entre em contacto conosco",
    },
    en: {
      breadCrumb: "contact us",
      title: "Get in Touch with Us",
    },
  };

  const t = contactText[language] || contactText["pt"]; // Fallback to Portuguese if language not found
  return (
    <>
      <HeaderV1 headerClass="dark" />
      <BreadCrumb
        breadCrumb={t.breadCrumb}
        title1={t.title}
        bottomSpace="pb-0"
      />
      <ContactV1Reverse />
      <FooterV1 />
    </>
  );
};

export default ContactUs;
