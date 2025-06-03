import React, { useState } from "react";
import SocialShare2 from "../others/SocialShare2";
import { HashLink as Link } from "react-router-hash-link";
import { toast } from "react-toastify";

const HeaderSidebarMenu = ({ isSidebarOpen, removeClasses, addClasses }) => {
  const [darkMode, setDarkMode] = useState(false);

  const handleEmail = (event) => {
    event.preventDefault();
    event.target.reset();
    toast.success("Obrigado pelo seu e-mail!");
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
              Desenvolvimento de software é o componente essencial da
              transformação digital que utiliza a Internet e tecnologias
              avançadas, como computadores, dispositivos móveis e diversas
              plataformas digitais, para criar soluções inovadoras que atendem
              às necessidades de empresas e usuários. Uma empresa de
              desenvolvimento de software projeta, implementa e mantém sistemas,
              aplicativos e plataformas que otimizam processos, impulsionam a
              produtividade e promovem a inovação nos mais diversos setores.
            </p>
          </div>
          <div className="widget address">
            <div>
              <ul>
                <li>
                  <div className="content">
                    <p>Endereço</p>
                    <strong>Av. Industrias, n° 3787, Liberdade</strong>
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
                        contact@mymobisolutions.com
                      </a>
                    </strong>
                  </div>
                </li>
                <li>
                  <div className="content">
                    <p>Contacto</p>
                    <strong>
                      <a href="tel:+258 84 039 6163" className="color-para">
                        +258 84 039 6163
                      </a>
                    </strong>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="widget newsletter">
            <h4 className="title">Inscreva-se!</h4>
            <form onSubmit={handleEmail}>
              <div className="input-group stylish-input-group">
                <input
                  type="email"
                  placeholder="Digite seu e-mail"
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
