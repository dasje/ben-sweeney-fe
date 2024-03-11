import React from "react";
import './App.css';
import { Parallax, ParallaxProvider } from 'react-scroll-parallax';

import Header from './components/Header';
import About from './pages/About';
import Skills from './pages/Skills';
import Contact from './pages/Contact';
import Projects from './pages/Projects';
import Background from './components/Background';
import Achievements from './pages/Achievements';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className='chau-philomene'>
      <div id='particles-js'>
        <Background />
      </div>
      <ParallaxProvider>
        <Header />
        <About />
        <Skills />
        <Achievements />
        <Projects />
      </ParallaxProvider>
      <Footer />
    </div>
  )};

      

export default App;
