import { useParams } from "react-router-dom";
import BreadCrumb from "../../components/breadCrumb/BreadCrumb";
import FooterV1 from "../../components/footer/FooterV1";
import HeaderV1 from "../../components/header/HeaderV1";
import ProjectDetailsContent from "../../components/project/ProjectDetailsContent";
import { useLanguage } from "../../context/LanguageContext";
import ProjectV1Data from "../../jsonData/ProjectV1Data.json";

const ProjectDetails = () => {
  const { id } = useParams();
   const { language } = useLanguage();
   const text = {
    pt:"Detalhes do Projecto",
    en:"Project Details"
   };
   const t = text[language] || text['pt'];
   const projects = ProjectV1Data[language] || ProjectV1Data['pt'];
    const data = projects.find(project => project.id === parseInt(id));

  return (
    <>
      <HeaderV1 headerClass="dark" />
      <BreadCrumb
        breadCrumb={t}
        title1={data.title}
        bottomSpace="pb-0"
      />
      <ProjectDetailsContent projectInfo={data} />
      <FooterV1 />
    </>
  );
};

export default ProjectDetails;
