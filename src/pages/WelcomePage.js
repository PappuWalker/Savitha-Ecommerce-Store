'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

export default function WelcomePage() {
  const router = useRouter();
  const [isAnimating, setIsAnimating] = useState(false);

  const enterStore = () => {
    setIsAnimating(true);
    
    // Request fullscreen
    const docEl = document.documentElement;
    if (docEl.requestFullscreen) {
      docEl.requestFullscreen();
    } else if (docEl.webkitRequestFullscreen) {
      docEl.webkitRequestFullscreen();
    } else if (docEl.mozRequestFullScreen) {
      docEl.mozRequestFullScreen();
    } else if (docEl.msRequestFullscreen) {
      docEl.msRequestFullscreen();
    }
    
    // Navigate to home page after animation completes
    setTimeout(() => {
      router.push('/home');
    }, 1500); // Match this with CSS animation duration
  };

  return (
    <div className={`welcome-page ${isAnimating ? 'animate' : ''}`}>
      <div className="welcome-container">
        <div className="welcome-content">
          <div className="logo-container">
            <h1 className="savitha-logo-welcome">SAVITHA</h1>
            <p className="tagline">Fashion for Every Expression</p>
          </div>
          
          <button className="enter-store-btn" onClick={enterStore}>
            Enter the Store
          </button>
        </div>
      </div>
      
      {/* Shutter animation elements */}
      <div className="shutter shutter-top"></div>
      <div className="shutter shutter-bottom"></div>
    </div>
  );
} 