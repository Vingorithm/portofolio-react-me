import React from "react";
import { Container, Card } from "react-bootstrap";
import AsistenPBOImage from '../assets/org4.jpg';
import AsistenPKBImage from '../assets/org5.jpg';
import TentorKSPImage from '../assets/org1.png';
import IfestImage from '../assets/org3.png';
import HimaforkaImage from '../assets/org2.png';

const ExperienceSection = ({ isAnimated, experience }) => {
  // Map experience titles to their corresponding images
  const getExperienceImage = (title, organization) => {
    if (title.toLowerCase().includes('object-oriented programming') || title.toLowerCase().includes('pbo')) {
      return AsistenPBOImage;
    } else if (title.toLowerCase().includes('artificial intelligence') || title.toLowerCase().includes('pkb')) {
      return AsistenPKBImage;
    } else if (title.toLowerCase().includes('mentor') || organization.toLowerCase().includes('studi pemrograman')) {
      return TentorKSPImage;
    } else if (organization.toLowerCase().includes('informatika festival') || title.toLowerCase().includes('secretariat')) {
      return IfestImage;
    } else if (organization.toLowerCase().includes('himpunan') || title.toLowerCase().includes('apres')) {
      return HimaforkaImage;
    }
    return HimaforkaImage; // Default image
  };

  // Get category gradient based on experience type
  const getCategoryGradient = (title, organization) => {
    if (title.toLowerCase().includes('assistant lecturer') || title.toLowerCase().includes('lecturer')) {
      return "linear-gradient(135deg, #667eea 0%, #764ba2 100%)";
    } else if (title.toLowerCase().includes('mentor') || title.toLowerCase().includes('tutor')) {
      return "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)";
    } else if (organization.toLowerCase().includes('himpunan') || title.toLowerCase().includes('council') || title.toLowerCase().includes('coordinator')) {
      return "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)";
    }
    return "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)";
  };

  // Get icon based on experience type
  const getExperienceIcon = (title, organization) => {
    if (title.toLowerCase().includes('assistant lecturer') || title.toLowerCase().includes('lecturer')) {
      return 'fas fa-chalkboard-teacher';
    } else if (title.toLowerCase().includes('mentor') || title.toLowerCase().includes('tutor')) {
      return 'fas fa-user-graduate';
    } else if (organization.toLowerCase().includes('himpunan') || title.toLowerCase().includes('council')) {
      return 'fas fa-users';
    } else if (title.toLowerCase().includes('coordinator') || title.toLowerCase().includes('secretariat')) {
      return 'fas fa-tasks';
    }
    return 'fas fa-briefcase';
  };

  return (
    <section id="experience" className="section-fullscreen d-flex align-items-center">
      <Container>
        <div className={`section-header text-center mb-5 ${isAnimated ? 'slide-up active' : 'slide-up'}`}>
          <h2 className="display-4 fw-bold mb-3">Professional Experience</h2>
          <p className="lead text-muted mb-4">My journey in education, leadership, and technology</p>
          <div className="header-line"></div>
        </div>
        
        <div className="experience-timeline">
          {experience.map((exp, index) => (
            <div
              key={index}
              className={`experience-item ${index % 2 === 0 ? 'left' : 'right'} ${isAnimated ? 'fade-in active' : 'fade-in'}`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="timeline-marker">
                <div 
                  className="marker-inner"
                  style={{ background: getCategoryGradient(exp.title, exp.organization) }}
                >
                  <i className={getExperienceIcon(exp.title, exp.organization)}></i>
                </div>
                <div className="marker-glow"></div>
              </div>

              <Card className="experience-card border-0">
                {/* Image Section */}
                <div className="experience-image-container">
                  <img 
                    src={getExperienceImage(exp.title, exp.organization)} 
                    alt={`${exp.organization} experience`}
                    className="experience-image"
                  />
                  <div className="image-overlay">
                    <div 
                      className="overlay-icon"
                      style={{ background: getCategoryGradient(exp.title, exp.organization) }}
                    >
                      <i className={getExperienceIcon(exp.title, exp.organization)}></i>
                    </div>
                  </div>
                  <div className="image-shine"></div>
                </div>

                <Card.Body className="p-4">
                  {/* Period Badge */}
                  <div className="period-badge mb-3">
                    <i className="fa fa-calendar me-2"></i>
                    <span>{exp.period}</span>
                  </div>

                  {/* Title */}
                  <h3 className="experience-title mb-2">{exp.title}</h3>
                  
                  {/* Organization */}
                  <div className="organization-info mb-3">
                    <i className="fa fa-building me-2"></i>
                    <span className="organization-name">{exp.organization}</span>
                  </div>

                  {/* Description */}
                  <p className="experience-description mb-4">{exp.description}</p>

                  {/* Achievements */}
                  <div className="achievements-section">
                    <h5 className="achievements-title mb-3">
                      <i className="fas fa-trophy me-2"></i>
                      Key Achievements
                    </h5>
                    <div className="achievements-list">
                      {exp.achievements.map((achievement, aIndex) => (
                        <div 
                          key={aIndex} 
                          className="achievement-item"
                          style={{ animationDelay: `${(index * 0.2) + (aIndex * 0.1)}s` }}
                        >
                          <div 
                            className="achievement-bullet"
                            style={{ background: getCategoryGradient(exp.title, exp.organization) }}
                          ></div>
                          <span className="achievement-text">{achievement}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </div>
          ))}
          
          {/* Timeline Line */}
          <div className="timeline-line">
            <div className="line-gradient"></div>
          </div>
        </div>
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

          .experience-timeline {
            position: relative;
            padding: 2rem 0;
          }

          .timeline-line {
            position: absolute;
            left: 50%;
            top: 0;
            bottom: 0;
            width: 6px;
            transform: translateX(-50%);
            border-radius: 3px;
            background: #e9ecef;
            z-index: 1;
          }

          .line-gradient {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: linear-gradient(to bottom, #667eea 0%, #764ba2 50%, #43e97b 100%);
            border-radius: 3px;
            animation: lineGrow 2s ease-out forwards;
            transform-origin: top;
            transform: scaleY(0);
          }

          @keyframes lineGrow {
            to {
              transform: scaleY(1);
            }
          }

          .experience-item {
            position: relative;
            width: 45%;
            margin-bottom: 3rem;
            z-index: 2;
          }

          .experience-item.left {
            left: 5%;
          }

          .experience-item.right {
            left: 50%;
          }

          .timeline-marker {
            position: absolute;
            top: 30px;
            width: 60px;
            height: 60px;
            z-index: 3;
          }

          .experience-item.left .timeline-marker {
            right: -75px;
          }

          .experience-item.right .timeline-marker {
            left: -75px;
          }

          .marker-inner {
            width: 60px;
            height: 60px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
            font-size: 1.5rem;
            position: relative;
            z-index: 2;
            box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
            transition: all 0.3s ease;
          }

          .marker-glow {
            position: absolute;
            top: -10px;
            left: -10px;
            right: -10px;
            bottom: -10px;
            border-radius: 50%;
            background: radial-gradient(circle, rgba(102, 126, 234, 0.3) 0%, transparent 70%);
            opacity: 0;
            transition: opacity 0.3s ease;
            animation: pulse 2s infinite;
          }

          @keyframes pulse {
            0%, 100% { transform: scale(1); opacity: 0.3; }
            50% { transform: scale(1.2); opacity: 0.1; }
          }

          .experience-card {
            background: rgba(255, 255, 255, 0.95);
            backdrop-filter: blur(10px);
            border-radius: 20px !important;
            overflow: hidden;
            transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
            box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
            position: relative;
          }

          .experience-card::before {
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

          .experience-card:hover::before {
            left: 100%;
          }

          .experience-card:hover {
            transform: translateY(-10px) scale(1.02);
            box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
          }

          .experience-card:hover .marker-inner {
            transform: scale(1.1) rotate(5deg);
          }

          .experience-image-container {
            position: relative;
            height: 200px;
            overflow: hidden;
          }

          .experience-image {
            width: 100%;
            height: 100%;
            object-fit: cover;
            transition: all 0.5s ease;
            filter: brightness(0.9);
          }

          .experience-card:hover .experience-image {
            transform: scale(1.1);
            filter: brightness(1);
          }

          .image-overlay {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: linear-gradient(
              45deg, 
              rgba(0, 0, 0, 0.7) 0%, 
              rgba(0, 0, 0, 0.3) 50%, 
              rgba(0, 0, 0, 0.7) 100%
            );
            display: flex;
            align-items: center;
            justify-content: center;
            opacity: 0;
            transition: all 0.3s ease;
          }

          .experience-card:hover .image-overlay {
            opacity: 1;
          }

          .overlay-icon {
            width: 80px;
            height: 80px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
            font-size: 2rem;
            transform: scale(0.8);
            transition: all 0.3s ease;
            box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
          }

          .experience-card:hover .overlay-icon {
            transform: scale(1) rotate(360deg);
          }

          .image-shine {
            position: absolute;
            top: 0;
            left: -100%;
            width: 100%;
            height: 100%;
            background: linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent);
            transition: left 0.6s;
          }

          .experience-card:hover .image-shine {
            left: 100%;
          }

          .period-badge {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            padding: 8px 16px;
            border-radius: 20px;
            font-size: 0.85rem;
            font-weight: 600;
            display: inline-flex;
            align-items: center;
            box-shadow: 0 4px 15px rgba(102, 126, 234, 0.3);
          }

          .experience-title {
            font-size: 1.4rem;
            font-weight: 700;
            color: #2d3748;
            line-height: 1.3;
            margin-bottom: 0.5rem;
          }

          .organization-info {
            display: flex;
            align-items: center;
            color: #4a5568;
            font-weight: 500;
            margin-bottom: 1rem;
          }

          .organization-name {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            font-weight: 600;
          }

          .experience-description {
            color: #4a5568;
            line-height: 1.6;
            font-size: 0.95rem;
          }

          .achievements-title {
            font-size: 1.1rem;
            font-weight: 700;
            color: #2d3748;
            display: flex;
            align-items: center;
          }

          .achievements-title i {
            background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
          }

          .achievements-list {
            display: flex;
            flex-direction: column;
            gap: 12px;
          }

          .achievement-item {
            display: flex;
            align-items: flex-start;
            gap: 12px;
            opacity: 0;
            transform: translateX(-20px);
            animation: slideInAchievement 0.6s ease forwards;
          }

          @keyframes slideInAchievement {
            to {
              opacity: 1;
              transform: translateX(0);
            }
          }

          .achievement-bullet {
            width: 8px;
            height: 8px;
            border-radius: 50%;
            margin-top: 6px;
            flex-shrink: 0;
            position: relative;
          }

          .achievement-bullet::after {
            content: '';
            position: absolute;
            top: -4px;
            left: -4px;
            right: -4px;
            bottom: -4px;
            border-radius: 50%;
            background: inherit;
            opacity: 0.3;
            animation: bulletPulse 2s infinite;
          }

          @keyframes bulletPulse {
            0%, 100% { transform: scale(1); opacity: 0.3; }
            50% { transform: scale(1.5); opacity: 0.1; }
          }

          .achievement-text {
            color: #4a5568;
            line-height: 1.5;
            font-size: 0.9rem;
          }

          /* Animations */
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
          @media (max-width: 992px) {
            .experience-item {
              width: 80%;
              left: 10% !important;
            }

            .timeline-line {
              left: 30px;
            }

            .timeline-marker {
              left: 5px !important;
              right: auto !important;
            }

            .experience-item.left .timeline-marker,
            .experience-item.right .timeline-marker {
              left: 5px;
            }

            .marker-inner {
              width: 50px;
              height: 50px;
              font-size: 1.2rem;
            }
          }

          @media (max-width: 768px) {
            .section-fullscreen {
              padding: 3rem 0;
            }

            .display-4 {
              font-size: 2.5rem;
            }

            .experience-item {
              width: 90%;
              left: 5% !important;
            }

            .experience-image-container {
              height: 150px;
            }

            .experience-card:hover {
              transform: translateY(-5px) scale(1.01);
            }

            .overlay-icon {
              width: 60px;
              height: 60px;
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

            .experience-title {
              font-size: 1.2rem;
            }

            .marker-inner {
              width: 40px;
              height: 40px;
              font-size: 1rem;
            }

            .timeline-line {
              left: 25px;
            }
          }

          /* Enhanced hover effects for desktop */
          @media (min-width: 992px) {
            .experience-card:hover {
              transform: translateY(-15px) scale(1.03);
            }
          }

          /* Dark mode compatibility */
          @media (prefers-color-scheme: dark) {
            .experience-card {
              background: rgba(30, 30, 30, 0.95);
            }
            
            .experience-title,
            .achievements-title {
              color: #e2e8f0;
            }
            
            .experience-description,
            .achievement-text {
              color: #a0aec0;
            }
          }
        `}
      </style>
    </section>
  );
};

export default ExperienceSection;