import React, { useState } from "react";
import { Linkedin, Github, Twitter, Instagram, Mail } from 'lucide-react';

const BottomNavbar = () => {
  const [activeLink, setActiveLink] = useState(null);

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
      url: "kevinkevin.kk92@gmail.com",
      color: "#EA4335"
    }
  ];

  return (
    <nav className="navbar navbar-fixed py-0">
      <div className="container-fluid px-0">
        <div className="bottom-nav-wrapper w-100">
          <div className="d-flex justify-content-around align-items-center w-100">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                className="nav-link social-link"
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                onMouseEnter={() => setActiveLink(index)}
                onMouseLeave={() => setActiveLink(null)}
                style={{
                  color: activeLink === index ? link.color : '#6c757d'
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
      </div>

      <style>
        {`
          .navbar-fixed {
            position: fixed;
            bottom: 0;
            left: 0;
            right: 0;
            z-index: 1030;
          }

          .bottom-nav-wrapper {
            background: rgba(255, 255, 255, 0.95);
            backdrop-filter: blur(10px);
            border-top: 1px solid rgba(0, 0, 0, 0.1);
            padding: 0.5rem 0;
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
        `}
      </style>
    </nav>
  );
};

export default BottomNavbar;