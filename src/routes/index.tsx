// -------------------------------------------------
// Packages
// -------------------------------------------------
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// -------------------------------------------------
// Components
// -------------------------------------------------
import { Home } from '../pages/Home';
import { Signin } from '../pages/Signin';
import { Signup } from '../pages/Signup';

export const RoutesComponent = (): JSX.Element => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Signin />} />

        <Route path="/home" element={<Home />} />

        <Route path="/signup" element={<Signup />} />

        <Route path="*" element={<Signin />} />
      </Routes>
    </BrowserRouter>
  );
};
