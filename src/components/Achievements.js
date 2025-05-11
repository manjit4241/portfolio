import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import { achievements } from '../data/achievements';
import styles from '../styles/Achievements.module.css';
const Achievements = () => {
 const { isDarkMode } = useContext(ThemeContext);
 
 return (
 <div className={`${styles.achievements} ${isDarkMode ? styles.dark : ''}`}>
 <h2 className={styles.sectionTitle}>Achievements</h2>
 <div className={styles.timelineContainer}>
 {achievements.map((achievement, index) => (
 <div 
 className={`${styles.timelineItem} ${index % 2 === 0 ? styles.left : styles.right}`} 
 key={index}
 >
 <div className={styles.timelineContent}>
 <div className={styles.date}>{achievement.year}</div>
 <h3>{achievement.title}</h3>
 <p>{achievement.description}</p>
 {achievement.link && (
 <a 
 href={achievement.link} 
 target="_blank" 
 rel="noopener noreferrer"
 className={styles.certLink}
 >
 View Certificate
 </a>
 )}
 </div>
 </div>
 ))}
 </div>
 </div>
 );
};
export default Achievements;