import React from 'react';
import './Footer.css';
import { Button } from '../utilities/Button';
import { Link } from 'react-router-dom';
import {
  FaLinkedin,
  FaLaptopCode,
  FaGithub
} from 'react-icons/fa';
import { IconContext } from 'react-icons/lib'
import { MdFingerprint } from 'react-icons/md';

function Footer() {
  return (
    <IconContext.Provider value={{color: '#111'}}>
    <div className='footer-container'>
      <section className='social-media'>
        <div className='social-media-wrap'>
          <div className='footer-logo'>
            <Link to='/' className='social-logo'>
              <FaLaptopCode className='navbar-icon' />
               Melvin Gaye
            </Link>
          </div>
          <small className='website-rights'>MELVIN Gaye © 2021</small>
          <div className='social-icons'>
            <Link
              className='social-icon-link'
              to={
                '//www.github.com/melvingaye?tab=repositories'
              }
              target='_blank'
              aria-label='Youtube'
            >
              <FaGithub />
            </Link>
            <Link
              className='social-icon-link'
              to={'//www.linkedin.com/in/melvin-gaye-702406a4/'}
              target='_blank'
              aria-label='LinkedIn'
            >
              <FaLinkedin />
            </Link>
          </div>
        </div>
      </section>
    </div>
    </IconContext.Provider>
  );
}

export default Footer;