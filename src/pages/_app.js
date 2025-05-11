import React from 'react';
import { CartProvider } from '../context/CartContext';
import { ThemeProvider } from '../context/ThemeContext';
import { FontProvider } from '../context/FontContext';
import '../App.css';

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <FontProvider>
        <CartProvider>
          <Component {...pageProps} />
        </CartProvider>
      </FontProvider>
    </ThemeProvider>
  );
}

export default MyApp; 