import React, { useState, useEffect } from "react";
import { Linkedin, Github, Instagram, Mail } from 'lucide-react';

const BottomNavbar = () => {
  const [activeLink, setActiveLink] = useState(null);
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

  const socialLinks = [
    {
      name: "LinkedIn",
      icon: <Linkedin size={24} />,
      url: "https://www.linkedin.com/in/kevinphilipstanamas",
      color: "#0077B5"
    },
    {
      name: "GitHub",
      icon: <Github size={24} />,
      url: "https://github.com/Vingorithm",
      color: "#333"
    },
    {
      name: "Instagram",
      icon: <Instagram size={24} />,
      url: "https://www.instagram.com/kevintannms",
      color: "#E4405F"
    },
    {
      name: "Email",
      icon: <Mail size={24} />,
      url: "mailto:kevinkevin.kk92@gmail.com",
      color: "#EA4335"
    }
  ];

  // Set footer styles based on current section
  const navClass = activeSection === "home" && !scrolled
    ? "fixed-bottom-navbar transparent"
    : "fixed-bottom-navbar";

  // Set text color based on section
  const textClass = activeSection === "home" && !scrolled
    ? "#ffffff"
    : "#6c757d";

  return (
    <nav className={navClass}>
      <div className={`bottom-nav-wrapper ${activeSection === "home" && !scrolled ? "transparent-wrapper" : ""}`}>
        <div className="nav-links-container">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              className="social-link"
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={() => setActiveLink(index)}
              onMouseLeave={() => setActiveLink(null)}
              style={{
                color: activeLink === index ? link.color : textClass
              }}
            >
              <div className="icon-container">
                {link.icon}
                <div className="tooltip" style={{ backgroundColor: link.color }}>
                  {link.name}
                </div>
              </div>
              <span className="label">{link.name}</span>
            </a>
          ))}
        </div>
      </div>

      <style jsx>{`
        .fixed-bottom-navbar {
          position: fixed;
          bottom: 0;
          left: 0;
          right: 0;
          z-index: 1030;
          width: 100%;
          transition: all 0.3s ease-in-out;
        }

        .bottom-nav-wrapper {
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(10px);
          border-top: 1px solid rgba(0, 0, 0, 0.1);
          padding: 0.5rem 0;
          width: 100%;
          transition: all 0.3s ease-in-out;
        }

        .transparent-wrapper {
          background: rgba(0, 0, 0, 0.3);
          backdrop-filter: blur(10px);
          border-top: 1px solid rgba(255, 255, 255, 0.1);
        }

        .nav-links-container {
          display: flex;
          justify-content: space-around;
          align-items: center;
          width: 100%;
        }

        .social-link {
          position: relative;
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 0.5rem;
          transition: all 0.3s ease;
          text-decoration: none;
        }

        .icon-container {
          position: relative;
          padding: 0.5rem;
        }

        .social-link .label {
          font-size: 0.75rem;
          margin-top: 0.25rem;
          font-weight: 500;
          opacity: 0.8;
        }

        .social-link:hover {
          transform: translateY(-5px);
        }

        .tooltip {
          position: absolute;
          top: -40px;
          left: 50%;
          transform: translateX(-50%) translateY(10px);
          padding: 0.5rem 1rem;
          border-radius: 20px;
          color: white;
          font-size: 0.75rem;
          white-space: nowrap;
          opacity: 0;
          visibility: hidden;
          transition: all 0.3s ease;
        }

        .tooltip::after {
          content: '';
          position: absolute;
          bottom: -5px;
          left: 50%;
          transform: translateX(-50%);
          border-left: 6px solid transparent;
          border-right: 6px solid transparent;
          border-top: 6px solid currentColor;
        }

        .social-link:hover .tooltip {
          opacity: 1;
          visibility: visible;
          transform: translateX(-50%) translateY(0);
        }

        @media (max-width: 576px) {
          .social-link {
            padding: 0.25rem;
          }

          .icon-container {
            padding: 0.25rem;
          }

          .social-link .label {
            font-size: 0.7rem;
          }
        }
      `}</style>
    </nav>
  );
};

export default BottomNavbar;