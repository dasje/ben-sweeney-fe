import React, {useEffect, useRef, useState} from "react";
import './App.css';
import { ParallaxProvider } from 'react-scroll-parallax';

import Header from './components/Header';
import About from './pages/About';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import Background from './components/Background';
import Achievements from './pages/Achievements';
import Footer from './components/Footer';
import Landing from "./components/Landing";
import Button from "./components/Button";
import EncryptButton from "./components/ButtonEncrypt";



const App = () => {

  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const achievementsRef = useRef(null);
  const projectsRef = useRef(null);

  const goToAbout = () => {
    aboutRef.current?.scrollIntoView({behavior: 'smooth'});
    // setBgColor("#5f0f40")
  };
  const goToSkills = () => {
    skillsRef.current?.scrollIntoView({behavior: 'smooth'});
  };
  const goToAchievements = () => {
    achievementsRef.current?.scrollIntoView({behavior: 'smooth'});
  };
  const goToProjects = () => {
    projectsRef.current?.scrollIntoView({behavior: 'smooth'});
  };

  return (
    <div className='chau-philomene'>
      <div id='particles-js'>
        <Background />
      </div>
      <Landing />
      <Header>
        <EncryptButton textToDisplay="About" click={goToAbout} />
        <EncryptButton textToDisplay="Skills" click={goToSkills} />
        <EncryptButton textToDisplay="Experience" click={goToAchievements} />
        <EncryptButton textToDisplay="Projects" click={goToProjects} />
      </Header>
      <ParallaxProvider>
        <div ref={aboutRef}>
          <About />
        </div>
        <div ref={skillsRef}>
          <Skills />
        </div>
        <div ref={achievementsRef}>
          <Achievements />
        </div>
        <div ref={projectsRef}>
          <Projects />
        </div>
      </ParallaxProvider>
      <Footer />
    </div>
  )};

      

export default App;
