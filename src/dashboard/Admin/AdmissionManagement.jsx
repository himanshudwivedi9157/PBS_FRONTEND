// // AdmissionManagement.jsx
// import React, { useState } from "react";
// import { Button, Modal, Table, Form } from "react-bootstrap";

// function AdmissionManagement() {
//   const [admissions, setAdmissions] = useState([]); // Replace with actual data fetching
//   const [showModal, setShowModal] = useState(false);
//   const [editMode, setEditMode] = useState(false);
//   const [currentAdmission, setCurrentAdmission] = useState({
//     name: "",
//     email: "",
//     course: "",
//     status: "pending",
//   });

//   const handleShow = (admission = null) => {
//     if (admission) {
//       setEditMode(true);
//       setCurrentAdmission(admission);
//     } else {
//       setEditMode(false);
//       setCurrentAdmission({
//         name: "",
//         email: "",
//         course: "",
//         status: "pending",
//       });
//     }
//     setShowModal(true);
//   };

//   const handleClose = () => setShowModal(false);

//   const handleSave = () => {
//     // Logic to save admission (add or edit)
//     // Update the admissions state
//     handleClose();
//   };

//   const handleApprove = (admissionId) => {
//     // Logic to approve an admission
//   };

//   const handleReject = (admissionId) => {
//     // Logic to reject an admission
//   };

//   return (
//     <div className="p-4">
//       <header className="mb-4">
//         <h1 className="h3">Admission Management</h1>
//         <Button variant="primary" onClick={() => handleShow()}>
//           Add Admission
//         </Button>
//       </header>

//       {/* Table for displaying admissions */}
//       <Table striped bordered hover responsive>
//         <thead>
//           <tr>
//             <th>Name</th>
//             <th>Email</th>
//             <th>Course Applied</th>
//             <th>Application Date</th>
//             <th>Status</th>
//             <th>Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {admissions.map((admission) => (
//             <tr key={admission.id}>
//               <td>{admission.name}</td>
//               <td>{admission.email}</td>
//               <td>{admission.course}</td>
//               <td>{admission.applicationDate}</td>
//               <td>{admission.status}</td>
//               <td>
//                 <Button
//                   variant="success"
//                   onClick={() => handleApprove(admission.id)}
//                   disabled={admission.status === "approved"}
//                 >
//                   Approve
//                 </Button>{" "}
//                 <Button
//                   variant="danger"
//                   onClick={() => handleReject(admission.id)}
//                   disabled={admission.status === "rejected"}
//                 >
//                   Reject
//                 </Button>
//                 <Button variant="info" onClick={() => handleShow(admission)}>
//                   Edit
//                 </Button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </Table>

//       {/* Modal for adding/editing admissions */}
//       <Modal show={showModal} onHide={handleClose}>
//         <Modal.Header closeButton>
//           <Modal.Title>
//             {editMode ? "Edit Admission" : "Add Admission"}
//           </Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           <Form>
//             <Form.Group controlId="formAdmissionName">
//               <Form.Label>Applicant Name</Form.Label>
//               <Form.Control
//                 type="text"
//                 placeholder="Enter applicant name"
//                 value={currentAdmission.name}
//                 onChange={(e) =>
//                   setCurrentAdmission({
//                     ...currentAdmission,
//                     name: e.target.value,
//                   })
//                 }
//               />
//             </Form.Group>
//             <Form.Group controlId="formAdmissionEmail">
//               <Form.Label>Email</Form.Label>
//               <Form.Control
//                 type="email"
//                 placeholder="Enter applicant email"
//                 value={currentAdmission.email}
//                 onChange={(e) =>
//                   setCurrentAdmission({
//                     ...currentAdmission,
//                     email: e.target.value,
//                   })
//                 }
//               />
//             </Form.Group>
//             <Form.Group controlId="formAdmissionCourse">
//               <Form.Label>Course Applied</Form.Label>
//               <Form.Control
//                 type="text"
//                 placeholder="Enter course"
//                 value={currentAdmission.course}
//                 onChange={(e) =>
//                   setCurrentAdmission({
//                     ...currentAdmission,
//                     course: e.target.value,
//                   })
//                 }
//               />
//             </Form.Group>
//             <Form.Group controlId="formAdmissionStatus">
//               <Form.Label>Status</Form.Label>
//               <Form.Control
//                 as="select"
//                 value={currentAdmission.status}
//                 onChange={(e) =>
//                   setCurrentAdmission({
//                     ...currentAdmission,
//                     status: e.target.value,
//                   })
//                 }
//               >
//                 <option value="pending">Pending</option>
//                 <option value="approved">Approved</option>
//                 <option value="rejected">Rejected</option>
//               </Form.Control>
//             </Form.Group>
//           </Form>
//         </Modal.Body>
//         <Modal.Footer>
//           <Button variant="secondary" onClick={handleClose}>
//             Close
//           </Button>
//           <Button variant="primary" onClick={handleSave}>
//             {editMode ? "Update Admission" : "Add Admission"}
//           </Button>
//         </Modal.Footer>
//       </Modal>
//     </div>
//   );
// }

