import React, { useState } from "react";
import { Table, Button, Modal, Form } from "react-bootstrap";

function ReportsAndAnalytics() {
  const [reportData, setReportData] = useState([]); // Replace with actual data fetching
  const [showModal, setShowModal] = useState(false);
  const [currentReport, setCurrentReport] = useState({
    reportTitle: "",
    reportDate: "",
    details: "",
  });

  const handleShow = (report = null) => {
    if (report) {
      setCurrentReport(report);
    } else {
      setCurrentReport({
        reportTitle: "",
        reportDate: "",
        details: "",
      });
    }
    setShowModal(true);
  };

  const handleClose = () => setShowModal(false);

  const handleSave = () => {
    const updatedReports = currentReport.id
      ? reportData.map((report) =>
          report.id === currentReport.id ? currentReport : report
        )
      : [...reportData, { ...currentReport, id: Date.now() }];

    setReportData(updatedReports);
    handleClose();
  };

  return (
    <div className="p-4">
      <header className="mb-4">
        <h1 className="h3">Reports & Analytics</h1>
        <Button variant="primary" onClick={() => handleShow()}>
          Add Report
        </Button>
      </header>

      {/* Reports Table */}
      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>Report Title</th>
            <th>Report Date</th>
            <th>Details</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {reportData.map((report) => (
            <tr key={report.id}>
              <td>{report.reportTitle}</td>
              <td>{report.reportDate}</td>
              <td>{report.details}</td>
              <td>
                <Button variant="info" onClick={() => handleShow(report)}>
                  Edit
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      {/* Modal for Report Details */}
      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Report Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formReportTitle">
              <Form.Label>Report Title</Form.Label>
              <Form.Control
                type="text"
                value={currentReport.reportTitle}
                onChange={(e) =>
                  setCurrentReport({
                    ...currentReport,
                    reportTitle: e.target.value,
                  })
                }
              />
            </Form.Group>

            <Form.Group controlId="formReportDate">
              <Form.Label>Report Date</Form.Label>
              <Form.Control
                type="date"
                value={currentReport.reportDate}
                onChange={(e) =>
                  setCurrentReport({
                    ...currentReport,
                    reportDate: e.target.value,
                  })
                }
              />
            </Form.Group>

            <Form.Group controlId="formReportDetails">
              <Form.Label>Details</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                value={currentReport.details}
                onChange={(e) =>
                  setCurrentReport({
                    ...currentReport,
                    details: e.target.value,
                  })
                }
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSave}>
            Save Report
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default ReportsAndAnalytics;
