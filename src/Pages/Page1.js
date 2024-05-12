import React, { useState } from 'react';
import './Page1.css';
import { useNavigate } from 'react-router-dom';
import icone3 from '../images/icone3.png';
import icone from '../images/icone.png';
import icone2 from '../images/icone2.png';
function Page1() {
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
      <p className='question'> Sélectionner le type de maintenance: </p>
      
        <div
                className={`block ${selectedChoice === 'Maintenance_corrective' ? 'selected' : ''}`}
                onClick={() => handleChoiceClick('Maintenance_corrective')}
              >
                Maintenance corrective
        </div>
        <div
          className={`block ${selectedChoice === 'Maintenance_préventive' ? 'selected' : ''}`}
          onClick={() => handleChoiceClick('Maintenance_préventive')}
        >
          Maintenance préventive
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
  );
}

export default Page1;