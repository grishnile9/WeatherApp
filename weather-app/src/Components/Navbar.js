import { useEffect, useState } from "react";
import { Islogin } from "../auth/Islogin";
import { Logout } from "../auth/Logout.js";
import { Navigate, useNavigate } from "react-router-dom";
import logo from "./../images/logo.png";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";

const Navbar = () => {
  let navigate = useNavigate();
  const [login, setLogin] = useState(false);
  useEffect(() => {
    setLogin(Islogin);
  }, [login]);
  const navigateHome = () => navigate("/home");
  const navigateLogin = () => navigate("/login");
  const navigateRegister = () => navigate("/register");
  const navigateWeather = () => navigate("/weather");
  const navigateWishlist = () => navigate("/wish");
  const logout = () => {
    Logout(() => {
      setLogin(false);
      navigate("/");
    });
  };

  return (
    <div>
      <nav
        class="navbar navbar-expand-sm py-3 fixed-top"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.5)", color: "white" }}
      >
        <div class="container">
          <Link className="navbar-brand" to="/home">
            <img
              src={logo}
              alt="Weather App Logo"
              height="45"
              className="d-inline-block align-top"
            />
            Weather App
          </Link>
          
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i class="fa fa-bars text-light" aria-hidden="true"></i>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ml-auto float-right text-right">
              {!login && (
                <>
                  <li class="nav-item">
                    <Button
                      type="submit"
                      className="button"
                      variant="Dark"
                      onClick={navigateLogin}
                      style={{ color: "white", margin: "3px" }}
                    >
                      Login
                    </Button>
                  </li>
                  <li class="nav-item">
                    <Button
                      type="submit"
                      className="formlevel button"
                      variant="Dark"
                      onClick={navigateRegister}
                      style={{ color: "white", margin: "3px" }}
                    >
                      Register
                    </Button>
                    
                  </li>

                  <li class="nav-item">
                    <Button
                      type="submit"
                      className="formlevel button"
                      variant="Dark"
                      onClick={navigateHome}
                      style={{ color: "white", margin: "3px" }}
                    >
                      Home
                    </Button>
                    
                  </li>
                </>
              )}
              {login && (
                <>
                  <li class="nav-item">
                    <Button
                      type="submit"
                      className="formlevel button"
                      variant="Dark"
                      onClick={navigateWeather}
                      style={{ color: "white", margin: "3px" }}
                    >
                      Dashboard
                    </Button>
                    
                  </li>
                  <li class="nav-item">
                    <Button
                      type="submit"
                      className="formlevel button"
                      variant="Dark"
                      onClick={navigateWishlist}
                      style={{ color: "white", margin: "3px" }}
                    >
                      Wishlist
                    </Button>
                   
                  </li>
                 
                  <li class="nav-item">
                    <Button
                      type="submit"
                      className="formlevel button"
                      variant="Dark"
                      onClick={logout}
                      style={{ color: "white", margin: "3px" }}
                    >
                      Logout
                    </Button>
                   
                  </li>
                 
                </>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
