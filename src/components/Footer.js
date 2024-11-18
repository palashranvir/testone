import React from 'react';

function Footer() {
  return (
    <footer className="footer">
      <img className="logo-footer" src="/images/Logo.png" alt="Logo" />
      
      <h4 className="useful-link">Useful Links</h4>
      <ul className="footer-items">
        <li><a href="/">Home</a></li>
        <li><a href="/">About Us</a></li>
        <li><a href="/">Pricing</a></li>
        <li><a href="/">Testimonial</a></li>
        <li><a href="/">Book a Flight</a></li>
      </ul>
      
      <h4 className="reach-us-now">Reach Us Now</h4>
      <a href="tel:6312238839" className="number">631 223 8839</a>
      <a href="mailto:contact@altitudecharter.com" className="email">contact@altitudecharter.com</a>
      
      <h4 className="united-states">United States</h4>
      <p className="location">
        Altitude Charter LLC<br />
        300 Wheeler Rd. Suite 202<br />
        Hauppauge NY11788
      </p>
      
      <h4 className="sponsored">Sponsored By</h4>
      {/* ARGUS and NBAA images */}
      <div className="sponsor-logos">
        <img src="/images/ARG-US.png" className="ARG-US-img" alt="ARGUS" />
        <img src="/images/NBAA.png" className="NBAA-img" alt="NBAA" />
      </div>
      
      <hr className="footer-line" />
      <p className="copyright">© 2024 Altitude Charter | All Rights Reserved</p>
    </footer>
  );
}

export default Footer;
