import React from "react";
import HeaderV1 from "../../components/header/HeaderV1";
import BreadCrumb from "../../components/breadCrumb/BreadCrumb";
import BlogSingleContent from "../../components/blog/BlogSingleContent";
import FooterV1 from "../../components/footer/FooterV1";
import { useParams } from "react-router-dom";
import BlogV1Data from "../../jsonData/BlogV1Data.json";

const BlogSingle = () => {
  const { id } = useParams();
  const data = BlogV1Data.filter((blog) => blog.id === parseInt(id))[0];

  return (
    <>
      <HeaderV1 headerClass="dark" />
      <BreadCrumb
        breadCrumb="blog"
        title1="Blog"
        bottomSpace="pb-0"
        offsetClass="offset-lg-1"
      />
      <BlogSingleContent blogInfo={data} totalBlogs={BlogV1Data.length} />
      <FooterV1 />
    </>
  );
};

export default BlogSingle;
