'use client';

import Link from 'next/link';
import React, { useState, useEffect } from 'react';

const Page = () => {
  const [list, setList] = useState([]);

  useEffect(() => {
    async function fetchBlogs() {
      try {
        const response = await fetch("https://blogs-app-backend-itdk.onrender.com/api/blogs");
        const data = await response.json();
        console.log(data)
        setList(data);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      }
    }
    fetchBlogs();
  }, []);

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h2 style={{ color: "#fff", fontWeight: "800" }}>View Blogs</h2>
      {list.map((ele) => (

          <Link
          href={`/blog/${ele._id}`}
            key={ele._id}
            style={{ textDecoration: 'none', color: 'inherit' }}
          >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              border: "1px solid #ddd",
              borderRadius: "8px",
              padding: "15px",
              margin: "10px 0",
              backgroundColor: "#f9f9f9",
              boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
            }}
          >
            <h2 style={{ margin: "0 0 10px", color: "#555" }}>{ele.title}</h2>
            <h4 style={{ margin: "0", color: "#777" }}>{ele.content}</h4>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Page;

