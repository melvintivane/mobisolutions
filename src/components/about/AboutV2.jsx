import React from "react";
import { HashLink as Link } from "react-router-hash-link";
import AboutListInfo from "../../jsonData/AboutListInfo.json";

const AboutV2 = () => {
  return (
    <>
      <div className="about-style-two-area default-padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 about-style-two">
              <div className="about-two-thumb">
                <img src="/img/about/4.jpg" alt="Image Not Found" />
                <div className="experience">
                  <h2>
                    <strong>11</strong> Anos de Experiência
                  </h2>
                </div>
              </div>
            </div>
            <div className="col-lg-6 about-style-two pl-50 pl-md-15 pl-xs-15 mt-60 mt-xs-40">
              <div className="about-two-info">
                <h4 className="sub-title">Sobre a nossa empresa</h4>
                <h2 className="title">Oferecendo as melhores soluções</h2>
                <p>
                  Com um olhar atento às necessidades do mercado, nossa equipe
                  de especialistas trabalha incansavelmente para entregar
                  soluções inovadoras em desenvolvimento de software. Buscamos
                  sempre a excelência em cada projeto, oferecendo sistemas
                  robustos e eficientes que atendem às exigências de nossos
                  clientes. Nossa missão é ajudar empresas a alcançar seus
                  objetivos por meio da tecnologia, proporcionando ferramentas
                  que otimizam processos e geram valor real.
                </p>
                <div className="about-grid-info">
                  <Link className="btn-round-animation" to="/services#">
                    Descubra mais <i className="fa-solid fa-arrow-right"></i>
                  </Link>
                  <ul className="list-info-item">
                    {AboutListInfo.map((list) => (
                      <li key={list.id}>
                        <h4>
                          <Link href="#">
                            {list.title}{" "}
                            <i className="fa-solid fa-angle-right"></i>
                          </Link>
                        </h4>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutV2;
