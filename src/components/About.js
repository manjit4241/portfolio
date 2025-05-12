import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import styles from '../styles/About.module.css';

// Custom icon components using inline SVGs
const GitHubIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
  </svg>
);

const LinkedInIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

const InstagramIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

const LeetCodeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
    <path d="M16.102 17.93l-2.697 2.607c-.466.467-1.111.662-1.823.662s-1.357-.195-1.824-.662l-4.332-4.363c-.467-.467-.702-1.15-.702-1.863s.235-1.357.702-1.824l4.319-4.38c.467-.467 1.125-.645 1.837-.645s1.357.195 1.823.662l2.697 2.606c.514.515 1.365.497 1.9-.038.535-.536.553-1.387.039-1.901l-2.609-2.636a5.055 5.055 0 0 0-2.445-1.337l2.467-2.503c.516-.514.498-1.366-.037-1.901-.535-.535-1.387-.552-1.902-.038l-10.1 10.101c-.981.982-1.494 2.337-1.494 3.835 0 1.498.513 2.895 1.494 3.875l4.347 4.361c.981.979 2.337 1.452 3.834 1.452s2.853-.512 3.835-1.494l2.609-2.637c.514-.514.496-1.365-.039-1.9s-1.386-.553-1.899-.039zM20.811 13.01H10.666c-.702 0-1.27.604-1.27 1.346s.568 1.346 1.27 1.346h10.145c.701 0 1.27-.604 1.27-1.346s-.569-1.346-1.27-1.346z"/>
  </svg>
);

const About = () => {
  const { isDarkMode } = useContext(ThemeContext);

  const skills = [
    'JavaScript', 'React.js', 'React-Native', 'Expo', 
    'Node.js', 'Express', 'Responsive Design', 'Git', 'UI/UX Design'
  ];

  const socialLinks = [
    { 
      name: 'GitHub', 
      url: 'https://github.com/manjit4241',
      Icon: GitHubIcon 
    },
    { 
      name: 'LinkedIn', 
      url: 'https://www.linkedin.com/in/manjit-mishra-453b5927a/',
      Icon: LinkedInIcon 
    },
    { 
      name: 'Instagram', 
      url: 'https://www.instagram.com/manjit_4241',
      Icon: InstagramIcon 
    },
    { 
      name: 'LeetCode', 
      url: 'https://leetcode.com/u/Manjit_4241/',
      Icon: LeetCodeIcon 
    }
  ];

  return (
    <div className={`${styles.about} ${isDarkMode ? styles.dark : ''}`}>
      <div className={styles.container}>
        <div className={styles.aboutContent}>
          <h2 className={styles.sectionTitle}>About Me</h2>
          <p className={styles.bio}>
            Hi, I'm Manjit Mishra, a second-year engineering student passionate about 
            software development and problem-solving. Currently honing my skills in 
            Data Structures and Algorithms and exploring mobile app development with 
            React Native. I'm actively preparing for internship opportunities and 
            working toward becoming a well-rounded software engineer. Always open 
            to learning, growing, and collaborating on exciting tech projects!
          </p>

          <h3 className={styles.skillsTitle}>My Skills</h3>
          <div className={styles.skillsContainer}>
            {skills.map((skill, index) => (
              <span key={index} className={styles.skillTag}>{skill}</span>
            ))}
          </div>
        </div>

        <div className={styles.contactContent}>
          <h2 className={styles.sectionTitle}>Get In Touch</h2>
          <div className={styles.contactInfo}>
            <div className={styles.contactItem}>
              <span className={styles.contactLabel}>Email</span>
              <a href="mailto:manjitmishra328@gmail.com">
                manjitmishra328@gmail.com
              </a>
            </div>
            <div className={styles.contactItem}>
              <span className={styles.contactLabel}>Location</span>
              <span>Bangalore, India</span>
            </div>
          </div>

          <div className={styles.socialLinks}>
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialIcon}
                aria-label={social.name}
              >
                <social.Icon />
              </a>
            ))}
          </div>
        </div>
      </div>

      <footer className={styles.footer}>
        <p>&copy; {new Date().getFullYear()} Manjit Mishra. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default About;