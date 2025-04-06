import React, { useState, useEffect } from "react";

const TopNavbar = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  // Track scroll position and current section
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setScrolled(scrollPosition > 50);
      
      // Determine which section is currently in view
      const sections = ["home", "about", "projects"];
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          // If the section is in the viewport
          if (rect.top <= 150 && rect.bottom >= 150) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Set navbar styles based on current section and scroll position
  const navbarClass = activeSection === "home" && !scrolled
    ? "navbar navbar-expand-lg fixed-top py-3 navbar-transparent"
    : "navbar navbar-expand-lg fixed-top bg-white py-3 shadow-sm";

  // Set text color based on section
  const textClass = activeSection === "home" && !scrolled
    ? "text-white"
    : "text-dark";

  return (
    <>
      <style>
        {`
          .navbar {
            transition: all 0.3s ease-in-out;
          }

          .navbar-transparent {
            background-color: transparent !important;
            box-shadow: none !important;
          }

          .navbar-brand {
            transition: color 0.3s ease;
            cursor: pointer;
            font-weight: bold;
          }

          .navbar-toggler {
            cursor: pointer;
          }

          .nav-link {
            font-weight: 500;
            text-decoration: none;
            transition: color 0.3s ease;
            cursor: pointer;
          }

          .navbar-transparent .nav-link:hover {
            color: rgba(255, 255, 255, 0.8) !important;
          }

          .navbar:not(.navbar-transparent) .nav-link:hover {
            color: #007bff !important;
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
          
          .btn-contact-transparent {
            background-color: transparent;
            color: #fff;
            border: 2px solid #fff;
          }
          
          .btn-contact-transparent:hover {
            background-color: rgba(255, 255, 255, 0.2);
          }
        `}
      </style>
      <nav className={navbarClass}>
        <div className="container d-flex justify-content-between align-items-center">
          <a className={`navbar-brand fs-4 ${textClass}`} href="#home">
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
                <a className={`nav-link ${textClass}`} href="#home">
                  Home
                </a>
              </li>
              <li className="nav-item px-3">
                <a className={`nav-link ${textClass}`} href="#about">
                  About Me
                </a>
              </li>
              <li className="nav-item px-3">
                <a className={`nav-link ${textClass}`} href="#organizations">
                  Experience
                </a>
              </li>
              <li className="nav-item px-3">
                <a className={`nav-link ${textClass}`} href="#projects">
                  Projects
                </a>
              </li>
            </ul>
          </div>
          <a 
            className={activeSection === "home" && !scrolled ? "btn-contact btn-contact-transparent" : "btn-contact"} 
            href="mailto:kevinkevin.kk92@gmail.com?subject=Hello%20Kevin&body=Hi%20Kevin,%20I%20would%20like%20to%20contact%20you%20regarding..."
          >
            Contact Me
          </a>
        </div>
      </nav>
    </>
  );
};

export default TopNavbar;