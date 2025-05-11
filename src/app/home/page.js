'use client';

import React from 'react';
import Link from 'next/link';
import Header from '../../Components/Header';
import HomePage from '../../pages/HomePage';

export default function Home() {
  return (
    <div className="app">
      <Header />

      {/* Main Content Area */}
      <main className="main-content container">
        <HomePage />
      </main>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-section">
              <h4>Quick Links</h4>
              <ul>
                <li><Link href="/home">Home</Link></li>
                <li><Link href="/products">Collection</Link></li>
                <li><Link href="/cart">Cart</Link></li>
              </ul>
            </div>
            <div className="footer-section">
              <h4>Contact Us</h4>
              <p>Email: support@savitha.com</p>
              <p>Phone: +1 (555) 123-4567</p>
            </div>
            <div className="footer-section">
              <h4>Follow Us</h4>
              <div className="social-links">
                <a href="#instagram" target="_blank" rel="noopener noreferrer">Instagram</a>
                <a href="#facebook" target="_blank" rel="noopener noreferrer">Facebook</a>
                <a href="#twitter" target="_blank" rel="noopener noreferrer">Twitter</a>
              </div>
            </div>
          </div>
          <div className="copyright">
            <p>&copy; 2024 SAVITHA Fashion. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
} 