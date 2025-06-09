import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import BlogSingleContent from "../../components/blog/BlogSingleContent";
import BreadCrumb from "../../components/breadCrumb/BreadCrumb";
import FooterV1 from "../../components/footer/FooterV1";
import HeaderV1 from "../../components/header/HeaderV1";

const BlogSingle = () => {
  const { id } = useParams();
  const [blogData, setBlogData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentBlog, setCurrentBlog] = useState(null);

  useEffect(() => {
    const fetchBlogPosts = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/posts");
        if (!response.ok) {
          throw new Error("Failed to fetch blog posts");
        }
        const data = await response.json();
        setBlogData(data);
        
        // Find the current blog post
        const blog = data.find((blog) => blog.id === parseInt(id));
        setCurrentBlog(blog || null);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogPosts();
  }, [id]);

  if (loading) {
    return <div className="text-center py-5">Loading...</div>;
  }

  if (error) {
    return <div className="text-center py-5">Error: {error}</div>;
  }

  if (!currentBlog) {
    return (
      <>
        <HeaderV1 headerClass="dark" />
        <BreadCrumb
          breadCrumb="blog"
          title1="Blog"
          bottomSpace="pb-0"
          offsetClass="offset-lg-1"
        />
        <div className="text-center py-5">
          <h3>Postagem não encontrada</h3>
          <p>A postagem que você está procurando não existe.</p>
        </div>
        <FooterV1 />
      </>
    );
  }

  return (
    <>
      <HeaderV1 headerClass="dark" />
      <BreadCrumb
        breadCrumb="blog"
        title1="Blog"
        bottomSpace="pb-0"
        offsetClass="offset-lg-1"
      />
      <BlogSingleContent blogInfo={currentBlog} totalBlogs={blogData.length} />
      <FooterV1 />
    </>
  );
};

export default BlogSingle;