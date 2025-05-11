import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import styles from '../styles/LearningNow.module.css';

const LearningNow = () => {
  const { isDarkMode } = useContext(ThemeContext);

  const topics = [
    {
      title: 'Graphs & Dynamic Programming (DSA)',
      description: 'Mastering complex patterns and problem-solving strategies.'
    },
    {
      title: 'Advanced React Native',
      description: 'Building smoother, scalable mobile experiences.'
    },
    {
      title: 'UI/UX Principles',
      description: 'Understanding human-centered design and intuitive interfaces.'
    },
    {
      title: 'Node.js & Express',
      description: 'Crafting full-stack applications from frontend to backend.'
    }
  ];

  return (
    <div className={`${styles.learningNow} ${isDarkMode ? styles.dark : ''}`}>
      <h2 className={styles.sectionTitle}>🧠 What I’m Learning Now</h2>
      <p className={styles.description}>
        Growth is my default state. I’m always looking to level up — not just to build better apps,
        but to think deeper, solve smarter, and design with intent.
      </p>

      <div className={styles.topicsGrid}>
        {topics.map((topic, index) => (
          <div key={index} className={styles.topicCard}>
            <h3>{topic.title}</h3>
            <p>{topic.description}</p>
          </div>
        ))}
      </div>

      <p className={styles.footerNote}>
        Each new concept I learn becomes a tool I apply — whether in side projects, experiments, or real-world applications.
      </p>
    </div>
  );
};

export default LearningNow;
