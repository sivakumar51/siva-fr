import React from 'react';
import './Footer.css'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faWhatsapp, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="footer">
       
         
  < div  className='footer-row-1'>
      <div className="footer-item"><p>About</p></div>
      <div className="footer-item">Contact</div>
      <div className="footer-item">information</div>
      <div className="footer-item">customers</div>
      <div className="footer-item">FR Aim</div>
      </div>

 < div  className='footer-row-2'>
         <div className="footer-item"><p>Help</p></div>
      <div className="footer-item">Payments</div>
      <div className="footer-item">Shipping</div>
      <div className="footer-item">Returns</div>
      <div className="footer-item">Report</div>
      <div className="footer-item">Querys</div></div>

      < div  className='footer-row-3'>
         <div className="footer-item"><p>Formers policy</p></div>
      <div className="footer-item">Returns</div>
      <div className="footer-item">privacy</div>
      <div className="footer-item">Compliance</div>
      <div className="footer-item">Term of users</div>
      <div className="footer-item">Fr cart</div></div>

      < div  className='footer-row-4'>
       <div className="footer-item"><p>Frs Groups</p></div>
      <div className="footer-item">Organic FRS</div>
      <div className="footer-item">SKS Frs</div>
      <div className="footer-item">Con&in FRS</div>
       </div>

       <div className='footer-row-5'>
       <div>
         <p>Contact Us</p>
  </div>
  <div>
    <FontAwesomeIcon icon={faInstagram} size="2x" /> Instagram
  </div>
  <div>
    <FontAwesomeIcon icon={faWhatsapp} size="2x" /> WhatsApp
  </div>
  <div>
    <FontAwesomeIcon icon={faTwitter} size="2x" /> Twitter
  </div>
  <div>
    <FontAwesomeIcon icon={faYoutube} size="2x" /> YouTube
  </div>
</div>

    </footer>
  );
};

export default Footer;
