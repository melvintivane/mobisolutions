import { useParams } from "react-router-dom";
import BreadCrumb from "../../components/breadCrumb/BreadCrumb";
import FooterV1 from "../../components/footer/FooterV1";
import HeaderV1 from "../../components/header/HeaderV1";
import ProjectDetailsContent from "../../components/project/ProjectDetailsContent";
import ProjectV1Data from "../../jsonData/ProjectV1Data.json";

const ProjectDetails = () => {
  const { id } = useParams();
  const data = ProjectV1Data.filter(
    (project) => project.id === parseInt(id)
  )[0];

  return (
    <>
      <HeaderV1 headerClass="dark" />
      <BreadCrumb
        breadCrumb="Detalhes do Projecto"
        title1={data.title}
        bottomSpace="pb-0"
      />
      <ProjectDetailsContent projectInfo={data} />
      <FooterV1 />
    </>
  );
};

export default ProjectDetails;
