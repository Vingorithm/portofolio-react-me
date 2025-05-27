import React, { useState, useEffect } from "react";
import { Download, Menu, X } from 'lucide-react';

const TopNavbar = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Track scroll position and current section
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setScrolled(scrollPosition > 50);
      
      // Determine which section is currently in view
      const sections = ["home", "about", "experience", "skills", "projects", "certifications"];
      
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

  // Track mouse position for interactive effects
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Set navbar styles based on current section and scroll position
  const isTransparent = activeSection === "home" && !scrolled;

  const navLinks = [
    { name: "Home", href: "#home", id: "home" },
    { name: "About", href: "#about", id: "about" },
    { name: "Experience", href: "#experience", id: "experience" },
    { name: "Skills", href: "#skills", id: "skills" },
    { name: "Projects", href: "#projects", id: "projects" },
    { name: "Certifications", href: "#certifications", id: "certifications" }
  ];

  const handleDownloadCV = () => {
    const cvUrl = "/cv.pdf";
    const link = document.createElement('a');
    link.href = cvUrl;
    link.download = 'Kevin_Philips_Tanamas_CV.pdf';
    
    // Add error handling
    link.onerror = () => {
      alert('Failed to download CV. Please try again later or contact support.');
    };
    
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      <nav className={`enhanced-navbar ${isTransparent ? 'transparent' : 'solid'}`}>
        <div className="nav-container">
          {/* Background Effects */}
          <div className="nav-bg-effects">
            <div className="floating-circle circle-1"></div>
            <div className="floating-circle circle-2"></div>
            <div className="floating-circle circle-3"></div>
          </div>

          {/* Brand Logo */}
          <div className="nav-brand">
            <a href="#home" className="brand-link">
              <div className="brand-icon">
                <div className="icon-inner">KP</div>
                <div className="icon-glow"></div>
              </div>
              <div className="brand-text">
                <span className="brand-name">Kevin Philips Tanamas</span>
                <span className="brand-title">Full Stack Developer</span>
              </div>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="nav-links-desktop">
            {navLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className={`nav-link ${activeSection === link.id ? 'active' : ''}`}
                style={{ '--delay': `${index * 0.1}s` }}
              >
                <span className="link-text">{link.name}</span>
                <div className="link-hover-effect"></div>
                <div className="link-active-indicator"></div>
              </a>
            ))}
          </div>

          {/* Download CV Button */}
          <div className="nav-actions">
            <button
              className="download-cv-btn"
              onClick={handleDownloadCV}
            >
              <div className="btn-bg"></div>
              <div className="btn-content">
                <Download size={18} className="btn-icon" />
                <span className="btn-text">Download CV</span>
              </div>
              <div className="btn-ripple"></div>
              <div className="btn-shine"></div>
            </button>

            {/* Mobile Menu Toggle */}
            <button
              className="mobile-menu-toggle"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <div className="toggle-icon">
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={`mobile-nav ${isMenuOpen ? 'open' : ''}`}>
          <div className="mobile-nav-bg"></div>
          <div className="mobile-nav-content">
            <div className="mobile-nav-header">
              <div className="mobile-brand">
                <div className="mobile-brand-icon">KP</div>
                <div className="mobile-brand-text">
                  <span>Kevin Philips Tanamas</span>
                  <span>Full Stack Developer</span>
                </div>
              </div>
            </div>
            
            <div className="mobile-nav-links">
              {navLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className={`mobile-nav-link ${activeSection === link.id ? 'active' : ''}`}
                  onClick={() => setIsMenuOpen(false)}
                  style={{ '--mobile-delay': `${index * 0.1}s` }}
                >
                  <span className="mobile-link-text">{link.name}</span>
                  <div className="mobile-link-indicator"></div>
                </a>
              ))}
            </div>

            <div className="mobile-nav-footer">
              <button
                className="mobile-download-btn"
                onClick={() => {
                  handleDownloadCV();
                  setIsMenuOpen(false);
                }}
              >
                <Download size={20} />
                <span>Download CV</span>
              </button>
            </div>
          </div>
        </div>

        {/* Backdrop for mobile menu */}
        {isMenuOpen && (
          <div 
            className="mobile-backdrop"
            onClick={() => setIsMenuOpen(false)}
          ></div>
        )}
      </nav>

      <style jsx>{`
        /* Enhanced Navbar Styles */
        .enhanced-navbar {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1000;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
        }

        .enhanced-navbar.transparent {
          background: linear-gradient(135deg, rgba(0, 0, 0, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%);
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }

        .enhanced-navbar.solid {
          background: linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(248, 249, 250, 0.95) 100%);
          border-bottom: 1px solid rgba(0, 0, 0, 0.1);
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
        }

        .nav-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 2rem;
          height: 80px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          position: relative;
        }

        /* Background Effects */
        .nav-bg-effects {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          overflow: hidden;
          pointer-events: none;
        }

        .floating-circle {
          position: absolute;
          border-radius: 50%;
          background: linear-gradient(135deg, rgba(102, 126, 234, 0.1) 0%, rgba(118, 75, 162, 0.1) 100%);
          animation: float 8s ease-in-out infinite;
        }

        .circle-1 {
          width: 100px;
          height: 100px;
          top: -50px;
          left: 10%;
          animation-delay: 0s;
        }

        .circle-2 {
          width: 60px;
          height: 60px;
          top: -30px;
          right: 20%;
          animation-delay: 2s;
        }

        .circle-3 {
          width: 80px;
          height: 80px;
          top: -40px;
          left: 60%;
          animation-delay: 4s;
        }

        /* Brand Styles */
        .nav-brand {
          display: flex;
          align-items: center;
          z-index: 2;
        }

        .brand-link {
          display: flex;
          align-items: center;
          gap: 12px;
          text-decoration: none;
          transition: all 0.3s ease;
        }

        .brand-link:hover {
          transform: translateY(-2px);
        }

        .brand-icon {
          position: relative;
          width: 50px;
          height: 50px;
          border-radius: 12px;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          box-shadow: 0 8px 24px rgba(102, 126, 234, 0.3);
        }

        .icon-inner {
          font-size: 1.2rem;
          font-weight: 800;
          color: white;
          z-index: 2;
          position: relative;
        }

        .icon-glow {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: radial-gradient(circle at center, rgba(255, 255, 255, 0.3) 0%, transparent 70%);
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .brand-link:hover .icon-glow {
          opacity: 1;
        }

        .brand-text {
          display: flex;
          flex-direction: column;
          gap: 2px;
        }

        .brand-name {
          font-size: 1.2rem;
          font-weight: 700;
          color: var(--text-primary);
        }

        .brand-title {
          font-size: 0.8rem;
          font-weight: 500;
          color: var(--text-secondary);
          opacity: 0.8;
        }

        .enhanced-navbar.transparent .brand-name {
          color: white;
        }

        .enhanced-navbar.transparent .brand-title {
          color: rgba(255, 255, 255, 0.8);
        }

        .enhanced-navbar.solid .brand-name {
          color: #2d3748;
        }

        .enhanced-navbar.solid .brand-title {
          color: #718096;
        }

        /* Desktop Navigation Links */
        .nav-links-desktop {
          display: flex;
          align-items: center;
          gap: 2rem;
          z-index: 2;
        }

        .nav-link {
          position: relative;
          text-decoration: none;
          font-weight: 600;
          font-size: 0.95rem;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          animation: slideDown 0.6s ease-out;
          animation-delay: var(--delay);
          animation-fill-mode: both;
        }

        .enhanced-navbar.transparent .nav-link {
          color: rgba(255, 255, 255, 0.9);
        }

        .enhanced-navbar.solid .nav-link {
          color: #4a5568;
        }

        .link-text {
          position: relative;
          z-index: 2;
          transition: all 0.3s ease;
        }

        .link-hover-effect {
          position: absolute;
          bottom: -8px;
          left: 50%;
          width: 0;
          height: 2px;
          background: linear-gradient(90deg, #667eea, #764ba2);
          transform: translateX(-50%);
          transition: width 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          border-radius: 1px;
        }

        .nav-link:hover .link-hover-effect,
        .nav-link.active .link-hover-effect {
          width: 100%;
        }

        .link-active-indicator {
          position: absolute;
          top: 50%;
          left: 50%;
          width: 0;
          height: 0;
          background: linear-gradient(135deg, rgba(102, 126, 234, 0.1) 0%, rgba(118, 75, 162, 0.1) 100%);
          border-radius: 20px;
          transform: translate(-50%, -50%);
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          z-index: 1;
        }

        .nav-link.active .link-active-indicator {
          width: 120%;
          height: 40px;
        }

        .nav-link:hover .link-text {
          transform: translateY(-2px);
        }

        .enhanced-navbar.transparent .nav-link:hover {
          color: white;
        }

        .enhanced-navbar.solid .nav-link:hover {
          color: #667eea;
        }

        /* Download CV Button */
        .nav-actions {
          display: flex;
          align-items: center;
          gap: 1rem;
          z-index: 2;
        }

        .download-cv-btn {
          position: relative;
          background: transparent;
          border: none;
          border-radius: 50px;
          padding: 12px 24px;
          cursor: pointer;
          overflow: hidden;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          animation: slideDown 0.6s ease-out 0.8s both;
        }

        .btn-bg {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          border-radius: 50px;
          transition: all 0.3s ease;
        }

        .enhanced-navbar.transparent .btn-bg {
          background: rgba(255, 255, 255, 0.2);
          border: 1px solid rgba(255, 255, 255, 0.3);
        }

        .download-cv-btn:hover .btn-bg {
          transform: scale(1.05);
          box-shadow: 0 8px 32px rgba(102, 126, 234, 0.4);
        }

        .btn-content {
          position: relative;
          z-index: 2;
          display: flex;
          align-items: center;
          gap: 8px;
          font-weight: 600;
          font-size: 0.9rem;
          transition: all 0.3s ease;
        }

        .enhanced-navbar.transparent .btn-content {
          color: white;
        }

        .enhanced-navbar.solid .btn-content {
          color: white;
        }

        .btn-icon {
          transition: transform 0.3s ease;
        }

        .download-cv-btn:hover .btn-icon {
          transform: translateY(-2px);
        }

        .btn-ripple {
          position: absolute;
          top: 50%;
          left: 50%;
          width: 0;
          height: 0;
          background: rgba(255, 255, 255, 0.3);
          border-radius: 50%;
          transform: translate(-50%, -50%);
          transition: all 0.6s ease;
        }

        .download-cv-btn:active .btn-ripple {
          width: 200px;
          height: 200px;
        }

        .btn-shine {
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
          transition: left 0.6s;
        }

        .download-cv-btn:hover .btn-shine {
          left: 100%;
        }

        /* Mobile Menu Toggle */
        .mobile-menu-toggle {
          display: none;
          background: transparent;
          border: none;
          cursor: pointer;
          padding: 8px;
          border-radius: 8px;
          transition: all 0.3s ease;
        }

        .toggle-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
        }

        .enhanced-navbar.transparent .toggle-icon {
          color: white;
        }

        .enhanced-navbar.solid .toggle-icon {
          color: #4a5568;
        }

        .mobile-menu-toggle:hover .toggle-icon {
          transform: scale(1.1);
        }

        /* Mobile Navigation */
        .mobile-nav {
          position: fixed;
          top: 80px;
          left: 0;
          right: 0;
          background: rgba(255, 255, 255, 0.98);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border-bottom: 1px solid rgba(0, 0, 0, 0.1);
          max-height: 0;
          overflow: hidden;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
        }

        .mobile-nav.open {
          max-height: 100vh;
        }

        .mobile-nav-bg {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(135deg, rgba(102, 126, 234, 0.05) 0%, rgba(118, 75, 162, 0.05) 100%);
        }

        .mobile-nav-content {
          position: relative;
          z-index: 2;
          padding: 2rem;
        }

        .mobile-nav-header {
          margin-bottom: 2rem;
          padding-bottom: 1rem;
          border-bottom: 1px solid rgba(0, 0, 0, 0.1);
        }

        .mobile-brand {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .mobile-brand-icon {
          width: 40px;
          height: 40px;
          border-radius: 10px;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 800;
          color: white;
          font-size: 1rem;
        }

        .mobile-brand-text {
          display: flex;
          flex-direction: column;
          gap: 2px;
        }

        .mobile-brand-text span:first-child {
          font-weight: 700;
          color: #2d3748;
          font-size: 1.1rem;
        }

        .mobile-brand-text span:last-child {
          font-weight: 500;
          color: #718096;
          font-size: 0.9rem;
        }

        .mobile-nav-links {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          margin-bottom: 2rem;
        }

        .mobile-nav-link {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 1rem;
          text-decoration: none;
          color: #4a5568;
          font-weight: 600;
          border-radius: 12px;
          transition: all 0.3s ease;
          animation: slideInLeft 0.4s ease-out;
          animation-delay: var(--mobile-delay);
          animation-fill-mode: both;
        }

        .mobile-nav-link:hover {
          background: rgba(102, 126, 234, 0.1);
          transform: translateX(8px);
          color: #667eea;
        }

        .mobile-nav-link.active {
          background: linear-gradient(135deg, rgba(102, 126, 234, 0.1) 0%, rgba(118, 75, 162, 0.1) 100%);
          color: #667eea;
        }

        .mobile-link-indicator {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #667eea;
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .mobile-nav-link.active .mobile-link-indicator {
          opacity: 1;
        }

        .mobile-nav-footer {
          padding-top: 1rem;
          border-top: 1px solid rgba(0, 0, 0, 0.1);
        }

        .mobile-download-btn {
          width: 100%;
          padding: 1rem;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          border: none;
          border-radius: 12px;
          color: white;
          font-weight: 600;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          cursor: pointer;
          transition: all 0.3s ease;
          animation: slideInUp 0.4s ease-out 0.6s both;
        }

        .mobile-download-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 32px rgba(102, 126, 234, 0.4);
        }

        .mobile-backdrop {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.3);
          z-index: 999;
          animation: fadeIn 0.3s ease-out;
        }

        /* Animations */
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }

        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        /* Responsive Design */
        @media (max-width: 992px) {
          .nav-links-desktop {
            display: none;
          }

          .mobile-menu-toggle {
            display: block;
          }
        }

        @media (max-width: 768px) {
          .nav-container {
            padding: 0 1rem;
            height: 70px;
          }

          .brand-text {
            display: none;
          }

          .brand-icon {
            width: 45px;
            height: 45px;
          }

          .download-cv-btn {
            padding: 10px 16px;
          }

          .btn-text {
            display: none;
          }

          .mobile-nav {
            top: 70px;
          }

          .mobile-nav-content {
            padding: 1.5rem;
          }
        }

        @media (max-width: 576px) {
          .nav-container {
            height: 60px;
          }

          .brand-icon {
            width: 40px;
            height: 40px;
          }

          .icon-inner {
            font-size: 1rem;
          }

          .download-cv-btn {
            padding: 8px 12px;
          }

          .mobile-nav {
            top: 60px;
          }
        }
      `}</style>
    </>
  );
};

export default TopNavbar;