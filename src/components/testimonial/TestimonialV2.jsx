import { useRef } from "react";
import { Autoplay, Keyboard, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { useLanguage } from "../../context/LanguageContext";
import TestimonialV2Data from "../../jsonData/TestimonialV2Data.json";
import SingleTestimonialV2 from "./SingleTestimonialV2";

const TestimonialV2 = () => {
  const SlideRef = useRef();

  const { language } = useLanguage();
  const testimonialText = {
    pt: {
      title: "Depoimentos",

    },
    en: {
      title: "Testimonials",
    },
  };
  const t = testimonialText[language] || testimonialText["pt"]; // Fallback to Portuguese if language not found
  const p = TestimonialV2Data[language] || TestimonialV2Data["pt"]; // Fallback to Portuguese if language not found
  return (
    <>
      <div className="testimonail-style-one-area default-padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-5">
              <div className="testimonial-style-one-thumb">
                <h2 className="text-large">{t.title}</h2>
                <img src="/img/about/testimonial.png" alt="Image Not Found" />
              </div>
            </div>
            <div className="col-lg-6 offset-lg-1 pt-200 pt-md-50 pt-xs-40">
              <div className="testimonial-style-one-carousel swiper">
                <div className="swiper-wrappers">
                  <Swiper
                    ref={SlideRef}
                    modules={[Keyboard, Autoplay, Pagination]}
                    slidesPerView={1}
                    spaceBetween={25}
                    autoplay={{
                      delay: 3000,
                      stopOnLastSlide: false,
                      disableOnInteraction: false,
                    }}
                    loop={true}
                    pagination={{
                      el: ".swiper-pagination",
                      type: "bullets",
                      clickable: true,
                    }}
                    keyboard={{
                      enabled: true,
                    }}
                  >
                    {p.map((testimonial) => (
                      <SwiperSlide key={testimonial.id}>
                        <SingleTestimonialV2 testimonial={testimonial} />
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>

                <div className="testimonial-style-one-pagination">
                  <div className="swiper-pagination"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TestimonialV2;
