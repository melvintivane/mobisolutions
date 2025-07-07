import { useParams } from "react-router-dom";
import BreadCrumb from "../../components/breadCrumb/BreadCrumb";
import FooterV1 from "../../components/footer/FooterV1";
import HeaderV1 from "../../components/header/HeaderV1";
import ServicesDetailsContent from "../../components/services/ServicesDetailsContent";
import { useLanguage } from "../../context/LanguageContext";
import ServiceV1Data from "../../jsonData/ServiceV1Data.json";

const ServicesDetails = () => {
  const { id } = useParams();
  const { language } = useLanguage();
  const text = {
    pt:{
      breadCrumb : "detalhes do serviço",
      title1 : "Transforme Informações",
      title2 : "Em Soluções Práticas"
    },
    en : {
      breadCrumb : "service details",
      title1 : "Transform Informations",
      title2 : "Into Pratical Solutions"
    }
  };
  const t = text[language] || text['pt']
  const services = ServiceV1Data[language] || ServiceV1Data["pt"];
  
  // 2. Encontre o serviço usando .find()
  const data = services.find(service => service.id === parseInt(id));

  return (
    <>
      <div className="wrapper">
        <HeaderV1 headerClass="dark" />
        <BreadCrumb
          breadCrumb={t.breadCrumb}
          title1={t.title1}
          title2={t.title2}
          bottomSpace="pb-0"
        />
        <ServicesDetailsContent serviceInfo={data} />
        <FooterV1 />
      </div>
    </>
  );
};

export default ServicesDetails;
