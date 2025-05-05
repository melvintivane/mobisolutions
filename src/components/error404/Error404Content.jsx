import React from "react";
import { HashLink as Link } from "react-router-hash-link";

const Error404Content = () => {
  return (
    <>
      <div
        className="error-page-area default-padding text-center bg-cover"
        style={{ backgroundImage: `url(/img/shape/banner-3.jpg)` }}
      >
        <div
          className="shape-left"
          style={{ background: `url(/img/shape/44-left.png)` }}
        ></div>
        <div
          className="shape-right"
          style={{ background: `url(/img/shape/44-right.png)` }}
        ></div>
        <div className="container">
          <div className="error-box">
            <div className="row">
              <div className="col-lg-8 offset-lg-2">
                <h1>404</h1>
                <h2>Desculpe, a página não foi encontrada!</h2>
                <p>
                  Comportamento indelicado de domésticos sem objeção.
                  Especialmente fez isso enquanto ele possuía uma simpatia
                  insensível e barulhenta. Canções ele em um evento ampliado,
                  verdadeiramente.
                </p>
                <Link className="btn mt-20 btn-md btn-theme" to="/#">
                  Voltar à página inicial
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Error404Content;
