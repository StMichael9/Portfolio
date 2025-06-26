import { QRCode } from 'qrcode.react';

function BusinessCard() {
  return (
    <div style={{
      width: 336, height: 192,
      border: "1px solid #ccc",
      padding: 16,
      borderRadius: 8,
      fontFamily: "sans-serif",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between"
    }}>
      <div>
        <h2>St. Michael Egenamba</h2>
        <p>Software Engineer</p>
        <p>Stmichaelegenamba@gmail.com</p>
        <p>https://github.com/StMichael9</p>
      </div>
      <QRCode
        value="https://main.d1h4ggnzahag5a.amplifyapp.com"
        size={80}
        bgColor="#ffffff"
        fgColor="#000000"
        level="H"
        includeMargin={true}
      />
    </div>
  );
}

export default BusinessCard;
