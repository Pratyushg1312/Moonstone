import React from 'react';
import { Route, Routes } from "react-router-dom";
import Aboutus from './components/Aboutus/Aboutus';
import Contactus from './components/ContactUs/Contactus';
import EventsPage from './components/EventsPage/EventsPage';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import HomePage from './components/HomePage/HomePage';
import OurTeam from './components/OurTeam/OurTeam';

function App() {
  return (
    <div>
      <Header/>
      <Routes>
          <Route exact path="/" element={<HomePage/>}/>
          <Route exact path="/events" element={<EventsPage/>}/>
          <Route exact path="/ourteam" element={<OurTeam/>}/>
          <Route exact path="/aboutus" element={<Aboutus/>}/>
          <Route exact path="/contactus" element={<Contactus/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;