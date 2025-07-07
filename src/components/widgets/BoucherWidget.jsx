import Brochura from "../../assets/docs/brochura-mymobisolutions.pdf";
import { useLanguage } from "../../context/LanguageContext";


const BoucherWidget = () => {
  const {language} = useLanguage();
  const brochureText = {
    pt:{
      title : "Brochura",
      btnText : "Baixar Brochura",
      btnText2 : "Detalhes da Empresa"
    },
    en:{
      title : "Brochure",
      btnText : "Download Brochure",
      btnText2 : "Company Details"
    }
  };
  const t = brochureText[language] || brochureText['pt']
  return (
    <>
      <div className="single-widget widget-brochure">
        <h4 className="widget-title">{t.title}</h4>
        <ul>
          <li>
            <a href={Brochura} target="_blank" rel="noopener noreferrer">
              <i className="fa-solid fa-file-pdf"></i> {t.btnText}
            </a>
          </li>
          <li>
            <a href={Brochura} target="_blank" rel="noopener noreferrer">
              <i className="fa-solid fa-file-pdf"></i> {t.btnText2}
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default BoucherWidget;
