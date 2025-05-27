import React, { useState } from "react";
import { Container, Row, Col, Card, Badge } from "react-bootstrap";

const CertificationsSection = ({ isAnimated, certifications }) => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [filteredCertifications, setFilteredCertifications] = useState(certifications);

  // Categorize certifications
  const certificationCategories = {
    "Programming": certifications.filter(cert => 
      ['Javascript', 'SQL', 'Java', 'Python', 'Web Development'].some(tech => 
        cert.title.toLowerCase().includes(tech.toLowerCase())
      )
    ),
    "Database": certifications.filter(cert => 
      ['Oracle', 'Database', 'SQL'].some(tech => 
        cert.title.toLowerCase().includes(tech.toLowerCase())
      )
    ),
    "Professional": certifications.filter(cert => 
      ['English', 'Management', 'Secure', 'Data Management'].some(skill => 
        cert.title.toLowerCase().includes(skill.toLowerCase())
      )
    ),
    "Machine Learning": certifications.filter(cert => 
      ['Machine Learning', 'AI', 'Data Science'].some(tech => 
        cert.title.toLowerCase().includes(tech.toLowerCase())
      )
    )
  };

  // New object to store issuer logo URLs
  const issuerLogos = {
    "Oracle": "https://img.icons8.com/?size=100&id=39913&format=png&color=000000",
    "Sololearn": "https://upload.wikimedia.org/wikipedia/commons/5/53/SoloLearn_logo.svg",
    "Kaggle": "https://www.kaggle.com/static/images/favicon.ico",
    "EC-Council": "https://upload.wikimedia.org/wikipedia/commons/c/cb/Ec_Council_Logo.png",
    "Udemy": "https://www.udemy.com/staticx/udemy/images/v7/logo-udemy.svg",
    "British Council": "https://upload.wikimedia.org/wikipedia/commons/1/19/British_Council_logo.svg",
    "DQLab": "https://dqlab.id/files/dqlab/cache/6b8c33bdec694a9af1b696bef97d2d25_x_Thumbnail800.png"
  };

  const handleFilterClick = (category) => {
    setActiveFilter(category);
    if (category === 'All') {
      setFilteredCertifications(certifications);
    } else {
      const categoryProjects = certificationCategories[category] || [];
      setFilteredCertifications(categoryProjects);
    }
  };

  const getCertificationIcon = (cert) => {
    const title = cert.title.toLowerCase();
    const issuer = cert.issuer.toLowerCase();
    
    if (title.includes('javascript') || title.includes('web development')) {
      return 'fab fa-js-square';
    } else if (title.includes('java')) {
      return 'fab fa-java';
    } else if (title.includes('python')) {
      return 'fab fa-python';
    } else if (title.includes('sql') || title.includes('database') || issuer.includes('oracle')) {
      return 'fas fa-database';
    } else if (title.includes('machine learning') || title.includes('ai')) {
      return 'fas fa-brain';
    } else if (title.includes('secure') || title.includes('security')) {
      return 'fas fa-shield-alt';
    } else if (title.includes('english') || title.includes('language')) {
      return 'fas fa-language';
    } else if (title.includes('management') || title.includes('professional')) {
      return 'fas fa-user-tie';
    } else {
      return 'fas fa-certificate';
    }
  };

  const getCategoryForCert = (cert) => {
    for (const [category, certs] of Object.entries(certificationCategories)) {
      if (certs.some(c => c.title === cert.title)) {
        return category;
      }
    }
    return "Other";
  };

  const getCategoryGradient = (category) => {
    switch (category) {
      case "Programming": 
        return "linear-gradient(135deg, #667eea 0%, #764ba2 100%)";
      case "Database": 
        return "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)";
      case "Professional": 
        return "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)";
      case "Machine Learning": 
        return "linear-gradient(135deg, #fa709a 0%, #fee140 100%)";
      default: 
        return "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)";
    }
  };

  const getVerificationColor = (cert) => {
    if (cert.credentialId && cert.credentialId.trim() !== '') {
      return '#28a745'; // Green for verified
    }
    return '#6c757d'; // Gray for unverified
  };

  return (
    <section id="certifications" className="section-fullscreen d-flex align-items-center">
      <Container>
        <div className={`section-header text-center mb-5 ${isAnimated ? 'slide-up active' : 'slide-up'}`}>
          <h2 className="display-4 fw-bold mb-3">Professional Certifications</h2>
          <p className="lead text-muted mb-4">Continuous learning and professional development achievements</p>
          <div className="header-line"></div>
        </div>

        {/* Filter Navigation */}
        <div className={`filter-container d-flex justify-content-center mb-5 ${isAnimated ? 'slide-up active' : 'slide-up'}`} style={{ animationDelay: '0.2s' }}>
          <div className="filter-wrapper">
            <button
              className={`filter-btn ${activeFilter === 'All' ? 'active' : ''}`}
              onClick={() => handleFilterClick('All')}
            >
              <span className="filter-text">All Certifications</span>
              <div className="filter-shine"></div>
            </button>
            {Object.keys(certificationCategories).map((category, index) => (
              <button
                key={index}
                className={`filter-btn ${activeFilter === category ? 'active' : ''}`}
                onClick={() => handleFilterClick(category)}
              >
                <span className="filter-text">{category}</span>
                <div className="filter-shine"></div>
              </button>
            ))}
          </div>
        </div>

        {/* Certifications Grid */}
        <Row className="g-4 justify-content-center">
          {filteredCertifications.map((cert, index) => (
            <Col key={index} md={6} lg={4}>
              <Card
                className={`cert-card h-100 border-0 ${isAnimated ? 'fade-in active' : 'fade-in'}`}
                style={{ 
                  animationDelay: `${0.4 + (index * 0.1)}s`
                }}
              >
                {/* Certification Header */}
                <div className="cert-header">
                  <div className="cert-bg-pattern"></div>
                  <div 
                    className="cert-icon-wrapper"
                    style={{ 
                      background: getCategoryGradient(getCategoryForCert(cert))
                    }}
                  >
                    <i className={`${getCertificationIcon(cert)} cert-main-icon`}></i>
                  </div>
                  
                  {/* Category Badge */}
                  <div className="cert-category-badge">
                    <Badge
                      className="category-badge"
                      style={{
                        background: getCategoryGradient(getCategoryForCert(cert))
                      }}
                    >
                      {getCategoryForCert(cert)}
                    </Badge>
                  </div>
                  
                  {/* Verification Status */}
                  <div className="verification-status">
                    <div 
                      className="verification-dot"
                      style={{ backgroundColor: getVerificationColor(cert) }}
                    ></div>
                    <span className="verification-text">
                      {cert.credentialId && cert.credentialId.trim() !== '' ? 'Verified' : 'Completed'}
                    </span>
                  </div>
                </div>

                <Card.Body className="p-4">
                  {/* Certification Title */}
                  <h3 className="cert-title mb-3">{cert.title}</h3>

                  {/* Issuer Info */}
                  <div className="cert-issuer-info mb-3">
                    <div className="issuer-logo">
                      <img 
                        src={issuerLogos[cert.issuer] || "https://via.placeholder.com/40"} 
                        alt={`${cert.issuer} logo`} 
                        className="issuer-img"
                        style={{ width: '40px', height: '40px', objectFit: 'contain' }}
                      />
                    </div>
                    <div className="issuer-details">
                      <div className="issuer-name">{cert.issuer}</div>
                      <div className="cert-date">
                        <i className="fas fa-calendar-alt me-1"></i>
                        {cert.date}
                      </div>
                    </div>
                  </div>

                  {/* Credential ID */}
                  {cert.credentialId && cert.credentialId.trim() !== '' && (
                    <div className="credential-section mb-3">
                      <div className="credential-label">
                        <i className="fas fa-id-badge me-2"></i>
                        Credential ID
                      </div>
                      <div className="credential-id">{cert.credentialId}</div>
                    </div>
                  )}

                  {/* Action Button */}
                  <button
                    className="cert-verify-btn w-100"
                    onClick={() => {
                      // Add verification logic here if needed
                      console.log('Verify certification:', cert.title);
                    }}
                  >
                    <span className="btn-text">
                      <i className="fas fa-external-link-alt me-2"></i>
                      {cert.credentialId && cert.credentialId.trim() !== '' ? 'Verify Certificate' : 'View Details'}
                    </span>
                    <i className="fas fa-arrow-right btn-arrow"></i>
                    <div className="btn-shine"></div>
                  </button>
                </Card.Body>

                <div className="cert-glow"></div>
              </Card>
            </Col>
          ))}
        </Row>

        {/* Stats Section */}
        <div className={`cert-stats-section mt-5 ${isAnimated ? 'slide-up active' : 'slide-up'}`} style={{ animationDelay: '0.6s' }}>
          <Row className="g-4">
            <Col md={3} sm={6}>
              <div className="stat-card">
                <div className="stat-icon">
                  <i className="fas fa-certificate"></i>
                </div>
                <div className="stat-number">{certifications.length}</div>
                <div className="stat-label">Total Certifications</div>
              </div>
            </Col>
            <Col md={3} sm={6}>
              <div className="stat-card">
                <div className="stat-icon">
                  <i className="fas fa-shield-check"></i>
                </div>
                <div className="stat-number">
                  {certifications.filter(cert => cert.credentialId && cert.credentialId.trim() !== '').length}
                </div>
                <div className="stat-label">Verified Credentials</div>
              </div>
            </Col>
            <Col md={3} sm={6}>
              <div className="stat-card">
                <div className="stat-icon">
                  <i className="fas fa-building"></i>
                </div>
                <div className="stat-number">
                  {[...new Set(certifications.map(cert => cert.issuer))].length}
                </div>
                <div className="stat-label">Issuing Organizations</div>
              </div>
            </Col>
            <Col md={3} sm={6}>
              <div className="stat-card">
                <div className="stat-icon">
                  <i className="fas fa-calendar-check"></i>
                </div>
                <div className="stat-number">2024</div>
                <div className="stat-label">Latest Achievement</div>
              </div>
            </Col>
          </Row>
        </div>
      </Container>

      <style>
        {`
          .section-fullscreen {
            min-height: 100vh;
            padding: 4rem 0;
            padding-bottom: 100px; /* Add this to ensure space for the footer */
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

          /* Certification Card Styles */
          .cert-card {
            background: rgba(255, 255, 255, 0.95);
            backdrop-filter: blur(10px);
            border-radius: 24px !important;
            overflow: hidden;
            transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
            box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
            position: relative;
            border: 1px solid rgba(255, 255, 255, 0.2) !important;
          }

          .cert-card::before {
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

          .cert-card:hover::before {
            left: 100%;
          }

          .cert-card:hover {
            transform: translateY(-15px) scale(1.02);
            box-shadow: 0 25px 50px rgba(0, 0, 0, 0.15);
          }

          .cert-header {
            position: relative;
            height: 160px;
            background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
            overflow: hidden;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 20px;
          }

          .cert-bg-pattern {
            position: absolute;
            top: -30%;
            right: -30%;
            width: 120px;
            height: 120px;
            border-radius: 50%;
            background: rgba(102, 126, 234, 0.1);
            animation: float 8s ease-in-out infinite;
          }

          .cert-bg-pattern::before {
            content: '';
            position: absolute;
            top: 30px;
            left: 30px;
            width: 60px;
            height: 60px;
            border-radius: 50%;
            background: rgba(118, 75, 162, 0.1);
            animation: float 10s ease-in-out infinite reverse;
          }

          .cert-icon-wrapper {
            position: relative;
            z-index: 2;
            width: 70px;
            height: 70px;
            border-radius: 18px;
            display: flex;
            align-items: center;
            justify-content: center;
            box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
            transition: all 0.3s ease;
          }

          .cert-card:hover .cert-icon-wrapper {
            transform: scale(1.1) rotate(5deg);
          }

          .cert-main-icon {
            font-size: 1.8rem;
            color: white;
            filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.2));
          }

          .cert-category-badge {
            position: absolute;
            top: 15px;
            left: 15px;
            z-index: 3;
          }

          .category-badge {
            padding: 4px 12px;
            border-radius: 15px;
            font-size: 0.7rem;
            font-weight: 600;
            color: white !important;
            text-transform: uppercase;
            letter-spacing: 0.5px;
            box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
            border: none !important;
          }

          .verification-status {
            position: absolute;
            top: 15px;
            right: 15px;
            display: flex;
            align-items: center;
            gap: 6px;
            background: rgba(255, 255, 255, 0.9);
            padding: 6px 12px;
            border-radius: 20px;
            backdrop-filter: blur(10px);
            z-index: 3;
          }

          .verification-dot {
            width: 8px;
            height: 8px;
            border-radius: 50%;
          }

          .verification-text {
            font-size: 0.75rem;
            font-weight: 600;
            color: #495057;
          }

          .cert-glow {
            position: absolute;
            top: -50%;
            left: -50%;
            width: 200%;
            height: 200%;
            background: radial-gradient(circle, #667eea 0%, transparent 70%);
            opacity: 0;
            transition: opacity 0.3s ease;
            pointer-events: none;
          }

          .cert-card:hover .cert-glow {
            opacity: 0.1;
          }

          /* Card Body Styles */
          .cert-title {
            font-size: 1.2rem;
            font-weight: 700;
            color: #2d3748;
            line-height: 1.3;
            margin-bottom: 1rem;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            overflow: hidden;
          }

          .cert-issuer-info {
            display: flex;
            align-items: center;
            gap: 12px;
            padding: 12px;
            background: rgba(248, 249, 250, 0.8);
            border-radius: 12px;
            margin-bottom: 1rem;
          }

          .issuer-logo {
            width: 40px;
            height: 40px;
            background: white;
            border-radius: 10px;
            display: flex;
            align-items: center;
            justify-content: center;
            box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
          }

          .issuer-img {
            transition: all 0.3s ease;
          }

          .cert-card:hover .issuer-img {
            transform: scale(1.1);
            filter: brightness(1.2);
          }

          .issuer-details {
            flex: 1;
          }

          .issuer-name {
            font-weight: 600;
            color: #2d3748;
            font-size: 0.9rem;
            margin-bottom: 2px;
          }

          .cert-date {
            font-size: 0.8rem;
            color: #718096;
          }

          .credential-section {
            background: rgba(102, 126, 234, 0.1);
            padding: 12px;
            border-radius: 12px;
            border-left: 4px solid #667eea;
          }

          .credential-label {
            font-size: 0.8rem;
            font-weight: 600;
            color: #4a5568;
            margin-bottom: 6px;
            text-transform: uppercase;
            letter-spacing: 0.5px;
          }

          .credential-id {
            font-family: 'Courier New', monospace;
            font-size: 0.85rem;
            color: #2d3748;
            background: rgba(255, 255, 255, 0.8);
            padding: 6px 10px;
            border-radius: 8px;
            word-break: break-all;
          }

          .cert-verify-btn {
            position: relative;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            border: none;
            border-radius: 12px;
            padding: 12px 18px;
            color: white;
            font-weight: 600;
            display: flex;
            align-items: center;
            justify-content: space-between;
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
            overflow: hidden;
            cursor: pointer;
            font-size: 0.9rem;
          }

          .cert-verify-btn:hover {
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
            font-size: 0.8rem;
          }

          .cert-verify-btn:hover .btn-arrow {
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

          .cert-verify-btn:hover .btn-shine {
            left: 100%;
          }

          /* Stats Section */
          .cert-stats-section {
            margin-top: 4rem;
            padding: 2rem 0;
          }

          .stat-card {
            background: rgba(255, 255, 255, 0.9);
            backdrop-filter: blur(10px);
            border-radius: 20px;
            padding: 2rem 1.5rem;
            text-align: center;
            box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
            border: 1px solid rgba(255, 255, 255, 0.2);
            transition: all 0.3s ease;
            height: 100%;
          }

          .stat-card:hover {
            transform: translateY(-8px);
            box-shadow: 0 16px 40px rgba(0, 0, 0, 0.15);
          }

          .stat-icon {
            width: 60px;
            height: 60px;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 0 auto 1rem;
            color: white;
            font-size: 1.5rem;
            box-shadow: 0 8px 24px rgba(102, 126, 234, 0.3);
          }

          .stat-number {
            font-size: 2.5rem;
            font-weight: 800;
            color: #2d3748;
            margin-bottom: 0.5rem;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
          }

          .stat-label {
            font-size: 0.9rem;
            font-weight: 600;
            color: #718096;
            text-transform: uppercase;
            letter-spacing: 0.5px;
          }

          /* Animations */
          @keyframes float {
            0%, 100% { transform: translateY(0px) rotate(0deg); }
            50% { transform: translateY(-10px) rotate(180deg); }
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

            .cert-card:hover {
              transform: translateY(-8px) scale(1.01);
            }

            .cert-header {
              height: 140px;
            }

            .cert-icon-wrapper {
              width: 60px;
              height: 60px;
            }

            .cert-main-icon {
              font-size: 1.5rem;
            }

            .stat-number {
              font-size: 2rem;
            }

            .stat-icon {
              width: 50px;
              height: 50px;
              font-size: 1.2rem;
            }

            .cert-stats-section {
              margin-top: 3rem;
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

            .cert-title {
              font-size: 1.1rem;
            }

            .issuer-name {
              font-size: 0.8rem;
            }

            .cert-date {
              font-size: 0.75rem;
            }

            .credential-id {
              font-size: 0.8rem;
            }

            .stat-number {
              font-size: 1.8rem;
            }

            .stat-label {
              font-size: 0.8rem;
            }
          }

          /* Enhanced hover effects for desktop */
          @media (min-width: 992px) {
            .cert-card:hover {
              transform: translateY(-20px) scale(1.03);
            }
          }
        `}
      </style>
    </section>
  );
};

export default CertificationsSection;