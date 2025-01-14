import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import TopNavbar from './components/TopNavbar';
import BottomNavbar from './components/ButtomNavbar';
import ProfilePicture from "./assets/picture1.png";
import Picture1 from "./assets/picture2.jpg";
import Picture2 from "./assets/picture3.jpg";
import Picture3 from "./assets/picture4.jpg";
import Video1 from "./assets/video1.mp4";

function App() {
  const projects = [
    {
      title: "Atma Cinemas",
      description: "A full-stack e-commerce solution built with React and Node.js",
      image: Picture3,
      tools: ["Flutter", "Laravel"],
      githubLink: "https://github.com/Dayaszs/1_D_Bioskop"
    },
    {
      title: "Atma AutoBid",
      description: "A collaborative task management application with real-time updates",
      image: Picture2,
      tools: ["React", "Laravel"],
      githubLink: "https://github.com/Vingorithm/PW_E_7_React"
    },
    {
      title: "Solar Energy Output Prediction",
      description: "A responsive portfolio website built with modern technologies",
      image: Picture1,
      tools: ["Python"],
      githubLink: "https://github.com/Vingorithm/DAC-ITS-Solar-Energy-Prediction-CNN-LSTM"
    }
  ];

  return (
    <div className="App">
      <TopNavbar />
      <main className="main-content">
        {/* Landing Section */}
        <section id="home" className="section-fullscreen d-flex align-items-center position-relative">
          <video
            className="background-video"
            autoPlay
            loop
            muted
            playsInline
          >
            <source src={Video1} type="video/mp4" />
          </video>
          <div className="video-overlay"></div>
          <div className="container position-relative">
            <div className="text-center text-white">
              <h1 className="display-3 fw-bold mb-4">Hello, I'm Kevin</h1>
              <p className="lead mb-4 mx-auto" style={{ maxWidth: '800px' }}>
                Welcome to my personal portfolio! I am Kevin, a Second Year Computer Science student with a passion and curiosity in the field of 
                Information Technology and the ability to Solve Problems and Critical Thinking and have an interest in Artificial Intelligence (AI), 
                and Data Analytics
              </p>
              <a href="#about" className="btn btn-primary btn-lg position-relative overflow-hidden">
                Learn More About Me
              </a>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="section-fullscreen d-flex align-items-center bg-white">
          <div className="container">
            <h2 className="text-center display-5 mb-5">About Me</h2>
            <div className="row align-items-center g-5">
              <div className="col-lg-4 text-center mb-4 mb-lg-0">
                <img 
                  src={ProfilePicture} 
                  alt="Profile Picture" 
                  className="img-fluid rounded-circle shadow mb-4"
                  style={{
                    maxWidth: '280px',
                    width: '100%',
                    height: 'auto',
                    objectFit: 'cover'
                  }}
                />
              </div>
              <div className="col-lg-8">
                <div className="row g-4">
                  <div className="col-md-12">
                    <div className="p-4 bg-light rounded-3">
                      <h3 className="h4 mb-3">Background</h3>
                      <p>
                      Curiosity drives me, especially in the world of Information Technology. As a second-year Computer Science student, 
                      I'm always exploring the many sides of IT, from Artificial Intelligence to Data Analytics. Problem-solving is my jam, and 
                      I love diving into challenges with a mix of critical thinking and innovation. My goal is to take these skills further, contributing to tech breakthroughs that shape the future. 
                      I’m all about leveraging tech to make things better, smarter, and more efficient.
                      </p>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="p-4 bg-light rounded-3">
                      <h3 className="h4 mb-3">Technical Skills</h3>
                      <div className="d-flex flex-wrap gap-2">
                        {["Python", "Java", "C", "React", "Laravel", "MySQL", "Git"].map((skill) => (
                          <span key={skill} className="badge bg-primary p-2">{skill}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

       {/* Projects Section */}
        <section id="projects" className="section-fullscreen d-flex align-items-center bg-light">
          <div className="container">
            <h2 className="text-center display-4 fw-bold mb-5">My Projects</h2>
            <div className="row g-4 justify-content-center">
              {projects.map((project, index) => (
                <div key={index} className="col-md-6 col-lg-4">
                  <div className="card h-100 border-0 project-card">
                    <div className="position-relative overflow-hidden image-container">
                      <img 
                        src={project.image} 
                        className="card-img-top project-image" 
                        alt={project.title}
                      />
                      <div className="overlay d-flex align-items-center justify-content-center">
                        <a 
                          href={project.githubLink} 
                          className="btn btn-light btn-lg rounded-circle shadow-sm"
                          target="_blank" 
                          rel="noopener noreferrer"
                        >
                          <i className="bi bi-github"></i>
                        </a>
                      </div>
                    </div>
                    <div className="card-body p-4">
                      <h5 className="card-title fw-bold mb-3">{project.title}</h5>
                      <p className="card-text text-muted mb-4">{project.description}</p>
                      <div className="d-flex flex-wrap gap-2 mb-4">
                        {project.tools.map((tool, toolIndex) => (
                          <span 
                            key={toolIndex} 
                            className="badge rounded-pill px-3 py-2"
                            style={{
                              backgroundColor: '#e9ecef',
                              color: '#495057',
                              fontWeight: '500',
                              fontSize: '0.85rem'
                            }}
                          >
                            {tool}
                          </span>
                        ))}
                      </div>
                      <a 
                        href={project.githubLink} 
                        className="btn btn-outline-primary w-100 project-link"
                        target="_blank" 
                        rel="noopener noreferrer"
                      >
                        View Project <i className="bi bi-arrow-right ms-2"></i>
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <style>
            {`
              .project-card {
                transition: transform 0.3s ease, box-shadow 0.3s ease;
                box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
              }

              .project-card:hover {
                transform: translateY(-10px);
                box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
              }

              .image-container {
                height: 240px;
                position: relative;
              }

              .project-image {
                width: 100%;
                height: 100%;
                object-fit: cover;
                transition: transform 0.3s ease;
              }

              .overlay {
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                background: rgba(0, 0, 0, 0.5);
                opacity: 0;
                transition: opacity 0.3s ease;
              }

              .project-card:hover .overlay {
                opacity: 1;
              }

              .project-card:hover .project-image {
                transform: scale(1.1);
              }

              .btn-light {
                width: 50px;
                height: 50px;
                display: flex;
                align-items: center;
                justify-content: center;
              }

              .btn-light i {
                font-size: 1.5rem;
              }

              .project-link {
                border-width: 2px;
                font-weight: 500;
                padding: 0.75rem 1.5rem;
                transition: all 0.3s ease;
              }

              .project-link:hover {
                background-color: var(--bs-primary);
                color: white;
                transform: translateY(-2px);
              }

              .badge {
                transition: all 0.3s ease;
              }

              .badge:hover {
                transform: translateY(-2px);
                box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
              }
            `}
          </style>
        </section>
      </main>
      <BottomNavbar />

      <style>
        {`
          .main-content {
            padding-top: 76px;
            padding-bottom: 76px;
          }

          .section-fullscreen {
            min-height: calc(100vh - 152px);
            padding: 4rem 0;
          }

          .background-video {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            object-fit: cover;
            z-index: 0;
          }

          .video-overlay {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.5);
            z-index: 1;
          }

          .container {
            z-index: 2;
          }

          .btn-primary {
            transition: all 0.3s ease;
          }
          
          .btn-primary:hover {
            transform: translateY(-2px);
            box-shadow: 0 4px 12px rgba(0, 123, 255, 0.2);
          }

          .card {
            transition: transform 0.3s ease;
          }

          .card:hover {
            transform: translateY(-5px);
          }

          .badge {
            font-weight: 500;
          }

          @media (max-width: 991.98px) {
            .section-fullscreen {
              min-height: calc(100vh - 152px);
              padding: 3rem 0;
            }
          }

          @media (max-width: 767.98px) {
            .section-fullscreen {
              padding: 2rem 0;
            }
          }
        `}
      </style>
    </div>
  );
}

export default App;