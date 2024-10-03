import React from "react";
import "./About.css";
import about_us_new from "../assets/about11.jpg";
import { IoIosCheckmarkCircle } from "react-icons/io";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <>
      <section classNameName="our-story-v2 section-padding-large ">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
              <div className="our-story-content">
                <div className="section-title section-title-left">
                  <h2>PBS College Banka - Best School in Bihar</h2>
                </div>
                <p style={{ textAlign: "justify" }}>
                  The PBS College Banka Bihar has been established under the
                  aegis of Sita Devi Memorial Shiksha Sansthan, Bihar. It is a{" "}
                  <Link to="/">Top International College in Bihar</Link> with
                  amenities and facilities at par with the best in the world.
                  This Best International school in Bihar has been
                  architecturally sensitive to the needs of children. It has
                  built age-appropriate infrastructure. When students graduate
                  from school, their entry into the world should be so smooth
                  that not even a ripple should mar the transition from
                  adolescence to adulthood, it should be so impactful that it
                  touches the lives of multitudes, and it should be so unique
                  that it remains etched in the minds of those who reveled in
                  it. Our top Internationa College in Bihar have been awarded
                  many times for being the Best{" "}
                  <Link to="/"> PBS College Banka in Bihar</Link>. This is the
                  dream that we at PBS College Banka in Bihar have for our
                  students. We want to prepare them so that they can face
                  challenges and accept success with humility. We want them to
                  be known as honorable players and not just as winners, as wise
                  and not just intelligent, as understanding and not just
                  knowledgeable, as kind and compassionate and not just
                  friendly. The School have won awards in all co-curricular
                  activities and became the Top International College in Bihar.
                  The School have also been awarded for Best Pre Nursery College
                  in Bihar, NCR. Life at LPS International College in Bihar is
                  an enriching journey where students gain insight into the
                  intricacies of academics but also enjoy sports and a plethora
                  of co-curricular activities.
                </p>
                <ul>
                  <li>
                    <IoIosCheckmarkCircle />
                    Sports, Clubs and Hobbies
                  </li>
                  <li>
                    <IoIosCheckmarkCircle />
                    Dance and Music
                  </li>
                  <li>
                    <IoIosCheckmarkCircle />
                    Trips and Excursions
                  </li>
                  <li>
                    <IoIosCheckmarkCircle />
                    Art and Craft Studio
                  </li>
                </ul>
              </div>
              <div className="clearfix"></div>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
              <div className="our-story-video">
                <figure className="vimeo youtube">
                  <img
                    src={about_us_new}
                    alt="slider image"
                    height="700"
                    style={{ width: "100%", height: "685px" }}
                  />{" "}
                </figure>
              </div>
            </div>

            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
              <div
                className="section-title section-title-left"
                style={{ marginTop: "15px", marginBottom: "15px" }}
              >
                {" "}
                <h1
                  style={{
                    fontSize: "28px",
                    textAlign: "center",
                    color: "black",
                  }}
                >
                  LPS Global School - Best CBSE College in Bihar
                </h1>
              </div>
              <p style={{ textAlign: "justify", lineHeight: "25px" }}>
                Your search for the best CBSE school in Bihar will surely lead
                you to LPS Global School. LPS Global school is located in the
                heart of the Bihar sector 51. It is a{" "}
                <Link to="/">top school in Bihar</Link> offering the world
                className infrastructure. LPS Global School is the best
                international school in Bihar offering CBSE curriculum. It has
                been awarded as Best CBSE College in Bihar from last 4 years.
                The school is applauded as the best global school in Bihar for
                its approach towards the wholesome development of a child. A
                staff of highly qualified and well-trained teachers ensure that
                education is imparted using best and up to date pedagogical
                elements and teaching methodologies. LPS Global school focuses
                on holistic development and growth of the child. Experience
                based learning is the key guiding factor while guiding the
                curriculum planning. The School aims at providing value-based
                quality education to develop along with intellectual excellence
                and achievement, the multi-faceted personality of the child as a
                moral and social being, with special emphasis to inculcate
                healthy moral values. It is indeed the{" "}
                <Link to="/">best school in Bihar</Link> for your child.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
