import React, { useState } from "react";
import { Table, Button, Modal, Form } from "react-bootstrap";

function ExaminationManagement() {
  const [exams, setExams] = useState([]); // Replace with actual exam data fetching
  const [showModal, setShowModal] = useState(false);
  const [currentExam, setCurrentExam] = useState({
    subject: "",
    examDate: "",
    status: "scheduled",
  });

  const handleShow = (exam = null) => {
    if (exam) {
      setCurrentExam(exam);
    } else {
      setCurrentExam({
        subject: "",
        examDate: "",
        status: "scheduled",
      });
    }
    setShowModal(true);
  };

  const handleClose = () => setShowModal(false);

  const handleSave = () => {
    const updatedExams = currentExam.id
      ? exams.map((exam) => (exam.id === currentExam.id ? currentExam : exam))
      : [...exams, { ...currentExam, id: Date.now() }];

    setExams(updatedExams);
    handleClose();
  };

  return (
    <div className="p-4">
      <header className="mb-4">
        <h1 className="h3">Examination Management</h1>
        <Button variant="primary" onClick={() => handleShow()}>
          Add Exam
        </Button>
      </header>

      {/* Exams Table */}
      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>Subject</th>
            <th>Exam Date</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {exams.map((exam) => (
            <tr key={exam.id}>
              <td>{exam.subject}</td>
              <td>{exam.examDate}</td>
              <td>{exam.status}</td>
              <td>
                <Button variant="info" onClick={() => handleShow(exam)}>
                  Edit
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      {/* Modal for Exam Details */}
      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Exam Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formExamSubject">
              <Form.Label>Subject</Form.Label>
              <Form.Control
                type="text"
                value={currentExam.subject}
                onChange={(e) =>
                  setCurrentExam({
                    ...currentExam,
                    subject: e.target.value,
                  })
                }
              />
            </Form.Group>

            <Form.Group controlId="formExamDate">
              <Form.Label>Exam Date</Form.Label>
              <Form.Control
                type="date"
                value={currentExam.examDate}
                onChange={(e) =>
                  setCurrentExam({
                    ...currentExam,
                    examDate: e.target.value,
                  })
                }
              />
            </Form.Group>

            <Form.Group controlId="formExamStatus">
              <Form.Label>Status</Form.Label>
              <Form.Control
                as="select"
                value={currentExam.status}
                onChange={(e) =>
                  setCurrentExam({
                    ...currentExam,
                    status: e.target.value,
                  })
                }
              >
                <option value="scheduled">Scheduled</option>
                <option value="completed">Completed</option>
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
            Save Exam
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default ExaminationManagement;
