// -------------------------------------------------
// Packages
// -------------------------------------------------
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// -------------------------------------------------
// Components
// -------------------------------------------------
import { Error } from '../pages/Error';
import { Login } from '../pages/Login';
import { Blouses } from '../pages/Blouses';
import { BuyBlouse } from '../pages/BuyBlouse';
import { Profile } from '../pages/Profile';
import { Protected } from '../pages/Protected';

export const RoutesComponent = (): JSX.Element => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />

        <Route path="/posts" element={<Protected />}>
          <Route path="/posts" element={<Profile />}>
            <Route index element={<Blouses />} />
            <Route path="/posts/:id" element={<BuyBlouse />} />
          </Route>
        </Route>

        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
};
