import React, { useState } from 'react';
import { Spin as Hamburger } from 'hamburger-react';
import Drawer from 'react-modern-drawer';
import 'react-modern-drawer/dist/index.css';
import { RxCross2 } from 'react-icons/rx';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import './Header.css';
import ComponentWrapper from '../../../wrappers/ComponentWrapper';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  // states ----------------->
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  // methods ------------------->
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };

  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <React.Fragment>
      <div className='headerContainer'>
        <ComponentWrapper>
          <div className='header'>
            {/* logo ----->  */}
            <Link to='/'>
              <img src='/frontend/assets/logo.svg' className='logoImg' alt='' />
            </Link>
            {/* links ------>  */}
            <div className='links'>
              {links.map((item, index) => {
                const isActive = location.pathname === item.path;
                return (
                  <Link
                    key={index}
                    to={item.path}
                    className={`${isActive ? 'activeLink' : 'link'}`}
                  >
                    {item.name}
                  </Link>
                );
              })}
            </div>
            {/* button --------------->  */}
            {location.pathname === '/stake' ? (
              <button className='lgBtn btn'>Connect</button>
            ) : (
              <button className='lgBtn btn' onClick={() => {
                scrollToTop();
                navigate('/stake');
              }}>Stake Now</button>
            )}
            {/* drawer for small screen ------------>  */}
            <div className='hamburgerContainer'>
              <Hamburger
                className='hamburger'
                color='#06f'
                rounded
                size={28}
                toggled={isOpen}
                toggle={setIsOpen}
              />
              <Drawer
                open={isOpen}
                onClose={toggleDrawer}
                direction='right'
                className='darwer'
              >
                <div className='drawerBody'>
                  {/* =========>top bar */}
                  <div className='topBar'>
                    <div className='crossIconCon'>
                      <RxCross2 onClick={toggleDrawer} className='crossIcon' />
                    </div>
                  </div>
                  {/* links ---------->  */}
                  <div className='dLinks'>
                    {links.map((item, index) => {
                      const isActive = location.pathname === item.path;
                      return (
                        <Link
                          to={item.path}
                          key={index}
                          onClick={() => setIsOpen(false)}
                          className='dLin'
                        >
                          {item.name}
                        </Link>
                      );
                    })}
                  </div>
                  {/* button ---------------->  */}
                  {location.pathname === '/stake' ? (
                    <button className='dBtn btn'>Connect</button>
                  ) : (
                    <button className='dBtn btn'> Stake Now</button>
                  )}
                </div>
              </Drawer>
            </div>
          </div>
        </ComponentWrapper>
      </div>
    </React.Fragment>
  );
};

const links = [
  {
    path: '/',
    name: 'home',
  },
  {
    path: '/stake',
    name: 'stake',
  },
  {
    path: '#',
    name: 'docs',
  },
];

export default Header;
