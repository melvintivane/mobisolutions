import React from "react";
import { HashLink as Link } from "react-router-hash-link";

const SupportWidget = () => {
  return (
    <>
      <div
        className="single-widget quick-contact-widget text-light"
        style={{ backgroundImage: "url(/img/thumb/4.jpg)" }}
      >
        <div className="content">
          <h3>Precisa de Ajuda?</h3>
          <p>
            Fale com um atendente para preencher um formulário? Ligue para o
            escritório corporativo e nós conectaremos você.
          </p>
          <h2>+(258) 842074393</h2>
          <h4>
            <a href="mailto:melvintivane@gmail.com">melvintivane@gmail.com</a>
          </h4>
          <Link
            className="btn mt-30 circle btn-sm btn-gradient"
            to="/contact-us#"
          >
            Contacte Nos
          </Link>
        </div>
      </div>
    </>
  );
};

export default SupportWidget;
