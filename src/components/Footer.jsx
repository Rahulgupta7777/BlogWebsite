import React from "react";

const Footer = () => {
  return (
    <div
      style={{
        maxWidth: "800px",
        margin: "60px auto",
        padding: "20px",
        textAlign: "center",
        fontFamily: "sans-serif",
      }}
    >
      <footer
        style={{
          position: "fixed",
          bottom: 0,
          left: 0,
          width: "100%",
          backgroundColor: "#f5f5f5",
          textAlign: "center",
          fontSize: "14px",
          color: "#555",
          boxShadow: "0 -1px 5px rgba(0,0,0,0.1)",
        }}
      >
        <p style={{ marginTop: "5px" }}>Built  by Rahul Gupta</p>
      </footer>
    </div>
  );
};

export default Footer;
