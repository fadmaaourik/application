import React, { useState } from 'react';
import './Page1.css';
import { useNavigate } from 'react-router-dom';
import icone3 from '../images/icone3.png';
import icone from '../images/icone.png';
import icone2 from '../images/icone2.png';
function SousChoix1() {
  const [selectedChoice, setSelectedChoice] = useState(null);
  const navigate = useNavigate();

  const handleChoiceClick = (choice) => {
    if (choice === selectedChoice) {
      setSelectedChoice(null);
    } else {
      setSelectedChoice(choice);
    }
  };

  const handleProceedClick = () => {
    if (selectedChoice) {
      navigate(`/${selectedChoice}`);
    }
  };

  return (
    <div className="background">
      <img src={icone3} alt='Logo4' className='logo3'/>
      <div className="vrsupport">VRSUPPORT</div>
      <div className="back2">
      <img src={icone} alt="Logo2" className='logo1'/>
      <img src={icone2} alt="Logo3" className='logo2'/>
      <div className="content">
      <div className = "container">
        <p className='question'>Choisir les symptômes constatés:</p>
        <div 
          className={`block1 ${selectedChoice === "Maintenance_corrective/Porte_d'accès_voyageurs/Porte_non_verrouillée_EPI_1" ? 'selected' : ''}`}
          onClick={() => handleChoiceClick("Maintenance_corrective/Porte_d'accès_voyageurs/Porte_non_verrouillée_EPI_1")}
        >
          Porte non verrouillée
        </div>
        <div
          className={`block1 ${selectedChoice === "Maintenance_corrective/Porte_d'accès_voyageurs/Variation_du_vitesse_du_vantail" ? 'selected' : ''}`}
          onClick={() => handleChoiceClick("Maintenance_corrective/Porte_d'accès_voyageurs/Variation_du_vitesse_du_vantail")}
        >
          Variation du vitesse du vantail
        </div>
        <div
          className={`block1 ${selectedChoice === "Maintenance_corrective/Porte_d'accès_voyageurs/Bruit" ? 'selected' : ''}`}
          onClick={() => handleChoiceClick("Maintenance_corrective/Porte_d'accès_voyageurs/Bruit")}
        >
         Bruit
        </div>
        <div
          className={`block1 ${selectedChoice === "Maintenance_corrective/Porte_d'accès_voyageurs/Claquement_forte" ? 'selected' : ''}`}
          onClick={() => handleChoiceClick("Maintenance_corrective/Porte_d'accès_voyageurs/Claquement_forte")}
        >
          Claquement forte
        </div>
        <div
          className={`block1 ${selectedChoice === "Maintenance_corrective/Porte_d'accès_voyageurs/Blocage_en_fermeture" ? 'selected' : ''}`}
          onClick={() => handleChoiceClick("Maintenance_corrective/Porte_d'accès_voyageurs/Blocage_en_fermeture")}
        >
          Blocage en fermeture
        </div>
        <div
          className={`block1 ${selectedChoice === "Maintenance_corrective/Porte_d'accès_voyageurs/Blocage_en_ouverture" ? 'selected' : ''}`}
          onClick={() => handleChoiceClick("Maintenance_corrective/Porte_d'accès_voyageurs/Blocage_en_ouverture")}
        >
          Blocage en ouverture
        </div>
        <div
          className={`block1 ${selectedChoice === "Maintenance_corrective/Porte_d'accès_voyageurs/Fuite" ? 'selected' : ''}`}
          onClick={() => handleChoiceClick("Maintenance_corrective/Porte_d'accès_voyageurs/Fuite")}
        >
          Fuite
        </div>
        <div className="button-container">
          <button className="button" onClick={handleProceedClick}>
            Proceed
            <span className="arrow">&rarr;</span>
          </button>
        </div>
        </div>
      </div>
      </div>
    </div>
  );
}

export default SousChoix1;
