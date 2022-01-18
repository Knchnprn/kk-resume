import React , {useEffect,useState} from 'react';
import './App.css';
import Banner from './components/banner';
import './components/styles.css'
import AboutMe from './components/aboutMe';
import Education from './components/education';
import Experience from './components/experience';
import Skills from './components/skills';
import Contact from './components/contact';
import Navbar from './components/navbar';



function App() {

  return (
    <>
   
    <div className='App'>
      <Navbar />
      <section id="Section-Home" >
      <Banner />
    </section>
     
    </div>
    <section id="Section-AboutMe" >
       <AboutMe />
    </section>
    <section id="Section-Education" >
    <Education />
    </section>
    <section id="Section-Experience" >
    <Experience />
    </section>
    <section id="Section-Skills" >
    <Skills />
    </section>
    <section id="Section-Contact" >
    <Contact />
    </section>
  
    
    
    
    </>
  );
}

export default App;
