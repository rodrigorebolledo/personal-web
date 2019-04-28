import React from 'react';
import Navbar from './components/nav';
import AboutMe from './components/aboutMe';
import ManejoSoftware from './components/manejoSoftware';
import MyWorks from './components/myWorks';
import Footer from './components/footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <AboutMe/>
      <ManejoSoftware/>
      <MyWorks/>
      <Footer/>
    </div>
  );
}

export default App;
