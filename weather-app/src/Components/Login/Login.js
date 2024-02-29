import axios from "axios";
import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Card from "react-bootstrap/Card";
import "../../Style/Login.css";
import Navbar from "../Navbar";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  async function login(event) {
    event.preventDefault();

    await axios
      .post(
        "http://localhost:7002/login",
        {
          email: email,
          password: password,
        }
      )

      .then((result) => {
        toast.success("success");
        localStorage.setItem("token", result.data.token);
        localStorage.setItem("email", result.data.email);
        console.log(localStorage);
        navigate("/weather");
      })
      .catch((error) => {
        if (email === "" && password === "") {
          alert("enter email and password");
        } else if (email === "") {
          alert("enter email");
        } else if (password === "") {
          alert("enter password");
        } else {
          alert("email and password is incorrect");
        }
      });
  }

  return (
    <div>
      <Navbar />
      <div className="login-container">
        <div className="container d-flex justify-content-center align-items-center">
          <Card
            style={{
              width: "30rem",
              marginTop: "100px",
              backgroundColor: "rgba(0, 0, 0, 0.5)",
              color: "white",
            }}
          >
            <Card.Body className="login-card">
              <Form className="login" onSubmit={login}>
                <div className="logo"></div>
                <h2 style={{ justifyContent: "center", color: "white" }}>
                  Login WeatherApp
                </h2>
                <Form.Group className="mb-3" controlId="Email">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter email"
                    value={email}
                    onChange={(event) => {
                      setEmail(event.target.value);
                    }}
                    style={{ backgroundColor: "transparent", color: "white" }}
                    required
                  ></Form.Control>
                </Form.Group>
                <Form.Group className="mb-3" controlId="Password">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(event) => {
                      setPassword(event.target.value);
                    }}
                    style={{ backgroundColor: "transparent", color: "white" }}
                    required
                  ></Form.Control>
                </Form.Group>
                <div className="button-group d-flex justify-content-center">
                  <Button type="Submit" variant="success">
                    Login
                  </Button>
                </div>
              </Form>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default Login;
