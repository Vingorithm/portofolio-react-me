// src/components/data.js

export const profileData = {
  name: "Kevin Philips Tanamas",
  title: "Fullstack Developer / Informatics Student",
  location: "Kota Tasikmalaya, Indonesia",
  email: "kevinkevin.kk92@gmail.com",
  phone: "+62 813 1264 8799",
  linkedin: "https://www.linkedin.com/in/kevinphilipstanamas/",
  github: "https://github.com/Vingorithm",
  website: "https://kevinphilipstanamas.vercel.app/",
  summary: "Motivated and enthusiastic Computer Science student with hands-on experience in software development, AI, and data science. Passionate about building impactful solutions through clean code, machine learning, and efficient system architecture.",
  languages: ["Indonesian (Native)", "English (Professional)"],
};

export const education = [
  {
    school: "Universitas Atma Jaya Yogyakarta",
    degree: "Bachelor of Informatics",
    period: "Aug 2022 - Present",
    achievements: [
      "Selected as one of the recipients of the Independent Study Grant (PKKM 2024)",
      "Represented university in various coding competitions",
      "Active member of Informatics Student Association"
    ]
  },
  {
    school: "SMAK BPK Penabur Tasikmalaya",
    degree: "Math and Science",
    period: "Jul 2019 - Jul 2022",
    achievements: [
      "Represented school in the National Science Olympiad (Kompetisi Sains Nasional) in Informatics",
      "Actively participated in various programming competitions"
    ]
  }
];

export const experience = [
  {
    title: "Assistant Lecturer of Object-Oriented Programming",
    organization: "Universitas Atma Jaya Yogyakarta",
    period: "Jan 2025 - Present",
    description: "Supported the main lecturer in delivering OOP course materials, assisting students during labs, and grading assignments.",
    achievements: [
      "Guided 100+ students during lab sessions",
      "Mentored students in coding best practices",
      "Held mentoring for exam preparations"
    ]
  },
  {
    title: "C and Java Student Mentor",
    organization: "Kelompok Studi Pemrograman",
    period: "Sep 2023 - Present",
    description: "Developed tailored modules and mentored students in C and Java programming.",
    achievements: [
      "Module used by 70+ students",
      "Guided through exercises and gave feedback"
    ]
  },
  {
    title: "Assistant Lecturer of Artificial Intelligence",
    organization: "Universitas Atma Jaya Yogyakarta",
    period: "Aug 2024 - Jan 2025",
    description: "Prepared lab materials and assisted with AI algorithms like search, neural networks, and decision trees.",
    achievements: [
      "Led lab sessions for 80+ students",
      "Hands-on AI project guidance"
    ]
  },
  {
    title: "Academic and Achievement Council (APRES)",
    organization: "Himpunan Mahasiswa Informatika UAJY",
    period: "Aug 2022 - Aug 2024",
    description: "Mentored new students in academics and achievements.",
    achievements: [
      "Held UTS/UAS tutorials for 70+ students",
      "Acted as moderator and attendance tracker"
    ]
  },
  {
    title: "Secretariat Coordinator - Informatics Festival #12",
    organization: "Himpunan Mahasiswa Informatika UAJY",
    period: "Aug 2022 - Aug 2024",
    description: "Managed participants, social media, and event communication.",
    achievements: [
      "Coordinated 4 major events",
      "Maintained high engagement and feedback"
    ]
  }
];

export const projects = [
  {
    title: "Atma Cinemas",
    description: "Cinema booking app with Flutter & Laravel featuring seat selection, real-time schedule, and secure booking.",
    tools: ["Flutter", "Laravel", "MySQL", "REST API"],
    githubLink: "https://github.com/Dayaszs/1_D_Bioskop"
  },
  {
    title: "Atma AutoBid",
    description: "Real-time car auction platform using React.js and Laravel with responsive UI and bid validation.",
    tools: ["React", "Vercel", "Laravel"],
    githubLink: "https://pw-e-7-react-one.vercel.app"
  },
  {
    title: "Solar Energy Output Prediction Using CNN-LSTM",
    description: "Forecasting solar energy output using CNN-LSTM model on meteorological data.",
    tools: ["Python", "Google Colab", "TensorFlow", "Keras"],
    githubLink: "https://github.com/Vingorithm/DAC-ITS-Solar-Energy-Prediction-CNN-LSTM"
  },
  {
    title: "Loop Wear",
    description: "Modern fashion e-commerce website for urban lifestyle collections.",
    tools: ["HTML", "CSS", "JavaScript", "React", "Bootstrap"],
    githubLink: "https://loop-wear-wdc.netlify.app"
  },
  {
    title: "Jakarta AQI Classification",
    description: "ML-based classification of Jakarta's Air Quality Index using pollutant concentration data.",
    tools: ["Python", "Scikit-learn", "Jupyter"],
    githubLink: "https://github.com/Vingorithm/Jakarta-Air-Quality-Index-AQI-Classification.git"
  },
  {
    title: "Multi-Label Sentiment Analysis on Automotive Reviews",
    description: "NLP pipeline for multi-label sentiment classification on Indonesian automotive reviews.",
    tools: ["Python", "NLP", "TensorFlow", "Keras", "BERT"],
    githubLink: "https://github.com/Vingorithm"
  }
];

export const certifications = [
  { title: "Oracle Database Foundations Associate", issuer: "Oracle", date: "Dec 2024", credentialId: "1Z0-006" },
  { title: "Javascript Intermediate", issuer: "Sololearn", date: "Feb 2025", credentialId: "CC-MBRMXRAY" },
  { title: "SQL Intermediate", issuer: "Sololearn", date: "Apr 2025", credentialId: "CC-LXMHHV6B" },
  { title: "Web Development", issuer: "Sololearn", date: "Feb 2025", credentialId: "CC-BUETAVMI" },
  { title: "Java Intermediate", issuer: "Sololearn", date: "Jul 2024", credentialId: "CC-CFEJB1AC" },
  { title: "Python Intermediate", issuer: "Sololearn", date: "Aug 2024", credentialId: "CC-FZKBQSCD" },
  { title: "Introduction to Java", issuer: "Sololearn", date: "Jan 2024", credentialId: "CC-AWCKRRGD" },
  { title: "Introduction to Machine Learning", issuer: "Kaggle", date: "Apr 2024", credentialId: "" },
  { title: "Certified Secure Computer User V2", issuer: "EC-Council", date: "Aug 2023", credentialId: "ECC2540936871" },
  { title: "Certified Data Management Professional (101)", issuer: "Udemy", date: "Oct 2023", credentialId: "UC-aee55e1f-72ea-4b82-a554-25cfle64cef4" },
  { title: "British Council English Score Certification", issuer: "British Council", date: "Nov 2023", credentialId: "d072302b" },
  { title: "Database SQL Track", issuer: "DQLab", date: "Jun 2023", credentialId: "#DQLABSQLFNEEBHBQI" }
];
