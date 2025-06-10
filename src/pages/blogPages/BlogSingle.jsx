import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import BlogSingleContent from "../../components/blog/BlogSingleContent";
import BreadCrumb from "../../components/breadCrumb/BreadCrumb";
import FooterV1 from "../../components/footer/FooterV1";
import HeaderV1 from "../../components/header/HeaderV1";

const BlogSingle = () => {
  const { id } = useParams();
  const [currentBlog, setCurrentBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [allPosts, setAllPosts] = useState([]); // Para navegação entre posts

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Busca o post específico
        const postResponse = await fetch(`http://localhost:5000/api/posts/${id}`);
        if (!postResponse.ok) throw new Error("Post não encontrado");
        const postData = await postResponse.json();
        setCurrentBlog(postData);

        // Busca todos os posts apenas para navegação (próximo/anterior)
        const allResponse = await fetch("http://localhost:5000/api/posts");
        if (allResponse.ok) {
          const allData = await allResponse.json();
          setAllPosts(allData);
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  if (loading) return <div className="text-center py-5">Carregando...</div>;
  if (error) return <div className="text-center py-5">Erro: {error}</div>;
  if (!currentBlog) return <div className="text-center py-5">Post não encontrado</div>;

  return (
    <>
      <HeaderV1 headerClass="dark" />
      <BreadCrumb
        breadCrumb="blog"
        title1="Blog"
        bottomSpace="pb-0"
        offsetClass="offset-lg-1"
      />
      <BlogSingleContent 
        blogInfo={currentBlog} 
        totalBlogs={allPosts.length} 
        allPosts={allPosts} 
      />
      <FooterV1 />
    </>
  );
};

export default BlogSingle;