import React from 'react';

const picStyle = { 
    height: '100px',
    width: '100px',
    borderRadius: '20%',
    objectFit: 'cover',
};

const containerStyle = {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: '20px',
    marginTop: '20px',
};

const textStyle = {
    fontWeight: 'bold',
    textAlign: 'center',
    width: '100%',
    marginBottom: '20px',
    letterSpacing: '1px',
    fontSize: '30px',
    border: '4px',
};

function Exp() {
    return (
        <div id="exp">
        <div className="experience-section">
            <h1 style={textStyle}>Languages</h1>
            <p></p>
            <div style={containerStyle}>
                <img src="https://logos-world.net/wp-content/uploads/2023/02/JavaScript-Emblem.png" 
                    alt="JavaScript Logo" style={picStyle} />
                <img src="https://th.bing.com/th/id/OIP.4dQkxLm-cAndV-9OfVjjQwHaE8?w=274&h=183&c=7&r=0&o=5&pid=1.7" 
                    alt="HTML Logo" style={picStyle} />
                <img src="https://th.bing.com/th/id/OIP.yUIb5S_kj98Eg5tT-Onx1AHaHa?w=183&h=183&c=7&r=0&o=5&pid=1.7" 
                    alt="CSS3 Logo" style={picStyle} />
                <img src="https://www.pngitem.com/pimgs/m/664-6644509_icon-react-js-logo-hd-png-download.png" 
                    alt="React JS Logo" style={picStyle} />
                <img src="https://th.bing.com/th/id/R.e607f62504265a56be194f965d3ac672?rik=COWQduMJeH2pBQ&pid=ImgRaw&r=0" 
                    alt="Node JS Logo" style={picStyle} />
                <img src="https://th.bing.com/th/id/OIP.t-wsX5fqusVvbzCsYMehrwHaDX?w=321&h=158&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3"
                    alt="Express JS Logo" style={picStyle} />

                

            </div>
        </div>
        </div>
    );
}

export default Exp;