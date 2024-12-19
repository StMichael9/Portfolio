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
  height: '500px',
  width: '500px',
  borderRadius: '50%',
  objectFit: 'cover',
};

function About() {
  return (
    <div style={containerStyle}>
      <div style={textStyle}>
        <h1>About Me</h1>
        <p>Hi, I’m Saint Michael, an aspiring software developer with a deep passion for crafting innovative and efficient software solutions. 
            Driven by curiosity and a love for technology, I am dedicated to learning, building, and growing in the tech industry. 
            With a keen interest in solving real-world problems through code, I strive to merge creativity with technical expertise to deliver impactful results. 
            Whether it's developing sleek web applications or diving into complex algorithms, I thrive on exploring new challenges and pushing the boundaries of what's possible.</p>
      </div>
      <img 
        src="https://mail.google.com/mail/u/0?ui=2&ik=8a98a45bcd&attid=0.1&permmsgid=msg-f:1817819508906878288&th=193a31364e2b6550&view=fimg&fur=ip&permmsgid=msg-f:1817819508906878288&sz=s0-l75-ft&attbid=ANGjdJ9k8fIYv3TeFyMfTXKPBaOicKsLTYHVbkR2dEP9X2bbLNpOomHeP3aDQ9AFcW_IpshCYzTd1rFF6-94JKJOJ_hZhOiuTOhEY5iJB5mO9ipFuMWyU1qxJqjyHd0&disp=emb&realattid=193a312ff98f52e44041&zw" 
        alt="A picture of me" 
        style={picStyle}
      />
    </div>
  );
}

export default About;