import React from 'react';
import './Page1.css';
import { useNavigate } from 'react-router-dom';
import icone3 from '../images/icone3.png';
import icone from '../images/icone.png';
import icone2 from '../images/icone2.png';
import video from '../images/EPI_1.mp4';
function SousChoix2() {
  const navigate = useNavigate();

  const handleProceedClick = () => {
    navigate("/Maintenance_corrective/Porte_d'accès_voyageurs/Porte_non_verrouillée_EPI_2");
  };

  return (
    <div className="background">
      <img src={icone3} alt='Logo4' className='logo3'/>
      <div className="vrsupport">VRSUPPORT</div>
      <div className="back2">
        <img src={icone} alt="Logo2" className='logo1'/>
        <img src={icone2} alt="Logo3" className='logo2'/>
          <div className="video-container">
            <video src={video} controls autoPlay className="video" />
          </div>
          <div className="button-container">
            <button className="button" onClick={handleProceedClick}>
              C'est fait
              <span className="arrow">&rarr;</span>
            </button>
          </div>
       
      </div>
    </div>
  );
}

export default SousChoix2;