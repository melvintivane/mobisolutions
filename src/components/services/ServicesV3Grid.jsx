import { useLanguage } from "../../context/LanguageContext";
import ServiceV3Data from "../../jsonData/ServiceV3Data.json";
import SingleServiceV3 from "./SingleServiceV3";

const ServicesV3Grid = () => {
  const { language } = useLanguage();
  const p = ServiceV3Data[language] || ServiceV3Data["pt"]; // Fallback to Portuguese if language not found
  return (
    <>
      <div
        className="services-style-three-area bg-dark bg-cover default-padding bottom-less"
        style={{ backgroundImage: "url(/img/shape/banner-6.jpg)" }}
      >
        <div className="container">
          <div className="row">
            {p.map((service) => (
              <div
                className="col-xl-4 col-lg-6 col-md-6 mb-30"
                key={service.id}
              >
                <SingleServiceV3 service={service} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ServicesV3Grid;
