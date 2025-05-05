import React from "react";
import { HashLink as Link } from "react-router-hash-link";

const MainMenu = ({ isOpen, closeMenu, toggleSubMenu }) => {
  return (
    <>
      <div
        className={`collapse navbar-collapse collapse-mobile ${
          isOpen ? "show" : ""
        }`}
        id="navbar-menu"
      >
        {/* <img src="/img/logo/logo.png" alt="Logo" /> */}
        {/* <h3 className="fw-bold mb-50">MobiSolutions</h3> */}
        <button type="button" className="navbar-toggle" onClick={closeMenu}>
          <i className="fa-solid fa-times"></i>
        </button>
        <ul className="nav navbar-nav navbar-center">
          <Link to="/#">Início</Link>
          <li>
            <Link to="/about-us">Sobre Nós</Link>
          </li>
          <li>
            <Link to="/services">Serviços</Link>
          </li>
          <li>
            <Link to="/teams#">Equipe</Link>
          </li>
          <li>
            <Link to="/contact-us#">Contato</Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default MainMenu;
