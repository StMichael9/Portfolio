import React from 'react';
import fccCertification from './assets/FreeCodeCamp Certfication.png';

const certStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '20px',
};

const imageStyle = {
  maxWidth: '100%',
  height: 'auto',
  marginTop: '20px',
};

function Cert() {
  return (
    <div style={certStyle}>
      <h2>My Certifications</h2>
      <img 
        src={fccCertification} 
        alt="FreeCodeCamp Certification" 
        style={imageStyle}
      />
    </div>
  );
}

export default Cert;