import { useLanguage } from "../../context/LanguageContext";
import ProcessV1Data from "../../jsonData/ProcessV1Data.json";
import SingleProcessV1 from "./SingleProcessV1";

const ProcessV1 = ({ processClass }) => {
  const { language } = useLanguage();
  const processText = {
    pt: {
      subTitle: "Como trabalhamos",
      title: "Soluções eficazes com estratégia e tecnologia sob medida",
    },
    en: {
      subTitle: "How We Work",
      title: "Effective Solutions with Tailored Strategy and Technology",
    },
  };
  const t = processText[language] || processText["pt"]; // Fallback to Portuguese if language not found
  const p = ProcessV1Data[language] || ProcessV1Data["pt"]; // Fallback to Portuguese if language not found
  return (
    <>
      <div
        className={`process-style-one-area text-center default-padding-bottom ${processClass} mt-75`}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-2">
              <div className="site-heading text-center">
                <h5 className="sub-title">{t.subTitle}</h5>
                <h2 className="title">
                  {t.title.split("<br/>").map((line, index) => (
                    <span key={index}>
                      {line}
                      {index < t.title.split("<br/>").length - 1 && <br />}
                    </span>
                  ))}
                </h2>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            {p.map((process) => (
              <div
                className="col-xl-3 col-lg-6 process-style-one"
                key={process.id}
              >
                <SingleProcessV1 process={process} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProcessV1;
