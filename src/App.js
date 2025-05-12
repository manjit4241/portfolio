import React, { useEffect } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import Header from './components/Header';
import Homepage from './components/Homepage';
import Projects from './components/Projects';
// import Achievements from './components/LearningNow';
import About from './components/About';
import ScrollToTop from './components/ScrollToTop';
import styles from './styles/App.module.css';
import LearningNow from './components/LearningNow';
function App() {
 // Enable smooth scrolling
 useEffect(() => {
 document.querySelectorAll('a[href^="#"]').forEach(anchor => {
 anchor.addEventListener('click', function(e) {
 e.preventDefault();
 const targetId = this.getAttribute('href').substring(1);
 const targetElement = document.getElementById(targetId);
 
 if (targetElement) {
 window.scrollTo({
 top: targetElement.offsetTop - 70, // Offset for fixed header
 behavior: 'smooth'
 });
 }
 });
 });
 }, []);
 return (
 <ThemeProvider>
  <div className={styles.app}>
    <Header />
    <div className={styles.wrapper}> {/* 💡 Add this wrapper */}
      <main className={styles.main}>
        <section id="home" className={styles.section}>
          <Homepage />
        </section>
        <section id="projects" className={styles.section}>
          <Projects />
        </section>
        <section id="learningNow" className={styles.section}>
          <LearningNow />
        </section>
        <section id="about" className={styles.section}>
          <About />
        </section>
      </main>
    </div>
    <ScrollToTop />
  </div>
</ThemeProvider>
 );
}
export default App;