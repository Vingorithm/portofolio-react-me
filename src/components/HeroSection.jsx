import React, { useState, useEffect } from "react";
import { Container, Button } from "react-bootstrap";
import Video1 from "../assets/video1.mp4";

const HeroSection = ({ isAnimated, profileData }) => {
  const [videoError, setVideoError] = useState(false);
  const [videoLoaded, setVideoLoaded] = useState(false);

  const handleVideoLoad = () => {
    console.log("Video loaded successfully");
    setVideoLoaded(true);
  };

  const handleVideoError = (e) => {
    console.error("Video failed to load:", e);
    setVideoError(true);
  };

  return (
    <section id="home" className="section-fullscreen d-flex align-items-center position-relative text-white">
      {videoError && (
        <div style={{
          position: 'absolute',
          top: '10px',
          left: '10px',
          background: 'red',
          color: 'white',
          padding: '10px',
          zIndex: 1000
        }}>
          Video failed to load! Check console for details.
        </div>
      )}
      
      <video 
        className="background-video" 
        autoPlay 
        loop 
        muted 
        playsInline 
        preload="auto"
        onLoadedData={handleVideoLoad}
        onError={handleVideoError}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          zIndex: 1
        }}
      >
        <source src={Video1} type="video/mp4" />
        <source src={Video1.replace('.mp4', '.webm')} type="video/webm" />
        <source src={Video1.replace('.mp4', '.ogg')} type="video/ogg" />
        Your browser does not support the video tag.
      </video>
      
      <div className="video-overlay" style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: 'rgba(0, 0, 0, 0.5)',
        zIndex: 2
      }}></div>
      
      <Container className="position-relative" style={{ zIndex: 3 }}>
        <div className={`text-center fade-in ${isAnimated ? 'active' : ''}`}>
          <h1 className="display-3 fw-bold mb-3">
            {profileData?.name?.split(' ').map((word, index) => (
              <span key={index} className="highlight-name">
                {word}{index < profileData.name.split(' ').length - 1 ? ' ' : ''}
              </span>
            )) || 'Your Name'}
          </h1>
          <h2 className="display-6 mb-4">{profileData?.title || 'Your Title'}</h2>
          <p className="lead mb-5 mx-auto" style={{ maxWidth: '800px' }}>
            {profileData?.summary || 'Your summary here'}
          </p>
          <div className="d-flex justify-content-center gap-3 mb-5">
            <Button href="#about" variant="outline-light" size="lg" className="position-relative overflow-hidden">
              <i className="fa fa-user me-2"></i> About Me
            </Button>
            <Button href="#projects" variant="outline-light" size="lg" className="position-relative overflow-hidden">
              <i className="fa fa-code me-2"></i> View Projects
            </Button>
          </div>
          <div className="social-icons d-flex justify-content-center gap-4">
            <a href={profileData?.github || '#'} target="_blank" rel="noopener noreferrer" className="social-icon">
              <i className="fa fa-github fa-2x"></i>
            </a>
            <a href={profileData?.linkedin || '#'} target="_blank" rel="noopener noreferrer" className="social-icon">
              <i className="fa fa-linkedin fa-2x"></i>
            </a>
            <a href={`mailto:${profileData?.email || ''}`} className="social-icon">
              <i className="fa fa-envelope fa-2x"></i>
            </a>
            <a href={profileData?.website || '#'} target="_blank" rel="noopener noreferrer" className="social-icon">
              <i className="fa fa-globe fa-2x"></i>
            </a>
          </div>
        </div>
      </Container>
      
      <style>
        {`
          .section-fullscreen {
            min-height: 100vh;
            padding: 3rem 0;
            position: relative;
            overflow: hidden;
          }

          .highlight-name {
            position: relative;
            display: inline-block;
            margin-right: 0.2em; /* Add small margin to ensure spacing */
          }

          .highlight-name::after {
            content: '';
            position: absolute;
            bottom: -2px;
            left: 0;
            width: 100%;
            height: 2px;
            background-color: #4c6ef5;
            transform: scaleX(0);
            transform-origin: right;
            transition: transform 0.3s ease-in-out;
          }

          .highlight-name:hover::after {
            transform: scaleX(1);
            transform-origin: left;
          }

          .social-icon {
            color: #fff;
            transition: transform 0.3s ease, color 0.3s ease;
            text-decoration: none;
          }

          .social-icon:hover {
            color: #4c6ef5;
            transform: translateY(-5px);
          }

          .fade-in {
            opacity: 0;
            transform: translateY(20px);
            transition: opacity 0.5s ease, transform 0.5s ease;
          }

          .fade-in.active {
            opacity: 1;
            transform: translateY(0);
          }

          @media (max-width: 576px) {
            .section-fullscreen {
              padding: 2rem 0;
            }

            .display-3 {
              font-size: 2.5rem;
            }

            .display-6 {
              font-size: 2rem;
            }
          }
        `}
      </style>
    </section>
  );
};

export default HeroSection;