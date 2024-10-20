import React, { useState } from "react";
import { Table, Button, Modal, Form } from "react-bootstrap";

function CLCManagement() {
  const [clcRecords, setClcRecords] = useState([]); // Replace with actual CLC data fetching
  const [showModal, setShowModal] = useState(false);
  const [currentClcRecord, setCurrentClcRecord] = useState({
    studentName: "",
    clcDate: "",
    status: "issued",
  });

  const handleShow = (clcRecord = null) => {
    if (clcRecord) {
      setCurrentClcRecord(clcRecord);
    } else {
      setCurrentClcRecord({
        studentName: "",
        clcDate: "",
        status: "issued",
      });
    }
    setShowModal(true);
  };

  const handleClose = () => setShowModal(false);

  const handleSave = () => {
    const updatedClcRecords = currentClcRecord.id
      ? clcRecords.map((clc) =>
          clc.id === currentClcRecord.id ? currentClcRecord : clc
        )
      : [...clcRecords, { ...currentClcRecord, id: Date.now() }];

    setClcRecords(updatedClcRecords);
    handleClose();
  };

  return (
    <div className="p-4">
      <header className="mb-4">
        <h1 className="h3">CLC Management</h1>
        <Button variant="primary" onClick={() => handleShow()}>
          Add CLC Record
        </Button>
      </header>

      {/* CLC Records Table */}
      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>Student Name</th>
            <th>CLC Date</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {clcRecords.map((clcRecord) => (
            <tr key={clcRecord.id}>
              <td>{clcRecord.studentName}</td>
              <td>{clcRecord.clcDate}</td>
              <td>{clcRecord.status}</td>
              <td>
                <Button variant="info" onClick={() => handleShow(clcRecord)}>
                  Edit
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      {/* Modal for CLC Details */}
      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>CLC Record Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formCLCStudentName">
              <Form.Label>Student Name</Form.Label>
              <Form.Control
                type="text"
                value={currentClcRecord.studentName}
                onChange={(e) =>
                  setCurrentClcRecord({
                    ...currentClcRecord,
                    studentName: e.target.value,
                  })
                }
              />
            </Form.Group>

            <Form.Group controlId="formCLCDate">
              <Form.Label>CLC Date</Form.Label>
              <Form.Control
                type="date"
                value={currentClcRecord.clcDate}
                onChange={(e) =>
                  setCurrentClcRecord({
                    ...currentClcRecord,
                    clcDate: e.target.value,
                  })
                }
              />
            </Form.Group>

            <Form.Group controlId="formCLCStatus">
              <Form.Label>Status</Form.Label>
              <Form.Control
                as="select"
                value={currentClcRecord.status}
                onChange={(e) =>
                  setCurrentClcRecord({
                    ...currentClcRecord,
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
            Save CLC Record
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default CLCManagement;
