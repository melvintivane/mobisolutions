import { HashLink as Link } from "react-router-hash-link";
import { useLanguage } from "../../context/LanguageContext";

const BreadCrumb = ({
  title1,
  title2,
  breadCrumb,
  bottomSpace,
  offsetClass,
}) => {
  const { language } = useLanguage();
  const breadcrumbText = {
    pt: "Ínicio",
    en: "Home",
  };
  const t = breadcrumbText[language] || breadcrumbText["pt"]; // Fallback to Portuguese if language not found
  return (
    <>
      <div
        className="breadcrumb-area bg-gray bg-cover"
        style={{ backgroundImage: `url(/img/shape/banner-3.jpg)` }}
      >
        <div className="container">
          <div
            className={`breadcrumb-item ${
              bottomSpace ? bottomSpace : "pb-120"
            }`}
          >
            <div className="breadcrum-shape">
              <img src="/img/shape/16.png" alt="Image Not Found" />
            </div>
            <div className="row">
              <div className={`col-lg-8 ${offsetClass ? offsetClass : ""}`}>
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb">
                    <li>
                      <Link to="/#">
                        <i className="fa-solid fa-home"></i> {t}
                      </Link>
                    </li>
                    <li className="active">
                      {breadCrumb ? breadCrumb : "error"}
                    </li>
                  </ol>
                </nav>
                <h1>
                  {title1 ? title1 : "404 Not Found"} <br />{" "}
                  {title2 ? title2 : ""}
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BreadCrumb;