// export default AdmissionManagement;

import React, { useState } from "react";
import { Table, Button, Modal, Form } from "react-bootstrap";

function AdmissionManagement() {
  const [admissions, setAdmissions] = useState([]); // Replace with actual admission data fetching
  const [showModal, setShowModal] = useState(false);
  const [currentAdmission, setCurrentAdmission] = useState({
    studentName: "",
    admissionDate: "",
    status: "pending",
  });

  const handleShow = (admission = null) => {
    if (admission) {
      setCurrentAdmission(admission);
    } else {
      setCurrentAdmission({
        studentName: "",
        admissionDate: "",
        status: "pending",
      });
    }
    setShowModal(true);
  };

  const handleClose = () => setShowModal(false);

  const handleSave = () => {
    const updatedAdmissions = currentAdmission.id
      ? admissions.map((adm) =>
          adm.id === currentAdmission.id ? currentAdmission : adm
        )
      : [...admissions, { ...currentAdmission, id: Date.now() }];

    setAdmissions(updatedAdmissions);
    handleClose();
  };

  return (
    <div className="p-4">
      <header className="mb-4">
        <h1 className="h3">Admission Management</h1>
        <Button variant="primary" onClick={() => handleShow()}>
          Add Admission
        </Button>
      </header>

      {/* Admissions Table */}
      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>Student Name</th>
            <th>Admission Date</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {admissions.map((admission) => (
            <tr key={admission.id}>
              <td>{admission.studentName}</td>
              <td>{admission.admissionDate}</td>
              <td>{admission.status}</td>
              <td>
                <Button variant="info" onClick={() => handleShow(admission)}>
                  Edit
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      {/* Modal for Admission Details */}
      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Admission Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formAdmissionStudentName">
              <Form.Label>Student Name</Form.Label>
              <Form.Control
                type="text"
                value={currentAdmission.studentName}
                onChange={(e) =>
                  setCurrentAdmission({
                    ...currentAdmission,
                    studentName: e.target.value,
                  })
                }
              />
            </Form.Group>

            <Form.Group controlId="formAdmissionDate">
              <Form.Label>Admission Date</Form.Label>
              <Form.Control
                type="date"
                value={currentAdmission.admissionDate}
                onChange={(e) =>
                  setCurrentAdmission({
                    ...currentAdmission,
                    admissionDate: e.target.value,
                  })
                }
              />
            </Form.Group>

            <Form.Group controlId="formAdmissionStatus">
              <Form.Label>Status</Form.Label>
              <Form.Control
                as="select"
                value={currentAdmission.status}
                onChange={(e) =>
                  setCurrentAdmission({
                    ...currentAdmission,
                    status: e.target.value,
                  })
                }
              >
                <option value="pending">Pending</option>
                <option value="approved">Approved</option>
                <option value="rejected">Rejected</option>
              </Form.Control>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSave}>
            Save Admission
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default AdmissionManagement;
