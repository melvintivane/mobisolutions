import { HashLink as Link } from "react-router-hash-link";
import { useLanguage } from "../../context/LanguageContext";

const ProjectDeal = () => {
  const { language } = useLanguage();
  const projectDealText = {   
    pt: {
      title: "Tem um projecto de software? Vamos conversar",
      buttonText: "Enviar Mensagem",
    },
    en: {
      title: "Have a software project? Let's talk",
      buttonText: "Send Message",
    },
  };
  const t = projectDealText[language] || projectDealText["pt"]; // Fallback to Portuguese if language not found
  return (
    <>
      <div className="project-deal-area text-center default-padding bg-gray">
        <div className="arrow-illustration">
          <img src="/img/illustration/9.png" alt="Image Not Found" />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-2">
              <div className="project-deal">
                <h2 className="title">
                  {t.title.split("<br/>").map((line, index) => (
                    <span key={index}>
                      {line}
                      {index < t.title.split("<br/>").length - 1 && <br />}
                    </span>
                  ))}
                </h2>
                <Link
                  className="btn mt-30 btn-md circle btn-gradient animation"
                  to="/contact-us#"
                >
                  {t.buttonText}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectDeal;
