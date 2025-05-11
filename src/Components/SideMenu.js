import React, { useState } from 'react';
import Link from 'next/link';
import { FaBars, FaHome, FaShoppingBag, FaShoppingCart } from 'react-icons/fa';

function SideMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <>
      <div className="menu-toggle" onClick={toggleMenu}>
        <FaBars />
      </div>
      <div className={`side-menu ${isOpen ? 'open' : ''}`}>
        <div className="side-menu-content">
          <button className="close-menu" onClick={closeMenu}>
            &times;
          </button>
          <nav className="side-menu-nav">
            <Link 
              href="/" 
              className="side-menu-item"
              onClick={closeMenu}
            >
              <FaHome /> Home
            </Link>
            <Link 
              href="/products" 
              className="side-menu-item"
              onClick={closeMenu}
            >
              <FaShoppingBag /> Shop
            </Link>
            <Link 
              href="/cart" 
              className="side-menu-item"
              onClick={closeMenu}
            >
              <FaShoppingCart /> Cart
            </Link>
          </nav>
        </div>
      </div>
      {isOpen && <div className="overlay" onClick={closeMenu}></div>}
    </>
  );
}

export default SideMenu;