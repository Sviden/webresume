// CV Data Extractor Utility
// This file contains structured data extracted from myCV.pdf
// Update this file with your actual CV information

export const personalInfo = {
  name: "Svitlana Denesiuk",
  title: "Frontend Developer",
  email: "your.email@example.com", // Update with real email
  phone: "+1 (555) 123-4567", // Update with real phone
  location: "Your City, Country", // Update with real location
  linkedin: "linkedin.com/in/yourprofile", // Update with real LinkedIn
  github: "github.com/yourusername", // Update with real GitHub
};

export const aboutInfo = {
  summary: `Hi! I'm Svitlana, a passionate Frontend Developer with a strong focus on 
creating beautiful, responsive, and user-friendly web applications. With 
extensive experience in modern web technologies, I enjoy transforming 
creative ideas into functional digital experiences.

My journey in web development began with a fascination for the intersection 
of design and technology. I specialize in React ecosystem development, 
responsive design, and creating interactive user interfaces that provide 
exceptional user experiences across all devices.

When I'm not coding, I enjoy staying up-to-date with the latest web 
development trends, contributing to open-source projects, and continuously 
learning new technologies to enhance my skill set. I believe in writing 
clean, maintainable code and following best practices in software development.

I'm always excited to work on challenging projects that push the boundaries 
of what's possible on the web. Feel free to explore my skills and experience, 
and don't hesitate to reach out if you'd like to collaborate!`,
};

export const skillsInfo = {
  frontend: [
    { name: "React & React Ecosystem", level: "Expert" },
    { name: "JavaScript (ES6+)", level: "Expert" },
    { name: "TypeScript", level: "Advanced" },
    { name: "HTML5 & CSS3", level: "Expert" },
    { name: "SCSS/Sass", level: "Advanced" },
    { name: "Responsive Design", level: "Expert" },
  ],
  libraries: [
    { name: "Redux & Context API", level: "Advanced" },
    { name: "Material-UI & Styled Components", level: "Advanced" },
    { name: "GSAP Animations", level: "Intermediate" },
  ],
  tools: [
    { name: "Git", level: "Advanced" },
    { name: "Webpack & Vite", level: "Intermediate" },
    { name: "REST APIs", level: "Advanced" },
    { name: "Testing (Jest, React Testing Library)", level: "Intermediate" },
    { name: "Node.js & Express", level: "Intermediate" },
  ],
};

export const experienceInfo = [
  {
    title: "Frontend Developer",
    company: "AutoInterviewer",
    period: "January 2025 - May 2025",
    link: "https://auto-interviewer.com/",
    description: `Spearheaded the front-end development and overall UI/UX design for Auto
    Interviewer, a web application that automates interview processes.
    \n Created the entire user interface from scratch using React.js, Material UI, and SCSS.
    \n Developed all front-end logic and integrated APIs using Axios, ensuring smooth
    communication between the UI and back-end services.
    \n Collaborated with co-founders to define product vision and drive continuous
    improvements based on user feedback.`,
  },
  {
    title: "Frontend Developer",
    company: "Greenroad",
    period: "May 2024 - January 2025",
    description: `Developed the company's main client gateway from scratch using React.js.
    \n Improved user experience by creating a smooth and responsive interface.
    \n Collaborated closely with product managers and designers to deliver features on
    time.
    \n Tech Stack: JavaScript, TypeScript, SQL, React.js, Redux, HTML, CSS, SCSS,
    Material UI.`,
  },
  {
    title: "Full Stack Developer",
    company: "Homaze",
    period: "March 2023 - November 2023",
    description: `Developed and maintained a specialized application for real estate professionals with
    a focus on performance and user experience.
    \n Refined database queries and reduced application refresh rates for efficiency.
    \n Contributed to back-end development and ensured seamless integration with
    front-end components.
    \n Tech Stack: JavaScript, TypeScript, Node.js, Express.js, MySQL, SQL, React.js,
    HTML, CSS, SCSS, Material UI.
`,
  },
  {
    title: "Full Stack Developer",
    company: "TruffleLive",
    period: "June 2022 - November 2022",
    description: `Led the development of a translation management system website from the ground
    up.
        \n Implemented mobile-friendly design and optimized usability for end-users.
        \n Collaborated with stakeholders to meet user requirements and expectations.
        \n Tech Stack: JavaScript, MongoDB, Node.js, React.js, HTML, CSS, Styled
        Components, Express.js`,
  },
];

export const educationInfo = [
  {
    degree: "Master of Science in Management",
    institution: "Jagiellonian University, Krakow, Poland",
    period: "October 2016 - August 2020",
  },
  {
    degree: "Bachelor of Science in Tourism Management and Logistics",
    institution: "Higher School of Administration, Bielsko-Biala, Poland",
    period: "October 2013 - August 2016",
  },
];

export const certificationsInfo = [
  {
    name: "Full Stack Developer (React.js)",
    issuer: "She-codes",
    period: "October 2021 - April 2022",
    description:
      "Comprehensive full stack development training focusing on React.js and modern web technologies.",
  },
  {
    name: "Advanced JavaScript",
    issuer: "She-codes",
    period: "May 2021 - October 2021",
    description:
      "In-depth JavaScript training covering advanced concepts and modern ES6+ features.",
  },
  {
    name: "Web Developer Bootcamp",
    issuer: "Udemy",
    period: "January 2021 - May 2021",
    description:
      "Complete web development bootcamp covering HTML, CSS, JavaScript, and modern frameworks.",
  },
];

export const languagesInfo = [
  { language: "English", level: "Advanced" },
  { language: "Polish", level: "Proficient" },
  { language: "Ukrainian", level: "Native" },
  { language: "Russian", level: "Native" },
  { language: "Hebrew", level: "Intermediate" },
];

// Helper function to extract CV data from PDF (placeholder)
export const extractCVData = async (pdfPath) => {
  return {
    personalInfo,
    aboutInfo,
    skillsInfo,
    experienceInfo,
    educationInfo,
    certificationsInfo,
  };
};
