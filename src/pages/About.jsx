import React from "react";
import Footer from "../Components/Footer";
import { Link } from "react-router-dom";
import Navbar from "../Components/Navbar";

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

      <main className="container-fluid d-flex flex-column flex-md-row">
        <div className="col-md-8 p-3">
          <p className="align-middle">
            PBS College Banka is located in the district head quarter, near the
            old Mountain of Mandar. You can visualise the highly spread and
            beautiful searise mountain of mandar from the upper roof of PBS
            college Banka. This college was inaugurated by late Smt. Indra
            Gandi, the then President of Congress. PBS College Banka is about
            forty-eight K.M. from University head Quarter of TMBU Bhagalpur. The
            very renowned named “PAP-HARNI” quoted by the seventh monarch of
            Cholas, supposed to wash the holy feet of Goad LaxmiNarayan & Goad
            Narshingha, is in the feet of Mandar Parwat and the visitors of PBS
            College Banka can get a golden chance of holy deep year. It has been
            described in the holy books of Hindus that with this Mandar Parbat,
            the process of ‘Samudra Manthan’ was completed in which fourteen
            Precious Ratnas including ‘Poison’ & ‘Lakshmi’ were found. This land
            of Mandar & Banka is famous for its ‘Bankpan’. The great martyr
            ‘Satish’ was the son of this land. This is the land which possesses
            ‘Gurudham’ Maharshi Shyamacharan Lahri which was recently visited by
            Hon’ble President of India. Here the great educationist Late Anand
            Shankar Madhwan completed his meditation of literature for years &
            established a famous educational institution named Mandar Vidyapith.
            Banka has a unique socio-cultural structure that is a mixture of
            Hindu, Tribal & Islamic culture. Most of the population of this
            area, particularly the students, are rural & economically backward
            but on the contrary this area is politically very conscious. Since
            the days of British rule, despite natural hardships, the people of
            this region have been excelling in achievements in the fields of
            Science, Arts & Politics. Needless to say that Banka has produced
            many IAS Officers such as Late T.P. Singh, Smt. Krishna Singh, Smt.
            Radha Singh & Pankaj Kumar etc. The people of this area have a great
            sense of patriotism, participated actively in the struggle for
            freedom & sacrificed their lives on the altar of Mother India. PBS
            College Banka established in 1959 is the only constituent unit of
            TMBU, a prestigious University of Bihar established on
            12th-July-1960 having its campus in around 250 acres of area. At
            present, this University runs under the dynamic leadership of a
            learned VC Prof. (Dr.) Ramashankar Dubey, who is dedicated to the
            development of this University as well as the development of PBS
            College Banka. The college is being run by the dedicated Principal
            in-Charge Dr. S.C. Singh. Banka is well communicated by railway and
            road both. Road distance from Jasidih, Deoghar to Banka is 65 KM.
            The Vaidhnath Dwadas Jayotirlinga Temple of Deoghar is only 65 KM
            from Banka & the Vikramsheela (Ancient University) is only 80 KM
            from Banka.
          </p>
        </div>

        <div className="col-md-4 p-3">
          <div className="accordion" id="accordionExample">
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseOne"
                  aria-expanded="true"
                  aria-controls="collapseOne"
                >
                  Know More About
                </button>
              </h2>
              <div
                id="collapseOne"
                className="accordion-collapse collapse show"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  <strong>PBS College Banka</strong> is located in the district
                  head quarter, near the old Mountain of Mandar. You can
                  visualise the highly spread and beautiful searise mountain of
                  mandar from the upper roof of PBS college Banka. This college
                  was inaugurated by late Smt.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseTwo"
                  aria-expanded="false"
                  aria-controls="collapseTwo"
                >
                  PBS Ranking
                </button>
              </h2>
              <div
                id="collapseTwo"
                className="accordion-collapse collapse"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  <strong>PBS College Banka</strong> is located in the district
                  head quarter, near the old Mountain of Mandar. You can
                  visualise the highly spread and beautiful searise mountain of
                  mandar from the upper roof of PBS college Banka. This college
                  was inaugurated by late Smt.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseThree"
                  aria-expanded="false"
                  aria-controls="collapseThree"
                >
                  PBS Sport
                </button>
              </h2>
              <div
                id="collapseThree"
                className="accordion-collapse collapse"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  <strong>PBS College Banka</strong> is located in the district
                  head quarter, near the old Mountain of Mandar. You can
                  visualise the highly spread and beautiful searise mountain of
                  mandar from the upper roof of PBS college Banka. This college
                  was inaugurated by late Smt.
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default About;
