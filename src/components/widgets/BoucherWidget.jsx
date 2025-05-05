import React from "react";
import { HashLink as Link } from "react-router-hash-link";

const BoucherWidget = () => {
  return (
    <>
      <div className="single-widget widget-brochure">
        <h4 className="widget-title">Brochura</h4>
        <ul>
          <li>
            <Link to="#">
              <i className="fa-solid fa-file-pdf"></i> Baixar Brochura
            </Link>
          </li>
          <li>
            <Link to="#">
              <i className="fa-solid fa-file-pdf"></i> Detalhes da Empresa
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default BoucherWidget;
