import React from "react";
import { HashLink as Link } from "react-router-hash-link";

const SinglePriceV2 = ({ price }) => {
  const {
    planClass,
    plan,
    planInfo,
    planPrice,
    priceType,
    list1,
    list2,
    list3,
    list4,
    list5,
    list6,
    list7,
    list8,
    list9,
    icon1,
    icon2,
    icon3,
    btnLink,
    btnText,
    btnClass,
  } = price;

  return (
    <>
      <div className={`pricing-style-two ${planClass}`}>
        <div className="pricing-header">
          <h4>{plan}</h4>
          <p>{planInfo}</p>
        </div>
        <div className="pricing-content">
          <div className="price">
            <h2>
              <sup id="priceSup">MT</sup>
              {planPrice} <sub>{priceType}</sub>
            </h2>
          </div>
          <ul>
            <li>
              <i className={icon1}></i> {list1}
            </li>
            <li>
              <i className={icon2}></i> {list2}
            </li>
            <li>
              <i className={icon2}></i> {list3}
            </li>
            <li>
              <i className={icon2}></i> {list4}
            </li>
            <li>
              <i className={icon2}></i> {list5}
            </li>
            <li>
              <i className={icon2}></i> {list6}
            </li>
            <li>
              <i className={icon2}></i> {list7}
            </li>
            <li>
              <i className={icon2}></i> {list8}
            </li>
            <li>
              <i className={icon3}></i> {list9}
            </li>
          </ul>
          <Link
            className={`btn mt-30 btn-sm ${btnClass ? btnClass : ""} effect`}
            to={`/${btnLink}#`}
          >
            {btnText}
          </Link>
        </div>
      </div>
    </>
  );
};

export default SinglePriceV2;
