import React, { useState } from "react";
import { Button, Modal, Table, Form, Alert } from "react-bootstrap";

function UserManagement() {
  const [users, setUsers] = useState([]); // Replace with actual data fetching
  const [showModal, setShowModal] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [currentUser, setCurrentUser] = useState({
    name: "",
    email: "",
    role: "",
    status: "",
  });
  const [errorMessage, setErrorMessage] = useState("");

  const handleShow = (user = null) => {
    if (user) {
      setEditMode(true);
      setCurrentUser(user);
    } else {
      setEditMode(false);
      setCurrentUser({ name: "", email: "", role: "", status: "" });
    }
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
    setErrorMessage("");
  };

  const handleSave = () => {
    // Logic to save user (add or edit)
    if (
      !currentUser.name ||
      !currentUser.email ||
      !currentUser.role ||
      !currentUser.status
    ) {
      setErrorMessage("All fields are required.");
      return;
    }

    // Update users state here (either add or edit)
    // setUsers([...users, currentUser]); // Example for adding
    handleClose();
  };

  const handleDelete = (userId) => {
    // Logic to delete user
  };

  return (
    <div className="p-4">
      <header className="mb-4">
        <h1 className="h3">User Management</h1>
        <Button variant="primary" onClick={() => handleShow()}>
          Add User
        </Button>
      </header>

      {errorMessage && <Alert variant="danger">{errorMessage}</Alert>}

      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
            <th>Registration Date</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.role}</td>
              <td>{user.registrationDate}</td>
              <td>{user.status}</td>
              <td>
                <Button
                  variant="info"
                  onClick={() => handleShow(user)}
                  className="me-2"
                >
                  Edit
                </Button>
                <Button variant="danger" onClick={() => handleDelete(user.id)}>
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      {/* Modal for adding/editing users */}
      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{editMode ? "Edit User" : "Add User"}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formUserName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter user name"
                value={currentUser.name}
                onChange={(e) =>
                  setCurrentUser({ ...currentUser, name: e.target.value })
                }
                required
              />
            </Form.Group>
            <Form.Group controlId="formUserEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter user email"
                value={currentUser.email}
                onChange={(e) =>
                  setCurrentUser({ ...currentUser, email: e.target.value })
                }
                required
              />
            </Form.Group>
            <Form.Group controlId="formUserRole">
              <Form.Label>Role</Form.Label>
              <Form.Control
                as="select"
                value={currentUser.role}
                onChange={(e) =>
                  setCurrentUser({ ...currentUser, role: e.target.value })
                }
                required
              >
                <option value="">Select role</option>
                <option value="student">Student</option>
                <option value="teacher">Teacher</option>
                <option value="applicant">Applicant</option>
              </Form.Control>
            </Form.Group>
            <Form.Group controlId="formUserStatus">
              <Form.Label>Status</Form.Label>
              <Form.Control
                as="select"
                value={currentUser.status}
                onChange={(e) =>
                  setCurrentUser({ ...currentUser, status: e.target.value })
                }
                required
              >
                <option value="active">Active</option>
                <option value="inactive">Inactive</option>
              </Form.Control>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSave}>
            {editMode ? "Update User" : "Add User"}
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default UserManagement;
