'use client';

import React, { useState } from 'react';

const Page = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  async function handleSubmit(e) {
    e.preventDefault();

    const formData = new FormData();
    formData.append('title', title);
    formData.append('content', content);

    try {
      const response = await fetch('https://blogs-app-backend-itdk.onrender.com/api/blogs', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        const result = await response.json();
        setTitle('');
        setContent('');
      } else {
        console.error('Failed to add blog');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  }

  return (
    <div style={{ padding: "40px" }}>
      <h2 style={{ textAlign: "center" }}>Add Blog</h2>

      <div style={{
        display: "flex",
        justifyContent: "center",
        marginTop: "30px"
        
      }}>
        <form onSubmit={handleSubmit} style={{
          display: "flex",
          flexDirection: "column",
          gap: "15px",
          width: "100%",
          maxWidth: "500px",
        }}>
          <input
            type="text"
            name="title"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            style={{ padding: "10px",border: "1px solid grey", fontSize: "16px" }}
          />
          <textarea
            name="content"
            placeholder="Content"
            rows="6"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            style={{ padding: "10px",border: "1px solid grey", fontSize: "16px", resize: "vertical" }}
          ></textarea>
        <button
  type="submit"
  style={{
    padding: "12px 24px",
    backgroundColor: "#000",
    color: "#fff",
    cursor: "pointer",
    fontSize: "16px",
    border: "1px solid white",
    borderRadius: "999px",
    transition: "background-color 0.3s ease",
    marginTop: "20px",
  }}
>
  Click to Add Blog
</button>

        </form>
      </div>
    </div>
  );
};

export default Page;
