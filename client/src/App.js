import React, { useEffect, useState } from 'react';
import { Route, Routes } from "react-router-dom";
import Aboutus from './components/Aboutus/Aboutus';
import Contactus from './components/ContactUs/Contactus';
import EventsPage from './components/EventsPage/EventsPage';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import HomePage from './components/HomePage/HomePage';
import OurTeam from './components/OurTeam/OurTeam';
import Preloader from './components/Preloader/Preloader';

function App() {
  const [loading, setloading] = useState(false);
  useEffect(() => {
    setTimeout(() => {setloading(true)}, 35000);
    // window.onload=()=>{
    //   setloading(true);
    //   }
  },[]);  

  return (
    <div>
      {loading?
      <div>
      <div className='bgmoon'>
        <svg className='newmoon'  version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 240 240" style={{enableBackground: 'new 0 0 240 240'}} xmlSpace="preserve">
        <style type="text/css" dangerouslySetInnerHTML={{__html: "\n\t.stmoon__light{fill:#B8B499;}\n\t.stmoon__dark{fill:#2D2B24;}\n\t.stmoon__halo{fill:none;stroke:#2D2B24;stroke-width:7;stroke-miterlimit:10;}\n" }} />
        <path id="moon_topside" className="stmoon__light" d="M177.5,106.6c-3.7,1.1-7.6-1.1-8.7-4.8c-1.1-3.7,1.1-7.6,4.8-8.7c0.2,0,0.3-0.1,0.5-0.1 c-3.3-6.7-7.9-12.6-13.3-17.6c-1.3,4.4-5.4,7.7-10.3,7.7c-5.9,0-10.7-4.8-10.7-10.7c0-3.2,1.4-6.1,3.7-8.1 c-7.3-3.1-15.3-4.8-23.6-4.8c-33.5,0-60.6,27.1-60.6,60.6c0,4.4,0.5,8.6,1.3,12.7c1.2-1.6,3.1-2.6,5.3-2.6c3.6,0,6.6,3,6.6,6.6 c0,3.6-3,6.6-6.6,6.6c-0.7,0-1.4-0.1-2.1-0.3c3.8,9.2,9.7,17.2,17.2,23.5c-0.1-0.5-0.1-1-0.1-1.5c0-4.6,3.7-8.3,8.3-8.3 s8.3,3.7,8.3,8.3c0,4.1-2.9,7.4-6.8,8.1c8.7,4.8,18.6,7.5,29.2,7.5c33.5,0,60.6-27.1,60.6-60.6c0-4.8-0.6-9.5-1.6-14 C178.5,106.2,178,106.4,177.5,106.6z M77.4,145.9c-2,0-3.6-1.6-3.6-3.6s1.6-3.6,3.6-3.6c2,0,3.6,1.6,3.6,3.6S79.4,145.9,77.4,145.9 z M81,126.3c0-6.2,5-11.2,11.2-11.2s11.2,5,11.2,11.2s-5,11.2-11.2,11.2S81,132.5,81,126.3z M101.6,151c-3.7,0-6.8-3-6.8-6.8 s3-6.8,6.8-6.8s6.8,3,6.8,6.8S105.4,151,101.6,151z M114.6,144.5c-0.7,1.2-2.1,1.5-3.3,0.9s-1.5-2.1-0.9-3.3s2.1-1.5,3.3-0.9 S115.3,143.4,114.6,144.5z M127.7,70.9c0.8-2.3,3.3-3.6,5.6-2.8c2.3,0.8,3.6,3.3,2.8,5.6c-0.8,2.3-3.3,3.6-5.6,2.8 C128.2,75.8,126.9,73.2,127.7,70.9z M138.5,102.7c-3.6,0-6.6-3-6.6-6.6s3-6.6,6.6-6.6s6.6,3,6.6,6.6S142.2,102.7,138.5,102.7z M149.9,105c-0.4,1.3-1.8,1.9-3.1,1.5c-1.3-0.4-1.9-1.8-1.5-3.1c0.4-1.3,1.8-1.9,3.1-1.5C149.6,102.4,150.3,103.8,149.9,105zM157.3,97.3c-3.2,0-5.8-2.6-5.8-5.8s2.6-5.8,5.8-5.8s5.8,2.6,5.8,5.8S160.5,97.3,157.3,97.3z" />
      </svg>
        </div>
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

      :<Preloader/>}
    </div>
  );
}

export default App;