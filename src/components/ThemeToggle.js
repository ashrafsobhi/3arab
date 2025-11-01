import React from 'react';
import { useTheme } from '../context/ThemeContext';
import { FaMoon, FaSun } from 'react-icons/fa';
import './ThemeToggle.css';

const ThemeToggle = () => {
  const { isDark, toggleTheme } = useTheme();

  return (
    <button 
      className={`theme-switch ${isDark ? 'dark' : 'light'}`} 
      onClick={toggleTheme} 
      aria-label="تبديل الوضع"
      role="switch"
      aria-checked={isDark}
    >
      <div className="switch-track">
        <div className={`switch-thumb ${isDark ? 'dark' : 'light'}`}>
          <span className="switch-icon">
            {isDark ? <FaMoon /> : <FaSun />}
          </span>
        </div>
      </div>
    </button>
  );
};

export default ThemeToggle;
