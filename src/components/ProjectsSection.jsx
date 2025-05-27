import React, { useState } from "react";
import { Container, Row, Col, Card, Button, Nav, Badge } from "react-bootstrap";

const ProjectsSection = ({ isAnimated, projects, projectCategories, getCategoryForProject, getCategoryColor }) => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [filteredProjects, setFilteredProjects] = useState(projects);

  const handleFilterClick = (category) => {
    setActiveFilter(category);
    if (category === 'All') {
      setFilteredProjects(projects);
    } else {
      const categoryProjects = projectCategories[category] || [];
      setFilteredProjects(categoryProjects);
    }
  };

  const getProjectIcon = (project) => {
    if (project.title.toLowerCase().includes('ai') ||
        project.description.toLowerCase().includes('machine learning') ||
        project.tools.some(t => t.includes('Python') || t.includes('TensorFlow') || t.includes('Keras'))) {
      return 'fas fa-brain';
    } else if (project.tools.includes('Flutter') || project.tools.includes('Dart')) {
      return 'fas fa-mobile-alt';
    } else if (project.tools.some(t => ['React', 'HTML', 'CSS', 'JavaScript'].includes(t))) {
      return 'fas fa-globe';
    } else {
      return 'fas fa-code';
    }
  };

  const getCategoryGradient = (category) => {
    switch (category) {
      case "Web Development": 
        return "linear-gradient(135deg, #667eea 0%, #764ba2 100%)";
      case "Mobile Development": 
        return "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)";
      case "Data Science & AI": 
        return "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)";
      default: 
        return "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)";
    }
  };

  return (
    <section id="projects" className="section-fullscreen d-flex align-items-center">
      <Container>
        <div className={`section-header text-center mb-5 ${isAnimated ? 'slide-up active' : 'slide-up'}`}>
          <h2 className="display-4 fw-bold mb-3">Featured Projects</h2>
          <p className="lead text-muted mb-4">Showcasing my latest work and achievements</p>
          <div className="header-line"></div>
        </div>

        {/* Filter Navigation */}
        <div className={`filter-container d-flex justify-content-center mb-5 ${isAnimated ? 'slide-up active' : 'slide-up'}`} style={{ animationDelay: '0.2s' }}>
          <div className="filter-wrapper">
            <button
              className={`filter-btn ${activeFilter === 'All' ? 'active' : ''}`}
              onClick={() => handleFilterClick('All')}
            >
              <span className="filter-text">All Projects</span>
              <div className="filter-shine"></div>
            </button>
            {Object.keys(projectCategories).map((category, index) => (
              <button
                key={index}
                className={`filter-btn ${activeFilter === category ? 'active' : ''}`}
                onClick={() => handleFilterClick(category)}
                style={{ '--category-color': getCategoryColor(projects[0], projectCategories) }}
              >
                <span className="filter-text">{category}</span>
                <div className="filter-shine"></div>
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <Row className="g-4 justify-content-center">
          {filteredProjects.map((project, index) => (
            <Col key={index} md={6} lg={4}>
              <Card
                className={`project-card h-100 border-0 ${isAnimated ? 'fade-in active' : 'fade-in'}`}
                style={{ 
                  animationDelay: `${0.4 + (index * 0.15)}s`,
                  '--category-color': getCategoryColor(project, projectCategories)
                }}
              >
                {/* Project Image/Icon Area */}
                <div className="project-image-container">
                  <div className="project-bg-pattern"></div>
                  <div 
                    className="project-icon-wrapper"
                    style={{ 
                      background: getCategoryGradient(getCategoryForProject(project, projectCategories))
                    }}
                  >
                    <i className={`${getProjectIcon(project)} project-main-icon`}></i>
                  </div>
                  <div className="project-overlay">
                    <div className="overlay-content">
                      <button
                        className="project-preview-btn"
                        onClick={() => window.open(project.githubLink, '_blank')}
                      >
                        <i className="fab fa-github"></i>
                        <span>View Code</span>
                      </button>
                    </div>
                  </div>
                  <div className="project-glow"></div>
                </div>

                <Card.Body className="p-4">
                  {/* Category Badge */}
                  <div className="d-flex justify-content-between align-items-start mb-3">
                    <Badge
                      className="category-badge"
                      style={{
                        background: getCategoryGradient(getCategoryForProject(project, projectCategories)),
                        border: 'none'
                      }}
                    >
                      <span>{getCategoryForProject(project, projectCategories)}</span>
                    </Badge>
                  </div>

                  {/* Project Title */}
                  <h3 className="project-title mb-3">{project.title}</h3>

                  {/* Project Description */}
                  <p className="project-description mb-4">{project.description}</p>

                  {/* Technology Stack */}
                  <div className="tech-stack mb-4">
                    <div className="tech-stack-label mb-2">
                      <i className="fas fa-code-branch me-2"></i>
                      <span>Tech Stack</span>
                    </div>
                    <div className="tech-badges">
                      {project.tools.slice(0, 4).map((tool, toolIndex) => (
                        <span key={toolIndex} className="tech-badge">{tool}</span>
                      ))}
                      {project.tools.length > 4 && (
                        <span className="tech-badge more-badge">+{project.tools.length - 4}</span>
                      )}
                    </div>
                  </div>

                  {/* Action Button */}
                  <button
                    className="project-cta-btn w-100"
                    onClick={() => window.open(project.githubLink, '_blank')}
                  >
                    <span className="btn-text">
                      <i className="fab fa-github me-2"></i>
                      View Project
                    </span>
                    <i className="fas fa-arrow-right btn-arrow"></i>
                    <div className="btn-shine"></div>
                  </button>
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
            position: relative;
            overflow: hidden;
          }

          .section-fullscreen::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: 
              radial-gradient(circle at 20% 80%, rgba(120, 119, 198, 0.1) 0%, transparent 50%),
              radial-gradient(circle at 80% 20%, rgba(255, 119, 198, 0.1) 0%, transparent 50%);
            pointer-events: none;
          }

          .section-header .header-line {
            width: 80px;
            height: 4px;
            background: linear-gradient(90deg, #667eea, #764ba2);
            margin: 1rem auto;
            border-radius: 2px;
          }

          /* Filter Styles */
          .filter-container {
            position: relative;
            z-index: 2;
          }

          .filter-wrapper {
            display: flex;
            flex-wrap: wrap;
            gap: 12px;
            padding: 8px;
            background: rgba(255, 255, 255, 0.9);
            border-radius: 50px;
            box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
            backdrop-filter: blur(10px);
            border: 1px solid rgba(255, 255, 255, 0.2);
          }

          .filter-btn {
            position: relative;
            padding: 12px 24px;
            background: transparent;
            border: none;
            border-radius: 25px;
            font-weight: 600;
            font-size: 0.9rem;
            color: #495057;
            cursor: pointer;
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
            overflow: hidden;
            z-index: 1;
          }

          .filter-btn::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            opacity: 0;
            transition: opacity 0.3s ease;
            z-index: -1;
          }

          .filter-btn.active::before,
          .filter-btn:hover::before {
            opacity: 1;
          }

          .filter-btn.active .filter-text,
          .filter-btn:hover .filter-text {
            color: white;
          }

          .filter-text {
            position: relative;
            z-index: 2;
            transition: color 0.3s ease;
          }

          .filter-shine {
            position: absolute;
            top: 0;
            left: -100%;
            width: 100%;
            height: 100%;
            background: linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent);
            transition: left 0.5s;
            z-index: 3;
          }

          .filter-btn:hover .filter-shine {
            left: 100%;
          }

          /* Project Card Styles */
          .project-card {
            background: rgba(255, 255, 255, 0.95);
            backdrop-filter: blur(10px);
            border-radius: 24px !important;
            overflow: hidden;
            transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
            box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
            position: relative;
            border: 1px solid rgba(255, 255, 255, 0.2) !important;
          }

          .project-card::before {
            content: '';
            position: absolute;
            top: 0;
            left: -100%;
            width: 100%;
            height: 100%;
            background: linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent);
            transition: left 0.7s;
            z-index: 1;
          }

          .project-card:hover::before {
            left: 100%;
          }

          .project-card:hover {
            transform: translateY(-15px) scale(1.02);
            box-shadow: 0 25px 50px rgba(0, 0, 0, 0.15);
          }

          .project-image-container {
            position: relative;
            height: 200px;
            background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
            overflow: hidden;
            display: flex;
            align-items: center;
            justify-content: center;
          }

          .project-bg-pattern {
            position: absolute;
            top: -50%;
            right: -50%;
            width: 200px;
            height: 200px;
            border-radius: 50%;
            background: rgba(102, 126, 234, 0.1);
            animation: float 8s ease-in-out infinite;
          }

          .project-bg-pattern::before {
            content: '';
            position: absolute;
            top: 50px;
            left: 50px;
            width: 100px;
            height: 100px;
            border-radius: 50%;
            background: rgba(118, 75, 162, 0.1);
            animation: float 10s ease-in-out infinite reverse;
          }

          .project-icon-wrapper {
            position: relative;
            z-index: 2;
            width: 80px;
            height: 80px;
            border-radius: 20px;
            display: flex;
            align-items: center;
            justify-content: center;
            box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
            transition: all 0.3s ease;
          }

          .project-card:hover .project-icon-wrapper {
            transform: scale(1.1) rotate(5deg);
          }

          .project-main-icon {
            font-size: 2rem;
            color: white;
            filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.2));
          }

          .project-overlay {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: rgba(0, 0, 0, 0.7);
            display: flex;
            align-items: center;
            justify-content: center;
            opacity: 0;
            transition: all 0.3s ease;
            z-index: 3;
          }

          .project-card:hover .project-overlay {
            opacity: 1;
          }

          .project-preview-btn {
            background: rgba(255, 255, 255, 0.9);
            border: none;
            border-radius: 50px;
            padding: 12px 24px;
            display: flex;
            align-items: center;
            gap: 8px;
            font-weight: 600;
            color: #333;
            transition: all 0.3s ease;
            backdrop-filter: blur(10px);
          }

          .project-preview-btn:hover {
            background: white;
            transform: scale(1.05);
          }

          .project-glow {
            position: absolute;
            top: -50%;
            left: -50%;
            width: 200%;
            height: 200%;
            background: radial-gradient(circle, var(--category-color, #667eea) 0%, transparent 70%);
            opacity: 0;
            transition: opacity 0.3s ease;
            pointer-events: none;
          }

          .project-card:hover .project-glow {
            opacity: 0.1;
          }

          /* Card Body Styles */
          .category-badge {
            padding: 6px 16px;
            border-radius: 20px;
            font-size: 0.75rem;
            font-weight: 600;
            color: white !important;
            text-transform: uppercase;
            letter-spacing: 0.5px;
            box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
          }

          .project-title {
            font-size: 1.4rem;
            font-weight: 700;
            color: #2d3748;
            line-height: 1.3;
            margin-bottom: 1rem;
          }

          .project-description {
            color: #4a5568;
            font-size: 0.95rem;
            line-height: 1.6;
            margin-bottom: 1.5rem;
          }

          .tech-stack-label {
            display: flex;
            align-items: center;
            font-size: 0.85rem;
            font-weight: 600;
            color: #4a5568;
            text-transform: uppercase;
            letter-spacing: 0.5px;
          }

          .tech-badges {
            display: flex;
            flex-wrap: wrap;
            gap: 8px;
          }

          .tech-badge {
            background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
            color: #495057;
            padding: 6px 12px;
            border-radius: 20px;
            font-size: 0.8rem;
            font-weight: 500;
            border: 1px solid #dee2e6;
            transition: all 0.3s ease;
          }

          .tech-badge:hover {
            background: linear-gradient(135deg, #e9ecef 0%, #dee2e6 100%);
            transform: translateY(-2px);
          }

          .more-badge {
            background: linear-gradient(135deg, var(--category-color, #667eea) 0%, rgba(102, 126, 234, 0.8) 100%);
            color: white !important;
            border-color: var(--category-color, #667eea);
          }

          .project-cta-btn {
            position: relative;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            border: none;
            border-radius: 12px;
            padding: 14px 20px;
            color: white;
            font-weight: 600;
            display: flex;
            align-items: center;
            justify-content: space-between;
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
            overflow: hidden;
            cursor: pointer;
          }

          .project-cta-btn:hover {
            transform: translateY(-2px);
            box-shadow: 0 8px 25px rgba(102, 126, 234, 0.3);
          }

          .btn-text {
            display: flex;
            align-items: center;
            position: relative;
            z-index: 2;
          }

          .btn-arrow {
            transition: transform 0.3s ease;
            position: relative;
            z-index: 2;
          }

          .project-cta-btn:hover .btn-arrow {
            transform: translateX(5px);
          }

          .btn-shine {
            position: absolute;
            top: 0;
            left: -100%;
            width: 100%;
            height: 100%;
            background: linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent);
            transition: left 0.5s;
          }

          .project-cta-btn:hover .btn-shine {
            left: 100%;
          }

          /* Animations */
          @keyframes float {
            0%, 100% { transform: translateY(0px) rotate(0deg); }
            50% { transform: translateY(-20px) rotate(180deg); }
          }

          .fade-in {
            opacity: 0;
            transform: translateY(30px) scale(0.95);
            transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
          }

          .fade-in.active {
            opacity: 1;
            transform: translateY(0) scale(1);
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

            .filter-wrapper {
              justify-content: center;
              flex-direction: column;
              align-items: center;
              border-radius: 20px;
            }

            .filter-btn {
              padding: 10px 20px;
              font-size: 0.85rem;
            }

            .project-card:hover {
              transform: translateY(-8px) scale(1.01);
            }

            .project-image-container {
              height: 160px;
            }

            .project-icon-wrapper {
              width: 60px;
              height: 60px;
            }

            .project-main-icon {
              font-size: 1.5rem;
            }
          }

          @media (max-width: 576px) {
            .section-fullscreen {
              padding: 2rem 0;
            }

            .display-4 {
              font-size: 2rem;
            }

            .filter-wrapper {
              gap: 8px;
            }

            .filter-btn {
              padding: 8px 16px;
              font-size: 0.8rem;
            }

            .project-title {
              font-size: 1.2rem;
            }

            .project-description {
              font-size: 0.9rem;
            }

            .tech-badge {
              font-size: 0.75rem;
              padding: 4px 10px;
            }
          }

          /* Enhanced hover effects for desktop */
          @media (min-width: 992px) {
            .project-card:hover {
              transform: translateY(-20px) scale(1.03);
            }
          }
        `}
      </style>
    </section>
  );
};

export default ProjectsSection;