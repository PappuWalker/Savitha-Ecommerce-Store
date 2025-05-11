'use client';

import { ThemeProvider } from '../context/ThemeContext';
import { FontProvider } from '../context/FontContext';
import { CartProvider } from '../context/CartContext';
import SideMenu from '../Components/SideMenu';
import ThemeToggle from '../Components/ThemeToggle';
import FullscreenButton from '../Components/FullscreenButton';
import '../index.css';
import './globals.css';
import '../App.css';

export default function ClientLayout({ children }) {
  return (
    <ThemeProvider>
      <FontProvider>
        <CartProvider>
          <div className="app">
            <SideMenu />
            <ThemeToggle />
            <FullscreenButton />
            {children}
          </div>
        </CartProvider>
      </FontProvider>
    </ThemeProvider>
  );
} 