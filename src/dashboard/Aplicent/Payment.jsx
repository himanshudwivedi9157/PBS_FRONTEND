import React, { useState } from "react";
import { Form, Button, Alert } from "react-bootstrap";

const Payment = ({ applicantId, updateApplicationStatus }) => {
  const [showForm, setShowForm] = useState(false); // Initially hide the form
  const [paymentSuccess, setPaymentSuccess] = useState(false);
  const [paymentDetails, setPaymentDetails] = useState({
    amount: "",
    cardNumber: "",
    expiryDate: "",
    cvv: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPaymentDetails({ ...paymentDetails, [name]: value });
  };

  const handlePaymentSubmit = (e) => {
    e.preventDefault();
    // Here you can add your payment processing logic

    // Simulate a successful payment
    setPaymentSuccess(true);
    setShowForm(false);

    // Call the function to update the application status
    updateApplicationStatus(applicantId, "Admission Complete");
  };

  const handleToggleForm = () => {
    setShowForm(!showForm);
    setPaymentSuccess(false); // Reset success status when toggling back to the form
  };

  return (
    <div className="p-4">
      <h1 className="h3">Payment for Applicant ID: {applicantId}</h1>
      <Button variant="primary" onClick={handleToggleForm} className="mb-3">
        {showForm ? "Cancel Payment" : "Make Payment"}
      </Button>
      {paymentSuccess ? (
        <Alert variant="success">
          Payment Successful! Your admission is complete.
        </Alert>
      ) : (
        showForm && (
          <Form className="mt-4" onSubmit={handlePaymentSubmit}>
            <Form.Group controlId="formAmount">
              <Form.Label>Amount</Form.Label>
              <Form.Control
                type="text"
                name="amount"
                value={paymentDetails.amount}
                onChange={handleInputChange}
                required
              />
            </Form.Group>
            <Form.Group controlId="formCardNumber">
              <Form.Label>Card Number</Form.Label>
              <Form.Control
                type="text"
                name="cardNumber"
                value={paymentDetails.cardNumber}
                onChange={handleInputChange}
                required
              />
            </Form.Group>
            <Form.Group controlId="formExpiryDate">
              <Form.Label>Expiry Date</Form.Label>
              <Form.Control
                type="text"
                name="expiryDate"
                value={paymentDetails.expiryDate}
                onChange={handleInputChange}
                placeholder="MM/YY"
                required
              />
            </Form.Group>
            <Form.Group controlId="formCvv">
              <Form.Label>CVV</Form.Label>
              <Form.Control
                type="text"
                name="cvv"
                value={paymentDetails.cvv}
                onChange={handleInputChange}
                required
              />
            </Form.Group>
            <Button variant="primary" type="submit" className="mt-3">
              Pay
            </Button>
          </Form>
        )
      )}
    </div>
  );
};

export default Payment;
