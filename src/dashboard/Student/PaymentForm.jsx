import React, { useState } from "react";

function PaymentDashboard() {
  // Initial state for payment status of each semester
  const [paymentStatus, setPaymentStatus] = useState({
    sem1: false, // False means unpaid, True means paid
    sem2: false,
    sem3: false,
    sem4: false,
    sem5: false,
    sem6: false,
  });

  // Function to handle payment for each semester
  const handlePayment = (semester) => {
    setPaymentStatus((prevStatus) => ({
      ...prevStatus,
      [semester]: true, // Mark this semester as paid
    }));
    alert(`Payment for ${semester.toUpperCase()} successful!`);
  };

  return (
    <div className="container mt-4">
      <h2 className="mb-4">Payment Dashboard</h2>
      <div className="table-responsive">
        <table className="table table-bordered table-hover">
          <thead className="thead-light">
            <tr>
              <th scope="col">Semester</th>
              <th scope="col">Status</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {/* Row for Semester 1 */}
            <tr>
              <td>Semester 1</td>
              <td>{paymentStatus.sem1 ? "Paid" : "Unpaid"}</td>
              <td>
                <button
                  className="btn btn-primary"
                  onClick={() => handlePayment("sem1")}
                  disabled={paymentStatus.sem1}
                >
                  {paymentStatus.sem1 ? "Paid" : "Pay Now"}
                </button>
              </td>
            </tr>

            {/* Row for Semester 2 */}
            <tr>
              <td>Semester 2</td>
              <td>{paymentStatus.sem2 ? "Paid" : "Unpaid"}</td>
              <td>
                <button
                  className="btn btn-primary"
                  onClick={() => handlePayment("sem2")}
                  disabled={paymentStatus.sem2}
                >
                  {paymentStatus.sem2 ? "Paid" : "Pay Now"}
                </button>
              </td>
            </tr>

            {/* Row for Semester 3 */}
            <tr>
              <td>Semester 3</td>
              <td>{paymentStatus.sem3 ? "Paid" : "Unpaid"}</td>
              <td>
                <button
                  className="btn btn-primary"
                  onClick={() => handlePayment("sem3")}
                  disabled={paymentStatus.sem3}
                >
                  {paymentStatus.sem3 ? "Paid" : "Pay Now"}
                </button>
              </td>
            </tr>

            {/* Row for Semester 4 */}
            <tr>
              <td>Semester 4</td>
              <td>{paymentStatus.sem4 ? "Paid" : "Unpaid"}</td>
              <td>
                <button
                  className="btn btn-primary"
                  onClick={() => handlePayment("sem4")}
                  disabled={paymentStatus.sem4}
                >
                  {paymentStatus.sem4 ? "Paid" : "Pay Now"}
                </button>
              </td>
            </tr>

            {/* Row for Semester 5 */}
            <tr>
              <td>Semester 5</td>
              <td>{paymentStatus.sem5 ? "Paid" : "Unpaid"}</td>
              <td>
                <button
                  className="btn btn-primary"
                  onClick={() => handlePayment("sem5")}
                  disabled={paymentStatus.sem5}
                >
                  {paymentStatus.sem5 ? "Paid" : "Pay Now"}
                </button>
              </td>
            </tr>

            {/* Row for Semester 6 */}
            <tr>
              <td>Semester 6</td>
              <td>{paymentStatus.sem6 ? "Paid" : "Unpaid"}</td>
              <td>
                <button
                  className="btn btn-primary"
                  onClick={() => handlePayment("sem6")}
                  disabled={paymentStatus.sem6}
                >
                  {paymentStatus.sem6 ? "Paid" : "Pay Now"}
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default PaymentDashboard;
