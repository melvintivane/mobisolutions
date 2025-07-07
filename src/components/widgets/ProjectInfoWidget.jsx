
const ProjectInfoWidget = ({projectInfos}) => {
  return (
    <>
      <ul
        className="gallery-project-basic-info"
        style={{ backgroundImage: `url(/img/shape/26.png)` }}
      >
        {projectInfos.map((info) => (
          <li key={info.id}>
            <div className="info">
              {info.infoName} <span>{info.infoValue}</span>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};

export default ProjectInfoWidget;
