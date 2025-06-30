import BreadCrumb from "../../components/breadCrumb/BreadCrumb";
import FooterV1 from "../../components/footer/FooterV1";
import HeaderV1 from "../../components/header/HeaderV1";
import PriceV2 from "../../components/price/PriceV2";
import { useLanguage } from "../../context/LanguageContext";
import ProjectDeal from "../project/ProjectDeal";

const Pricing = () => {
  const {language} = useLanguage();
  const breadCrumbText = {
    pt:{
      breadCrumb : "preços",
      title1 : "Comprometidos em",
      title2 : "oferecer o melhor preço",
    },
    en:{
      breadCrumb : "prices",
      title1 : "Committed to",
      title2 : "offering the best price"
    }
  };
  const t = breadCrumbText[language] || breadCrumbText['pt']
  return (
    <>
      <HeaderV1 headerClass="dark" />
      <BreadCrumb
        breadCrumb={t.breadCrumb}
        title1={t.title1}
        title2={t.title2}
        bottomSpace="pb-0"
      />
      <PriceV2 />
      <ProjectDeal />
      <FooterV1 />
    </>
  );
};

export default Pricing;
