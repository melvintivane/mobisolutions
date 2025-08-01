import { useLanguage } from "../../context/LanguageContext";
import PriceV2Data from "../../jsonData/PriceV2Data.json";
import SinglePriceV2 from "./SinglePriceV2";

const PriceV2 = () => {
  const {language} = useLanguage();
  const p = PriceV2Data[language] || PriceV2Data['pt']
  return (
    <>
      <div className="pricing-area pricing-gird default-padding bottom-less">
        <div className="container">
          <div className="pricing-style-two-items">
            <div className="row">
              {p.map((price) => (
                <div className="col-xl-4 col-md-6 mb-30" key={price.id}>
                  <SinglePriceV2 price={price} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PriceV2;
