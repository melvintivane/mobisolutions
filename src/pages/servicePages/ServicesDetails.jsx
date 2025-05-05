import React from "react";
import HeaderV1 from "../../components/header/HeaderV1";
import BreadCrumb from "../../components/breadCrumb/BreadCrumb";
import ServicesDetailsContent from "../../components/services/ServicesDetailsContent";
import FooterV1 from "../../components/footer/FooterV1";
import ServiceV1Data from "../../jsonData/ServiceV1Data.json";
import { useParams } from "react-router-dom";

const ServicesDetails = () => {
  const { id } = useParams();
  const data = ServiceV1Data.filter(
    (service) => service.id === parseInt(id)
  )[0];

  return (
    <>
      <div className="wrapper">
        <HeaderV1 headerClass="dark" />
        <BreadCrumb
          breadCrumb="detalhes do serviço"
          title1="Transforme Informações"
          title2="Em Soluções Práticas"
          bottomSpace="pb-0"
        />
        <ServicesDetailsContent serviceInfo={data} />
        <FooterV1 />
      </div>
    </>
  );
};

export default ServicesDetails;
