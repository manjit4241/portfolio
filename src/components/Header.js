import React, { useState, useEffect, useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import ThemeToggle from './ThemeToggle';
import styles from '../styles/Header.module.css';
const Header = () => {
 const { isDarkMode } = useContext(ThemeContext);
 const [isScrolled, setIsScrolled] = useState(false);
 const [menuOpen, setMenuOpen] = useState(false);
 // Change header style on scroll
 useEffect(() => {
 const handleScroll = () => {
 if (window.scrollY > 50) {
 setIsScrolled(true);
 } else {
 setIsScrolled(false);
 }
 };
 window.addEventListener('scroll', handleScroll);
 return () => window.removeEventListener('scroll', handleScroll);
 }, []);
 const toggleMenu = () => {
 setMenuOpen(!menuOpen);
 };
 const closeMenu = () => {
 setMenuOpen(false);
 };
 const headerClass = `${styles.header} ${isScrolled ? styles.scrolled : ''} ${isDarkMode ? styles.dark : 
''}`;
 const navClass = `${styles.nav} ${menuOpen ? styles.open : ''}`;
 return (
 <header className={headerClass}>
 <div className={styles.container}>
 <div className={styles.logo}>
 <a href="#home">Portfolio</a>
 </div>
 <div className={styles.mobileMenuIcon} onClick={toggleMenu}>
 <span></span>
 <span></span>
 <span></span>
 </div>
 <nav className={navClass}>
 <ul className={styles.navLinks}>
 <li><a href="#home" onClick={closeMenu}>Home</a></li>
 <li><a href="#projects" onClick={closeMenu}>Projects</a></li>
 <li><a href="#learningNow" onClick={closeMenu}>Learning Now?</a></li>
 <li><a href="#about" onClick={closeMenu}>About</a></li>
 <li className={styles.themeToggleItem}><ThemeToggle /></li>
 </ul>
 
 </nav>
 </div>
 </header>
 );
};
export default Header;
