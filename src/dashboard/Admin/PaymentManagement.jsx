import React, { useState } from "react";
import { Table, Button, Modal, Form } from "react-bootstrap";

function PaymentManagement() {
  const [payments, setPayments] = useState([]); // Replace with actual payment data fetching
  const [showModal, setShowModal] = useState(false);
  const [currentPayment, setCurrentPayment] = useState({
    userName: "",
    paymentDate: "",
    amount: 0,
    method: "Credit Card",
    status: "unpaid",
  });

  const handleShow = (payment = null) => {
    if (payment) {
      setCurrentPayment(payment);
    } else {
      setCurrentPayment({
        userName: "",
        paymentDate: "",
        amount: 0,
        method: "Credit Card",
        status: "unpaid",
      });
    }
    setShowModal(true);
  };

  const handleClose = () => setShowModal(false);

  const handleSave = () => {
    // Logic to save payment (add or update)
    handleClose();
  };

  const handleMarkAsPaid = (paymentId) => {
    // Logic to mark a payment as paid
  };

  const handleMarkAsUnpaid = (paymentId) => {
    // Logic to mark a payment as unpaid
  };

  return (
    <div className="p-4">
      <header className="mb-4">
        <h1 className="h3">Payment Management</h1>
        <Button variant="primary" onClick={() => handleShow()}>
          Add Payment
        </Button>
      </header>

      {/* Payments Table */}
      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>User Name</th>
            <th>Payment Date</th>
            <th>Amount</th>
            <th>Payment Method</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {payments.map((payment) => (
            <tr key={payment.id}>
              <td>{payment.userName}</td>
              <td>{payment.paymentDate}</td>
              <td>${payment.amount}</td>
              <td>{payment.method}</td>
              <td>{payment.status}</td>
              <td>
                <Button
                  variant="success"
                  onClick={() => handleMarkAsPaid(payment.id)}
                  disabled={payment.status === "paid"}
                >
                  Mark as Paid
                </Button>{" "}
                <Button
                  variant="warning"
                  onClick={() => handleMarkAsUnpaid(payment.id)}
                  disabled={payment.status === "unpaid"}
                >
                  Mark as Unpaid
                </Button>{" "}
                <Button variant="info" onClick={() => handleShow(payment)}>
                  View/Edit
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      {/* Modal for Payment Details */}
      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Payment Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formPaymentUserName">
              <Form.Label>User Name</Form.Label>
              <Form.Control
                type="text"
                value={currentPayment.userName}
                onChange={(e) =>
                  setCurrentPayment({
                    ...currentPayment,
                    userName: e.target.value,
                  })
                }
              />
            </Form.Group>

            <Form.Group controlId="formPaymentDate">
              <Form.Label>Payment Date</Form.Label>
              <Form.Control
                type="date"
                value={currentPayment.paymentDate}
                onChange={(e) =>
                  setCurrentPayment({
                    ...currentPayment,
                    paymentDate: e.target.value,
                  })
                }
              />
            </Form.Group>

            <Form.Group controlId="formPaymentAmount">
              <Form.Label>Amount</Form.Label>
              <Form.Control
                type="number"
                value={currentPayment.amount}
                onChange={(e) =>
                  setCurrentPayment({
                    ...currentPayment,
                    amount: e.target.value,
                  })
                }
              />
            </Form.Group>

            <Form.Group controlId="formPaymentMethod">
              <Form.Label>Payment Method</Form.Label>
              <Form.Control
                as="select"
                value={currentPayment.method}
                onChange={(e) =>
                  setCurrentPayment({
                    ...currentPayment,
                    method: e.target.value,
                  })
                }
              >
                <option value="Credit Card">Credit Card</option>
                <option value="Bank Transfer">Bank Transfer</option>
                <option value="Paypal">Paypal</option>
              </Form.Control>
            </Form.Group>

            <Form.Group controlId="formPaymentStatus">
              <Form.Label>Status</Form.Label>
              <Form.Control
                as="select"
                value={currentPayment.status}
                onChange={(e) =>
                  setCurrentPayment({
                    ...currentPayment,
                    status: e.target.value,
                  })
                }
              >
                <option value="paid">Paid</option>
                <option value="unpaid">Unpaid</option>
                <option value="failed">Failed</option>
              </Form.Control>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSave}>
            Save Payment
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default PaymentManagement;
