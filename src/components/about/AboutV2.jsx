import { HashLink as Link } from "react-router-hash-link";
import { useLanguage } from "../../context/LanguageContext";
import AboutListInfo from "../../jsonData/AboutListInfo.json";

const AboutV2 = () => {
  const { language } = useLanguage();
  const aboutText = {
    pt: {
      yearsInformation: "Anos de Experiência",
      subTitle: "Sobre a nossa empresa",
      title : "Oferecendo as melhores soluções",
      description:"Com um olhar atento às necessidades do mercado, nossa equipe de especialistas trabalha incansavelmente para entregar soluções inovadoras em desenvolvimento de software. Buscamos sempre a excelência em cada projeto, oferecendo sistemas robustos e eficientes que atendem às exigências de nossos clientes. Nossa missão é ajudar empresas a alcançar seus objetivos por meio da tecnologia, proporcionando ferramentas que otimizam processos e geram valor real.",
      link : " Descubra mais"
    },
    en: {
      yearsInformation: "Years of Experience",
      subTitle: "About Our Company",
      title : "Offering the Best Solutions",
      description:"With a keen eye on market needs, our team of specialists works tirelessly to deliver innovative software development solutions. We always strive for excellence in every project, providing robust and efficient systems that meet our clients' demands. Our mission is to help companies achieve their goals through technology, providing tools that optimize processes and generate real value.",
      link : " Discover more"
    }
  };
  const t = aboutText[language] || aboutText["pt"]; // Fallback to Portuguese if language not found
  const p = AboutListInfo[language] || AboutListInfo["pt"]; // Fallback to Portuguese if language not found
  return (
    <>
      <div className="about-style-two-area default-padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 about-style-two">
              <div className="about-two-thumb">
                <img src="/img/about/4.jpg" alt="Image Not Found" />
                <div className="experience">
                  <h2>
                    <strong>11</strong> {t.yearsInformation}
                  </h2>
                </div>
              </div>
            </div>
            <div className="col-lg-6 about-style-two pl-50 pl-md-15 pl-xs-15 mt-60 mt-xs-40">
              <div className="about-two-info">
                <h4 className="sub-title">{t.subTitle}</h4>
                <h2 className="title">{t.title}</h2>
                <p>
                  {t.description}
                </p>
                <div className="about-grid-info">
                  <Link className="btn-round-animation" to="/services#">
                    {t.link} <i className="fa-solid fa-arrow-right"></i>
                  </Link>
                  <ul className="list-info-item">
                    {p.map((list) => (
                      <li key={list.id}>
                        <h4>
                          <Link to={list.href}>
                            {list.title}{" "}
                            <i className="fa-solid fa-angle-right"></i>
                          </Link>
                        </h4>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutV2;
