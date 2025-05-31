import React from "react";
import HeaderV1 from "../../components/header/HeaderV1";
import BreadCrumb from "../../components/breadCrumb/BreadCrumb";
import BlogStandardContent from "../../components/blog/BlogStandardContent";
import FooterV1 from "../../components/footer/FooterV1";

const BlogStandard = () => {
  return (
    <>
      <HeaderV1 headerClass="dark" />
      <BreadCrumb
        breadCrumb="blog"
        title1="Blog"
        bottomSpace="pb-0"
        offsetClass="offset-lg-1"
      />
      <BlogStandardContent />
      <FooterV1 />
    </>
  );
};

export default BlogStandard;
