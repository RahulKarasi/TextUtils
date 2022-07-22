import React, { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";



function App() {

  const[mode, setMode] = useState("light");
  const toggleMode = ()=>{
    if(mode === "light"){
      document.body.style.backgroundColor ="rgb(23 53 72)";
      document.body.style.color ="white";
      setMode("dark");
    }
    else{
      document.body.style.backgroundColor ="white";
      document.body.style.color ="black";
      setMode("light");
    }
  }
  
  return (
    <>
      {/* <Navbar title="RK" aboutText="About TextUtils" toggleMode = {toggleMode} />
      <div className="container my-3">
        <TextForm heading="Enter the text to analyze" mode = {mode} />
        <About mode = {mode} />
      </div> */}
      <Router>
      <Navbar title="RK" aboutText="About TextUtils" toggleMode = {toggleMode} />
      <div className="container my-3">
      <Routes>
          <Route path="/" element={<TextForm heading="Enter the text to analyze" mode = {mode} />} />
          <Route path="/about" element={<About mode = {mode} />} />
      </Routes> 
      </div>
      </Router>
    </>
  );
}

export default App;
