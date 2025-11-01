import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CauseSection from './components/CauseSection';
import Features from './components/Features';
import Partners from './components/Partners';
import Courses from './components/Courses';
import About from './components/About';
import Stats from './components/Stats';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <CauseSection />
      <Features />
      <Partners />
      <About />
      <Courses />
      <Stats />
      <Testimonials />
      <FAQ />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
