import React from "react";

const page = () => {
  return (
    <div
      style={{
        backgroundColor: "#f9f9f9",
        padding: "40px",
        borderRadius: "12px",
        maxWidth: "800px",
        margin: "40px auto",
        boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
      }}
    >
      <h2
        style={{
          textAlign: "center",
          fontSize: "32px",
          marginBottom: "20px",
          color: "#333",
        }}
      >
        About Us
      </h2>
      <p style={{ fontSize: "18px", lineHeight: "1.6", color: "#555" }}>
        Welcome to our world of creativity and innovation! We are a passionate
        team dedicated to building amazing digital experiences that inspire and
        engage people across the globe.
      </p>
   
      <p
        style={{
          fontSize: "18px",
          lineHeight: "1.6",
          color: "#555",
          marginTop: "20px",
        }}
      >
        Through this app, you'll get to explore:
        <ul>
          <li>🛠️ Routing and Dynamic Pages in Next.js</li>
          <li>💾 Client-side Storage with localStorage</li>
          <li>🧠 State & Form Management</li>
          <li>🎨 UI Structure using inline CSS</li>
          <li>🚀 Deploying your app with Vercel</li>
        </ul>
        Whether you're just starting with web development or looking to strengthen your Next.js skills, this project is a great way to learn by doing.
        <br /><br />
        Happy coding! 💻✨
      </p>
    </div>
  );
};

export default page;
