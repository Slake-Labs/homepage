import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './shared/Layout/Header/Header';
import Footer from './shared/Layout/Footer/Footer';
import Home from '../pages/Home';
import Stake from '../pages/Stake/Stake';
import Banner from './shared/Layout/Banner/Banner';
import Defi from '../pages/Defi/Defi';

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Banner />
      <Header />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/stake' element={<Stake />}></Route>
        <Route path='/defi' element={<Defi />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default AppRouter;
