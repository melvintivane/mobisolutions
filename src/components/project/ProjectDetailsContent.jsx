import { useParams } from "react-router-dom";
import { useLanguage } from "../../context/LanguageContext";
import { useServiceProject } from "../../hook/useService";
import ProjectWidgetData from "../../jsonData/ProjectWidgetData.json";
import ProjectInfoWidget from "../widgets/ProjectInfoWidget";

const ProjectDetailsContent = () => {
  const { id } = useParams(); // Pega o ID da URL
  const projectInfo = useServiceProject(Number(id));
  const { language } = useLanguage();
  const projectData =
    ProjectWidgetData[language]?.find(
      (project) => project.id === parseInt(id)
    ) ||
    ProjectWidgetData["pt"]?.find((project) => project.id === parseInt(id)); // Converte para número e busca o serviço
  const {
    thumbFull,
    title2,
    title3,
    description,
    description2,
    lastParagraph,
    description3,
    boxImg1,
    boxImg2,
  } = projectInfo;

  const text = {
    pt: "Descrição do Projeto",
    en: "Project Description",
  };
  const t = text[language] || text[""];

  return (
    <>
      <div className="project-details-area default-padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="project-top-info">
                <div className="row">
                  <div className="col-xl-8 pr-50 pr-md-15 pr-xs-15">
                    <div className="project-thumb">
                      <img src={`/img/portfolio/${thumbFull}`} alt="Thumb" />
                    </div>
                  </div>
                  <div className="col-xl-4">
                    <ProjectInfoWidget projectInfos={projectData?.projectInfos || []} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="project-details-items">
            <div className="row">
              <div className="col-xl-10 offset-xl-1">
                <div className="project-details mt-40">
                  <h2>{t}</h2>
                  <p>{description}</p>
                  <ul className="check-list mb-30">
                    <li>
                      <h3>{title2}</h3>
                      <p>{description2}</p>
                    </li>
                    <li>
                      <h3>{title3}</h3>
                      <p>{description3}</p>
                    </li>
                  </ul>
                  <p>{lastParagraph}</p>
                  <div className="row mt-50 mt-xs-30">
                    <div className="col-lg-6 col-md-6">
                      <img src={`/img/portfolio/${boxImg1}`} alt="Thumb" />
                    </div>
                    <div className="col-lg-6 col-md-6 mt-xs-30">
                      <img src={`/img/portfolio/${boxImg2}`} alt="Thumb" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectDetailsContent;
