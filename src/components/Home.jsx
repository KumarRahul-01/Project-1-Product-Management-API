import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/images/logo.png";
import BackgroundImage from "../assets/images/register.jpg"

const Home = () => {
  return (
    <div>
      <div
        style={{
          backgroundImage: `url(${BackgroundImage})`,
          // backgroundImage:
          //   "url(https://c4.wallpaperflare.com/wallpaper/837/468/965/wavy-dark-shadow-light-wallpaper-preview.jpg)",
          height: "82.9vh",
          backgroundSize: "cover",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <div>
          <img
            className="img-thumbnail mx-auto d-block mb-2"
            src={Logo}
            alt="logo"
            style={{ borderRadius: "50%" }}
          />
          <h1
            className="textCenter"
            style={{
              color: "orange",
              fontSize: "80px",
            }}
          >
            Welcome to WTS-Product Management
          </h1>

          <button className="btn btn-primary" style={{ marginRight: "5px" }}>
            <Link
              to="/signin"
              style={{ textDecoration: "none", color: "white" }}
            >
              Sign In
            </Link>
          </button>
          <button className="btn btn-primary" style={{ marginLeft: "5px" }}>
            <Link
              to="/signup"
              style={{ textDecoration: "none", color: "white" }}
            >
              Sign Up
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
