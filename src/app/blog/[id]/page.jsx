'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';

const BlogDetails = () => {
  const { id } = useParams();  // Dynamic ID from the URL
  const [blog, setBlog] = useState(null);
  const [error, setError] = useState(null);  // Initialize error state

  useEffect(() => {
    async function fetchBlog() {
      try {
        const response = await fetch(`https://blogs-app-backend-itdk.onrender.com/api/blogs/${id}`);
        if (!response.ok) {
          throw new Error('Failed to fetch blog');
        }
        const data = await response.json();
        setBlog(data);
      } catch (error) {
        setError(error.message);
      }
    }
    fetchBlog();
  }, [id]);

  if (error) {
    return <div style={{ color: 'red', padding: '20px' }}>Error: {error}</div>;
  }

  if (!blog) {
    return <div>Loading...</div>;
  }

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1 style={{ color: 'white', fontWeight: '800' }}>{blog.title}</h1>
      <p style={{ color: 'lightgrey' }}>{blog.content}</p>
    </div>
  );
};

export default BlogDetails;
