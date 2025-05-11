// This file is not used in Next.js. Entry point is handled by Next.js routing.

import React from 'react';
import { 
  BrowserRouter as Router, 
  Routes, 
  Route,
  Link  
} from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { FontProvider } from './context/FontContext';
import { CartProvider } from './context/CartContext';
import './App.css';

// Import components
import Header from './Components/Header';
import SideMenu from './Components/SideMenu';
import ThemeToggle from './Components/ThemeToggle';

// Import pages
import HomePage from './pages/HomePage';
import ProductListPage from './pages/ProductListPage';
import CartPage from './pages/CartPage';

function App() {
  return (
    <ThemeProvider>
      <FontProvider>
        <CartProvider>
          <Router basename="/">
            <div className="app">
              <SideMenu />
              <ThemeToggle />
              <Header />

              {/* Main Content Area */}
              <main className="main-content container">
                <Routes>
                  <Route path="/" element={<HomePage />} />
                  <Route path="/products" element={<ProductListPage />} />
                  <Route path="/cart" element={<CartPage />} />
                </Routes>
              </main>

              {/* Footer */}
              <footer className="footer">
                <div className="container">
                  <div className="footer-content">
                    <div className="footer-section">
                      <h4>Quick Links</h4>
                      <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/products">Collection</Link></li>
                        <li><Link to="/cart">Cart</Link></li>
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
          </Router>
        </CartProvider>
      </FontProvider>
    </ThemeProvider>
  );
}

export default App;