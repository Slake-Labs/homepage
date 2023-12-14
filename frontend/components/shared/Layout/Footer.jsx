import React from 'react';
import ComponentWrapper from '../../wrappers/ComponentWrapper';
import { FaTwitter } from 'react-icons/fa';
import { FaDiscord } from 'react-icons/fa';
import { FaMediumM } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className='w-full mt-10 h-[200px] bg-white'>
      <ComponentWrapper styles='h-full'>
        <div className='w-full h-full grid gap-x-4 grid-cols-[2fr,4fr] lg:grid-cols-[1fr,3fr,1fr] justify-center items-center'>
          {/* logo -------------->  */}
          <div className='w-full'>
            <Link to='/'>
              <img
                src='/assets/logo.svg'
                className='max-w-[155px] md:max-w-[182px] h-[45px] md:h-[65px] object-contain'
                alt=''
              />
            </Link>
          </div>
          {/* links ------>  */}
          <div className='flex flex-wrap justify-end lg:justify-center items-center gap-4 md:gap-8 lg:gap-12'>
            {footerLinks.map((item, index) => {
              return (
                <Link
                  key={index}
                  to={item.path}
                  className='text-black capitalize font-satoshiM text-[16px] md:text-[18px] font-medium relative after:absolute after:w-0 after:bottom-0 after:left-0 after:h-[2px] after:bg-black hover:after:w-full after:duration-300'
                >
                  {item.name}
                </Link>
              );
            })}
          </div>
          {/* social icons ----------->  */}
          <div className='flex lg:col-span-1 col-span-2 justify-center items-center gap-6'>
            {socialLinks.map((item, index) => {
              return (
                <Link
                  to='#'
                  key={index}
                  className='w-[45px] md:w-[55px] hover:opacity-80 h-[45px] md:h-[55px] hover:scale-105 duration-200 rounded-full btnGr flex justify-center items-center'
                >
                  {item.name}
                </Link>
              );
            })}
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

const socialLinks = [
  {
    path: '#',
    name: <FaGithub className='text-[32px] md:text-[36px] text-white' />,
  },
  {
    path: '#',
    name: <FaMediumM className='text-[28px] md:text-[32px] text-white' />,
  },
  {
    path: '#',
    name: <FaDiscord className='text-[30px] md:text-[34px] text-white' />,
  },
  {
    path: '#',
    name: <FaTwitter className='text-[28px] md:text-[34px] text-white' />,
  },
];
export default Footer;
