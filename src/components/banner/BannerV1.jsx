import { HashLink as Link } from "react-router-hash-link";
import { useLanguage } from "../../context/LanguageContext";
import Animate from "../animation/Animate";

const BannerV1 = () => {
  const { language } = useLanguage();
  const bannerText = {
    pt: {
      title: "Soluções",
      titleStrong : "Criativas",
      description:
        "Encorajamos entusiasmo e acompanhamos de forma apropriada por que o riso impulsiona o esforço. Na minha experiência, a dedicação e o foco resultam em resultados perfeitos.",
      buttonText: "Começar Agora",
    },
    en: {
      title: "Creative ",
      titleStrong : "Solutions",
      description:
        "We encourage enthusiasm and appropriately follow through because laughter drives effort. In my experience, dedication and focus lead to perfect results.",
      buttonText: "Get Started Now",
    },
  };  
  const t = bannerText[language] || bannerText["pt"]; // Fallback to Portuguese if language not found
  return (
    <>
      <div
        className="banner-style-one-area"
        style={{ backgroundImage: "url(img/shape/1.png)" }}
      >
        <div className="shape-left-top">
          <img src="/img/shape/2.png" alt="Shape" />
        </div>
        <div className="banner-style-one">
          <div className="container">
            <div className="content">
              <div className="row align-center">
                <div className="col-xl-4 col-lg-6">
                  <div className="information">
                    <Animate
                      className="animate__animated animate__fadeInUp"
                      delay="500ms"
                      duration="400ms"
                    >
                      <h2>
                        {t.title} <strong>{t.titleStrong}</strong>
                      </h2>
                    </Animate>
                    <Animate
                      className="animate__animated animate__fadeInUp"
                      delay="900ms"
                      duration="400ms"
                    >
                      <p>
                        {t.description}
                      </p>
                    </Animate>
                    <Animate
                      className="animate__animated animate__fadeInUp"
                      delay="1200ms"
                      duration="400ms"
                    >
                      <div className="button mt-40">
                        <Link
                          className="btn btn-md btn-gradient animation"
                          to="/contact-us#"
                        >
                          {t.buttonText}
                        </Link>
                      </div>
                    </Animate>
                  </div>
                </div>
                {/* <div className="col-xl-6 col-lg-6 pl-50 pl-md-15 pl-xs-15">
                  <div className="thumb">
                    <Animate className="animate__animated animate__fadeInUp">
                      <img
                        src="/img/thumb/4_4.png"
                        alt="Banner Image"
                        className="w-full h-auto"
                      />
                    </Animate>
                    <Animate
                      className="animate__animated animate__fadeInDown"
                      delay="500ms"
                    >
                      <img
                        src="/img/thumb/THG_M78_09.png"
                        alt="Banner Image"
                        className="w-full h-auto"
                      />
                    </Animate>
                  </div>
                </div> */}
                <div className="col-xl-8 col-lg-6 pl-50 pl-md-15 pl-xs-15">
                  <img
                    src="/img/thumb/tech-bg.png"
                    alt="Banner Image"
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BannerV1;
