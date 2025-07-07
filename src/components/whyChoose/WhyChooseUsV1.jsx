import { useLanguage } from "../../context/LanguageContext";
import AchievementV1Data from "../../jsonData/AchievementV1Data.json";
import SingleAchievementV1 from "./SingleAchievement";

const WhyChooseUsV1 = ({ chooseClass }) => {
  const { language } = useLanguage();
  const achievementText = {
    pt: {
      subTitle: "Nossos Números",
      title: "Resultados que Falam por Si",
      text : "Oferecemos soluções tecnológicas sob medida que impulsionam resultados reais. Nossa equipe combina experiência técnica com foco em eficiência, segurança e escalabilidade.",
      item1: "Arquitetura de Sistemas Personalizada",
      item2: "Integrações em Tempo Real e APIs Seguras",
      item3: "Desenvolvimento Ágil e Escalável",
    },
    en: {
      subTitle: "Our Numbers",
      title: "Results that Speak for Themselves",
      text: "We provide tailored technological solutions that drive real results. Our team combines technical expertise with a focus on efficiency, security, and scalability.",
      item1: "Custom System Architecture",
      item2: "Real-Time Integrations and Secure APIs",
      item3: "Agile and Scalable Development",
    },
  };
  const t = achievementText[language] || achievementText["pt"]; // Fallback to Portuguese if language not found
  const p = AchievementV1Data[language] || AchievementV1Data
  return (
    <>
      <div
        className={`choose-us-style-one-area default-padding overflow-hidden ${chooseClass}`}
      >
        <div className="container">
          <div className="row align-center">
            <div className="col-xl-5">
              <div
                className="achivement-counter"
                style={{ backgroundImage: "url(img/shape/banner-4.png)" }}
              >
                <div className="shape-animated-left-bottom">
                  <img src="/img/shape/11.png" alt="shape" />
                </div>
                <ul>
                  {p.map((achievement) => (
                    <SingleAchievementV1
                      achievement={achievement}
                      key={achievement.id}
                    />
                  ))}
                </ul>
              </div>
            </div>
            <div className="col-xl-6 offset-xl-1 mt-md-50 mt-xs-40">
              <div className="choose-us-card">
                <h4 className="sub-title">{t.subTitle}</h4>
                <h2 className="title">
                  {t.title.split("<br/>").map((line, index) => (
                    <span key={index}>
                      {line}
                      {index < t.title.split("<br/>").length - 1 && <br />}
                    </span>
                  ))}
                </h2>
                <p>
                  {t.text}
                </p>
                <ul className="list-check">
                  <li>{t.item1}</li>
                  <li>{t.item2}</li>
                  <li>{t.item3}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WhyChooseUsV1;
