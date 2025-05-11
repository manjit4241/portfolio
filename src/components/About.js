import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import styles from '../styles/About.module.css';

const About = () => {
  const { isDarkMode } = useContext(ThemeContext);

  const skills = [
    'JavaScript', 'React.js', 'React-Native', 'Expo', 'Node.js',
    'Express', 'Responsive Design', 'Git', 'UI/UX Design'
  ];

  return (
    <div className={`${styles.about} ${isDarkMode ? styles.dark : ''}`}>
      <div className={styles.container}>
        <div className={styles.aboutContent}>
          <h2 className={styles.sectionTitle}>About Me</h2>
          <p className={styles.bio}>
            Hi, I’m Manjit Mishra, a second-year engineering student passionate about software development and problem-solving.
Currently honing my skills in Data Structures and Algorithms and exploring mobile app development with React Native. I’m actively preparing for internship opportunities and working toward becoming a well-rounded software engineer. Always open to learning, growing, and collaborating on exciting tech projects!
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
              <span className={styles.contactLabel}>Email:</span>
              <a href="mailto:hello@example.com">manjitmishra328@gmail.com</a>
            </div>
            <div className={styles.contactItem}>
              <span className={styles.contactLabel}>Location:</span>
              <span>Bangalore, India</span>
            </div>
          </div>

          <div className={styles.socialLinks}>
            <a
              href="https://github.com/manjit4241"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialIcon}
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/manjit-mishra"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialIcon}
            >
              LinkedIn
            </a>
            <a
              href="https://www.instagram.com/manjit_4241"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialIcon}
            >
              Instagram
            </a>
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
