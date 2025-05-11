'use client';

import React, { createContext, useState, useContext, useEffect } from 'react';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('default');

  const themes = {
    pink: {
      primaryColor: '#F5D4D4',
      secondaryColor: '#C5D8D3',
      accentColor: '#E75480',
      neutralWhite: '#FFFFFF',
      neutralLight: '#F8F9FA',
      neutralDark: '#343A40',
      backgroundImage: 'https://example.com/default-bg.jpg' 
    },
    ivory: {
      primaryColor: '#FFFFF0',
      secondaryColor: '#F5F5DC',
      accentColor: '#D4AF37',
      neutralWhite: '#FAFAF0',
      neutralLight: '#FAF0E6',
      neutralDark: '#4A4A4A',
      backgroundImage: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimg.freepik.com%2Fpremium-photo%2Fsheet-textured-ivory-coloured-creative-paper-background-extra-large-highly-detailed-image_598586-121.jpg%3Fw%3D2000&f=1&nofb=1&ipt=7d2eabe645ab96f04b8d301b19eaa248f5788e64960daac3f96ef80aece5e8a8&ipo=images' // Ivory theme background
    },
    default: {
      primaryColor: '#DEB887',
      secondaryColor: '#D2B48C',
      accentColor: '#8B4513',
      neutralWhite: '#F4E1D2',
      neutralLight: '#E6D2B5',
      neutralDark: '#5D4037',
      backgroundImage: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2Fcd%2F90%2F3e%2Fcd903eb3074de64cbea8cf8d9433145f.jpg&f=1&nofb=1&ipt=298077703f62fb5510fe851d2aa161bdc64c084e1d095633c9fb6a6762be404c&ipo=images' // Wood theme background
    }
  };

  useEffect(() => {
    // Apply theme colors to CSS variables
    const currentTheme = themes[theme];
    Object.keys(currentTheme).forEach(key => {
      if (key !== 'backgroundImage') {
        document.documentElement.style.setProperty(
          `--${key.replace(/([A-Z])/g, '-$1').toLowerCase()}`, 
          currentTheme[key]
        );
      }
    });

    // Apply background image
    document.documentElement.style.setProperty(
      '--background-image', 
      `url(${currentTheme.backgroundImage})`
    );
  }, [theme]);

  const toggleTheme = () => {
    const themeKeys = Object.keys(themes);
    const currentIndex = themeKeys.indexOf(theme);
    const nextIndex = (currentIndex + 1) % themeKeys.length;
    setTheme(themeKeys[nextIndex]);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, themes }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);