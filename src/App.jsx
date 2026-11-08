import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import HowItWorks from './components/HowItWorks';
import GestureControls from './components/GestureControls';
import TechStack from './components/TechStack';
import Showcase from './components/Showcase';
import Installation from './components/Installation';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="app-wrapper">
      <Navbar />
      <main>
        <Hero />
        <About />
        <HowItWorks />
        <GestureControls />
        <TechStack />
        <Showcase />
        <Installation />
      </main>
      <Footer />
    </div>
  );
}

