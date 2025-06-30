import { HashLink as Link } from "react-router-hash-link";
import { useLanguage } from "../../context/LanguageContext";
import ServiceListWidgetData from "../../jsonData/ServiceListWidgetData.json";

const ServiceListWidget = () => {
  const {language} = useLanguage();
  const title = {
    pt: "Serviços",
    en: "Services"
  }
  const t = title[language] || title['pt']
  const p = ServiceListWidgetData[language] || ServiceListWidgetData['pt']
  return (
    <>
      <div className="single-widget services-list-widget">
        <h4 className="widget-title">{t}</h4>
        <ul>
          {p.map((service) => (
            <li key={service.id}>
              <Link to={`${service.listLink}`}>
                {service.listTitle} <i className={service.listIcon}></i>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default ServiceListWidget;
