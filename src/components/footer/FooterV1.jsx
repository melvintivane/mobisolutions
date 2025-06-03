import React from "react";
import { HashLink as Link } from "react-router-hash-link";
import SocialShare from "../others/SocialShare";
import { toast } from "react-toastify";

const FooterV1 = () => {
  const handleSearch = (event) => {
    event.preventDefault();
    event.target.reset();
    toast.success("Obrigado pelo seu e-mail!");
  };

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
                    Estamos prontos para enfrentar os desafios tecnológicos e
                    transformar ideias em soluções eficazes. Nosso compromisso é
                    levar seu projeto de software ao próximo nível, superando
                    qualquer limitação e garantindo o sucesso.
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
                  <h4 className="widget-title">Empresa</h4>
                  <ul>
                    <li>
                      <Link to="/about-us#">Perfil da Empresa</Link>
                    </li>
                    <li>
                      <Link to="/about-us#">Sobre</Link>
                    </li>
                    <li>
                      <Link to="/faq#">Central de Ajuda</Link>
                    </li>
                    <li>
                      <Link to="/contact-us#">Carreiras</Link>
                    </li>
                    <li>
                      <Link to="/contact-us#">Contacto</Link>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="col-lg-3 col-md-6 footer-item mt-50">
                <div className="f-item contact">
                  <h4 className="widget-title">Informações de Contacto</h4>
                  <ul>
                    <li>
                      <div className="content">
                        <strong>Endereço:</strong>
                        Av. Industrias, n° 3787, Liberdade
                      </div>
                    </li>
                    <li>
                      <div className="content">
                        <strong>Email:</strong>
                        <a href="mailto:contact@mymobisolutions.com">
                          contact@mymobisolutions.com
                        </a>
                      </div>
                    </li>
                    <li>
                      <div className="content">
                        <strong>Telefone:</strong>
                        <a href="tel:2151234567">+258 84 039 6163</a>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="col-lg-3 col-md-6 footer-item mt-50">
                <div className="f-item newsletter">
                  <h4 className="widget-title">Newsletter</h4>
                  <p>
                    Junte-se à nossa lista de assinantes para receber as últimas
                    notícias e ofertas especiais instantaneamente.
                  </p>
                  <form onSubmit={handleSearch}>
                    <input
                      type="email"
                      placeholder="Seu Email"
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
                  Copyright &copy; {new Date().getFullYear()} MyMobiSolutions. Todos
                  os Direitos Reservados.
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
