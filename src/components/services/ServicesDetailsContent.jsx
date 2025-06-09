import ServiceFaqV1 from "../faq/ServiceFaqV1";
import BoucherWidget from "../widgets/BoucherWidget";
import ServiceListWidget from "../widgets/ServiceListWidget";
import SupportWidget from "../widgets/SupportWidget";

const ServicesDetailsContent = ({ serviceInfo }) => {
  const { thumb, text, title,incluededServices, challenge,whatWeDo } = serviceInfo;
  const createSlug = (title) => {
    return title
      .toLowerCase()
      .normalize("NFD") // Normaliza caracteres acentuados
      .replace(/[\u0300-\u036f]/g, "") // Remove acentos
      .replace(/[^\w\s-]/g, '') // Remove caracteres especiais
      .replace(/\s+/g, '-') // Substitui espaços por hífens
      .replace(/-+/g, '-') // Remove hífens duplicados
      .trim();
  };

  const slug = createSlug(serviceInfo.title);
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
                        <h3>Serviços Incluídos</h3>
                        <ul className="feature-list-item">
                          {incluededServices.map((item, index) => (
                            <li key={index}>{item}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    <div className="col-lg-7 col-md-6 mt-xs-30">
                      <div className="content">
                        <h3>O Desafio</h3>
                        <p>
                          {challenge}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <h3>O que fazemos?</h3>
                <p>
                  {whatWeDo}
                </p>

                <div className="faq-style-one service-faq mt-40">
                  <h2 className="mb-30">Questões acerca do serviço</h2>
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
