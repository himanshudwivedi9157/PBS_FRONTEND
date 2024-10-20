import React, { useState } from "react";
import { Table, Button, Modal, Form } from "react-bootstrap";

function RegistrationManagement() {
  const [registrations, setRegistrations] = useState([]); // Replace with actual registration data fetching
  const [showModal, setShowModal] = useState(false);
  const [currentRegistration, setCurrentRegistration] = useState({
    studentName: "",
    course: "",
    registrationDate: "",
    status: "pending",
  });

  const handleShow = (registration = null) => {
    if (registration) {
      setCurrentRegistration(registration);
    } else {
      setCurrentRegistration({
        studentName: "",
        course: "",
        registrationDate: "",
        status: "pending",
      });
    }
    setShowModal(true);
  };

  const handleClose = () => setShowModal(false);

  const handleSave = () => {
    // Logic to save registration (add or update)
    const updatedRegistrations = currentRegistration.id
      ? registrations.map((reg) =>
          reg.id === currentRegistration.id ? currentRegistration : reg
        )
      : [...registrations, { ...currentRegistration, id: Date.now() }];

    setRegistrations(updatedRegistrations);
    handleClose();
  };

  const handleStatusChange = (registrationId, newStatus) => {
    setRegistrations(
      registrations.map((reg) =>
        reg.id === registrationId ? { ...reg, status: newStatus } : reg
      )
    );
  };

  return (
    <div className="p-4">
      <header className="mb-4">
        <h1 className="h3">Registration Management</h1>
        <Button variant="primary" onClick={() => handleShow()}>
          Add Registration
        </Button>
      </header>

      {/* Registrations Table */}
      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>Student Name</th>
            <th>Course</th>
            <th>Registration Date</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {registrations.map((registration) => (
            <tr key={registration.id}>
              <td>{registration.studentName}</td>
              <td>{registration.course}</td>
              <td>{registration.registrationDate}</td>
              <td>{registration.status}</td>
              <td>
                <Button variant="info" onClick={() => handleShow(registration)}>
                  Edit
                </Button>{" "}
                <Button
                  variant="success"
                  onClick={() =>
                    handleStatusChange(registration.id, "confirmed")
                  }
                  disabled={registration.status === "confirmed"}
                >
                  Confirm
                </Button>{" "}
                <Button
                  variant="danger"
                  onClick={() =>
                    handleStatusChange(registration.id, "canceled")
                  }
                  disabled={registration.status === "canceled"}
                >
                  Cancel
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      {/* Modal for Registration Details */}
      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Registration Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formRegistrationStudentName">
              <Form.Label>Student Name</Form.Label>
              <Form.Control
                type="text"
                value={currentRegistration.studentName}
                onChange={(e) =>
                  setCurrentRegistration({
                    ...currentRegistration,
                    studentName: e.target.value,
                  })
                }
              />
            </Form.Group>

            <Form.Group controlId="formRegistrationCourse">
              <Form.Label>Course</Form.Label>
              <Form.Control
                type="text"
                value={currentRegistration.course}
                onChange={(e) =>
                  setCurrentRegistration({
                    ...currentRegistration,
                    course: e.target.value,
                  })
                }
              />
            </Form.Group>

            <Form.Group controlId="formRegistrationDate">
              <Form.Label>Registration Date</Form.Label>
              <Form.Control
                type="date"
                value={currentRegistration.registrationDate}
                onChange={(e) =>
                  setCurrentRegistration({
                    ...currentRegistration,
                    registrationDate: e.target.value,
                  })
                }
              />
            </Form.Group>

            <Form.Group controlId="formRegistrationStatus">
              <Form.Label>Status</Form.Label>
              <Form.Control
                as="select"
                value={currentRegistration.status}
                onChange={(e) =>
                  setCurrentRegistration({
                    ...currentRegistration,
                    status: e.target.value,
                  })
                }
              >
                <option value="pending">Pending</option>
                <option value="confirmed">Confirmed</option>
                <option value="canceled">Canceled</option>
              </Form.Control>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSave}>
            Save Registration
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default RegistrationManagement;
