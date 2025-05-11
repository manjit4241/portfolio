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
          <h2 className={styles.subtitle}>Frontend Developer & UI Designer</h2>
          <p className={styles.description}>
            I create engaging web experiences that combine beautiful design with 
            clean, efficient code. Welcome to my portfolio!
          </p>
          <div className={styles.btnContainer}>
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
    </div>
  );
};

export default Homepage;