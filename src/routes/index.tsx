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
  const PrivateRoute = ({ Item }) => {
    const isAuthenticated = true;

    /* const { signed } = useAuth(); */

    return isAuthenticated > 0 ? <Item /> : <Signin />;
  };
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Signin />} />

        <Route path="/home" element={<PrivateRoute Item={Home} />} />

        <Route path="/signup" element={<Signup />} />

        <Route path="*" element={<Signin />} />
      </Routes>
    </BrowserRouter>
  );
};
