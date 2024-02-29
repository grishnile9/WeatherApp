import React from "react";
import axios from "axios";
import { useState } from "react";
import Form from "react-bootstrap/Form";
import { Button } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { useNavigate } from "react-router-dom";
import "../../Style/Register.css";
import Navbar from "../Navbar";

function Register() {
  const [userid, setUserid] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");
  const navigate = useNavigate();

  async function save(event) {
    event.preventDefault();

    await axios
      .post(
        "http://13.51.43.97:8089/WeatherApp/addUser",
        {
          userid: userid,
          name: name,
          password: password,
          email: email,
          city: city,
        }
      )
      .then((response) => {
        console.log(response.data);
        alert("User Register Successfully");
        navigate("../Login/Login.js");
      })
      .catch((error) => {
        console.log(error.Body);
        alert("wrong details");
      });
  }

  return (
    <div>
      <Navbar />
      <div className="register-container">
        <div className="container d-flex justify-content-center align-items-center">
          <Card
            className="register-card-img"
            style={{
              width: "35rem",
              marginTop: "20px",
              backgroundColor: "rgba(0, 0, 0, 0.5)",
              color: "white",
            }}
          >
            <Card.Body className="register-card">
              <Form className="register" onSubmit={save}>
                <div className="logo"></div>
                <h2 style={{ justifyContent: "center", color: "white" }}>
                  Register WeatherApp
                </h2>
                <Form.Group className="mb-2" controlId="Userid">
                  <Form.Label>userid</Form.Label>
                  <Form.Control
                    type="number"
                    placeholder="Enter userid"
                    value={userid}
                    onChange={(event) => {
                      setUserid(event.target.value);
                    }}
                    style={{ backgroundColor: "transparent", color: "white" }}
                    required
                  ></Form.Control>
                </Form.Group>

                <Form.Group className="mb-2" controlId="Name">
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter name"
                    value={name}
                    onChange={(event) => {
                      setName(event.target.value);
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

                <Form.Group className="mb-3" controlId="Email">
                  <Form.Label>Email</Form.Label>
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

                <Form.Group className="mb-3" controlId="City">
                  <Form.Label>City</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter city"
                    value={city}
                    onChange={(event) => {
                      setCity(event.target.value);
                    }}
                    style={{ backgroundColor: "transparent", color: "white" }}
                    required
                  ></Form.Control>
                </Form.Group>

                <div className="button-group d-flex justify-content-center">
                  <Button type="Submit" variant="success">
                    Register
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
export default Register;
