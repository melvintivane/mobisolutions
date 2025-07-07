import { HashLink as Link } from "react-router-hash-link";
import { useLanguage } from "../../context/LanguageContext";

const SupportWidget = () => {
  const { language } = useLanguage();
  const contactTextInfo = {
    pt: {
      title: "Precisa de Ajuda?",
      text: "Fale com um atendente para preencher um formulário? Ligue para o escritório corporativo e nós conectaremos você.",
      phone: "+258 84 039 6163",
      email: "contact@mymobisolutions.com",
      contactUs: "Contacte Nos",
    },
    en: {
      title: "Need Help?",
      text: "Talk to an agent to fill out a form? Call the corporate office and we will connect you.",
      phone: "+258 84 039 6163",
      email: "contact@mymobisolutions.com",
      contactUs: "Contact Us",
    },
  };

  const t = contactTextInfo[language] || contactTextInfo["pt"];
  return (
    <>
      <div
        className="single-widget quick-contact-widget text-light"
        style={{ backgroundImage: "url(/img/thumb/4.jpg)" }}
      >
        <div className="content">
          <h3>{t.title}</h3>
          <p>
            {t.text}
          </p>
          <h2>{t.phone}</h2>
          <h4>
            <a href="mailto:contact@mymobisolutions.com">
              {t.email}
            </a>
          </h4>
          <Link
            className="btn mt-30 circle btn-sm btn-gradient"
            to="/contact-us#"
          >
            {t.contactUs}
          </Link>
        </div>
      </div>
    </>
  );
};

export default SupportWidget;
