import React from 'react';
import './Footersocial.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faWhatsapp, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';

const   Footersocial = () => {
  return (
    <div className='footer-social'>
      <div className='icon'>
        <FontAwesomeIcon icon={faInstagram} size="2x" /> Instagram
      </div>
      <div className='icon'>
        <FontAwesomeIcon icon={faWhatsapp} size="2x" /> WhatsApp
      </div>
      <div className='icon'>
        <FontAwesomeIcon icon={faTwitter} size="2x" /> Twitter
      </div>
      <div className='icon'>
        <FontAwesomeIcon icon={faYoutube} size="2x" /> YouTube
      </div>
    </div>
  );
};

export default Footersocial;
