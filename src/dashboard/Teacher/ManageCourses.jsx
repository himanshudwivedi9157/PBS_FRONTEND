import React, { useState } from "react";

function ManageCourses() {
  const [courses, setCourses] = useState([
    { courseId: 1, name: "Data Structures", semester: "Semester 2" },
    { courseId: 2, name: "Operating Systems", semester: "Semester 4" },
    { courseId: 3, name: "Database Systems", semester: "Semester 6" },
  ]);

  return (
    <div className="container mt-4">
      <h2 className="h4 mb-3">Manage Courses</h2>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Course Name</th>
            <th>Semester</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {courses.map((course) => (
            <tr key={course.courseId}>
              <td>{course.name}</td>
              <td>{course.semester}</td>
              <td>
                <button className="btn btn-secondary me-2">
                  Upload Material
                </button>
                <button className="btn btn-primary">Edit</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ManageCourses;
