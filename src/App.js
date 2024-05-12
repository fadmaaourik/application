import React, { useState, useEffect } from 'react';
import './App.css';
import Page1 from './Pages/Page1';
import Home from './Pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Choix1 from './Pages/choix1';
import Choix2 from './Pages/choix2';
import SousChoix1 from './Pages/sousChoix1';
import SousChoix2 from './Pages/sousChoix2';
import SousChoix3 from './Pages/sousChoix3';
import SousChoix4 from './Pages/sousChoix4';
import Question1 from './Pages/question1';
import Reponse1 from './Pages/reponse1';
import Reponse2 from './Pages/reponse2';
import Rep1 from './Pages/rep1';
import Rep2 from './Pages/rep2';
import Question2 from './Pages/question2';
import Final from './Pages/final';
function App() {
  const [showPage, setShowPage] = useState(true);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setShowPage(false);
    }, 3000);

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <Router>
      <div className="App">
        {showPage ? (
          <Home />
        ) : (
          <Routes>
            <Route path="/" element={<Page1 />} />
            <Route path="/Maintenance_corrective" element={<Choix1 />} />
            <Route path="/Maintenance_préventive" element={<Choix2 />} />
            <Route path="/Maintenance_corrective/Porte_d'accès_voyageurs" element={<SousChoix1 />} />
            <Route path="/Maintenance_corrective/Porte_d'accès_voyageurs/Porte_non_verrouillée_EPI_1" element ={<SousChoix2/>}/>
            <Route path="/Maintenance_corrective/Porte_d'accès_voyageurs/Porte_non_verrouillée_EPI_2" element ={<SousChoix3/>} />
            <Route path="/Maintenance_corrective/Porte_d'accès_voyageurs/Porte_non_verrouillée_EPI_3" element ={<SousChoix4/>} />
            <Route path="/Maintenance_corrective/Porte_d'accès_voyageurs/Porte_non_verrouillée_EPI_3/question1" element ={<Question1/>} />
            <Route path="/Maintenance_corrective/Porte_d'accès_voyageurs/Porte_non_verrouillée_EPI_3/question1/question2" element ={<Question2/>} />"
            <Route path="/Maintenance_corrective/Porte_d'accès_voyageurs/Porte_non_verrouillée_EPI_3/question1/reponse1" element ={<Reponse1/>} />
            <Route path="/Maintenance_corrective/Porte_d'accès_voyageurs/Porte_non_verrouillée_EPI_3/question1/reponse2" element ={<Reponse2/>}/>
            <Route path="/Maintenance_corrective/Porte_d'accès_voyageurs/Porte_non_verrouillée_EPI_3/question1/reponse2/rep1" element ={<Rep1/>}/>
            <Route path="/Maintenance_corrective/Porte_d'accès_voyageurs/Porte_non_verrouillée_EPI_3/question1/reponse1/rep2" element ={<Rep2/>}/>
            <Route path="/Maintenance_corrective/Porte_d'accès_voyageurs/Porte_non_verrouillée_EPI_3/final" element ={<Final/>}/>
          </Routes>
        )}
      </div>
    </Router>
  );
}

export default App;