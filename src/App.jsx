import React, { useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import TopNavbar from './components/TopNavbar';
import BottomNavbar from './components/ButtomNavbar';
import ProfilePicture from "./assets/picture1.png";
import Picture1 from "./assets/picture2.png";
import Picture2 from "./assets/picture3.jpg";
import Picture3 from "./assets/picture4.jpg";
import Picture4 from "./assets/picture5.png";
import Picture5 from "./assets/picture6.png";
import Video1 from "./assets/video1.mp4";
import Org1 from "./assets/org1.png";
import Org2 from "./assets/org2.png";
import Org3 from "./assets/org3.png";
import Org4 from "./assets/org4.jpg";
import Org5 from "./assets/org5.jpg";

function App() {
  useEffect(() => {
    const handleScroll = () => {
      window.dispatchEvent(new CustomEvent('scroll'));
    };
    handleScroll();
    setTimeout(handleScroll, 100);
  }, []);

  const projects = [
    {
      title: "Atma Cinemas",
      description: "Atma Cinemas is a modern cinema booking application built with Flutter for the frontend and Laravel for the backend. It provides users with a seamless movie ticket booking experience, featuring real-time movie schedules, seat selection, and secure transactions. Integrated with MySQL and REST API, the platform ensures efficient data management and a smooth user experience.",
      image: Picture3,
      tools: ["Flutter", "Laravel", "MySQL", "REST API"],
      githubLink: "https://github.com/Dayaszs/1_D_Bioskop"
    },
    {
      title: "Atma AutoBid",
      description: "Atma AutoBid is an online auction platform that facilitates users in bidding and selling various products in a transparent and efficient manner. This website offers a user-friendly interface, real-time bidding features, and secure transactions to ensure a satisfying experience for both buyers and sellers.",
      image: Picture2,
      tools: ["React", "Vercel", "Laravel"],
      githubLink: "https://pw-e-7-react-one.vercel.app"
    },
    {
      title: "Solar Energy Output Prediction Using CNN-LSTM",
      description: "This project develops a prediction model for solar energy output using a combination of CNN and LSTM. By leveraging meteorological and irradiance data, the model provides accurate forecasts of solar energy production, aiding in operational planning and optimization for DAC energy companies.",
      image: Picture1,
      tools: ["Python", "Google Colab", "Jupyter Notebook"],
      githubLink: "https://github.com/Vingorithm/DAC-ITS-Solar-Energy-Prediction-CNN-LSTM"
    },
    {
      title: "Loop Wear",
      description: "Loop Wear is a modern fashion brand that blends contemporary design with maximum comfort. This website showcases our latest collection, designed for an urban and dynamic lifestyle. Each product is crafted with attention to detail and quality, ensuring customer satisfaction with every purchase.",
      image: Picture4,
      tools: ["HTML", "CSS", "JavaScript", "React"],
      githubLink: "https://loop-wear-wdc.netlify.app"
    },
    {
      title: "Jakarta Air Quality Index (AQI) Classification",
      description: "This project focuses on classifying the Air Quality Index (AQI) of Jakarta using data mining techniques. It employs machine learning algorithms to predict AQI categories based on the concentrations of key pollutants such as PM10, PM2.5, SO2, CO, O3, and NO2.",
      image: Picture5,
      tools: ["Python", "Google Colab", "Jupyter Notebook"],
      githubLink: "https://github.com/Vingorithm/Jakarta-Air-Quality-Index-AQI-Classification.git"
    } 
  ];

  // New organizations/committees data
  const organizations = [
    {
      name: "Asistant Lecturer",
      role: "Object-Oriented Programming Assistant Lecturer",
      period: "2025",
      description: "As an Assistant Lecturer for Object-Oriented Programming, I supported the main lecturer in delivering course materials, assisting students during lab sessions, and grading assignments. I helped students understand core OOP concepts such as classes, inheritance, polymorphism, and abstraction through real-world examples and hands-on practices.",
      image: Org4,
      achievements: [
        "Guided 100+ students during lab sessions to improve understanding of OOP concepts",
        "Helped streamline assignment grading, reducing feedback time by 30%"
      ]
    },
    {
      name: "Kelompok Studi Pemrograman",
      role: "C and Java Student Mentor",
      period: "2023 - 2025",
      description: "As a C and Java Programming Language Mentor, I developed a tailored module for students and provided hands-on teaching and guidance to new learners. I aimed to equip students with foundational knowledge and support their learning journey in programming. Through this role, I contributed to fostering a supportive learning environment for aspiring programmers.",
      image: Org1,
      achievements: [
        "Developed a beginner-friendly module for C and Java used by over 50+ students",
        "Mentored many students, with 80% showing significant improvement in basic programming skills"
      ]
    },
    {
      name: "Himpunan Mahasiswa Informatika",
      role: "Student Council of Akademik dan Prestasi",
      period: "2022 - 2024",
      description: "As a Student Council of Akademik dan Prestasi (APRES), I was entrusted with the task of guiding and mentoring first-year students in organizational matters, particularly in the realms of academia and achievement.",
      image: Org2,
      achievements: [
        "Organized UTS and UAS tutorial sessions attended by 70+ students across semesters",
        "Initiated academic community service programs to assist underprivileged students in local areas"
      ]
    },    
    {
      name: "Informatics Festival",
      role: "Secretariat Coordinator",
      period: "2024",
      description: "As the Secretariat Coordinator, responsibilities include managing participant groups, crafting captions, handling participant data, managing social media, and facilitating communication between the organizing committee and participants.",
      image: Org3,
      achievements: [
        "Successfully coordinated 4 major events during Informatics Festival 2024",
        "Achieved high average participant turnout across all events, with positive feedback from attendees"
      ]
    },
    {
      name: "Asistant Lecturer",
      role: "Artificial Intelligence Assistant Lecturer",
      period: "2024",
      description: "As an Assistant Lecturer for the Artificial Intelligence course, I was responsible for preparing lab materials, supporting students in understanding algorithms such as search strategies, neural networks, and decision trees, and assisting in grading assignments and projects. I also provided mentorship to students undertaking mini-projects in AI.",
      image: Org5,
      achievements: [
        "Facilitated weekly lab sessions for 80+ students focusing on core AI algorithms",
        "Provided guidance for 20+ student projects on AI applications, improving project quality and completion rate"
      ]
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
                and Software Development
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
                      I'm always exploring the many sides of IT, from Artificial Intelligence to Software Development. Problem-solving is my jam, and 
                      I love diving into challenges with a mix of critical thinking and innovation. My goal is to take these skills further, contributing to tech breakthroughs that shape the future. 
                      I'm all about leveraging tech to make things better, smarter, and more efficient.
                      </p>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="p-4 bg-light rounded-3">
                      <h3 className="h4 mb-3">Technical Skills</h3>
                      <div className="d-flex flex-wrap gap-2">
                        {["Python", "Java", "C", "React", "Laravel", "MySQL", "Git", "Node JS", "C++", "Flutter", "Firebase", "CUDA", "Javascript"].map((skill) => (
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

        {/* Organizations & Committees Section */}
        <section id="organizations" className="section-fullscreen d-flex align-items-center bg-light">
          <div className="container">
            <h2 className="text-center display-4 fw-bold mb-5">Organizations & Committees</h2>
            <div className="row g-4 justify-content-center">
              {organizations.map((org, index) => (
                <div key={index} className="col-md-6 col-lg-4">
                  <div className="card h-100 border-0 org-card">
                    <div className="position-relative overflow-hidden image-container">
                      <img 
                        src={org.image} 
                        className="card-img-top org-image" 
                        alt={org.name}
                      />
                      <div className="period-badge">
                        {org.period}
                      </div>
                    </div>
                    <div className="card-body p-4">
                      <h5 className="card-title fw-bold mb-1">{org.name}</h5>
                      <p className="role-text mb-3">{org.role}</p>
                      <p className="card-text text-muted mb-3">{org.description}</p>
                      <h6 className="achievements-title">Key Achievements:</h6>
                      <ul className="achievements-list">
                        {org.achievements.map((achievement, aIndex) => (
                          <li key={aIndex}>{achievement}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <style>
            {`
              .org-card {
                transition: transform 0.3s ease, box-shadow 0.3s ease;
                box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
                height: 100%;
              }

              .org-card:hover {
                transform: translateY(-10px);
                box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
              }

              .image-container {
                height: 200px;
                position: relative;
              }

              .org-image {
                width: 100%;
                height: 100%;
                object-fit: cover;
              }

              .period-badge {
                position: absolute;
                bottom: 0;
                right: 0;
                background-color: rgba(0, 123, 255, 0.8);
                color: white;
                padding: 0.3rem 0.8rem;
                font-weight: 500;
                font-size: 0.9rem;
              }

              .role-text {
                color: #0d6efd;
                font-weight: 500;
                font-size: 1rem;
              }

              .achievements-title {
                font-size: 1rem;
                margin-bottom: 0.5rem;
                font-weight: 600;
              }

              .achievements-list {
                padding-left: 1.2rem;
                margin-bottom: 0;
              }

              .achievements-list li {
                margin-bottom: 0.4rem;
                font-size: 0.9rem;
              }

              .achievements-list li:last-child {
                margin-bottom: 0;
              }
            `}
          </style>
        </section>

       {/* Projects Section */}
        <section id="projects" className="section-fullscreen d-flex align-items-center bg-white">
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
                width: 100%;
                height: 100%;
                display: flex;
                flex-direction: column;
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

              .card-body {
                display: flex;
                flex-direction: column;
                flex-grow: 1;
              }

              .card-text {
                flex-grow: 1;
                height: 120px;
                overflow-y: auto;
              }

              .tools-container {
                height: 80px;
                overflow-y: auto;
                margin-bottom: 1rem;
              }

              .project-link {
                border-width: 2px;
                font-weight: 500;
                padding: 0.75rem 1.5rem;
                transition: all 0.3s ease;
                margin-top: auto;
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
          .App {
            position: relative;
          }
          
          .main-content {
            padding-top: 0; /* Remove top padding to prevent whitespace */
            padding-bottom: 60px; /* Adjust for bottom navbar */
          }

          .section-fullscreen {
            min-height: 100vh; /* Make sections full viewport height */
            padding: 4rem 0;
          }
          
          #home {
            height: 100vh; /* Force home section to be full viewport height */
            width: 100%;
            position: relative;
            padding-top: 76px; /* Account for navbar height */
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
            position: relative;
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
              min-height: 100vh;
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