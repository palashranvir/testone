import React from 'react';

function FlyingSection() {
  return (
    <section className="flying-section">
      <h3 className="h3-flying-heading">Flying with Altitude</h3>
      <div className="reactangle"></div>
      <div className="lines"></div>
      <img className="pilot-img" src="/images/pilot.jpg" alt="Pilot" />
      <p className="pilot-para1"><span>Seamless Flexibility</span> We accommodate last-minute changes...</p>
      <p className="pilot-para2"><span>Rapid and Reliable</span> Get quotes in 2 hours...</p>
      <p className="pilot-para3"><span>Exclusive Benefits</span> Receive a $500 credit...</p>
      <p className="pilot-para4"><span>Personalized Service</span> Enjoy concierge-level care...</p>
      <p className="pilot-para5"><span>Decades of Expertise</span> Over 37 years of private charter experience...</p>
    </section>
  );
}

export default FlyingSection;
