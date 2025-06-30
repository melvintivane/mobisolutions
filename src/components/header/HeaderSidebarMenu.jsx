import { useState } from "react";
import { HashLink as Link } from "react-router-hash-link";
import { toast } from "react-toastify";
import { useLanguage } from "../../context/LanguageContext";
import HeaderSideBarMenu from "../../translations/HeaderSideBarMenu.json";
import SocialShare2 from "../others/SocialShare2";
import LanguageToggle from "./LanguageToggle";

const HeaderSidebarMenu = ({ isSidebarOpen, removeClasses, addClasses }) => {
  const [darkMode, setDarkMode] = useState(false);
  const { language } = useLanguage();
  const t = HeaderSideBarMenu[language] || HeaderSideBarMenu["pt"]; // Fallback to Portuguese if language not found

  const handleEmail = (event) => {
    event.preventDefault();
    event.target.reset();
    toast.success(t.toastSuccess);
  };

  return (
    <>
      <div className="attr-right">
        <div className="attr-nav flex">
          <ul>
            {/* <li className="search">
              <button onClick={() => setDarkMode(!darkMode)}>
                <i
                  className={`fa-solid ${darkMode ? "fa-sun" : "fa-moon"}`}
                ></i>
              </button>
            </li> */}
            <LanguageToggle/>
            <li className="side-menu">
              <Link to={void 0} onClick={addClasses}>
                <span className="bar-1"></span>
                <span className="bar-2"></span>
                <span className="bar-3"></span>
              </Link>
            </li>
          </ul>
        </div>

        <div className={`side ${isSidebarOpen ? "on" : ""}`}>
          <Link to={void 0} className="close-side" onClick={removeClasses}>
            <i className="icon_close"></i>
          </Link>
          <div className="widget">
            <div className="logo">
              <img src="/img/logo/logo-light.png" alt="Logo" />
            </div>
          </div>
          <div className="widget">
            <p>
              {t.description}
            </p>
          </div>
          <div className="widget address">
            <div>
              <ul>
                <li>
                  <div className="content">
                    <p>{t.adress}</p>
                    <strong>{t.adressValue}</strong>
                  </div>
                </li>
                <li>
                  <div className="content">
                    <p>Email</p>
                    <strong>
                      <a
                        href="mailto:contact@mymobisolutions.com"
                        className="color-para"
                      >
                        {t.email}
                      </a>
                    </strong>
                  </div>
                </li>
                <li>
                  <div className="content">
                    <p>Contacto</p>
                    <strong>
                      <a href="tel:+258 84 039 6163" className="color-para">
                        {t.contact}
                      </a>
                    </strong>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="widget newsletter">
            <h4 className="title">{t.newsletter}</h4>
            <form onSubmit={handleEmail}>
              <div className="input-group stylish-input-group">
                <input
                  type="email"
                  placeholder={t.placeholder}
                  className="form-control"
                  name="email"
                  autoComplete="off"
                  required
                />
                <span className="input-group-addon">
                  <button type="submit">
                    <i className="arrow_right"></i>
                  </button>
                </span>
              </div>
            </form>
          </div>
          <div className="widget social">
            <ul className="link">
              <SocialShare2 />
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeaderSidebarMenu;
