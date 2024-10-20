import React, { useState } from "react";

function Profile() {
  const [teacherData, setTeacherData] = useState({
    name: "John Doe",
    department: "Computer Science",
    email: "johndoe@example.com",
    contact: "123-456-7890",
  });

  return (
    <div className="container mt-4">
      <h2 className="h4 mb-3">Teacher Profile</h2>
      <div className="card p-4">
        <div className="mb-3">
          <strong>Name:</strong> {teacherData.name}
        </div>
        <div className="mb-3">
          <strong>Department:</strong> {teacherData.department}
        </div>
        <div className="mb-3">
          <strong>Email:</strong> {teacherData.email}
        </div>
        <div className="mb-3">
          <strong>Contact:</strong> {teacherData.contact}
        </div>
        <button className="btn btn-primary">Edit Profile</button>
      </div>
    </div>
  );
}

export default Profile;
