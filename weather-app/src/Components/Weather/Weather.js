import React from "react";
import { useState, useEffect } from "react";
// import axios from 'axios';
// import { Container, Row, Col } from 'react-bootstrap';
import Button from "react-bootstrap/Button";
// import Form from 'react-bootstrap/Form';
import searchWeather from "./fetchWeather";
import Card from "react-bootstrap/Card";
import "../../Style/Weather.css";
import { useNavigate } from "react-router-dom";
import Navbar from "../Navbar";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import { Form } from "react-bootstrap";

function Weather() {
  const [city, setCity] = useState("");
  const [response, setResponse] = useState("");
  const [error, setError] = useState("");
  const [isValid, setIsValid] = useState(true);
  const navigate = useNavigate();

  const handleChange = (event) => {
    console.log("EVENT ", event);
    setCity(event.target.value);
    setIsValid(true);
    setError("");
  };
  useEffect(() => {
    if (!localStorage.getItem("token")) {
      navigate("/login");
    }
  }, [response]);

  const search = (event) => {
    event.preventDefault();
    console.log("inside search");

    searchWeather(city)
      .then((response) => {
        setResponse(response);

        console.log("Data Fetched Successfully !", response);
      })
      .catch((error) => {
        console.log("Error Occured !! ", error);
      });
  };
  const addToWishlist = async (response) => {
    try {
      const emailid = localStorage.getItem("email");
      const apiResponse = await fetch(
        `http://localhost:7004/wishlistcity/addWishList/${emailid}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
          body: JSON.stringify({
            name: response.name,
            id: response.id,
            // temperature: Math.round(response.main.temp),
            // humidity: Math.round(response.main.humidity),
            // coord: {
            //   lon: response.coord.lon,
            //   lat: response.coord.lat,
            // },
            visibility: Math.round(response.visibility),

            // speed: Math.round(response.wind.speed),
            // deg: response.wind.deg,
            // gust: Math.round(response.wind.gust),
            // sys: {
            //   sunrise: response.sys.sunrise,
            //   sunset: response.sys.sunset,
            // },
          }),
        }
      );

      if (apiResponse.ok) {
        toast("Save to Wishlist");
        // const result = await response.json();
      } else {
        toast("city Already exist");
      }
    } catch (error) {
      console.error("Error", error);
    }
  };

  return (
    <>
      <Navbar />
      <div className="city-search">
        <div className="city-bg">
          <div
            className="d-flex flex-column align-items-center text-center"
            style={{ color: "white" }}
          >
            <h2>Search for Cities</h2>
          </div>

          <form
            className="d-flex justify-content-center align-items-center"
            role="search"
            onSubmit={search}
          >
            <input
              className="form-control me-2 search-input"
              type="search"
              placeholder="Search City"
              aria-label="Search"
              onChange={(event) => handleChange(event)}
              value={city}
              style={{ maxWidth: "350px", margin: "100px", marginTop: "10px" }}
            />

            <button
              className="btn btn-outline-success topic-search rounded-pill ml-2"
              style={{ maxWidth: "350px", margin: "100px", marginTop: "10px" }}
              type="submit"
            >
              Search
            </button>
          </form>

          <div className="weather-container">
            {response && (
              <Card
                style={{
                  width: "30rem",
                  justifyContent: "center",
                  backgroundColor: "rgba(0, 0, 0, 0.5)",
                  color: "white",
                }}
              >
                <Card.Body>
                  <Card.Text>
                    <div>
                      <li>City Name : {response.name}</li>
                      <li> City Id : {response.id}</li>
                      <li>Temperature : {Math.round(response.main.temp)}°c</li>
                      <li>Humidity : {Math.round(response.main.humidity)}%</li>
                      <li>
                        Coordinate : {response.coord.lon}, {response.coord.lat}
                      </li>
                      <li>Visibility : {Math.round(response.visibility)} mi</li>
                      <li>
                        Wind Speed : {Math.round(response.wind.speed)} Km/h ,{" "}
                        {response.wind.deg}°, {Math.round(response.wind.gust)}{" "}
                        km/h
                      </li>
                      <li>Sunrise : {response.sys.sunrise}</li>
                      <li>Sunset : {response.sys.sunset}</li>
                    </div>
                  </Card.Text>
                  <Button
                    variant="primary"
                    justifyContent="center"
                    onClick={() => addToWishlist(response)}
                  >
                    Add to wishlist
                  </Button>
                </Card.Body>
              </Card>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
export default Weather;
