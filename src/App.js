import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import "./index.css";

// Import pages
import Home from "./pages/Home";
import About from "./pages/About";
import Academics from "./pages/Academics.jsx";
import Admissions from "./pages/Admissions.jsx";
import Curriculum from "./pages/Curriculum.jsx";
import Gallery from "./pages/Gallery.jsx";
import Infrastructure from "./pages/Infrastructure.jsx";
import Careers from "./pages/Careers.jsx";
import Contact from "./pages/Contact.jsx";
import Register from "./pages/Ragister.jsx"; // Corrected the spelling

// Import login components
import Login from "./pages/Login/Login";
import AdminLogin from "./Components/AdminLogin";
import StudentLogin from "./Components/StudentLogin";
import AplicentLogin from "./Components/AplicentLogin";
import TeacherLogin from "./Components/TeacherLogin";

// Import dashboards for each user type
import AdminDashboard from "./dashboard/Admin/AdminDashboard.jsx";
import StudentDashboard from "./dashboard/Student/StudentDashborad.jsx";
import ApplicantDashboard from "./dashboard/Aplicent/AplicentDashboard.jsx";
import TeacherDashboard from "./dashboard/Teacher/TeacherDashboard.jsx";

// Import admin dashboard routes
import UserManagement from "./dashboard/Admin/UserManagement.jsx";
import AdmissionManagement from "./dashboard/Admin/AdmissionManagement.jsx";
import PaymentManagement from "./dashboard/Admin/PaymentManagement.jsx";
import CLCManagement from "./dashboard/Admin/CLCManagement.jsx";
import ExaminationManagement from "./dashboard/Admin/ExaminationManagement.jsx";
import RegisterationManagement from "./dashboard/Admin/RegistrationManagement.jsx";
import TCManagement from "./dashboard/Admin/TCManagement.jsx";
import ReportsAndAnalytics from "./dashboard/Admin/ReportsAndAnalytics.jsx";

// Import Aplicent dashboard routes
import ApplicationStatus from "./dashboard/Aplicent/ApplicationStatus.jsx";
import CLCApplication from "./dashboard/Aplicent/CLCApplication.jsx";
import Payment from "./dashboard/Aplicent/Payment.jsx";
import TCApplication from "./dashboard/Aplicent/TCApplication.jsx";

// Import Student dashboard routes

import RegistrationForm from "./dashboard/Student/RegistrationForm.jsx";
import TCApplicationForm from "./dashboard/Student/TCApplicationForm.jsx";
import CLCApplicationForm from "./dashboard/Student/CLCApplicationForm.jsx";
import ExaminationForm from "./dashboard/Student/ExaminationForm.jsx";
import CharacterCertificateForm from "./dashboard/Student/CharacterCertificateForm.jsx";
import PaymentForm from "./dashboard/Student/PaymentForm.jsx";

// Import Teacher dashboard routes
import ExaminationManage from "./dashboard/Teacher/ExaminationManage.jsx";
import ManageCourses from "./dashboard/Teacher/ManageCourses.jsx";
import MarkAttendance from "./dashboard/Teacher/MarkAttendance.jsx";
import TeacherProfile from "./dashboard/Teacher/TeacherProfile.jsx";
import UploadGrades from "./dashboard/Teacher/UploadGrades.jsx";
import ViewAssignments from "./dashboard/Teacher/ViewAssignments.jsx";
import ViewAttendance from "./dashboard/Teacher/ViewAttendance.jsx";
import ViewTimetable from "./dashboard/Teacher/ViewTimetable.jsx";
import Feedback from "./dashboard/Teacher/Feedback.jsx";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          {/* Main Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/admissions" element={<Admissions />} />
          <Route path="/academics" element={<Academics />} />
          <Route path="/curriculum" element={<Curriculum />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/infrastructure" element={<Infrastructure />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/register" element={<Register />} />

          {/* Login Routes */}
          <Route path="/login" element={<Login />}>
            <Route path="student" element={<StudentLogin />} />
            <Route path="applicant" element={<AplicentLogin />} />
            <Route path="teacher" element={<TeacherLogin />} />
            <Route path="admin" element={<AdminLogin />} />
          </Route>

          {/* Dashboard Routes */}
          <Route
            path="/login/admin/admin-dashboard"
            element={<AdminDashboard />}
          />
          <Route
            path="/login/student/student-dashboard"
            element={<StudentDashboard />}
          />
          <Route
            path="/login/aplicant/aplicant-dashboard"
            element={<ApplicantDashboard />}
          />
          <Route
            path="/login/teacher/teacher-dashboard"
            element={<TeacherDashboard />}
          />

          {/* Admin Dashboard Management Routes */}
          <Route
            path="/login/admin/user-management"
            element={<UserManagement />}
          />
          <Route
            path="/login/admin/admission-management"
            element={<AdmissionManagement />}
          />
          <Route
            path="/login/admin/payment-management"
            element={<PaymentManagement />}
          />
          <Route
            path="/login/admin/clc-management"
            element={<CLCManagement />}
          />
          <Route
            path="/login/admin/examination-management"
            element={<ExaminationManagement />}
          />
          <Route
            path="/login/admin/registeration-management"
            element={<RegisterationManagement />}
          />
          <Route path="/login/admin/tc-management" element={<TCManagement />} />
          <Route
            path="/login/admin/reportsandanalytics"
            element={<ReportsAndAnalytics />}
          />

          {/* Aplicent Dashboard Management Routes */}

          <Route
            path="/login/aplicant/application-status"
            element={<ApplicationStatus />}
          />
          <Route
            path="/login/aplicant/clc-application"
            element={<CLCApplication />}
          />
          <Route
            path="/login/aplicant/tc-application"
            element={<TCApplication />}
          />
          <Route path="/login/aplicant/payment" element={<Payment />} />

          {/* Aplicent Dashboard Management Routes */}

          <Route
            path="/login/student/Examination-from"
            element={<ExaminationForm />}
          />
          <Route
            path="/login/student/clcapplication-from"
            element={<CLCApplicationForm />}
          />
          <Route
            path="/login/student/tcapplication-from"
            element={<TCApplicationForm />}
          />
          <Route
            path="/login/student/registraion-from"
            element={<RegistrationForm />}
          />
          <Route
            path="/login/student/ccapplication-from"
            element={<CharacterCertificateForm />}
          />
          <Route path="/login/student/payment-form" element={<PaymentForm />} />

          {/* Aplicent Dashboard Management Routes */}

          <Route
            path="/login/teacher/examination-management"
            element={<ExaminationManage />}
          />
          <Route
            path="/login/teacher/feedback-management"
            element={<Feedback />}
          />
          <Route
            path="/login/teacher/manage-course"
            element={<ManageCourses />}
          />
          <Route
            path="/login/teacher/mark-attendance"
            element={<MarkAttendance />}
          />
          <Route
            path="/login/teacher/upload-grades"
            element={<UploadGrades />}
          />
          <Route
            path="/login/teacher/view-assignment"
            element={<ViewAssignments />}
          />
          <Route
            path="/login/teacher/view-timetable"
            element={<ViewTimetable />}
          />
          <Route
            path="/login/teacher/view-attendenca"
            element={<ViewAttendance />}
          />
          <Route
            path="/login/teacher/uploade-grades"
            element={<UploadGrades />}
          />
          <Route
            path="/login/teacher/teacher-profile"
            element={<TeacherProfile />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
