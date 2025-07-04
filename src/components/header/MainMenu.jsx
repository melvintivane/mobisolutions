import { HashLink as Link } from "react-router-hash-link";
import styled from "styled-components";
import { useLanguage } from "../../context/LanguageContext";
import LanguageToggle from "./LanguageToggle";

const MainMenu = ({ isOpen, closeMenu }) => {
  const { language } = useLanguage();
  const menuItems = {
    pt: {
      item1: "Início",
      item2: "Sobre Nós",
      item3: "Serviços",
      item4: "Contacto",
      item5: "Blog",
      item6: "Preços",
    },
    en: {
      item1: "Home",
      item2: "About Us",
      item3: "Services",
      item4: "Contact",
      item5: "Blog",
      item6: "Pricing",
    },
  };

  const t = menuItems[language] || menuItems["pt"]; // Fallback to Portuguese if language not found
  const Breakpoint = {
    sm: "576px", // Ajuste o valor conforme necessário
    md: "768px", // Ajuste o valor conforme necessário
  };

  const StyledComponent = styled.div`
    margin-top: 20px;
    display: block;

    @media (min-width: ${Breakpoint.md}) {
      display: none;
    }
  `;
  return (
    <>
      <div
        className={`collapse navbar-collapse collapse-mobile ${
          isOpen ? "show" : ""
        }`}
        id="navbar-menu"
      >
        <img src="/img/logo/logo.png" alt="Logo" />
        <button type="button" className="navbar-toggle" onClick={closeMenu}>
          <i className="fa-solid fa-times"></i>
        </button>

        <ul className="nav navbar-nav navbar-center">
          <Link to="/">{t.item1}</Link>
          <li>
            <Link to="/about-us">{t.item2}</Link>
          </li>
          <li>
            <Link to="/services">{t.item3}</Link>
          </li>
          <li>
            <Link to="/contact-us">{t.item4}</Link>
          </li>
          {/*<li>
            <Link to="/blog">{t.item5}</Link>
          </li>*/}
          <li>
            <Link to="/pricing">{t.item6}</Link>
          </li>
        </ul>
      </div>
      <StyledComponent>
        <LanguageToggle />
      </StyledComponent>
    </>
  );
};

export default MainMenu;
