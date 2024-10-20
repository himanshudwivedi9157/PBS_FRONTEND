import React, { useState } from "react";
import { Table, Button, Modal, Form } from "react-bootstrap";

function TCManagement() {
  const [tcRecords, setTcRecords] = useState([]); // Replace with actual TC data fetching
  const [showModal, setShowModal] = useState(false);
  const [currentTcRecord, setCurrentTcRecord] = useState({
    studentName: "",
    tcDate: "",
    status: "issued",
  });

  const handleShow = (tcRecord = null) => {
    if (tcRecord) {
      setCurrentTcRecord(tcRecord);
    } else {
      setCurrentTcRecord({
        studentName: "",
        tcDate: "",
        status: "issued",
      });
    }
    setShowModal(true);
  };

  const handleClose = () => setShowModal(false);

  const handleSave = () => {
    const updatedTcRecords = currentTcRecord.id
      ? tcRecords.map((tc) =>
          tc.id === currentTcRecord.id ? currentTcRecord : tc
        )
      : [...tcRecords, { ...currentTcRecord, id: Date.now() }];

    setTcRecords(updatedTcRecords);
    handleClose();
  };

  return (
    <div className="p-4">
      <header className="mb-4">
        <h1 className="h3">TC Management</h1>
        <Button variant="primary" onClick={() => handleShow()}>
          Add TC Record
        </Button>
      </header>

      {/* TC Records Table */}
      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>Student Name</th>
            <th>TC Date</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {tcRecords.map((tcRecord) => (
            <tr key={tcRecord.id}>
              <td>{tcRecord.studentName}</td>
              <td>{tcRecord.tcDate}</td>
              <td>{tcRecord.status}</td>
              <td>
                <Button variant="info" onClick={() => handleShow(tcRecord)}>
                  Edit
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      {/* Modal for TC Details */}
      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>TC Record Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formTCStudentName">
              <Form.Label>Student Name</Form.Label>
              <Form.Control
                type="text"
                value={currentTcRecord.studentName}
                onChange={(e) =>
                  setCurrentTcRecord({
                    ...currentTcRecord,
                    studentName: e.target.value,
                  })
                }
              />
            </Form.Group>

            <Form.Group controlId="formTCDate">
              <Form.Label>TC Date</Form.Label>
              <Form.Control
                type="date"
                value={currentTcRecord.tcDate}
                onChange={(e) =>
                  setCurrentTcRecord({
                    ...currentTcRecord,
                    tcDate: e.target.value,
                  })
                }
              />
            </Form.Group>

            <Form.Group controlId="formTCStatus">
              <Form.Label>Status</Form.Label>
              <Form.Control
                as="select"
                value={currentTcRecord.status}
                onChange={(e) =>
                  setCurrentTcRecord({
                    ...currentTcRecord,
                    status: e.target.value,
                  })
                }
              >
                <option value="issued">Issued</option>
                <option value="pending">Pending</option>
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
            Save TC Record
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default TCManagement;
