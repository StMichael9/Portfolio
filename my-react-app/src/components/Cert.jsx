import React from 'react';
import Certification from '../assets/FreeCodeCamp Certfication.png';

const certStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  //padding: '20px',
};

const imageStyle = {
  maxWidth: '70%',
  height: 'auto',
  marginTop: '20px',
};

function Cert() {
  return (
    <section id="cert">
      <div style={certStyle}>
        <h2>My Certifications</h2>
        <img 
          src={Certification} 
          alt="FreeCodeCamp Certification" 
          style={imageStyle}
        />
      </div>
    </section>
  );
}

export default Cert;