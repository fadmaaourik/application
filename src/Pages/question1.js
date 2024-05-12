import React from 'react';
import './Page1.css';
import { useNavigate } from 'react-router-dom';
import icone3 from '../images/icone3.png';
import icone from '../images/icone.png';
import icone2 from '../images/icone2.png';
function Question1() {
  const navigate = useNavigate();

  const regleClick = () => {
    navigate("/Maintenance_corrective/Porte_d'accès_voyageurs/Porte_non_verrouillée_EPI_3/question1/reponse2");
  };
  const deregleclick = ()=>{
    navigate("/Maintenance_corrective/Porte_d'accès_voyageurs/Porte_non_verrouillée_EPI_3/question1/question2");
  }

  return (
    <div className="background">
      <img src={icone3} alt='Logo4' className='logo3'/>
      <div className="vrsupport">VRSUPPORT</div>
      <div className="back2">
        <img src={icone} alt="Logo2" className='logo1'/>
        <img src={icone2} alt="Logo3" className='logo2'/>
          <div className='choisir'> Checker le réglage de la gâche Réglée/déréglée </div>
          <div className="button-container1">
            <button className="button1" onClick={regleClick}>
              Réglée
              <span className="arrow1">&rarr;</span>
            </button>
          </div>
          <div>
            <div className='button-container2'>
                <button className='button1' onClick={deregleclick}>
                <span className="arrow2">&larr;</span>
                Déréglée 
                </button>
            </div>
            
          </div>
       
      </div>
    </div>
  );
}

export default Question1;