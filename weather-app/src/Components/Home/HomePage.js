import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "../../Style/HomePage.css";
import { Container, Row, Col } from "react-bootstrap";
import WeatherIcons from "../../images/WeatherIcons.gif";
import Navbar from "../Navbar";

const Home = () => {
  const handleSearch = () => {
    // Add logic for search here

    alert("Please login to perform this action.");
  };

  return (
    <div>
      <Navbar />
      <div className="home-container">
        <div className="bg">
          <div className="logo">
            <Container>
              <img
                src={WeatherIcons}
                height="50%"
                width="50%"
                style={{ display: "block", margin: "auto" }}
                alt="Weather Icons"
              />
            </Container>
          </div>
          <Container className="mt-5 ml-10 mb-10">
            <Row className="justify-content-center align-items-center">
              <Col sm={5}>
                <Form className="d-flex">
                  <Form.Control
                    type="search"
                    placeholder="Enter the City"
                    className="me-2 rounded-pill"
                    aria-label="Search"
                  />
                  <Button
                    className="rounded-pill"
                    variant="success"
                    onClick={handleSearch}
                  >
                    Search
                  </Button>
                </Form>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </div>
  );
};

export default Home;
