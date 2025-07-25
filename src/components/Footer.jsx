import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        {/* Brand & Social */}
        <div className="footer-brand">
          <h2 className="footer-logo">GlocalShipeComers</h2>
          <p>Delivering products globally with care and speed.</p>
          <div className="social-icons">
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaLinkedinIn /></a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="footer-quick-links">
          <h4>Quick Links</h4>
          <ul className="footer-links">
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/services">Services</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>

        {/* Support */}
        <div className="footer-support">
          <h4>Customer Support</h4>
          <ul className="footer-links">
            <li><a href="/faq">FAQs</a></li>
            <li><a href="/returns">Return Policy</a></li>
            <li><a href="/shipping">Shipping Info</a></li>
            <li><a href="/support">Support Center</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div className="footer-contact">
          <h4>Contact</h4>
          <p>Email: support@glocalshipe.com</p>
          <p>Phone: +91 9876543210</p>
        </div>
      </div>

      <div className="footer-bottom">
        &copy; {new Date().getFullYear()} GlocalShipeComers. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
