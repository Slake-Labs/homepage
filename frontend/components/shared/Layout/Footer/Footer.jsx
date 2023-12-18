import React from 'react';
import ComponentWrapper from '../../../wrappers/ComponentWrapper';
import { FaTwitter } from 'react-icons/fa';
import { FaDiscord } from 'react-icons/fa';
import { FaMediumM } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <div className='footer-con'>
      <ComponentWrapper>
        <div className='fContainer'>
          {/* logo -------------->  */}

          <div className='logo-container'>
            <Link to='/'>
              <img src='/frontend/assets/logo.svg' className='logo-image ' alt='' />
            </Link>
          </div>
          {/* links ------>  */}
          <div className='links-container'>
            {footerLinks.map((item, index) => {
              return (
                <Link className='fLink' key={index} to={item.path}>
                  {item.name}
                </Link>
              );
            })}
          </div>
          {/* social icons ----------->  */}
          <div className='socialIconsContainer'>
            <div className='socialLinkCon'>
              <FaGithub className='gitHubIcon' />
            </div>
            <div className='socialLinkCon'>
              <FaMediumM className='mediumIcon' />
            </div>
            <div className='socialLinkCon'>
              <FaDiscord className='discordIcon' />
            </div>
            <div className='socialLinkCon'>
              <FaTwitter className='twitterIcon' />
            </div>
          </div>
        </div>
      </ComponentWrapper>
    </div>
  );
};

const footerLinks = [
  {
    path: '#',
    name: 'about us',
  },
  {
    path: '#',
    name: 'stats',
  },
  {
    path: '#',
    name: 'blog',
  },
  {
    path: '#',
    name: 'faq',
  },
  {
    path: '#',
    name: 'DeFi',
  },
];

export default Footer;
