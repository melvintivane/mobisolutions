import React from "react";
import HeaderV1 from "../../components/header/HeaderV1";
import BreadCrumb from "../../components/breadCrumb/BreadCrumb";
import PriceV2 from "../../components/price/PriceV2";
import ProjectDeal from "../project/ProjectDeal";
import FooterV1 from "../../components/footer/FooterV1";

const Pricing = () => {
  return (
    <>
      <HeaderV1 headerClass="dark" />
      <BreadCrumb
        breadCrumb="preços"
        title1="Comprometidos em"
        title2="oferecer o melhor preço"
        bottomSpace="pb-0"
      />
      <PriceV2 />
      <ProjectDeal />
      <FooterV1 />
    </>
  );
};

export default Pricing;
