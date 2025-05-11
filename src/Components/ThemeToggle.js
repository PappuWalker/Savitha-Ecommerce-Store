import React from 'react';
import { useTheme } from '../context/ThemeContext';
import { FaPalette } from 'react-icons/fa';

function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button 
      className="theme-toggle-btn" 
      onClick={toggleTheme}
      title="Change Theme"
    >
      <FaPalette />
    </button>
  );
}

export default ThemeToggle;