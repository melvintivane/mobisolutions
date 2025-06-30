import { useLanguage } from "../../context/LanguageContext";
import ServiceV1Data from "../../jsonData/ServiceV1Data.json";
import SingleServicesV1 from "./SingleServicesV1";

const ServicesV1 = () => {
  const { language } = useLanguage();
  const serviceText = {
    pt: {
      subTitle: "Serviços que oferecemos",
      title: `Transforme Informação em Insights Acionáveis`,
    },
    en: {
      subTitle: "Services We Offer",
      title: `Transform Information into Actionable Insights`,
    },
  };
  const t = serviceText[language] || serviceText["pt"]; // Fallback to Portuguese if language not found
  const p = ServiceV1Data[language] || ServiceV1Data["pt"]; // Fallback to Portuguese if language not found
  return (
    <>
      <div
        className="default-padding box-layout overflow-hidden bottom-less services-style-one-area bg-gray bg-cover"
        style={{ backgroundImage: "url(/img/shape/banner-2.jpg)" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-2">
              <div className="site-heading text-center">
                <h5 className="sub-title">{t.subTitle}</h5>
                <h2 className="title">
                  {t.title.split("<br/>").map((line, index) => (
                    <span key={index}>
                      {line}
                      {index < t.title.split("<br/>").length - 1 && <br />}
                    </span>
                  ))}
                </h2>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            {p.slice(0, 3).map((service) => (
              <div
                className="col-xl-4 col-lg-6 col-md-6 mb-30"
                key={service.id}
              >
                <SingleServicesV1 service={service} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ServicesV1;
