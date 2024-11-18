import React from 'react';

function ContactForm() {
  return (
    <form className="contact-form">
      <button className="one-trip-button">One Trip</button>
      <button className="round-trip-button">Round Trip</button>
      <button className="multi-trip-button">Multi Leg</button>
      <div className="form-input">
        <label className="label-username">Full Name</label>
        <input name="fullname" className="input-username" type="text" placeholder="Full Name" />
        
        <label className="label-email">Email ID</label>
        <input name="email" className="input-email" type="text" placeholder="dubai@gmail.com" />
        
        <label className="label-company">Company Name</label>
        <input name="Company" className="input-company" type="text" placeholder="Weavenn" />
        
        <label className="label-phone">Phone Number</label>
        <input name="phone" className="input-phone" type="text" placeholder="556 880 5569" />
      </div>
      <hr className="line" />
      <label className="label-departure">Departure Airport</label>
      <input className="input-departure" type="text" placeholder="New York Airport" />
      
      <label className="label-arrival">Arrival Airport</label>
      <input className="input-arrival" type="text" placeholder="Dubai UAE Airport" />
      
      <label className="label-Departure-date">Departure Date</label>
      <input type="date" className="date-departure" />

      <label className="label-Time">Time</label>
      <input type="time" className="input-time" />

      <label className="label-Passengers">Passengers</label>
      <input type="number" className="input-Passengers" min="1" />

      <label className="label-Plane-Type">Plane Type</label>
      <select className="select-plane-type">
        <option>Turbo prop</option>
      </select>
      <button className="submit-button">Book Your Flight</button>
    </form>
  );
}

export default ContactForm;
