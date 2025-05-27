import React from "react";
import { Container, Row, Col, Card, Badge } from "react-bootstrap";
import ProfilePicture from "../assets/picture1.png";

const AboutSection = ({ isAnimated, profileData, education, technicalSkills }) => {
  return (
    <section id="about" className="section-fullscreen d-flex align-items-center">
      <Container>
        <div className={`section-header text-center mb-5 ${isAnimated ? 'slide-up active' : 'slide-up'}`}>
          <h2 className="display-4 fw-bold mb-3">About Me</h2>
          <p className="lead text-muted mb-4">Get to know more about my journey and expertise</p>
          <div className="header-line"></div>
        </div>

        <Row className="align-items-center g-5">
          {/* Profile Section */}
          <Col lg={5} className="text-center mb-4 mb-lg-0">
            <div className={`profile-section ${isAnimated ? 'slide-right active' : 'slide-right'}`}>
              {/* Animated Profile Image */}
              <div className="profile-image-container">
                <div className="profile-glow-ring"></div>
                <div className="profile-particles">
                  <div className="particle particle-1"></div>
                  <div className="particle particle-2"></div>
                  <div className="particle particle-3"></div>
                  <div className="particle particle-4"></div>
                </div>
                <div className="profile-image-wrapper">
                  <img 
                    src={ProfilePicture} 
                    alt="Kevin Philips Tanamas" 
                    className="profile-image"
                  />
                  <div className="image-border"></div>
                  <div className="image-shine"></div>
                </div>
              </div>

              {/* Profile Info */}
              <div className="profile-info mt-4">
                <div className="name-container mb-3">
                  <h3 className="profile-name">{profileData.name}</h3>
                  <div className="typing-animation">
                    <span className="profile-title">{profileData.title}</span>
                  </div>
                </div>
                
                <div className="location-container mb-4">
                  <div className="location-badge">
                    <i className="fas fa-map-marker-alt location-icon"></i>
                    <span>{profileData.location}</span>
                  </div>
                </div>

                {/* Languages */}
                <div className="languages-section">
                  <h4 className="section-subtitle mb-3">
                    <i className="fas fa-language me-2"></i>
                    Languages
                  </h4>
                  <div className="languages-container">
                    {profileData.languages.map((language, index) => (
                      <div key={index} className="language-badge">
                        <div className="language-icon">
                          <i className="fas fa-globe"></i>
                        </div>
                        <span>{language}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </Col>

          {/* Content Section */}
          <Col lg={7}>
            <div className={`content-section ${isAnimated ? 'slide-left active' : 'slide-left'}`}>
              {/* Background Story */}
              <Card className="story-card mb-4">
                <Card.Body className="p-4">
                  <div className="card-header-custom mb-3">
                    <div className="card-icon">
                      <i className="fas fa-user-graduate"></i>
                    </div>
                    <h3 className="card-title">My Journey</h3>
                  </div>
                  <p className="story-text">{profileData.summary}</p>
                  <div className="story-decoration"></div>
                </Card.Body>
              </Card>

              {/* Education & Skills Grid */}
              <Row className="g-4">
                {/* Education Card */}
                <Col md={6}>
                  <Card className="info-card education-card h-100">
                    <Card.Body className="p-4">
                      <div className="card-header-custom mb-4">
                        <div className="card-icon education-icon">
                          <i className="fas fa-graduation-cap"></i>
                        </div>
                        <h3 className="card-title">Education</h3>
                      </div>
                      
                      <div className="education-timeline">
                        {education.map((edu, index) => (
                          <div key={index} className="timeline-item">
                            <div className="timeline-dot"></div>
                            <div className="timeline-content">
                              <div className="education-header">
                                <h4 className="institution-name">{edu.school}</h4>
                                <div className="period-badge">{edu.period}</div>
                              </div>
                              <p className="degree-name">{edu.degree}</p>
                              {edu.achievements && (
                                <div className="achievements-list">
                                  {edu.achievements.slice(0, 2).map((achievement, aIndex) => (
                                    <div key={aIndex} className="achievement-item">
                                      <i className="fas fa-star achievement-star"></i>
                                      <span>{achievement}</span>
                                    </div>
                                  ))}
                                </div>
                              )}
                            </div>
                          </div>
                        ))}
                      </div>
                    </Card.Body>
                  </Card>
                </Col>

                {/* Skills Preview Card */}
                <Col md={6}>
                  <Card className="info-card skills-card h-100">
                    <Card.Body className="p-4">
                      <div className="card-header-custom mb-4">
                        <div className="card-icon skills-icon">
                          <i className="fas fa-code"></i>
                        </div>
                        <h3 className="card-title">Top Skills</h3>
                      </div>
                      
                      <div className="skills-preview">
                        {Object.entries(technicalSkills).map(([category, skills], index) => (
                          <div key={index} className="skill-category-preview">
                            <div className="category-header-mini">
                              <div className="category-dot" style={{ 
                                background: index === 0 ? '#667eea' : 
                                           index === 1 ? '#f5576c' : 
                                           index === 2 ? '#4facfe' : '#43e97b' 
                              }}></div>
                              <span className="category-name">{category}</span>
                            </div>
                            <div className="skills-mini-grid">
                              {skills.slice(0, 4).map((skill, skillIndex) => (
                                <span key={skillIndex} className="skill-mini-badge">
                                  {skill}
                                </span>
                              ))}
                              {skills.length > 4 && (
                                <span className="skill-mini-badge more-skills">
                                  +{skills.length - 4}
                                </span>
                              )}
                            </div>
                          </div>
                        ))}
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </div>
          </Col>
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

          /* Profile Section Styles */
          .profile-section {
            position: relative;
            z-index: 2;
          }

          .profile-image-container {
            position: relative;
            display: inline-block;
            margin-bottom: 2rem;
          }

          .profile-glow-ring {
            position: absolute;
            top: -20px;
            left: -20px;
            right: -20px;
            bottom: -20px;
            border-radius: 50%;
            background: linear-gradient(45deg, #667eea, #764ba2, #f093fb, #f5576c);
            background-size: 400% 400%;
            animation: gradientRotate 4s ease-in-out infinite;
            opacity: 0.3;
            filter: blur(10px);
          }

          @keyframes gradientRotate {
            0%, 100% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
          }

          .profile-particles {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            border-radius: 50%;
            overflow: hidden;
          }

          .particle {
            position: absolute;
            width: 6px;
            height: 6px;
            background: linear-gradient(45deg, #667eea, #764ba2);
            border-radius: 50%;
            opacity: 0.6;
          }

          .particle-1 {
            top: 10%;
            left: 20%;
            animation: float 3s ease-in-out infinite;
          }

          .particle-2 {
            top: 20%;
            right: 15%;
            animation: float 4s ease-in-out infinite reverse;
          }

          .particle-3 {
            bottom: 15%;
            left: 15%;
            animation: float 3.5s ease-in-out infinite;
          }

          .particle-4 {
            bottom: 20%;
            right: 20%;
            animation: float 4.5s ease-in-out infinite reverse;
          }

          @keyframes float {
            0%, 100% { transform: translateY(0px) scale(1); opacity: 0.6; }
            50% { transform: translateY(-10px) scale(1.2); opacity: 1; }
          }

          .profile-image-wrapper {
            position: relative;
            width: 280px;
            height: 280px;
            border-radius: 50%;
            overflow: hidden;
            z-index: 2;
          }

          .profile-image {
            width: 100%;
            height: 100%;
            object-fit: cover;
            transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          }

          .profile-image-wrapper:hover .profile-image {
            transform: scale(1.1);
          }

          .image-border {
            position: absolute;
            top: -4px;
            left: -4px;
            right: -4px;
            bottom: -4px;
            border-radius: 50%;
            background: linear-gradient(45deg, #667eea, #764ba2);
            z-index: -1;
          }

          .image-shine {
            position: absolute;
            top: 0;
            left: -100%;
            width: 100%;
            height: 100%;
            background: linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent);
            transition: left 0.8s;
          }

          .profile-image-wrapper:hover .image-shine {
            left: 100%;
          }

          /* Profile Info Styles */
          .profile-info {
            max-width: 350px;
            margin: 0 auto;
          }

          .name-container {
            text-align: center;
          }

          .profile-name {
            font-size: 1.8rem;
            font-weight: 700;
            color: #2d3748;
            margin-bottom: 0.5rem;
            position: relative;
          }

          .typing-animation {
            position: relative;
            display: inline-block;
          }

          .profile-title {
            color: #667eea;
            font-size: 1.1rem;
            font-weight: 600;
            position: relative;
          }

          .profile-title::after {
            content: '|';
            color: #667eea;
            animation: blink 1s infinite;
            margin-left: 2px;
          }

          @keyframes blink {
            0%, 50% { opacity: 1; }
            51%, 100% { opacity: 0; }
          }

          .location-container {
            display: flex;
            justify-content: center;
          }

          .location-badge {
            display: flex;
            align-items: center;
            gap: 8px;
            background: rgba(255, 255, 255, 0.9);
            padding: 10px 20px;
            border-radius: 25px;
            box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
            backdrop-filter: blur(10px);
            border: 1px solid rgba(255, 255, 255, 0.2);
            transition: all 0.3s ease;
          }

          .location-badge:hover {
            transform: translateY(-2px);
            box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
          }

          .location-icon {
            color: #f5576c;
            font-size: 1rem;
          }

          .section-subtitle {
            font-size: 1.1rem;
            font-weight: 700;
            color: #2d3748;
            text-align: center;
            margin-bottom: 1rem;
          }

          .languages-container {
            display: flex;
            flex-direction: column;
            gap: 12px;
          }

          .language-badge {
            display: flex;
            align-items: center;
            gap: 12px;
            background: rgba(255, 255, 255, 0.9);
            padding: 12px 16px;
            border-radius: 15px;
            box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08);
            backdrop-filter: blur(10px);
            border: 1px solid rgba(255, 255, 255, 0.2);
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          }

          .language-badge:hover {
            transform: translateX(8px);
            box-shadow: 0 8px 25px rgba(102, 126, 234, 0.15);
            border-color: #667eea;
          }

          .language-icon {
            width: 32px;
            height: 32px;
            background: linear-gradient(135deg, #667eea, #764ba2);
            border-radius: 8px;
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
            font-size: 0.9rem;
          }

          /* Card Styles */
          .story-card,
          .info-card {
            background: rgba(255, 255, 255, 0.95);
            backdrop-filter: blur(10px);
            border: 1px solid rgba(255, 255, 255, 0.2) !important;
            border-radius: 20px !important;
            box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
            transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
            position: relative;
            overflow: hidden;
          }

          .story-card::before,
          .info-card::before {
            content: '';
            position: absolute;
            top: 0;
            left: -100%;
            width: 100%;
            height: 100%;
            background: linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent);
            transition: left 0.7s;
          }

          .story-card:hover::before,
          .info-card:hover::before {
            left: 100%;
          }

          .story-card:hover,
          .info-card:hover {
            transform: translateY(-8px);
            box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
          }

          .card-header-custom {
            display: flex;
            align-items: center;
            gap: 12px;
          }

          .card-icon {
            width: 48px;
            height: 48px;
            border-radius: 12px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 1.2rem;
            color: white;
            background: linear-gradient(135deg, #667eea, #764ba2);
            box-shadow: 0 4px 15px rgba(102, 126, 234, 0.3);
          }

          .education-icon {
            background: linear-gradient(135deg, #f093fb, #f5576c);
            box-shadow: 0 4px 15px rgba(245, 87, 108, 0.3);
          }

          .skills-icon {
            background: linear-gradient(135deg, #4facfe, #00f2fe);
            box-shadow: 0 4px 15px rgba(79, 172, 254, 0.3);
          }

          .card-title {
            font-size: 1.3rem;
            font-weight: 700;
            color: #2d3748;
            margin: 0;
          }

          .story-text {
            color: #4a5568;
            line-height: 1.7;
            font-size: 1rem;
            position: relative;
            z-index: 2;
          }

          .story-decoration {
            position: absolute;
            bottom: 10px;
            right: 20px;
            width: 60px;
            height: 60px;
            background: linear-gradient(135deg, #667eea, #764ba2);
            border-radius: 50%;
            opacity: 0.1;
          }

          /* Education Timeline */
          .education-timeline {
            position: relative;
          }

          .timeline-item {
            position: relative;
            padding-left: 30px;
            margin-bottom: 24px;
          }

          .timeline-item:last-child {
            margin-bottom: 0;
          }

          .timeline-dot {
            position: absolute;
            left: 0;
            top: 8px;
            width: 12px;
            height: 12px;
            background: linear-gradient(135deg, #f093fb, #f5576c);
            border-radius: 50%;
            box-shadow: 0 0 0 4px rgba(245, 87, 108, 0.2);
          }

          .timeline-item:not(:last-child)::before {
            content: '';
            position: absolute;
            left: 5px;
            top: 20px;
            width: 2px;
            height: calc(100% + 4px);
            background: linear-gradient(to bottom, #f093fb, #f5576c);
            opacity: 0.3;
          }

          .education-header {
            display: flex;
            justify-content: space-between;
            align-items: flex-start;
            margin-bottom: 8px;
            gap: 12px;
          }

          .institution-name {
            font-size: 1rem;
            font-weight: 700;
            color: #2d3748;
            margin: 0;
            flex: 1;
            line-height: 1.3;
          }

          .period-badge {
            background: linear-gradient(135deg, #f093fb, #f5576c);
            color: white;
            padding: 4px 12px;
            border-radius: 12px;
            font-size: 0.75rem;
            font-weight: 600;
            white-space: nowrap;
          }

          .degree-name {
            color: #667eea;
            font-weight: 600;
            margin-bottom: 12px;
            font-size: 0.9rem;
          }

          .achievements-list {
            display: flex;
            flex-direction: column;
            gap: 6px;
          }

          .achievement-item {
            display: flex;
            align-items: flex-start;
            gap: 8px;
            font-size: 0.85rem;
            color: #4a5568;
            line-height: 1.4;
          }

          .achievement-star {
            color: #f093fb;
            font-size: 0.7rem;
            margin-top: 2px;
            flex-shrink: 0;
          }

          /* Skills Preview */
          .skills-preview {
            display: flex;
            flex-direction: column;
            gap: 20px;
          }

          .skill-category-preview {
            border-bottom: 1px solid #e2e8f0;
            padding-bottom: 16px;
          }

          .skill-category-preview:last-child {
            border-bottom: none;
            padding-bottom: 0;
          }

          .category-header-mini {
            display: flex;
            align-items: center;
            gap: 10px;
            margin-bottom: 12px;
          }

          .category-dot {
            width: 12px;
            height: 12px;
            border-radius: 50%;
            box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.2);
          }

          .category-name {
            font-size: 0.9rem;
            font-weight: 600;
            color: #2d3748;
          }

          .skills-mini-grid {
            display: flex;
            flex-wrap: wrap;
            gap: 6px;
          }

          .skill-mini-badge {
            background: linear-gradient(135deg, #f8f9fa, #e9ecef);
            color: #495057;
            padding: 4px 10px;
            border-radius: 12px;
            font-size: 0.75rem;
            font-weight: 500;
            border: 1px solid #dee2e6;
            transition: all 0.3s ease;
          }

          .skill-mini-badge:hover {
            background: linear-gradient(135deg, #e9ecef, #dee2e6);
            transform: translateY(-1px);
          }

          .more-skills {
            background: linear-gradient(135deg, #4facfe, #00f2fe);
            color: white !important;
            border-color: #4facfe;
          }

          /* Animations */
          .slide-up {
            opacity: 0;
            transform: translateY(40px);
            transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
          }

          .slide-up.active {
            opacity: 1;
            transform: translateY(0);
          }

          .slide-left {
            opacity: 0;
            transform: translateX(40px);
            transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
            transition-delay: 0.2s;
          }

          .slide-left.active {
            opacity: 1;
            transform: translateX(0);
          }

          .slide-right {
            opacity: 0;
            transform: translateX(-40px);
            transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
            transition-delay: 0.1s;
          }

          .slide-right.active {
            opacity: 1;
            transform: translateX(0);
          }

          /* Responsive Design */
          @media (max-width: 992px) {
            .profile-image-wrapper {
              width: 220px;
              height: 220px;
            }

            .slide-left,
            .slide-right {
              transform: translateY(30px);
            }

            .slide-left.active,
            .slide-right.active {
              transform: translateY(0);
            }
          }

          @media (max-width: 768px) {
            .section-fullscreen {
              padding: 3rem 0;
            }

            .display-4 {
              font-size: 2.5rem;
            }

            .profile-image-wrapper {
              width: 200px;
              height: 200px;
            }

            .profile-name {
              font-size: 1.6rem;
            }

            .education-header {
              flex-direction: column;
              gap: 8px;
            }

            .period-badge {
              align-self: flex-start;
            }
          }

          @media (max-width: 576px) {
            .section-fullscreen {
              padding: 2rem 0;
            }

            .display-4 {
              font-size: 2rem;
            }

            .profile-image-wrapper {
              width: 180px;
              height: 180px;
            }

            .profile-name {
              font-size: 1.4rem;
            }

            .profile-title {
              font-size: 1rem;
            }

            .languages-container {
              gap: 8px;
            }

            .language-badge {
              padding: 10px 14px;
            }

            .story-card:hover,
            .info-card:hover {
              transform: translateY(-4px);
            }
          }
        `}
      </style>
    </section>
  );
};

export default AboutSection;