import React, { useState } from "react";
import { Table, Button, Alert } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const ApplicationStatus = () => {
  const [applications, setApplications] = useState([
    { id: 1, name: "John Doe", status: "Approved" },
    { id: 2, name: "Jane Smith", status: "Pending" },
    { id: 3, name: "Alice Johnson", status: "Rejected" },
  ]);
  const navigate = useNavigate(); // Using useNavigate for navigation

  const handlePayment = (applicantId) => {
    // You can also fetch the payment details based on the applicantId here
    navigate(`/applicant/payment/${applicantId}`); // Navigate to the payment route with applicant ID
  };

  return (
    <div className="p-4">
      <h1 className="h3 mb-4">Application Statuses</h1>
      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {applications.map((applicant) => (
            <tr key={applicant.id}>
              <td>{applicant.id}</td>
              <td>{applicant.name}</td>
              <td>
                {applicant.status === "Rejected" ? (
                  <Alert variant="danger" className="mb-0">
                    {applicant.status}
                  </Alert>
                ) : (
                  <span>{applicant.status}</span>
                )}
              </td>
              <td>
                {applicant.status === "Approved" && (
                  <Button
                    variant="primary"
                    onClick={() => handlePayment(applicant.id)}
                  >
                    Proceed to Payment
                  </Button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default ApplicationStatus;
