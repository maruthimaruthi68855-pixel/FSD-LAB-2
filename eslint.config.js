import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const linkStyle = {
    display: 'inline-block',
    padding: '10px 24px',
    margin: '0 8px',
    color: 'white',
    textDecoration: 'none',
    borderRadius: '6px',
    fontWeight: '600',
    fontSize: '15px'
  };

  return (
    <nav style={{ textAlign: 'center', marginBottom: '40px' }}>
      <Link to="/" style={{ ...linkStyle, backgroundColor: '#3b82f6' }}>Home</Link>
      <Link to="/about" style={{ ...linkStyle, backgroundColor: '#22c55e' }}>About</Link>
      <Link to="/contact" style={{ ...linkStyle, backgroundColor: '#a855f7' }}>Contact</Link>
    </nav>
  );
}

export default Navbar;
