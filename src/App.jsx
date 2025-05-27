import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { Toaster, toast } from "sonner";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import ExperienceSection from "./components/ExperienceSection";
import SkillsSection from "./components/SkillsSection";
import ProjectsSection from "./components/ProjectsSection";
import CertificationsSection from "./components/CertificationsSection";
import { profileData, education, experience, projects, certifications } from './components/data';

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [isAnimated, setIsAnimated] = useState({});

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section[id]');
      const scrollPosition = window.scrollY + 300;

      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveSection(sectionId);
          if (!isAnimated[sectionId]) {
            setIsAnimated(prev => ({ ...prev, [sectionId]: true }));
          }
        }
      });
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);
    setTimeout(handleScroll, 100);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isAnimated]);

  const projectCategories = {
    "Web Development": projects.filter(project => 
      project.tools.some(tool => ["React", "HTML", "CSS", "JavaScript", "Bootstrap", "Laravel"].includes(tool))
    ),
    "Mobile Development": projects.filter(project => 
      project.tools.some(tool => ["Flutter", "Dart"].includes(tool))
    ),
    "Data Science & AI": projects.filter(project => 
      project.tools.some(tool => ["Python", "TensorFlow", "Keras", "Scikit-learn", "NLP", "BERT"].includes(tool))
    )
  };

  const technicalSkills = {
    "Programming Languages": ["Python", "Java", "C", "C++", "JavaScript", "PHP", "SQL", "Dart"],
    "Frameworks & Libraries": ["React", "Laravel", "Express.js", "Flutter", "Bootstrap", "TensorFlow", "Keras"],
    "Databases": ["MySQL", "Oracle Database", "MS SQL Server", "Firebase", "MongoDB"],
    "Tools & Platforms": ["Git", "GitHub", "Postman", "Firebase", "VS Code", "Power BI", "Google Colab", "CUDA"]
  };

  const handleContactSubmit = (e) => {
    e.preventDefault();
    toast.success("Message sent successfully!");
    e.target.reset();
  };

  const getCategoryForProject = (project, categories) => {
    for (const [category, projects] of Object.entries(categories)) {
      if (projects.some(p => p.title === project.title)) {
        return category;
      }
    }
    return "Other";
  };

  const getCategoryColor = (project, categories) => {
    const category = getCategoryForProject(project, categories);
    switch (category) {
      case "Web Development": return "#4c6ef5";
      case "Mobile Development": return "#40c057";
      case "Data Science & AI": return "#be4bdb";
      default: return "#495057";
    }
  };

  return (
    <div className="App">
      <Toaster position="top-right" richColors />
      <style>
      {`
        .App {
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
          background-color: #f8f9fa;
        }
      `}
      </style>
      <main className="main-content">
        <HeroSection isAnimated={isAnimated.home} profileData={profileData} />
        <AboutSection isAnimated={isAnimated.about} profileData={profileData} education={education} technicalSkills={technicalSkills} />
        <ExperienceSection isAnimated={isAnimated.experience} experience={experience} />
        <SkillsSection isAnimated={isAnimated.skills} technicalSkills={technicalSkills} />
        <ProjectsSection 
          isAnimated={isAnimated.projects} 
          projects={projects} 
          projectCategories={projectCategories} 
          getCategoryForProject={getCategoryForProject} 
          getCategoryColor={getCategoryColor} 
        />
        <CertificationsSection isAnimated={isAnimated.certifications} certifications={certifications} />
      </main>
    </div>
  );
}

export default App;