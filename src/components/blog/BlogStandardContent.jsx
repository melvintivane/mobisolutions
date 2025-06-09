import { useEffect, useState } from "react";
import Pagination from "react-paginate";
import { useNavigate, useParams } from "react-router-dom";
import SingleBlogContentV1 from "./SingleBlogContentV1";

const BlogStandardContent = () => {
  const [blogPosts, setBlogPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Pagination
  const navigate = useNavigate();
  const { page } = useParams();

  // Set initial page from URL
  const currentPageNumber = Number(page) || 1;
  const [currentPage, setCurrentPage] = useState(currentPageNumber);
  const [itemsPerPage] = useState(3);

  useEffect(() => {
    setCurrentPage(currentPageNumber);
  }, [currentPageNumber]);

  useEffect(() => {
    const fetchBlogPosts = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/posts");
        if (!response.ok) {
          throw new Error("Failed to fetch blog posts");
        }
        const data = await response.json();
        setBlogPosts(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogPosts();
  }, []);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentBlogData = blogPosts.slice(startIndex, endIndex);

  const handlePageClick = (data) => {
    const selectedPage = data.selected + 1;
    setCurrentPage(selectedPage);

    // Update the URL dynamically
    navigate(`/blog?page=${selectedPage}`);

    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 200);
  };

  const totalPages = Math.ceil(blogPosts.length / itemsPerPage);

  if (loading) {
    return <div className="text-center py-5">Loading...</div>;
  }

  if (error) {
    return <div className="text-center py-5">Error: {error}</div>;
  }

  if (blogPosts.length === 0) {
    return (
      <div className="blog-area full-blog blog-standard default-padding">
        <div className="container">
          <div className="row">
            <div className="blog-content col-xl-10 offset-xl-1 col-md-12 text-center py-5">
              <h3>Brevemente</h3>
              <p>Novos conteúdos estarão disponíveis em breve.</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="blog-area full-blog blog-standard default-padding">
        <div className="container">
          <div className="row">
            <div className="blog-content col-xl-10 offset-xl-1 col-md-12">
              <div className="blog-item-box">
                {currentBlogData.map((blog) => (
                  <SingleBlogContentV1 blog={blog} key={blog.id} />
                ))}
              </div>
              <Pagination
                previousLabel={
                  currentPage === 1 ? (
                    <i className="fas fa-ban"></i>
                  ) : (
                    <i className="fas fa-angle-double-left"></i>
                  )
                }
                nextLabel={
                  currentPage === totalPages ? (
                    <i className="fas fa-ban"></i>
                  ) : (
                    <i className="fas fa-angle-double-right"></i>
                  )
                }
                breakLabel={"..."}
                pageCount={totalPages}
                marginPagesDisplayed={2}
                pageRangeDisplayed={5}
                onPageChange={handlePageClick}
                containerClassName={"pagination text-center"}
                activeClassName={"active"}
                pageClassName={"page-item"}
                pageLinkClassName={"page-link"}
                previousLinkClassName={"page-link"}
                nextLinkClassName={"page-link"}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogStandardContent;