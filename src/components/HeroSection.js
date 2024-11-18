import React from 'react';

function HeroSection() {
  return (
    <section>
      <img className="plane" src="/images/black-plane.png" alt="Plane" />
      <h1 className="heading-ALT">ALTITUDE</h1>
      <h1 className="heading-CHA">CHARTER</h1>
      <h5 className="h5-headding">Uncompromising Luxury, Unforgettable Journeys.</h5>
      <button className="request-button">Request a Flight</button>
    </section>
  );
}

export default HeroSection;
