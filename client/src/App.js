import React from 'react';
import { Route, Routes } from "react-router-dom";
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import HomePage from './components/HomePage/HomePage';

function App() {
  return (
    <div>
      <Header/>
      <Routes>
          <Route exact path="/" element={<HomePage/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;