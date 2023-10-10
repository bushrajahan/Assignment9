import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div>
     <footer className="footer p-10 bg-blue-800 text-white">
  <nav>
     <img src="/public/logo.webp" alt="" />
  </nav> 
  <nav>
    <header className="footer-title">Company</header> 
     <Link to="/">Home</Link>
    <Link to="/services">Services</Link>
    <Link to="/testimonia">Testimonial</Link>
    <Link to="/footer">Footer</Link>
  </nav> 
  <nav>
    <header className="footer-title">Legal</header> 
    <a className="link link-hover">Terms of use</a>
    <a className="link link-hover">Privacy policy</a>
    <a className="link link-hover">Cookie policy</a>
  </nav>
</footer>
    </div>
  );
};

export default Footer;