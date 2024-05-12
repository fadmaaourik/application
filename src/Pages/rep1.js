import React, {useEffect} from 'react';
import './Page1.css';
import icone3 from '../images/icone3.png';
import icone from '../images/icone.png';
import icone2 from '../images/icone2.png';
import { useNavigate } from 'react-router-dom';
function Rep1() {
  const navigate = useNavigate();
  useEffect(() => {
      const timer = setTimeout(() => {
          navigate('/'); 
      }, 10000); 
      return () => clearTimeout(timer);
  }, [navigate]);
    return (
        <div className="background">
          <img src={icone3} alt='Logo4' className='logo3'/>
          <div className="vrsupport">VRSUPPORT</div>
          <div className="back2">
            <img src={icone} alt="Logo2" className='logo1'/>
            <img src={icone2} alt="Logo3" className='logo2'/>
              <div className='choisir'> 
            You caught us, we're still working on getting Solutions for this one.
            </div>
          </div>
        </div>
        )
}

export default Rep1;
