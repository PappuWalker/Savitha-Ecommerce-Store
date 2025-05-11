'use client';
import React, { createContext, useState, useContext, useEffect } from 'react';

const FontContext = createContext();

export const FontProvider = ({ children }) => {
  const [fontTheme, setFontTheme] = useState('luxurious');

  const fontThemes = {
    default: {
      headingFont: 'Playfair Display',
      subheadingFont: 'Lora',
      bodyFont: 'Roboto',
      accentFont: 'Merriweather',
      logoFont: 'Operetta52Bold',
      googleFontsLink: 'https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&family=Lora&family=Roboto&family=Merriweather&display=swap'
    },
    elegant: {
      headingFont: 'Vidaloka',
      subheadingFont: 'Cormorant Garamond',
      bodyFont: 'Lato',
      accentFont: 'Marcellus',
      logoFont: 'Operetta52Bold',
      googleFontsLink: 'https://fonts.googleapis.com/css2?family=Vidaloka&family=Cormorant+Garamond:wght@700&family=Lato&family=Marcellus&display=swap'
    },
    modern: {
      headingFont: 'Bodoni Moda',
      subheadingFont: 'Philosopher',
      bodyFont: 'Nunito',
      accentFont: 'Cinzel',
      logoFont: 'Operetta52Bold',
      googleFontsLink: 'https://fonts.googleapis.com/css2?family=Bodoni+Moda:wght@700&family=Philosopher&family=Nunito&family=Cinzel&display=swap'
    },
    contemporary: {
      headingFont: 'Crimson Text',
      subheadingFont: 'Libre Baskerville',
      bodyFont: 'Source Sans Pro',
      accentFont: 'Montserrat',
      logoFont: 'Operetta52Bold',
      googleFontsLink: 'https://fonts.googleapis.com/css2?family=Crimson+Text:wght@700&family=Libre+Baskerville&family=Source+Sans+Pro&family=Montserrat&display=swap'
    },
    default2: {
        headingFont: 'Didot',
        subheadingFont: 'Bodoni Moda',
        bodyFont: 'Optima',
        accentFont: 'Cormorant Garamond',
        logoFont: 'Operetta52Bold',
        googleFontsLink: 'https://fonts.googleapis.com/css2?family=Bodoni+Moda:wght@400;700&family=Cormorant+Garamond:wght@400;700&display=swap'
      },
      romantic: {
        headingFont: 'Libre Bodoni',
        subheadingFont: 'Rufina',
        bodyFont: 'Quattrocento',
        accentFont: 'Spectral',
        logoFont: 'Operetta52Bold',
        googleFontsLink: 'https://fonts.googleapis.com/css2?family=Libre+Bodoni:wght@400;700&family=Rufina&family=Quattrocento&family=Spectral:wght@400;700&display=swap'
      },
      chic: {
        headingFont: 'Canela',
        subheadingFont: 'Unna',
        bodyFont: 'Neue Haas Grotesk',
        accentFont: 'Abhaya Libre',
        logoFont: 'Operetta52Bold',
        googleFontsLink: 'https://fonts.googleapis.com/css2?family=Unna:wght@400;700&family=Abhaya+Libre:wght@400;700&display=swap'
      },
      luxurious: {
        headingFont: 'Philosopher',
        subheadingFont: 'Sorts Mill Goudy',
        bodyFont: 'Lusitana',
        accentFont: 'Forum',
        logoFont: 'Operetta52Bold',
        googleFontsLink: 'https://fonts.googleapis.com/css2?family=Baskerville&family=Sorts+Mill+Goudy&family=Lusitana&family=Forum&display=swap'
      },
      modern_elegance: {
        headingFont: 'Marcellus',
        subheadingFont: 'Judson',
        bodyFont: 'Lato',
        accentFont: 'Crimson Text',
        logoFont: 'Operetta52Bold',
        googleFontsLink: 'https://fonts.googleapis.com/css2?family=Marcellus&family=Judson:wght@400;700&family=Lato&family=Crimson+Text:wght@400;700&display=swap'
      },
      sophisticated: {
        headingFont: 'Playfair Display',
            subheadingFont: 'Cormorant',
            bodyFont: 'Raleway',
            accentFont: 'Libre Baskerville',
            logoFont: 'Operetta52Bold',
            googleFontsLink: 'https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&family=Cormorant:wght@400;700&family=Raleway&family=Libre+Baskerville:wght@400;700&display=swap'
      },
      ethereal: {
        headingFont: 'Vidaloka',
        subheadingFont: 'Fanwood Text',
        bodyFont: 'Source Sans Pro',
        accentFont: 'Libre Bodoni',
        logoFont: 'Operetta52Bold',
        googleFontsLink: 'https://fonts.googleapis.com/css2?family=Vidaloka&family=Fanwood+Text&family=Source+Sans+Pro&family=Libre+Bodoni:wght@400;700&display=swap'
      },
      contemporary_grace: {
        headingFont: 'Philosopher',
        subheadingFont: 'Tenor Sans',
        bodyFont: 'Open Sans',
        accentFont: 'Abril Fatface',
        logoFont: 'Operetta52Bold',
        googleFontsLink: 'https://fonts.googleapis.com/css2?family=Philosopher:wght@400;700&family=Tenor+Sans&family=Open+Sans&family=Abril+Fatface&display=swap'
      }
  };

  useEffect(() => {
    const currentFontTheme = fontThemes[fontTheme];

    // Remove existing font link if any
    const existingLink = document.getElementById('google-fonts');
    if (existingLink) {
      existingLink.remove();
    }

    // Add new font link
    const link = document.createElement('link');
    link.id = 'google-fonts';
    link.rel = 'stylesheet';
    link.href = currentFontTheme.googleFontsLink;
    document.head.appendChild(link);

    // Apply font variables
    document.documentElement.style.setProperty('--font-heading', `'${currentFontTheme.headingFont}', serif`);
    document.documentElement.style.setProperty('--font-subheading', `'${currentFontTheme.subheadingFont}', serif`);
    document.documentElement.style.setProperty('--font-body', `'${currentFontTheme.bodyFont}', sans-serif`);
    document.documentElement.style.setProperty('--font-accent', `'${currentFontTheme.accentFont}', serif`);
    document.documentElement.style.setProperty('--font-logo', `'${currentFontTheme.logoFont}', serif`);
  }, [fontTheme]);

  const toggleFontTheme = () => {
    const fontThemeKeys = Object.keys(fontThemes);
    const currentIndex = fontThemeKeys.indexOf(fontTheme);
    const nextIndex = (currentIndex + 1) % fontThemeKeys.length;
    setFontTheme(fontThemeKeys[nextIndex]);
  };

  return (
    <FontContext.Provider value={{ fontTheme, toggleFontTheme, fontThemes }}>
      {children}
    </FontContext.Provider>
  );
};

export const useFont = () => useContext(FontContext);