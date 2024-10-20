// // src/pages/Login/Login.js

// import React, { useState } from "react";
// import StudentLogin from "../../Components/StudentLogin";
// import AplicentLogin from "../../Components/AplicentLogin";
// import TeacherLogin from "../../Components/TeacherLogin";
// import AdminLogin from "../../Components/AdminLogin";
// import styles from "./Login.module.css"; // Import the CSS module

// const Login = () => {
//   const [activeForm, setActiveForm] = useState(null);

//   const handleButtonClick = (formType) => {
//     setActiveForm(formType);
//   };

//   return (
//     <div className={styles.container}>
//       <h2>Login</h2>
//       <div className={styles.buttonContainer}>
//         <button
//           className={styles.button}
//           onClick={() => handleButtonClick("student")}
//         >
//           Student Login
//         </button>
//         <button
//           className={styles.button}
//           onClick={() => handleButtonClick("applicant")}
//         >
//           Applicant Login
//         </button>
//         <button
//           className={styles.button}
//           onClick={() => handleButtonClick("teacher")}
//         >
//           Teacher Login
//         </button>
//         <button
//           className={styles.button}
//           onClick={() => handleButtonClick("admin")}
//         >
//           Admin Login
//         </button>
//       </div>

//       {activeForm === "student" && <StudentLogin />}
//       {activeForm === "applicant" && <AplicentLogin />}
//       {activeForm === "teacher" && <TeacherLogin />}
//       {activeForm === "admin" && <AdminLogin />}
//     </div>
//   );
// };

// export default Login;

// src/pages/Login/Login.js

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import StudentLogin from "../../Components/StudentLogin";
import AplicentLogin from "../../Components/AplicentLogin";
import TeacherLogin from "../../Components/TeacherLogin";
import AdminLogin from "../../Components/AdminLogin";
import styles from "./Login.module.css"; // Import the CSS module

const Login = () => {
  const [activeForm, setActiveForm] = useState(null);
  const navigate = useNavigate();

  const handleButtonClick = (formType) => {
    setActiveForm(formType);
    navigate(`/login/${formType}`); // Update URL based on button click
  };

  return (
    <div className={styles.container}>
      <h2>Login</h2>
      <div className={styles.buttonContainer}>
        <button
          className={styles.button}
          onClick={() => handleButtonClick("student")}
        >
          Student Login
        </button>
        <button
          className={styles.button}
          onClick={() => handleButtonClick("applicant")}
        >
          Applicant Login
        </button>
        <button
          className={styles.button}
          onClick={() => handleButtonClick("teacher")}
        >
          Teacher Login
        </button>
        <button
          className={styles.button}
          onClick={() => handleButtonClick("admin")}
        >
          Admin Login
        </button>
      </div>

      {/* Show the respective login form based on the activeForm state */}
      {activeForm === "student" && <StudentLogin />}
      {activeForm === "applicant" && <AplicentLogin />}
      {activeForm === "teacher" && <TeacherLogin />}
      {activeForm === "admin" && <AdminLogin />}
    </div>
  );
};

export default Login;
