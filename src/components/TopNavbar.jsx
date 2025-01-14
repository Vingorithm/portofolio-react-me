import React from "react";

const TopNavbar = () => {
  return (
    <>
      <style>
        {`
          .navbar {
            transition: all 0.3s ease-in-out;
          }

          .navbar-brand {
            color: #000;
            text-decoration: none;
            transition: color 0.3s ease;
            cursor: pointer;
          }

          .navbar-brand:hover {
            color: #007bff;
          }

          .navbar-toggler {
            cursor: pointer;
          }

          .nav-link {
            color: #555;
            font-weight: 500;
            text-decoration: none;
            transition: color 0.3s ease;
            cursor: pointer;
          }

          .nav-link:hover {
            color: #007bff;
          }

          .btn-contact {
            background-color: #007bff;
            color: #fff;
            border: none;
            border-radius: 5px;
            padding: 8px 16px;
            text-decoration: none;
            transition: all 0.3s ease;
            cursor: pointer;
          }

          .btn-contact:hover {
            background-color: #0056b3;
          }

          .btn-contact:active {
            background-color: #004085;
            transform: scale(0.98);
          }
        `}
      </style>
      <nav className="navbar navbar-expand-lg fixed-top bg-white py-3 shadow-sm">
        <div className="container d-flex justify-content-between align-items-center">
          <a className="navbar-brand fs-4" href="#home">
            <strong>Kevin Philips Tanamas</strong>
          </a>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav mx-auto">
              <li className="nav-item px-3">
                <a className="nav-link" href="#home">
                  Home
                </a>
              </li>
              <li className="nav-item px-3">
                <a className="nav-link" href="#about">
                  About Me
                </a>
              </li>
              <li className="nav-item px-3">
                <a className="nav-link" href="#projects">
                  Projects
                </a>
              </li>
            </ul>
          </div>
          <a 
            className="btn-contact" 
            href="mailto:your_email@example.com?subject=Hello%20Kevin&body=Hi%20Kevin,%20I%20would%20like%20to%20contact%20you%20regarding..."
          >
            Contact Me
          </a>
        </div>
      </nav>
    </>
  );
};

export default TopNavbar;
