import Home from "./components/Home"
import Country from "./components/Country";
import "./App.css"
import {Routes,Route} from 'react-router-dom';
import React from "react";

function App() {
  

  return (
    <>
    
    <Routes>
          <Route path="/" element={<Home />} />    
          <Route path="/country/:countryName" element={<Country />} />    

          {/* <Route path="*" element={<Error/>} /> */}
    </Routes>
    </>
  );
}

export default App;