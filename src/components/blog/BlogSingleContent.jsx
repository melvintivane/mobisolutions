import { Link } from "react-router-dom";
import Animate from "../animation/Animate";
import SocialShare2 from "../others/SocialShare2";
import handleSmoothScroll from "../utilities/handleSmoothScroll";

const BlogSingleContent = ({ blogInfo, allPosts = [] }) => {
  const {
    _id,
    blogTitle,
    authorName,
    date,
    mainText,
    quoteText,
    thumb,
    authorProfileImg,
    authorResume,
  } = blogInfo || {};


  // Formatação da data
 const formatDate = (date) => {
  const options = {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  };

  return new Intl.DateTimeFormat('pt-BR', options).format(date);
};

// Uso da formatação de data
const dateFormatted = new Date(date);
const formattedDate = formatDate(dateFormatted);

  // Navegação entre posts usando allPosts
  const currentIndex = allPosts.findIndex((post) => post._id === _id);
  const previousPost = currentIndex > 0 ? allPosts[currentIndex - 1] : null;
  const nextPost =
    currentIndex < allPosts.length - 1 ? allPosts[currentIndex + 1] : null;

  // Get the first two words of the project title
  const getFirstTwoWords = (text) =>
    text?.split(" ").slice(0, 2).join(" ") || "No Title";

  return (
    <>
      <div className="blog-area single full-blog full-blog default-padding">
        <div className="container">
          <div className="blog-items">
            <div className="row">
              <Animate className="animate__animated animate__fadeInUp">
                <div className="blog-content col-lg-10 offset-lg-1 col-md-12">
                  {/* BlogPostContent */}
                  <div className="blog-style-one item">
                    <div className="blog-item-box">
                      <div className="thumb">
                        <img src={`http://localhost:5000${thumb}`} alt="Thumb" />
                      </div>
                      <div className="info">
                        <div className="meta">
                          <ul>
                            <li>
                              <i className="fa-solid fa-user"></i>{" "}
                              <Link to="#">{authorName}</Link>
                            </li>
                            <li>
                              <i className="fa-solid fa-calendar-alt"></i>{" "}
                              {formattedDate}
                            </li>
                          </ul>
                        </div>
                        <p>{mainText}</p>

                        <blockquote>{quoteText}</blockquote>
                        {/*<p>
                          Desenhos podem ser seguidos, melhorados, mas não
                          sociáveis. Fingiu de imediato com seriedade. Veja
                          alguns relatos agradáveis de forma cortês. Excelência
                          projetada é enviada de Devonshire, notavelmente ao
                          estimar. O lado da vida no passado. Continuar se
                          expressando era horrível para o ambiente doméstico.
                          Ver ela o fez não valorizar os homens, desculpando-se
                          com sua genialidade. Negociações sobre sua idade.
                          Comparações com o novo filho melancólico de Hampshire.
                        </p>
                        <h3>{midTitle}</h3>
                        <ul>
                          <li>Bastante mérito aguardado por seis</li>
                          <li>
                            Relatos agradáveis de forma cortês, de forma geral.
                          </li>
                          <li>Continuou a se expressar</li>
                          <li>Formalidade estreita, altamente presente</li>
                          <li>
                            Alterações ocasionais no piano, sem efeitos visíveis
                          </li>
                        </ul>
                        <p>
                          Cercado por mim, alterações ocasionais no piano foram
                          ineficazes. Via-se mais frio do que o esperado.
                          Bastante mérito aguardado por seis, conversas que te
                          comoveram. A condução respondeu se lideraria alguma
                          chegada adaptada. Numerosas damas e seus gracejos
                          recebidos com bondade. Tanta formalidade e extensão
                          que mal pude arcar. Alto e elegante, ele representava
                          ou entediava. Lorem ipsum dolor, sit amet consectetur
                          adipisicing elit. Iure, laudantium, tempore. Autem
                          dolore repellat, omnis quam? Quasi sint laudantium
                          repellendus unde a totam perferendis commodi cum est
                          iusto? Minima, laborum.
                        </p>*/}
                      </div>
                    </div>
                  </div>

                  {/* <BlogPostAuthor /> */}
                  <div className="post-author">
                    <div className="thumb">
                      <img src={authorProfileImg} alt="Thumb" />
                    </div>
                    <div className="info">
                      <h4>
                        <Link to="#" onClick={handleSmoothScroll}>
                          {authorName}
                        </Link>
                      </h4>
                      <p>{authorResume}</p>
                    </div>
                  </div>
                  {/* <BlogTagsShare /> */}
                  <div className="post-tags share">
                    <div className="tags">
                      <h4>Tags: </h4>
                      <Link to="#" onClick={handleSmoothScroll}>
                        Algoritmo
                      </Link>
                      <Link to="#" onClick={handleSmoothScroll}>
                        Ciência de Dados
                      </Link>
                    </div>
                    <div className="social">
                      <h4>Partilhar:</h4>
                      <ul>
                        <SocialShare2 />
                      </ul>
                    </div>
                  </div>

                  {/* Post Pagination - Versão Corrigida */}
                  <div className="post-pagi-area">
                    {previousPost && (
                      <div className="post-previous">
                        <Link to={`/blog/${previousPost._id}`}>
                          <div className="icon">
                            <i className="fa-solid fa-angle-double-left"></i>
                          </div>
                          <div className="nav-title">
                            Postagem Anterior
                            <h5>{getFirstTwoWords(previousPost.blogTitle)}</h5>
                          </div>
                        </Link>
                      </div>
                    )}

                    {nextPost && (
                      <div className="post-next">
                        <Link to={`/blog/${nextPost._id}`}>
                          <div className="nav-title">
                            Próxima Postagem
                            <h5>{getFirstTwoWords(nextPost.blogTitle)}</h5>
                          </div>
                          <div className="icon">
                            <i className="fa-solid fa-angle-double-right"></i>
                          </div>
                        </Link>
                      </div>
                    )}
                  </div>

                  {/* blog-comments */}
                  {/*<div className="blog-comments">
                    <div className="comments-area">
                      <div className="comments-title">
                        <h3>{`3 Comments On “${title}”`}</h3>
                        <div className="comments-list">
                          {BlogCommentData.map((comment) => (
                            <SingleBlogComment
                              comment={comment}
                              key={comment.id}
                            />
                          ))}
                        </div>
                      </div>
                      <BlogForm />
                    </div>
                  </div>*/}
                </div>
              </Animate>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogSingleContent;
