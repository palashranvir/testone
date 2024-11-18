import React from 'react';

function ServicesSection() {
  return (
    <section className="service-section">
      <h3 className="service-heading">Our Services</h3>
      <button className="know-more">Know More</button>
      <img className="service-img" src="/images/service-img.png" alt="Service" />
      <h6 className="h6-CONCIERGE-SERVICES">CONCIERGE SERVICES</h6>
      <h2 className="h2-Ground-Transportation">Ground Transportation</h2>
      <p className="service-para">Altitude charter is happy to arrange door-to-door ground transportation...</p>
      <h2 className="h2-Catering">Catering with Care</h2>
      <p className="service-para-2">Altitude charter is happy to arrange any type of catering requested...</p>
    </section>
  );
}

export default ServicesSection;
