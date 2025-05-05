import React from "react";
import HeaderV1 from "../../components/header/HeaderV1";
import Error404Content from "../../components/error404/Error404Content";
import FooterV1 from "../../components/footer/FooterV1";

const Error404 = () => {
  return (
    <>
      <HeaderV1 headerClass="dark" />
      <Error404Content />
      <FooterV1 />
    </>
  );
};

export default Error404;
