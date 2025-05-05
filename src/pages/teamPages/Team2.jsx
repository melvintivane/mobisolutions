import React from "react";
import HeaderV1 from "../../components/header/HeaderV1";
import BreadCrumb from "../../components/breadCrumb/BreadCrumb";
import FooterV1 from "../../components/footer/FooterV1";
import Team2Content from "../../components/team/Team2Content";

const Team2 = () => {
  return (
    <>
      <HeaderV1 headerClass="dark" />
      <BreadCrumb breadCrumb="equipe" title1="Membros profissionais da equipe" />
      <Team2Content />
      <FooterV1 />
    </>
  );
};

export default Team2;
