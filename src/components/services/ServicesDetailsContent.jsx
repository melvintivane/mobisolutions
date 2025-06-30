import { useParams } from "react-router-dom";
import { useLanguage } from "../../context/LanguageContext";
import { useService } from "../../hook/useService";
import ServiceFaqV1 from "../faq/ServiceFaqV1";
import BoucherWidget from "../widgets/BoucherWidget";
import ServiceListWidget from "../widgets/ServiceListWidget";
import SupportWidget from "../widgets/SupportWidget";

const ServicesDetailsContent = () => {
  const { id } = useParams(); // Pega o ID da URL
  const serviceInfo = useService(Number(id)); // Converte para número e busca o serviço

  const { thumb, text, title, includedServices = [], challenge, whatWeDo } =
    serviceInfo;
  const createSlug = (title) => {
    return title
      .toLowerCase()
      .normalize("NFD") // Normaliza caracteres acentuados
      .replace(/[\u0300-\u036f]/g, "") // Remove acentos
      .replace(/[^\w\s-]/g, "") // Remove caracteres especiais
      .replace(/\s+/g, "-") // Substitui espaços por hífens
      .replace(/-+/g, "-") // Remove hífens duplicados
      .trim();
  };

  const slug = createSlug(serviceInfo.title);

  const {language} = useLanguage();
  const textData = {
    pt:{
      title1 : "Serviços Incluídos",
      title2 : "O Desafio",
      title3 : "O que fazemos?",
      title4 : "Questões acerca do serviço"
    },
    en:{
       title1: "Included Services",
       title2: "The Challenge",
       title3: "What We Do?",
       title4 : "Questions about the service"
    }
  };
  const t = textData[language] || textData['pt']
  return (
    <>
      <div className="services-details-area default-padding">
        <div className="container">
          <div className="services-details-items">
            <div className="row">
              <div className="col-xl-8 col-lg-7 pr-45 pr-md-15 pr-xs-15 services-single-content">
                <div className="service-single-thumb">
                  <img src={`/img/services/${thumb}`} alt="Thumb" />
                </div>
                <h2>{title}</h2>
                <p>{text}</p>
                <div className="features mt-40 mt-xs-30 mb-30 mb-xs-20">
                  <div className="row">
                    <div className="col-lg-5 col-md-6">
                      <div className="content">
                        <h3>{t.title1}</h3>
                        <ul className="feature-list-item">
                          {Array.isArray(includedServices) &&
                            includedServices.map((item, index) => (
                              <li key={index}>{item}</li>
                            ))}
                        </ul>
                      </div>
                    </div>
                    <div className="col-lg-7 col-md-6 mt-xs-30">
                      <div className="content">
                        <h3>{t.title2}</h3>
                        <p>{challenge}</p>
                      </div>
                    </div>
                  </div>
                </div>
                <h3>{t.title3}</h3>
                <p>{whatWeDo}</p>

                <div className="faq-style-one service-faq mt-40">
                  <h2 className="mb-30">{t.title4}</h2>
                  <ServiceFaqV1 serviceSlug={slug} />
                </div>
                {/*<div className="services-more mt-40">
                  <h2>Serviços Populares</h2>
                  <div className="row">
                    {PopularServiceData.map((popular) => (
                      <SinglePopularService
                        popular={popular}
                        key={popular.id}
                      />
                    ))}
                  </div>
                </div>*/}
              </div>
              <div className="col-xl-4 col-lg-5 mt-md-50 mt-xs-50 pl-30 pl-md-15 pl-xs-15 services-sidebar">
                <ServiceListWidget />
                <SupportWidget />
                <BoucherWidget />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServicesDetailsContent;
