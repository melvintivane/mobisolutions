import { useLanguage } from "../../context/LanguageContext";
import WhyChooseUsV2Data from "../../jsonData/WhyChooseUsV2Data.json";

const WhyChooseUsV2 = () => {
  const { language } = useLanguage();
  const chooseText = {
    pt: {
      title: "Impulsione seu negócio",
      text: "Temos experiência em soluções digitais para você",
      time : "desde 2013" 
    },
    en: {
      title: "Boost Your Business",
      text: "We have experience in digital solutions for you",
      time : "since 2013"
    },
  };
  const t = chooseText[language] || chooseText["pt"]; // Fallback to Portuguese if language not found
  const p = WhyChooseUsV2Data[language] || WhyChooseUsV2Data["pt"]; // Fallback to Portuguese if language not found
  return (
    <>
      <div className="choose-us-style-two-area default-padding bg-dark text-light">
        <div className="container">
          <div className="row">
            <div className="col-xl-4">
              <div className="choose-us-style-two">
                <h2 className="title mb-50">{t.title}</h2>
                <ul className="check-list-item">
                  {p.map((choose) => (
                    <li key={choose.id}>
                      <h4>{choose.title}</h4>
                      <p>{choose.text}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="col-xl-7 offset-xl-1 text-end">
              <div className="choose-us-style-two-thumb">
                {/* <div className="curve-text">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 150 150"
                    version="1.1"
                  >
                    <path id="textPath" d="M 0,75 a 75,75 0 1,1 0,1 z"></path>
                    <text>
                      <textPath href="#textPath">
                        Agência digital premiada em soluções inovadoras de
                        software
                      </textPath>
                    </text>
                  </svg>
                </div> */}
                <h4>{t.text}</h4>
                <h2 className="text-path">{t.time}</h2>
                <img
                  src="/img/about/male-data-scientist.jpg"
                  alt="Image Not Found"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WhyChooseUsV2;
