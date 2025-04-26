"use client"; 

import Link from 'next/link';

const Navbar = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0px 20px', backgroundColor:"black" }}>
      <Link href="/">
      <img src="../image.png" style={{ width: '100px', borderRadius: '50%', height:"70px"}} />
      </Link>
      <div style={{ display: 'flex', gap: '10px' }}>
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/blog">Blog</Link>
        <Link href="/add">Add Blog</Link>
      </div>
    </div>
  );
};

export default Navbar;
