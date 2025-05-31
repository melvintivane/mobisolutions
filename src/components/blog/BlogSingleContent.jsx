import BlogForm from "./BlogForm";
import Animate from "../animation/Animate";
import { Link } from "react-router-dom";
import handleSmoothScroll from "../utilities/handleSmoothScroll";
import SingleBlogComment from "./SingleBlogComment";
import BlogCommentData from "../../jsonData/BlogCommentData.json";
import BlogV1Data from "../../jsonData/BlogV1Data.json";
import team9 from "/img/team/9.jpg";
import SocialShare2 from "../others/SocialShare2";

const BlogSingleContent = ({ blogInfo, totalBlogs }) => {
  const { id, thumbFull, midTitle, title } = blogInfo || {};

  // Blogs Navigation
  const currentId = id ? parseInt(id.toString(), 10) : 1;

  // Calculate the previous and next IDs dynamically
  const previousId = currentId === 1 ? totalBlogs : currentId - 1;
  const nextId = currentId === totalBlogs ? 1 : currentId + 1;

  // Get the previous and next project titles
  const previousBlog = BlogV1Data.find((blog) => blog.id === previousId);
  const nextBlog = BlogV1Data.find((blog) => blog.id === nextId);

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
                        <img src={`/img/blog/${thumbFull}`} alt="Thumb" />
                      </div>
                      <div className="info">
                        <div className="meta">
                          <ul>
                            <li>
                              <i className="fa-solid fa-user"></i>{" "}
                              <Link to="#">Md Sohag</Link>
                            </li>
                            <li>
                              <i className="fa-solid fa-calendar-alt"></i> 25 de
                              Abril, 2024
                            </li>
                          </ul>
                        </div>
                        <p>
                          Dê à dama o que eles acham que ela merece. Expus
                          claramente minha formação. Vulgar como corações no
                          sótão. Percebeu a partida explicada sem que ele
                          perdesse algo. Contrastando diferenças, você encontra
                          alegria razoavelmente. Novamente permanece sem
                          sentido. Para continuar existindo ao norte, como
                          filhas protegidas com dificuldade. Continuou com
                          entusiasmo necessário até o café da manhã. Cercada,
                          senhorita imóvel, ela finalizou a leitura. Direção
                          alegre negligenciada, mas ainda assim apoiada por ela.
                        </p>
                        <p>
                          Novidades aconteceram deixando todos desconfortáveis.
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
                        <blockquote>
                          Celebrou-se a partilha do início para o pior.
                          Casamentos e quaisquer opiniões apropriadas, mesmo que
                          pequenas. Casas ou meses resolveram afastar as
                          senhoras. Envolvido em sofrimento, supunha-se que ele
                          recomendava com entusiasmo.
                        </blockquote>
                        <p>
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
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* <BlogPostAuthor /> */}
                  <div className="post-author">
                    <div className="thumb">
                      <img src={team9} alt="Thumb" />
                    </div>
                    <div className="info">
                      <h4>
                        <Link to="#" onClick={handleSmoothScroll}>
                          Md Sohag
                        </Link>
                      </h4>
                      <p>
                        Grursus mal suada faci lisis Lorem ipsum dolarorit more
                        ametion consectetur elit. Vesti at bulum nec at odio aea
                        the dumm ipsumm ipsum that dolocons rsus mal suada and
                        fadolorit to the consectetur elit. Todos os geradores de
                        Lorem Ipsum na Internet tendem a repetir.
                      </p>
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

                  {/* Post Pagination */}
                  <div className="post-pagi-area">
                    <div className="post-previous">
                      <Link to={`/blog/${previousId}`}>
                        <div className="icon">
                          <i className="fa-solid fa-angle-double-left"></i>
                        </div>
                        <div className="nav-title">
                          {" "}
                          Postagem Anterior{" "}
                          <h5>{getFirstTwoWords(previousBlog?.title)}</h5>
                        </div>
                      </Link>
                    </div>
                    <div className="post-next">
                      <Link to={`/blog/${nextId}`}>
                        <div className="nav-title">
                          Próxima Postagem{" "}
                          <h5>{getFirstTwoWords(nextBlog?.title)}</h5>
                        </div>
                        <div className="icon">
                          <i className="fa-solid fa-angle-double-right"></i>
                        </div>
                      </Link>
                    </div>
                  </div>

                  {/* blog-comments */}
                  <div className="blog-comments">
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
                  </div>
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
