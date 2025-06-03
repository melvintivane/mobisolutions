import React from "react";
import { HashLink as Link } from "react-router-hash-link";
import Brochura from "../../assets/docs/brochura-mymobisolutions.pdf";

const BoucherWidget = () => {
  return (
    <>
      <div className="single-widget widget-brochure">
        <h4 className="widget-title">Brochura</h4>
        <ul>
          <li>
            <a href={Brochura} target="_blank" rel="noopener noreferrer">
              <i className="fa-solid fa-file-pdf"></i> Baixar Brochura
            </a>
          </li>
          <li>
            <a href={Brochura} target="_blank" rel="noopener noreferrer">
              <i className="fa-solid fa-file-pdf"></i> Detalhes da Empresa
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default BoucherWidget;
