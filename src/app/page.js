import React from 'react';

const Page = () => {

    return (<div style={{
      backgroundColor: "#f9fafb",
      padding: "40px",
      borderRadius: "12px",
      maxWidth: "800px",
      margin: "60px auto",
      boxShadow: "0 6px 12px rgba(0,0,0,0.08)"
    }}>
      <h2 style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "28px",
        marginBottom: "20px",
        color: "black",
        gap: "12px"
      }}>
        Newton Blog x Chota Don
        <img 
          src="../don.png" 
          alt="Don" 
          style={{
            width: "70px", 
            height: "100px", 
            borderRadius: "50%", 
            border:"1px solid black",
            objectFit: "cover"
          }} 
        />
      </h2>
    
      <p style={{
        fontSize: "17px",
        lineHeight: "1.6",
        color: "var(--secondary-color)",
        textAlign: "center"
      }}>
        Share your thoughts, experiences, and ideas with the world — all through code.
Create, publish, and explore blogs built entirely with Next.js App Router and localStorage.
No backend. No database. Just you and your words.
      </p>
    </div>)
}

export default Page;
