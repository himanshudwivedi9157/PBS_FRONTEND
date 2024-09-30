import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { Link } from "react-router-dom";

const Academics = () => {
  return (
    <>
      <Navbar />
      <nav style={{ "--bs-breadcrumb-divider": "'>'" }} aria-label="breadcrumb">
        <ol className="breadcrumb ">
          <li className="breadcrumb-item ">
            <Link to="/">Home</Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            Academics
          </li>
        </ol>
      </nav>
      <main className="d-flex justify-content-around container p-4 border border-4">
        <div className="table-responsive">
          <table className="table table-primary">
            <thead>
              <tr>
                <th scope="col">Department </th>
                <th scope="col">Faculity Name</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Department of Hindi</td>
                <td>Himanshu Dwivedi</td>
              </tr>
              <tr>
                <td>Department of Hindi</td>
                <td>Himanshu Dwivedi</td>
              </tr>
              <tr>
                <td>Department of Hindi</td>
                <td>Himanshu Dwivedi</td>
              </tr>
              <tr>
                <td>Department of Hindi</td>
                <td>Himanshu Dwivedi</td>
              </tr>
              <tr>
                <td>Department of Hindi</td>
                <td>Himanshu Dwivedi</td>
              </tr>
              <tr>
                <td>Department of Hindi</td>
                <td>Himanshu Dwivedi</td>
              </tr>
              <tr>
                <td>Department of Hindi</td>
                <td>Himanshu Dwivedi</td>
              </tr>
              <tr>
                <td>Department of Hindi</td>
                <td>Himanshu Dwivedi</td>
              </tr>
              <tr>
                <td>Department of Hindi</td>
                <td>Himanshu Dwivedi</td>
              </tr>
              <tr>
                <td>Department of Hindi</td>
                <td>Himanshu Dwivedi</td>
              </tr>
              <tr>
                <td>Department of Hindi</td>
                <td>Himanshu Dwivedi</td>
              </tr>
              <tr>
                <td>Department of Hindi</td>
                <td>Himanshu Dwivedi</td>
              </tr>
              <tr>
                <td>Department of Hindi</td>
                <td>Himanshu Dwivedi</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div style={{ maxWidth: "400px" }} className=" p-3">
          <h5>Departments at BPS</h5>
          <ul>
            <li>
              Faculty of Applied Social Sciences and Humanities
              <ul>
                <li>Department of Finance and Business Economics</li>
              </ul>
            </li>
            <li>
              Faculty of Commerce & Business Studies
              <ul>
                <li>Department of Commerce</li>
              </ul>
            </li>
            <li>
              Faculty of Education
              <ul>
                <li>Department of Education</li>
              </ul>
            </li>
            <li>
              Faculty of Law
              <ul>
                <li>Department of Law</li>
              </ul>
            </li>
            <li>
              Faculty of Arts
              <ul>
                <li>Department of Arabic</li>
                <li>Department of Buddhist Studies</li>
                <li>Department of Germanic & Romance Studies</li>
                <li>Department of Hindi</li>
                <li>Department of Library & Information Science</li>
                <li>Department of Linguistics</li>
              </ul>
            </li>
            <li>
              Faculty of Interdisciplinary & Applied Sciences
              <ul>
                <li>Department of Microbiology</li>
                <li>Department of Physical Education & Sports Sciences</li>
                <li>Department of Plant Molecular Biology</li>
              </ul>
            </li>
            <li>
              Faculty of Music
              <ul>
                <li>Department of Music</li>
                <li>Department of Fin</li>
              </ul>
            </li>
          </ul>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default Academics;
