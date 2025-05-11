import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import styles from '../styles/Homepage.module.css';

const Homepage = () => {
  const { isDarkMode } = useContext(ThemeContext);
  
  return (
    <div className={`${styles.homepage} ${isDarkMode ? styles.dark : ''}`}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h1 className={styles.title}>
            Hi, I'm <span className={styles.highlight}>Manjit</span>
          </h1>
          <h2 className={styles.subtitle}>Frontend Developer | Problem Solver | Growth Seeker</h2>
          <p className={styles.description}>
            I'm an engineering student who blends code with creativity to craft clean, intuitive web experiences. Always curious, always evolving — whether it's diving deep into React Native, sharpening DSA skills, or uncovering the layers of self through reflection, I build not just for users, but for impact.
          </p>
          <p className={styles.welcome}>
            <strong>Welcome to my <span className={styles.playground}>digital playground</span>.</strong>
          </p>
          
          <div className={styles.buttons}>
            <a href="#projects" className={styles.primaryBtn}>
              View My Work
            </a>
            <a href="#about" className={styles.secondaryBtn}>
              About Me
            </a>
          </div>
        </div>
        
        <div className={styles.imageContainer}>
          <div className={styles.profileImage}>
            <img
              src="/assets/placeholder.jpg"
              alt="Profile"
            />
          </div>
        </div>
      </div>
      
      <div className={styles.scrollIndicator}>
        <span>Scroll Down</span>
        <div className={styles.mouseIcon}>
          <div className={styles.wheel}></div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;