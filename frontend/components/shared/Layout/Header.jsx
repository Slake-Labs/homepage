import React, { useState } from 'react';
import ComponentWrapper from '../../wrappers/ComponentWrapper';
import { Spin as Hamburger } from 'hamburger-react';
import Drawer from 'react-modern-drawer';
import 'react-modern-drawer/dist/index.css';
import { RxCross2 } from 'react-icons/rx';
import { Link } from 'react-router-dom';
import Button from '../Button/Button';
import { useLocation } from 'react-router-dom';
import ConnectButton from '../Button/ConnectButton';
import Modal from '../Modal/Modal';

const Header = () => {
  // states ----------------->
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const [isModal, setIsModal] = useState(false);

  // methods ------------------->
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <React.Fragment>
      <div className='w-full h-[70px] md:h-[86px] bg-white'>
        <ComponentWrapper styles='h-full'>
          <div className='w-full flex justify-between items-center font-inter h-full'>
            {/* logo ----->  */}
            <Link to='/'>
              <img
                src='/assets/logo.svg'
                className='max-w-[155px] md:max-w-[162px] h-[45px] md:h-[50px] object-contain'
                alt=''
              />
            </Link>
            {/* links ------>  */}
            <div className='hidden md:flex justify-center items-center gap-14'>
              {links.map((item, index) => {
                const isActive = location.pathname === item.path;
                return (
                  <Link
                    key={index}
                    to={item.path}
                    className={`${
                      isActive
                        ? 'text-blue-main after:bg-blue-main'
                        : 'text-black after:bg-black'
                    } font-satoshiM capitalize text-[18px] font-medium relative after:absolute after:w-0 after:bottom-0 after:left-0 after:h-[2px] hover:after:w-full after:duration-300`}
                  >
                    {item.name}
                  </Link>
                );
              })}
            </div>
            {/* button --------------->  */}
            {location.pathname === '/stake' ? (
              <ConnectButton
                event={() => {
                  setIsModal(true);
                }}
                styles='w-[160px] h-[50px] md:block hidden font-satoshiM btnGr text-white text-[16px] font-semibold '
              >
                Connect
              </ConnectButton>
            ) : (
              <Button styles='w-[160px] md:block hidden h-[50px] font-satoshiM btnGr text-white text-[16px] font-semibold '>
                Stake Now
              </Button>
            )}
            {/* drawer for small screen ------------>  */}
            <div className='md:hidden w-full flex justify-end items-center '>
              <Hamburger
                className='text-white-main'
                color='#06F'
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
                <div className='w-full flex flex-col p-7 justify-center items-center '>
                  {/* =========>top bar */}
                  <div className='w-full flex justify-end items-center'>
                    <div className='w-[36px] h-[36px] border-[2px] border-blue-main rounded-full flex justify-center items-center'>
                      <RxCross2
                        onClick={toggleDrawer}
                        className='text-[30px] text-blue-main '
                      />
                    </div>
                  </div>
                  {/* links ---------->  */}
                  <div className='flex flex-col justify-center items-center gap-6 mt-16'>
                    {links.map((item, index) => {
                      const isActive = location.pathname === item.path;
                      return (
                        <Link
                          to={item.path}
                          key={index}
                          onClick={() => setIsOpen(false)}
                          className={`${
                            isActive
                              ? 'text-blue-main after:bg-blue-main'
                              : 'text-black after:bg-black'
                          } font-satoshiM capitalize text-[20px] font-medium relative after:absolute after:w-0 after:bottom-0 after:left-0 after:h-[2px] hover:after:w-full after:duration-300`}
                        >
                          {item.name}
                        </Link>
                      );
                    })}
                  </div>
                  {/* button ---------------->  */}
                  {location.pathname === '/stake' ? (
                    <ConnectButton
                      event={() => {
                        setIsOpen(false);
                        setIsModal(true);
                      }}
                      styles='w-[200px] h-[60px] font-satoshiM btnGr text-white text-[18px] font-semibold mt-10'
                    >
                      Connect
                    </ConnectButton>
                  ) : (
                    <Button
                      event={() => setIsOpen(false)}
                      styles='w-[200px] h-[60px] font-satoshiM btnGr text-white text-[18px] font-semibold mt-10'
                    >
                      Stake Now
                    </Button>
                  )}
                </div>
              </Drawer>
            </div>
          </div>
        </ComponentWrapper>
      </div>
      {isModal && (
        <Modal
          setIsOpen={() => setIsModal(false)}
          sizes='w-[350px] sm:w-[400px] md:w-[500px]'
        >
          <div className='w-full flex flex-col gap-2 sm:gap-3 justify-center items-center'>
            <p className='text-black font-satoshiB text-[26px] sm:text-[30px] opacity-90'>
              Connect with ICP
            </p>
            <p className='text-black font-satoshiM text-center opacity-70 leading-[22px] sm:leading-[26px] text-[16px] sm:text-[18px]'>
              Connect your account to ICP to access additional features and
              functionalities.
            </p>
            <Button styles='w-[200px] h-[55px] btnGr text-white text-[20px] mt-1 sm:mt-3 font-satoshiM'>
              Connect
            </Button>
          </div>
        </Modal>
      )}
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
