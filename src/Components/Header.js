import React from 'react';
import Link from 'next/link';

function Header() {
  return (
    <header className="main-header">
      <div className="header-wrapper">
        <div className="header-logo-center">
          <Link href="/" className="savitha-logo">SAVITHA</Link>
        </div>
      </div>
    </header>
  );
}

export default Header;