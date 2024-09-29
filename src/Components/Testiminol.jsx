import React from "react";
import "./Testiminol.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img_stu_1 from "../assets/Sadia.jpg";

const Testimonial = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
  };

  return (
    <section className="aboutus-testimonials2 section-padding-large">
      <div className="container">
        <div className="section-title section-title-left section-title-m50">
          <h2>Testimonials</h2>
        </div>
        <div className="aboutus-testimonials2-content">
          <div className="row">
            <Slider {...settings}>
              <article className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12 item">
                <div className="info background-grey">
                  <p className="desc">
                    "I enjoy coming to school every day. My teachers explain all
                    the topics very nicely. The school gives me a lot of
                    opportunities to participate in competitions and for public
                    speaking during assemblies & in class. I really enjoy being
                    in the school as my teachers support me very much in all
                    activities and make us learn things in a very interesting
                    way. Proud to be a part of LPS Global School as it's the Top
                    school in Noida."
                  </p>
                </div>
                <figure>
                  <img src={img_stu_1} alt="Tanya Tewatia" />
                  <div className="thumb-info">
                    <h4 className="title">Tanya Tewatia</h4>
                    <span className="job-title">Teacher</span>
                  </div>
                </figure>
              </article>

              <article className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12 item">
                <div className="info background-grey">
                  <p className="desc">
                    "I enjoy coming to school every day. My teachers explain all
                    the topics very nicely. The school gives me a lot of
                    opportunities to participate in competitions and for public
                    speaking during assemblies & in class. I really enjoy being
                    in the school as my teachers support me very much in all
                    activities and make us learn things in a very interesting
                    way. Proud to be a part of LPS Global School as it's the Top
                    school in Noida."
                  </p>
                </div>
                <figure>
                  <img src={img_stu_1} alt="Nicole" />
                  <div className="thumb-info">
                    <h4 className="title">Nicole</h4>
                    <span className="job-title">Student</span>
                  </div>
                </figure>
              </article>

              {/* Other testimonial articles remain unchanged */}
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
