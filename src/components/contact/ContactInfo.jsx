import { useLanguage } from "../../context/LanguageContext";
import Animate from "../animation/Animate";
import SocialShare2 from "../others/SocialShare2";

const ContactInfo = () => {
  const { language } = useLanguage();
  const contactTextInfo = {
    pt: {
      title: "Informações de Contacto",
      text: "Se você tiver dúvidas ou precisar de assistência, não hesite em entrar em contato conosco. Nossa equipe está disponível para fornecer o suporte necessário e garantir que suas necessidades sejam atendidas.",
      phoneSubTitle: "Phone",
      phone: "+258 84 039 6163",
      locationSubTitle: "Localização",
      location: "Av. Industrias, n° 3787, Liberdade",
      emailSubTitle: "Email Oficial",
      email: "contact@mymobisolutions.com",
      followUs: "Siga-nos",
    },
    en: {
      title: "Contact Information",
      text: "If you have any questions or need assistance, please do not hesitate to contact us. Our team is available to provide the necessary support and ensure that your needs are met.",
      phoneSubTitle: "Phone",
      phone: "+258 84 039 6163",
      locationSubTitle: "Location",
      location: "Av. Industrias, n° 3787, Liberdade",
      emailSubTitle: "Official Email",
      email: "contact@mymobisolutions.com",
      followUs: "Follow Us",
    },
  };

  const t = contactTextInfo[language] || contactTextInfo['pt']
  return (
    <>
      <div className="contact-style-one-info">
        <div className="mb-40">
          <h2>{t.title}</h2>
          <p>
            {t.text}
          </p>
        </div>
        <ul className="contact-address">
          <Animate className="animate__animated animate__fadeInUp">
            <li>
              <div className="content">
                <h4 className="title">{t.phoneSubTitle}</h4>
                <a href="tel:+258 84 039 6163">{t.phone}</a>
              </div>
            </li>
          </Animate>

          <Animate
            className="animate__animated animate__fadeInUp"
            delay="300ms"
          >
            <li>
              <div className="info">
                <h4 className="title">{t.locationSubTitle}</h4>
                <p>{t.location}</p>
              </div>
            </li>
          </Animate>

          <Animate
            className="animate__animated animate__fadeInUp"
            delay="500ms"
          >
            <li>
              <div className="info">
                <h4 className="title">{t.emailSubTitle}</h4>
                <a href="mailto:contact@mymobisolutions.com">
                  {t.email}
                </a>
              </div>
            </li>
          </Animate>

          <Animate
            className="animate__animated animate__fadeInUp"
            delay="700ms"
          >
            <li>
              <div className="info">
                <h4 className="title">{t.followUs}</h4>
                <ul className="social-link">
                  <SocialShare2 />
                </ul>
              </div>
            </li>
          </Animate>
        </ul>
      </div>
    </>
  );
};

export default ContactInfo;
