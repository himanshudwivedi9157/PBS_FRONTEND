import React from "react";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import { Link } from "react-router-dom";
import about_img from "../assets/background_img.jpg";

const About = () => {
  return (
    <>
      <Navbar />

      <nav style={{ "--bs-breadcrumb-divider": "'>'" }} aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link to="/About">Home</Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            About
          </li>
        </ol>
      </nav>

      <div className="card ">
        <img src={about_img} className="card-img" alt="About page background" />
        <div className="card-img-overlay">
          <h1 className="p-3">Welcome To About Page</h1>
          <p className="card-text">
            PBS College Banka is located in the district head quarter , near the
            old Mountain of Mandar. You can visualise the highly spread and
            beautiful searise mountain of mandar from the upper roof of PBS
            college Banka.This college was inaugurated by late Smt. Indra Gandi,
            the then President of Congress. PBS College Banka is about fourty
            eight K.M. from University head Quarter of TMBU Bhagalpur. The very
            renound named “PAP-HARNI” quoted by the seventh monarch of
            Cholas,supposed to wash the holi feet of Goad LaxmiNarayan & Goad
            Narshingha,is in the feet of Mandar Parwat and the visitors of PBS
            College Banka can get a golden chance of holydeep year. It has been
            discribed in the holi books of Hindues that with this Mandar Parbat,
            the process of ‘Samudra Manthan’ was complited in which fourteen
            Precious Ratnas including ‘Poison’ & ‘Lakshmi’ were found.This land
            of Mandar & Banka is famous for its ‘Bankpan’ . The grate martyr
            ‘Satish’ was the son of this land.This is the land which posses
            ‘Gurudham’ Maharshi Shyamacharan Lahri which is very recently to be
            visited by Hons’ble President of India.Hear the grate educationist
            Late Anand Shankar Madhwan complited his meditation of litrature for
            years & established a famous educational institutional named Mandar
            Vidyapith . Banka has a unique socio-cultural stracture that is a
            mixture of Hindu, Trible& Islamic culture.Most of the population of
            this area,particularly the students are rural & economically
            backword but on the contrary this area is politically very conscious
            .Since the days of British rule, despite naturalhardships, the
            people of this region have been excelling in achivements in the
            fields of Science, Arts & Politicis needless to say that Banka has
            produced many IAS Officers such as Late T.P.singh, Smt. Krishna
            Singh, Smt. Radha singh & Pankaj Kumar etc... The people of this
            area have grate sance of patriotins, participated activelly in the
            stragule of freedom & sacrificed theire lives on the altar of Mother
            India. PBS College Banka established in 1959 the only constitutent
            unit of TMBU,a prestigious University of Bihar established on
            12th-July-1960 having its campous in around 250 Acors of area. At
            present this Universitu runs under the dynamic leadership of a
            learned VC Prof.(Dr.) Ramashankar Dubey, who is dedicated to the
            development of this University as well as the development of PBS
            College Banka.the college is being run by the dedicated Principal
            in-Charge Dr. S.C. Singh. Banka is well communicated by railway and
            road both. Road distance from Jasidih, Deoghar to Banka is 65 KM.
            The VaidhnathDwadas Jayotirlinga Temple of Deoghar is only 65 KM
            from Banka & the Vikramsheela (Ancent University) is only 80 KM from
            Banka.
          </p>
          <p className="card-text">
            <small>Last updated 3 mins ago</small>
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default About;
