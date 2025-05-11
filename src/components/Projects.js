import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import { projects } from '../data/projects';
import styles from '../styles/Projects.module.css';
const Projects = () => {
 const { isDarkMode } = useContext(ThemeContext);
 
 return (
 <div className={`${styles.projects} ${isDarkMode ? styles.dark : ''}`}>
 <h2 className={styles.sectionTitle}>My Projects</h2>
 <div className={styles.projectsGrid}>
 {projects.map((project, index) => (
 <div className={styles.projectCard} key={index}>
 <div className={styles.projectImage}>
 <img src={project.image} alt={project.title} />
 <div className={styles.projectOverlay}>
 <div className={styles.projectLinks}>
 {project.demo && (
 <a href={project.demo} target="_blank" rel="noopener noreferrer">
 Demo
 </a>
 )}
 {project.github && (
 <a href={project.github} target="_blank" rel="noopener noreferrer">
 GitHub
 </a>
 )}
 </div>
 </div>
 </div>
 <div className={styles.projectInfo}>
 <h3>{project.title}</h3>
 <p>{project.description}</p>
 <div className={styles.projectTags}>
 {project.technologies.map((tech, idx) => (
 <span key={idx} className={styles.tag}>{tech}</span>
 ))}
 </div>
 </div>
 </div>
 ))}
 </div>
 </div>
 );
};
export default Projects;