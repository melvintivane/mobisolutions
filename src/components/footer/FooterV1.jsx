import { HashLink as Link } from "react-router-hash-link";
import { toast } from "react-toastify";
import { useLanguage } from "../../context/LanguageContext";
import FooterTranslation from "../../translations/Footer.json";
import SocialShare from "../others/SocialShare";

const FooterV1 = () => {
  const handleSearch = (event) => {
    event.preventDefault();
    event.target.reset();
    toast.success("Obrigado pelo seu e-mail!");
  };

  const { language } = useLanguage();
  const t = FooterTranslation[language] || FooterTranslation["pt"]; // Fallback to Portuguese if language not found

  return (
    <>
      <footer
        className="bg-dark text-light"
        style={{ backgroundImage: "url(/img/shape/5.png)" }}
      >
        <div className="container">
          <div className="f-items default-padding-bottom pt-70 pt-xs-0">
            <div className="row">
              <div className="col-lg-3 col-md-6 footer-item mt-50">
                <div className="footer-animated-shape">
                  <img src="/img/shape/6.png" alt="Image Not Found" />
                </div>
                <div className="f-item about pr-50 pr-xs-0 pr-md-0">
                  <img
                    className="logo"
                    src="/img/logo/logo-light.png"
                    alt="MyMobiSolutions"
                  />
                  <p>
                    {t.text}
                  </p>
                  <div className="footer-social mt-30">
                    <ul>
                      <SocialShare />
                    </ul>
                  </div>
                </div>
              </div>

              <div className="col-lg-3 col-md-6 mt-50 footer-item pl-50 pl-md-15 pl-xs-15">
                <div className="f-item link">
                  <h4 className="widget-title">{t.subTitle}</h4>
                  <ul>
                    <li>
                      <Link to="/about-us#">{t.item1}</Link>
                    </li>
                    <li>
                      <Link to="/about-us#">{t.item2}</Link>
                    </li>
                    <li>
                      <Link to="/faq#">{t.item3}</Link>
                    </li>
                    <li>
                      <Link to="/contact-us#">{t.item4}</Link>
                    </li>
                    <li>
                      <Link to="/contact-us#">{t.item5}</Link>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="col-lg-3 col-md-6 footer-item mt-50">
                <div className="f-item contact">
                  <h4 className="widget-title">{t.addressTitle}</h4>
                  <ul>
                    <li>
                      <div className="content">
                        <strong>{t.addressSubtitle}</strong>
                        {t.address}
                      </div>
                    </li>
                    <li>
                      <div className="content">
                        <strong>{t.emailSubtitle}</strong>
                        <a href="mailto:contact@mymobisolutions.com">
                          {t.email}
                        </a>
                      </div>
                    </li>
                    <li>
                      <div className="content">
                        <strong>{t.phoneSubtitle}</strong>
                        <a href="tel:2151234567">{t.phone}</a>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="col-lg-3 col-md-6 footer-item mt-50">
                <div className="f-item newsletter">
                  <h4 className="widget-title">{t.newsletterTitle}</h4>
                  <p>
                    {t.newsletter}
                  </p>
                  <form onSubmit={handleSearch}>
                    <input
                      type="email"
                      placeholder={t.emailPlaceholder}
                      className="form-control"
                      name="email"
                      autoComplete="off"
                      required
                    />
                    <button type="submit">
                      <i className="fas fa-arrow-right"></i>
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom bg-dark text-light text-center">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <p>
                  Copyright &copy; {new Date().getFullYear()} MyMobiSolutions. {t.copyright}
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default FooterV1;
