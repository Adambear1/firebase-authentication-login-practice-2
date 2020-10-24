import React, { useState } from "react";
import { Alert, Button, Card } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function Dashboard() {
  const [error, setError] = useState("");
  const { currentUser, logout } = useAuth();
  const { history } = useHistory;
  const handleLogout = async () => {
    setError("");
    try {
      await logout();
      history.push("/");
    } catch (error) {
      setError("Failed to Logout");
    }
  };

  return (
    <>
      <Card.Body>
        <h2 className="text-center mb-4">Profile</h2>
        {error && <Alert variant="danger">{error}</Alert>}
        <strong>Email:</strong>
        <Link to="/update-profile" className="btn btn-primary w-100 mt-3">
          Update Profile
        </Link>
        {currentUser.email}
      </Card.Body>
      <div className="w-100 text-center mt-2">
        <Button variant="link" onClick={handleLogout}>
          {" "}
          Logout
        </Button>
      </div>
    </>
  );
}

export default Dashboard;
