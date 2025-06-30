import React from 'react';
import aboutMePic from '../portfolio about me pic.png';

const containerStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '20px',
  maxWidth: '1200px',
  margin: '0 auto',
};

const textStyle = {
  flex: '1',
  marginRight: '20px',
  fontFamily: 'times new roman',
  fontSize: '24px',
  lineHeight: '1.6',
};

const picStyle = { 
  height: '300px',
  width: '300px',
  borderRadius: '50%',
  objectFit: 'cover',
};

function About() {
  return (
    <div id="about" style={containerStyle}>
      <div style={textStyle}>
        <h1>About Me</h1>
        <p>
          Hi, I'm Saint Michael, an aspiring software developer with a deep passion for crafting innovative and efficient software solutions. 
          Driven by curiosity and a love for technology, I am dedicated to learning, building, and growing in the tech industry. 
          With a keen interest in solving real-world problems through code, I strive to merge creativity with technical expertise to deliver impactful results. 
          Whether it's developing sleek web applications or diving into complex algorithms, I thrive on exploring new challenges and pushing the boundaries of what's possible.
        </p>
      </div>
      <img 
        src={aboutMePic} 
        style={picStyle}
        alt="Profile" 
        className="profile-image" 
      />
    </div>
  );
}

export default About;


