import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

const SkillsSection = ({ isAnimated, technicalSkills }) => {
  const skillIcons = {
    // Programming Languages
    "Python": "fab fa-python",
    "Java": "fab fa-java",
    "JavaScript": "fab fa-js-square",
    "PHP": "fab fa-php",
    "C": "fas fa-code",
    "C++": "fas fa-code",
    "SQL": "fas fa-database",
    "Dart": "fas fa-mobile-alt",
    
    // Frameworks & Libraries
    "React": "fab fa-react",
    "Laravel": "fab fa-laravel",
    "Express.js": "fab fa-node-js",
    "Flutter": "fas fa-mobile-alt",
    "Bootstrap": "fab fa-bootstrap",
    "TensorFlow": "fas fa-brain",
    "Keras": "fas fa-robot",
    
    // Databases
    "MySQL": "fas fa-database",
    "Oracle Database": "fas fa-server",
    "MS SQL Server": "fas fa-database",
    "Firebase": "fas fa-fire",
    "MongoDB": "fas fa-leaf",
    
    // Tools & Platforms
    "Git": "fab fa-git-alt",
    "GitHub": "fab fa-github",
    "Postman": "fas fa-share-alt",
    "VS Code": "fas fa-code",
    "Power BI": "fas fa-chart-bar",
    "Google Colab": "fas fa-flask",
    "CUDA": "fas fa-microchip"
  };

  // New object to store logo URLs for each skill
  const skillLogos = {
    // Programming Languages
    "Python": "https://img.icons8.com/?size=100&id=13441&format=png&color=000000",
    "Java": "https://img.icons8.com/?size=100&id=Pd2x9GWu9ovX&format=png&color=000000",
    "JavaScript": "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
    "PHP": "https://www.php.net/images/logos/php-logo.svg",
    "C": "https://upload.wikimedia.org/wikipedia/commons/1/19/C_Logo.png",
    "C++": "https://isocpp.org/assets/images/cpp_logo.png",
    "SQL": "https://www.svgrepo.com/show/303229/microsoft-sql-server-logo.svg",
    "Dart": "https://dart.dev/assets/shared/dart/icon/64.png",
    
    // Frameworks & Libraries
    "React": "https://img.icons8.com/?size=100&id=bzf0DqjXFHIW&format=png&color=000000",
    "Laravel": "https://laravel.com/img/logomark.min.svg",
    "Express.js": "https://img.icons8.com/?size=100&id=hsPbhkOH4FMe&format=png&color=000000",
    "Flutter": "https://img.icons8.com/?size=100&id=7I3BjCqe9rjG&format=png&color=000000",
    "Bootstrap": "https://getbootstrap.com/docs/5.0/assets/brand/bootstrap-logo.svg",
    "TensorFlow": "https://www.tensorflow.org/images/tf_logo_32px.png",
    "Keras": "https://keras.io/img/logo.png",
    
    // Databases
    "MySQL": "https://www.mysql.com/common/logos/mysql-logo.svg",
    "Oracle Database": "https://img.icons8.com/?size=100&id=39913&format=png&color=000000",
    "MS SQL Server": "https://www.svgrepo.com/show/303229/microsoft-sql-server-logo.svg",
    "Firebase": "https://firebase.google.com/downloads/brand-guidelines/PNG/logo-standard.png",
    "MongoDB": "https://www.mongodb.com/assets/images/global/leaf.png",
    
    // Tools & Platforms
    "Git": "https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png",
    "GitHub": "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png",
    "Postman": "https://voyager.postman.com/logo/postman-logo-icon-orange.svg",
    "VS Code": "https://code.visualstudio.com/assets/images/code-stable.png",
    "Power BI": "https://img.icons8.com/?size=100&id=3sGOUDo9nJ4k&format=png&color=000000",
    "Google Colab": "https://colab.research.google.com/img/colab_favicon_256px.png",
    "CUDA": "https://img.icons8.com/?size=100&id=yqf95864UzeQ&format=png&color=000000"
  };

  const getCategoryGradient = (category) => {
    switch (category) {
      case "Programming Languages": 
        return "linear-gradient(135deg, #667eea 0%, #764ba2 100%)";
      case "Frameworks & Libraries": 
        return "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)";
      case "Databases": 
        return "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)";
      case "Tools & Platforms": 
        return "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)";
      default: 
        return "linear-gradient(135deg, #667eea 0%, #764ba2 100%)";
    }
  };

  const getCategoryColor = (category) => {
    switch (category) {
      case "Programming Languages": return "#667eea";
      case "Frameworks & Libraries": return "#f5576c";
      case "Databases": return "#4facfe";
      case "Tools & Platforms": return "#43e97b";
      default: return "#667eea";
    }
  };

  return (
    <section id="skills" className="section-fullscreen d-flex align-items-center bg-white">
      <Container>
        <div className={`section-header text-center mb-5 ${isAnimated ? 'slide-up active' : 'slide-up'}`}>
          <h2 className="display-4 fw-bold mb-3">Technical Skills</h2>
          <p className="lead text-muted mb-4">Technologies and tools I work with</p>
          <div className="header-line"></div>
        </div>
        
        <Row className="g-4">
          {Object.entries(technicalSkills).map(([category, skills], index) => (
            <Col key={index} md={6} lg={3}>
              <Card
                className={`skill-category-card h-100 border-0 shadow-sm ${isAnimated ? 'slide-up active' : 'slide-up'}`}
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <Card.Body className="p-4">
                  <div 
                    className="category-header mb-4 text-center"
                    style={{ 
                      background: getCategoryGradient(category),
                      borderRadius: '15px',
                      padding: '20px 15px',
                      color: 'white',
                      position: 'relative',
                      overflow: 'hidden'
                    }}
                  >
                    <div className="category-bg-pattern"></div>
                    <div className="category-icon mb-2">
                      <i className={`fa fa-${
                        category === "Programming Languages" ? "code" :
                        category === "Frameworks & Libraries" ? "cubes" :
                        category === "Databases" ? "database" : "tools"
                      } fa-2x`} style={{ opacity: 0.9 }}></i>
                    </div>
                    <h3 className="h6 fw-bold mb-0 text-uppercase letter-spacing">{category}</h3>
                  </div>
                  
                  <div className="skills-grid">
                    {skills.map((skill, skillIndex) => (
                      <div 
                        key={skillIndex} 
                        className="skill-badge"
                        style={{ 
                          animationDelay: `${(index * 0.15) + (skillIndex * 0.05)}s`,
                          '--category-color': getCategoryColor(category)
                        }}
                      >
                        <div className="skill-content">
                          <i className={skillIcons[skill] || "fas fa-code"} aria-hidden="true"></i>
                          <img 
                            src={skillLogos[skill] || "https://via.placeholder.com/20"} 
                            alt={`${skill} logo`} 
                            className="skill-logo"
                            style={{ width: '20px', height: '20px', objectFit: 'contain' }}
                          />
                          <span className="skill-name">{skill}</span>
                        </div>
                        <div className="skill-shine"></div>
                      </div>
                    ))}
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
      
      <style>
        {`
          .section-fullscreen {
            min-height: 100vh;
            padding: 4rem 0;
            background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
          }

          .section-header .header-line {
            width: 80px;
            height: 4px;
            background: linear-gradient(90deg, #667eea, #764ba2);
            margin: 1rem auto;
            border-radius: 2px;
          }

          .letter-spacing {
            letter-spacing: 1px;
          }

          .skill-category-card {
            transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
            border-radius: 20px !important;
            background: rgba(255, 255, 255, 0.95);
            backdrop-filter: blur(10px);
            position: relative;
            overflow: hidden;
          }

          .skill-category-card::before {
            content: '';
            position: absolute;
            top: 0;
            left: -100%;
            width: 100%;
            height: 100%;
            background: linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent);
            transition: left 0.7s;
          }

          .skill-category-card:hover::before {
            left: 100%;
          }

          .skill-category-card:hover {
            transform: translateY(-15px) scale(1.02);
            box-shadow: 0 25px 50px rgba(0, 0, 0, 0.15) !important;
          }

          .category-bg-pattern {
            position: absolute;
            top: -50%;
            right: -30%;
            width: 100px;
            height: 100px;
            border-radius: 50%;
            background: rgba(255, 255, 255, 0.1);
            animation: float 6s ease-in-out infinite;
          }

          .category-bg-pattern::before {
            content: '';
            position: absolute;
            top: 20px;
            left: 20px;
            width: 60px;
            height: 60px;
            border-radius: 50%;
            background: rgba(255, 255, 255, 0.1);
            animation: float 8s ease-in-out infinite reverse;
          }

          @keyframes float {
            0%, 100% { transform: translateY(0px) rotate(0deg); }
            50% { transform: translateY(-10px) rotate(180deg); }
          }

          .skills-grid {
            display: grid;
            grid-template-columns: 1fr;
            gap: 12px;
          }

          .skill-badge {
            position: relative;
            padding: 12px 16px;
            background: linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%);
            border: 2px solid #e9ecef;
            border-radius: 12px;
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
            cursor: pointer;
            overflow: hidden;
            opacity: 0;
            transform: translateX(-20px);
            animation: slideInSkill 0.6s ease forwards;
          }

          @keyframes slideInSkill {
            to {
              opacity: 1;
              transform: translateX(0);
            }
          }

          .skill-badge:hover {
            transform: translateX(8px) scale(1.05);
            border-color: var(--category-color, #667eea);
            background: linear-gradient(135deg, #ffffff 0%, rgba(102, 126, 234, 0.05) 100%);
            box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
          }

          .skill-content {
            display: flex;
            align-items: center;
            gap: 10px;
            position: relative;
            z-index: 2;
          }

          .skill-content i {
            font-size: 1.1rem;
            color: var(--category-color, #667eea);
            transition: all 0.3s ease;
            width: 20px;
            text-align: center;
          }

          .skill-badge:hover .skill-content i {
            transform: scale(1.2) rotate(5deg);
            color: var(--category-color, #667eea);
            filter: brightness(1.2);
          }

          .skill-logo {
            transition: all 0.3s ease;
          }

          .skill-badge:hover .skill-logo {
            transform: scale(1.2);
            filter: brightness(1.2);
          }

          .skill-name {
            font-size: 0.9rem;
            font-weight: 600;
            color: #495057;
            transition: color 0.3s ease;
          }

          .skill-badge:hover .skill-name {
            color: #212529;
          }

          .skill-shine {
            position: absolute;
            top: 0;
            left: -100%;
            width: 100%;
            height: 100%;
            background: linear-gradient(90deg, transparent, rgba(255,255,255,0.6), transparent);
            transition: left 0.5s;
          }

          .skill-badge:hover .skill-shine {
            left: 100%;
          }

          .slide-up {
            opacity: 0;
            transform: translateY(40px);
            transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
          }

          .slide-up.active {
            opacity: 1;
            transform: translateY(0);
          }

          /* Responsive Design */
          @media (max-width: 768px) {
            .section-fullscreen {
              padding: 3rem 0;
            }

            .display-4 {
              font-size: 2.5rem;
            }

            .skill-category-card:hover {
              transform: translateY(-8px) scale(1.01);
            }

            .skills-grid {
              gap: 10px;
            }

            .skill-badge {
              padding: 10px 14px;
            }
          }

          @media (max-width: 576px) {
            .section-fullscreen {
              padding: 2rem 0;
            }

            .display-4 {
              font-size: 2rem;
            }

            .category-header {
              padding: 15px 10px !important;
            }

            .skill-badge:hover {
              transform: translateX(4px) scale(1.02);
            }
          }

          /* Dark mode compatibility */
          @media (prefers-color-scheme: dark) {
            .skill-category-card {
              background: rgba(30, 30, 30, 0.95);
            }
            
            .skill-badge {
              background: linear-gradient(135deg, #2d3748 0%, #4a5568 100%);
              border-color: #4a5568;
            }
            
            .skill-name {
              color: #e2e8f0;
            }
          }

          /* Custom scrollbar for better UX */
          ::-webkit-scrollbar {
            width: 8px;
          }

          ::-webkit-scrollbar-track {
            background: #f1f1f1;
            border-radius: 4px;
          }

          ::-webkit-scrollbar-thumb {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            border-radius: 4px;
          }

          ::-webkit-scrollbar-thumb:hover {
            background: linear-gradient(135deg, #764ba2 0%, #667eea 100%);
          }
        `}
      </style>
    </section>
  );
};

export default SkillsSection;