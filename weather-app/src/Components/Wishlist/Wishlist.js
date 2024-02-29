import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "../Navbar";
import "../../Style/Wishlist.css";

const Wishlist = () => {
  const [wishlistData, setWishlistData] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchWishlistData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:7004/wishlistcity/getWishList/${localStorage.getItem(
            "email"
          )}`,
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );
        setWishlistData(response.data);
      } catch (error) {
        console.error("Error fetching wishlist data:", error);
        toast.error("Error fetching wishlist data");
      } finally {
        setLoading(false);
      }
    };

    fetchWishlistData();
  }, []);

  // const deleteFromWishlist = async (wishlistID) => {
  //   try {
  //     const response = await axios.delete(
  //       `http://13.51.43.97:7004/wishlistcity/deleteWishlist/${wishlistID}`,
  //       {
  //         headers: {
  //           Authorization: `Bearer ${localStorage.getItem("token")}`,
  //         },
  //       }
  //     );

  //     console.log('Delete response:', response); // Log the response for debugging

  //     if (response.status === 200) {
  //       // If deletion is successful, update the wishlistData state
  //       setWishlistData((prevData) => prevData.filter((s) => s.wishlistID !== wishlistID));
  //       toast.success('City successfully deleted from wishlist');
  //     } else {
  //       console.error('Error deleting from Wishlist:', response.data);
  //       toast.error(`Deletion failed: ${response.data.message}`);
  //     }
  //   } catch (error) {
  //     console.error('Error deleting from Wishlist:', error);
  //     toast.error(`Deletion failed: ${error.message}`);
  //   }
  // };

  const deleteFromWishlist = async (response) => {
    console.log("Delete button clicked. WishlistID:", response);
    var wishlistID = response.wishlistid;
    try {
      // console.log('Deletion request payload:', { wishlistID });

      const response = await axios.delete(
        `http://localhost:7004/wishlistcity/deleteWishlist/${wishlistID}`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );

      if (response.status === 200) {
        // If deletion is successful, update the wishlistData state
        setWishlistData((prevData) =>
          prevData.filter((s) => s.wishlistID !== wishlistID)
        );
        toast.success("City successfully deleted from wishlist");
      } else {
        console.error("Error deleting from Wishlist:", response.data);
        toast.error("Deletion failed");
      }
    } catch (error) {
      console.error("Error deleting from Wishlist:", error);
      toast.error("Deletion failed");
    }
  };

  return (
    <div>
      <Navbar />

      <div className="wishlist-container">
        <div className="heading-container">
          <h2>Wishlist </h2>
        </div>
        <div className="Container d-flex justify-content-center align-items-center"></div>
        {loading && <p>Loading...</p>}
        {!loading && wishlistData.length > 0 && (
          <Row className="g-4">
            {wishlistData.map((response, index) => (
              <Col className="col-design" key={index}>
                <Card
                  style={{
                    width: "20rem",
                    marginTop: "100px",
                    backgroundColor: "rgba(0, 0, 0, 0.5)",
                    color: "white",
                  }}
                >
                  <Card.Body>
                    <Card.Title>Cities</Card.Title>
                    <Card.Text>
                      <div>
                        <li>City Name : {response.name}</li>
                        <li> City Id : {response.id}</li>
                        {/* {response.main && ( */}
                        {/* <> */}

                        {/* <li>Temperature:{Math.round(response.temp)}</li>
                        <li>Humidity: {response.humidity}</li> */}
                        {/* </>
                )} */}
                        {/* <li>Humidity :  {Math.round(city.main.humidity)}%</li> */}
                        {/* <li>Coordinate : {city.coord.lon}, {city.coord.lat}</li> */}
                        <li>
                          Visibility : {Math.round(response.visibility)} mi
                        </li>
                        {/* <li>Wind Speed : {Math.round(city.wind.speed)} Km/h , {(city.wind.deg)}°, {Math.round(city.wind.gust)} km/h</li> */}
                        {/* {response.sys && ( */}
                        {/* <> */}
                        {/* <li>Sunrise: {response.sunrise}</li>
                        <li>Sunset: {response.sunset}</li> */}
                        {/* </>
                )} */}
                      </div>
                    </Card.Text>
                    <Button onClick={() => deleteFromWishlist(response)}>
                      Delete
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        )}
        {!loading && wishlistData.length === 0 && (
          <p>No cities in the wishlist.</p>
        )}
        <ToastContainer />
      </div>
    </div>
  );
};

export default Wishlist;
