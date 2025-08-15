import '@fortawesome/fontawesome-free/css/all.min.css';
import { HashLink as Link } from "react-router-hash-link";
import { useLanguage } from '../../context/LanguageContext';

const SingleProjectV1 = ({ project }) => {
  const { id, thumb, projectLink, subTitle, title, shape,link } = project;
  const {language} = useLanguage();

  return (
    <>
      <div className="swiper-slide">
        <div className="project-style-one">
          <img src={`/img/portfolio/${thumb}`} alt="Thumb" />
          <div className="overlay">
            <span>{subTitle}</span>
            <h4>
              <Link to={`/${projectLink}/${id}#`}>{title}</Link>
            </h4>
            <h6 style={{paddingTop:"10px"}}>
              <Link to={`${link}`} target="_blank"><i class="fa-solid fa-eye"></i> {language === 'pt' ? " Visitar" : " Look Up"}</Link>
            </h6>
          </div>
          <div className="shape">
            <img src={`/img/shape/${shape}`} alt="shape" />
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleProjectV1;
