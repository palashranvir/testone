import React from 'react';

function Header() {
  return (
    <header className="header">
      <h1 className="logo">
        <img className="logo-image" src="/images/Logo.png" alt="Logo" />
      </h1>
      <nav className="navigation-bar">
        <ul className="navigation-bar-items">
          <li><a className="about-link" href="/">About Us</a></li>
          <li><a className="services-link" href="/">Services</a></li>
          <li><a className="Aircraft-guide-link" href="/">Aircraft Guide</a></li>
          <li><a className="contact-link" href="/">Contact Us</a></li>
          <li><a className="Reviews-link" href="/">Reviews</a></li>
          <li>
            <select name="language" className="language-select">
              <option value="Eng">Eng</option>
            </select>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
