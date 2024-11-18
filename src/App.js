import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import ContactForm from './components/ContactForm';
import WelcomeSection from './components/WelcomeSection';
import ServicesSection from './components/ServicesSection';
import FlyingSection from './components/FlyingSection';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div>
      <Header />
      <HeroSection />
      <ContactForm />
      <WelcomeSection />
      <ServicesSection />
      <FlyingSection />
      <Footer />
    </div>
  );
}

export default App;
